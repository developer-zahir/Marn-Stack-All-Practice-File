/** class topic --
 * localstorage
 * session storage
 * cookie storage
 *
 */

//  we have 5 student data -- > students_data

// local storage oparetoin
const student_data_json = JSON.stringify(students_data);
localStorage.setItem("students_data", student_data_json);
const student_json_to_data = JSON.parse(localStorage.getItem("students_data"));
localStorage.removeItem("students_data");

// session storage oparetion
const name = "Md Zahirul Islam";
const name_to_json = JSON.stringify(name);
sessionStorage.setItem("name", name_to_json);
const name_json_to_data = JSON.parse(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

// cookie storage
const expire_time = new Date();
expire_time.setTime(Date.now() + 1000 * 10);
document.cookie = `name = Md Zahirul Islam; expires = ${expire_time.toUTCString()}.`;

