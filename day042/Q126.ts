// Day 42 challenge Question 126

// Explain how the this keyword changes its value when used inside a nested function within a method.

const myobject = {
    name: "Muhammad Awais",
    outerfunction: function (){
        console.log(this.name);

        const innerfunction = () =>{
            console.log(this.name);
        };
        innerfunction();
    },
};

myobject.outerfunction();