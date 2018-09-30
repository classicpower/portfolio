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
window.onresize = function() {
  blur.set();
}
window.onload = function() {
  blur.set();
}

