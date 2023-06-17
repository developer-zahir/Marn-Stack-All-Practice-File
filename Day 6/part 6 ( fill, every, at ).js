/** Day 6 part 6
 * every
 * at
 * fill
 * reduce
 * from
 */

// How to work every method
// const age = [13, 33, 50, 60, 65, 80];
// console.log(age.every(function(item){
//     return item >=10; // output: true
// }))
// // another way
// console.log(age.every((item)=> item>= 10));

// another way
// console.log(
//   age.every(function (item) {
//     return item >= 20;
//   })
// );

// // How to work at method
// const food = ["alo", "potol", "law", "kumra"];
// // array index accessing
// console.log(food[1]); // output: potol

// // another way array index accessing
// console.log(food.at(1)); // output: potol

// How to work fill method
const food = ["alo", "potol", "law", "kumra"];
console.log(food); // ["alo", "potol", "law", "kumra"]
console.log(food.fill("Hi")); // [ 'Hi', 'Hi', 'Hi', 'Hi' ]
