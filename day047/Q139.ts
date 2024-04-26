// Day 47 Challenge Question 139

// List the three reserved keywords in JavaScript and create a valid use case for each.

// 1 class: Use case: Creating object-oriented code structures

class Student {
    name:string;
    constructor (name:string){
      this.name = name;
    }
    greeting (){
      console.log(`Hello! ${this.name}`)
    };
  }
  
  const studentName = new Student("Awais");
  
  studentName.greeting();
  
  // 2 function:
  // Use case: Defining reusable blocks of code.
  
  function greet (name:string) {
    console.log(`Hello ${name}`)
  }
  
  greet("Ahmed");
  
  
  // 3 return: Use case: Exiting a function and returning a value.
  
  function add (a:number, b:number){
    return a+b;
  }
  
  const result = add(5,7);
  console.log(result);