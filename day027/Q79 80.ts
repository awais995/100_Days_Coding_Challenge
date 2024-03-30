// Day 27 Challenge Question 79
// Creating and Accessing Object properties
interface car {
    make: string,
    model: string,
    year: number,
    color?: string
}
let car: car = {
    make: "Toyota",
    model: "landcruiser 250",
    year: 2024,
};
console.log(car.model, car.year);
// Day 27 Challenge Question 80
// Updating Object properties
car.color = "White";
car.year = 2021;
console.log(car);