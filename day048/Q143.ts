// Day 48 Challenge Question 143

// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

function conditionalPromise(): Promise<string>{  //conditionalPromise that returns a Promise
    return new Promise ((resolve, reject) =>{
      const number = Math.random() > 0.5; //Inside the Promise constructor, it generates a random number between 0 and 1 using Math.random()
      if (number){
        resolve("Passed!");  // if generated number is greater than 0.5, it resolves the Promise with the string "Passed!
      } else {
        reject(new Error("failed!")); // failed
      }
    });
}
const promise = conditionalPromise(); // conditionalPromise() to obtain a Promise, and assigns it to the variable promise.
promise.then((value)=>{ //.then() method to attach a callback function to the Promise
    console.log(value);
}).catch((error) =>{    // .catch() method to handle errors in case the Promise is rejected
    console.error(error.message);
});