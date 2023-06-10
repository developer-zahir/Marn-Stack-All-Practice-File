// // Example of array
// const array = ["Zahir", 30, "Web Developer"];

// // Example of, Array of Array/Multi dimensional array
// const array_of_array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// // Example of, Array of object
// const arrar_of_object = [
//   {
//     name: "Zahir",
//     age: 20,
//     skill: "Web Developer",
//   },
// ];

// // Example of object
// const object = {
//   name: "Zahir",
//   age: 20,
//   skill: "Web Developer",
// };
// // Example of, object of array
// const object_of_array = {
//   name: "Zahir",
//   age: 20,
//   skill: ["Web Designer", "Web Developer"],
// };

// // Example of, Object of Object
// const object_of_object = {
//   1: {
//     name: "Zahir",
//     age: 20,
//     skill: "Web Developer",
//   },
//   2: {
//     name: "Imran",
//     age: 25,
//     skill: "Digital Marketer",
//   },
//   3: {
//     name: "Abdul Momin",
//     age: 22,
//     skill: "Python Developer",
//   },
// };

// ---------------------------start class topic -------------------------------
const dev = {
  1: {
    name: "Zahir",
    age: 20,
    skill: "Web Developer",
  },
  2: {
    name: "Imran",
    age: 25,
    skill: "Digital Marketer",
  },
  3: {
    name: "Abdul Momin",
    age: 22,
    skill: "Python Developer",
  },
};
// console.log(dev);
console.log(Array.from(dev)); // output: []

// convert text to array
const text = "Hello";
console.log(Array.from(text));

//  sobai 10 bochor er boro kina chekc koro
const age = [10, 40, 50, 30];
console.log(age.every((item) => item >= 10));

// replace excising array data to new value
const numberList = [1, 2, 3, 4, 5];
console.log(numberList.fill(1));

// at - array index accessing method update vesion
const numbers = [10, 40, 50, 30];
console.log(numbers[1]); // output: 40
console.log(age.at(1)); // output:40

// reduce - er kaj hole ekta array er modde thake sob gulo data jok kore jok, fol show korabe,
// we can user direction, left and right
const chada = [10, 30, 40, 20];
console.log(
  chada.reduce((start, end) => {
    // return start // output: 10
    // return end // output: 20
    return start + end; // output: start to end total : 100
  })
);
