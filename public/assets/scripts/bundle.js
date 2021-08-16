/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n  console.log('js is processed');\n}); // Close other details that are not selected but open\n\nconst details = document.querySelectorAll('details');\ndetails.forEach(targetDetail => {\n  targetDetail.addEventListener('click', () => {\n    details.forEach(detail => {\n      if (detail !== targetDetail) {\n        detail.removeAttribute('open');\n      }\n    });\n  });\n}); // Open and close the modal\n\nconst modal_more_information = document.getElementById('model-more-information');\nconst button_more_information = document.getElementById('button-more-information');\nconst button_more_information_close = document.getElementById('button-more-information-close');\n\nbutton_more_information.onclick = () => {\n  modal_more_information.style.display = 'flex';\n  button_more_information_close.focus();\n};\n\nbutton_more_information_close.onclick = () => {\n  modal_more_information.style.display = 'none';\n  button_more_information.focus();\n};\n\n//# sourceURL=webpack://frontend-assignment-exercise/./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontend-assignment-exercise/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/scripts/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/styles/main.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;