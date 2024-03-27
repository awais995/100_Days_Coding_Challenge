// Day 26 Challenge Question 78
// function declaration and function expression
// function Declaration 
function sq_declaration(num) {
    return num * num;
}
// function expression
const sq_expression = function (num2) {
    return num2 * num2;
};
console.log(sq_declaration(5)); // square of 5 with function declaration method 25
console.log(sq_expression(5)); // square of 5 with function expression method 25
export {};
