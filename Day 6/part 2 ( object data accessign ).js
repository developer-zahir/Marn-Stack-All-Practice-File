// object data accessing.....
const students = [
  {
    id: 1,
    name: "Md Zahirul Islam",
    age: 20,
    location: "Bauphal",
    foods: ["Salad", "Bread", "Steak"],
    edu: {
      jsc: 3,
      psc: 4,
      ssc: null,
      hsc: null,
    },
  },
  {
    id: 2,
    name: "Abudl Momin",
    age: 25,
    location: "Madonpura",
    foods: ["Fish", "Eggs", "Apple Juice"],
    edu: {
      jsc: 2,
      psc: 4,
      ssc: 3,
      hsc: null,
    },
  },
  {
    id: 3,
    name: "Al Imran",
    age: 24,
    location: "Kalaiya",
    foods: ["Cake", "Eggs", "Milk"],
    edu: {
      jsc: 3,
      psc: 2,
      ssc: 3,
      hsc: null,
    },
  },
  {
    id: 4,
    name: "Asadur",
    age: 23,
    location: "Madonpura",
    foods: ["Pie", "Cupcake", "Pizza"],
    edu: {
      jsc: 4,
      psc: 3,
      ssc: 2,
      hsc: null,
    },
  },
];

console.log(students[1].name);
