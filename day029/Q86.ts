// Day 29 Challenge Question 86

// Checking for text presence:

// Create a function that checks if the word "JavaScript" is present in a given string. it should return true if found otherwise false.

function check(text:string){
    if (text.includes("JavaScript")){
      return true;
    } else {
      return false;
    };
  }
  
  console.log(check("We code in typescript but compile it into Javascript."));
  console.log(check("We code in typescript but compile it into JavaScript."));