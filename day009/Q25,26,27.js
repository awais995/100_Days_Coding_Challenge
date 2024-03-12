// Day 09 Challeng Question 25
//Imagine an alien color was just shot down in a game.
// if target match shot down the alien and earned 5 points.
let alien_Color = "Green";
if (alien_Color == "Green") {
    console.log("you just earned 5 points");
}
// if the target not match print the message target not recognize.
let alien2_color = "Red";
if (alien2_color = "Green") {
    console.log("Target not recognized");
}
//Day 9 Challenge Question 26
// if else condition
// version that runs if block
let alien = "Red";
if (alien === "Red") {
    console.log("You have earned 10 Points");
}
else {
    console.log("Target not match");
}
// version that runs else block
let alien2 = "Red";
if (alien2 === "Yellow") {
    console.log("Target not match");
}
else {
    console.log("Target Missed! You have earned nothing");
}
//Day 9 Challenge Question 27
// convert if else chain to handle 3 colors red, yellow, green.
// Version of Red
let alien_Color2 = "Red";
if (alien_Color2 == "Red") {
    console.log("You have earned 5 Points");
}
else if (alien_Color2 == "Yellow") {
    console.log("You have earned 10 points");
}
else if (alien_Color2 == "Green") {
    console.log("You have earned 15 Points");
}
else {
    console.log("You have missed the target.");
}
// Version of Yellow
let alien_Color3 = "Yellow";
if (alien_Color3 == "Red") {
    console.log("You have earned 5 Points");
}
else if (alien_Color3 == "Yellow") {
    console.log("You have earned 10 points");
}
else if (alien_Color3 == "Green") {
    console.log("You have earned 15 Points");
}
else {
    console.log("You have missed the target.");
}
// Version of Green
let alien_Color4 = "Green";
if (alien_Color4 == "Red") {
    console.log("You have earned 5 Points");
}
else if (alien_Color4 == "Yellow") {
    console.log("You have earned 10 points");
}
else if (alien_Color4 == "Green") {
    console.log("You have earned 15 Points");
}
else {
    console.log("You have missed the target.");
}
export {};
