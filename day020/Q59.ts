// Day 20 Challenge Question 59

// Make a program that create a custom adder this adder can add a specific number to any other number you give them later.

// We have used a nested function: function within a function

/* This statement declares a function named special_number that takes a parameter value of type number. 
It returns a function that takes a parameter number returns a number.
*/
function special_number(value:number):(number:number) => number{
    return function (number:number): number{ //inner function It takes a number as input and returns the sum of that number and the value
        return number + value
    };
};

let magicbox = special_number(7); // function invoking with adding special_number 7 to its input.
console.log(magicbox(10));  // function call with input number