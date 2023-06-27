// /**class topic
//  * ** DOM Object ***
//  * DOM Object
//  * Title
//  * Domain
//  * Images
//  * Doctype
//  * Body
//  * Head
//  * URL
//  * Links
//  * Scripts
//  * form
//  * Embeds
//  * Cookie
//  */

// /** DOM Selectors
//  * getElementById()
//  * getElementsByClassName()
//  * getElementsByTagName()
//  * querySelector()
//  * querySelectorAll()
//  */

// //  whole document print
// console.log(document);
// //  specific element
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.images);
// console.log(document.URL);
// console.log(document.links);
// console.log(document.scripts);
// console.log(document.forms);
// console.log(document.embeds);
// console.log(document.cookie);

// dora dorir part -------------
console.log(document.getElementById("heading"));
console.log(document.getElementsByClassName("paragraph")[0]);
console.log(document.getElementsByTagName("ul")[0]);
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p")[1]);
console.log((document.querySelector("ul li:nth-child(2)").style.color = "red"));
console.log((document.querySelector("ul li:nth-child(2)").style.backgroundColor = "green"));

// extra topic --
// innterText
// textContent
// innterHTML
