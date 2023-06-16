/** Class topic ---
 * - Date
 * - Time
 */

const date = new Date();
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth()); // To see the number of the month [ The month number starts with zero]

//  To see the full name of the month
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(month[date.getMonth()]);

// To see the number of the day
console.log(date.getDay());
// To see the full name of the day
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
console.log(days[date.getDay()]);

// Time from 1970 to present in milliseconds
console.log(date.getTime());
// How to work get hours function
console.log(date.getHours());
if (date.getHours() > 12) {
  console.log(date.getHours() - 12 + " PM");
} else {
  console.log(date.getHours() + " AM");
}

//  Simple clock design
console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getMilliseconds()}`);
