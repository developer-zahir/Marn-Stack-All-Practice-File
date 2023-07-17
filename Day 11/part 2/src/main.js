const user_form = document.getElementById("user_form");
const msg = document.querySelector(".msg");
const profile_image = document.querySelector("#profile_image");

// user form submite
user_form.onsubmit = (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);

  // validation
  if (!data.name || !data.email || !data.phone) {
    msg.innerHTML = create_alert("All fields are required");
  } else if (!isMobile(data.phone)) {
    msg.innerHTML = create_alert("Invalid phone number", "warning");
  } else if (!isEmail(data.email)) {
    msg.innerHTML = create_alert("Invalid email address", "warning");
  } else {
    msg.innerHTML = create_alert("Data submite done!", "success");
  }
  console.log(data);
};

// select profile image and show preview
profile_image.onchange = (e) => {
  const image_url = URL.createObjectURL(e.target.files[0]);
  profile_image.nextElementSibling.setAttribute("src", image_url);
};
