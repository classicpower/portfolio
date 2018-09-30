const asideBtn = document.querySelector('.js-aside-btn');
const aside = document.querySelector('.js-aside');

asideBtn.addEventListener("click", function(e) {
  e.preventDefault();
  let asideWidth = aside.clientWidth;
  if (!this.classList.contains('js-aside-open')) {
    this.classList.add('js-aside-open');
    aside.style.left = 0;
  }else{
    this.classList.remove('js-aside-open');
    aside.style.left = -asideWidth + 'px';
  }
})
