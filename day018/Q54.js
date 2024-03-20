// Day 18 Challenge Question 54
// Making Flexible Object keys:
/* Setup a list and change a name based on each section what you need at that moment.
its like adjusting labels based on user choices.
*/
// Making Flexible List
function object1(key, value) {
    let list1 = {};
    // setting up a section in a list with changable name
    list1[key] = value;
    return list1;
}
// flexible list setup for user preference
let user_preference = object1("Brand", "Apple");
console.log(user_preference);
export {};
