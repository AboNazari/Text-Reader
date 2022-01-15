const toggle = document.querySelector("[data-toggle]");
const nav = document.querySelector("[data-nav]");
const navbar = document.querySelector("[data-navbar]");
const logo = document.querySelector("[data-logo]");
toggle.addEventListener("click", handleHover);

function handleHover(e) {
  console.log(e.target.classList.contains("fa-hamburger"));

  e.target.className.replace("fas fa-align-justify", `fas fa-hamburger`);
}
