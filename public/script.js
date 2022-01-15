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
  sun.style.display = "block";
  moon.style.display = "none";
  body.style.backgroundColor = "white";
  body.style.color = "black";
}
function handleNight() {
  sun.style.display = "none";
  moon.style.display = "block";
  body.style.backgroundColor = "black";
  body.style.color = "white";
}
