// Day 23 Challenge Question 68
// Multiplying Decimals and round them 2 decimal places.
function decimals(num1, num2) {
    // used a Math.round to make the result into 2 decimals places
    return Math.round(num1 * num2) / 100;
}
console.log(decimals(1.5, 2.25));
export {};
