//  Day 6 part 7
/** Class topic
 * -----------------
 * Spreading
 * Destructuring
 *
 */

// const list1 = [1, 2, 3, 4, 5];
// const list2 = [6, 7, 8, 9, 10];
// const list3 = [11, 12, 13, 14, 15];
// // concatenation / concat
// console.log(list1.concat(list2));
// // empty array
// console.log([]);
// // array of array
// console.log([list1]);
// // new way to caocat
// console.log([...list1, ...list2, ...list3]);

// const dev = {
//   name: "Md Zahirul Islam",
//   age: 20,
//   skill: "ISO Dev",
// };
// const about = {
//   isMarried: false,
//   isSkill: true,
// };
// // empty object
// console.log({});

// // object Spreading
// console.log({ ...dev, ...about });

// // concatenation / concat
// console.log(list1.concat(list2));
// // empty array
// console.log([]);
// // array of array
// console.log([list1]);
// // new way to caocat
// console.log([...list1, ...list2, ...list3]);

console.log("Destructuring ---");

// const devs={
//     1:{
//         name:'Md Zahirul Islam',
//         age:20,
//         skill:['HTML','CSS','JS','PHP']
//     },
//     2:{
//         name:'Al Imran',
//         age:20,
//         skill:['Facebook marketing','Instagram marketing']
//     },
// }
// console.log(`Hi, My name is ${devs}`);

// const dev = {
//   name: "Md Zahirul Islam",
//   age: 20,
//   skill: ["HTML", "CSS", "JS", "PHP"],
// };

// const dev2 = {
//   name: "Al Imran",
//   age: 20,
//   skill: "Web Designer",
// };
// const { name, age, skill } = dev;
// const { name: naam, age: boysh, skill: joggota } = dev2;

const dev = {
  name: "Md Zahirul Islam",
  age: 20,
  haveBrother: true,
  brother: {
    name: "Emon",
    age: 18,
  },
};

console.log(dev.brother.name);
// Destructuring
const { name, age, haveBrother } = dev;
// ------------------------------------
console.log(dev.brother.name);
// Destructuring
const { brother: { name: brotherName, age: brotherAge }, } = dev;
console.log(brotherName);
