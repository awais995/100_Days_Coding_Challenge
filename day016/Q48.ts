// Day 16 Challenge Question 48

/* Create a 2 set of prices and Combining both sets into one...
 with spread operators and sort in Ascending and Descending order*/

let laptop_Set1_Price: number[] = [50000, 70000, 60000];
let laptop2_Set_Price: number[] = [150000, 200000, 250000];

let merge: number[] = [...laptop_Set1_Price, ...laptop2_Set_Price]; // Combined array with spread operator.
// used a sort method with call back function for print the values in ascending order.
merge.sort((a, b) => a - b); 
console.log(merge);

// used a sort method with call back function for print the values in descending order.
merge.sort((a, b) => b - a); 
console.log(merge);
