const sakib_khan = document.querySelector(".sakib_khan");
const salman_khan = document.querySelector(".salman_khan");
const shah_rukh_khan = document.querySelector(".shah_rukh_khan");
const amir_khan = document.querySelector(".amir_khan");
const image_preview = document.querySelector(".imge_preview img");
const remove_image = document.querySelector(".remove_image");
console.log(image_preview);

// sakib khan------------------
sakib_khan.onclick = () => {
  image_preview.setAttribute("src", "./assets/img/loding.gif");
  setTimeout(() => {
    image_preview.setAttribute("src", "./assets/img/sakib.jpg");
  }, 2000);
};

// salman khan--------------------
salman_khan.onclick = () => {
  image_preview.setAttribute("src", "./assets/img/loding.gif");
  setTimeout(() => {
    image_preview.setAttribute("src", "./assets/img/salman.jpg");
  }, 2000);
};

// shahrukh khan--------------------
shah_rukh_khan.onclick = () => {
  image_preview.setAttribute("src", "./assets/img/loding.gif");
  setTimeout(() => {
    image_preview.setAttribute("src", "./assets/img/shahrukh.jpg");
  }, 2000);
};
// amir khan--------------------
amir_khan.onclick = () => {
  image_preview.setAttribute("src", "./assets/img/loding.gif");
  setTimeout(() => {
    image_preview.setAttribute("src", "./assets/img/amir.jpg");
  }, 2000);
};
