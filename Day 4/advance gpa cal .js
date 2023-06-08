function get_gpa(mark = 0) {
  let gpa;
  if (mark >= 0 && mark < 33) {
    gpa = 0;
  } else if (mark >= 33 && mark < 40) {
    gpa = 1;
  } else if (mark >= 40 && mark < 50) {
    gpa = 2;
  } else if (mark >= 50 && mark < 60) {
    gpa = 3;
  } else if (mark >= 60 && mark < 70) {
    gpa = 3.5;
  } else if (mark >= 70 && mark < 80) {
    gpa = 4;
  } else if (mark >= 80 && mark < 90) {
    gpa = 4.5;
  } else if (mark >= 90 && mark <= 100) {
    gpa = 5;
  } else {
    gpa = "invalid";
  }
  return gpa;
}

function get_result(
  name = " [ Your Name ]",
  bng = 0,
  eng = 0,
  math = 0,
  islam = 0
) {
  let bng_gpa = get_gpa(bng);
  let eng_gpa = get_gpa(eng);
  let math_gpa = get_gpa(math);
  let islam_gpa = get_gpa(islam);
  let cgpa;
  // if any subject you dot f, then you not get cgpa
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
