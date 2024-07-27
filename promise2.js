function Task2() {
    console.log("Program started");
    console.log("Program in progress...");

    const myPromise = new Promise((resolve, reject) => {
        console.log("Promise is pending...");
        setTimeout(() => {
            resolve("Step 1 complete");
        }, 3000);
    });

    myPromise.then((message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Step 2 complete");
            }, 3000);
        });
    }).then((message) => {
        console.log(message);
    });
}

Task2();
