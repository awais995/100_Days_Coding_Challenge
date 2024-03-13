// Day 12 Challenge Question  34
//Pizzas: Share your favorite pizzas and express your love for them.

let pizzas:string [] = ["Paproni Pizza", "Cheese Piza", "Chicken Pizza"];

pizzas.forEach(pizza=>{
    if(pizza === "Paproni Pizza"){
        console.log("I like Paproni Pizza.");
    } else if (pizza === "Cheese Piza"){
        console.log("I love Cheese Pizza.");
    } else if (pizza === "Chicken Pizza"){
        console.log("I would like to eat chicken pizza.");
    } else{
        console.log("I would like to eat zinger burger.");
    }
});