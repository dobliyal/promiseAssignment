async function fetchSequentially(urls) {
    const results = [];

    for (const url of urls) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${url}`);
            }
            const data = await response.json();
            results.push(data);
        } catch (error) {
            throw new Error(`Error fetching ${url}: ${error.message}`);
        }
    }

    return results;
}

fetchSequentially(['https://fakestoreapi.com/products/1', 'https://fakestoreapi.com/products/2'])
    .then(results => console.log('Fetched data:', results))
    .catch(error => console.error(error.message));
