// Day 6 Challenge Question 16 & 17
let guests = ["Ahmed", "Usman", "Talha"]; // Create a list of guests
console.log(`Great News! I found a bigger dinner table!`); // Messgae to everyone in the list
// Add More Guests in the list
guests.push("Rahman"); // Add gusest name last in the list
guests.unshift("Faizan"); // add guest name begining in the list.
guests.splice(guests.length / 2, 0, "Zawar"); // add guest name between in the list.
guests.forEach(guests => {
    console.log(`Hi ${guests} Can you join me for dinner?`);
});
// Day 6 Challenge Question 17
// Shrinking Guest List
// send message that new table won't arrive.
console.log(`Unfortunately! New dinner table won't arrive in time, and i can invite only two people.`);
while (guests.length > 2) { // used a while loop to remove guests from list until 2 remains by using pop method
    let remove_guests = guests.pop();
    // send message to guests who are not invieted for dinner.
    console.log(`I'm really sorry Mr. ${remove_guests} you are not invited to dinner.`);
}
// Again send message to guests who are still invited for dinner.
guests.forEach(guests => {
    console.log(`Dear ${guests} you are still invited to dinner.`);
});
guests.splice(0, guests.length); // Empty the list
console.log(guests);
export {};
