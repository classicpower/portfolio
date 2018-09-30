const blur = (function () {
  const container = document.querySelector('.js-blur-wrapper');
  const formBlur = document.querySelector('.js-blur');


  return {
    set: function() {
      const bgWidth = document.querySelector('.js-reviews-bg').offsetWidth;
      const bgHeight = document.querySelector('.js-reviews-bg').offsetHeight;
      const sectionHeight = document.querySelector('.reviews').offsetHeight;
      const differenceHeight = sectionHeight - bgHeight;
      const posLeft = -container.offsetLeft;
      const posTop = - container.offsetTop + differenceHeight;
      const blurCSS = formBlur.style;

      blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
      blurCSS.backgroundSize = bgWidth + 'px' + ' ' + 'auto';

    }
  }
}());

function heightForm() {
  const form = document.getElementById('form');
  const addHeight = document.querySelector('.js-add-height');
  const addMargin = document.querySelector('.js-add-margin');
  let height = form.clientHeight;
  addHeight.style.height = height + 'px';
  addMargin.style.marginTop = -height + 'px';
}


window.onresize = function() {
  blur.set();
  heightForm()
}
window.onload = function() {
  blur.set();
  heightForm()
}
