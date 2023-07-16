const user_form = document.getElementById("user_form");
const msg = document.querySelector(".msg");

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
};
