// Day 036 Challenge Question 106
// Determine if a given year is a leap year using comparison operators.
function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYear(2018));
console.log(leapYear(2024));
console.log(leapYear(2015));
export {};
