function Task3(){
console.log("Program started");
    console.log("Program in progress...");

    const myPromise = new Promise((resolve, reject) => {
        console.log("Promise is pending...");
        setTimeout(()=>{
            resolve({data: "Hello, friend!", error: null})
        },5000)
    }
)

myPromise.then(
    (message)=>{
        console.log(message);
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
             resolve("First promise chain complete!");
            },2000)
         });
        })
         .then((message)=>{
                 console.log(message);
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Second promise chain complete!");
        },10000)
    })
}).then((message)=>{
console.log(message);
});
}



Task3();