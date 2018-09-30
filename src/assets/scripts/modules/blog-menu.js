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

asideBtn.onclick = function () {
  openMenu();
};
window.onresize = function () {
  asideWidth();
  asideBtn.classList.remove('js-aside-open');
};
