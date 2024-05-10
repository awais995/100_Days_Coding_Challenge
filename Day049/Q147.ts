// Day 49 Challenge Question 147
// Explain how to handle errors in a callback pattern.
function doSomethingAsync (callback: (error: Error | null, result?: any) => void){
    // Simulating an asynchronous operation
    const success = Math.random() < 0.5; // assuming 50% chances of success.
    if (success){
        // / If successful, pass null as the first argument (no error)
        const result = "Operation Successful";
        callback (null, result)
    } else {
        // If an error occurs, pass an error object
        const error = new Error ('Something went wrong');
        callback (error);
    };
};
// Example Usage
doSomethingAsync(function(error,result){
    if (error) {    
    console.error(error.message);
    } else {
        console.log (result);
    }
});