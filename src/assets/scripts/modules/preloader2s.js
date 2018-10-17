// const preloader = (function () {
//   const preloadBlock = document.querySelector('.js-preloader');
//   const preloadText = document.querySelector('.js-preloader-text');
//   const wrapper = document.querySelector('.wrapper');
//   let progress = 0;

//   return {
//     show: function () {
//       return new Promise((resolve) => {
//         const pre = setInterval(function () {
//           progress++;
//           if (progress < 100) {
//             preloadText.textContent = Math.ceil(progress) + '%';
//           } else {
//             progress = 100;
//             preloadText.textContent = progress + '%';
//           }

//           if (Math.ceil(progress) === 100) {
//             resolve();
//           }
//         }, 15)
//         setTimeout(function () {
//           clearInterval(pre);
//         }, 2000)
//       }).then(function () {
//         setTimeout(function () {
//           preloadBlock.style.display = 'none';
//           wrapper.classList.remove('wrapper-hidden');
//         }, 200)
//       });
//     },
//   };
// })();

// // preloader.show();
const preloader = (function () {
  const preloadImg = document.getElementsByTagName('*');
  const preloadBlock = document.querySelector('.js-preloader');
  const preloadText = document.querySelector('.js-preloader-text');
  const regImgUrl = /background-image: url\(['"]?(.*?)['"]?\)/i;
  const wrapper = document.querySelector('.wrapper');
  const imgArr = [];
  let progress = 0;
  let img;
  let allImg;
  let shadowImg;

  return {
    shadowImgAdd: function () {
      shadowImg = document.createElement('img');
      shadowImg.setAttribute('src', img);
      imgArr.push(shadowImg);
    },

    show: function () {
      return new Promise((resolve) => {
        for (let i = 0; i < preloadImg.length; i++) {
          if (preloadImg[i].matches('img')) {
            img = preloadImg[i].getAttribute('src');
            this.shadowImgAdd();
          } else if (preloadImg[i].hasAttribute('style') && regImgUrl.test(preloadImg[i].getAttribute('style'))) {
            img = (preloadImg[i].getAttribute('style').slice(22, -2));
            this.shadowImgAdd();
          }
          allImg = 100 / imgArr.length;
          console.log(imgArr.length);
          if (imgArr.length >= 2) {
            for (let j = 0; j < imgArr.length; j++) {
              imgArr[j].onload = function () {
                progress += allImg;
                if (progress < 100) {
                  preloadText.textContent = Math.ceil(progress) + '%';
                } else {
                  progress = 100;
                  preloadText.textContent = progress + '%';
                }

                if (Math.ceil(progress) === 100) {
                  resolve();
                }
              };
            }
          } else {
            const pre = setInterval(function () {
              progress++;
              if (progress < 100) {
                preloadText.textContent = Math.ceil(progress) + '%';
              } else {
                progress = 100;
                preloadText.textContent = progress + '%';
              }

              if (Math.ceil(progress) === 100) {
                resolve();
              }
            }, 15)
            setTimeout(function () {
              clearInterval(pre);
            }, 2000)
          }
        }
      }).then(function () {
        preloadBlock.style.display = 'none';
        wrapper.classList.remove('wrapper-hidden');
      });
    },
  };
})();

preloader.show();
