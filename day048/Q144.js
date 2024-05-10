// Day 48 Challenge Question 144
// Explain the use of Promise.all() method with an example.
function asyncfunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('first async function completed.');
        }, 1000);
    });
}
;
function asyncfunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2nd async function completed.');
        }, 2000);
    });
}
;
// Now we use promise.all() to wait for both promises to resolve.
Promise.all([asyncfunction1(), asyncfunction2()])
    .then((results) => {
    console.log("all async functions completed successfully:.");
    console.log((results[0])); // result of the first async function.
    console.log((results[1])); // result of the 2nd async function.
})
    .catch((error) => {
    console.log('One of the async functions failed.');
    console.error(error);
});
export {};
