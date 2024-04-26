// Day 42 challenge Question 124

// Create a function inside an object that returns the object's own name property using the this keyword.

const person = {        // create an object
    name: "Awais",
    getName: function () {  // create a function inside an object
        return this.name;       // returns the object name property
    },
};

console.log (person.getName());