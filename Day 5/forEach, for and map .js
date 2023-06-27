const food = ["alo", "potol", "lao", "kumra"];

// using for each loop
food.forEach((item, index) => {
  console.log(index, item);
});

// using map loop
food.map((item, index) => {
  console.log(index, item);
});

// using for loop
for (let i = 0; i < food.length; i++) {
  console.log(i, food[i]);
}
