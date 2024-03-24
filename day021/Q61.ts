// Day 20 Challenge Question 60

// Create a self running / self setup user profile that can tell user name and age. 

// the code creates a module with private variables and a method to access them.
// used IIFE function This helps to create private variables and expose only necessary functionality.
let userprofile  = (function(){  
    let name = "Muhammad Awais";  // private variables
    let age = 26;
    return {            // return Object
        userinfo: function () {   // holds the information that we want to expose
            console.log(`\n Name: ${name}, Age: ${age} \n `); 
        }
    };
})();

userprofile.userinfo();  // call the userprofile.userinfo