class Student {
  constructor(info, marks) {
    this.name = info.name;
    this.roll = info.roll;
    this.age = info.age;

    // distribute amm subjects marks
    this.bng = marks.bng;
    this.eng = marks.eng;
    this.math = marks.math;
    this.s = marks.s;
    this.ss = marks.ss;
    this.reli = marks.reli;
  }

  married_status() {
    return "i am from married status.";
  }
}

const student1 = new Student({ name: "Zahir", roll: 1, age: 21 }, { bng: 50, eng: 70, math: 85, s: 40, ss: 50, reli: 90 });
console.log(student1);



