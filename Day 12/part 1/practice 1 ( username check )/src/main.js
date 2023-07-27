const username = document.querySelector("#username");
const submite = document.querySelector(".submite");
const msg = document.querySelector(".msg");

username.onkeyup = (e) => {
  let value = e.target.value;
  if (value.length >= 0 && value.length < 5) {
    msg.innerHTML = `<span class="text-danger d-block mt-2">ইউজার নেম মিনিমাম ৫ ক্যারেক্টার হতে হবে...</span>`;
  } else if (value.length >= 5 && value.length < 10) {
    msg.innerHTML = `<span class="text-success d-block mt-2">ইউজার নেম সঠিক হয়েছে...</span>`;
  } else if (value.length > 10) {
    msg.innerHTML = `<span class="text-danger d-block mt-2">ইউজার নেম এক থেকে পাঁচ ক্যারেক্টার মধ্যে হওয়া উচিত...</span>`;
  }
};
