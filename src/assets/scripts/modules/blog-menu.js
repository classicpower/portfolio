const asideBtn = document.querySelector('.js-aside-btn');
const aside = document.querySelector('.js-aside');

function asideWidth() {
  let asideWidth = aside.clientWidth;
  aside.style.left = -asideWidth + 'px';
}
function openMenu() {
  if (!asideBtn.classList.contains('js-aside-open')) {
    asideBtn.classList.add('js-aside-open');
    aside.style.left = 0;
  } else {
    asideBtn.classList.remove('js-aside-open');
    asideWidth()
  }
}
function showMenu() {
  const header = document.querySelector('.header');
  let heightHeader = header.clientHeight;
  let winWidth = window.innerWidth;
  if(window.scrollY > heightHeader / 2 && winWidth < 768){
    asideBtn.style.display = "flex";
  }
  if(window.scrollY < heightHeader / 2){
    asideBtn.style.display = "none";
  }
  if(winWidth > 768){
    asideBtn.style.display = "none";
  }
}

asideBtn.onclick = function () {
  openMenu();
};
window.onresize = function () {
  asideWidth();
  asideBtn.classList.remove('js-aside-open');
  showMenu();
};
window.onload = function () {
  asideWidth();
  asideBtn.classList.remove('js-aside-open');
  showMenu();
};
window.onscroll = function () {
  showMenu();
};

