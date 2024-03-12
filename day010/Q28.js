// day 10 Challenge Question 28
// Stages of life: Write an if-else chain that determines a person’s stage of life
let age = 18;
if (age < 2) { // If the person is less than 2 years old, print a message that the person is a baby.
    console.log("The Person is baby");
}
else if (age >= 2 && age < 4) { // If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    console.log("The person is toddler");
}
else if (age >= 4 && age < 13) { //If the person is at least 4 years old but less than 13, print a message that the person is a kid.
    console.log("The person is kid");
}
else if (age >= 13 && age < 20) { // If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    console.log("The person is teenager");
}
else if (age >= 20 && age < 65) { // If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    console.log("The person is adult");
}
else {
    console.log("The person is an older"); //If the person is age 65 or older, print a message that the person is an elder.
}
export {};
