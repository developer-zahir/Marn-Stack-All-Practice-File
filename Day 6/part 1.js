// javascript object practice

// Example of array
const devArray = ["Zair", 20, "IOS"];
console.log(devArray[0]); //output: Zair

//  Exaple of object
const dev = {
  name: "Zair",
  age: 20,
  skill: "IOS",
};
console.log(dev["name"]); // output: Zahir
console.log(dev.name); // output: zahir ( standard  way )

const student = {
  name: "Zahirul Islam",
  age: 20,
  location: "Bauphal",
  foods: ["haji briyani", "kaji briyani", "nanna briyani"],
  edu: {
    jsc: 5,
    psc: 5,
    ssc: 5,
    hsc: 5,
  },
};

console.log(
  `My name is ${student.name}, Age:${student.age}, I love ${student.foods.join(
    ","
  )}`
);