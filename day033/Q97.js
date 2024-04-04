// Day 33 Challenge Question 97
// Write the function that returns the current date in the format "DD-MM-YYYY".
function current_date() {
    const now = new Date(); // creates a new object that represent the current date and time.
    const day = String(now.getDate()).padStart(2, '0'); // String constructor and ensure that it has 2 digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // adds 1 because months are zero indexed.
    const year = now.getFullYear(); // get full year
    return `${day}-${month}-${year}`; //This line constructs a string using template literals to format the date as "DD-MM-YYYY".
}
console.log(current_date());
export {};
