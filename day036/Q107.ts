// Day 036 Challenge Question 107

// write a condition using logical operators that checks if a number is divisible by both 2 and 3.

function check_divisible_number (number:number):boolean{
    return number % 2 === 0 && number % 3 ===0;
}

console.log(check_divisible_number(15));
console.log(check_divisible_number(18));
