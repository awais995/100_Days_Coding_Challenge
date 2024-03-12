// Day 1
// Question 2
// Name Cases:
let person2 = ("muhammad awais"); // Declare a variable
//Chaging Case Styles
/*
For Title Case i used a split method to break down stings into substring and return into array.
used.map function for iterating each element and applied changes.
l[0].toUpperCase converts to 1st character toUpperCase and concatenate the rest of the characters.
l.substring(1) Capitalized the 1st letter of each word
.join(" ") This joins the modified array into single string.
*/
person2 = person2.split(" ").map((l) => l[0].toUpperCase() + l.substring(1)).join(" "); // Changed into title case
console.log(person2);
person2 = person2.toLowerCase(); // Change case into lowercase
console.log(person2);
person2 = person2.toUpperCase(); // change case into uppercase.
console.log(person2);
export {};
