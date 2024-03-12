// Day 05 Challenge Question 15

let guest_list:string[] = ["Ahmed", "Usman", "Talha"]; // Create a list of guests

//Print the guest name who is unavailable for dinner.
console.log(`\n Unfortunately! ${guest_list[0]} can't make it to dinner.`);

// Used a splice method to replace the guest name from list and update it.
let guest_replace = guest_list.splice(0,1, "Ali");
console.log(guest_replace);


for(let updated_list of guest_list){    // run a loop to send invitation again to each guest name in the guest list.
    console.log(`\n Hello, ${updated_list}! I would like to invite you to dinner.`)
}