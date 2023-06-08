// // javascript object practice

// // Example of array
// const devArray = ["Zair", 20, "IOS"];
// console.log(devArray[0]); //output: Zair

// //  Exaple of object
// const dev = {
//   name: "Zair",
//   age: 20,
//   skill: "IOS",
// };
// console.log(dev["name"]); // output: Zahir
// console.log(dev.name); // output: zahir ( standard  way )

// const student = {
//   name: "Zahirul Islam",
//   age: 20,
//   location: "Bauphal",
//   foods: ["haji briyani", "kaji briyani", "nanna briyani"],
//   edu: {
//     jsc: 5,
//     psc: 5,
//     ssc: 5,
//     hsc: 5,
//   },
// };

// console.log(
//   `My name is ${student.name}, Age:${student.age}, I love ${student.foods.join(
//     ","
//   )}`
// );

const students = [
  {
    id: 1,
    name: "Md Zahirul Islam",
    age: 20,
    location: "Bauphal",
    foods: ["Salad", "Bread", "Steak"],
    edu: {
      jsc: 3,
      psc: 4,
      ssc: null,
      hsc: null,
    },
  },
  {
    id: 2,
    name: "Abudl Momin",
    age: 25,
    location: "Madonpura",
    foods: ["Fish", "Eggs", "Apple Juice"],
    edu: {
      jsc: 2,
      psc: 4,
      ssc: 3,
      hsc: null,
    },
  },
  {
    id: 3,
    name: "Al Imran",
    age: 24,
    location: "Kalaiya",
    foods: ["Cake", "Eggs", "Milk"],
    edu: {
      jsc: 3,
      psc: 2,
      ssc: 3,
      hsc: null,
    },
  },
  {
    id: 4,
    name: "Asadur",
    age: 23,
    location: "Madonpura",
    foods: ["Pie", "Cupcake", "Pizza"],
    edu: {
      jsc: 4,
      psc: 3,
      ssc: 2,
      hsc: null,
    },
  },
];

console.log(students[1].name);