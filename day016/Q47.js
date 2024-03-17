// Day 16 Challenge Question 47
// Advanced Array Destructuring: Give an array of objects representing different laptops.
// Each make, model and year.
// Use array destructuring to asign the first and second variables the log these variables.
// Ceate lists of objects representing different laptops.
let laptops = [
    { make: "Dell", Model: "E7270", Year: 2016 },
    { make: "HP", Model: "Spectre x360", Year: 2024 },
    { make: "Apple MacBook", Model: "Air 13 (M3)", Year: 2024 },
];
let [laptop1, laptop2] = laptops; // Destructuring the lists and print the 1st and 2nd object list.
console.log(laptop1);
console.log(laptop2);
export {};
