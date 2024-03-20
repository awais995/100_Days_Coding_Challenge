// Day 19 Challenge Question 57
// Find the Average Grade: Given a list of greades, calculate the averae grade.
// Sum all the grades and divide by number of grades to find the average.
let grades = [70, 80, 90, 95, 75, 55];
// use a .reduce function to summ all the grades and divide by the number of grades.
let average_grade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length; // Calculate average grade
console.log(average_grade);
export {};
