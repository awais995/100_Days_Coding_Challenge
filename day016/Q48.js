// Day 16 Challenge Question 48
// Combining arrays with spread operators
let laptop_Set1_Price = [50000, 70000, 60000];
let laptop2_Set_Price = [150000, 200000, 250000];
let merge = [...laptop_Set1_Price, ...laptop2_Set_Price];
// used a sort method with call back function for print the values in ascending order
merge.sort((a, b) => a - b);
console.log(merge);
// used a sort method with call back function for print the values in descending order
merge.sort((a, b) => b - a);
console.log(merge);
export {};
