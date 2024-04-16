// Day 37 Challenge Question 110

// Creating a Grading System
import inquirer from "inquirer";

console.log("Give me your obtained and total marks and get your grade.");
async function grade_System (){
    let answers = await inquirer.prompt([
        {
            type: "input",
            message: "Write your Obtained Marks.",
            name: "obtain"
        },
        {
            type: "input",
            message: "Write your Total Marks?",
            name: "total"
        }
    ]);
        let marks = {
            obtain: parseFloat(answers.obtain),
            total: parseFloat(answers.total)
        };
        
        let percentage = (marks.obtain / marks.total) * 100;

    if (percentage >= 90){
        console.log("A1")
    } else if (percentage < 90 && percentage >= 70){
        console.log("A")
    }   else if (percentage < 70 && percentage >= 60){
        console.log("B")
    }    else if (percentage < 60 && percentage >= 50){
        console.log("C")
    }    else if (percentage < 50 && percentage >= 33){
        console.log("D")
    }       else if (percentage < 33){
        console.log("Fail")
    }
}

grade_System();