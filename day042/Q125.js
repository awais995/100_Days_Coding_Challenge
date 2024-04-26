// Day 42 challenge Question 125
// Modify a method in an object to use the this keyword to access another property in the same objec.
const num = {
    num1: 20,
    num2: 5,
    calculate: function () {
        return this.num1 * this.num2; // returns the object name property
    },
};
console.log(num.calculate());
export {};
