// Day 49 Challenge Question 146
// Create a function that accepts a callback and invokes it with some arguments.
var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// use .filter() method to filter out the number lesser than 50.
var filterNumbers = numbers.filter(function (number) { return number < 50; });
console.log(filterNumbers);
