// day 6 part 6 sesher dike................
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

function get_gpa(mark = 0) {
  let gpa;
  let great;
  if (mark >= 0 && mark < 33) {
    gpa = 0;
    great = "F";
  } else if (mark >= 33 && mark < 40) {
    gpa = 1;
    great = "D";
  } else if (mark >= 40 && mark < 50) {
    gpa = 2;
    great = "C";
  } else if (mark >= 50 && mark < 60) {
    gpa = 3;
    great = "B";
  } else if (mark >= 60 && mark < 70) {
    gpa = 3.5;
    great = "A-";
  } else if (mark >= 70 && mark < 80) {
    gpa = 4;
    great = "A";
  } else if (mark >= 80 && mark <= 100) {
    gpa = 4.5;
    great = "A+";
  } else {
    gpa = "invalid";
    great = "invalid";
  }
  return {
    gpa: gpa,
    great: great,
  };
}

students.forEach((item) => {
  console.log(
    `Name: ${item.name}, Bangla Mark: ${item.result.ban},  GPA: ${get_gpa(item.result.ban).gpa} and Great: ${
      get_gpa(item.result.ban).great
    }`
  );
});
