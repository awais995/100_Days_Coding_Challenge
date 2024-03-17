// Declare a function and pass the object values to a function
function Car_Details(Manufacturer, Model, Features, Options) {
    let fav_car = {
        Manufacturer,
        Model,
        Features,
        ...Options
    };
    return fav_car; // return a function
}
// call the function with required information and stored it in a variable.
let fav_car = Car_Details("Toyota", "V8", "Automatic", { Year: 2016, color: "White" });
console.log(fav_car);
export {};
