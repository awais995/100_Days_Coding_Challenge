// Day 31 Challenge Question 93
// Find the index of banana in an array of fruits and replace it with mango.
let fruits = ["Melon", "Kiwi", "strawbery", "banana"];
console.log(fruits);
function replace(fruits) {
    const index = fruits.indexOf("banana");
    if (index !== -1) {
        fruits[index] = "Mango";
        console.log(fruits);
    }
}
replace(fruits);
export {};
