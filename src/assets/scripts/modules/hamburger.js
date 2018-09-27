console.log('hamburger ON');
const toggle = document.querySelector(".hamburger");
const menu = document.querySelector(".fixed-menu");
const body = document.body;
console.log(toggle);

toggle.addEventListener("click", e => {
  console.log("click");
  e.preventDefault();
  if (toggle.classList.contains("hamburger--active")) {
    toggle.classList.remove("hamburger--active");
    menu.style.left = -9999 + "px";
    body.classList.remove("offscroll");
  } else {
    toggle.classList.add("hamburger--active");
    menu.style.left = 0;
    body.classList.add("offscroll");
  }
});