// Day 22 Challenge Question 66

// Logical AND Verification: Create a function that checks two boolean values (true or false).

// Create a function to chech true or false
function checkLogic(val1:boolean, val2:boolean): boolean {
    return val1 && val2;
}
// used && function to check if both are true == true
console.log(checkLogic(true, true));  // true
//check one val is false return false
console.log(checkLogic(true, false));  // false