// Class 02 Assignment

/* Answer to number 01
 * Check the age of your marriage and provide age-appropriate Messages
 */
let boyosh = 20;
let biyarBoyosh = 18;
if (boyosh >= biyarBoyosh) {
  console.log("Apnar biyar boyosh hoiche ✅");
} else {
  console.log("Apnar biyar boyosh hoy nai ❌");
}

/* Answer to number 02
 * Prepare the resulting system where results can be found in Grade and GPA
 */

let result = 70;
if (result >= 80) {
  console.log("Your Greate is: A+ and GPA is: 5.0");
} else if (result >= 70) {
  console.log("Your Greate is: A and GPA is: 4.0");
} else if (result >= 60) {
  console.log("Your Greate is: A- and GPA is: 3.5");
} else if (result >= 50) {
  console.log("Your Greate is: B and GPA is: 3.0");
} else if (result >= 40) {
  console.log("Your Greate is: C and GPA is: 2.0");
} else if (result >= 33) {
  console.log("Your Greate is: D and GPA is: 2.0");
} else {
  console.log("Your Greate is: F and GPA is: 0.0");
}

/* Answer to number 02
 * Prepare a user access program based on age where everyone between the ages of 20 and 35 will have access
 */

let programAttendAge = 35;
if (programAttendAge >= 20 && programAttendAge <= 35) {
  console.log("You are eligible to join the program ✅");
} else {
  console.log("You are not eligible to join the program ❌");
}
