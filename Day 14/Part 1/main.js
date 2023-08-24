// Function declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 4));

// Function expression
const add2 = function (a, b) {
  return a + b;
};
console.log(add2(2, 7));

// Arrow function
const add3 = (a, b) => {
  return a + b;
};
console.log(add3(3, 4));

// Curried function
function add4(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add4(4)(4)(4));

// callback function
const result = (a, b, name) => {
  return `My name is  ${name()}, and (a + b) = ${a + b}`;
};

console.log(
  result(2, 4, function () {
    return "Zahir";
  })
);

// Promise function
const age = 21;
const ageCheck = new Promise((resolve, reject) => {
  if (age >= 21) {
    resolve("Ready for biya");
  } else {
    reject("You are not ready for biya");
  }
});
ageCheck
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// Async Await function --------
const data = "I love Async await";
async function amiTumi() {
  const msg = await data;
  console.log(msg);
}

console.log("line 1");
console.log("line 2");
console.log("line 3");
amiTumi();
console.log("line 4");
console.log("line 5");
console.log("line 6");

/*
##Output 
----------------
line 1
line 2
line 3
line 4
line 5
line 6
I love Async await

*/
