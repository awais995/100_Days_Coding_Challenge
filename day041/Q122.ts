// Day 41 Challenge Question 122

// use a while loop to count down from 10 to 1 and breaks the loop when it reaches the 5

let count:number = 10;

while (count > 0){
    if (count === 5){ // breaks the loop when get the desired result
        break;
    }
    console.log(count);
    count --;    // minus 1 each time when loop iterate the values.
}