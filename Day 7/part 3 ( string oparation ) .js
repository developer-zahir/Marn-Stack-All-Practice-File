/** class topic
 * string method
 *
 */

// old way
let text1 = new String("Hi, My name is Zahir"); // object
// new way
let text2 = " Hi, My name is Zahir ";

//  string length and remove white space
let text3 = " Hi, My name is Zahir ";
console.log(text3.length);
console.log(text3.trim().length);

let text = "Hi, My name is Zahir";
console.log(text.toLowerCase());
console.log(text.toLocaleLowerCase());
console.log(text.toUpperCase());
console.log(text.replace("Zahir", "Rayhan"));

let text4 = "Hi, My name is Zahir";
console.log(text4.startsWith("Hi")); // true
console.log(text4.endsWith("Hi")); // false

let text5 = "Hi, My name is Zahir";
console.log(text5.includes("Zahir")); // true
console.log(text5.includes("Robin")); // false

let text6 = "Hi, My name is Zahir";
console.log(text6.concat(" and i love biriyani!"));

let text7 = "Hi, My name is Zahir";
console.log(text7.split(" "));

let text8 = "Hi, My name is Zahir";
let result = text8.slice(0, 2);
console.log(result);
