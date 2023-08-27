function Result(student, marks) {
  this.name = student.name;
  this.roll = student.roll;
  this.age = student.age;

  // Initialize subject marks with 0 if not provided
  this.bng = marks.bng;
  this.eng = marks.eng;
  this.math = marks.math;
  this.s = marks.s;
  this.ss = marks.ss;
  this.reli = marks.reli;

  // get gpa and gread induvisula subject
  this.get_gpa = function (sub) {
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
      gpa: gpa,
      grade: grade,
    };
  };

  // get total cgpa
  this.get_cgpa = function () {
    if (this.bng >= 33 && this.eng >= 33 && this.math >= 33 && this.s >= 33 && this.ss >= 33 && this.reli >= 33) {
      const total_cgpa =
        this.get_gpa("bng").gpa +
        this.get_gpa("eng").gpa +
        this.get_gpa("math").gpa +
        this.get_gpa("s").gpa +
        this.get_gpa("ss").gpa +
        this.get_gpa("reli").gpa;

      const cgpa = total_cgpa / 6;
      return cgpa.toFixed(2);
    } else {
      return 0;
    }
  };
  // final grade
  this.finalGread = function () {
    if (this.bng >= 33 && this.eng >= 33 && this.math >= 33 && this.s >= 33 && this.ss >= 33 && this.reli >= 33) {
      if (this.cgpa() >= 0 && this.cgpa() < 1) return "F";
      if (this.cgpa() >= 1 && this.cgpa() < 2) return "D";
      if (this.cgpa() >= 2 && this.cgpa() < 3) return "C";
      if (this.cgpa() >= 3 && this.cgpa() < 3.5) return "B";
      if (this.cgpa() >= 3.5 && this.cgpa() < 4) return "A-";
      if (this.cgpa() >= 4 && this.cgpa() < 5) return "A";
      if (this.cgpa() >= 5) return "A+";
    } else {
      return "F";
    }
  };
  // final result
  this.finalResult = function () {
    if (this.bng >= 33 && this.eng >= 33 && this.math >= 33 && this.s >= 33 && this.ss >= 33 && this.reli >= 33) {
      return "Passed";
    } else {
      return "Failed";
    }
  };
}

const student1 = new Result({ name: "Zahir", roll: 1, age: 21 }, { bng:50, eng: 70, math: 85, s: 40, ss: 50, reli: 90 });
console.log(student1.get_gpa("bng"));
console.log(student1.get_cgpa());
console.log(student1.finalResult());
