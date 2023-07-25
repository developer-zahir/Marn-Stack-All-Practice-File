// create alert ------------------------------------
const create_alert = (message, type = "danger") => {
  return `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <span>${message}</span>
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
    `;
};

// mobile number checking
const isMobile = (mobile) => {
  const pattern = /^(01|\+8801|8801)[0-9]{9}$/;
  return pattern.test(mobile);
};
// email number checking
const isEmail = (email) => {
  const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return pattern.test(email);
};
