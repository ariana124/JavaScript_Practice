// A program that creates an object and prints before and after deleting the rollno property.

let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}

console.log(student);

delete student.rollno;

console.log(student);
