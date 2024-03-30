// Day 27 Challenge Question 81

// Iterating over Object properties
function log_obj(obj: { [key: string]: string | number}) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

log_obj({ make: "Toyota", model: "LandCruiser 250", year: 2024 });