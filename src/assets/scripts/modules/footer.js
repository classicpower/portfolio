const footer = document.querySelector('.footer');
const paddings = document.querySelectorAll('.js-add-padding');
const form = document.getElementById('form');
const addHeight = document.querySelector('.js-add-height');
const addMargin = document.querySelector('.js-add-margin');

function addPadding() {
  let height = footer.clientHeight;
  for (let i = 0; i < paddings.length; i++) {
    const padding = paddings[i];
    padding.style.paddingBottom = height + 'px';
  }
}
function heightForm() {
  let height = form.clientHeight;
  addHeight.style.height = height + 'px';
  addMargin.style.marginTop = -height + 'px';
}
addPadding();
heightForm();
window.addEventListener('resize', addPadding);
window.addEventListener('resize', heightForm);

