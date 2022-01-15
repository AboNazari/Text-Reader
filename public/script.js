const toggle = document.querySelector("[data-toggle]");
const nav = document.querySelector("[data-nav]");
const navbar = document.querySelector("[data-navbar]");
const logo = document.querySelector("[data-logo]");
const control = document.querySelector(".control");
const close = document.querySelector(".close");
toggle.addEventListener("click", handleHover);
close.addEventListener("click", handleClose);
window.addEventListener("resize", checkResize);

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
