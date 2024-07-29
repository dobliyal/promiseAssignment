async function fetchAllWithErrors(urls) {
    try {
        const results = await Promise.all(
            urls.map(async (url) => {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${url}`);
                }
                return await response.json();
            })
        );
        return results;
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}

fetchAllWithErrors(['https://jsonplaceholder.typicode.com/todos/1','https://api.coindesk.com/v1/bpi/currentprice.json'])
    .then(results => console.log('Fetched data:', results))
    .catch(error => console.error(error.message));
