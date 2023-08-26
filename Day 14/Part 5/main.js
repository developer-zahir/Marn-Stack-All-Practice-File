function Student() {
  this.name = "Zahiurl Islam";
  this.age = 21;
  this.skill = "Web Developer";

  this.edu = function () {
    return "Diploma engineer";
  };
}

const student = new Student();
console.log(student.name)
console.log(student.edu());
