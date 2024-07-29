async function batchFetch(urls, batchSize) {
    const results = [];

    for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        const batchResults = await Promise.all(
            batch.map(async (url) => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch: ${url}`);
                    }
                    return await response.json();
                } catch (error) {
                    return { error: `Error fetching ${url}: ${error.message}` };
                }
            })
        );
        results.push(...batchResults);
    }

    return results;
}


batchFetch(['https://fakestoreapi.com/products/1', 'https://fakestoreapi.com/products/2','https://fakestoreapi.com/products/3'], 2)
    .then(results => console.log('Fetched data:', results))
    .catch(error => console.error(error.message));
