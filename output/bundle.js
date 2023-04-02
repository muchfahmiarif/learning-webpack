/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertService\": () => (/* binding */ AlertService)\n/* harmony export */ });\n/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cekInputValid.js */ \"./src/app/utils/cekInputValid.js\");\n\n\nclass AlertService {\n  constructor() {\n    this.error = document.querySelector(\"#error\");\n  }\n\n  tampilkanErrorPenjumlahan = (input, angka) => {\n    const hasil = input.reduce((pesan, nilai, index) => {\n      if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__.cekInputValid)(angka[index])) {\n        return pesan + \"\";\n      } else {\n        return pesan + `${nilai} itu bukan angka! `;\n      }\n    }, \"Silahkan masukkan angka yang benar: \");\n\n    this.error.classList.remove(\"d-none\");\n    this.error.innerText = hasil;\n  };\n\n  sembunyikanError = () => this.error.classList.add(\"d-none\");\n}\n\n\n//# sourceURL=webpack://learning-webpack/./src/app/alert.service.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run)\n/* harmony export */ });\n/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/parseInput.js */ \"./src/app/utils/parseInput.js\");\n/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/cekInputValid.js */ \"./src/app/utils/cekInputValid.js\");\n\n\n\nconst run = (alertService, calculatorService, jokesService) => {\n  alertService.sembunyikanError();\n\n  calculatorService.onClick(() => {\n    alertService.sembunyikanError();\n    const input = calculatorService.getInput();\n    const angka = (0,_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_0__.parseInput)(...input);\n    if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_1__.cekInputValid)(...angka)) {\n      const [angka1, angka2] = angka;\n      calculatorService.setResult(angka1, angka2);\n    } else {\n      calculatorService.setResult(\"\");\n      alertService.tampilkanErrorPenjumlahan(input, angka);\n    }\n  });\n\n  jokesService.onClick(() => {\n    fetch(\"https://candaan-api.vercel.app/api/text/random\")\n      .then((response) => response.json())\n      .then((data) => {\n        jokesService.setModal(data.data);\n      });\n  });\n};\n\n\n//# sourceURL=webpack://learning-webpack/./src/app/app.js?");

/***/ }),

/***/ "./src/app/calculator.service.js":
/*!***************************************!*\
  !*** ./src/app/calculator.service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CalculatorService\": () => (/* binding */ CalculatorService)\n/* harmony export */ });\nclass CalculatorService {\n  constructor() {\n    this.operand1 = document.querySelector(\"#operand1\");\n    this.operand2 = document.querySelector(\"#operand2\");\n    this.tombolTambah = document.querySelector(\"#tombol-tambah\");\n    this.hasil = document.querySelector(\"#hasil\");\n  }\n\n  getInput() {\n    return [this.operand1.value, this.operand2.value];\n  }\n\n  setResult(angka1, angka2) {\n    this.hasil.innerText = angka1 + angka2;\n  }\n\n  onClick(cb) {\n    this.tombolTambah.addEventListener(\"click\", cb);\n  }\n}\n\n\n//# sourceURL=webpack://learning-webpack/./src/app/calculator.service.js?");

/***/ }),

/***/ "./src/app/jokes.service.js":
/*!**********************************!*\
  !*** ./src/app/jokes.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JokesService\": () => (/* binding */ JokesService)\n/* harmony export */ });\nclass JokesService {\n  constructor() {\n    this.tombolJokes = document.querySelector(\"#jokes-receh\");\n    this.modalBody = document.querySelector(\".modal-body\");\n  }\n\n  setModal(str) {\n    this.modalBody.innerHTML = str;\n  }\n\n  onClick(cb) {\n    this.tombolJokes.addEventListener(\"click\", cb);\n  }\n}\n\n\n//# sourceURL=webpack://learning-webpack/./src/app/jokes.service.js?");

/***/ }),

/***/ "./src/app/utils/cekInputValid.js":
/*!****************************************!*\
  !*** ./src/app/utils/cekInputValid.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cekInputValid\": () => (/* binding */ cekInputValid)\n/* harmony export */ });\nconst cekInputValid = (...angka) => {\n  return angka.every((num) => typeof num === \"number\" && !isNaN(num));\n};\n\n\n//# sourceURL=webpack://learning-webpack/./src/app/utils/cekInputValid.js?");

/***/ }),

/***/ "./src/app/utils/parseInput.js":
/*!*************************************!*\
  !*** ./src/app/utils/parseInput.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseInput\": () => (/* binding */ parseInput)\n/* harmony export */ });\nconst parseInput = (...input) => {\n  return input.map((str) => parseInt(str));\n};\n\n\n//# sourceURL=webpack://learning-webpack/./src/app/utils/parseInput.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.js */ \"./src/app/app.js\");\n/* harmony import */ var _app_alert_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/alert.service.js */ \"./src/app/alert.service.js\");\n/* harmony import */ var _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/calculator.service.js */ \"./src/app/calculator.service.js\");\n/* harmony import */ var _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/jokes.service.js */ \"./src/app/jokes.service.js\");\n\n\n\n\n\nconst alertService = new _app_alert_service_js__WEBPACK_IMPORTED_MODULE_1__.AlertService();\nconst calculatorService = new _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_2__.CalculatorService();\nconst jokesService = new _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_3__.JokesService();\n(0,_app_app_js__WEBPACK_IMPORTED_MODULE_0__.run)(alertService, calculatorService, jokesService);\n\n\n//# sourceURL=webpack://learning-webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;