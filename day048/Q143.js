// Day 48 Challenge Question 143
// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
function conditionalPromise() {
    return new Promise((resolve, reject) => {
        const number = Math.random() > 0.5; //Inside the Promise constructor, it generates a random number between 0 and 1 using Math.random()
        if (number) {
            resolve("Passed!"); // if generated number is greater than 0.5, it resolves the Promise with the string "Passed!
        }
        else {
            reject(new Error("failed!")); // failed
        }
    });
}
const promise = conditionalPromise(); // conditionalPromise() to obtain a Promise, and assigns it to the variable promise.
promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error.message);
});
export {};
