/** class topic -
 * Date object now function
 * Math object
 *
 */

const date = new Date();
console.log(date.getTime());

//  another way
console.log(Date.now());





// ----------Math object ---------------
console.log(Math.PI);
console.log(Math.LOG10E);

console.log(Math.round(13.4544)); // output: 13
console.log(Math.round(13.5544)); // output: 14


console.log(Math.ceil(13.4544)); // output: 14
console.log(Math.floor(13.5544));   // output: 13

console.log(Math.min(10,40,50,5,80)); // output: 5
console.log(Math.max(10,40,50,5,80)); // output: 80

console.log(Math.pow(2,3)); // power 
console.log(Math.sqrt(144)); // root 
console.log(Math.floor(Math.random()*100000));