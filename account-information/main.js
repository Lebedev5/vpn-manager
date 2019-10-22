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
/******/ 	return __webpack_require__(__webpack_require__.s = "./account-information/account-information.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/burger/burger.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js!../components/burger/burger.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../components/burger/burger.scss?/root/main_folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main_folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/header/header.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js!../components/header/header.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../components/header/header.scss?/root/main_folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main_folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/logo-mobile/logo-mobile.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js!../components/logo-mobile/logo-mobile.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../components/logo-mobile/logo-mobile.scss?/root/main_folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main_folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/logo/logo.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js!../components/logo/logo.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../components/logo/logo.scss?/root/main_folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main_folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/main-menu/main-menu.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js!../components/main-menu/main-menu.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../components/main-menu/main-menu.scss?/root/main_folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main_folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/table-information/table-information.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js!../components/table-information/table-information.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../components/table-information/table-information.scss?/root/main_folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main_folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/user-button/user-button.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js!../components/user-button/user-button.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../components/user-button/user-button.scss?/root/main_folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main_folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!./account-information/account-information.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js!./account-information/account-information.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./account-information/account-information.scss?/root/main_folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main_folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!./root/root.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js!./root/root.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./root/root.scss?/root/main_folder/Projects/freelance/vpn-manager/node_modules/mini-css-extract-plugin/dist/loader.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/css-loader/dist/cjs.js!/root/main_folder/Projects/freelance/vpn-manager/node_modules/postcss-loader/src!/root/main_folder/Projects/freelance/vpn-manager/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***************************************************************************************************************************!*\
  !*** /root/main folder/Projects/freelance/vpn-manager/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:////root/main_folder/Projects/freelance/vpn-manager/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../components/burger/burger.scss":
/*!****************************************!*\
  !*** ../components/burger/burger.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./burger.scss */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/burger/burger.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///../components/burger/burger.scss?");

/***/ }),

/***/ "../components/burger/index.js":
/*!*************************************!*\
  !*** ../components/burger/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _burger_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.scss */ \"../components/burger/burger.scss\");\n/* harmony import */ var _burger_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar burgers = document.getElementsByClassName(\"burger\");\n\nfor (var i = 0; i < burgers.length; ++i) {\n  burgers[i].addEventListener(\"click\", function (e) {\n    document.getElementById(this.dataset.for).className = \"main-menu open-menu\";\n  });\n}\n\n//# sourceURL=webpack:///../components/burger/index.js?");

/***/ }),

/***/ "../components/header/header.scss":
/*!****************************************!*\
  !*** ../components/header/header.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/header/header.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///../components/header/header.scss?");

/***/ }),

/***/ "../components/header/index.js":
/*!*************************************!*\
  !*** ../components/header/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ \"../components/header/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///../components/header/index.js?");

/***/ }),

/***/ "../components/logo-mobile/index.js":
/*!******************************************!*\
  !*** ../components/logo-mobile/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo_mobile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-mobile.scss */ \"../components/logo-mobile/logo-mobile.scss\");\n/* harmony import */ var _logo_mobile_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logo_mobile_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///../components/logo-mobile/index.js?");

/***/ }),

/***/ "../components/logo-mobile/logo-mobile.scss":
/*!**************************************************!*\
  !*** ../components/logo-mobile/logo-mobile.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./logo-mobile.scss */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/logo-mobile/logo-mobile.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///../components/logo-mobile/logo-mobile.scss?");

/***/ }),

/***/ "../components/logo/index.js":
/*!***********************************!*\
  !*** ../components/logo/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.scss */ \"../components/logo/logo.scss\");\n/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///../components/logo/index.js?");

/***/ }),

/***/ "../components/logo/logo.scss":
/*!************************************!*\
  !*** ../components/logo/logo.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./logo.scss */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/logo/logo.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///../components/logo/logo.scss?");

/***/ }),

/***/ "../components/main-menu/index.js":
/*!****************************************!*\
  !*** ../components/main-menu/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-menu.scss */ \"../components/main-menu/main-menu.scss\");\n/* harmony import */ var _main_menu_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_menu_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar submenu = document.getElementsByClassName(\"submenu\"),\n    burgerClose = document.getElementById(\"close-burger\");\nburgerClose.addEventListener(\"click\", function (e) {\n  document.getElementById(this.dataset.for).className = \"main-menu close-menu\";\n});\n\nfor (var i = 0; i < submenu.length; ++i) {\n  submenu[i].addEventListener(\"click\", function (e) {\n    if (e.target.tagName == \"SPAN\" && this.children[0].checked) {\n      this.children[0].checked = false;\n      e.stopPropagation();\n      e.preventDefault();\n    }\n  });\n}\n\n//# sourceURL=webpack:///../components/main-menu/index.js?");

/***/ }),

/***/ "../components/main-menu/main-menu.scss":
/*!**********************************************!*\
  !*** ../components/main-menu/main-menu.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./main-menu.scss */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/main-menu/main-menu.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///../components/main-menu/main-menu.scss?");

/***/ }),

/***/ "../components/table-information/index.js":
/*!************************************************!*\
  !*** ../components/table-information/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table_information_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-information.scss */ \"../components/table-information/table-information.scss\");\n/* harmony import */ var _table_information_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_table_information_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///../components/table-information/index.js?");

/***/ }),

/***/ "../components/table-information/table-information.scss":
/*!**************************************************************!*\
  !*** ../components/table-information/table-information.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./table-information.scss */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/table-information/table-information.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///../components/table-information/table-information.scss?");

/***/ }),

/***/ "../components/user-button/index.js":
/*!******************************************!*\
  !*** ../components/user-button/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-button.scss */ \"../components/user-button/user-button.scss\");\n/* harmony import */ var _user_button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_user_button_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///../components/user-button/index.js?");

/***/ }),

/***/ "../components/user-button/user-button.scss":
/*!**************************************************!*\
  !*** ../components/user-button/user-button.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./user-button.scss */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!../components/user-button/user-button.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///../components/user-button/user-button.scss?");

/***/ }),

/***/ "./account-information/account-information.js":
/*!****************************************************!*\
  !*** ./account-information/account-information.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _account_information_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-information.scss */ \"./account-information/account-information.scss\");\n/* harmony import */ var _account_information_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_account_information_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../root */ \"./root/index.js\");\n/* harmony import */ var _components_table_information__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/table-information */ \"../components/table-information/index.js\");\n\n\n\n\n//# sourceURL=webpack:///./account-information/account-information.js?");

/***/ }),

/***/ "./account-information/account-information.scss":
/*!******************************************************!*\
  !*** ./account-information/account-information.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./account-information.scss */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!./account-information/account-information.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./account-information/account-information.scss?");

/***/ }),

/***/ "./root/index.js":
/*!***********************!*\
  !*** ./root/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.scss */ \"./root/root.scss\");\n/* harmony import */ var _root_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_root_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/logo */ \"../components/logo/index.js\");\n/* harmony import */ var _components_logo_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/logo-mobile */ \"../components/logo-mobile/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/header */ \"../components/header/index.js\");\n/* harmony import */ var _components_main_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/main-menu */ \"../components/main-menu/index.js\");\n/* harmony import */ var _components_user_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/user-button */ \"../components/user-button/index.js\");\n/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/burger */ \"../components/burger/index.js\");\n\n\n\n\n\n\n\nwindow.addEventListener(\"resize\", function () {\n  var menu = document.getElementById(\"nav-bar\");\n  menu.className = \"main-menu\";\n});\n\n//# sourceURL=webpack:///./root/index.js?");

/***/ }),

/***/ "./root/root.scss":
/*!************************!*\
  !*** ./root/root.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/dist/cjs.js!./root.scss */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/dist/cjs.js!./root/root.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./root/root.scss?");

/***/ })

/******/ });