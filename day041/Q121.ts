// Day 41 Challenge Question 121

// Implementation a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

for (let num = 1; num <=10; num++){
    if (num === 5){ // this condition skips the value 5 from the loop and continue the loop till end.
        continue;
    }
    console.log(num);
}