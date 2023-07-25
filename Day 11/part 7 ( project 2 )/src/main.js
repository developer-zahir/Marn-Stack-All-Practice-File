let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function updateTimer() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    seconds++;
    milliseconds = 0;
  }
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }

  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minute").textContent = minutes;
  document.querySelector(".second").textContent = seconds;
  document.querySelector(".mSecond").textContent = milliseconds;
}

document.querySelector(".start").addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 10);
});

document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(timerInterval);
});

// reset button -------------------------
document.querySelector(".clear").addEventListener("click", function () {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minute").textContent = minutes;
  document.querySelector(".second").textContent = seconds;
  document.querySelector(".mSecond").textContent = milliseconds;
});
