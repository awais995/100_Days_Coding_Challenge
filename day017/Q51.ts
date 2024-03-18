// Day 17 Challenge Question 51

function calculateArea(length:number, width:number){
    return length * width;
};
let area:number = calculateArea(5,3);
    console.log("Area of rectangle is: "  + area);

let calculateArea2 = (length:number, width:number) =>  {
    return length * width;
}
console.log(calculateArea2(4,2));
