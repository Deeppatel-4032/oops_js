//Create a Person class and with argument create a Father and Child method father age of 60 and child age of 20 print with argument.

let Father = document.getElementById("Father");  
let Child = document.getElementById("Child");  

class Person {
    constructor(age){
        this.age = age; 
    }

    father(age) {
        this.age;
        Father.innerHTML = (`father age is : ${this.age}`)
    }

    child(age) {
        this.age;
        Child.innerHTML = (`child age is : ${this.age}`);
    }
}

const per = new Person(60);
per.father();

const sun = new Person(20);
sun.child();