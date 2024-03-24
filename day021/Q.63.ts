// Day 21 Challenge Question 63
// Write a program that describe either a Circle | Rectangle | Square using a special type alias
// Create a custom shape type (type alias)
type Shape = {
    shapetype: "circle" | "rectangle" | "square";    // Used union type to hold multiple types values
    width?: number;
    radius?: number;
    length?: number;
    square?: number;
    sqwidth?: number;
    sqheight?: number;
}
// Describing Different shapes in detail.
let Circle:Shape ={         //Circle
    shapetype: "circle",
    radius: 10,
};
//Rectangle
let Rectangle:Shape = {
    shapetype: "rectangle",
    width: 5,
    length: 10
};
// Square
let Square: Shape = {
    shapetype: "square",
    sqwidth: 10,
    sqheight: 10
}
console.log(Circle);
console.log(Rectangle);
console.log(Square);