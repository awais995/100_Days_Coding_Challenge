// Day 6 Challenge Question 18
//Declare an array of places
let places = ["Karachi", "Lahore", "Skardu", "Naran Kagan", "Muree"];
console.log("Original Order:", places); //Print Array
console.log("Alphabetical Order:", [...places].sort()); //Alphabetical Order without modifying the original order
console.log("Original Order:", places); // Original List
console.log("Reverse Alphabetical Order:", [...places].sort().reverse()); // Reverse Alphabetical Order 
console.log("Original Order:", places); // Original List
places.reverse(); // Reverse the order of list
console.log("Reversed Order:", places);
places.reverse(); // Reverse again the order of list to return original order
console.log("Reverse Again", places);
places.sort(); //Sort List in Alphabetical Order
console.log("Sorted in Alphabetical Order:", places);
places.reverse(); // Sort List in reverse Alphabetical Order
console.log("Sorted in Reverse Alphabetical Order:", places);
export {};
