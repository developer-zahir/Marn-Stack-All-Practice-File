// //  day 6 part 5

// /** type of loop
//  * for
//  * for in
//  * for of
//  * forEach
//  * map
//  * while
//  * dowhile
//  */

// // This class topic
// // find
// // filter
// // some

// const students = [
//   {
//     id: 1,
//     name: "Nusrat",
//     age: 5,
//     location: "Mirpur",
//     gender: "Female",
//     isMarried: false,
//     fev_movies: ["KGF", "Pathan", "Pushpa"],
//     result: {
//       ban: 60,
//       eng: 80,
//       scingce: 70,
//       social_scienc: 56,
//       reli: 55,
//     },
//   },
//   {
//     id: 2,
//     name: "Imrn",
//     age: 20,
//     location: "Kalaiya",
//     gender: "Male",
//     isMarried: false,
//     fev_movies: ["Avatar", "Pathan", "Titanic"],
//     result: {
//       ban: 50,
//       eng: 70,
//       scingce: 66,
//       social_scienc: 76,
//       reli: 85,
//     },
//   },
//   {
//     id: 3,
//     name: "Sakib",
//     age: 30,
//     location: "Madanpura",
//     gender: "Male",
//     isMarried: true,
//     fev_movies: ["Avatar", "Amma jaan", "Jannat"],
//     result: {
//       ban: 50,
//       eng: 70,
//       scingce: 66,
//       social_scienc: 76,
//       reli: 85,
//     },
//   },
// ];

// // console.log(students.filter((xx) => xx.location != "Madanpura"));
// // console.log(students.filter((person) => person.isMarried !== true));
// // console.log(students.find((person)=> person.gender == 'Female'))
// console.log(students.some((person) => person.name == "Sakib"));

// home tast ------------
const devs = [
  {
    id: 1,
    name: "Md Zahirl Islam",
    gender: "Male",
    age: 20,
    skill: "Web Developer",
    sallery: 20000,
    location: "Dhaka",
  },
  {
    id: 2,
    name: "Abdul Momin",
    gender: "Male",
    age: 22,
    skill: "Web Designer",
    sallery: 15000,
    location: "Bauphal",
  },
  {
    id: 3,
    name: "Asadur Islam",
    gender: "Male",
    age: 21,
    skill: "Web Designer",
    sallery: 18000,
    location: "Bauphal",
  },
  {
    id: 4,
    name: "Robiul Islam",
    gender: "Male",
    age: 19,
    skill: "Graphic Desinger",
    sallery: 18000,
    location: "Bilbilash",
  },
  {
    id: 5,
    name: "Al Imran",
    gender: "Male",
    age: 24,
    skill: "Digital Marketer",
    sallery: 25000,
    location: "Kalaiya",
  },
  {
    id: 6,
    name: "Sumaiya Aktar",
    gender: "Female",
    age: 19,
    skill: "Digital Marketer",
    sallery: 30000,
    location: "Bauphal",
  },
  {
    id: 7,
    name: "Laigu Aktar",
    gender: "Female",
    age: 29,
    skill: "Graphic Desinger",
    sallery: 35000,
    location: "Dhaka",
  },
  {
    id: 8,
    name: "Rahima Begum",
    gender: "Female",
    age: 32,
    skill: "Web Designer",
    sallery: 32000,
    location: "Dhaka",
  },
  {
    id: 9,
    name: "Abdur Rohim",
    gender: "Male",
    age: 32,
    skill: "MERN Stack Developer",
    sallery: 35000,
    location: "Dhaka",
  },
  {
    id: 10,
    name: "Sakib Hossin",
    gender: "Male",
    age: 20,
    skill: "MERN Stack Developer",
    sallery: 25000,
    location: "Bauphal",
  },
];
// ------------ filter -----------
console.log(devs.filter((dev) => dev.age == 20 ));
devs.filter((person)=>{
  
})

// console.log(devs.filter((dev) => dev.age >= 20 && dev.gender !== "Female"));
// //  ----------- find  -----------
// console.log(devs.find((dev) => dev.age === 20));
// // ------------ some  -----------
// console.log(devs.some((dev) => dev.name == "Al Imran"));

// //  another home task, 10 student data and gpa, cgpam and gread
