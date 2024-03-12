// Day 11 Challenge Question 33
// Display numbers with their ordinal suffixes.
let numbers1:number[]= [1,2,3,4,5,6,7,8,9];
//forEach method
numbers1.forEach(numbers1 =>{   
    if(numbers1 === 1){
        console.log(numbers1 + "st");
    } else if (numbers1 === 2){
        console.log(numbers1 + "nd");
    } else if (numbers1 === 3){
        console.log(numbers1 + "rd");
    } else {
        console.log(numbers1 + "th");
    }
});

// Day 11 Challenge Question 33
// Display numbers with their ordinal suffixes.
let numbers2:number[]= [1,2,3,4,5,6,7,8,9];
//for of loop method
for (let number of numbers2){   
    if(number === 1){
        console.log(number + "st");
    } else if (number === 2){
        console.log(number + "nd");
    } else if (number === 3){
        console.log(number + "rd");
    } else {
        console.log(number + "th");
    }
};