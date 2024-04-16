// Day 37 Challenge Question 109

// write an if else statement that logs "Good Morning" if the current time is before 12.

function time (){
    let date = new Date();
    let time = date.getHours();
    if (time < 12){
        console.log("Good Morning");
    } else {
        console.log("Nice to meet you.");
    }
}

time();