// Day 42 challenge Question 124
// Create a function inside an object that returns the object's own name property using the this keyword.
const person = {
    name: "Awais",
    getName: function () {
        return this.name; // returns the object name property
    },
};
console.log(person.getName());
export {};
