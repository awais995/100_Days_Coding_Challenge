// Day 8 Challenge Question 24
// Conditional Tests wide range of comparison Tests
//Test 1
//Logical Tests && and || OR operators
let isweekend = true;
let isOperational = false;
console.log(isweekend && isOperational); // false  && Operators one conditon false result false.
console.log(isweekend || isOperational); // true    || operators one condition true result true.
console.log(!isweekend); // change the reuslt true into false.
console.log(!isOperational); // change the reuslt false into true.
// Day 8 Challenge Question 24
// Conditional Tests wide range of comparison Tests
//Test 2
//Conditional Statements if else
let num2 = 7;
// if conditon true print the if statement
if (num2 > 5) {
    console.log("number is greater than 5");
}
else {
    console.log("number is less than 5");
}
// if conditon false prtint the else statement
if (num2 > 10) {
    console.log("number is greater than 10");
}
else {
    console.log("number is less than 10");
}
// Day 8 Challenge Question 24
// Conditional Tests wide range of comparison Tests
//Test 3
// Declare an array
let countries = ["Pakistan", "India", "China", "Iran"]; // Define array
//check whether the item is in the list or not
console.log(`\nIs "Pakistan" in countries? ${countries.includes("Pakistan")}`); // true
console.log(`Is "China" not in countries? ${!countries.includes("China")}\n`); // false
export {};
