async function conditionalChaining(initialUrl, url1, url2) {
    try {
        const response = await fetch(initialUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${initialUrl}`);
        }
        const data = await response.json();

        let secondaryUrl;
        if (data.someCondition) { 
            secondaryUrl = url1;
        } else {
            secondaryUrl = url2;
        }

        const secondaryResponse = await fetch(secondaryUrl);
        if (!secondaryResponse.ok) {
            throw new Error(`Failed to fetch: ${secondaryUrl}`);
        }
        return await secondaryResponse.json();

    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}

conditionalChaining('https://fakestoreapi.com/products/1', 'https://fakestoreapi.com/products/2','https://fakestoreapi.com/products/3')
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error(error.message));
