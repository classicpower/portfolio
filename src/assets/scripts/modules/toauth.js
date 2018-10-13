'use strict';

const hash = window.location.href.slice(window.location.href.indexOf('?') + 1).split();
for (let i = 0; i < hash.length; i++) {
  const elemHash = hash[i];
  if (elemHash === 'auth') {
    const front = document.querySelector('.welcome__front');
    const authBtn = document.querySelector('.js-auth-btn');
    const flipper = document.querySelector('.js-flipper');
    flipper.style.transform = "rotateY(180deg)";
    front.classList.remove('js-flip');
    authBtn.style.display = 'none'
  }
}

