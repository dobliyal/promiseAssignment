function fetchWithRace(urls, timeout) {
    const timeoutPromise = new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), timeout)
    );
    const fetchPromise =urls.map(url=>fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`Error fetching ${url}: ${response.statusText}`);
          }
        return response.json(); 
    })
    )
    return Promise.race([...fetchPromise, timeoutPromise]);
}
const urls = [
    "https://fakestoreapi.com/products/1","https://fakestoreapi.com/products/2",
    "https://api.genderize.io/?name=luc",
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
   ];
fetchWithRace(urls, 1000)
    .then(data => console.log(data))
    .catch(error => console.error(error));