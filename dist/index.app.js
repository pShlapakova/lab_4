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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main_media.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main_media.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media(max-width: 1024px) and (min-width: 860px) {\r\n\t.news-list li {\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.news-list li > .news-foto {\r\n\t\tmin-width: 100%;\r\n\t}\r\n}\r\n\r\n@media(max-width: 860px) {\r\n\t.wrapper-news {\r\n\t\tflex-direction: column-reverse;\r\n\t\talign-items: stretch;\r\n\t}\r\n\r\n\t.filter-panel {\r\n\t\tflex-direction: row;\r\n\t\talign-items: center;\r\n\t\tjustify-content: flex-end;\r\n\t\tmargin-left: 30px;\r\n\t\tpadding: 7px 30px 12px;\r\n\t}\r\n\r\n\t.sourse-filter::before {\r\n\t\tfont-family: 'FontAwesome';\r\n\t\tcontent: '\\f142';\r\n\t\tposition: relative;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tmargin-left: 40px;\r\n\t\twidth: 2.5rem;\r\n\t\theight: 2.5rem;\r\n\t\tborder-radius: 50%;\r\n\t\tline-height: 1;\r\n\t\tfont-size: 1.6rem;\r\n\t\tcolor: #776477;\r\n\t\tbackground-color: #fcfcf7;\r\n\t\tborder: 4px solid #776477;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.search input,\r\n\t.search button::before {\r\n\t\tcolor: #fff;\r\n\t}\r\n\r\n\t.search-block {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.search {\r\n\t\tbox-sizing: border-box;\r\n\t\tborder-bottom: 2px solid #fcfcf7;\r\n\t\tbackground-color: #776477;\r\n\t}\r\n\r\n\t::-webkit-input-placeholder {\r\n\t  \tcolor: #fcfcf7;\r\n\t}\r\n\r\n\t.sourse-filter:hover > .sourses {\r\n\t\tvisibility: visible;\r\n\t}\r\n\r\n\t.sourses {\r\n\t\tvisibility: hidden;\r\n\t\tposition: absolute;\r\n\t    right: 30px;\r\n\t    width: 40%;\r\n\t    /*border-top: 3px solid #fcfcf7;/*#a8aec1#776477*/\r\n\t    background-color: #776477;/*3d1755/5a227d/917c91 */\r\n\t}\r\n}\r\n\r\n@media (max-width: 640px) {\r\n\t.news-list li {\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.news-list li > .news-foto {\r\n\t\tmin-width: 100%;\r\n\t}\r\n\r\n\t#header {\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t#header div {\r\n\t\twidth: 100%;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\r\n\t.global-navi {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t.global-navi::before {\r\n\t\tcontent: 'Menu';\r\n\t\tfont-size: 1.4rem;\r\n\t\tfont-weight: 600;\r\n\t}\r\n\r\n\t.global-navi:hover {\r\n\t\tcolor: #b4d11e;\r\n\t\tfont-weight: 500;\r\n\t\tborder-bottom: 3px solid #b4d11e;\r\n\t}\r\n\r\n\t.global-navi:hover > .top-menu {\r\n\t\tvisibility: visible;\r\n\t\tz-index: 1;\r\n\t}\r\n\r\n\t.top-menu {\r\n\t\tvisibility: hidden;\r\n\t\tposition: absolute;\r\n\t    top: 100%;\r\n\t    right: 0%;\r\n\t    width: 50%;\r\n\t    height: auto;\r\n\t    flex-direction: column;\r\n\t    background-color: #776477;\r\n\t}\r\n\r\n\t.top-menu li:nth-child(2n) {\r\n\t\tbackground-color: #877487;\r\n\t}\r\n\r\n\t.top-menu > li > a {\r\n\t\tbox-sizing: padding-box;\r\n\t\twidth: 100%;\r\n\t\tpadding-left: 13%;\r\n\t\tpadding-top: 10px;\r\n\t\tpadding-bottom: 10px;\r\n\t}\r\n\r\n\t.top-menu:hover {\r\n\t\tvisibility: visible;\r\n\t}\r\n\r\n\t#header .subscription-btns {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.enter-btn-menu {\r\n\t\tdisplay: flex;\r\n\t\ttop: calc(100% + (20px + 1.86 * 1.1rem)*5 - 3px);\r\n\t\tbackground-color: #877487;\r\n\t}\r\n\r\n\t.top-menu:hover + .enter-btn-menu {\r\n\t\tdisplay: flex;\r\n\t\ttop: calc(100% + (20px + 1.86 * 1.1rem)*5);\r\n\t}\r\n\r\n\t.enter-btn-menu .sign-up {\r\n\t\tbackground-color: #84b000;\r\n\t}\r\n\r\n\t.enter-btn-menu .sign-up:hover {\r\n\t\tborder: 0px;\r\n\t\tbackground-color: #b4d11e;\r\n\t\tcolor: #fff;\r\n\t}\r\n\r\n\t#footer {\r\n\t\tflex-wrap: wrap;\r\n\t}\r\n\r\n\t.foot-menu {\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t.footer-logo img {\r\n\t\theight: 0px;\r\n\t}\r\n\r\n\t.copyright {\r\n\t\tflex-direction: row;\r\n\t}\r\n\r\n\t.social-networks {\r\n\t\talign-self: flex-end;\r\n\t}\r\n}\r\n\r\n@media(max-width: 320px) {\r\n\t#footer {\r\n\t\tpadding: 20px;\r\n\t}\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/news.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/news.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*----------------Header----------------------------------------------------*/\r\n#header {\r\n\tbackground-color: #3d1755;\r\n\tcolor: #fcfcf7; \r\n}\r\n\r\n#header div{\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\talign-items: stretch;\r\n}\r\n/*----------------Header----------------------------------------------------*/\r\n\r\n\r\n/*----------------Global Navigation-----------------------------------------*/\r\n.top-menu {\r\n\talign-items: stretch;\r\n\theight: 100%;\r\n}\r\n\r\n.top-menu > li > a {\r\n\tbox-sizing: border-box;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\tpadding: 0 1.5vw;\r\n\tcolor: #fcfcf7;\r\n\tfont-size: 1.1rem;\r\n}\r\n\r\n.top-menu li a:hover,\r\n.top-menu li a:active {\r\n\tcolor: #b4d11e;\r\n\tborder-bottom: 3px solid #b4d11e;\r\n}\r\n\r\n.enter-btn-menu {\r\n\tdisplay: none;\r\n}\r\n/*----------------Global Navigation-----------------------------------------*/\r\n\r\n\r\n/*----------------Subscribtion----------------------------------------------*/\r\n.subscription-btns {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n}\r\n\r\n.subscription-btns .button {\r\n\tmargin: auto 10px;\r\n\twidth: 100px;\r\n\tborder: 1px solid #b4d11e;\r\n}\r\n\r\n.sign-up {\r\n\tbackground-color: #b4d11e;\r\n\tcolor: #3d1755;\r\n}\r\n/*----------------Subscribtion----------------------------------------------*/\r\n\r\n/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\r\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/\r\n\r\n/*---------------Main news--------------------------------------------------*/\r\n.main-news {\r\n\tflex-direction: column;\r\n\tbackground-color: #3d1755;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\tpadding: 30px 30px;\r\n}\r\n\r\n.wrapper-main-news {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\tmax-width: 1024px;\r\n}\r\n\r\n.column {\r\n\tmargin: 20px;\r\n}\r\n\r\n.left-column {\r\n\twidth: calc(66.666% - 20px);\r\n}\r\n\r\n.foto-news img {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tobject-fit: cover;\r\n}\r\n\r\n.foto-news .foto {\r\n\twidth: 100%;\r\n}\r\n\r\n.left-column .foto-news {\r\n\theight: 100%;\r\n}\r\n\r\n.foto-news {\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n\tline-height: 1.5;\r\n\twidth: 100%;\r\n}\r\n\r\n.right-column .foto-news {\r\n\theight: calc(50% - 10px);\r\n}\r\n\r\n.right-column {\r\n\tdisplay: flex;\r\n\twidth: calc(33.333% - 20px);\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.foto-news-text {\r\n\tposition: absolute;\r\n\tbox-sizing: border-box;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tmax-height: 40%;\r\n\tmin-width: 100%;\r\n\tpadding: 4%;\r\n\tbackground-color: rgb(252, 252, 247, 0.7);\r\n\ttext-align: right;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n}\r\n\r\n.foto-news-text p {\r\n\tdisplay: block;\r\n\tfont-size: 0.9rem;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n}\r\n\r\n.foto-news-text p,\r\n.foto-news-text h6 {\r\n\tcolor: #553e46;\r\n}\r\n\r\n.foto-news-text:hover {\r\n\ttop: 0;\r\n\tmin-height: 100%;\r\n\tbackground-color: rgb(180, 209, 30, 0.6);\r\n}\r\n\r\n.foto-news-text:hover p {\r\n\tcolor: #1f0c2b;\r\n}\r\n\r\n.right-column .foto-news-text:hover p {\r\n\tdisplay: block;\r\n\tfont-size: 0.8rem;\r\n}\r\n\r\n.foto-news-text h3 {\r\n\tfont-size: 1.2rem;\r\n}\r\n\r\n.foto-news-text h6 {\r\n\tfont-size: 0.7rem;\r\n}\r\n\r\n.right-column .foto-news-text h3 {\r\n\tfont-size: 1rem;\r\n\tline-height: 1.4;\r\n}\r\n\r\n.right-column .foto-news-text p {\r\n\tdisplay: none;\r\n}\r\n\r\n@media(max-width: 640px) {\r\n\t.right-column {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.wrapper-main-news,\r\n\t.left-column {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.column {\r\n\t\tmargin: 10px;\r\n\t}\r\n}\r\n/*---------------Main news--------------------------------------------------*/\r\n\r\n/*----------------Main------------------------------------------------------*/\r\n.wrapper-news {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: flex-start;\r\n\tjustify-content: space-between;\r\n\tmax-width: 1200px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.filter-panel {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-start;\r\n\talign-items: stretch;\r\n\tflex-grow: 1;\r\n\tflex-shrink: 1;\r\n\tflex-basis: 20%;\r\n\tmargin: 30px 30px 30px 0;\r\n\tpadding: 30px;\r\n\tborder-radius: 20px;\r\n\tbackground-color: #776477;\r\n\tcolor: #fcfcf7;\r\n}\r\n\r\n.news {\r\n\tflex-direction: column;\r\n\tflex-grow: 9;\r\n\tflex-shrink: 7;\r\n\tmargin: 30px;\r\n\tpadding: 0;\r\n}\r\n\r\n.no-news-text {\r\n\tpadding-top: 20px;\r\n}\r\n/*----------------Main------------------------------------------------------*/\r\n\r\n/*----------------Search----------------------------------------------------*/\r\n.search {\r\n\tbackground-color: #fff;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tborder-bottom: 3px solid #776477;\r\n}\r\n\r\n.search input, .search button {\r\n\tmargin: 0;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\n\r\n.search input {\r\n\tpadding: 12px 17px;\r\n\tflex-grow: 1;\r\n}\r\n\r\n.search button {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.search button::before {\r\n\tcontent: \"\\f002\";\r\n\tfont-family: \"FontAwesome\";\r\n\tfont-size: 1.1rem;\r\n\tcolor: #776477;\r\n}\r\n/*----------------Search----------------------------------------------------*/\r\n\r\n/*---------------Source panel-----------------------------------------------*/\r\n.source-filter {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-start;\r\n\talign-items: stretch;\r\n}\r\n\r\n.sourses li {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 10px;\r\n\tfont-weight: 600;\r\n\tborder-bottom: 1px solid #3d1755;\r\n\tcursor: pointer;\r\n}\r\n\r\n.sourses li.active {\r\n\tbackground-color: #84b000;\r\n}\r\n\r\n.sourses li:hover {\r\n\tbackground-color: #b4d11e;\r\n}\r\n/*---------------Sourse panel-----------------------------------------------*/\r\n\r\n/*---------------News-------------------------------------------------------*/\r\n.news-tags {\r\n\twidth: 100%;\r\n} \r\n\r\n.news-tags h3 {\r\n\tdisplay: block;\r\n\tpadding: 15px 30px;\r\n\ttext-transform: uppercase;\r\n\ttext-align: center;\r\n\tbackground-color: #3d1755;\r\n\tcolor: #fcfcf7;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.news-tags .tag {\r\n\tdisplay: none;/*block*/\r\n\tmargin: 10px 0;\r\n\tpadding: 5px 20px;\r\n\tborder-radius: 20px;\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n.news-list li {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\talign-items: stretch;\r\n\tmargin-top: 30px;\r\n\tbackground-color: #fff;\r\n\toverflow: hidden;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.news-list li > .news-foto {\r\n\tmin-width: 40%;\r\n\tmax-width: 40%;\r\n}\r\n\r\n.news-list li > .news-data {\r\n\tmargin: 20px 40px;\r\n}\r\n\r\n.news-list li > .news-foto a img {\r\n\twidth: 100%; \r\n\theight: 100%;\r\n\tobject-fit: cover;\r\n}\r\n\r\n.news-list li > .news-data h5 {\r\n\tfont-size: 1.3rem;\r\n\tcolor: #3d1755;\r\n\tfont-weight: 600;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.news-list li > .news-foto img:hover {\r\n\t/*green + read more...*/\r\n}\r\n\r\n.news-list li > .news-data h5:hover {\r\n\tcolor: #b4d11e;\r\n}\r\n\r\n.news-list li > .news-data h6 {\r\n\tcolor: #553e46;\r\n}\r\n\r\n.news footer {\r\n\twidth: 100%;\r\n}\r\n\r\n.load-more-button {\r\n\tmargin: 30px auto;\r\n\twidth: 50%;\r\n\tfont-weight: 600;\r\n\tcolor: #3d1755;\r\n\tbackground-color: #fcfcf7;\r\n\tborder: 2px solid #3d1755;\r\n}\r\n\r\n.load-more-button:hover {\r\n\tcolor: #fcfcf7;\r\n\tbackground-color: #b4d11e;\r\n\tborder-color: #b4d11e;\r\n}\r\n/*---------------News-------------------------------------------------------*/\r\n\r\n/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\r\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/\r\n\r\n/*---------------Footer-----------------------------------------------------*/\r\n#footer {\r\n\tbackground-color: #3d1755;\r\n\tcolor: #fcfcf7;\r\n}\r\n\r\n#footer a{\r\n\tcolor: #fcfcf7;\r\n}\r\n\r\n#footer a:hover{\r\n\tcolor: #b4d11e;\r\n}\r\n/*---------------Footer-----------------------------------------------------*/\r\n\r\n/*---------------Footer menu------------------------------------------------*/\r\n.foot-menu > li {\r\n\tpadding: 0 20px;\r\n\tborder-right: 1px solid #fcfcf7;\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n.foot-menu > li:last-child {\r\n\tborder-right: 0px;\r\n}\r\n/*---------------Footer menu------------------------------------------------*/\r\n\r\n/*---------------Copyright--------------------------------------------------*/\r\n.copyright {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 0 15px;\r\n}\r\n\r\n.footer-logo img {\r\n\theight: 30px;\r\n}\r\n/*---------------Copyright--------------------------------------------------*/\r\n\r\n/*---------------Social networks--------------------------------------------*/\r\n.social-networks a {\r\n\tmargin: 5px;\r\n\tfont-family: \"FontAwesome\";\r\n\tfont-size: 1.5rem;\r\n}\r\n/*---------------Social networks--------------------------------------------*/", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\r\n\tfont-size: 14px;\r\n}\r\n\r\n@media(max-width: 960px){\r\n\thtml {\r\n\t\tfont-size: calc(12px + (100vw - 320px)/(960 - 320)*(14 - 12));\r\n\t}\r\n}\r\n\r\n* {\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tborder: 0px;\r\n}\r\n\r\nbody {\r\n\tbackground: #fcfcf7;\r\n\tline-height: 1.86;\r\n\tfont-family: \"Montserrat\", \"Open Sans\", \"Roboto\", sans-serif;\r\n\tcolor: #553e46;\r\n}\r\n\r\nhr {\r\n\twidth: 80%;\r\n\tmargin: 0 auto;\r\n\tborder-top: 1px solid #3d1755;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: #b4d11e;\r\n}\r\n\r\nul {\r\n\tlist-style: none;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 7rem;\r\n\tline-height: 1.3;\r\n\tcolor: #fcfcf7;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 3rem;\r\n\tfont-weight: 700;\r\n\tmargin-bottom: 20px;\r\n\tcolor: #3d1755;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 1.3rem;\r\n\tcolor: #3d1755;\r\n}\r\n\r\nh4 {\r\n\tfont-size: 1.2rem;\r\n\tfont-weight: 600;\r\n\tline-height: 1.4;\r\n\tcolor: #3d1755;\r\n}\r\n\r\nh6 {\r\n\tfont-size: 0.9rem;\r\n\tfont-weight: 500;\r\n}\r\n\r\n@media(max-width: 960px){\r\n\th1 {\r\n\t\tfont-size: calc(2rem + (100vw - 23rem)/(69 - 23)*(7 - 2));\r\n\t}\r\n\r\n\th2 {\r\n\t\tfont-size: calc(1.8rem + (100vw - 23rem)/(69 - 23)*(3 - 1.8));\r\n\t}\r\n}\r\n\r\nsection {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding-top: 50px;\r\n\tpadding-bottom: 40px;\r\n\tpadding-left: 50px;\r\n\tpadding-right: 50px;\r\n}\r\n\r\n@media(max-width: 480px) {\r\n\tsection {\r\n\t\tpadding-left: 30px;\r\n\t\tpadding-right: 30px;\r\n\t}\r\n}\r\n\r\ninput {\r\n\tmargin-bottom: 20px;\r\n\tfont-family: \"Montserrat\", \"Open Sans\", \"Roboto\", sans-serif;\r\n}\r\n\r\ninput:focus,\r\ninput:active {\r\n\toutline: 0;\r\n}\r\n\r\nlabel {\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\ninput[type = \"checkbox\"] {\r\n\tvertical-align: middle;\r\n\tmargin: 0 10px;\r\n}\r\n\r\nbutton, .button {\r\n\tmargin: auto 10px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 40px;\r\n\tfont-size: 1em;\r\n\toutline: 0;\r\n\tborder-radius: 20px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.logo-img {\r\n\tmargin: auto 0;\r\n\tmargin-bottom: 10px;\r\n\theight: 45px;\r\n}\r\n\r\n@media(max-width: 480px) {\r\n\t.logo-img {\r\n\t\theight: 35px;\r\n\t}\r\n}\r\n\r\n.card {\r\n\tbackground-color: #ae0e3a;\r\n\tborder-radius: 20px;\r\n\tpadding: 40px;\r\n\tmargin: 20px;\r\n\talign-self: stretch;\r\n\tflex: 1;\r\n}\r\n\r\n.card .field {\r\n\twidth: calc(100% - 2 * 17px);\r\n}\r\n\r\n@media(max-width: 425px) {\r\n\t.card {\r\n\t\tpadding: 25px;\r\n\t}\r\n}\r\n\r\n.horizontal-menu {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\talign-items: stretch;\r\n}\r\n\r\n.field {\r\n\tpadding: 12px 17px;\r\n\theight: 17px;\r\n\tfont-size: 1.1rem;\r\n\tborder-radius: 17px;\r\n}\r\n\r\n.header, #header {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\talign-items: stretch;\r\n\tpadding: 7px 30px 0;\r\n\theight: 65px;\r\n}\r\n\r\n@media(max-width: 480px) {\r\n\t#header {\r\n\t\theight: 50px;\r\n\t}\r\n}\r\n\r\n#footer {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\talign-items: stretch;\r\n\tpadding: 20px 30px;\r\n}\r\n\r\n#wrapper {\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\toverflow-x: auto;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/main_media.css":
/*!********************************!*\
  !*** ./src/css/main_media.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main_media.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main_media.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/news.css":
/*!**************************!*\
  !*** ./src/css/news.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./news.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/news.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/image/icon.png":
/*!****************************!*\
  !*** ./src/image/icon.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d300bd23c243100d6d49d7dd6cfe573d.png";

/***/ }),

/***/ "./src/image/no-image.jpg":
/*!********************************!*\
  !*** ./src/image/no-image.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1d42c05fa21f456f4cc6711cfe8e4556.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: OnSourceClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnSourceClick", function() { return OnSourceClick; });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_news_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/news.css */ "./src/css/news.css");
/* harmony import */ var _css_news_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_news_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_media_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main_media.css */ "./src/css/main_media.css");
/* harmony import */ var _css_main_media_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_media_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _news_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news_api.js */ "./src/news_api.js");
/* harmony import */ var _src_image_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/image/icon.png */ "./src/image/icon.png");
/* harmony import */ var _src_image_icon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_image_icon_png__WEBPACK_IMPORTED_MODULE_4__);






function GetActiveSource() {
    const currSource = document.getElementsByClassName('sourses')[0].getElementsByClassName('active')[0];
    const list = currSource.parentElement.children;
    let index;
    for (let key in list) {
        if (list[key] === currSource)
            index = key;
    }
    return index;
}

function ShowActiveSource(choosenSource) {
    const currSource = document.getElementsByClassName('sourses')[0].getElementsByClassName('active')[0];
    currSource.classList.remove('active');
    choosenSource.classList.add('active');
}

function OnSourceClick(e) {
    ShowActiveSource(e.target);
    Object(_news_api_js__WEBPACK_IMPORTED_MODULE_3__["GetNews"])(GetActiveSource());
}

function OnSearchClick(e) {
    e.preventDefault();
    Object(_news_api_js__WEBPACK_IMPORTED_MODULE_3__["GetNews"])(GetActiveSource());
}

function OnLoadMore() {
    Object(_news_api_js__WEBPACK_IMPORTED_MODULE_3__["ShowNews"])(document.getElementsByClassName('news-list')[0].children.length);
}

function Start() {
    Object(_news_api_js__WEBPACK_IMPORTED_MODULE_3__["GetMainNews"])();
    Object(_news_api_js__WEBPACK_IMPORTED_MODULE_3__["GetSourses"])();
    Object(_news_api_js__WEBPACK_IMPORTED_MODULE_3__["GetNews"])(0);
    const formSearch = document.getElementsByClassName('search')[0];
    formSearch.addEventListener('submit', OnSearchClick);
    const btnMore = document.getElementsByClassName('news')[0].lastElementChild;
    btnMore.onclick = OnLoadMore;
}

function component() {
    const mIcon = new Image();
    mIcon.src = _src_image_icon_png__WEBPACK_IMPORTED_MODULE_4___default.a;
    document.addEventListener("DOMContentLoaded", Start);
}

document.body.appendChild(component());



/***/ }),

/***/ "./src/news_api.js":
/*!*************************!*\
  !*** ./src/news_api.js ***!
  \*************************/
/*! exports provided: GetNews, GetMainNews, GetSourses, ShowNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNews", function() { return GetNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMainNews", function() { return GetMainNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSourses", function() { return GetSourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowNews", function() { return ShowNews; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _src_image_no_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/image/no-image.jpg */ "./src/image/no-image.jpg");
/* harmony import */ var _src_image_no_image_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_image_no_image_jpg__WEBPACK_IMPORTED_MODULE_1__);



let SourcesList = [];
let news;

function GetSourses() {
    let url = "https://newsapi.org/v2/sources?" +
        "language=en&" +
        "category=technology&" +
        "apiKey=8691f399d3c64658b9477f3e9e448a78";
    var request = new Request(url);
    fetch(request)
        .then(function(response) {
            response.json().then (data => {
                ShowSources(data.sources); 
            });
        });
}

function ShowSources (list) {
    let outputHTML = "";
    let sources = list;
    
    for(let i in sources) {
        outputHTML += `<li>
                ${sources[i].name}
            </li>`;
        SourcesList.push(sources[i].id);
    }

    outputHTML = `<li> All </li>` + outputHTML;
    document.getElementsByClassName('sourses')[0].innerHTML = outputHTML;
    
    document.getElementsByClassName('sourses')[0].firstElementChild.classList.add('active');
    let buttons = document.getElementsByClassName('sourses')[0].children;
    for (let i in buttons) {
        buttons[i].onclick = _index_js__WEBPACK_IMPORTED_MODULE_0__["OnSourceClick"];
    }
    //document.getElementById("main").style.minHieght = 43*(SourcesList.length + 1) + 'px';
    //alert(document.getElementById("main")/*.style.minHieght*/);
}

function GetNews(index) {
    let category = 'technology';
    let source = '';
    if (index > 0) {
        source = SourcesList[index - 1];
        category = '';
    }

    let query = document.getElementsByName('search')[0].value;
    if (query !== "") {
        query = 'q=' + query + '&';
    }

    let newsCount = 40;

    let url = "https://newsapi.org/v2/top-headlines?" +
        query +
        "language=en&" +
        "sources=" + source + "&" +
        "category=" + category + "&" +
        "sortBy=relevancy&" + //popularity
        "pageSize=" + newsCount + "&" +
        "apiKey=8691f399d3c64658b9477f3e9e448a78";
    let request = new Request(url);
    fetch(request)
        .then(function(response) {
            response.json().then (data => {
                news = data.articles;
                ShowNews(0); 
            });
        });
}

function ShowNews (startNewsCount) {
    let outputHTML = "";
    let lastNewsNum = Math.min(startNewsCount + 5, news.length); 
    for(let i = startNewsCount; i < lastNewsNum; i++) {
        outputHTML += `
            <li>
                <div class="news-foto">
                    <a href="${news[i].url}">
                        <img src="${ !news[i].urlToImage ? _src_image_no_image_jpg__WEBPACK_IMPORTED_MODULE_1___default.a : news[i].urlToImage }">
                    </a>
                </div>
                <div class="news-data">
                    <a href="${news[i].url}"><h5>${news[i].title}</h5></a>
                    <h6>${news[i].publishedAt}</h6>
                    <p>${ !news[i].description ? "" : news[i].description }</p>
                </div>
            </li>`;
    }
    
    if (startNewsCount == 0) {
        if(outputHTML !== "") {
            outputHTML = `<ul class="news-list">` + outputHTML + `</ul>`;
            document.getElementsByClassName('news')[0].children[1].innerHTML = outputHTML;
        }
        else {
            let noNews = `
                <p class="no-news-text">
                    There are no articles matching your request
                </p>`;
            document.getElementsByClassName('news')[0].children[1].innerHTML = noNews;
        }
        const newsTitle = document.getElementsByClassName('news-tags')[0].firstElementChild;
        const currSource = document.getElementsByClassName('sourses')[0].getElementsByClassName('active')[0];
        newsTitle.innerHTML = currSource.innerHTML + ' news';
    }
    else {
        document.getElementsByClassName('news-list')[0].innerHTML += outputHTML;
    }

    if (lastNewsNum >= news.length) {
        document.getElementsByClassName('news')[0].lastElementChild.style.visibility = "hidden";
    }
    else {
        document.getElementsByClassName('news')[0].lastElementChild.style.visibility = "visible";
    }
}

function GetMainNews() {
    let url = 'https://newsapi.org/v2/top-headlines?' +
        'language=ru&en&' +
        'category=technology&' +
        'sortBy=popularity&' +
        'pageSize=3&' +
        'apiKey=8691f399d3c64658b9477f3e9e448a78';
    let request = new Request(url);
    fetch(request)
        .then(function(response) {
            response.json().then (data => {
                ShowMainNews(data.articles); 
            });
        });
}

function ShowMainNews (articles) {
    let outputHTML;
    let news = articles;
    
    outputHTML = `
        <div class="foto-news">
            <div class="foto">
                <img src="${ !news[0].urlToImage ? _src_image_no_image_jpg__WEBPACK_IMPORTED_MODULE_1___default.a : news[0].urlToImage }">
            </div>
            <a href="${news[0].url}">
                <div class="foto-news-text">
                    <h3>${news[0].title}</h3>
                    <h6>${news[0].publishedAt}</h6>
                    <p>${ !news[0].description ? "" : news[0].description }</p>
                </div>
            </a>
        </div>
    `;
    document.getElementsByClassName('main-news')[0].getElementsByClassName('left-column')[0].innerHTML = outputHTML;

    outputHTML = ``;

    for (let i = 1; i < 3; i++) {
        outputHTML += `
            <div class="foto-news">
                <div class="foto">
                    <img src="${ !news[i].urlToImage ? _src_image_no_image_jpg__WEBPACK_IMPORTED_MODULE_1___default.a : news[i].urlToImage }">
                </div>
                <a href="${news[i].url}">
                    <div class="foto-news-text">
                        <h3>${news[i].title}</h3>
                        <h6>${news[i].publishedAt}</h6>
                        <p>${ !news[i].description ? "" : news[i].description }</p>
                    </div>
                </a>
            </div>
        `;
    }
    document.getElementsByClassName('main-news')[0].getElementsByClassName('right-column')[0].innerHTML = outputHTML;
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluX21lZGlhLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL25ld3MuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluX21lZGlhLmNzcz9iNDBiIiwid2VicGFjazovLy8uL3NyYy9jc3MvbmV3cy5jc3M/NmQ4MCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcz8xM2QzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS9pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2Uvbm8taW1hZ2UuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3c19hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0Msb0NBQW9DLHVCQUF1Qiw4REFBTyx1QkFBdUI7QUFDekY7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVksUUFBUSxjQUFjO0FBQ2pFLDBCQUEwQixvQkFBb0I7QUFDOUMseUJBQXlCLGtEQUFrRDtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1Qiw4REFBTyx1QkFBdUI7QUFDakY7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBLDBCQUEwQixjQUFjO0FBQ3hDLDBCQUEwQixvQkFBb0I7QUFDOUMseUJBQXlCLGtEQUFrRDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUIsOERBQU8sdUJBQXVCO0FBQ3JGO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQSw4QkFBOEIsY0FBYztBQUM1Qyw4QkFBOEIsb0JBQW9CO0FBQ2xELDZCQUE2QixrREFBa0Q7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtaW4td2lkdGg6IDg2MHB4KSB7XFxyXFxuXFx0Lm5ld3MtbGlzdCBsaSB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm5ld3MtbGlzdCBsaSA+IC5uZXdzLWZvdG8ge1xcclxcblxcdFxcdG1pbi13aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDg2MHB4KSB7XFxyXFxuXFx0LndyYXBwZXItbmV3cyB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZmlsdGVyLXBhbmVsIHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMzBweDtcXHJcXG5cXHRcXHRwYWRkaW5nOiA3cHggMzBweCAxMnB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc291cnNlLWZpbHRlcjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcXHJcXG5cXHRcXHRjb250ZW50OiAnXFxcXGYxNDInO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuXFx0XFx0d2lkdGg6IDIuNXJlbTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDIuNXJlbTtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxLjZyZW07XFxyXFxuXFx0XFx0Y29sb3I6ICM3NzY0Nzc7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmNztcXHJcXG5cXHRcXHRib3JkZXI6IDRweCBzb2xpZCAjNzc2NDc3O1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNlYXJjaCBpbnB1dCxcXHJcXG5cXHQuc2VhcmNoIGJ1dHRvbjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNlYXJjaC1ibG9jayB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zZWFyY2gge1xcclxcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmY2ZjZjc7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzc3NjQ3NztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHQgIFxcdGNvbG9yOiAjZmNmY2Y3O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc291cnNlLWZpbHRlcjpob3ZlciA+IC5zb3Vyc2VzIHtcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc291cnNlcyB7XFxyXFxuXFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgICAgcmlnaHQ6IDMwcHg7XFxyXFxuXFx0ICAgIHdpZHRoOiA0MCU7XFxyXFxuXFx0ICAgIC8qYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmY2ZjZjc7LyojYThhZWMxIzc3NjQ3NyovXFxyXFxuXFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzY0Nzc7LyozZDE3NTUvNWEyMjdkLzkxN2M5MSAqL1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxyXFxuXFx0Lm5ld3MtbGlzdCBsaSB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm5ld3MtbGlzdCBsaSA+IC5uZXdzLWZvdG8ge1xcclxcblxcdFxcdG1pbi13aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2hlYWRlciB7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjaGVhZGVyIGRpdiB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZ2xvYmFsLW5hdmkge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lmdsb2JhbC1uYXZpOjpiZWZvcmUge1xcclxcblxcdFxcdGNvbnRlbnQ6ICdNZW51JztcXHJcXG5cXHRcXHRmb250LXNpemU6IDEuNHJlbTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZ2xvYmFsLW5hdmk6aG92ZXIge1xcclxcblxcdFxcdGNvbG9yOiAjYjRkMTFlO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNiNGQxMWU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5nbG9iYWwtbmF2aTpob3ZlciA+IC50b3AtbWVudSB7XFxyXFxuXFx0XFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQudG9wLW1lbnUge1xcclxcblxcdFxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0ICAgIHRvcDogMTAwJTtcXHJcXG5cXHQgICAgcmlnaHQ6IDAlO1xcclxcblxcdCAgICB3aWR0aDogNTAlO1xcclxcblxcdCAgICBoZWlnaHQ6IGF1dG87XFxyXFxuXFx0ICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzY0Nzc7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC50b3AtbWVudSBsaTpudGgtY2hpbGQoMm4pIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODc3NDg3O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQudG9wLW1lbnUgPiBsaSA+IGEge1xcclxcblxcdFxcdGJveC1zaXppbmc6IHBhZGRpbmctYm94O1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMTMlO1xcclxcblxcdFxcdHBhZGRpbmctdG9wOiAxMHB4O1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQudG9wLW1lbnU6aG92ZXIge1xcclxcblxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNoZWFkZXIgLnN1YnNjcmlwdGlvbi1idG5zIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZW50ZXItYnRuLW1lbnUge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0dG9wOiBjYWxjKDEwMCUgKyAoMjBweCArIDEuODYgKiAxLjFyZW0pKjUgLSAzcHgpO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM4Nzc0ODc7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC50b3AtbWVudTpob3ZlciArIC5lbnRlci1idG4tbWVudSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHR0b3A6IGNhbGMoMTAwJSArICgyMHB4ICsgMS44NiAqIDEuMXJlbSkqNSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5lbnRlci1idG4tbWVudSAuc2lnbi11cCB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzg0YjAwMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmVudGVyLWJ0bi1tZW51IC5zaWduLXVwOmhvdmVyIHtcXHJcXG5cXHRcXHRib3JkZXI6IDBweDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMTFlO1xcclxcblxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjZm9vdGVyIHtcXHJcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5mb290LW1lbnUge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5mb290ZXItbG9nbyBpbWcge1xcclxcblxcdFxcdGhlaWdodDogMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY29weXJpZ2h0IHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc29jaWFsLW5ldHdvcmtzIHtcXHJcXG5cXHRcXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDMyMHB4KSB7XFxyXFxuXFx0I2Zvb3RlciB7XFxyXFxuXFx0XFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHR9XFxyXFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyotLS0tLS0tLS0tLS0tLS0tSGVhZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuI2hlYWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNkMTc1NTtcXHJcXG5cXHRjb2xvcjogI2ZjZmNmNzsgXFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgZGl2e1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLUhlYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLUdsb2JhbCBOYXZpZ2F0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi50b3AtbWVudSB7XFxyXFxuXFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLW1lbnUgPiBsaSA+IGEge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAwIDEuNXZ3O1xcclxcblxcdGNvbG9yOiAjZmNmY2Y3O1xcclxcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLW1lbnUgbGkgYTpob3ZlcixcXHJcXG4udG9wLW1lbnUgbGkgYTphY3RpdmUge1xcclxcblxcdGNvbG9yOiAjYjRkMTFlO1xcclxcblxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYjRkMTFlO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXItYnRuLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLUdsb2JhbCBOYXZpZ2F0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLVN1YnNjcmlidGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5zdWJzY3JpcHRpb24tYnRucyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YnNjcmlwdGlvbi1idG5zIC5idXR0b24ge1xcclxcblxcdG1hcmdpbjogYXV0byAxMHB4O1xcclxcblxcdHdpZHRoOiAxMDBweDtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjYjRkMTFlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2I0ZDExZTtcXHJcXG5cXHRjb2xvcjogIzNkMTc1NTtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tU3Vic2NyaWJ0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLyp8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8XFxyXFxufHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fCovXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS1NYWluIG5ld3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLm1haW4tbmV3cyB7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2QxNzU1O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMzBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlci1tYWluLW5ld3Mge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0bWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4ge1xcclxcblxcdG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29sdW1uIHtcXHJcXG5cXHR3aWR0aDogY2FsYyg2Ni42NjYlIC0gMjBweCk7XFxyXFxufVxcclxcblxcclxcbi5mb3RvLW5ld3MgaW1nIHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3RvLW5ld3MgLmZvdG8ge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1jb2x1bW4gLmZvdG8tbmV3cyB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm90by1uZXdzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtY29sdW1uIC5mb3RvLW5ld3Mge1xcclxcblxcdGhlaWdodDogY2FsYyg1MCUgLSAxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LWNvbHVtbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogY2FsYygzMy4zMzMlIC0gMjBweCk7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm90by1uZXdzLXRleHQge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdG1heC1oZWlnaHQ6IDQwJTtcXHJcXG5cXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogNCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNDcsIDAuNyk7XFxyXFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLmZvdG8tbmV3cy10ZXh0IHAge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5mb3RvLW5ld3MtdGV4dCBwLFxcclxcbi5mb3RvLW5ld3MtdGV4dCBoNiB7XFxyXFxuXFx0Y29sb3I6ICM1NTNlNDY7XFxyXFxufVxcclxcblxcclxcbi5mb3RvLW5ld3MtdGV4dDpob3ZlciB7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjA5LCAzMCwgMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvdG8tbmV3cy10ZXh0OmhvdmVyIHAge1xcclxcblxcdGNvbG9yOiAjMWYwYzJiO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtY29sdW1uIC5mb3RvLW5ld3MtdGV4dDpob3ZlciBwIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvdG8tbmV3cy10ZXh0IGgzIHtcXHJcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvdG8tbmV3cy10ZXh0IGg2IHtcXHJcXG5cXHRmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LWNvbHVtbiAuZm90by1uZXdzLXRleHQgaDMge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS40O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtY29sdW1uIC5mb3RvLW5ld3MtdGV4dCBwIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA2NDBweCkge1xcclxcblxcdC5yaWdodC1jb2x1bW4ge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC53cmFwcGVyLW1haW4tbmV3cyxcXHJcXG5cXHQubGVmdC1jb2x1bW4ge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY29sdW1uIHtcXHJcXG5cXHRcXHRtYXJnaW46IDEwcHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLU1haW4gbmV3cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS1NYWluLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4ud3JhcHBlci1uZXdzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdG1heC13aWR0aDogMTIwMHB4O1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXBhbmVsIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdGZsZXgtZ3JvdzogMTtcXHJcXG5cXHRmbGV4LXNocmluazogMTtcXHJcXG5cXHRmbGV4LWJhc2lzOiAyMCU7XFxyXFxuXFx0bWFyZ2luOiAzMHB4IDMwcHggMzBweCAwO1xcclxcblxcdHBhZGRpbmc6IDMwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzc2NDc3O1xcclxcblxcdGNvbG9yOiAjZmNmY2Y3O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cyB7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRmbGV4LWdyb3c6IDk7XFxyXFxuXFx0ZmxleC1zaHJpbms6IDc7XFxyXFxuXFx0bWFyZ2luOiAzMHB4O1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5uby1uZXdzLXRleHQge1xcclxcblxcdHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS1NYWluLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS1TZWFyY2gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uc2VhcmNoIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNzc2NDc3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIGlucHV0LCAuc2VhcmNoIGJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCBpbnB1dCB7XFxyXFxuXFx0cGFkZGluZzogMTJweCAxN3B4O1xcclxcblxcdGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCBidXR0b24ge1xcclxcblxcdHdpZHRoOiA0MHB4O1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCBidXR0b246OmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkZvbnRBd2Vzb21lXFxcIjtcXHJcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXHJcXG5cXHRjb2xvcjogIzc3NjQ3NztcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tU2VhcmNoLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS1Tb3VyY2UgcGFuZWwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLnNvdXJjZS1maWx0ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5zb3Vyc2VzIGxpIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2QxNzU1O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJzZXMgbGkuYWN0aXZlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODRiMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cnNlcyBsaTpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2I0ZDExZTtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS1Tb3Vyc2UgcGFuZWwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS1OZXdzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLm5ld3MtdGFncyB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufSBcXHJcXG5cXHJcXG4ubmV3cy10YWdzIGgzIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRwYWRkaW5nOiAxNXB4IDMwcHg7XFxyXFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNkMTc1NTtcXHJcXG5cXHRjb2xvcjogI2ZjZmNmNztcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy10YWdzIC50YWcge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7LypibG9jayovXFxyXFxuXFx0bWFyZ2luOiAxMHB4IDA7XFxyXFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtbGlzdCBsaSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1saXN0IGxpID4gLm5ld3MtZm90byB7XFxyXFxuXFx0bWluLXdpZHRoOiA0MCU7XFxyXFxuXFx0bWF4LXdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5uZXdzLWxpc3QgbGkgPiAubmV3cy1kYXRhIHtcXHJcXG5cXHRtYXJnaW46IDIwcHggNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtbGlzdCBsaSA+IC5uZXdzLWZvdG8gYSBpbWcge1xcclxcblxcdHdpZHRoOiAxMDAlOyBcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXdzLWxpc3QgbGkgPiAubmV3cy1kYXRhIGg1IHtcXHJcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXHJcXG5cXHRjb2xvcjogIzNkMTc1NTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5uZXdzLWxpc3QgbGkgPiAubmV3cy1mb3RvIGltZzpob3ZlciB7XFxyXFxuXFx0LypncmVlbiArIHJlYWQgbW9yZS4uLiovXFxyXFxufVxcclxcblxcclxcbi5uZXdzLWxpc3QgbGkgPiAubmV3cy1kYXRhIGg1OmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogI2I0ZDExZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtbGlzdCBsaSA+IC5uZXdzLWRhdGEgaDYge1xcclxcblxcdGNvbG9yOiAjNTUzZTQ2O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cyBmb290ZXIge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZC1tb3JlLWJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luOiAzMHB4IGF1dG87XFxyXFxuXFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGNvbG9yOiAjM2QxNzU1O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZjc7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgIzNkMTc1NTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWQtbW9yZS1idXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiAjZmNmY2Y3O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNiNGQxMWU7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiAjYjRkMTFlO1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLU5ld3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHxcXHJcXG58fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8Ki9cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLUZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4jZm9vdGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2QxNzU1O1xcclxcblxcdGNvbG9yOiAjZmNmY2Y3O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIGF7XFxyXFxuXFx0Y29sb3I6ICNmY2ZjZjc7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIgYTpob3ZlcntcXHJcXG5cXHRjb2xvcjogI2I0ZDExZTtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS1Gb290ZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS1Gb290ZXIgbWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmZvb3QtbWVudSA+IGxpIHtcXHJcXG5cXHRwYWRkaW5nOiAwIDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZjZmNmNztcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3QtbWVudSA+IGxpOmxhc3QtY2hpbGQge1xcclxcblxcdGJvcmRlci1yaWdodDogMHB4O1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLUZvb3RlciBtZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLUNvcHlyaWdodC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uY29weXJpZ2h0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbG9nbyBpbWcge1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS1Db3B5cmlnaHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS1Tb2NpYWwgbmV0d29ya3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLnNvY2lhbC1uZXR3b3JrcyBhIHtcXHJcXG5cXHRtYXJnaW46IDVweDtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkZvbnRBd2Vzb21lXFxcIjtcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS1Tb2NpYWwgbmV0d29ya3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG5cXHRmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDk2MHB4KXtcXHJcXG5cXHRodG1sIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IGNhbGMoMTJweCArICgxMDB2dyAtIDMyMHB4KS8oOTYwIC0gMzIwKSooMTQgLSAxMikpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmNmY2Y3O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjg2O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogIzU1M2U0NjtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICMzZDE3NTU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRjb2xvcjogI2I0ZDExZTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRmb250LXNpemU6IDdyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMztcXHJcXG5cXHRjb2xvcjogI2ZjZmNmNztcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0Y29sb3I6ICMzZDE3NTU7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXHJcXG5cXHRjb2xvcjogIzNkMTc1NTtcXHJcXG59XFxyXFxuXFxyXFxuaDQge1xcclxcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNDtcXHJcXG5cXHRjb2xvcjogIzNkMTc1NTtcXHJcXG59XFxyXFxuXFxyXFxuaDYge1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDk2MHB4KXtcXHJcXG5cXHRoMSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiBjYWxjKDJyZW0gKyAoMTAwdncgLSAyM3JlbSkvKDY5IC0gMjMpKig3IC0gMikpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRoMiB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiBjYWxjKDEuOHJlbSArICgxMDB2dyAtIDIzcmVtKS8oNjkgLSAyMykqKDMgLSAxLjgpKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nLXRvcDogNTBweDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxuXFx0cGFkZGluZy1yaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG5cXHRzZWN0aW9uIHtcXHJcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuXFx0XFx0cGFkZGluZy1yaWdodDogMzBweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsXFxyXFxuaW5wdXQ6YWN0aXZlIHtcXHJcXG5cXHRvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZSA9IFxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcblxcdG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sIC5idXR0b24ge1xcclxcblxcdG1hcmdpbjogYXV0byAxMHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuXFx0b3V0bGluZTogMDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taW1nIHtcXHJcXG5cXHRtYXJnaW46IGF1dG8gMDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdGhlaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG5cXHQubG9nby1pbWcge1xcclxcblxcdFxcdGhlaWdodDogMzVweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWUwZTNhO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogNDBweDtcXHJcXG5cXHRtYXJnaW46IDIwcHg7XFxyXFxuXFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuZmllbGQge1xcclxcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSAyICogMTdweCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDQyNXB4KSB7XFxyXFxuXFx0LmNhcmQge1xcclxcblxcdFxcdHBhZGRpbmc6IDI1cHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uaG9yaXpvbnRhbC1tZW51IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGQge1xcclxcblxcdHBhZGRpbmc6IDEycHggMTdweDtcXHJcXG5cXHRoZWlnaHQ6IDE3cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciwgI2hlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHRwYWRkaW5nOiA3cHggMzBweCAwO1xcclxcblxcdGhlaWdodDogNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG5cXHQjaGVhZGVyIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDUwcHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3dyYXBwZXIge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluX21lZGlhLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluX21lZGlhLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbl9tZWRpYS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmV3cy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkMzAwYmQyM2MyNDMxMDBkNmQ0OWQ3ZGQ2Y2ZlNTczZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxZDQyYzA1ZmEyMWY0NTZmNGNjNjcxMWNmZThlNDU1Ni5qcGdcIjsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvbmV3cy5jc3MnO1xyXG5pbXBvcnQgJy4vY3NzL21haW5fbWVkaWEuY3NzJztcclxuaW1wb3J0IHsgR2V0TmV3cywgR2V0TWFpbk5ld3MsIEdldFNvdXJzZXMsIFNob3dOZXdzIH0gZnJvbSAnLi9uZXdzX2FwaS5qcyc7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uL3NyYy9pbWFnZS9pY29uLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBHZXRBY3RpdmVTb3VyY2UoKSB7XHJcbiAgICBjb25zdCBjdXJyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc291cnNlcycpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpWzBdO1xyXG4gICAgY29uc3QgbGlzdCA9IGN1cnJTb3VyY2UucGFyZW50RWxlbWVudC5jaGlsZHJlbjtcclxuICAgIGxldCBpbmRleDtcclxuICAgIGZvciAobGV0IGtleSBpbiBsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3Rba2V5XSA9PT0gY3VyclNvdXJjZSlcclxuICAgICAgICAgICAgaW5kZXggPSBrZXk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNob3dBY3RpdmVTb3VyY2UoY2hvb3NlblNvdXJjZSkge1xyXG4gICAgY29uc3QgY3VyclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvdXJzZXMnKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcclxuICAgIGN1cnJTb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBjaG9vc2VuU291cmNlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBPblNvdXJjZUNsaWNrKGUpIHtcclxuICAgIFNob3dBY3RpdmVTb3VyY2UoZS50YXJnZXQpO1xyXG4gICAgR2V0TmV3cyhHZXRBY3RpdmVTb3VyY2UoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE9uU2VhcmNoQ2xpY2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgR2V0TmV3cyhHZXRBY3RpdmVTb3VyY2UoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE9uTG9hZE1vcmUoKSB7XHJcbiAgICBTaG93TmV3cyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzLWxpc3QnKVswXS5jaGlsZHJlbi5sZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFydCgpIHtcclxuICAgIEdldE1haW5OZXdzKCk7XHJcbiAgICBHZXRTb3Vyc2VzKCk7XHJcbiAgICBHZXROZXdzKDApO1xyXG4gICAgY29uc3QgZm9ybVNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlYXJjaCcpWzBdO1xyXG4gICAgZm9ybVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBPblNlYXJjaENsaWNrKTtcclxuICAgIGNvbnN0IGJ0bk1vcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzJylbMF0ubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGJ0bk1vcmUub25jbGljayA9IE9uTG9hZE1vcmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IG1JY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBtSWNvbi5zcmMgPSBJY29uO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgU3RhcnQpO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuXHJcbmV4cG9ydCB7IE9uU291cmNlQ2xpY2sgfTsiLCJpbXBvcnQge09uU291cmNlQ2xpY2t9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgbm9JbWFnZSBmcm9tICcuLi9zcmMvaW1hZ2Uvbm8taW1hZ2UuanBnJztcclxuXHJcbmxldCBTb3VyY2VzTGlzdCA9IFtdO1xyXG5sZXQgbmV3cztcclxuXHJcbmZ1bmN0aW9uIEdldFNvdXJzZXMoKSB7XHJcbiAgICBsZXQgdXJsID0gXCJodHRwczovL25ld3NhcGkub3JnL3YyL3NvdXJjZXM/XCIgK1xyXG4gICAgICAgIFwibGFuZ3VhZ2U9ZW4mXCIgK1xyXG4gICAgICAgIFwiY2F0ZWdvcnk9dGVjaG5vbG9neSZcIiArXHJcbiAgICAgICAgXCJhcGlLZXk9ODY5MWYzOTlkM2M2NDY1OGI5NDc3ZjNlOWU0NDhhNzhcIjtcclxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcclxuICAgIGZldGNoKHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4gKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgU2hvd1NvdXJjZXMoZGF0YS5zb3VyY2VzKTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaG93U291cmNlcyAobGlzdCkge1xyXG4gICAgbGV0IG91dHB1dEhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHNvdXJjZXMgPSBsaXN0O1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgaW4gc291cmNlcykge1xyXG4gICAgICAgIG91dHB1dEhUTUwgKz0gYDxsaT5cclxuICAgICAgICAgICAgICAgICR7c291cmNlc1tpXS5uYW1lfVxyXG4gICAgICAgICAgICA8L2xpPmA7XHJcbiAgICAgICAgU291cmNlc0xpc3QucHVzaChzb3VyY2VzW2ldLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRwdXRIVE1MID0gYDxsaT4gQWxsIDwvbGk+YCArIG91dHB1dEhUTUw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb3Vyc2VzJylbMF0uaW5uZXJIVE1MID0gb3V0cHV0SFRNTDtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc291cnNlcycpWzBdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb3Vyc2VzJylbMF0uY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpIGluIGJ1dHRvbnMpIHtcclxuICAgICAgICBidXR0b25zW2ldLm9uY2xpY2sgPSBPblNvdXJjZUNsaWNrO1xyXG4gICAgfVxyXG4gICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuc3R5bGUubWluSGllZ2h0ID0gNDMqKFNvdXJjZXNMaXN0Lmxlbmd0aCArIDEpICsgJ3B4JztcclxuICAgIC8vYWxlcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLyouc3R5bGUubWluSGllZ2h0Ki8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHZXROZXdzKGluZGV4KSB7XHJcbiAgICBsZXQgY2F0ZWdvcnkgPSAndGVjaG5vbG9neSc7XHJcbiAgICBsZXQgc291cmNlID0gJyc7XHJcbiAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgc291cmNlID0gU291cmNlc0xpc3RbaW5kZXggLSAxXTtcclxuICAgICAgICBjYXRlZ29yeSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBxdWVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzZWFyY2gnKVswXS52YWx1ZTtcclxuICAgIGlmIChxdWVyeSAhPT0gXCJcIikge1xyXG4gICAgICAgIHF1ZXJ5ID0gJ3E9JyArIHF1ZXJ5ICsgJyYnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXdzQ291bnQgPSA0MDtcclxuXHJcbiAgICBsZXQgdXJsID0gXCJodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/XCIgK1xyXG4gICAgICAgIHF1ZXJ5ICtcclxuICAgICAgICBcImxhbmd1YWdlPWVuJlwiICtcclxuICAgICAgICBcInNvdXJjZXM9XCIgKyBzb3VyY2UgKyBcIiZcIiArXHJcbiAgICAgICAgXCJjYXRlZ29yeT1cIiArIGNhdGVnb3J5ICsgXCImXCIgK1xyXG4gICAgICAgIFwic29ydEJ5PXJlbGV2YW5jeSZcIiArIC8vcG9wdWxhcml0eVxyXG4gICAgICAgIFwicGFnZVNpemU9XCIgKyBuZXdzQ291bnQgKyBcIiZcIiArXHJcbiAgICAgICAgXCJhcGlLZXk9ODY5MWYzOTlkM2M2NDY1OGI5NDc3ZjNlOWU0NDhhNzhcIjtcclxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcclxuICAgIGZldGNoKHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4gKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3cyA9IGRhdGEuYXJ0aWNsZXM7XHJcbiAgICAgICAgICAgICAgICBTaG93TmV3cygwKTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaG93TmV3cyAoc3RhcnROZXdzQ291bnQpIHtcclxuICAgIGxldCBvdXRwdXRIVE1MID0gXCJcIjtcclxuICAgIGxldCBsYXN0TmV3c051bSA9IE1hdGgubWluKHN0YXJ0TmV3c0NvdW50ICsgNSwgbmV3cy5sZW5ndGgpOyBcclxuICAgIGZvcihsZXQgaSA9IHN0YXJ0TmV3c0NvdW50OyBpIDwgbGFzdE5ld3NOdW07IGkrKykge1xyXG4gICAgICAgIG91dHB1dEhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV3cy1mb3RvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bmV3c1tpXS51cmx9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHsgIW5ld3NbaV0udXJsVG9JbWFnZSA/IG5vSW1hZ2UgOiBuZXdzW2ldLnVybFRvSW1hZ2UgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ld3MtZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke25ld3NbaV0udXJsfVwiPjxoNT4ke25ld3NbaV0udGl0bGV9PC9oNT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PiR7bmV3c1tpXS5wdWJsaXNoZWRBdH08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ICFuZXdzW2ldLmRlc2NyaXB0aW9uID8gXCJcIiA6IG5ld3NbaV0uZGVzY3JpcHRpb24gfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPmA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChzdGFydE5ld3NDb3VudCA9PSAwKSB7XHJcbiAgICAgICAgaWYob3V0cHV0SFRNTCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBvdXRwdXRIVE1MID0gYDx1bCBjbGFzcz1cIm5ld3MtbGlzdFwiPmAgKyBvdXRwdXRIVE1MICsgYDwvdWw+YDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3cycpWzBdLmNoaWxkcmVuWzFdLmlubmVySFRNTCA9IG91dHB1dEhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbm9OZXdzID0gYFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuby1uZXdzLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGVyZSBhcmUgbm8gYXJ0aWNsZXMgbWF0Y2hpbmcgeW91ciByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICA8L3A+YDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3cycpWzBdLmNoaWxkcmVuWzFdLmlubmVySFRNTCA9IG5vTmV3cztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV3c1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3cy10YWdzJylbMF0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgY29uc3QgY3VyclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvdXJzZXMnKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcclxuICAgICAgICBuZXdzVGl0bGUuaW5uZXJIVE1MID0gY3VyclNvdXJjZS5pbm5lckhUTUwgKyAnIG5ld3MnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3cy1saXN0JylbMF0uaW5uZXJIVE1MICs9IG91dHB1dEhUTUw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxhc3ROZXdzTnVtID49IG5ld3MubGVuZ3RoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3cycpWzBdLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzJylbMF0ubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldE1haW5OZXdzKCkge1xyXG4gICAgbGV0IHVybCA9ICdodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/JyArXHJcbiAgICAgICAgJ2xhbmd1YWdlPXJ1JmVuJicgK1xyXG4gICAgICAgICdjYXRlZ29yeT10ZWNobm9sb2d5JicgK1xyXG4gICAgICAgICdzb3J0Qnk9cG9wdWxhcml0eSYnICtcclxuICAgICAgICAncGFnZVNpemU9MyYnICtcclxuICAgICAgICAnYXBpS2V5PTg2OTFmMzk5ZDNjNjQ2NThiOTQ3N2YzZTllNDQ4YTc4JztcclxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcclxuICAgIGZldGNoKHJlcXVlc3QpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4gKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgU2hvd01haW5OZXdzKGRhdGEuYXJ0aWNsZXMpOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNob3dNYWluTmV3cyAoYXJ0aWNsZXMpIHtcclxuICAgIGxldCBvdXRwdXRIVE1MO1xyXG4gICAgbGV0IG5ld3MgPSBhcnRpY2xlcztcclxuICAgIFxyXG4gICAgb3V0cHV0SFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm90by1uZXdzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3RvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ICFuZXdzWzBdLnVybFRvSW1hZ2UgPyBub0ltYWdlIDogbmV3c1swXS51cmxUb0ltYWdlIH1cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke25ld3NbMF0udXJsfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvdG8tbmV3cy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPiR7bmV3c1swXS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj4ke25ld3NbMF0ucHVibGlzaGVkQXR9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4keyAhbmV3c1swXS5kZXNjcmlwdGlvbiA/IFwiXCIgOiBuZXdzWzBdLmRlc2NyaXB0aW9uIH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmV3cycpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlZnQtY29sdW1uJylbMF0uaW5uZXJIVE1MID0gb3V0cHV0SFRNTDtcclxuXHJcbiAgICBvdXRwdXRIVE1MID0gYGA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBvdXRwdXRIVE1MICs9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvdG8tbmV3c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ICFuZXdzW2ldLnVybFRvSW1hZ2UgPyBub0ltYWdlIDogbmV3c1tpXS51cmxUb0ltYWdlIH1cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bmV3c1tpXS51cmx9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvdG8tbmV3cy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke25ld3NbaV0udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PiR7bmV3c1tpXS5wdWJsaXNoZWRBdH08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4keyAhbmV3c1tpXS5kZXNjcmlwdGlvbiA/IFwiXCIgOiBuZXdzW2ldLmRlc2NyaXB0aW9uIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW5ld3MnKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyaWdodC1jb2x1bW4nKVswXS5pbm5lckhUTUwgPSBvdXRwdXRIVE1MO1xyXG59XHJcblxyXG5leHBvcnQgeyBHZXROZXdzLCBHZXRNYWluTmV3cywgR2V0U291cnNlcywgU2hvd05ld3MgfTsiXSwic291cmNlUm9vdCI6IiJ9