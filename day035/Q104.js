// Day 35 Challenge Question 104
// Write a function that generates a hexadecimal color code.
function hexadecimal_color() {
    const color = '#' + Math.floor(Math.random() * 0xDDDDDD).toString(16).padStart(6, '0');
    return color;
}
console.log(hexadecimal_color());
export {};
