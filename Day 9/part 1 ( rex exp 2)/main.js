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

// example of url pattern
const usr_profile_url = "https://info.facebook.com";
const url_pattern = /^(http:\/\/|https:\/\/)[a-z0-9\.]{1,}\.[a-z]{3,5}$/;
console.log(url_pattern.test(usr_profile_url));

// example of password pattern
const user_pass = "Admin123";
const pass_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{4,}$/;
console.log(pass_pattern.test(user_pass));
