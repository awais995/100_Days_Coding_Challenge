// Day 44 Challenge Question 131

// Create two modules one that exports a class, and another that imports the class and creates the instances.

export class student {
    name: string;
    constructor (name:string){
        this.name = name;
    }

    greetings(){
        console.log(`Hello! my name is ${this.name}`);
    };
}