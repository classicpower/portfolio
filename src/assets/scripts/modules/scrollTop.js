const header = document.querySelector('.header');
const reviewsScroll = document.querySelector('.reviews__scroll');
const headerOffset = header.offsetTop;
function scrollTop() {
  window.scrollTo({
    top: headerOffset,
    behavior: "smooth"
  })
}

reviewsScroll.addEventListener('click', scrollTop)