
const toggle = document.querySelector(".hamburger");
const menu = document.querySelector(".fixed-menu");
const body = document.body;

toggle.addEventListener("click", e => {
  e.preventDefault();
  if (toggle.classList.contains("hamburger--active")) {
    toggle.classList.remove("hamburger--active");
    menu.style.left = -100 + "%";
    body.classList.remove("offscroll");
  } else {
    toggle.classList.add("hamburger--active");
    menu.style.left = 0;
    body.classList.add("offscroll");
  }
});
