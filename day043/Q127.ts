// Day 43 Challenge Question 127

// convert a traditional function into arrow function.

function traditionalFunction (a:number, b:number){
    return a + b;
}

const arrowFunction = (a:number,b:number) =>{
    return a + b;
}

console.log(traditionalFunction(5,7));
console.log(arrowFunction(5,7));