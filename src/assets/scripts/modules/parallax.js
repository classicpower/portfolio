let parallax = (function () {
  const image = document.querySelector('.js-parallax-image');
  const user = document.querySelector('.js-parallax-user');

  return {
    move: function (block, windowScroll, strafeAmount) {
      let strafe = windowScroll / -strafeAmount + '%';
      let transformString = 'translate3d(0, ' + strafe + ', 0)';
      let style = block.style;
      style.transform = transformString;
      style.webkitTransform = transformString;

    },
    init: function (wScroll) {
      this.move(image, wScroll, 30);
      this.move(user, wScroll, 20);
    }
  }
}());

window.onscroll = function () {
  let wScroll = window.pageYOffset;
  parallax.init(wScroll);
}