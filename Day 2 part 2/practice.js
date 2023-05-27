// Switch case practice
// let name = "momin";
// switch (name) {
//     case "asadur":
//         console.log("Roll : 441852");
//         break;
//     case "momin":
//         console.log("Roll 441917");
//         break;
//     case "zahir":
//         console.log("Roll 441916");
//         break;
//     default:
//         console.log("tumi nam blo nai");
// }

// if else condition practice
// let mark = 100;
// if (mark >= 80 && mark <= 100) {
//     console.log(`Tumi ${mark} paicho, Tumi A+ paicho`);
// } else if (mark >= 70 && mark <= 79) {
//     console.log(`Tumi ${mark} paicho, Tumi A paicho`);
// } else if (mark >= 60 && mark <= 69) {
//     console.log(`Tumi ${mark} mark paicho, Tumi A- paicho`);
// } else if (mark >= 50 && mark <= 59) {
//     console.log(`Tumi ${mark} mark paicho, Tumi B paicho`);
// } else if (mark >= 40 && mark <= 49) {
//     console.log(`Tumi ${mark} mark paicho, Tumi C paicho`);
// } else if (mark >= 33 && mark <= 39) {
//     console.log(`Tumi ${mark} mark paicho, Tumi D paicho`);
// } else {
//     console.log(`Tomi ${mark} mark paicho, tumi fell`);
// }

//  switch case practice
// let day = 6;
// switch (day) {
//     case 1:
//         console.log("Saturday");
//         break;
//     case 2:
//         console.log("Sunday");
//         break;
//     case 3:
//         console.log("Monday");
//         break;
//     case 4:
//         console.log("Tuesday");
//         break;
//     case 5:
//         console.log("Wednesday");
//         break;
//     case 6:
//         console.log("Thursday");
//         break;
//     case 7:
//         console.log("Friday");
//         break;
//     default:
//         break;
// }

/** For loop practice
 * initial value
 * condition
 * increment/decrement (++/--)
 * Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11

 */

// for (let i = 3; i <= 100; i = i + 3) {
//     if (i % 11 == 0) {
//         console.log(`${i} is divisible by 11`);
//     }
// }

// Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4
// for (let i = 1; i <= 500; i++) {
//     if (i % 3 === 0 && i % 4 === 0) {
//         console.log(i);
//     }
// }

/**Truthy value and False e value checker
 * ----------------------------------------
 * false
 * null
 * NaN
 * undefined
 * Empty string ("")
 * 0
 * -0
 * 0n
 * console.log(false && "dog");
 * console.log(0 && "dog");
 */

// JavaScript truthy value and falsy value chekiang program
// let name = "";
// if (name) {
//     console.log(`${name} Truthy value`);
// } else {
//     console.log(`${name} Falsy  value`);
// }

// let count = 1;
// for (let i = 0; i <= 10000; i = i + 200) {
//     console.log(i + "=count -- > " + count++);

//     if (i == 10000) {
//         for (let sl = 10000; sl > 0; sl = sl - 200) {
//             console.log(sl + "=count -- > " + count--);
//         }
//     }
// }

// for ( let i = 1; i<= 100; i++){
//     console.log(i)
// }
// info()
