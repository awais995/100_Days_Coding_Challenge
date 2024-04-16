// Day 036 Challenge Question 108
// Compare two strings to check if they are identical, ignoring case sensivity.
function check_casesensitivity(text1, text2) {
    return text1.toLowerCase() === text2.toLowerCase();
}
console.log(check_casesensitivity("Pakistan", "pakistan"));
console.log(check_casesensitivity("awais", "Awais"));
console.log(check_casesensitivity("Pakisan", "Zindabad"));
export {};
