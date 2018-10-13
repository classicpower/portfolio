const front = document.querySelector('.welcome__front');
const authBtn = document.querySelector('.js-auth-btn');
const mainBtn = document.querySelector('.js-main-btn');
const flipper = document.querySelector('.js-flipper');

function backSide() {
  if (front.classList.contains('js-flip')) {
    flipper.style.transform = "rotateY(180deg)";
    front.classList.remove('js-flip');
    authBtn.style.display = 'none'
  }
}
authBtn.addEventListener('click', backSide);

function frontSide() {
  flipper.style.transform = "rotateY(0deg)";
  front.classList.add('js-flip')
  authBtn.style.display = 'block'
}
mainBtn.addEventListener('click', frontSide)


