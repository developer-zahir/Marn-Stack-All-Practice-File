// function Student() {
//   this.name = "Zahir";
//   this.age = 21;
//   this.skill = "Web Developer";

//   this.ageCale = function (yearOfBarth) {
//     const year = new Date().getFullYear();
//     return `Hi, ${this.name} your age is ${year - yearOfBarth}`;
//   };
// }
// const Suedent = new Student();
// console.log(Suedent.ageCale(2002));

function Result(student, marks) {
  this.name = student.name;
  this.roll = student.roll;
  this.age = student.age;

  // all subject marks distibute
  this.bng = marks.bng;
  this.eng = marks.eng;
  this.math = marks.math;
  this.s = marks.s;
  this.ss = marks.ss;
  this.reli = marks.reli;

  this.get_gpa_and_cgpa = function (sub) {
    let gpa;
    let grade;

    if (this[sub] >= 0 && this[sub] < 33) {
      gpa = 0;
      grade = "F";
    } else if (this[sub] >= 33 && this[sub] < 40) {
      gpa = 1;
      grade = "D";
    } else if (this[sub] >= 40 && this[sub] < 50) {
      gpa = 2;
      grade = "C";
    } else if (this[sub] >= 50 && this[sub] < 60) {
      gpa = 3;
      grade = "B";
    } else if (this[sub] >= 60 && this[sub] < 70) {
      gpa = 3.5;
      grade = "A-";
    } else if (this[sub] >= 70 && this[sub] < 80) {
      gpa = 4;
      grade = "A";
    } else if (this[sub] >= 80 && this[sub] <= 100) {
      gpa = 5;
      grade = "A+";
    }
    return {
      sub,
      gpa: gpa,
      grade: grade,
    };
  };
}

const student1 = new Result({ name: "Zahir", roll: 1, age: 21 }, { bng: 80, eng: 70, math: 85 });
console.log(student1.get_gpa_and_cgpa("eng"));
