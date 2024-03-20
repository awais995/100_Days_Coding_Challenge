// Day 18 Challenge Question 53

//Pulling apart a nested object
// Break down a complex list into simpler parts to make it simple and understand specific pices of information
let software_engineer_Skills = {
    languages: ["typescript", "Python", "JavaScript"],
    frameworks: ["NextJS", "angular", "Tailwind"],
    tools: ["Git", "VSCode", "AWS", "Azure", "Docker"],
};

// find three specific skills and show them.
let {languages, frameworks, tools} = software_engineer_Skills;

// Showing specif skill from each list
console.log(`Showing Specific Skills from the list:
Languages: ${languages[0]}, 
Framework: ${frameworks[0]}, 
Tools: ${tools[2]}`);