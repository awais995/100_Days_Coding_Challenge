// Day 20 Challenge Question 58
// Average Score Calculator
// Program that take infinite number of scores and tell their average.
/*  I have used a rest parameter to get unlimited number of scores.
    then, I have declare a varaible and used .reduce method to accumulate the value
    and applied the function to get average of scores.
*/
function average_score(...scores) {
    let total = scores.reduce((sum, num) => sum + num, 0);
    return total / scores.length;
}
;
console.log(average_score(56, 65, 45, 78, 90, 80, 59, 95, 78, 88, 96, 50));
export {};
