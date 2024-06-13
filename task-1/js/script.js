//Create a School class and create a student , faculty and peon method and student name email contact print same as faculty and peon using class & object.

let std = document.getElementById("name");
let stdEmail = document.getElementById("email");
let stdContact = document.getElementById("contact");
let fname = document.getElementById("fname");
let fEmail = document.getElementById("femail");
let fContact = document.getElementById("fcontact");
let pname = document.getElementById("pname");
let pEmail = document.getElementById("pemail");
let pContact = document.getElementById("pcontact");

class School {
    
  student(name, email, contact) {

    std.innerHTML = (`student name : ${name}`);
    stdEmail.innerHTML = (`student email : ${email}`);
    stdContact.innerHTML = (`student contact : ${contact}`);
  }
  faculty(name, email, contact) {

    fname.innerHTML = (`faculty name : ${name}`);
    fEmail.innerHTML = (`faculty email : ${email}`);
    fContact.innerHTML = (`faculty contact : ${contact}`);
  }
  peon(name, email, contact) {
    
    pname.innerHTML = (`peon name : ${name}`);
    pEmail.innerHTML = (`peon email : ${email}`);
    pContact.innerHTML = (`peon contact : ${contact}`);
  }

}

const std1 = new School();
std1.student("Deep Patel", "deeppatel7868@gmail.com", 7383884401);

const f1 = new School();
f1.faculty("Keyur sir", "keyurgohil45@gmail.com", 9986847551);

const peon1 = new School();
peon1.peon("ramu kaka", "ramu2545@gmail.com", 73836985454);