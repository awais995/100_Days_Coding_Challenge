// Day 50 Challenge Question 150
// Synchronous example
console.log("before synchronous");
// Simulate a synchronous blocking operation
for (var i = 0; i < 100; i++) { }
console.log("After synchronous");
// Asynchronous example
console.log("Before asynchronous");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous");
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
