//Объявляем переменные
const aside = document.querySelector('.js-aside');
const asideOpen = document.querySelector('.js-aside-open');
const asideList = document.querySelector('.js-aside-list');
const items = document.querySelectorAll('.blog-menu__item');
const btns = document.querySelectorAll('.blog-menu__btn');
const posts = document.querySelectorAll('.post');
const btnsNewArray = Array.from(btns);
const postsNewArray = Array.from(posts);
const activeBtnClass = "blog-menu__item--active";

//Инициализируем все функции и действия после загрузки страницы
function init() {
  removeOpenClassMenu()
  asideWidth();
  showMenuBtn();
  findAllBtns();
  window.addEventListener('scroll', scrollOnPostAddActiveClass);
}
//Добавляем активный класс первому элементу списка
function addFirstItemActiveClass() {
  asideList.children[0].classList.add(activeBtnClass);
}
//Удаляем активный класс у всех элементов списка и добавляем активный класс
function addActiveClass(event) {
  event = event || window.event;
  const targetBtn = event.target;
  const parent = targetBtn.parentNode;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.classList.remove(activeBtnClass);
  }
  parent.classList.add(activeBtnClass);
}

//Находим все посты, если data id совпадает, то скролим до нужного поста
function scrollToPost(event) {
  event = event || window.event;
  const targetBtn = event.target;
  let dataId = targetBtn.dataset.id;
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    let postHeight = post.clientHeight;
    if (post.dataset.id === dataId) {
      window.scrollTo({
        //определяем top поста и высоту поста
        //Складываем и прокручиваем
        top: post.offsetTop + postHeight,
        behavior: "smooth"
      })
    }
  }
}
//Находим все кнпоки меню и добавляем события по клику
function findAllBtns() {
  for (let i = 0; i < btns.length; i++) {
    const button = btns[i];
    button.onclick = function () {
      addActiveClass();
      scrollToPost();
    }
  }
}
//Скролим и добавляем активный класс. Пост соответствует кнопки
function scrollOnPostAddActiveClass() {
  const wScroll = window.pageYOffset;
  const arrayPost = postsNewArray.map(function (post) {
    const postOffset = post.offsetTop;
    const postHeader = post.children[0];
    const postHeaderHeight = postHeader.offsetHeight;
    const fullArticleHeight = postOffset + postHeaderHeight;
    return {
      coordY: fullArticleHeight
    }
  })
  arrayPost.forEach((post, i) => {
    const currentBtn = btnsNewArray[i];
    const parent = currentBtn.parentElement;
    if (wScroll >= post.coordY && currentBtn) {
      for (const iter of btnsNewArray) {
        const parent = iter.parentElement;
        parent.classList.remove(activeBtnClass)
      }
      parent.classList.add(activeBtnClass)
    }
  })
}


//сдивгаем aside влево на собственную ширину
function asideWidth() {
  const asideWidth = aside.clientWidth;
  aside.style.left = -asideWidth + 'px';
}
//Открываем/закрываем меню, добавляя класс open
function openMenu() {
  if (!asideOpen.classList.contains('js-aside-open')) {
    asideOpen.classList.add('js-aside-open');
    aside.style.left = 0;
  } else {
    asideOpen.classList.remove('js-aside-open');
    asideWidth()
  }
}
//Отображаем кнопку меню при прокрутке
function showMenuBtn() {
  const header = document.querySelector('.header');
  const wScroll = window.pageYOffset;
  let heightHeader = header.clientHeight;
  let winWidth = window.innerWidth;
  if (wScroll > heightHeader / 2 && winWidth < 768) {
    asideOpen.style.display = "flex";
  }
  if (wScroll < heightHeader / 2 && !asideOpen.classList.contains('js-aside-open')) {
    asideOpen.style.display = "none";
  }
  if (winWidth > 768) {
    asideOpen.style.display = "none";
  }
}

function removeOpenClassMenu() {
  asideOpen.classList.remove('js-aside-open');
}
//По клику открываем/закрываем меню
asideOpen.onclick = function () {
  openMenu();
};

window.onresize = function () {
  asideWidth();
  removeOpenClassMenu();
  showMenuBtn();
  init();

};
window.onload = function () {
  init();
  addFirstItemActiveClass();
};

window.addEventListener('scroll', showMenuBtn);

