// Day 49 Challenge Question 145
// function that accepts a callback function and invokes it with its given arguments.
function executeCallbacks(callback, arg1, arg2) {
    callback(arg1, arg2); //Invoke the call back specified arguments
}
// Example callback functions that add two numbers
const add = (a, b) => {
    console.log(a + b);
};
executeCallbacks(add, 5, 7);
export {};
