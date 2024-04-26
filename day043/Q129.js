// Day 43 Challenge Question 129
// Explain how this behaves differently in arrow functions comapred to traditional functions.
const traditionalVsArrow = {
    name: "Muhammad Awais",
    traditionalfunction: function () {
        console.log("Traditional Function:", this.name);
    },
    arrowfunction: () => {
        // console.log("Arrow Function:", this.name); 
        // this.name in the arrowfunction refers to the name property of the outer scope, which might be the global object    
    },
};
traditionalVsArrow.traditionalfunction();
traditionalVsArrow.arrowfunction();
export {};
