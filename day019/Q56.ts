// Day 19 Challenge Question 56

/*  Create a array of mixed items and filter them out in separate category */

let box = [1, "Vegetables", 2, "Fruits", 3, "Grocery"];

// Now, i want to separate the string values in the separate list.
/*  separate the words from the box by using .filter method
    and applied a function to filter the values whose type is string.
*/
let separate_words = box.filter(item => typeof item === "string"); // fileter the string values from the box.
console.log(separate_words);

let separate_numbers = box.filter(item => typeof item === "number"); // filter the numbers from the box
console.log(separate_numbers);