//  class topic
// Mutable and immutable data updating

// data updating
// const dev = {
//   name: "Md Zahirul Islam",
//   age: 20,
//   haveBrother: true,
//   brother: {
//     name: "Emon",
//     age: 18,
//   },
// };
// console.log(dev.name);
// console.log((dev.name = "Abdul Momin"));

const dev = [
  {
    name: "Md Zahirul Islam",
    haveBrother: true,
    age: 20,
    brother: {
      name: "Emon",
      age: 18,
    },
  },
  {
    name: "Imran",
    haveBrother: true,
    age: 30,
    brother: {
      name: "Ebrahim",
      age: 20,
    },
  },
];

// // console.log(dev[0].name);
// // console.log((dev[0].name = "Abdul Momin"));

console.log(dev.indexOf(dev.find((data) => data.age === 30))); // Find the index number of any object value age == 30
console.log(dev.find((data) => data.age === 30).name = '40'); // Change the specified value this object
console.log(dev);
