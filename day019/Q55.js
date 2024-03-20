// Day 19 Challenge Question 55
/* Create a list of numbers in array,
then used a trick to make another list to double the list numbers.
*/
let numbers = [1, 2, 3, 4, 5, 6]; //Crete a list
console.log("List 1: " + numbers);
/* used a map function to iterate each element in the array and applied the provied function.
   It takes the each number in the array and multiplies it by 2.
*/
let double_numbers = numbers.map(number => number * 2);
console.log("Double_Numbers: " + double_numbers); // print the double_numbers list
export {};
