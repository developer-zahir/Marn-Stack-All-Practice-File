//arry (Data Structure)

const food = ["alo", "pttol", "law", "kumra"];

console.log(food[1]);

const food2 = ["alo", "pttol", ["Joy", "promis"], "kumra"];

console.log(food2[2][1], food2[2][0]);

const devs = [
  ["Promis", 55, "Web"],
  ["Joy", 50, "digital"],
  ["kumar", 6554, "laravel", ["Mern", "website"]],
];

console.log(devs[2][3][0]);

/**
 * array push function
 */
const food3 = ["alo", "pttol", "law"];
food3.push("kumra", "golap");
food3.push("fulkopi");
food3.push("tometo");

console.log(food3);

/**
 * array pop function
 */
const food4 = ["alo", "pttol", "law"];

food4.pop();

console.log(food4);

// const unshift function
const food5 = ["alo", "pttol", "law"];

food5.unshift("kumra", "begun");

console.log(food5);

// const shift function
const food6 = ["alo", "pttol", "law"];

food6.shift();

console.log(food6);

/**
 * slice function
 */
const food7 = ["alo", "pttol", "law", "kali", "bali", "jam", "togori"];

const s1 = food7.slice(0, 1);
const s2 = food7.slice(2, 3);
const s3 = food7.slice(3, 5);

const food8 = s1.concat(s2.concat(s3));

console.log(food8);

/**
 * slice function 2
 *
 */

const food9 = ["alo", "pttol", "law", "kali", "bali", "jam", "togori"];

const food10 = food.slice(2, 5);

console.log(food9);
console.log(food10);

/**
 * splice function
 *
 */

const food11 = ["alo", "pttol", "law", "kali", "bali", "jam", "togori"];

const food12 = food.splice(2, 3);

console.log(food11);
console.log(food12);

const food13 = ["alo", "pttol", "law"];
const food14 = ["rakib", "kali", "bali", "jam", "togori"];

console.log(food13.concat(food14));
