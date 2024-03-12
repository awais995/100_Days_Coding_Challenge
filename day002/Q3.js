// Day 2 Challenge Question 3
/*
Declare a variable with whitespaces before and after its value and print it.
Then remove the spaces show it clean.
*/
let a = "\t Pakistan\t" + "\n"; //used \t for (tab) & \n for (Line Break)
console.log(a); // print the message.
// used a trim() method to remove whitespaces and line terminators from string.
a = a.trim();
console.log(a);
export {};
