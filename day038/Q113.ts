// day 38 Challenge Question 113

// Write the function that checks if a Map contains a key for Canada and logs the capital if it exists.

import { mapObject } from "./Q112.js";

function check(mapObject: Map <string, string>){
    if(mapObject.has("Canada")){
        console.log(`The Capital of Pakistan is ${mapObject.get("Canada")}`);
    } else {
        console.log("Canada is not in the map");
    }
    
}
check(mapObject);