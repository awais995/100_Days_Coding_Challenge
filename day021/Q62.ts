// Day 21 Challenge Question 62

// Making a Student Template: Create a blueprint for student information, then fill in the blueprint with student.

/* BluePrint (Interface) for student it makes easier to create components
 that can be used in various parts of the application without duplicating code
 */
 interface Student {
    name: string,
    age: number
    classes: string[],
}

// Filling the blue print in student data
let studentdata: Student = {
    name: "Muhammad Awais",
    age: 26,
    classes: ["Typescript", "Python", "Next.JS"]
}

console.log(studentdata);