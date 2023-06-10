const students = [
  {
    id: 1,
    name: "Nusrat",
    age: 5,
    location: "Mirpur",
    gender: "Female",
    isMarried: false,
    fev_movies: ["KGF", "Pathan", "Pushpa"],
    result: {
      ban: 60,
      eng: 80,
      scingce: 70,
      social_scienc: 56,
      reli: 55,
    },
  },
  {
    id: 2,
    name: "Imrn",
    age: 20,
    location: "Kalaiya",
    gender: "Male",
    isMarried: false,
    fev_movies: ["Avatar", "Pathan", "Titanic"],
    result: {
      ban: 50,
      eng: 70,
      scingce: 66,
      social_scienc: 76,
      reli: 85,
    },
  },
  {
    id: 3,
    name: "Sakib",
    age: 30,
    location: "Madanpura",
    gender: "Male",
    isMarried: true,
    fev_movies: ["Avatar", "Amma jaan", "Jannat"],
    result: {
      ban: 50,
      eng: 70,
      scingce: 66,
      social_scienc: 76,
      reli: 85,
    },
  },
];

// // Show each persone name
// students.forEach((person)=>{
//    console.log(`Name: ${person.name}`);
// });

// // Show only male or female persone
// students.map((persone) => {
//   if (persone.gender == "Female") {
//     console.log(`Name: ${persone.name}`);
//   }
// });

// Print names of people who are 30 years old
// students.map((persone) => {
//   if (persone.age >= 30) {
//     console.log(`Student name: ${persone.name} and Age:${persone.age}`);
//   }
// });

