// day 10 Challenge Question 30
// Greet users differently, especially 'admin'
let user = ["Admin", "Faizan", "Zawar", "Taimoor"];
user.forEach(user => {
    if (user === "Admin") {
        console.log(`Hello ${user} Would you like to see a visitors report?`);
    }
    else {
        console.log(`Hello ${user} welcome again`);
    }
});
export {};
