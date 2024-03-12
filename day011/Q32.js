// Day 11 Challenge Question 32
// Checking usernames: Ensure Uniqueness in usernames.
let registered_users = ["Ahmed", "rahman", "rafiu", "Taimoor"];
let new_user = ["Rahman", "Rafiu", "Ali", "Latif"];
// write the version that checks whether the new user name is already registered or not.
new_user.forEach(new_user => {
    // used .some() method to Determines whether the specified callback function returns true for any element of an array.    
    if (registered_users.some(registered_users => registered_users.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} is already registered`);
    }
    else {
        console.log(`${new_user} is available`);
    }
});
export {};
