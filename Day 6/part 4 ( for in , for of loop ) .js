// // day 6 part 4
// const food = ["alo", "potol", "lao", "kumra"];
// // // print each food item using forEach loop
// // food.forEach((foodItem) => {
// //   console.log(foodItem);
// // });

// // // print each food item using for loop
// // for (foodItem in food) {
// //   console.log(food[foodItem]);
// // }

// // // another way
// // for (foodItem in food) {
// //   console.log(`${foodItem}. ${food[foodItem]}`);
// // }
// // for of loop, only for value
// for(foodItem of food){
//     console.log(foodItem);
// }



// const persone = {
//   name: "zahirul",
//   age: 30,
//   skill: "MERN",
// };

// for (data in persone) {
//   console.log(data);
// }



const persone = {
  name: "zahirul",
  age: 30,
  skill: "MERN",
};

for (data of persone) {
  console.log(data);
}


// For in loop with array and Array এর ক্ষেত্রে, for in loop  দিয়ে  index  এবং value   শো করাতে পারি,  কিন্তু অবজেক্টের ক্ষেত্রে for in loop  শুধুমাত্র key  গুলো দিয়ে থাকে। 

// Array এর ক্ষেত্রে, for of loop  দিয়ে শুধুমাত্র  value গুলো  শো করাতে পারি, কিন্তু অবজেক্টের ক্ষেত্রে for of loop  কাজ করে না। 
