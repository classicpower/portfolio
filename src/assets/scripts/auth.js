import "./modules/effects-water";

const front = document.querySelector('.welcome__front');
const authBtn = document.querySelector('.js-auth-btn');
const mainBtn = document.querySelector('.js-main-btn');
const flipper = document.querySelector('.js-flipper');


authBtn.onclick = function () {
  if (front.classList.contains('js-flip')) {
    flipper.style.transform = "rotateY(180deg)";
    front.classList.remove('js-flip');
    authBtn.style.display = 'none'
  }
};
mainBtn.onclick = function () {
  flipper.style.transform = "rotateY(0deg)";
  front.classList.add('js-flip')
  authBtn.style.display = 'block'
};





