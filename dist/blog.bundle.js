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
eval("\n\n__webpack_require__(/*! ./modules/hamburger */ \"./src/assets/scripts/modules/hamburger.js\");\n\n__webpack_require__(/*! ./modules/footer */ \"./src/assets/scripts/modules/footer.js\");\n\n__webpack_require__(/*! ./modules/blog-menu */ \"./src/assets/scripts/modules/blog-menu.js\");\n\nvar items = document.querySelectorAll('.blog-menu__item');\nvar btns = document.querySelectorAll('.blog-menu__btn');\n\nfor (var i = 0; i < btns.length; i++) {\n  var button = btns[i];\n  button.onclick = function () {\n    var parent = this.parentNode;\n    for (var _i = 0; _i < items.length; _i++) {\n      var item = items[_i];\n      item.classList.remove(\"blog-menu__item--active\");\n    }\n    parent.classList.add(\"blog-menu__item--active\");\n  };\n}\n\n// let nextParent = parent.nextElementSibling;\n// let prevParent = parent.previousElementSibling;\n// console.log(parent);\n// console.log(nextParent);\n// console.log(prevParent);\n// nextParent.classList.remove(\"blog-menu__item--active\");\n// prevParent.classList.remove(\"blog-menu__item--active\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbIml0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRucyIsImkiLCJsZW5ndGgiLCJidXR0b24iLCJvbmNsaWNrIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIml0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsUUFBUUMsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWQ7QUFDQSxJQUFNQyxPQUFPRixTQUFTQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBYjs7QUFFQSxLQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsS0FBS0UsTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3BDLE1BQU1FLFNBQVNILEtBQUtDLENBQUwsQ0FBZjtBQUNBRSxTQUFPQyxPQUFQLEdBQWlCLFlBQVk7QUFDM0IsUUFBSUMsU0FBUyxLQUFLQyxVQUFsQjtBQUNBLFNBQUssSUFBSUwsS0FBSSxDQUFiLEVBQWdCQSxLQUFJSixNQUFNSyxNQUExQixFQUFrQ0QsSUFBbEMsRUFBdUM7QUFDckMsVUFBTU0sT0FBT1YsTUFBTUksRUFBTixDQUFiO0FBQ0FNLFdBQUtDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQix5QkFBdEI7QUFDRDtBQUNESixXQUFPRyxTQUFQLENBQWlCRSxHQUFqQixDQUFxQix5QkFBckI7QUFDRCxHQVBEO0FBUUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9oYW1idXJnZXJcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL2Zvb3RlclwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvYmxvZy1tZW51XCI7XHJcblxyXG5jb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLW1lbnVfX2l0ZW0nKTtcclxuY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLW1lbnVfX2J0bicpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29uc3QgYnV0dG9uID0gYnRuc1tpXTtcclxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvZy1tZW51X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImJsb2ctbWVudV9faXRlbS0tYWN0aXZlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gbGV0IG5leHRQYXJlbnQgPSBwYXJlbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4vLyBsZXQgcHJldlBhcmVudCA9IHBhcmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4vLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4vLyBjb25zb2xlLmxvZyhuZXh0UGFyZW50KTtcclxuLy8gY29uc29sZS5sb2cocHJldlBhcmVudCk7XHJcbi8vIG5leHRQYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJsb2ctbWVudV9faXRlbS0tYWN0aXZlXCIpO1xyXG4vLyBwcmV2UGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJibG9nLW1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/blog-menu.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/blog-menu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar asideBtn = document.querySelector('.js-aside-btn');\nvar aside = document.querySelector('.js-aside');\n\nfunction asideWidth() {\n  var asideWidth = aside.clientWidth;\n  aside.style.left = -asideWidth + 'px';\n}\nfunction openMenu() {\n  if (!asideBtn.classList.contains('js-aside-open')) {\n    asideBtn.classList.add('js-aside-open');\n    aside.style.left = 0;\n  } else {\n    asideBtn.classList.remove('js-aside-open');\n    asideWidth();\n  }\n}\nfunction showMenu() {\n  var header = document.querySelector('.header');\n  var heightHeader = header.clientHeight;\n  var winWidth = window.innerWidth;\n  if (window.scrollY > heightHeader / 2 && winWidth < 768) {\n    asideBtn.style.display = \"flex\";\n  }\n  if (window.scrollY < heightHeader / 2) {\n    asideBtn.style.display = \"none\";\n  }\n  if (winWidth > 768) {\n    asideBtn.style.display = \"none\";\n  }\n}\n\nasideBtn.onclick = function () {\n  openMenu();\n};\nwindow.onresize = function () {\n  asideWidth();\n  asideBtn.classList.remove('js-aside-open');\n  showMenu();\n};\nwindow.onload = function () {\n  asideWidth();\n  asideBtn.classList.remove('js-aside-open');\n  showMenu();\n};\nwindow.onscroll = function () {\n  showMenu();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nLW1lbnUuanM/YWRlMiJdLCJuYW1lcyI6WyJhc2lkZUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFzaWRlIiwiYXNpZGVXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJsZWZ0Iiwib3Blbk1lbnUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSIsInNob3dNZW51IiwiaGVhZGVyIiwiaGVpZ2h0SGVhZGVyIiwiY2xpZW50SGVpZ2h0Iiwid2luV2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2Nyb2xsWSIsImRpc3BsYXkiLCJvbmNsaWNrIiwib25yZXNpemUiLCJvbmxvYWQiLCJvbnNjcm9sbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWpCO0FBQ0EsSUFBTUMsUUFBUUYsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFkOztBQUVBLFNBQVNFLFVBQVQsR0FBc0I7QUFDcEIsTUFBSUEsYUFBYUQsTUFBTUUsV0FBdkI7QUFDQUYsUUFBTUcsS0FBTixDQUFZQyxJQUFaLEdBQW1CLENBQUNILFVBQUQsR0FBYyxJQUFqQztBQUNEO0FBQ0QsU0FBU0ksUUFBVCxHQUFvQjtBQUNsQixNQUFJLENBQUNSLFNBQVNTLFNBQVQsQ0FBbUJDLFFBQW5CLENBQTRCLGVBQTVCLENBQUwsRUFBbUQ7QUFDakRWLGFBQVNTLFNBQVQsQ0FBbUJFLEdBQW5CLENBQXVCLGVBQXZCO0FBQ0FSLFVBQU1HLEtBQU4sQ0FBWUMsSUFBWixHQUFtQixDQUFuQjtBQUNELEdBSEQsTUFHTztBQUNMUCxhQUFTUyxTQUFULENBQW1CRyxNQUFuQixDQUEwQixlQUExQjtBQUNBUjtBQUNEO0FBQ0Y7QUFDRCxTQUFTUyxRQUFULEdBQW9CO0FBQ2xCLE1BQU1DLFNBQVNiLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLE1BQUlhLGVBQWVELE9BQU9FLFlBQTFCO0FBQ0EsTUFBSUMsV0FBV0MsT0FBT0MsVUFBdEI7QUFDQSxNQUFHRCxPQUFPRSxPQUFQLEdBQWlCTCxlQUFlLENBQWhDLElBQXFDRSxXQUFXLEdBQW5ELEVBQXVEO0FBQ3JEakIsYUFBU00sS0FBVCxDQUFlZSxPQUFmLEdBQXlCLE1BQXpCO0FBQ0Q7QUFDRCxNQUFHSCxPQUFPRSxPQUFQLEdBQWlCTCxlQUFlLENBQW5DLEVBQXFDO0FBQ25DZixhQUFTTSxLQUFULENBQWVlLE9BQWYsR0FBeUIsTUFBekI7QUFDRDtBQUNELE1BQUdKLFdBQVcsR0FBZCxFQUFrQjtBQUNoQmpCLGFBQVNNLEtBQVQsQ0FBZWUsT0FBZixHQUF5QixNQUF6QjtBQUNEO0FBQ0Y7O0FBRURyQixTQUFTc0IsT0FBVCxHQUFtQixZQUFZO0FBQzdCZDtBQUNELENBRkQ7QUFHQVUsT0FBT0ssUUFBUCxHQUFrQixZQUFZO0FBQzVCbkI7QUFDQUosV0FBU1MsU0FBVCxDQUFtQkcsTUFBbkIsQ0FBMEIsZUFBMUI7QUFDQUM7QUFDRCxDQUpEO0FBS0FLLE9BQU9NLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQnBCO0FBQ0FKLFdBQVNTLFNBQVQsQ0FBbUJHLE1BQW5CLENBQTBCLGVBQTFCO0FBQ0FDO0FBQ0QsQ0FKRDtBQUtBSyxPQUFPTyxRQUFQLEdBQWtCLFlBQVk7QUFDNUJaO0FBQ0QsQ0FGRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2Jsb2ctbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFzaWRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWFzaWRlLWJ0bicpO1xyXG5jb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1hc2lkZScpO1xyXG5cclxuZnVuY3Rpb24gYXNpZGVXaWR0aCgpIHtcclxuICBsZXQgYXNpZGVXaWR0aCA9IGFzaWRlLmNsaWVudFdpZHRoO1xyXG4gIGFzaWRlLnN0eWxlLmxlZnQgPSAtYXNpZGVXaWR0aCArICdweCc7XHJcbn1cclxuZnVuY3Rpb24gb3Blbk1lbnUoKSB7XHJcbiAgaWYgKCFhc2lkZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWFzaWRlLW9wZW4nKSkge1xyXG4gICAgYXNpZGVCdG4uY2xhc3NMaXN0LmFkZCgnanMtYXNpZGUtb3BlbicpO1xyXG4gICAgYXNpZGUuc3R5bGUubGVmdCA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFzaWRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWFzaWRlLW9wZW4nKTtcclxuICAgIGFzaWRlV2lkdGgoKVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaG93TWVudSgpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbiAgbGV0IGhlaWdodEhlYWRlciA9IGhlYWRlci5jbGllbnRIZWlnaHQ7XHJcbiAgbGV0IHdpbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgaWYod2luZG93LnNjcm9sbFkgPiBoZWlnaHRIZWFkZXIgLyAyICYmIHdpbldpZHRoIDwgNzY4KXtcclxuICAgIGFzaWRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9XHJcbiAgaWYod2luZG93LnNjcm9sbFkgPCBoZWlnaHRIZWFkZXIgLyAyKXtcclxuICAgIGFzaWRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbiAgaWYod2luV2lkdGggPiA3Njgpe1xyXG4gICAgYXNpZGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufVxyXG5cclxuYXNpZGVCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBvcGVuTWVudSgpO1xyXG59O1xyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgYXNpZGVXaWR0aCgpO1xyXG4gIGFzaWRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWFzaWRlLW9wZW4nKTtcclxuICBzaG93TWVudSgpO1xyXG59O1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGFzaWRlV2lkdGgoKTtcclxuICBhc2lkZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdqcy1hc2lkZS1vcGVuJyk7XHJcbiAgc2hvd01lbnUoKTtcclxufTtcclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gIHNob3dNZW51KCk7XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blog-menu.js\n");

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