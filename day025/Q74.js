// Day 25 Challenge Question 74
// Swapping varibales
// create 2 variables in function
function swapvalues() {
    let a = 5;
    let b = 10;
    console.log(a, b);
    // swapping variables
    let temp = a; // hold a value in temporary variable to pass into b variable
    a = b; // pass b's value to a;
    b = temp; // pass a's value to b
    console.log(a, b);
}
swapvalues();
export {};
