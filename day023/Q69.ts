// Day 23 Challenge Question 69

// Divide two numbers and finde the reminder and quotent.

// create a function to divide two numbers and find their quotent and reminder.
function quotent_reminder(num1:number, num2:number): {quotent: number; reminder:number}{
// calculate quotient and reminder
    let quotent = Math.floor(num1 / num2);  // Math.floor to returns the greatest int less than or equal to its argument.
    let reminder = (num1 % num2);
    return {quotent, reminder};  // return in object
}

console.log(quotent_reminder(50,10));