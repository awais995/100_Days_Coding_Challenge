// Day 32 Challenge Question 95
// write a function that uses the .filter() method to return an array of numbers greater than 10.
function greate_than_ten(numbers) {
    return numbers.filter(number => number > 10);
}
let numbers = [20, 10, 6, 8, 5, 7, 30, 60, 90];
console.log(greate_than_ten(numbers));
export {};
