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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/news_api.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluX21lZGlhLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL25ld3MuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluX21lZGlhLmNzcz9iNDBiIiwid2VicGFjazovLy8uL3NyYy9jc3MvbmV3cy5jc3M/NmQ4MCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcz8xM2QzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS9pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2Uvbm8taW1hZ2UuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3c19hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0Msb0NBQW9DLHVCQUF1Qiw4REFBTyx1QkFBdUI7QUFDekY7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVksUUFBUSxjQUFjO0FBQ2pFLDBCQUEwQixvQkFBb0I7QUFDOUMseUJBQXlCLGtEQUFrRDtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1Qiw4REFBTyx1QkFBdUI7QUFDakY7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBLDBCQUEwQixjQUFjO0FBQ3hDLDBCQUEwQixvQkFBb0I7QUFDOUMseUJBQXlCLGtEQUFrRDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUIsOERBQU8sdUJBQXVCO0FBQ3JGO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQSw4QkFBOEIsY0FBYztBQUM1Qyw4QkFBOEIsb0JBQW9CO0FBQ2xELDZCQUE2QixrREFBa0Q7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibmV3cy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9uZXdzX2FwaS5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogODYwcHgpIHtcXHJcXG5cXHQubmV3cy1saXN0IGxpIHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubmV3cy1saXN0IGxpID4gLm5ld3MtZm90byB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogODYwcHgpIHtcXHJcXG5cXHQud3JhcHBlci1uZXdzIHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5maWx0ZXItcGFuZWwge1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcblxcdFxcdHBhZGRpbmc6IDdweCAzMHB4IDEycHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zb3Vyc2UtZmlsdGVyOjpiZWZvcmUge1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xcclxcblxcdFxcdGNvbnRlbnQ6ICdcXFxcZjE0Mic7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogNDBweDtcXHJcXG5cXHRcXHR3aWR0aDogMi41cmVtO1xcclxcblxcdFxcdGhlaWdodDogMi41cmVtO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRcXHRmb250LXNpemU6IDEuNnJlbTtcXHJcXG5cXHRcXHRjb2xvcjogIzc3NjQ3NztcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2Y3O1xcclxcblxcdFxcdGJvcmRlcjogNHB4IHNvbGlkICM3NzY0Nzc7XFxyXFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc2VhcmNoIGlucHV0LFxcclxcblxcdC5zZWFyY2ggYnV0dG9uOjpiZWZvcmUge1xcclxcblxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc2VhcmNoLWJsb2NrIHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNlYXJjaCB7XFxyXFxuXFx0XFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRcXHRib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZjZmNmNztcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzc2NDc3O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcblxcdCAgXFx0Y29sb3I6ICNmY2ZjZjc7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zb3Vyc2UtZmlsdGVyOmhvdmVyID4gLnNvdXJzZXMge1xcclxcblxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zb3Vyc2VzIHtcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdCAgICByaWdodDogMzBweDtcXHJcXG5cXHQgICAgd2lkdGg6IDQwJTtcXHJcXG5cXHQgICAgLypib3JkZXItdG9wOiAzcHggc29saWQgI2ZjZmNmNzsvKiNhOGFlYzEjNzc2NDc3Ki9cXHJcXG5cXHQgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NjQ3NzsvKjNkMTc1NS81YTIyN2QvOTE3YzkxICovXFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcXHJcXG5cXHQubmV3cy1saXN0IGxpIHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubmV3cy1saXN0IGxpID4gLm5ld3MtZm90byB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjaGVhZGVyIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNoZWFkZXIgZGl2IHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5nbG9iYWwtbmF2aSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZ2xvYmFsLW5hdmk6OmJlZm9yZSB7XFxyXFxuXFx0XFx0Y29udGVudDogJ01lbnUnO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMS40cmVtO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5nbG9iYWwtbmF2aTpob3ZlciB7XFxyXFxuXFx0XFx0Y29sb3I6ICNiNGQxMWU7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgI2I0ZDExZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lmdsb2JhbC1uYXZpOmhvdmVyID4gLnRvcC1tZW51IHtcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdFxcdHotaW5kZXg6IDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC50b3AtbWVudSB7XFxyXFxuXFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgICAgdG9wOiAxMDAlO1xcclxcblxcdCAgICByaWdodDogMCU7XFxyXFxuXFx0ICAgIHdpZHRoOiA1MCU7XFxyXFxuXFx0ICAgIGhlaWdodDogYXV0bztcXHJcXG5cXHQgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHQgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NjQ3NztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnRvcC1tZW51IGxpOm50aC1jaGlsZCgybikge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM4Nzc0ODc7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC50b3AtbWVudSA+IGxpID4gYSB7XFxyXFxuXFx0XFx0Ym94LXNpemluZzogcGFkZGluZy1ib3g7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAxMyU7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IDEwcHg7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC50b3AtbWVudTpob3ZlciB7XFxyXFxuXFx0XFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2hlYWRlciAuc3Vic2NyaXB0aW9uLWJ0bnMge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5lbnRlci1idG4tbWVudSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHR0b3A6IGNhbGMoMTAwJSArICgyMHB4ICsgMS44NiAqIDEuMXJlbSkqNSAtIDNweCk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzg3NzQ4NztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnRvcC1tZW51OmhvdmVyICsgLmVudGVyLWJ0bi1tZW51IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdHRvcDogY2FsYygxMDAlICsgKDIwcHggKyAxLjg2ICogMS4xcmVtKSo1KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmVudGVyLWJ0bi1tZW51IC5zaWduLXVwIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODRiMDAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZW50ZXItYnRuLW1lbnUgLnNpZ24tdXA6aG92ZXIge1xcclxcblxcdFxcdGJvcmRlcjogMHB4O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNiNGQxMWU7XFxyXFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNmb290ZXIge1xcclxcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmZvb3QtbWVudSB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmZvb3Rlci1sb2dvIGltZyB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jb3B5cmlnaHQge1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zb2NpYWwtbmV0d29ya3Mge1xcclxcblxcdFxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogMzIwcHgpIHtcXHJcXG5cXHQjZm9vdGVyIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdH1cXHJcXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKi0tLS0tLS0tLS0tLS0tLS1IZWFkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4jaGVhZGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2QxNzU1O1xcclxcblxcdGNvbG9yOiAjZmNmY2Y3OyBcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciBkaXZ7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tSGVhZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tR2xvYmFsIE5hdmlnYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLnRvcC1tZW51IHtcXHJcXG5cXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b3AtbWVudSA+IGxpID4gYSB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHBhZGRpbmc6IDAgMS41dnc7XFxyXFxuXFx0Y29sb3I6ICNmY2ZjZjc7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi50b3AtbWVudSBsaSBhOmhvdmVyLFxcclxcbi50b3AtbWVudSBsaSBhOmFjdGl2ZSB7XFxyXFxuXFx0Y29sb3I6ICNiNGQxMWU7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNiNGQxMWU7XFxyXFxufVxcclxcblxcclxcbi5lbnRlci1idG4tbWVudSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tR2xvYmFsIE5hdmlnYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tU3Vic2NyaWJ0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLnN1YnNjcmlwdGlvbi1idG5zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Vic2NyaXB0aW9uLWJ0bnMgLmJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luOiBhdXRvIDEwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMHB4O1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICNiNGQxMWU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMTFlO1xcclxcblxcdGNvbG9yOiAjM2QxNzU1O1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS1TdWJzY3JpYnRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHxcXHJcXG58fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8Ki9cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLU1haW4gbmV3cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4ubWFpbi1uZXdzIHtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZDE3NTU7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAzMHB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyLW1haW4tbmV3cyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbHVtbiB7XFxyXFxuXFx0bWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1jb2x1bW4ge1xcclxcblxcdHdpZHRoOiBjYWxjKDY2LjY2NiUgLSAyMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvdG8tbmV3cyBpbWcge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvdG8tbmV3cyAuZm90byB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWNvbHVtbiAuZm90by1uZXdzIHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3RvLW5ld3Mge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1jb2x1bW4gLmZvdG8tbmV3cyB7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDUwJSAtIDEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtY29sdW1uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiBjYWxjKDMzLjMzMyUgLSAyMHB4KTtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5mb3RvLW5ld3MtdGV4dCB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0bWF4LWhlaWdodDogNDAlO1xcclxcblxcdG1pbi13aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiA0JTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTIsIDI0NywgMC43KTtcXHJcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4uZm90by1uZXdzLXRleHQgcCB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLmZvdG8tbmV3cy10ZXh0IHAsXFxyXFxuLmZvdG8tbmV3cy10ZXh0IGg2IHtcXHJcXG5cXHRjb2xvcjogIzU1M2U0NjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvdG8tbmV3cy10ZXh0OmhvdmVyIHtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyMDksIDMwLCAwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm90by1uZXdzLXRleHQ6aG92ZXIgcCB7XFxyXFxuXFx0Y29sb3I6ICMxZjBjMmI7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1jb2x1bW4gLmZvdG8tbmV3cy10ZXh0OmhvdmVyIHAge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm90by1uZXdzLXRleHQgaDMge1xcclxcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm90by1uZXdzLXRleHQgaDYge1xcclxcblxcdGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtY29sdW1uIC5mb3RvLW5ld3MtdGV4dCBoMyB7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1jb2x1bW4gLmZvdG8tbmV3cy10ZXh0IHAge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDY0MHB4KSB7XFxyXFxuXFx0LnJpZ2h0LWNvbHVtbiB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LndyYXBwZXItbWFpbi1uZXdzLFxcclxcblxcdC5sZWZ0LWNvbHVtbiB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jb2x1bW4ge1xcclxcblxcdFxcdG1hcmdpbjogMTBweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tTWFpbiBuZXdzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLU1haW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi53cmFwcGVyLW5ld3Mge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0bWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItcGFuZWwge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcblxcdGZsZXgtc2hyaW5rOiAxO1xcclxcblxcdGZsZXgtYmFzaXM6IDIwJTtcXHJcXG5cXHRtYXJnaW46IDMwcHggMzBweCAzMHB4IDA7XFxyXFxuXFx0cGFkZGluZzogMzBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM3NzY0Nzc7XFxyXFxuXFx0Y29sb3I6ICNmY2ZjZjc7XFxyXFxufVxcclxcblxcclxcbi5uZXdzIHtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGZsZXgtZ3JvdzogOTtcXHJcXG5cXHRmbGV4LXNocmluazogNztcXHJcXG5cXHRtYXJnaW46IDMwcHg7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vLW5ld3MtdGV4dCB7XFxyXFxuXFx0cGFkZGluZy10b3A6IDIwcHg7XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLU1haW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLVNlYXJjaC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5zZWFyY2gge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM3NzY0Nzc7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggaW5wdXQsIC5zZWFyY2ggYnV0dG9uIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIGlucHV0IHtcXHJcXG5cXHRwYWRkaW5nOiAxMnB4IDE3cHg7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIGJ1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIGJ1dHRvbjo6YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiRm9udEF3ZXNvbWVcXFwiO1xcclxcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcblxcdGNvbG9yOiAjNzc2NDc3O1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS1TZWFyY2gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLVNvdXJjZSBwYW5lbC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uc291cmNlLWZpbHRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJzZXMgbGkge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZDE3NTU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cnNlcyBsaS5hY3RpdmUge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM4NGIwMDA7XFxyXFxufVxcclxcblxcclxcbi5zb3Vyc2VzIGxpOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMTFlO1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLVNvdXJzZSBwYW5lbC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLU5ld3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4ubmV3cy10YWdzIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59IFxcclxcblxcclxcbi5uZXdzLXRhZ3MgaDMge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHBhZGRpbmc6IDE1cHggMzBweDtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2QxNzU1O1xcclxcblxcdGNvbG9yOiAjZmNmY2Y3O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uZXdzLXRhZ3MgLnRhZyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTsvKmJsb2NrKi9cXHJcXG5cXHRtYXJnaW46IDEwcHggMDtcXHJcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1saXN0IGxpIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uZXdzLWxpc3QgbGkgPiAubmV3cy1mb3RvIHtcXHJcXG5cXHRtaW4td2lkdGg6IDQwJTtcXHJcXG5cXHRtYXgtd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtbGlzdCBsaSA+IC5uZXdzLWRhdGEge1xcclxcblxcdG1hcmdpbjogMjBweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1saXN0IGxpID4gLm5ld3MtZm90byBhIGltZyB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7IFxcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtbGlzdCBsaSA+IC5uZXdzLWRhdGEgaDUge1xcclxcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcblxcdGNvbG9yOiAjM2QxNzU1O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtbGlzdCBsaSA+IC5uZXdzLWZvdG8gaW1nOmhvdmVyIHtcXHJcXG5cXHQvKmdyZWVuICsgcmVhZCBtb3JlLi4uKi9cXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtbGlzdCBsaSA+IC5uZXdzLWRhdGEgaDU6aG92ZXIge1xcclxcblxcdGNvbG9yOiAjYjRkMTFlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1saXN0IGxpID4gLm5ld3MtZGF0YSBoNiB7XFxyXFxuXFx0Y29sb3I6ICM1NTNlNDY7XFxyXFxufVxcclxcblxcclxcbi5uZXdzIGZvb3RlciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sb2FkLW1vcmUtYnV0dG9uIHtcXHJcXG5cXHRtYXJnaW46IDMwcHggYXV0bztcXHJcXG5cXHR3aWR0aDogNTAlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Y29sb3I6ICMzZDE3NTU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmNztcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjM2QxNzU1O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZC1tb3JlLWJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6ICNmY2ZjZjc7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2I0ZDExZTtcXHJcXG5cXHRib3JkZXItY29sb3I6ICNiNGQxMWU7XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tTmV3cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8qfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fFxcclxcbnx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHwqL1xcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tRm9vdGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbiNmb290ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZDE3NTU7XFxyXFxuXFx0Y29sb3I6ICNmY2ZjZjc7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIgYXtcXHJcXG5cXHRjb2xvcjogI2ZjZmNmNztcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciBhOmhvdmVye1xcclxcblxcdGNvbG9yOiAjYjRkMTFlO1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLUZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLUZvb3RlciBtZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uZm9vdC1tZW51ID4gbGkge1xcclxcblxcdHBhZGRpbmc6IDAgMjBweDtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmNmY2Y3O1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdC1tZW51ID4gbGk6bGFzdC1jaGlsZCB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAwcHg7XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tRm9vdGVyIG1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tQ29weXJpZ2h0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5jb3B5cmlnaHQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDAgMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvIGltZyB7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLUNvcHlyaWdodC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLVNvY2lhbCBuZXR3b3Jrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uc29jaWFsLW5ldHdvcmtzIGEge1xcclxcblxcdG1hcmdpbjogNXB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiRm9udEF3ZXNvbWVcXFwiO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLVNvY2lhbCBuZXR3b3Jrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogOTYwcHgpe1xcclxcblxcdGh0bWwge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgKDEwMHZ3IC0gMzIwcHgpLyg5NjAgLSAzMjApKigxNCAtIDEyKSk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGJhY2tncm91bmQ6ICNmY2ZjZjc7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuODY7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiAjNTUzZTQ2O1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuXFx0d2lkdGg6IDgwJTtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgIzNkMTc1NTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGNvbG9yOiAjYjRkMTFlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGZvbnQtc2l6ZTogN3JlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4zO1xcclxcblxcdGNvbG9yOiAjZmNmY2Y3O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHRjb2xvcjogIzNkMTc1NTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcblxcdGNvbG9yOiAjM2QxNzU1O1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS40O1xcclxcblxcdGNvbG9yOiAjM2QxNzU1O1xcclxcbn1cXHJcXG5cXHJcXG5oNiB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogOTYwcHgpe1xcclxcblxcdGgxIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IGNhbGMoMnJlbSArICgxMDB2dyAtIDIzcmVtKS8oNjkgLSAyMykqKDcgLSAyKSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGgyIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IGNhbGMoMS44cmVtICsgKDEwMHZ3IC0gMjNyZW0pLyg2OSAtIDIzKSooMyAtIDEuOCkpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBhZGRpbmctdG9wOiA1MHB4O1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA0MHB4O1xcclxcblxcdHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA0ODBweCkge1xcclxcblxcdHNlY3Rpb24ge1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyxcXHJcXG5pbnB1dDphY3RpdmUge1xcclxcblxcdG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlID0gXFxcImNoZWNrYm94XFxcIl0ge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0bWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiwgLmJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luOiBhdXRvIDEwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG5cXHRmb250LXNpemU6IDFlbTtcXHJcXG5cXHRvdXRsaW5lOiAwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1pbWcge1xcclxcblxcdG1hcmdpbjogYXV0byAwO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0aGVpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA0ODBweCkge1xcclxcblxcdC5sb2dvLWltZyB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAzNXB4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNhZTBlM2E7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiA0MHB4O1xcclxcblxcdG1hcmdpbjogMjBweDtcXHJcXG5cXHRhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcblxcdGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5maWVsZCB7XFxyXFxuXFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxN3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNDI1cHgpIHtcXHJcXG5cXHQuY2FyZCB7XFxyXFxuXFx0XFx0cGFkZGluZzogMjVweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5ob3Jpem9udGFsLW1lbnUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5maWVsZCB7XFxyXFxuXFx0cGFkZGluZzogMTJweCAxN3B4O1xcclxcblxcdGhlaWdodDogMTdweDtcXHJcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLCAjaGVhZGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdHBhZGRpbmc6IDdweCAzMHB4IDA7XFxyXFxuXFx0aGVpZ2h0OiA2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA0ODBweCkge1xcclxcblxcdCNoZWFkZXIge1xcclxcblxcdFxcdGhlaWdodDogNTBweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0cGFkZGluZzogMjBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd3JhcHBlciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXHJcXG59XCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5fbWVkaWEuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5fbWVkaWEuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluX21lZGlhLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25ld3MuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25ld3MuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQzMDBiZDIzYzI0MzEwMGQ2ZDQ5ZDdkZDZjZmU1NzNkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFkNDJjMDVmYTIxZjQ1NmY0Y2M2NzExY2ZlOGU0NTU2LmpwZ1wiOyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9uZXdzLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvbWFpbl9tZWRpYS5jc3MnO1xyXG5pbXBvcnQgeyBHZXROZXdzLCBHZXRNYWluTmV3cywgR2V0U291cnNlcywgU2hvd05ld3MgfSBmcm9tICcuL25ld3NfYXBpLmpzJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vc3JjL2ltYWdlL2ljb24ucG5nJztcclxuXHJcbmZ1bmN0aW9uIEdldEFjdGl2ZVNvdXJjZSgpIHtcclxuICAgIGNvbnN0IGN1cnJTb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb3Vyc2VzJylbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF07XHJcbiAgICBjb25zdCBsaXN0ID0gY3VyclNvdXJjZS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgbGV0IGluZGV4O1xyXG4gICAgZm9yIChsZXQga2V5IGluIGxpc3QpIHtcclxuICAgICAgICBpZiAobGlzdFtrZXldID09PSBjdXJyU291cmNlKVxyXG4gICAgICAgICAgICBpbmRleCA9IGtleTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbmRleDtcclxufVxyXG5cclxuZnVuY3Rpb24gU2hvd0FjdGl2ZVNvdXJjZShjaG9vc2VuU291cmNlKSB7XHJcbiAgICBjb25zdCBjdXJyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc291cnNlcycpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpWzBdO1xyXG4gICAgY3VyclNvdXJjZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGNob29zZW5Tb3VyY2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE9uU291cmNlQ2xpY2soZSkge1xyXG4gICAgU2hvd0FjdGl2ZVNvdXJjZShlLnRhcmdldCk7XHJcbiAgICBHZXROZXdzKEdldEFjdGl2ZVNvdXJjZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gT25TZWFyY2hDbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBHZXROZXdzKEdldEFjdGl2ZVNvdXJjZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gT25Mb2FkTW9yZSgpIHtcclxuICAgIFNob3dOZXdzKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25ld3MtbGlzdCcpWzBdLmNoaWxkcmVuLmxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0YXJ0KCkge1xyXG4gICAgR2V0TWFpbk5ld3MoKTtcclxuICAgIEdldFNvdXJzZXMoKTtcclxuICAgIEdldE5ld3MoMCk7XHJcbiAgICBjb25zdCBmb3JtU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoJylbMF07XHJcbiAgICBmb3JtU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIE9uU2VhcmNoQ2xpY2spO1xyXG4gICAgY29uc3QgYnRuTW9yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25ld3MnKVswXS5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgYnRuTW9yZS5vbmNsaWNrID0gT25Mb2FkTW9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgbUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIG1JY29uLnNyYyA9IEljb247XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBTdGFydCk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5cclxuZXhwb3J0IHsgT25Tb3VyY2VDbGljayB9OyIsImltcG9ydCB7T25Tb3VyY2VDbGlja30gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCBub0ltYWdlIGZyb20gJy4uL3NyYy9pbWFnZS9uby1pbWFnZS5qcGcnO1xyXG5cclxubGV0IFNvdXJjZXNMaXN0ID0gW107XHJcbmxldCBuZXdzO1xyXG5cclxuZnVuY3Rpb24gR2V0U291cnNlcygpIHtcclxuICAgIGxldCB1cmwgPSBcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvc291cmNlcz9cIiArXHJcbiAgICAgICAgXCJsYW5ndWFnZT1lbiZcIiArXHJcbiAgICAgICAgXCJjYXRlZ29yeT10ZWNobm9sb2d5JlwiICtcclxuICAgICAgICBcImFwaUtleT04NjkxZjM5OWQzYzY0NjU4Yjk0NzdmM2U5ZTQ0OGE3OFwiO1xyXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xyXG4gICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbiAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTaG93U291cmNlcyhkYXRhLnNvdXJjZXMpOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNob3dTb3VyY2VzIChsaXN0KSB7XHJcbiAgICBsZXQgb3V0cHV0SFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc291cmNlcyA9IGxpc3Q7XHJcbiAgICBcclxuICAgIGZvcihsZXQgaSBpbiBzb3VyY2VzKSB7XHJcbiAgICAgICAgb3V0cHV0SFRNTCArPSBgPGxpPlxyXG4gICAgICAgICAgICAgICAgJHtzb3VyY2VzW2ldLm5hbWV9XHJcbiAgICAgICAgICAgIDwvbGk+YDtcclxuICAgICAgICBTb3VyY2VzTGlzdC5wdXNoKHNvdXJjZXNbaV0uaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG91dHB1dEhUTUwgPSBgPGxpPiBBbGwgPC9saT5gICsgb3V0cHV0SFRNTDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvdXJzZXMnKVswXS5pbm5lckhUTUwgPSBvdXRwdXRIVE1MO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb3Vyc2VzJylbMF0uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvdXJzZXMnKVswXS5jaGlsZHJlbjtcclxuICAgIGZvciAobGV0IGkgaW4gYnV0dG9ucykge1xyXG4gICAgICAgIGJ1dHRvbnNbaV0ub25jbGljayA9IE9uU291cmNlQ2xpY2s7XHJcbiAgICB9XHJcbiAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5zdHlsZS5taW5IaWVnaHQgPSA0MyooU291cmNlc0xpc3QubGVuZ3RoICsgMSkgKyAncHgnO1xyXG4gICAgLy9hbGVydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikvKi5zdHlsZS5taW5IaWVnaHQqLyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldE5ld3MoaW5kZXgpIHtcclxuICAgIGxldCBjYXRlZ29yeSA9ICd0ZWNobm9sb2d5JztcclxuICAgIGxldCBzb3VyY2UgPSAnJztcclxuICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICBzb3VyY2UgPSBTb3VyY2VzTGlzdFtpbmRleCAtIDFdO1xyXG4gICAgICAgIGNhdGVnb3J5ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3NlYXJjaCcpWzBdLnZhbHVlO1xyXG4gICAgaWYgKHF1ZXJ5ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgcXVlcnkgPSAncT0nICsgcXVlcnkgKyAnJic7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld3NDb3VudCA9IDQwO1xyXG5cclxuICAgIGxldCB1cmwgPSBcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9cIiArXHJcbiAgICAgICAgcXVlcnkgK1xyXG4gICAgICAgIFwibGFuZ3VhZ2U9ZW4mXCIgK1xyXG4gICAgICAgIFwic291cmNlcz1cIiArIHNvdXJjZSArIFwiJlwiICtcclxuICAgICAgICBcImNhdGVnb3J5PVwiICsgY2F0ZWdvcnkgKyBcIiZcIiArXHJcbiAgICAgICAgXCJzb3J0Qnk9cmVsZXZhbmN5JlwiICsgLy9wb3B1bGFyaXR5XHJcbiAgICAgICAgXCJwYWdlU2l6ZT1cIiArIG5ld3NDb3VudCArIFwiJlwiICtcclxuICAgICAgICBcImFwaUtleT04NjkxZjM5OWQzYzY0NjU4Yjk0NzdmM2U5ZTQ0OGE3OFwiO1xyXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xyXG4gICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbiAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdzID0gZGF0YS5hcnRpY2xlcztcclxuICAgICAgICAgICAgICAgIFNob3dOZXdzKDApOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNob3dOZXdzIChzdGFydE5ld3NDb3VudCkge1xyXG4gICAgbGV0IG91dHB1dEhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IGxhc3ROZXdzTnVtID0gTWF0aC5taW4oc3RhcnROZXdzQ291bnQgKyA1LCBuZXdzLmxlbmd0aCk7IFxyXG4gICAgZm9yKGxldCBpID0gc3RhcnROZXdzQ291bnQ7IGkgPCBsYXN0TmV3c051bTsgaSsrKSB7XHJcbiAgICAgICAgb3V0cHV0SFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZXdzLWZvdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtuZXdzW2ldLnVybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIkeyAhbmV3c1tpXS51cmxUb0ltYWdlID8gbm9JbWFnZSA6IG5ld3NbaV0udXJsVG9JbWFnZSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV3cy1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bmV3c1tpXS51cmx9XCI+PGg1PiR7bmV3c1tpXS50aXRsZX08L2g1PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+JHtuZXdzW2ldLnB1Ymxpc2hlZEF0fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHsgIW5ld3NbaV0uZGVzY3JpcHRpb24gPyBcIlwiIDogbmV3c1tpXS5kZXNjcmlwdGlvbiB9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHN0YXJ0TmV3c0NvdW50ID09IDApIHtcclxuICAgICAgICBpZihvdXRwdXRIVE1MICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG91dHB1dEhUTUwgPSBgPHVsIGNsYXNzPVwibmV3cy1saXN0XCI+YCArIG91dHB1dEhUTUwgKyBgPC91bD5gO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzJylbMF0uY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gb3V0cHV0SFRNTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBub05ld3MgPSBgXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vLW5ld3MtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZXJlIGFyZSBubyBhcnRpY2xlcyBtYXRjaGluZyB5b3VyIHJlcXVlc3RcclxuICAgICAgICAgICAgICAgIDwvcD5gO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzJylbMF0uY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gbm9OZXdzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdzVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzLXRhZ3MnKVswXS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBjb25zdCBjdXJyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc291cnNlcycpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpWzBdO1xyXG4gICAgICAgIG5ld3NUaXRsZS5pbm5lckhUTUwgPSBjdXJyU291cmNlLmlubmVySFRNTCArICcgbmV3cyc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzLWxpc3QnKVswXS5pbm5lckhUTUwgKz0gb3V0cHV0SFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGFzdE5ld3NOdW0gPj0gbmV3cy5sZW5ndGgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzJylbMF0ubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25ld3MnKVswXS5sYXN0RWxlbWVudENoaWxkLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gR2V0TWFpbk5ld3MoKSB7XHJcbiAgICBsZXQgdXJsID0gJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz8nICtcclxuICAgICAgICAnbGFuZ3VhZ2U9cnUmZW4mJyArXHJcbiAgICAgICAgJ2NhdGVnb3J5PXRlY2hub2xvZ3kmJyArXHJcbiAgICAgICAgJ3NvcnRCeT1wb3B1bGFyaXR5JicgK1xyXG4gICAgICAgICdwYWdlU2l6ZT0zJicgK1xyXG4gICAgICAgICdhcGlLZXk9ODY5MWYzOTlkM2M2NDY1OGI5NDc3ZjNlOWU0NDhhNzgnO1xyXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xyXG4gICAgZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbiAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTaG93TWFpbk5ld3MoZGF0YS5hcnRpY2xlcyk7IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2hvd01haW5OZXdzIChhcnRpY2xlcykge1xyXG4gICAgbGV0IG91dHB1dEhUTUw7XHJcbiAgICBsZXQgbmV3cyA9IGFydGljbGVzO1xyXG4gICAgXHJcbiAgICBvdXRwdXRIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3RvLW5ld3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvdG9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHsgIW5ld3NbMF0udXJsVG9JbWFnZSA/IG5vSW1hZ2UgOiBuZXdzWzBdLnVybFRvSW1hZ2UgfVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7bmV3c1swXS51cmx9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm90by1uZXdzLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+JHtuZXdzWzBdLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PiR7bmV3c1swXS5wdWJsaXNoZWRBdH08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ICFuZXdzWzBdLmRlc2NyaXB0aW9uID8gXCJcIiA6IG5ld3NbMF0uZGVzY3JpcHRpb24gfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uZXdzJylbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVmdC1jb2x1bW4nKVswXS5pbm5lckhUTUwgPSBvdXRwdXRIVE1MO1xyXG5cclxuICAgIG91dHB1dEhUTUwgPSBgYDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIG91dHB1dEhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm90by1uZXdzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm90b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHsgIW5ld3NbaV0udXJsVG9JbWFnZSA/IG5vSW1hZ2UgOiBuZXdzW2ldLnVybFRvSW1hZ2UgfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtuZXdzW2ldLnVybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm90by1uZXdzLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7bmV3c1tpXS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+JHtuZXdzW2ldLnB1Ymxpc2hlZEF0fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7ICFuZXdzW2ldLmRlc2NyaXB0aW9uID8gXCJcIiA6IG5ld3NbaV0uZGVzY3JpcHRpb24gfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmV3cycpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JpZ2h0LWNvbHVtbicpWzBdLmlubmVySFRNTCA9IG91dHB1dEhUTUw7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEdldE5ld3MsIEdldE1haW5OZXdzLCBHZXRTb3Vyc2VzLCBTaG93TmV3cyB9OyJdLCJzb3VyY2VSb290IjoiIn0=