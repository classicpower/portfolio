const blur = (function () {
  const container = document.querySelector('.js-blur-wrapper');
  const formBlur = document.querySelector('.js-blur');

  return {
    set: function() {
      const bgWidth = document.querySelector('.js-reviews-bg').offsetWidth;
      const posLeft = -container.offsetLeft;
      const posTop = -container.offsetTop;
      const blurCSS = formBlur.style;

      blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
      blurCSS.backgroundSize = bgWidth + 'px' + ' ' + 'auto';

    }
  }
}());
blur.set();
window.onresize = function() {
  blur.set();
}

