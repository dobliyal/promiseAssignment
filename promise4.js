function fetchWithRetry(url, retries) {
    return new Promise((resolve, reject) => {
        const attemptFetch = (Count) => {
            fetch(url)
                .then((data) => resolve(data))
                .catch((error) => {
                    if (Count <= 0) {
                        reject(`Failed after ${retries} attempts: ${error.message}`);
                    } else {
                        console.log(`Retrying... (${retries - Count + 1})`);
                        attemptFetch(Count - 1);
                    }
                });
        };
        attemptFetch(retries);
    });
}

fetchWithRetry('https://temp.com/v1/bpi/currentprice.json', 3)
    .then((data) => console.log('Fetched data:', data))
    .catch((error) => console.error(error));
