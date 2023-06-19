/** Class topic
 * Advance date / time / different calculation
 * facebook/instagram/linkeding/daraz data structure
 *
 */
const last_donate_date = "June 18, 2023";
let old_date = new Date(last_donate_date).getTime();
let new_date = Date.now();
let diffInDays = Math.floor((new_date - old_date) / (1000 * 60 * 60 * 24));
console.log(diffInDays);
