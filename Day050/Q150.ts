// Day 50 Challenge Question 150
// Describe how asynchronous callbacks differ from synchronous code execution.

// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, 
// file operations, or set timers without blocking the main thread, enabling the continuation of code execution. 
// Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.

// Synchronous example
console.log("before synchronous");
// Simulate a synchronous blocking operation
for (let i = 0; i < 100; i++) {} 
console.log("After synchronous");

// Asynchronous example
console.log("Before asynchronous");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous");
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.