// function declaretion
function sendMessage1(name) {
  return `Hi, ${name} Eid Mubarak`;
}
console.log(sendMessage1("Zahir"));

// function exprestion
const sendMessage2 = function (name) {
  return `Hi, ${name} Eid Mubarak`;
};
console.log(sendMessage2("Zahir"));

// arrow function
const sendMessage3 = (name) => {
  return `Hi, ${name} Eid Mubarak`;
};
console.log(sendMessage3("Zahir"));

// arrow function for single statement
const sendMessage4 = (name) => `Hi, ${name} Eid Mubarak`;
console.log(sendMessage4("Zahir"));
