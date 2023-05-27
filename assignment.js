/**
 * Answer to number 01
 * Create a function that will return children, teenagers, young people, old people from the age
 */
function age_checker(age = 0) {
    let message;
    if (age <= 0) {
        message = "Invilid age";
    } else if (age <= 12) {
        message = " Childeren 👶";
    } else if (age <= 19) {
        message = "Teenagers 👦";
    } else if (age <= 35) {
        message = "Young people 👨";
    } else {
        message = "Old people  🧓 ";
    }
    return message;
}
console.log(age_checker(20));

/**
 * Answer to number 01
 * Create a function that will return the area of a rectangle, square, triangle
 */

/**
 * Answer to number 01
 * GPA, CGPA, GRADE function for result publishing
 */

function get_gpa(mark = 0) {
    let gpa;
    let great;
    if (mark >= 0 && mark < 33) {
        gpa = 0;
        great = "F";
    } else if (mark >= 33 && mark < 40) {
        gpa = 1;
        great = "D";
    } else if (mark >= 40 && mark < 50) {
        gpa = 2;
        great = "C";
    } else if (mark >= 50 && mark < 60) {
        gpa = 3;
        great = "B";
    } else if (mark >= 60 && mark < 70) {
        gpa = 3.5;
        great = "A-";
    } else if (mark >= 70 && mark < 80) {
        gpa = 4;
        great = "A";
    } else if (mark >= 80 && mark <= 100) {
        gpa = 4.5;
        great = "A+";
    } else {
        gpa = "invalid";
        great = "invalid";
    }
   return gpa, great;
    
}


function get_result(name = " [ Your Name ]", bng = 0, eng = 0, math = 0, islam = 0) {
    let bng_gpa = get_gpa(bng);
    let eng_gpa = get_gpa(eng);
    let math_gpa = get_gpa(math);
    let islam_gpa = get_gpa(islam);
    let cgpa;

    if (bng >= 33 && eng >= 33 && math >= 33 && islam >= 33) {
        cgpa = (bng_gpa + eng_gpa + math_gpa + islam_gpa) / 4;
    } else {
        cgpa = 0;
    }
    // result return
    return `
    Hi ${name} Here is your result sheed:
    Bangla mark ${bng} and GPA = ${bng_gpa} 
    English mark ${eng} and GPA = ${eng_gpa} 
    Math mark ${math} and GPA = ${math_gpa} 
    Islam mark ${islam} and GPA = ${islam_gpa} 
    ------------------------------------------------
    Your final CGPA is =   ${cgpa}
    `;
}
// Send data according to, name, bng,eng,math, islam
console.log(get_result("Al Imran", 70, 80, 100, 90));
