// Day 22 Challenge Question 72
// Block Scope with let and const
// varibale within block only accessable within block
{
    let pakistan = "Pakistan is a beautiful country.";
    const tour_resorts = "There are lots of tour_resorts in pakistan";
    console.log(pakistan);
    console.log(tour_resorts);
}
export {};
// console.log(pakistan);  // Gives error because variable declares within the block is not accessable outside the block
// console.log(tour_resorts);
