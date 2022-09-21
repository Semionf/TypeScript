//npm i -g typescript
//tsc -v
//tsc filename.ts - opens a filename.ts file
//initialize ts - tsc -init
//outDir & rootDir in tsconfig.json - compiles from rootDir to outDir
let x: number = 10; // only numbers for x

let firstName: string = "Semion";

function addNumber(x: number, y: number): string {
  let result = x + y;
  return result.toString();
}

let result = addNumber(2, 3);
console.log(result);

class Student {
  firstname;
  constructor(firstname: string) {
    this.firstname = firstname;
  }
}

let std: Student;

std = new Student("Semion");

let numbers: number[] = [];
numbers.push(2);

//tuples
let user: [number, string];
let user2: [number, string, boolean][]; //tuples array
user = [1, "Semion"];

//enums
enum size {
  Small = "S",
  Large = "L",
}

let mySize = size.Large;

let employee: {
  id: number;
  name?: string; //? - optional
} = {
  id: 2,
};

employee.name = "sss";

let person: {
  id: number;
  name: string;
};

let arrayOfStudents: Student[] = [];
let stud1: Student = new Student("Haim");
let stud2: Student = new Student("Moshe");
let stud3: Student = new Student("Yossi");
let stud4: Student = new Student("Ziv");
let stud5: Student = new Student("Limor");

console.log(stud1);
arrayOfStudents.push(stud1);
arrayOfStudents.push(stud2);
arrayOfStudents.push(stud3);
arrayOfStudents.push(stud4);
arrayOfStudents.push(stud5);
console.log(arrayOfStudents);
let resultStd = arrayOfStudents.find((stud) => stud.firstname === "Haim");

console.log(resultStd);
