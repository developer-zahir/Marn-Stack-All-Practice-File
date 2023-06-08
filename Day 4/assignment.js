/**
 * Answer to number 01
 * Create a function that will return children, teenagers, young people, old people from the age
 */
// function age_checker(age = 0) {
//     let message;
//     if (age <= 0) {
//         message = "Invilid age";
//     } else if (age <= 12) {
//         message = " Childeren 👶";
//     } else if (age <= 19) {
//         message = "Teenagers 👦";
//     } else if (age <= 35) {
//         message = "Young people 👨";
//     } else {
//         message = "Old people  🧓 ";
//     }
//     return message;
// }
// console.log(age_checker(20));

/**
 * Answer to number 02
 * Create a function that will return the area of a rectangle, square, triangle
 */
// function area_cal() {
//     let shape = prompt("Enter the shape ( rectangle, square,triangle) :");
//     if (shape === "rectangle") {
//         let length = prompt("Enter the length of the rectangle:");
//         let width = prompt("Enter the width of the rectangle:");
//         console.log(`The area of the rectangle is: ${length * width}`);
//     } else if (shape === "square") {
//         let side = prompt("Enter the length of a side of the square:");
//         console.log(`The area of the square is: ${side * side}`);
//     } else if (shape === "triangle") {
//         let base = prompt("Enter the length of the triangle: ");
//         let height = prompt("Enter the height of the trianlge:");
//         console.log(`the area of the triangle is ${(base * height) / 2}`);
//     }
// }
// area_cal();

/**
 * Answer to number 03
 * GPA, CGPA, GRADE function for result publishing
 */

// function get_gpa(mark = 0) {
//     let gpa;
//     let grade;

//     if (mark >= 0 && mark < 33) {
//         gpa = 0;
//         grade = "F";
//     } else if (mark >= 33 && mark < 40) {
//         gpa = 1;
//         grade = "D";
//     } else if (mark >= 40 && mark < 50) {
//         gpa = 2;
//         grade = "C";
//     } else if (mark >= 50 && mark < 60) {
//         gpa = 3;
//         grade = "B";
//     } else if (mark >= 60 && mark < 70) {
//         gpa = 3.5;
//         grade = "A-";
//     } else if (mark >= 70 && mark < 80) {
//         gpa = 4;
//         grade = "A";
//     } else if (mark >= 80 && mark <= 100) {
//         gpa = 4.5;
//         grade = "A+";
//     } else {
//         gpa = "invalid";
//         grade = "invalid";
//     }

//     return { gpa: gpa, grade: grade };
// }
// function get_result(name = "[ Your Name ]", bng = 0, eng = 0, math = 0, islam = 0) {
//     let bng_result = get_gpa(bng);
//     let eng_result = get_gpa(eng);
//     let math_result = get_gpa(math);
//     let islam_result = get_gpa(islam);
//     let cgpa;

//     if (bng >= 33 && eng >= 33 && math >= 33 && islam >= 33) {
//         cgpa = (bng_result.gpa + eng_result.gpa + math_result.gpa + islam_result.gpa) / 4;
//     } else {
//         cgpa = 0;
//     }

//     // result return
//     return `
//       Hi ${name}, here is your result sheet:
//       Bangla mark ${bng} and GPA = ${bng_result.gpa} (${bng_result.grade})
//       English mark ${eng} and GPA = ${eng_result.gpa} (${eng_result.grade})
//       Math mark ${math} and GPA = ${math_result.gpa} (${math_result.grade})
//       Islam mark ${islam} and GPA = ${islam_result.gpa} (${islam_result.grade})
//       ------------------------------------------------
//       Your final CGPA is: ${cgpa}
//     `;
// }

// // Send data: name, bng, eng, math, islam
// console.log(get_result("Al Imran", 70, 80, 100, 90));

/**
 * Answer to number 04
 * Create an age calculator function
 */

// function age_cal(name, birth_year) {
//     let date = new Date();
//     let cr_year = date.getFullYear();
//     let age = cr_year - birth_year;
//     return `Hi, ${name}, Your current age is = ${age} `;
// }
// // Send data: name, birth_year
// console.log(age_cal('zahir', 2002));

/**
 * Answer to number 05
 * Create a BMI function for health
 */
// const bmi_cal = (weight, height) => {
//     let bmi = weight / ((height * height) / 10000);
//     let message;
//     if (bmi < 18.5) {
//         ("Your are under weight");
//     } else if (bmi >= 18.5 && bmi < 25) {
//         ("Your weight is normal");
//     } else if (bmi >= 25 && bmi < 30) {
//         ("Over weight");
//     }
//     return message;
// };
// // send data: weight, height
// console.log(bmi_cal());





/**
 * Answer to number 06
 * Create a currency converter function from taka to USD, CAD, POUND, EURO etc
 */
function currency_converter(amount = 1, currency_name = "USD") {
    let rate;
    //
    switch (currency_name) {
        case "USD":
            rate = 0.0093;
            break;
        case "CAD":
            rate = 0.013;
            break;
        case "POUND":
            rate = 0.0076;
            break;
        case "EURO":
            rate = 0.0087;
            break;
        case "RUPI":
            rate = 0.77;
            break;
    }

    return `${amount * rate}`;
}
//  send data: amount of BDT, currency name
console.log(currency_converter(300, "USD"));