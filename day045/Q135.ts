// Day 45 Challenge Question 135

// Explain ho you can format a JSON String with proper indentation for readability.

// Define a JavaScript Object
const student = {
    name: "Ali",
    fName: "Ahmed",
    age: "20",
    course: "Cloud Applied Generative AI Engineer"
  };
  
  const jsonformat = JSON.stringify(student, null, 2) ;  
  /*  
  A function that transforms the results. 
  2 represents Adds indentation, white space and line break characters to the return-value JSON text to make it easier to read.
  Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
  */
  console.log(jsonformat);