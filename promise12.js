async function fetchWithExponentialBackoff(url, maxRetries) {
    let retries = 0;
    const delay = (duration) => new Promise(resolve => setTimeout(resolve, duration));

    while (retries <= maxRetries) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok`);
            }
            return await response.json();
        } catch (error) {
            if (retries === maxRetries) {
                throw new Error(`Failed after ${maxRetries} retries: ${error.message}`);
            }
            const backoffTime = 2 ** retries * 100;
            console.log(`Retrying in ${backoffTime}ms...`);
            await delay(backoffTime);
            retries++;
        }
    }
}

fetchWithExponentialBackoff('https://fakestoreapi.com/products/1', 3)
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error(error.message));
