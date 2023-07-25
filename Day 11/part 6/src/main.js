const button = document.querySelector(".mybtn");

// // DOM -------------------
// button.onclick = () => {
//   alert("hi");
// };
// // BOM --------------------
// button.onclick = () => {
//   window.alert("hi");
// };

// WHEN CLICK THE BUTTON, OPEN AND CLOSE BROWSER TAB
// button.onclick = () => {
//   window.open();
// };

// button.onclick = () => {
//   window.close();
// };

// window size ------------------
// button.onclick = () => {
//  console.log(window.screen);
// };

// windows location
button.onclick = () => {
  console.log(window.location);
  console.log(window.location.href);
  console.log(window.location.pathname);
  // window.location.replace('https://developerzahir.com')
  // window.history.back();
  window.history.forward();
};
