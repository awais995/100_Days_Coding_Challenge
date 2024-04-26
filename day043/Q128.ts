// Day 43 Challenge Question 128

// Create a function that take multiple parameters and returns the product of all parameters.
const multiplyParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total + number);

console.log(multiplyParameters(1,3,5,7))