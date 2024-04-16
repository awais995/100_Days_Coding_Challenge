// Day 35 Challenge Question 103

// Write a function that returns a random boolean value true or false.

function boolean_value (): boolean{
    return Math.random() > 0.5; // returns true if the random value is greater than 0.5.
  }
  
  console.log(boolean_value());