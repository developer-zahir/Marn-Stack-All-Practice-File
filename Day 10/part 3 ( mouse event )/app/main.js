// // practice 01
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   alert("Button click done");
// });

// // ----------------
// function button_click() {
//   alert("Button click done 2");
// }
// button.addEventListener("click", button_click);

// practice 02
// const btn_group = document.querySelectorAll(".btn-group button");
// btn_group.forEach((item, index) => {
//   item.onclick = () => {
//     item.classList.toggle('active')
//   };
// });





// practice 03
const input = document.querySelector("input");
// input.onclick = (e) => {
//   input.style.color = "red";
//   e.target.style.color = "green";
//   // this keyword not working on arrow function
//   this.style.color = "red";
// };

input.addEventListener("click", function () {
  this.style.color = "red";
});
