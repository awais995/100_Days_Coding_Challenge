// Day 16 Question 44
// Sandwitches: Summarize Sandwich Orders with varying ingredients
//used a rest parameter to accept indefinite number of arguments
function make_sandwich(name, ...items) {
    console.log(`\nSandwich Type: ${name} Ingredients: ${items.join(',')}`);
}
make_sandwich("Classic Sandwich:", "Chicken", "bacon", "tomatoes", "Lettuce", "Mayonnaise", "Cheese");
make_sandwich("Caprese Sandwich:", "Cheese", "Tomatoes", "basil leaves", "olive oil", "Balsamic glaze");
make_sandwich("Veggie Hummus Wrap:", "Hummus spread", "cucumber", "carrots", "ell peppers", "spinach", " tortilla");
export {};
