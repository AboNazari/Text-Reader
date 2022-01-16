const toggle = document.querySelector("[data-toggle]");
const nav = document.querySelector("[data-nav]");
const navbar = document.querySelector("[data-navbar]");
const logo = document.querySelector("[data-logo]");
const control = document.querySelector(".control");
const close = document.querySelector(".close");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const body = document.querySelector("body");
toggle.addEventListener("click", handleHover);
close.addEventListener("click", handleClose);
window.addEventListener("resize", checkResize);
sun.addEventListener("click", handleNight);
moon.addEventListener("click", handleDay);

function handleHover() {
  nav.style.display = "block";
  toggle.style.display = "none";
  logo.style.display = "none";
}

function handleClose() {
  nav.style.display = "none";
  toggle.style.display = "block";
  logo.style.display = "block";
}

function checkResize() {
  if (window.innerWidth > 768) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}
function handleDay() {
  sun.style.opacity = "1";
  moon.style.opacity = "0";
  moon.style.translate = "1em";
  sun.style.translate = "0em";
  body.style.backgroundColor = "white";
  body.style.color = "black";
  text.style.backgroundColor = "white";
}
function handleNight() {
  sun.style.opacity = "0";
  moon.style.opacity = "1";
  moon.style.translate = "-1em";
  sun.style.translate = "1em";
  body.style.backgroundColor = "black";
  body.style.color = "white";
  text.style.backgroundColor = "rgb(235, 235, 227)";
}

// The Text Area Section
let currentCharacter;
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const textBox = document.getElementById("text");
const speed = document.getElementById("speed");

playButton.addEventListener("click", () => {
  playText(textBox.value);
});
pauseButton.addEventListener("click", pauseText);
stopButton.addEventListener("click", stopText);
speed.addEventListener("input", () => {
  stopText();
  playText(utterance.text.substring(currentCharacter));
});

const utterance = new SpeechSynthesisUtterance(text);
utterance.addEventListener("boundary", (e) => {
  currentCharacter = e.charIndex;
});
utterance.addEventListener("end", () => {
  textBox.disabled = false;
});

function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking)
    return speechSynthesis.resume();
  if (speechSynthesis.speaking) return;
  utterance.text = text;
  utterance.rate = speed.value || 1;
  textBox.disabled = true;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
