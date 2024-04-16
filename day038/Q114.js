// day 38 Challenge Question 114
// Iterate over a Map of student IDs and names and log each pair to the console
let students = new Map();
students.set(1, "Muhammad Awais"),
    students.set(2, "Muhammad Ali"),
    students.set(3, "Kashif");
for (let names of students) {
    console.log(names);
}
export {};
