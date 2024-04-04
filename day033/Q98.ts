// Day 33 Challenge Question 98
// This function calculates how many days are left until the new year's day.
function days_until_new_year(): number {
    // Get the current date
    const today = new Date();

    // Calculate the date of the next new year
    // We add 1 to the current year to get the next year
    // Set the month to 0 (January) and day to 1 (the first day of January)
    const newYear = new Date(today.getFullYear() + 1, 0, 1);

    // Calculate the difference in milliseconds between today and the new year's day
    const diff = newYear.getTime() - today.getTime();

    // Convert the difference from milliseconds to days
    // Math.ceil() function rounds up to ensure any partial day is counted as a full day
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    // Return the number of days left until the new year's day
    return days;
}
// Call the function and log the result to the console
console.log(days_until_new_year() + " days until New Year");