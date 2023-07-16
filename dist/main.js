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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --primary-color: #020617;\n    --secondary-color: #f8fafc;\n    --accent-color: #64748b;\n\n    --primary-text-color: var(--primary--color);\n    --secondary-text-color: var(--secondary-color);\n\n    --hover-color: hsl(231, 36%, 23%);\n    --item-background-color:#334155;\n    --sidebar-color:#94a3b8;\n\n    --font-family: 'Lucida Console', 'monospace';\n}\n\nbody {\n    position: relative;\n    margin: 0;\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: min(47vw, 300px) auto;\n    grid-template-rows: 5rem auto 2rem;\n    font-family: var(--font-family);\n    font-size: 1em;\n\n}\n\nbutton {\n    cursor: pointer;\n}\n\nh3 {\n    font-size: 15px;\n}\n/* Header */\nheader, footer {\n    background-color: var(--primary-color);\n    color: var(--secondary-text-color);\n    grid-column: 1 / 3;\n    display: flex;\n}\n\nheader {\n   padding-left: 1rem;\n   align-items: center;\n   gap: 1rem;\n}\n.logo-container {\n    height: 3rem;\n}\n\n.logo-container > img {\n    height: 100%;\n}\n\n\n/* Sidebar */\n.sidebar {\n\n    padding: 1rem;\n    background-color: var(--sidebar-color);\n}\n\n.sidebar > h2 {\n    text-align: center;\n    padding-block: 1rem;\n    border-bottom: 1px solid var(--primary-color);\n}\n\n.sidebar-item {\n    margin-block: .5rem;\n    color: var(--primary-text-color);\n    background-color: var(--accent-color);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    \n    padding: 4px;\n    border: .25rem solid var(--accent-color);\n    border-radius: 5px ;\n}\n.item-title {\n    text-transform: capitalize;\n    margin-inline-start: 4px;\n}\n.sidebar-item:hover {\n    border: .25rem solid var(--primary-color)\n}\n\n.sidebar-item-container {\n    height: max(1.5vw, 20px) ;\n}\n\n.sidebar-item-container > img {\n    height: 100%;\n}\n\n.item-counter {\n    margin-left: auto;\n}\n\n/* Main */\nmain {\n    background-color: var(--secondary-color);\n}\n/* Footer */\nfooter {\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\nfooter > a {\n    color: var(--secondary-color);\n}\n.icon-container {\n    height: 25px;\n    overflow: hidden;\n}\n.icon-container > img {\n    height: 100%;\n    \n}\n\n.layer {\n    display: none;\n}\n\n.layer[visible]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .7);\n}\n\n.layer-container {\n    /* border:2px solid var(--secondary-color); */\n    padding: 1rem;\n    background-color: var(--secondary-color);\n    box-shadow: 0px 3px 4px var(--primary-color);\n}\n\n.layer-container > button {\n    padding: 8px;\n    cursor: pointer;\n    color: var(--secondary-text-color);\n    background-color: var(--accent-color);\n    margin: 1% 1% 1% auto;\n    display: block;\n}\n\n::placeholder {\n    color: var(--accent-color);\n}\n\n.project-form {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n    grid-template-rows: min-content auto auto;\n    gap: 1rem;\n    \n}\n\n.project-form > h1 {\n    grid-column: 1 / 4;\n    color: var(--primary--color);\n    \n}\n\n.project-form > button {\n    grid-column:  1 / 4;\n    height: min-content;\n    padding: 8px;\n    text-transform: uppercase;\n}\n.project-form > fieldset {\n    height: 500px;\n    width: 450px;\n    display: flex;\n    flex-direction: column;\n    border-color: var(--accent-color);\n    box-shadow: 0px 3px 3px var(--primary-color) inset;\n}\n\n.project-form > fieldset > legend {\n    padding: 8px;\n    margin: 0 auto;\n    text-transform: uppercase;\n    background-color: var(--secondary-color);\n    border: 2px solid var(--primary-color);\n}\n\n.project-form > fieldset > legend, .project-form > fieldset > label {\n    color: var(--primary-text-color);\n}\n.project-form > button {\n    color: var(--secondary-color);\n    background-color: var(--accent-color);\n    margin: 0 auto;\n    width: fit-content;\n}\n.todos-form-list {\n    height: 100%;\n    padding-inline: 0;\n    background-color: var(--secondary-color);\n    color: var(--primary-text-color);\n}\n\n.add-todo-button {\n    padding: 4px;\n    color: var(--secondary-color);\n    background-color: var(--accent-color);\n}\n\n.empty-list-msg {\n    text-align: center;\n    color: red;\n    display: block;\n}\n\ntextarea {\n    height: 100%;\n    resize: none;\n}\ninput {\n    min-height: 1.5rem;\n}\ninput, textarea {\n    border: 3px solid var(--accent-color);\n    margin-block: 3px;\n    font-family: inherit;\n    font-size: inherit;\n    background-color: var(--secondary-color);\n    color: var(--primary-text-color);\n    outline-color: var(--primary--color);\n}\ninput:invalid {\n    border-color: red;\n}\n\n\ninput:focus, textarea:focus {\n    border-color: var(--primary--color);\n}\n\n::-webkit-calendar-picker-indicator:hover {\n    cursor: pointer;\n}\n\n.todo {\n    \n    display:flex;\n    justify-content: space-between;\n    background-color: var(--accent-color);\n    color: var(--secondary-color);\n    align-items: center;\n    padding:8px;\n    margin-bottom: 4px;\n    box-shadow: 0px 1px 1px var(--primary-color);\n}\n.todo > p {\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 15ch;\n    white-space: nowrap;\n}\n\n.todo > button {\n    background-color: var(--primary-color);\n    color: var(--secondary-text-color);\n    /* border-radius: 50%; */\n    height: min-content;\n    width: min-content;\n    border-color: var(--primary-color);\n    \n\n}\n\n/* RESET */\n\nh1, h2, h3 {\n    margin: 0;\n    margin-block: 0;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/data/model/createProject.js":
/*!*****************************************!*\
  !*** ./src/data/model/createProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(title, description, todos) {\n    let id;\n    return {\n        id,\n        title,\n        description,\n        todos\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/data/model/createProject.js?");

/***/ }),

/***/ "./src/data/model/createTodo.js":
/*!**************************************!*\
  !*** ./src/data/model/createTodo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(title, description, date, completeState = false) {\n    \n    return {\n        title,\n        description,\n        date,\n        completeState\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/data/model/createTodo.js?");

/***/ }),

/***/ "./src/data/repository/projectRepository.js":
/*!**************************************************!*\
  !*** ./src/data/repository/projectRepository.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_factoryLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/factoryLocalStorage */ \"./src/data/storage/factoryLocalStorage.js\");\n\nconst projectRepository = (() => {\n    \n    const localStorage = (0,_storage_factoryLocalStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let data = [];\n    \n    const update = () => {\n        data = localStorage.getAll();\n    }\n\n    const addProject = (project) => {\n        localStorage.add(project);\n        update();\n    }\n\n    const getAllProjects = () => {\n        return data;\n    }\n    \n    update();\n    console.log(data);\n    return {\n        addProject, \n        getAllProjects\n    }\n})();\n   \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectRepository);\n\n\n\n//# sourceURL=webpack://to-do-list/./src/data/repository/projectRepository.js?");

/***/ }),

/***/ "./src/data/storage/factoryLocalStorage.js":
/*!*************************************************!*\
  !*** ./src/data/storage/factoryLocalStorage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ factoryLocalStorage)\n/* harmony export */ });\nfunction factoryLocalStorage() {\n    const storage = window['localStorage'];\n    \n    const add = (project) => {\n        let index = storage.length;\n        project.id = index;\n        \n        let projectJSON = JSON.stringify(project);\n        \n        storage.setItem(index, projectJSON);\n        console.log(storage);\n\n    }\n\n    \n    const getAll = () => {\n        const projects = [];\n        for(let i = 0; i < storage.length; i++) {\n            let projectJson = storage[i];\n            let project = JSON.parse(projectJson);\n            projects.push(project);\n        }\n        return projects;\n    }\n\n    return {\n        add, \n        getAll\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/data/storage/factoryLocalStorage.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nlet events = {\n    \n    _events: [],\n\n    on: function(eventName, fn) {\n        this._events[eventName] = this._events[eventName] || [];\n        this._events[eventName].push(fn)\n        \n    },\n\n    off: function(eventName, fn) {\n        if(this._events[eventName]) {\n            for(let i = 0;i < this._events[eventName].lenght; i ++) {\n                if(this._events[eventName][i] === fn) {\n                    this._events[eventName].splice(i, 1);\n                }\n            }\n        }\n    },\n\n    emit: function(eventName, data) {\n        if(this._events[eventName]) {\n            this._events[eventName].forEach(function(fn){\n                fn(data);\n            });\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n//# sourceURL=webpack://to-do-list/./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_footerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/footerFactory */ \"./src/ui/footerFactory.js\");\n/* harmony import */ var _ui_headerFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/headerFactory */ \"./src/ui/headerFactory.js\");\n/* harmony import */ var _ui_layer_layerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/layer/layerFactory */ \"./src/ui/layer/layerFactory.js\");\n/* harmony import */ var _ui_main_mainFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/main/mainFactory */ \"./src/ui/main/mainFactory.js\");\n/* harmony import */ var _ui_sidebar_sidebarFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/sidebar/sidebarFactory */ \"./src/ui/sidebar/sidebarFactory.js\");\n\n\n\n\n\n\n\nconst header = (0,_ui_headerFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst sideBar = (0,_ui_sidebar_sidebarFactory__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nconst main = (0,_ui_main_mainFactory__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst footer = (0,_ui_footerFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst layer = (0,_ui_layer_layerFactory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\ndocument.body.appendChild(header);\ndocument.body.appendChild(sideBar);\ndocument.body.appendChild(main);\ndocument.body.appendChild(footer);\ndocument.body.appendChild(layer);\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProjectFormFactory)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ \"./src/events.js\");\n/* harmony import */ var _data_model_createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/model/createTodo */ \"./src/data/model/createTodo.js\");\n/* harmony import */ var _listComponents_todosListComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listComponents/todosListComponent */ \"./src/ui/listComponents/todosListComponent.js\");\n/* harmony import */ var _inputValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputValidator */ \"./src/ui/layer/inputValidator.js\");\n/* harmony import */ var _data_model_createProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/model/createProject */ \"./src/data/model/createProject.js\");\n/* harmony import */ var _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/repository/projectRepository */ \"./src/data/repository/projectRepository.js\");\n\n\n\n\n\n\n\nfunction addProjectFormFactory() {\n    let errorField = false;\n    const inputs = [];\n    const todosData = [];\n\n    const createLegend = (text) => {\n        const element = document.createElement('legend');\n        element.textContent = text;\n        return element;\n    }\n\n    const createLabel = (text, inputId) => {\n        const element = document.createElement('label');\n        element.textContent = text;\n        element.htmlFor = inputId;\n        return element;\n    }\n\n    const createInput = (type, placeholderText, name)  => {\n        const element = document.createElement('input');\n        element.type = type;\n        element.placeholder = placeholderText;\n        element.name = name;\n        element.id = name;\n        element.max = 20;\n        inputs.push(element);\n        return element;\n    }\n\n    const createTextarea = (rows, placeholder, name) => {\n        const element = document.createElement('textarea');\n        element.rows = rows;\n        element.placeholder = placeholder;\n        element.name = name;\n        element.id = name;\n        return element;\n    }\n\n    const displayInputError = (element) => {\n        errorField = true;\n        element.setAttribute('required', 'true'); \n    }\n\n    _events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('displayInputError', displayInputError);\n\n    const form = document.createElement('form');\n    form.action = '#';\n    form.method = 'post';\n    form.classList.add('project-form');\n    form.addEventListener('submit', (event) => {\n        event.preventDefault();\n        errorField = false;\n        console.log(\"submiting form......\");\n        validate();\n        \n    })\n\n    const formTitle = document.createElement('h1');\n    formTitle.textContent = \"REGISTER PROJECT\";\n\n    // Project details form part\n    const projectFieldset = document.createElement('fieldset');\n    const projectLegend = createLegend('Project details');\n    \n    const projectTitleLabel = createLabel('Project title:', 'projectTitle');\n    \n    const projectTitleInput = createInput('text', 'Title', 'projectTitle');\n    \n    \n    const projectDescriptionLabel = createLabel('Project description:', 'projectDescription')\n    \n    const projectDescriptionTextarea = createTextarea(3, 'What is the project about?', 'projectDescription');\n\n    projectFieldset.append(projectLegend, projectTitleLabel,projectTitleInput, projectDescriptionLabel, projectDescriptionTextarea)\n    \n    // Todo items form part\n    const todoFieldset = document.createElement('fieldset');\n\n    const addTodoButton = document.createElement('button')\n    addTodoButton.classList.add('add-todo-button');\n    addTodoButton.textContent = '+ ADD TODO';\n    addTodoButton.type = 'button';\n    addTodoButton.addEventListener('click', () => {\n        errorField = false;\n        (0,_inputValidator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([todoTitleInput, todoDateInput]);\n        if(errorField) return;\n        removeEmptyListMessage();\n        addTodoToList(); \n        resetInputText(todoTitleInput);\n        resetInputText(todoDescriptionTextarea);\n        resetInputText(todoDateInput);\n    });\n\n    const todoLegend = createLegend('Register todos');\n    \n    const todoTitleLabel = createLabel('Title:', 'todoTitle');\n    \n    const todoTitleInput = createInput('text', 'Title', 'todoTitle')\n    \n    const todoDateLabel = createLabel('Date:', 'date');\n    \n    const todoDateInput = createInput('date', null, 'date');\n    \n    const todoDescriptionLabel = createLabel('Description:', 'todoDescription');\n   \n    const todoDescriptionTextarea = createTextarea(3, 'Write a description for the todo!', 'todoDescription');\n    \n    todoFieldset.append(todoLegend, todoTitleLabel, todoTitleInput, todoDateLabel, todoDateInput, todoDescriptionLabel, todoDescriptionTextarea, addTodoButton);\n    const todoListFieldset = document.createElement('fieldset');\n    const todoListLegend = document.createElement('legend');\n    todoListLegend.textContent = 'Todo List'\n    \n    const listComponent = (0,_listComponents_todosListComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todosData, (title) => {\n       removeFromTodosData(title);\n    });\n\n    const todosList = listComponent.getListElement();\n\n    todosList.classList.add('todos-form-list');\n    \n    todoListFieldset.appendChild(todoListLegend);\n    todoListFieldset.appendChild(todosList);\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Submit';  \n\n    form.append(formTitle, projectFieldset, todoFieldset, todoListFieldset, submitButton);\n\n    function validate() {\n        (0,_inputValidator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([projectTitleInput]);\n        if(!listHasItem()) {\n            showEmptyListMessage()\n            errorField = true;\n        }\n        if(errorField) {\n            console.log('Error in an input cannot register');\n            return;\n        }\n        submit();\n    }\n      \n    const emptyListSpan = document.createElement('span');\n    emptyListSpan.textContent = 'There are no todos! Please add one!';\n    emptyListSpan.classList.add('empty-list-msg');\n\n    function showEmptyListMessage() {\n        todosList.append(emptyListSpan);\n    }\n    function removeEmptyListMessage() {\n        emptyListSpan.remove();\n    }\n    function listHasItem() {\n        return todosList.hasChildNodes();\n    }\n\n    function addTodoToList() {\n        let todoTitle = todoTitleInput.value;\n        let todoDescription = todoDescriptionTextarea.value;\n        let todoDate  = todoDateInput.value;\n        \n        // Pushing to data array\n        let todo = (0,_data_model_createTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoTitle, todoDescription, todoDate);\n        todosData.push(todo);\n        // Adding to list component\n        listComponent.updateList(todo);\n\n    }\n\n    function resetInputText(input) {\n        input.value = '';\n        input.removeAttribute('required');\n    }\n\n    function removeFromTodosData(title) {\n        for(let i = 0;i < todosData.length; i++) {\n            let todo = todosData[i];\n            if(todo.getTitle() === title) {\n                todosData.splice(i, 1);\n                break;\n            }\n\n        }\n        console.log(todosData);\n    }\n\n    function submit() {\n        let title = projectTitleInput.value;\n        let description = projectDescriptionTextarea.value;\n        \n        let project = (0,_data_model_createProject__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(title, description, todosData);\n       _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_5__[\"default\"].addProject(project);\n    }\n\n    return form;\n\n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/layer/addProjectFormFactory.js?");

/***/ }),

/***/ "./src/ui/layer/inputValidator.js":
/*!****************************************!*\
  !*** ./src/ui/layer/inputValidator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inputValidator)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ \"./src/events.js\");\n\n\nfunction inputValidator(inputs) {\n    for(let i = 0; i < inputs.length; i++) {\n        let input = inputs[i];\n        let data = input.value;\n        if(data === '') {\n            _events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('displayInputError', input);\n        }\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/layer/inputValidator.js?");

/***/ }),

/***/ "./src/ui/layer/layerFactory.js":
/*!**************************************!*\
  !*** ./src/ui/layer/layerFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ layerFactory)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ \"./src/events.js\");\n/* harmony import */ var _addProjectFormFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectFormFactory */ \"./src/ui/layer/addProjectFormFactory.js\");\n\n\n\n\nfunction layerFactory() {\n\n    const LAYER_STYLE = 'layer';\n    const CONTAINER_STYLE = 'layer-container';\n\n    const layerElement = document.createElement('div');\n    layerElement.classList.add(LAYER_STYLE);\n\n    const toggleVisibility = () => {layerElement.toggleAttribute('visible');}\n    \n    const closeButton = document.createElement('button');\n    closeButton.textContent = \"X\";\n    closeButton.addEventListener('click',toggleVisibility);\n    \n    const container = document.createElement('div');\n    container.classList.add(CONTAINER_STYLE);\n    container.classList.add('corner');\n\n    let form = (0,_addProjectFormFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    container.appendChild(closeButton);\n    container.appendChild(form);\n    layerElement.appendChild(container);\n\n    _events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('updateLayerVisibility', toggleVisibility);\n\n    return layerElement; \n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/layer/layerFactory.js?");

/***/ }),

/***/ "./src/ui/listComponents/projectListComponent.js":
/*!*******************************************************!*\
  !*** ./src/ui/listComponents/projectListComponent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectListComponent)\n/* harmony export */ });\nfunction projectListComponent(projects, itemCallback) {\n    console.log(projects);\n\n    const ul = document.createElement('ul');\n\n    (() => {\n        if(projects.length === 0 || projects === null) return;\n        for(let i = 0; i < projects.length; i++) {\n            let item = projects[i];\n            updateList(item);\n        }\n    })();\n\n    function updateList(project) {\n        const item = projectItemComponent(project.id, project.title, itemCallback);\n        ul.appendChild(item);\n    }\n\n    return {\n        getList() {\n            return ul;\n        }\n    }\n}\n\nfunction projectItemComponent(id, title, itemCallback) {\n    const STYLE = 'project';\n\n    const listItem = document.createElement('li');\n    listItem.classList.add(STYLE);\n    listItem.addEventListener('click', () => {\n        itemCallback(id);\n    })\n\n    const titlePara = document.createElement('p');\n    titlePara.textContent = title;\n\n    const completionSpan = document.createElement('span');\n    completionSpan.textContent = '8/12';\n\n    listItem.append(titlePara, completionSpan);\n\n    return listItem;\n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/listComponents/projectListComponent.js?");

/***/ }),

/***/ "./src/ui/listComponents/todosListComponent.js":
/*!*****************************************************!*\
  !*** ./src/ui/listComponents/todosListComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoListComponent)\n/* harmony export */ });\n\nfunction todoListComponent(todos, itemCallback) {\n    \n    const ul = document.createElement('ul');\n\n    // initializer if there is something in the todos array\n    (() => {\n        if(todos.length === 0 || todos === null) return;\n        for(let i = 0; i < todos.length; i++) {\n            let todo = todos[i];\n            updateList(todo);\n        }\n    })();\n\n    function updateList(todo) {\n        const item = todoItemComponent(todo.title, todo.date, itemCallback);\n        ul.appendChild(item);\n    }\n\n    return {\n        getListElement() {\n            return ul;\n        },\n        updateList,\n    }\n}\n\nfunction todoItemComponent(title, date, itemCallback) {\n    const STYLE = 'todo';\n    const listItem = document.createElement('li');\n    listItem.classList.add(STYLE);\n    listItem.classList.add('corner');\n\n    const todoTitleElement = document.createElement('p');\n    todoTitleElement.textContent = title;\n\n    const todoDateElement = document.createElement('p');\n    todoDateElement.textContent = date;\n\n    const deleteButton = document.createElement('button');\n    deleteButton.textContent = \"X\";\n    deleteButton.type = 'button';\n    deleteButton.addEventListener('click', () => {\n        itemCallback(title);\n        listItem.remove()\n        \n    })\n\n    listItem.append(todoTitleElement, todoDateElement, deleteButton);\n    return listItem;\n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/listComponents/todosListComponent.js?");

/***/ }),

/***/ "./src/ui/main/mainFactory.js":
/*!************************************!*\
  !*** ./src/ui/main/mainFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mainFactory)\n/* harmony export */ });\n/* harmony import */ var _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/repository/projectRepository */ \"./src/data/repository/projectRepository.js\");\n/* harmony import */ var _listComponents_projectListComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listComponents/projectListComponent */ \"./src/ui/listComponents/projectListComponent.js\");\n\n\n\n\nfunction mainFactory() {\n\n    const mainElement = document.createElement('main');\n    const listComponent = (0,_listComponents_projectListComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProjects(), (id) => {\n        console.log('item id clicked is: ' + id)\n        console.log('view project data flow');\n    })\n    const projectList = listComponent.getList();\n    \n    mainElement.appendChild(projectList);\n    \n    return mainElement;\n}\n\n//# sourceURL=webpack://to-do-list/./src/ui/main/mainFactory.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asset_icon_inbox_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../asset/icon-inbox.png */ \"./src/asset/icon-inbox.png\");\n/* harmony import */ var _asset_icon_upcoming_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../asset/icon-upcoming.png */ \"./src/asset/icon-upcoming.png\");\n/* harmony import */ var _asset_icon_today_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../asset/icon-today.png */ \"./src/asset/icon-today.png\");\n/* harmony import */ var _asset_icon_add_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../asset/icon-add.png */ \"./src/asset/icon-add.png\");\n/* harmony import */ var _sideBarItemFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideBarItemFlow */ \"./src/ui/sidebar/sideBarItemFlow.js\");\n\n\n\n\n\n\nfunction sidebarItemFactory(icon, title) {\n    const STYLE = 'sidebar-item';\n    const ICON_CONTAINER_STYLE = 'sidebar-item-container';\n\n    const sidebarItemElement = document.createElement('div');\n    sidebarItemElement.classList.add(STYLE);\n    sidebarItemElement.setAttribute('id', title);\n\n    sidebarItemElement.addEventListener('click', function(e) {\n            (0,_sideBarItemFlow__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(title);\n    });\n\n    const itemIcon = new Image();\n    itemIcon.src = icon;\n    \n    const iconContainer = document.createElement('div');\n    iconContainer.appendChild(itemIcon);\n    iconContainer.classList.add(ICON_CONTAINER_STYLE);\n\n    const titleElement = document.createElement('h3');\n    titleElement.textContent = title;\n    titleElement.classList.add('item-title');\n\n    sidebarItemElement.append(iconContainer, titleElement);\n    \n    return sidebarItemElement;\n}\n\nconst sidebarItems = [];\n\nconst inboxItem = sidebarItemFactory(_asset_icon_inbox_png__WEBPACK_IMPORTED_MODULE_0__, 'inbox');\nsidebarItems.push(inboxItem);\n\nconst upcomingItem = sidebarItemFactory(_asset_icon_upcoming_png__WEBPACK_IMPORTED_MODULE_1__, 'upcoming');\nsidebarItems.push(upcomingItem);\n\nconst todayItem = sidebarItemFactory(_asset_icon_today_png__WEBPACK_IMPORTED_MODULE_2__, 'today');\nsidebarItems.push(todayItem);\n\nconst addItem = sidebarItemFactory(_asset_icon_add_png__WEBPACK_IMPORTED_MODULE_3__, 'create');\nsidebarItems.push(addItem);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarItems);\n\n//# sourceURL=webpack://to-do-list/./src/ui/sidebar/sidebarItems.js?");

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