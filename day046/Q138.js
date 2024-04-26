// Day 46 Challenge Question 138
// Describe how to use breakpoints in browser developer tools to debug JavaScript code.
function calculatePrice(price, quantity) {
    // Multiply price to quantity to get total
    let total = price * quantity;
    // Check total exceeds a certain threshold
    if (total > 100) {
        console.log("Total exceeds $100!");
    }
    return total;
}
// Function call to calculate total
let totalPrice = calculatePrice(10, 20);
console.log("Total Price $" + totalPrice);
export {};
