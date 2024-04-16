// Day 039 Challenge Question 116
// Create a swtich that matches several cases to the same code block, representing seasons.
function seasons(months) {
    switch (months) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        default:
            console.log("Invalid Month");
    }
}
seasons(6);
export {};
