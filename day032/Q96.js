// Day 32 Challenge Question 96
// The function calculates the sum of all numbers in the array.
function sum(numbers) {
    return numbers.reduce((calculate, num) => calculate + num, 0);
}
const numbers = [5, 7, 8, 9, 11];
console.log(sum(numbers));
export {};
