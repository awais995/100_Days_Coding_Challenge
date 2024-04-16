// Day 35 Challenge Question 105

// Simulate a dice roll invloves randomly choosing an integer between 1 and 6 by using Math.random().

function dice ():number{
    return Math.floor(Math.random() * 6) + 1
  } 
  
  console.log(dice());