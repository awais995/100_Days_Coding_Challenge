// Day 45 Challenge Question 133
// Write a JavaScript object and convert it into JSON string.
// Define a JavaScript Object
const student = {
    name: "Ali",
    fName: "Ahmed",
    age: "20",
    course: "Cloud Applied Generative AI Engineer"
};
const jsonformat = JSON.stringify(student); // Convert JS Object into JSON String
console.log(jsonformat);
export {};
