// Day 47 Challenge Question 141
// Discuss the significance of the await reserved word in asynchonous JavaScript.
// Demonstrates the use of the await keyword with an asynchronous function:
// Function simulating an asynchronous operation e.g (fetching data from an API).
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data Fetched Successfully!');
        }, 2000); // Simulating a delay of 2 Seconds.
    });
}
;
async function fetchDataAsync() {
    try {
        console.log('fetchingData...');
        const data = await fetchData(); // Pauses the execution until fetch data rsolved.
        console.log("Data Recieved", data);
    }
    catch (error) {
        console.log('Error fetching data', error);
    }
    ;
    {
    }
    ;
}
;
// call the asynchronous function 
fetchDataAsync();
export {};
