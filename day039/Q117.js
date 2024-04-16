// Day 039 Challenge Question 117
// The default case in a switch statement provides a way to execute a block of code when none of the other case lables match the expression.
function travel(vehicle) {
    switch (vehicle) {
        case 1:
            console.log(" I can travel by train");
            break;
        case 2:
            console.log(" I can travel by aeroplane");
            break;
        case 3:
            console.log(" I can travel by bus");
            break;
        default:
            console.log(" You have to travle by car.");
            break;
    }
}
travel(4);
export {};
