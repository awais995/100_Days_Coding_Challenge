// Day 46 Challenge Question 137
// Demonstrate try-catch block to handle errors.
try { // code that may throw an error
    const result = functionThatThrowError();
    console.log("Result:", result);
}
catch (error) {
    // code handle the error
    console.error("An error Occured:", error);
}
finally {
    // Optional finally block, executes regardless of an error occured or not.
    console.log("Finally, block executed.");
}
function functionThatThrowError() {
    // Simulating a function that might throw an error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        throw new Error("Random number is too low.");
    }
    ;
    return randomNumber;
}
export {};
