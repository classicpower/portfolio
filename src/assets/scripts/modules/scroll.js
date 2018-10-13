const header = document.querySelector('.header');
const headerScroll = document.querySelector('.header__scroll');
const reviewsScroll = document.querySelector('.reviews__scroll');
const headerOffset = header.offsetTop;
const nextSection = header.nextElementSibling;
const sectionOffset = nextSection.offsetTop;
function scrollDown() {
  window.scrollTo({
    top: sectionOffset,
    behavior: "smooth"
  })
}
function scrollTop() {
  window.scrollTo({
    top: headerOffset,
    behavior: "smooth"
  })
}

headerScroll.addEventListener('click', scrollDown)
reviewsScroll.addEventListener('click', scrollTop)