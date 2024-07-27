function fetchWithRetry(url, retries) {
    return new Promise((resolve, reject) => {
        const attemptFetch = (retryCount) => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => resolve(data))
                .catch((error) => {
                    if (retryCount <= 0) {
                        reject(`Failed after ${retries} attempts: ${error.message}`);
                    } else {
                        console.log(`Retrying... (${retries - retryCount + 1})`);
                        attemptFetch(retryCount - 1);
                    }
                });
        };

        attemptFetch(retries);
    });
}

fetchWithRetry('https://api.coindesk.com/v1/bpi/currentprce.json', 3)
    .then((data) => console.log('Fetched data:', data))
    .catch((error) => console.error(error));
