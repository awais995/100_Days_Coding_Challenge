// Day 41 Challenge Question 123

// Create a loop that iterates through a string and stop when finds the vowel.

function findVowel (alphabet: string){
    const vowel = "aeiouAEIOU";
    
    for (let char of alphabet){
        if (vowel.includes(char)){ // find the vowel in a char.
            console.log(`First vowel found: ${char}`);
            break; // break the loop when 1st vowel find
        }
    }
}
findVowel("xyszjklibcde");