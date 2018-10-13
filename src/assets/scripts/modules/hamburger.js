
const toggle = document.querySelector(".hamburger");
const menu = document.querySelector(".fixed-menu");
const body = document.body;
const activeClass = 'fixed-menu__item--active';
const location = window.location.href;
const links = document.querySelectorAll('.fixed-menu__link');

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  const parent = link.parentElement;
  if (link.href === location) {
    parent.classList.add(activeClass)
  }
}
toggle.addEventListener("click", () => {
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
