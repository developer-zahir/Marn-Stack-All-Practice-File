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
