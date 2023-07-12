const textarea = document.querySelector("textarea");
const p = document.querySelector("p");

textarea.addEventListener("keypress", function () {
  const inpur_value = this.value;
  p.innerHTML = inpur_value;
});






// ---------------------
// textarea.