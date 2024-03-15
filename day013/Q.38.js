// Day 13 Challenge Question 38
// Describing cities with a function
// used a function with default parameters to handle cases.
// describing cities with their countries.
function cities(city, country = "Pakistan") {
    console.log(`City: ${city} is in ${country}`);
}
cities("Karachi"); // Print defualt value
cities("Islamabad"); // Print default value
cities("Madina", "Saudi Arabia"); // print custom value
cities("Dubai", "UAE"); // print custom value
export {};
