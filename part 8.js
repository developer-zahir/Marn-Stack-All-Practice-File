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

const dev2 = [
  {
    name: "Md Zahirul Islam",
    age: 20,
    haveBrother: true,
    brother: {
      name: "Emon",
      age: 18,
    },
  },
];

console.log(dev2[0].name);
console.log((dev2[0].name = "Abdul Momin"));

// console.log(dev2.indexOf(dev2.find((data)=>data.age === 20)));
console.log(dev2.find((data)=>data.haveBrother === true));