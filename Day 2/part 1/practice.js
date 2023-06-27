let user_age = 20;
let isMale = true;
let biyaAge;
let somman;
if (isMale == true) {
  biyaAge = 21;
  somman = "Vaiya,";
  if (user_age >= biyaAge) {
    console.log(somman + " Apni biya korar jonno ready");
  } else {
    console.log(somman + " Apnar biyar boysho hoy nai");
  }
} else {
  biyaAge = 18;
  somman = "Apu,";
  if (user_age >= biyaAge) {
    console.log(somman + " Apni biya korar jonno ready");
  } else {
    console.log(somman + " Apnar biyar boysho hoy nai");
  }
}
