function Student() {
  this.name = "Zahir";
  this.age = 21;
  this.skill = "Web Developer";

  this.ageCale = function (yearOfBarth) {
    const year = new Date().getFullYear();
    return `Hi, ${this.name} your age is ${year - yearOfBarth}`;
  };
}
const Suedent = new Student();
console.log(Suedent.ageCale(2002));
