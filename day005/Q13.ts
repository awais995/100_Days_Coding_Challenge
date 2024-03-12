// Day 05 Challenge Question 13
let vehicles:string[] = ["Land Cruiser", "Honda MotorCyle", "Train", "Aeroplane"]; // Store values in an array

for(let i=0; i<=vehicles.length; i++){   //run a loop to iterate each value in a array
    let statement:string;   //Declare a statement variable and
    switch (i) {            //run swith case to print the different statements for each value in the array.         
        case 0:
            statement = `\nI would love to own a ${vehicles[i]}.\n`
            break;
        case 1:
            statement = `I mostly used a ${vehicles[i]} for daily tasks.\n`
            break;
        case 2:
            statement = `I travel by ${vehicles[i]}, when i have to travel long.\n`
            break;
        case 3:
            statement = `I will travel by ${vehicles[i]} for Makkah and Madina.\n`
            break;
        default:
            statement = `Inshallah soon i will own a Land Cruiser!\n`
    }
    console.log(statement);
}