const footer = document.querySelector('.footer');
const paddings = document.querySelectorAll('.js-add-padding')

function addPadding() {
  let height = footer.clientHeight;
  for (let i = 0; i < paddings.length; i++) {
    const padding = paddings[i];
    padding.style.paddingBottom = height + 'px';
  }
};
addPadding();
window.addEventListener('resize', addPadding);

