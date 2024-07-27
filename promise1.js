function Task1(){
console.log( "Program started" );
console.log("Promise is pending...");
console.log("Program in progress...");

const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise reject after 3 seconds");
    },2000);
    setTimeout(()=>{
        resolve("Promise resolved after 2 seconds");
    },3000);
});

myPromise.then(
    (message)=>{
      console.log(message);
      console.log("Program complete");
    }
).catch((err)=>{
    console.log(err);
    console.log("Promise reject");
})


}

Task1();