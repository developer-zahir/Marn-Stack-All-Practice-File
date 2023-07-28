const value = document.querySelector("#value");
const submite = document.querySelector(".submite");
const output = document.querySelector(".output");
const progress_bar = document.querySelector(".progress-bar");

let count;
submite.onclick = (e) => {
  const val = value.value;
  output.children[0].innerHTML = val;
  progress_bar.style.width = "100%";
  count = val;
  let count_down = setInterval(() => {
    count--;
    output.children[0].innerHTML = count;
    progress_bar.style.width = `${(100 * count) / val}%`;
    if (count <= 0) {
      clearInterval(count_down);
    }
  }, 1000);
};
