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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/hamburger */ \"./src/assets/scripts/modules/hamburger.js\");\n\n__webpack_require__(/*! ./modules/footer */ \"./src/assets/scripts/modules/footer.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2hhbWJ1cmdlclwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvZm9vdGVyXCI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/footer.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/modules/footer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar footer = document.querySelector('.footer');\nvar paddings = document.querySelectorAll('.js-add-padding');\n\nfunction addPadding() {\n  var height = footer.clientHeight;\n  for (var i = 0; i < paddings.length; i++) {\n    var padding = paddings[i];\n    padding.style.paddingBottom = height + 'px';\n  }\n};\naddPadding();\nwindow.addEventListener('resize', addPadding);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mb290ZXIuanM/MWZjZiJdLCJuYW1lcyI6WyJmb290ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWRkaW5ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRQYWRkaW5nIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaSIsImxlbmd0aCIsInBhZGRpbmciLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLElBQU1DLFdBQVdGLFNBQVNHLGdCQUFULENBQTBCLGlCQUExQixDQUFqQjs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQ3BCLE1BQUlDLFNBQVNOLE9BQU9PLFlBQXBCO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlMLFNBQVNNLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN4QyxRQUFNRSxVQUFVUCxTQUFTSyxDQUFULENBQWhCO0FBQ0FFLFlBQVFDLEtBQVIsQ0FBY0MsYUFBZCxHQUE4Qk4sU0FBUyxJQUF2QztBQUNEO0FBQ0Y7QUFDREQ7QUFDQVEsT0FBT0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NULFVBQWxDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xyXG5jb25zdCBwYWRkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hZGQtcGFkZGluZycpXHJcblxyXG5mdW5jdGlvbiBhZGRQYWRkaW5nKCkge1xyXG4gIGxldCBoZWlnaHQgPSBmb290ZXIuY2xpZW50SGVpZ2h0O1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFkZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSBwYWRkaW5nc1tpXTtcclxuICAgIHBhZGRpbmcuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGhlaWdodCArICdweCc7XHJcbiAgfVxyXG59O1xyXG5hZGRQYWRkaW5nKCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhZGRQYWRkaW5nKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/footer.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/hamburger.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/hamburger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log('hamburger ON');\nvar toggle = document.querySelector(\".hamburger\");\nvar menu = document.querySelector(\".fixed-menu\");\nvar body = document.body;\nconsole.log(toggle);\n\ntoggle.addEventListener(\"click\", function (e) {\n  console.log(\"click\");\n  e.preventDefault();\n  if (toggle.classList.contains(\"hamburger--active\")) {\n    toggle.classList.remove(\"hamburger--active\");\n    menu.style.left = -9999 + \"px\";\n    body.classList.remove(\"offscroll\");\n  } else {\n    toggle.classList.add(\"hamburger--active\");\n    menu.style.left = 0;\n    body.classList.add(\"offscroll\");\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXIuanM/ZTQ5ZCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwidG9nZ2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJzdHlsZSIsImxlZnQiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsSUFBTUMsU0FBU0MsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFmO0FBQ0EsSUFBTUMsT0FBT0YsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFiO0FBQ0EsSUFBTUUsT0FBT0gsU0FBU0csSUFBdEI7QUFDQU4sUUFBUUMsR0FBUixDQUFZQyxNQUFaOztBQUVBQSxPQUFPSyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxhQUFLO0FBQ3BDUCxVQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBTyxJQUFFQyxjQUFGO0FBQ0EsTUFBSVAsT0FBT1EsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEIsbUJBQTFCLENBQUosRUFBb0Q7QUFDbERULFdBQU9RLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLG1CQUF4QjtBQUNBUCxTQUFLUSxLQUFMLENBQVdDLElBQVgsR0FBa0IsQ0FBQyxJQUFELEdBQVEsSUFBMUI7QUFDQVIsU0FBS0ksU0FBTCxDQUFlRSxNQUFmLENBQXNCLFdBQXRCO0FBQ0QsR0FKRCxNQUlPO0FBQ0xWLFdBQU9RLFNBQVAsQ0FBaUJLLEdBQWpCLENBQXFCLG1CQUFyQjtBQUNBVixTQUFLUSxLQUFMLENBQVdDLElBQVgsR0FBa0IsQ0FBbEI7QUFDQVIsU0FBS0ksU0FBTCxDQUFlSyxHQUFmLENBQW1CLFdBQW5CO0FBQ0Q7QUFDRixDQVpEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvaGFtYnVyZ2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2hhbWJ1cmdlciBPTicpO1xyXG5jb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZml4ZWQtbWVudVwiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbmNvbnNvbGUubG9nKHRvZ2dsZSk7XHJcblxyXG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmICh0b2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFtYnVyZ2VyLS1hY3RpdmVcIikpIHtcclxuICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGFtYnVyZ2VyLS1hY3RpdmVcIik7XHJcbiAgICBtZW51LnN0eWxlLmxlZnQgPSAtOTk5OSArIFwicHhcIjtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm9mZnNjcm9sbFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXItLWFjdGl2ZVwiKTtcclxuICAgIG1lbnUuc3R5bGUubGVmdCA9IDA7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJvZmZzY3JvbGxcIik7XHJcbiAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/hamburger.js\n");

/***/ })

/******/ });