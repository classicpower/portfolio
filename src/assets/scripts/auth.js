const front = document.querySelector('.welcome__front');
const btns = document.querySelectorAll('.js-auth-btn');
const flipper = document.querySelector('.welcome__flipper');

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  btn.addEventListener('click', () => {
    if (front.classList.contains('js-flip')) {
      flipper.style.transform = "rotateY(180deg)";
      front.classList.remove('js-flip')
    } else {
      flipper.style.transform = "rotateY(0deg)";
      front.classList.add('js-flip')
    }
  })
}



