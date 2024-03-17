// Day 16 Challenge Question 46

// Enhance Laptop Object:
// I have created an interface to define the structure of an object properties and methods.
interface laptop {
    make: string;
    model: string;
    year: number;
    describe: any
};
let laptop: laptop ={       // create an object to store the values in keys.
    make: "Apple MacBook",
    model: "Air 13 (M3)",
    year: 2024,
    describe: function(){  // Create a function to perfom actions using object properties.
        console.log(`\nThis laptop is ${laptop.make} ${laptop.model} ${laptop.year}.\n`);
    },  
};

laptop.describe(); // Call the function