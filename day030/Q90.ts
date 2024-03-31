// Day 30 Challenge Question 90


// Check value is NaN: Demonstarte how to check value is NaN and return a boolean result.

// funcion validates that value is not a number
function check (value: any):boolean{
    return isNaN(value);
}

console.log(check("Pakistan"));

console.log(check(1234));