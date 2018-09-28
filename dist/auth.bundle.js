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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar front = document.querySelector('.welcome__front');\nvar authBtn = document.querySelector('.js-auth-btn');\nvar mainBtn = document.querySelector('.js-main-btn');\nvar flipper = document.querySelector('.welcome__flipper');\n\nauthBtn.onclick = function () {\n  if (front.classList.contains('js-flip')) {\n    flipper.style.transform = \"rotateY(180deg)\";\n    front.classList.remove('js-flip');\n    authBtn.style.display = 'none';\n  }\n};\nmainBtn.onclick = function () {\n  flipper.style.transform = \"rotateY(0deg)\";\n  front.classList.add('js-flip');\n  authBtn.style.display = 'block';\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImZyb250IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXV0aEJ0biIsIm1haW5CdG4iLCJmbGlwcGVyIiwib25jbGljayIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJyZW1vdmUiLCJkaXNwbGF5IiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWQ7QUFDQSxJQUFNQyxVQUFVRixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWhCO0FBQ0EsSUFBTUUsVUFBVUgsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFoQjtBQUNBLElBQU1HLFVBQVVKLFNBQVNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWhCOztBQUdBQyxRQUFRRyxPQUFSLEdBQWtCLFlBQVk7QUFDNUIsTUFBSU4sTUFBTU8sU0FBTixDQUFnQkMsUUFBaEIsQ0FBeUIsU0FBekIsQ0FBSixFQUF5QztBQUN2Q0gsWUFBUUksS0FBUixDQUFjQyxTQUFkLEdBQTBCLGlCQUExQjtBQUNBVixVQUFNTyxTQUFOLENBQWdCSSxNQUFoQixDQUF1QixTQUF2QjtBQUNBUixZQUFRTSxLQUFSLENBQWNHLE9BQWQsR0FBd0IsTUFBeEI7QUFDRDtBQUNGLENBTkQ7QUFPQVIsUUFBUUUsT0FBUixHQUFrQixZQUFZO0FBQzVCRCxVQUFRSSxLQUFSLENBQWNDLFNBQWQsR0FBMEIsZUFBMUI7QUFDQVYsUUFBTU8sU0FBTixDQUFnQk0sR0FBaEIsQ0FBb0IsU0FBcEI7QUFDQVYsVUFBUU0sS0FBUixDQUFjRyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0QsQ0FKRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnJvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZV9fZnJvbnQnKTtcclxuY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1hdXRoLWJ0bicpO1xyXG5jb25zdCBtYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1haW4tYnRuJyk7XHJcbmNvbnN0IGZsaXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZV9fZmxpcHBlcicpO1xyXG5cclxuXHJcbmF1dGhCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoZnJvbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1mbGlwJykpIHtcclxuICAgIGZsaXBwZXIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDE4MGRlZylcIjtcclxuICAgIGZyb250LmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWZsaXAnKTtcclxuICAgIGF1dGhCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIH1cclxufTtcclxubWFpbkJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGZsaXBwZXIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgZnJvbnQuY2xhc3NMaXN0LmFkZCgnanMtZmxpcCcpXHJcbiAgYXV0aEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });