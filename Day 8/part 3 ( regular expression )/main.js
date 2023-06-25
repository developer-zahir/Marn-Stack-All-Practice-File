// example of basic pattern
const text = "Hi, I'm Zahirul Islam and i love Briyani";
const pattern = /zahirul/i;
console.log(pattern.test(text));

// example of phone number pattern
const phone_number = "+8801775425643";
const phone_number_pattern = /^(01|\+8801|8801)[0-9]{9}$/;
console.log(phone_number_pattern.test(phone_number));

// example of email pattern
const email = "zahirulislam.iv@gmail.com";
const email_pattern = /^[a-z0-9\._]{1,}@[a-z]{1,5}\.[a-z]{1,5}$/;
console.log(email_pattern.test(email));
