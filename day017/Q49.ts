// Day 17 Challenge Question 49

// Declare a function with rest parameters and loop to print multiple hobbies with statement.
function hobbies(...myhobbies:string[]){
    myhobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`);
    });
}
hobbies("reading", "listening", "learning"); // invoke the function