const header = document.querySelector('.header');
const headerScroll = document.querySelector('.header__scroll');
const nextSection = header.nextElementSibling;
const sectionOffset = nextSection.offsetTop;
function scrollDown() {
  window.scrollTo({
    top: sectionOffset,
    behavior: "smooth"
  })
}

headerScroll.addEventListener('click', scrollDown)
