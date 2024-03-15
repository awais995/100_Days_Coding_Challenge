// Day 13 Challenge Question 37
// Large Shirts: Default values in make_Shirt()

// Create a function
function make_shirts(size:string = "Large", message:string ="I love Coding"){
    console.log(`Make a shirt: ${size} with the message: ${message}`);
}
make_shirts(); // print the shirt with the message.
make_shirts("medium", "Generative AI Engineer"); // Custom shirt design
make_shirts("small"); // print the large shirt message on small shirt.