import "./modules/hamburger";
import "./modules/footer";
import "./modules/blog-menu";

const items = document.querySelectorAll('.blog-menu__item');
const itemActive = document.querySelector('.blog-menu__item--active');
const btns = document.querySelectorAll('.blog-menu__btn');


for (let i = 0; i < btns.length; i++) {
  const button = btns[i];
  button.onclick = function () {
    let parent = this.parentNode;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.classList.remove("blog-menu__item--active");
    }
    parent.classList.add("blog-menu__item--active");
  }
}

// let nextParent = parent.nextElementSibling;
// let prevParent = parent.previousElementSibling;
// console.log(parent);
// console.log(nextParent);
// console.log(prevParent);
// nextParent.classList.remove("blog-menu__item--active");
// prevParent.classList.remove("blog-menu__item--active");