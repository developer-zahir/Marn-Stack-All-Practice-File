//  class topic
// Mutable and immutable data updating

// // object of object data updating
// const dev = {
//   name: "Md Zahirul Islam",
//   age: 20,
//   haveBrother: true,
//   brother: {
//     name: "Emon",
//     age: 18,
//   },
// };
// // old way ............
// console.log(dev.name); // old value: Md Zahirul Islam
// console.log((dev.name = "Abdul Momin")); // new value: Abdul Momin
// console.log(dev.brother.name); // old value: Emon
// console.log((dev.brother.name = "Rahat Khan")); // new value: Rahat Khan
// // new / destructuring way .................
// console.log(dev);
// console.log({ ...dev, name: "Al Imran", age: 30, haveBrother: false, brother: { name: "vai nai", age: 20 } });

// array of object value updating ---------------
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
console.log((dev.find((data) => data.age === 30).name = "40")); // Change the specified value this object
console.log(dev);





// object value update with destructuring
let dev2 = {
  name: "Md Zahirul Islam",
  age: 25,
  skill: "Web Developer",
};

console.log(dev2); // existing object
dev2 = { ...dev2, name: "Abdul Momin", age: 30, skill: "ISO Developer" }; // object value updateing
console.log(dev2); // existing object with new value
