// Day 29 Challenge Question 85

// Finding the positon of a substring: 

// write a function that locates the first occurence of the word "code" within any given string and return its position.

function findPosition (text: string): number{
    return text.indexOf ("code");
  }
  
  console.log(findPosition("Do you know how to code in JavaScript?"));