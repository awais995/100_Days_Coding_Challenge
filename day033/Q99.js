// Day 33 Challenge Question 99
// Generating a date object that represent my next birthday and log it to the console.
function nextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const commingbirthday = nextBirthday(4, 1);
console.log(commingbirthday.toLocaleString());
export {};
