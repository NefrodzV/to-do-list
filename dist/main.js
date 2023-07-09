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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --primary-color: #020617;\n    --secondary-color: #f8fafc;\n    --accent-color: #64748b;\n\n    --primary-text-color: var(--primary--color);\n    --secondary-text-color: var(--secondary-color);\n\n    --hover-color: hsl(231, 36%, 23%);\n    --item-background-color:#334155;\n    --sidebar-color:#94a3b8;\n\n    --font-family: 'Lucida Console', 'monospace';\n}\n\nbody {\n    position: relative;\n    margin: 0;\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: min(47vw, 300px) auto;\n    grid-template-rows: 5rem auto 2rem;\n    font-family: var(--font-family);\n    font-size: 1em;\n\n}\n\nh3 {\n    font-size: 15px;\n}\n/* Header */\nheader, footer {\n    background-color: var(--primary-color);\n    color: var(--secondary-text-color);\n    grid-column: 1 / 3;\n    display: flex;\n}\n\nheader {\n   padding-left: 1rem;\n   align-items: center;\n   gap: 1rem;\n}\n.logo-container {\n    height: 3rem;\n}\n\n.logo-container > img {\n    height: 100%;\n}\n\n\n/* Sidebar */\n.sidebar {\n\n    padding: 1rem;\n    background-color: var(--sidebar-color);\n}\n\n.sidebar > h2 {\n    text-align: center;\n    padding-block: 1rem;\n    border-bottom: 1px solid var(--primary-color);\n}\n\n.sidebar-item {\n    margin-block: .5rem;\n    color: var(--primary-text-color);\n    background-color: var(--accent-color);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    \n    padding: 4px;\n    border: .25rem solid var(--accent-color);\n    border-radius: 5px ;\n}\n.item-title {\n    text-transform: capitalize;\n    margin-inline-start: 4px;\n}\n.sidebar-item:hover {\n    border: .25rem solid var(--primary-color)\n}\n\n.sidebar-item-container {\n    height: max(1.5vw, 20px) ;\n}\n\n.sidebar-item-container > img {\n    height: 100%;\n}\n\n.item-counter {\n    margin-left: auto;\n}\n\n/* Main */\nmain {\n    background-color: var(--secondary-color);\n}\n/* Footer */\nfooter {\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\nfooter > a {\n    color: var(--secondary-color);\n}\n.icon-container {\n    height: 25px;\n    overflow: hidden;\n}\n.icon-container > img {\n    height: 100%;\n    \n}\n\n.layer {\n    display: none;\n}\n\n.layer[visible]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .7);\n}\n\n.layer-container {\n    /* border:2px solid var(--secondary-color); */\n    padding: 1rem;\n    background-color: var(--primary-color);\n    height: 500px;\n    \n    \n}\n\n.layer-container > button {\n    cursor: pointer;\n    color: var(--secondary-text-color);\n    background-color: var(--accent-color);\n    margin: 1% 1% 0 auto;\n    display: block;\n}\n\n::placeholder {\n    color: var(--accent-color);\n}\n\n.project-form {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n    justify-content: center;\n}\n\n\n\n.project-form > h1 {\n    grid-column: 1 / 4;\n    color: var(--secondary-text-color);\n}\n\n.project-form > button {\n    grid-column:  1 / 4;\n    height: min-content;\n}\n.project-form > fieldset {\n    display: flex;\n    flex-direction: column;\n}\n.project-form > fieldset > legend, .project-form > fieldset > label {\n    color: var(--secondary-text-color);\n}\n\n.todos-form-list {\n    height: 100%;\n    padding-inline: 0;\n    background-color: var(--secondary-color);\n    color: var(--primary-text-color);\n}\n\n.add-todo-button {\n    color: var(--secondary-color);\n    background-color: var(--accent-color);\n}\n\n.empty-list-msg {\n    text-align: center;\n    color: var(--primary-text-color);\n    display: block;\n}\n\ntextarea {\n    resize: none;\n}\n\ninput, textarea {\n    border: 3px;\n    margin-block: 3px;\n    font-family: inherit;\n    font-size: inherit;\n    background-color: var(--secondary-color);\n    color: var(--primary-text-color);\n    outline-color: var(--accent-color);\n}\n\n::-webkit-calendar-picker-indicator:hover {\n    cursor: pointer;\n}\n\n.project-form > input:focus {\n    border-color: var(--accent-color);\n}\n\n.project-form > input:invalid {\n    border-color: red;\n}\n\n.project-form > h2 {\n    color: var(--secondary-text-color);\n    display: flex;\n    justify-content: space-between;\n}\n\n.project-form > h2 > button {\n    background-color: var(--accent-color);\n    color: var(--secondary-color);\n}\n\n\n\n.project-form > button {\n    color: var(--secondary-color);\n    background-color: var(--accent-color);\n    margin: 0 auto;\n    width: fit-content;\n}\n\n/* HELPER CLASSES */\n\n\n\n.corner {\n    border-radius: 5px;\n}\n\n/* RESET */\n\nh1, h2, h3 {\n    margin: 0;\n    margin-block: 0;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nlet events = {\n    \n    _events: [],\n\n    on: function(eventName, fn) {\n        this._events[eventName] = this._events[eventName] || [];\n        this._events[eventName].push(fn)\n        console.log(this._events);\n    },\n\n    off: function(eventName, fn) {\n        if(this._events[eventName]) {\n            for(let i = 0;i < this._events[eventName].lenght; i ++) {\n                if(this._events[eventName][i] === fn) {\n                    this._events[eventName].splice(i, 1);\n                }\n            }\n        }\n    },\n\n    emit: function(eventName, data) {\n        if(this._events[eventName]) {\n            this._events[eventName].forEach(function(fn){\n                fn(data);\n            });\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n//# sourceURL=webpack://to-do-list/./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_footerFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/footerFactory */ \"./src/ui/footerFactory.js\");\n/* harmony import */ var _ui_headerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/headerFactory */ \"./src/ui/headerFactory.js\");\n/* harmony import */ var _ui_layer_layerFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/layer/layerFactory */ \"./src/ui/layer/layerFactory.js\");\n/* harmony import */ var _ui_mainFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/mainFactory */ \"./src/ui/mainFactory.js\");\n/* harmony import */ var _ui_sidebar_sidebarFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/sidebar/sidebarFactory */ \"./src/ui/sidebar/sidebarFactory.js\");\n\n\n\n\n\n\n\n\nconst header = (0,_ui_headerFactory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nconst sideBar = (0,_ui_sidebar_sidebarFactory__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nconst main = (0,_ui_mainFactory__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nconst footer = (0,_ui_footerFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst layer = (0,_ui_layer_layerFactory__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\ndocument.body.appendChild(header);\ndocument.body.appendChild(sideBar);\ndocument.body.appendChild(main);\ndocument.body.appendChild(footer);\ndocument.body.appendChild(layer);\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/ui/footerFactory.js":
/*!*********************************!*\
  !*** ./src/ui/footerFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footerFactory)\n/* harmony export */ });\n/* harmony import */ var _asset_icon_discord_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/icon-discord.png */ \"./src/asset/icon-discord.png\");\n\n\nfunction footerFactory() {\n    const footerElement = document.createElement('footer');\n\n    const footerText = document.createElement('p');\n    footerText.textContent = \"Created by Nefrodzv\";\n\n    const footerAnchor = document.createElement('a');\n    footerAnchor.href = 'https://github.com/NefrodzV/to-do-list';\n\n    const iconContainer = document.createElement('div');\n    iconContainer.classList.add('icon-container');\n\n    const icon = new Image();\n    icon.src = _asset_icon_discord_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    iconContainer.appendChild(icon)\n    footerAnchor.appendChild(iconContainer);\n    \n\n    footerElement.append(footerText, footerAnchor);\n\n    return footerElement;\n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/footerFactory.js?");

/***/ }),

/***/ "./src/ui/headerFactory.js":
/*!*********************************!*\
  !*** ./src/ui/headerFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ headerFactory)\n/* harmony export */ });\n/* harmony import */ var _asset_icon_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/icon-logo.png */ \"./src/asset/icon-logo.png\");\n\nfunction headerFactory() {\n\n    const headerElement = document.createElement('header');\n\n    const logoImg = new Image();\n    logoImg.src = _asset_icon_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    const logoContainer = document.createElement('div');\n    logoContainer.classList.add('logo-container'); \n    logoContainer.appendChild(logoImg);\n\n    const title = document.createElement('h1');\n    title.textContent = \"Todo List\";\n    title.classList.add('uppercase');\n\n    headerElement.appendChild(logoContainer);\n    headerElement.appendChild(title);\n\n    return headerElement;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/headerFactory.js?");

/***/ }),

/***/ "./src/ui/layer/addProjectFormFactory.js":
/*!***********************************************!*\
  !*** ./src/ui/layer/addProjectFormFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProjectFormFactory)\n/* harmony export */ });\n\n\nfunction addProjectFormFactory() {\n\n    const form = document.createElement('form');\n    form.classList.add('project-form');\n\n    const formTitle = document.createElement('h1');\n    formTitle.textContent = \"REGISTER PROJECT\";\n\n    // Project details form part\n    const projectFieldset = document.createElement('fieldset');\n    const projectLegend = document.createElement('legend');\n    projectLegend.textContent = 'Project details';\n\n    const projectTitleLabel = document.createElement('label');\n    projectTitleLabel.textContent = 'Project title:';\n\n    const projectTitleInput = document.createElement('input');\n    projectTitleInput.type = 'text';\n    projectTitleInput.placeholder = 'Title';\n    projectTitleInput.name = 'projectTitle';\n\n    const projectDescriptionLabel = document.createElement('label');\n    projectDescriptionLabel.textContent = 'Project description:';\n\n    const projectDescriptionTextarea = document.createElement('textarea');\n    projectDescriptionTextarea.rows = 3;\n    projectDescriptionTextarea.placeholder = \"What is the project about?\";\n\n    projectFieldset.append(projectLegend, projectTitleLabel,projectTitleInput, projectDescriptionLabel, projectDescriptionTextarea)\n    \n    // Todo items form part\n    const todoFieldset = document.createElement('fieldset');\n\n    const addTodoButton = document.createElement('button')\n    addTodoButton.classList.add('add-todo-button');\n    addTodoButton.textContent = '+ ADD TODO';\n    addTodoButton.type = 'button';\n\n    const todoLegend = document.createElement('legend');\n    todoLegend.textContent = 'Register todos'\n\n    const todoTitleLabel = document.createElement('label');\n    todoTitleLabel.textContent = 'Title:';\n\n    const todoTitleInput = document.createElement('input');\n    todoTitleInput.type = 'text';\n    todoTitleInput.placeholder = 'Title';\n    todoTitleInput.name = 'todoTitle';\n\n    const todoDateLabel = document.createElement('label');\n    todoDateLabel.textContent = 'Date:';\n\n    const todoDateInput = document.createElement('input');\n    todoDateInput.type = 'date';\n    todoDateInput.name = 'todoDate';\n    \n    const todoDescriptionLabel = document.createElement('label');\n    todoDescriptionLabel.textContent = 'Description:';\n\n    const todoDescriptionTextarea = document.createElement('textarea');\n    todoDescriptionTextarea.rows = 3;\n    \n    todoDescriptionTextarea.placeholder = 'Write a description of what you are doing';\n    todoFieldset.append(todoLegend, todoTitleLabel, todoTitleInput, todoDateLabel, todoDateInput, todoDescriptionLabel, todoDescriptionTextarea, addTodoButton)\n\n    const todoListFieldset = document.createElement('fieldset');\n    const todoListLegend = document.createElement('legend');\n    todoListLegend.textContent = 'Todo List'\n    \n\n    const todosList = document.createElement('ul');\n    todosList.classList.add('todos-form-list');\n   \n    const emptyListSpan = document.createElement('span')\n    emptyListSpan.textContent = 'There are no todos!';\n\n    emptyListSpan.classList.add('empty-list-msg');\n\n    todosList.appendChild(emptyListSpan);\n\n    todoListFieldset.appendChild(todoListLegend);\n    todoListFieldset.appendChild(todosList);\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Submit';  \n\n   \n    form.append(formTitle, projectFieldset, todoFieldset, todoListFieldset, submitButton);\n\n    return form;\n\n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/layer/addProjectFormFactory.js?");

/***/ }),

/***/ "./src/ui/layer/layerFactory.js":
/*!**************************************!*\
  !*** ./src/ui/layer/layerFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ layerFactory)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ \"./src/events.js\");\n/* harmony import */ var _addProjectFormFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectFormFactory */ \"./src/ui/layer/addProjectFormFactory.js\");\n\n\n\n\nfunction layerFactory() {\n\n    const LAYER_STYLE = 'layer';\n    const CONTAINER_STYLE = 'layer-container';\n\n    const layerElement = document.createElement('div');\n    layerElement.classList.add(LAYER_STYLE);\n\n    const toggleVisibility = () => {layerElement.toggleAttribute('visible');}\n\n    const closeButton = document.createElement('button');\n    closeButton.textContent = \"X\";\n    closeButton.addEventListener('click',toggleVisibility);\n    \n    const container = document.createElement('div');\n    container.classList.add(CONTAINER_STYLE);\n    container.classList.add('corner');\n\n    let form = (0,_addProjectFormFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    container.appendChild(closeButton);\n    container.appendChild(form);\n    layerElement.appendChild(container);\n\n    _events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('updateLayerVisibility', toggleVisibility);\n\n    return layerElement; \n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/layer/layerFactory.js?");

/***/ }),

/***/ "./src/ui/mainFactory.js":
/*!*******************************!*\
  !*** ./src/ui/mainFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mainFactory)\n/* harmony export */ });\n/* harmony import */ var _layer_layerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer/layerFactory */ \"./src/ui/layer/layerFactory.js\");\n\n\nfunction mainFactory() {\n\n    const mainElement = document.createElement('main');\n    \n    return mainElement;\n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/mainFactory.js?");

/***/ }),

/***/ "./src/ui/sidebar/sideBarItemFlow.js":
/*!*******************************************!*\
  !*** ./src/ui/sidebar/sideBarItemFlow.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sidebarItemFlow)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ \"./src/events.js\");\n\n\n\nfunction sidebarItemFlow(id) {\n\n    switch (id) {\n        case 'inbox':\n            \n            break;\n        case 'upcoming':\n\n            break;\n        case 'today':\n\n            break;\n        case 'create':\n            _events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('updateLayerVisibility');\n            break;\n    \n        default:\n            console.log('UH OH sidebar clicks error');\n            break;\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/sidebar/sideBarItemFlow.js?");

/***/ }),

/***/ "./src/ui/sidebar/sidebarFactory.js":
/*!******************************************!*\
  !*** ./src/ui/sidebar/sidebarFactory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sidebarFactory)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style.css */ \"./src/style.css\");\n/* harmony import */ var _asset_icon_inbox_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../asset/icon-inbox.png */ \"./src/asset/icon-inbox.png\");\n/* harmony import */ var _sidebarItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarItems */ \"./src/ui/sidebar/sidebarItems.js\");\n\n\n\nfunction sidebarFactory() {\n    \n    const sideBarElement = document.createElement('div');\n    sideBarElement.classList.add('sidebar');\n\n    const title = document.createElement('h2');\n    title.textContent = \"Menu\";\n    title.classList.add('uppercase');\n    sideBarElement.appendChild(title);\n    \n    const items = _sidebarItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    \n    for(let i = 0; i < items.length; i++) {\n        let item = items[i];\n        sideBarElement.appendChild(item);\n    }\n    \n    return sideBarElement;\n    \n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/sidebar/sidebarFactory.js?");

/***/ }),

/***/ "./src/ui/sidebar/sidebarItems.js":
/*!****************************************!*\
  !*** ./src/ui/sidebar/sidebarItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asset_icon_inbox_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../asset/icon-inbox.png */ \"./src/asset/icon-inbox.png\");\n/* harmony import */ var _asset_icon_upcoming_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../asset/icon-upcoming.png */ \"./src/asset/icon-upcoming.png\");\n/* harmony import */ var _asset_icon_today_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../asset/icon-today.png */ \"./src/asset/icon-today.png\");\n/* harmony import */ var _asset_icon_add_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../asset/icon-add.png */ \"./src/asset/icon-add.png\");\n/* harmony import */ var _sideBarItemFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideBarItemFlow */ \"./src/ui/sidebar/sideBarItemFlow.js\");\n\n\n\n\n\n\nfunction sidebarItemFactory(icon, title) {\n    const STYLE = 'sidebar-item';\n    const ICON_CONTAINER_STYLE = 'sidebar-item-container';\n\n    const sidebarItemElement = document.createElement('div');\n    sidebarItemElement.classList.add(STYLE);\n    sidebarItemElement.setAttribute('id', title);\n\n    sidebarItemElement.addEventListener('click', function(e) {\n            (0,_sideBarItemFlow__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(title);\n    });\n\n    const itemIcon = new Image();\n    itemIcon.src = icon;\n    \n    const iconContainer = document.createElement('div');\n    iconContainer.appendChild(itemIcon);\n    iconContainer.classList.add(ICON_CONTAINER_STYLE);\n\n    const titleElement = document.createElement('h3');\n    titleElement.textContent = title;\n    titleElement.classList.add('item-title');\n\n    \n\n    sidebarItemElement.append(iconContainer, titleElement);\n\n    return sidebarItemElement;\n}\n\nconst sidebarItems = [];\n\nconst inboxItem = sidebarItemFactory(_asset_icon_inbox_png__WEBPACK_IMPORTED_MODULE_0__, 'inbox');\nsidebarItems.push(inboxItem);\n\nconst upcomingItem = sidebarItemFactory(_asset_icon_upcoming_png__WEBPACK_IMPORTED_MODULE_1__, 'upcoming');\nsidebarItems.push(upcomingItem);\n\nconst todayItem = sidebarItemFactory(_asset_icon_today_png__WEBPACK_IMPORTED_MODULE_2__, 'today');\nsidebarItems.push(todayItem);\n\nconst addItem = sidebarItemFactory(_asset_icon_add_png__WEBPACK_IMPORTED_MODULE_3__, 'create');\nsidebarItems.push(addItem);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarItems);\n\n//# sourceURL=webpack://to-do-list/./src/ui/sidebar/sidebarItems.js?");

/***/ }),

/***/ "./src/asset/icon-add.png":
/*!********************************!*\
  !*** ./src/asset/icon-add.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5fff2750e4369144388b.png\";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-add.png?");

/***/ }),

/***/ "./src/asset/icon-discord.png":
/*!************************************!*\
  !*** ./src/asset/icon-discord.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d66702162f005cdbd06.png\";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-discord.png?");

/***/ }),

/***/ "./src/asset/icon-inbox.png":
/*!**********************************!*\
  !*** ./src/asset/icon-inbox.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f148003550a19537bac.png\";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-inbox.png?");

/***/ }),

/***/ "./src/asset/icon-logo.png":
/*!*********************************!*\
  !*** ./src/asset/icon-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7c37d50f8d56a263c45.png\";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-logo.png?");

/***/ }),

/***/ "./src/asset/icon-today.png":
/*!**********************************!*\
  !*** ./src/asset/icon-today.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"22566a366ec86ca3652b.png\";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-today.png?");

/***/ }),

/***/ "./src/asset/icon-upcoming.png":
/*!*************************************!*\
  !*** ./src/asset/icon-upcoming.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d17e4f521bff5e27e66b.png\";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-upcoming.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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