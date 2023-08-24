// // Promise function
// const age = 21;
// const ageCheck = new Promise((resolve, reject) => {
//   if (age >= 21) {
//     resolve("Ready for biya");
//   } else {
//     reject("You are not ready for biya");
//   }
// });
// ageCheck
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Async Await function --------
// const data = "I love Async await";
// async function amiTumi() {
//   const msg = await data;
//   console.log(msg);
// }

// console.log("line 1");
// console.log("line 2");
// console.log("line 3");
// amiTumi();
// console.log("line 4");
// console.log("line 5");
// console.log("line 6");

// /*
// ##Output
// ----------------
// line 1
// line 2
// line 3
// line 4
// line 5
// line 6
// I love Async await

// */

// // callback function
// const result = (a, b, name) => {
//   return `My name is  ${name()}, and (a + b) = ${a + b }`;
// };

// console.log(
//   result(2, 4, function () {
//     return "Zahir";
//   })
// );

// Hot to get data form api
const getPosts = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
getPosts();
