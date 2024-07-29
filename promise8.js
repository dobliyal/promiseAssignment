async function fetchAnyWithErrors(urls) {
    const errors = [];

    for (const url of urls) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
            errors.push(`Failed to fetch: ${url}`);
        } catch (error) {
            errors.push(`Error fetching ${url}: ${error.message}`);
        }
    }

    throw new Error(`All requests failed: ${errors.join(', ')}`);
}

fetchAnyWithErrors(['https://fakestoreapi.com/products/1', 'https://fakestoreapi.com/products/2'])
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error(error.message));
