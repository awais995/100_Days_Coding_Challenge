// Day 28 Challenge Question 84
// Replacing text in a string: 
//Write a function that takes a sentence and replace all instances of word JavaScript with TypeScript.
function replace(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replace("JavaScript is a language used to build websites. I love JavaScript."));
export {};
