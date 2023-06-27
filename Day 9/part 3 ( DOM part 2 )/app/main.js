// console.log(document.getElementsByTagName("h1"));
// document.querySelector("h1").setAttribute("name", "zahir");
// document.getElementsByTagName("h1")[0].setAttribute("isAdmin", "yes");
// document.querySelector("h1").id = "heading";
// document.querySelector("h1").className = "paragraph";
// document.querySelector(".this_is_class").style.color = "red";
// // ----------------------------------------------------
// console.log(document.querySelector("h2").getAttribute("id"));
// console.log(document.querySelector("h1").getAttribute("name"));

// document.querySelector("h1").innerText = "Hi, My name is Zahir!";
// document.querySelector("h1").textContent = "Hi, My name is Zahir!";

// document.querySelector("h1").innerHTML = `<li>Hi, I'm Zahirul Islam, I love Briyani! </li>`;

// console.log(document.querySelector("h2").classList.add('hi', 'bay'));
// console.log(document.querySelector("h2").classList.replace('zahir', 'rabby'));
// console.log(document.querySelector("h2").classList.contains('zahir'));

// console.log(document.querySelector('.box').children[0]);
// console.log(document.querySelector('.box').children[0].children[0]);

// console.log(document.querySelector('span').parentElement); // children
// console.log(document.querySelector('span').parentElement.parentElement); // mother


// Mother element to childen 
// let childen = document.querySelector(".mother_element").children[0];
// console.log(childen); // 1st
// console.log(childen.nextElementSibling); // 2nd
// console.log(childen.nextElementSibling.nextElementSibling); //3rd
// console.log(childen.nextElementSibling.nextElementSibling.nextElementSibling); // 4th


console.log(document.querySelector('.mother_element').lastElementChild.nextElementSibling);