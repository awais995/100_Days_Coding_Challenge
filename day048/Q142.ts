// Day 48 Challenge Question 142

// Creates a promise that resolve with Hello World! after 2 seconds

function helloPromise(): Promise<string>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve("Hello World!");
        }, 2000); // simulating a delay of 2 seconds.
    });
}
const promise = helloPromise();
promise.then((value)=>{
    console.log(value);
});