const asideBtn = document.querySelector('.js-aside-btn');
const aside = document.querySelector('.js-aside');
// const items = document.querySelectorAll('.blog-menu__item');
// const btns = document.querySelectorAll('.blog-menu__btn');
// const posts = document.querySelectorAll('.post');
// const menuList = document.querySelector('.blog-menu__list');


// //Находим все кнпоки меню
// for (let i = 0; i < btns.length; i++) {
//   const button = btns[i];
//   button.onclick = function () {
//     //При клике на кнопку определяем data id и родительский элемент,
//     //Удаляем все активные элементы у списков и добавляем активный класс по клику
//     let data_id = this.dataset.id;
//     let parent = this.parentNode;
//     for (let i = 0; i < items.length; i++) {
//       const item = items[i];
//       item.classList.remove("blog-menu__item--active");
//     }
//     parent.classList.add("blog-menu__item--active");
//     //Находим все посты, если data id совпадает, то скролим до нужного поста
//     for (let i = 0; i < posts.length; i++) {
//       const post = posts[i];
//       let postHeight = post.clientHeight;
//       let postPosition = pageYOffset - postHeight;
//       if (post.dataset.id === data_id) {
//         console.log(post.offsetTop + " Позиция поста");

//         window.scrollTo({
//           //определяем top поста и высоту поста
//           //Складываем и прокручиваем
//           top: post.offsetTop + postHeight,
//           behavior: "smooth"
//         })
//       }
//     }
//   }
// }
//сдивгаем aside влево на собственную ширину
function asideWidth() {
  let asideWidth = aside.clientWidth;
  aside.style.left = -asideWidth + 'px';
}
//Открываем/закрываем меню, добавляя класс open
function openMenu() {
  if (!asideBtn.classList.contains('js-aside-open')) {
    asideBtn.classList.add('js-aside-open');
    aside.style.left = 0;
  } else {
    asideBtn.classList.remove('js-aside-open');
    asideWidth()
  }
}
//Отображаем кнопку меню при прокрутке
function showMenuBtn() {
  const header = document.querySelector('.header');
  let heightHeader = header.clientHeight;
  let winWidth = window.innerWidth;
  if (window.scrollY > heightHeader / 2 && winWidth < 768) {
    asideBtn.style.display = "flex";
  }
  if (window.scrollY < heightHeader / 2) {
    asideBtn.style.display = "none";
  }
  if (winWidth > 768) {
    asideBtn.style.display = "none";
  }
}
//По клику открываем/закрываем меню
asideBtn.onclick = function () {
  openMenu();
};

window.onresize = function () {
  asideWidth();
  asideBtn.classList.remove('js-aside-open');
  showMenuBtn();

};
window.onload = function () {
  asideWidth();
  asideBtn.classList.remove('js-aside-open');
  showMenuBtn();

};
window.onscroll = function () {
  showMenuBtn();
};

