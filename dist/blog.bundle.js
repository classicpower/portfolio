/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/hamburger */ \"./src/assets/scripts/modules/hamburger.js\");\n\n__webpack_require__(/*! ./modules/footer */ \"./src/assets/scripts/modules/footer.js\");\n\n__webpack_require__(/*! ./modules/blog-menu */ \"./src/assets/scripts/modules/blog-menu.js\");\n\nvar items = document.querySelectorAll('.blog-menu__item');\nvar btns = document.querySelectorAll('.blog-menu__btn');\nvar posts = document.querySelectorAll('.post');\n\n//Находим все кнпоки меню\nfor (var i = 0; i < btns.length; i++) {\n  var button = btns[i];\n\n  button.onclick = function () {\n    //При клике на кнопку определяем data id и родительский элемент,\n    //Удаляем все активные элементы у списков и добавляем активный класс по клику\n    var data_id = this.dataset.id;\n    var parent = this.parentNode;\n    for (var _i = 0; _i < items.length; _i++) {\n      var item = items[_i];\n      item.classList.remove(\"blog-menu__item--active\");\n    }\n    parent.classList.add(\"blog-menu__item--active\");\n    //Находим все посты, если data id совпадает, то скролим до нужного поста\n    for (var _i2 = 0; _i2 < posts.length; _i2++) {\n      var post = posts[_i2];\n      var postHeight = post.clientHeight;\n      if (post.dataset.id === data_id) {\n        // console.log(post.offsetTop + \" Позиция поста\");\n        // window.onscroll = function () {\n        //   console.log(postPosition);\n\n        // }\n        window.scrollTo({\n          //определяем top поста и высоту поста\n          //Складываем и прокручиваем\n          top: post.offsetTop + postHeight,\n          behavior: \"smooth\"\n        });\n      }\n    }\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbIml0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRucyIsInBvc3RzIiwiaSIsImxlbmd0aCIsImJ1dHRvbiIsIm9uY2xpY2siLCJkYXRhX2lkIiwiZGF0YXNldCIsImlkIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIml0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwb3N0IiwicG9zdEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwib2Zmc2V0VG9wIiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsUUFBUUMsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWQ7QUFDQSxJQUFNQyxPQUFPRixTQUFTQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBYjtBQUNBLElBQU1FLFFBQVFILFNBQVNDLGdCQUFULENBQTBCLE9BQTFCLENBQWQ7O0FBRUE7QUFDQSxLQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS0csTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3BDLE1BQU1FLFNBQVNKLEtBQUtFLENBQUwsQ0FBZjs7QUFFQUUsU0FBT0MsT0FBUCxHQUFpQixZQUFZO0FBQzNCO0FBQ0E7QUFDQSxRQUFJQyxVQUFVLEtBQUtDLE9BQUwsQ0FBYUMsRUFBM0I7QUFDQSxRQUFJQyxTQUFTLEtBQUtDLFVBQWxCO0FBQ0EsU0FBSyxJQUFJUixLQUFJLENBQWIsRUFBZ0JBLEtBQUlMLE1BQU1NLE1BQTFCLEVBQWtDRCxJQUFsQyxFQUF1QztBQUNyQyxVQUFNUyxPQUFPZCxNQUFNSyxFQUFOLENBQWI7QUFDQVMsV0FBS0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLHlCQUF0QjtBQUNEO0FBQ0RKLFdBQU9HLFNBQVAsQ0FBaUJFLEdBQWpCLENBQXFCLHlCQUFyQjtBQUNBO0FBQ0EsU0FBSyxJQUFJWixNQUFJLENBQWIsRUFBZ0JBLE1BQUlELE1BQU1FLE1BQTFCLEVBQWtDRCxLQUFsQyxFQUF1QztBQUNyQyxVQUFNYSxPQUFPZCxNQUFNQyxHQUFOLENBQWI7QUFDQSxVQUFJYyxhQUFhRCxLQUFLRSxZQUF0QjtBQUNBLFVBQUlGLEtBQUtSLE9BQUwsQ0FBYUMsRUFBYixLQUFvQkYsT0FBeEIsRUFBaUM7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0FZLGVBQU9DLFFBQVAsQ0FBZ0I7QUFDZDtBQUNBO0FBQ0FDLGVBQUtMLEtBQUtNLFNBQUwsR0FBaUJMLFVBSFI7QUFJZE0sb0JBQVU7QUFKSSxTQUFoQjtBQU1EO0FBQ0Y7QUFDRixHQTVCRDtBQTZCRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9ibG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2hhbWJ1cmdlclwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvZm9vdGVyXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9ibG9nLW1lbnVcIjtcclxuXHJcbmNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctbWVudV9faXRlbScpO1xyXG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctbWVudV9fYnRuJyk7XHJcbmNvbnN0IHBvc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3QnKTtcclxuXHJcbi8v0J3QsNGF0L7QtNC40Lwg0LLRgdC1INC60L3Qv9C+0LrQuCDQvNC10L3RjlxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICBjb25zdCBidXR0b24gPSBidG5zW2ldO1xyXG5cclxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v0J/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMg0L7Qv9GA0LXQtNC10LvRj9C10LwgZGF0YSBpZCDQuCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIsXHJcbiAgICAvL9Cj0LTQsNC70Y/QtdC8INCy0YHQtSDQsNC60YLQuNCy0L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0YMg0YHQv9C40YHQutC+0LIg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDQv9C+INC60LvQuNC60YNcclxuICAgIGxldCBkYXRhX2lkID0gdGhpcy5kYXRhc2V0LmlkO1xyXG4gICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJibG9nLW1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiYmxvZy1tZW51X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAvL9Cd0LDRhdC+0LTQuNC8INCy0YHQtSDQv9C+0YHRgtGLLCDQtdGB0LvQuCBkYXRhIGlkINGB0L7QstC/0LDQtNCw0LXRgiwg0YLQviDRgdC60YDQvtC70LjQvCDQtNC+INC90YPQttC90L7Qs9C+INC/0L7RgdGC0LBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zdCA9IHBvc3RzW2ldO1xyXG4gICAgICBsZXQgcG9zdEhlaWdodCA9IHBvc3QuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBpZiAocG9zdC5kYXRhc2V0LmlkID09PSBkYXRhX2lkKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocG9zdC5vZmZzZXRUb3AgKyBcIiDQn9C+0LfQuNGG0LjRjyDQv9C+0YHRgtCwXCIpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHBvc3RQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgLy/QvtC/0YDQtdC00LXQu9GP0LXQvCB0b3Ag0L/QvtGB0YLQsCDQuCDQstGL0YHQvtGC0YMg0L/QvtGB0YLQsFxyXG4gICAgICAgICAgLy/QodC60LvQsNC00YvQstCw0LXQvCDQuCDQv9GA0L7QutGA0YPRh9C40LLQsNC10LxcclxuICAgICAgICAgIHRvcDogcG9zdC5vZmZzZXRUb3AgKyBwb3N0SGVpZ2h0LFxyXG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/blog-menu.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/blog-menu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar asideBtn = document.querySelector('.js-aside-btn');\nvar aside = document.querySelector('.js-aside');\n// const items = document.querySelectorAll('.blog-menu__item');\n// const btns = document.querySelectorAll('.blog-menu__btn');\n// const posts = document.querySelectorAll('.post');\n// const menuList = document.querySelector('.blog-menu__list');\n\n\n// //Находим все кнпоки меню\n// for (let i = 0; i < btns.length; i++) {\n//   const button = btns[i];\n//   button.onclick = function () {\n//     //При клике на кнопку определяем data id и родительский элемент,\n//     //Удаляем все активные элементы у списков и добавляем активный класс по клику\n//     let data_id = this.dataset.id;\n//     let parent = this.parentNode;\n//     for (let i = 0; i < items.length; i++) {\n//       const item = items[i];\n//       item.classList.remove(\"blog-menu__item--active\");\n//     }\n//     parent.classList.add(\"blog-menu__item--active\");\n//     //Находим все посты, если data id совпадает, то скролим до нужного поста\n//     for (let i = 0; i < posts.length; i++) {\n//       const post = posts[i];\n//       let postHeight = post.clientHeight;\n//       let postPosition = pageYOffset - postHeight;\n//       if (post.dataset.id === data_id) {\n//         console.log(post.offsetTop + \" Позиция поста\");\n\n//         window.scrollTo({\n//           //определяем top поста и высоту поста\n//           //Складываем и прокручиваем\n//           top: post.offsetTop + postHeight,\n//           behavior: \"smooth\"\n//         })\n//       }\n//     }\n//   }\n// }\n//сдивгаем aside влево на собственную ширину\nfunction asideWidth() {\n  var asideWidth = aside.clientWidth;\n  aside.style.left = -asideWidth + 'px';\n}\n//Открываем/закрываем меню, добавляя класс open\nfunction openMenu() {\n  if (!asideBtn.classList.contains('js-aside-open')) {\n    asideBtn.classList.add('js-aside-open');\n    aside.style.left = 0;\n  } else {\n    asideBtn.classList.remove('js-aside-open');\n    asideWidth();\n  }\n}\n//Отображаем кнопку меню при прокрутке\nfunction showMenuBtn() {\n  var header = document.querySelector('.header');\n  var heightHeader = header.clientHeight;\n  var winWidth = window.innerWidth;\n  if (window.scrollY > heightHeader / 2 && winWidth < 768) {\n    asideBtn.style.display = \"flex\";\n  }\n  if (window.scrollY < heightHeader / 2) {\n    asideBtn.style.display = \"none\";\n  }\n  if (winWidth > 768) {\n    asideBtn.style.display = \"none\";\n  }\n}\n//По клику открываем/закрываем меню\nasideBtn.onclick = function () {\n  openMenu();\n};\n\nwindow.onresize = function () {\n  asideWidth();\n  asideBtn.classList.remove('js-aside-open');\n  showMenuBtn();\n};\nwindow.onload = function () {\n  asideWidth();\n  asideBtn.classList.remove('js-aside-open');\n  showMenuBtn();\n};\nwindow.onscroll = function () {\n  showMenuBtn();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nLW1lbnUuanM/YWRlMiJdLCJuYW1lcyI6WyJhc2lkZUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFzaWRlIiwiYXNpZGVXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJsZWZ0Iiwib3Blbk1lbnUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSIsInNob3dNZW51QnRuIiwiaGVhZGVyIiwiaGVpZ2h0SGVhZGVyIiwiY2xpZW50SGVpZ2h0Iiwid2luV2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2Nyb2xsWSIsImRpc3BsYXkiLCJvbmNsaWNrIiwib25yZXNpemUiLCJvbmxvYWQiLCJvbnNjcm9sbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWpCO0FBQ0EsSUFBTUMsUUFBUUYsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNFLFVBQVQsR0FBc0I7QUFDcEIsTUFBSUEsYUFBYUQsTUFBTUUsV0FBdkI7QUFDQUYsUUFBTUcsS0FBTixDQUFZQyxJQUFaLEdBQW1CLENBQUNILFVBQUQsR0FBYyxJQUFqQztBQUNEO0FBQ0Q7QUFDQSxTQUFTSSxRQUFULEdBQW9CO0FBQ2xCLE1BQUksQ0FBQ1IsU0FBU1MsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsZUFBNUIsQ0FBTCxFQUFtRDtBQUNqRFYsYUFBU1MsU0FBVCxDQUFtQkUsR0FBbkIsQ0FBdUIsZUFBdkI7QUFDQVIsVUFBTUcsS0FBTixDQUFZQyxJQUFaLEdBQW1CLENBQW5CO0FBQ0QsR0FIRCxNQUdPO0FBQ0xQLGFBQVNTLFNBQVQsQ0FBbUJHLE1BQW5CLENBQTBCLGVBQTFCO0FBQ0FSO0FBQ0Q7QUFDRjtBQUNEO0FBQ0EsU0FBU1MsV0FBVCxHQUF1QjtBQUNyQixNQUFNQyxTQUFTYixTQUFTQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQSxNQUFJYSxlQUFlRCxPQUFPRSxZQUExQjtBQUNBLE1BQUlDLFdBQVdDLE9BQU9DLFVBQXRCO0FBQ0EsTUFBSUQsT0FBT0UsT0FBUCxHQUFpQkwsZUFBZSxDQUFoQyxJQUFxQ0UsV0FBVyxHQUFwRCxFQUF5RDtBQUN2RGpCLGFBQVNNLEtBQVQsQ0FBZWUsT0FBZixHQUF5QixNQUF6QjtBQUNEO0FBQ0QsTUFBSUgsT0FBT0UsT0FBUCxHQUFpQkwsZUFBZSxDQUFwQyxFQUF1QztBQUNyQ2YsYUFBU00sS0FBVCxDQUFlZSxPQUFmLEdBQXlCLE1BQXpCO0FBQ0Q7QUFDRCxNQUFJSixXQUFXLEdBQWYsRUFBb0I7QUFDbEJqQixhQUFTTSxLQUFULENBQWVlLE9BQWYsR0FBeUIsTUFBekI7QUFDRDtBQUNGO0FBQ0Q7QUFDQXJCLFNBQVNzQixPQUFULEdBQW1CLFlBQVk7QUFDN0JkO0FBQ0QsQ0FGRDs7QUFJQVUsT0FBT0ssUUFBUCxHQUFrQixZQUFZO0FBQzVCbkI7QUFDQUosV0FBU1MsU0FBVCxDQUFtQkcsTUFBbkIsQ0FBMEIsZUFBMUI7QUFDQUM7QUFFRCxDQUxEO0FBTUFLLE9BQU9NLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQnBCO0FBQ0FKLFdBQVNTLFNBQVQsQ0FBbUJHLE1BQW5CLENBQTBCLGVBQTFCO0FBQ0FDO0FBRUQsQ0FMRDtBQU1BSyxPQUFPTyxRQUFQLEdBQWtCLFlBQVk7QUFDNUJaO0FBQ0QsQ0FGRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2Jsb2ctbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFzaWRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWFzaWRlLWJ0bicpO1xyXG5jb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1hc2lkZScpO1xyXG4vLyBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLW1lbnVfX2l0ZW0nKTtcclxuLy8gY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLW1lbnVfX2J0bicpO1xyXG4vLyBjb25zdCBwb3N0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0Jyk7XHJcbi8vIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctbWVudV9fbGlzdCcpO1xyXG5cclxuXHJcbi8vIC8v0J3QsNGF0L7QtNC40Lwg0LLRgdC1INC60L3Qv9C+0LrQuCDQvNC10L3RjlxyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcclxuLy8gICBjb25zdCBidXR0b24gPSBidG5zW2ldO1xyXG4vLyAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgLy/Qn9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyDQvtC/0YDQtdC00LXQu9GP0LXQvCBkYXRhIGlkINC4INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDRjdC70LXQvNC10L3RgixcclxuLy8gICAgIC8v0KPQtNCw0LvRj9C10Lwg0LLRgdC1INCw0LrRgtC40LLQvdGL0LUg0Y3Qu9C10LzQtdC90YLRiyDRgyDRgdC/0LjRgdC60L7QsiDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINC/0L4g0LrQu9C40LrRg1xyXG4vLyAgICAgbGV0IGRhdGFfaWQgPSB0aGlzLmRhdGFzZXQuaWQ7XHJcbi8vICAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XHJcbi8vICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImJsb2ctbWVudV9faXRlbS0tYWN0aXZlXCIpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJibG9nLW1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuLy8gICAgIC8v0J3QsNGF0L7QtNC40Lwg0LLRgdC1INC/0L7RgdGC0YssINC10YHQu9C4IGRhdGEgaWQg0YHQvtCy0L/QsNC00LDQtdGCLCDRgtC+INGB0LrRgNC+0LvQuNC8INC00L4g0L3Rg9C20L3QvtCz0L4g0L/QvtGB0YLQsFxyXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICBjb25zdCBwb3N0ID0gcG9zdHNbaV07XHJcbi8vICAgICAgIGxldCBwb3N0SGVpZ2h0ID0gcG9zdC5jbGllbnRIZWlnaHQ7XHJcbi8vICAgICAgIGxldCBwb3N0UG9zaXRpb24gPSBwYWdlWU9mZnNldCAtIHBvc3RIZWlnaHQ7XHJcbi8vICAgICAgIGlmIChwb3N0LmRhdGFzZXQuaWQgPT09IGRhdGFfaWQpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwb3N0Lm9mZnNldFRvcCArIFwiINCf0L7Qt9C40YbQuNGPINC/0L7RgdGC0LBcIik7XHJcblxyXG4vLyAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbi8vICAgICAgICAgICAvL9C+0L/RgNC10LTQtdC70Y/QtdC8IHRvcCDQv9C+0YHRgtCwINC4INCy0YvRgdC+0YLRgyDQv9C+0YHRgtCwXHJcbi8vICAgICAgICAgICAvL9Ch0LrQu9Cw0LTRi9Cy0LDQtdC8INC4INC/0YDQvtC60YDRg9GH0LjQstCw0LXQvFxyXG4vLyAgICAgICAgICAgdG9wOiBwb3N0Lm9mZnNldFRvcCArIHBvc3RIZWlnaHQsXHJcbi8vICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy/RgdC00LjQstCz0LDQtdC8IGFzaWRlINCy0LvQtdCy0L4g0L3QsCDRgdC+0LHRgdGC0LLQtdC90L3Rg9GOINGI0LjRgNC40L3Rg1xyXG5mdW5jdGlvbiBhc2lkZVdpZHRoKCkge1xyXG4gIGxldCBhc2lkZVdpZHRoID0gYXNpZGUuY2xpZW50V2lkdGg7XHJcbiAgYXNpZGUuc3R5bGUubGVmdCA9IC1hc2lkZVdpZHRoICsgJ3B4JztcclxufVxyXG4vL9Ce0YLQutGA0YvQstCw0LXQvC/Qt9Cw0LrRgNGL0LLQsNC10Lwg0LzQtdC90Y4sINC00L7QsdCw0LLQu9GP0Y8g0LrQu9Cw0YHRgSBvcGVuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gIGlmICghYXNpZGVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1hc2lkZS1vcGVuJykpIHtcclxuICAgIGFzaWRlQnRuLmNsYXNzTGlzdC5hZGQoJ2pzLWFzaWRlLW9wZW4nKTtcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhc2lkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdqcy1hc2lkZS1vcGVuJyk7XHJcbiAgICBhc2lkZVdpZHRoKClcclxuICB9XHJcbn1cclxuLy/QntGC0L7QsdGA0LDQttCw0LXQvCDQutC90L7Qv9C60YMg0LzQtdC90Y4g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtVxyXG5mdW5jdGlvbiBzaG93TWVudUJ0bigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbiAgbGV0IGhlaWdodEhlYWRlciA9IGhlYWRlci5jbGllbnRIZWlnaHQ7XHJcbiAgbGV0IHdpbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gaGVpZ2h0SGVhZGVyIC8gMiAmJiB3aW5XaWR0aCA8IDc2OCkge1xyXG4gICAgYXNpZGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH1cclxuICBpZiAod2luZG93LnNjcm9sbFkgPCBoZWlnaHRIZWFkZXIgLyAyKSB7XHJcbiAgICBhc2lkZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIGlmICh3aW5XaWR0aCA+IDc2OCkge1xyXG4gICAgYXNpZGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufVxyXG4vL9Cf0L4g0LrQu9C40LrRgyDQvtGC0LrRgNGL0LLQsNC10Lwv0LfQsNC60YDRi9Cy0LDQtdC8INC80LXQvdGOXHJcbmFzaWRlQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgb3Blbk1lbnUoKTtcclxufTtcclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICBhc2lkZVdpZHRoKCk7XHJcbiAgYXNpZGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnanMtYXNpZGUtb3BlbicpO1xyXG4gIHNob3dNZW51QnRuKCk7XHJcblxyXG59O1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGFzaWRlV2lkdGgoKTtcclxuICBhc2lkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdqcy1hc2lkZS1vcGVuJyk7XHJcbiAgc2hvd01lbnVCdG4oKTtcclxuXHJcbn07XHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICBzaG93TWVudUJ0bigpO1xyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blog-menu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/footer.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/modules/footer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar footer = document.querySelector('.footer');\nvar paddings = document.querySelectorAll('.js-add-padding');\n\nfunction addPadding() {\n  var height = footer.clientHeight;\n  for (var i = 0; i < paddings.length; i++) {\n    var padding = paddings[i];\n    padding.style.paddingBottom = height + 'px';\n  }\n}\nwindow.addEventListener('resize', addPadding);\nwindow.addEventListener('load', addPadding);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mb290ZXIuanM/MWZjZiJdLCJuYW1lcyI6WyJmb290ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWRkaW5ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRQYWRkaW5nIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaSIsImxlbmd0aCIsInBhZGRpbmciLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU1DLFdBQVdGLFNBQVNHLGdCQUFULENBQTBCLGlCQUExQixDQUFqQjs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQ3BCLE1BQUlDLFNBQVNOLE9BQU9PLFlBQXBCO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLFNBQVNNLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN4QyxRQUFNRSxVQUFVUCxTQUFTSyxDQUFULENBQWhCO0FBQ0FFLFlBQVFDLEtBQVIsQ0FBY0MsYUFBZCxHQUE4Qk4sU0FBUyxJQUF2QztBQUNEO0FBQ0Y7QUFDRE8sT0FBT0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NULFVBQWxDO0FBQ0FRLE9BQU9DLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDVCxVQUFoQyIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcclxuY29uc3QgcGFkZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWRkLXBhZGRpbmcnKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFBhZGRpbmcoKSB7XHJcbiAgbGV0IGhlaWdodCA9IGZvb3Rlci5jbGllbnRIZWlnaHQ7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWRkaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgcGFkZGluZyA9IHBhZGRpbmdzW2ldO1xyXG4gICAgcGFkZGluZy5zdHlsZS5wYWRkaW5nQm90dG9tID0gaGVpZ2h0ICsgJ3B4JztcclxuICB9XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFkZFBhZGRpbmcpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFkZFBhZGRpbmcpO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/footer.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/hamburger.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/hamburger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toggle = document.querySelector(\".hamburger\");\nvar menu = document.querySelector(\".fixed-menu\");\nvar body = document.body;\n\ntoggle.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  if (toggle.classList.contains(\"hamburger--active\")) {\n    toggle.classList.remove(\"hamburger--active\");\n    menu.style.left = -9999 + \"px\";\n    body.classList.remove(\"offscroll\");\n  } else {\n    toggle.classList.add(\"hamburger--active\");\n    menu.style.left = 0;\n    body.classList.add(\"offscroll\");\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXIuanM/ZTQ5ZCJdLCJuYW1lcyI6WyJ0b2dnbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwibGVmdCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNQSxTQUFTQyxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQSxJQUFNQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQWI7QUFDQSxJQUFNRSxPQUFPSCxTQUFTRyxJQUF0Qjs7QUFFQUosT0FBT0ssZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsYUFBSztBQUNwQ0MsSUFBRUMsY0FBRjtBQUNBLE1BQUlQLE9BQU9RLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCLG1CQUExQixDQUFKLEVBQW9EO0FBQ2xEVCxXQUFPUSxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixtQkFBeEI7QUFDQVAsU0FBS1EsS0FBTCxDQUFXQyxJQUFYLEdBQWtCLENBQUMsSUFBRCxHQUFRLElBQTFCO0FBQ0FSLFNBQUtJLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixXQUF0QjtBQUNELEdBSkQsTUFJTztBQUNMVixXQUFPUSxTQUFQLENBQWlCSyxHQUFqQixDQUFxQixtQkFBckI7QUFDQVYsU0FBS1EsS0FBTCxDQUFXQyxJQUFYLEdBQWtCLENBQWxCO0FBQ0FSLFNBQUtJLFNBQUwsQ0FBZUssR0FBZixDQUFtQixXQUFuQjtBQUNEO0FBQ0YsQ0FYRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2hhbWJ1cmdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZml4ZWQtbWVudVwiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAodG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucyhcImhhbWJ1cmdlci0tYWN0aXZlXCIpKSB7XHJcbiAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImhhbWJ1cmdlci0tYWN0aXZlXCIpO1xyXG4gICAgbWVudS5zdHlsZS5sZWZ0ID0gLTk5OTkgKyBcInB4XCI7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJvZmZzY3JvbGxcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyLS1hY3RpdmVcIik7XHJcbiAgICBtZW51LnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwib2Zmc2Nyb2xsXCIpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/hamburger.js\n");

/***/ })

/******/ });