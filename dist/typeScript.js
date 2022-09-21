"use strict";
//npm i -g typescript
//tsc -v
//tsc filename.ts - opens a filename.ts file
//initialize ts - tsc -init
//outDir & rootDir in tsconfig.json - compiles from rootDir to outDir
let x = 10; // only numbers for x
let firstName = "Semion";
function addNumber(x, y) {
    let result = x + y;
    return result.toString();
}
let result = addNumber(2, 3);
console.log(result);
class Student {
    constructor(firstname) {
        this.firstname = firstname;
    }
}
let std;
std = new Student("Semion");
let numbers = [];
numbers.push(2);
//tuples
let user;
let user2; //tuples array
user = [1, "Semion"];
//enums
var size;
(function (size) {
    size["Small"] = "S";
    size["Large"] = "L";
})(size || (size = {}));
let mySize = size.Large;
let employee = {
    id: 2,
};
employee.name = "sss";
let person;
let arrayOfStudents = [];
let stud1 = new Student("Haim");
let stud2 = new Student("Moshe");
let stud3 = new Student("Yossi");
let stud4 = new Student("Ziv");
let stud5 = new Student("Limor");
console.log(stud1);
arrayOfStudents.push(stud1);
arrayOfStudents.push(stud2);
arrayOfStudents.push(stud3);
arrayOfStudents.push(stud4);
arrayOfStudents.push(stud5);
console.log(arrayOfStudents);
let resultStd = arrayOfStudents.find((stud) => stud.firstname === "Haim");
console.log(resultStd);
