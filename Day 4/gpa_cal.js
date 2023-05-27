function get_gpa(name = "[ Your Name ]", mark = 0) {
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
    } else if (mark >= 90 && makr < 100) {
        gpa = 5;
    } else {
        gpa = "invalid";
    }
    let final_gpa_formate = `Hi, ${name}, Your mark is = ${mark}, and your GPA is = ${gpa}`;
    return final_gpa_formate;
}
console.log(get_gpa("zairul islam", 80));
