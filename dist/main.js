/* eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ ;(() => {
  // webpackBootstrap
  /******/ "use strict"
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --primary-color: #020617;\n  --secondary-color: #f8fafc;\n  --accent-color: #64748b;\n\n  --primary-text-color: var(--primary--color);\n  --secondary-text-color: var(--secondary-color);\n\n  --hover-color: hsl(231, 36%, 23%);\n  --item-background-color: #334155;\n  --sidebar-color: #94a3b8;\n\n  --font-family: "Lucida Console", "monospace";\n}\n\nbody {\n  position: relative;\n  margin: 0;\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: min(47vw, 300px) auto;\n  grid-template-rows: 5rem auto 2rem;\n  font-family: var(--font-family);\n  font-size: 1em;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nh3 {\n  font-size: 15px;\n}\n/* Header */\nheader,\nfooter {\n  background-color: var(--primary-color);\n  color: var(--secondary-text-color);\n  grid-column: 1 / 3;\n  display: flex;\n}\n\nheader {\n  padding-left: 1rem;\n  align-items: center;\n  gap: 1rem;\n}\n.logo-container {\n  height: 3rem;\n}\n\n.logo-container > img {\n  height: 100%;\n}\n\n/* Sidebar */\n.sidebar {\n  padding: 1rem;\n  background-color: var(--sidebar-color);\n}\n\n.sidebar > h2 {\n  text-align: center;\n  padding-block: 1rem;\n  border-bottom: 1px solid var(--primary-color);\n}\n\n.sidebar-item {\n  margin-block: 0.5rem;\n  color: var(--primary-text-color);\n  background-color: var(--accent-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  border: 0.25rem solid var(--accent-color);\n  border-radius: 5px;\n}\n\n.sidebar-item[isActive] {\n  border: 0.25rem solid var(--primary-color);\n}\n.item-title {\n  text-transform: capitalize;\n  margin-inline-start: 4px;\n}\n.sidebar-item:hover {\n  border: 0.25rem solid var(--primary-color);\n}\n\n.sidebar-item-container {\n  height: max(1.5vw, 20px);\n}\n\n.sidebar-item-container > img {\n  height: 100%;\n}\n\n.item-counter {\n  margin-left: auto;\n}\n\n/* Main */\nmain {\n  position: relative;\n  padding: 16px;\n  background-color: var(--secondary-color);\n}\n.layer {\n  display: none;\n}\n\n.layer[visible] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.layer-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  padding: 16px;\n  background-color: var(--secondary-color);\n  width: 50%;\n  height: 90%;\n  margin: auto 0;\n  box-shadow: 0px 3px 3px var(--primary-color);\n  overflow: hidden;\n}\n\n.layer-list {\n  height: 100%;\n  margin-block: 0;\n  overflow-y: scroll;\n}\n.layer-add-todo-button,\n.layer-delete-button {\n  width: 120px;\n  border-radius: 5px;\n  background-color: var(--accent-color);\n  font-size: large;\n}\n\n.delete-item-button {\n  cursor: pointer;\n  border-radius: 5px;\n  width: 25px;\n  height: 25px;\n  padding: 0;\n  border-color: black;\n  background-color: var(--accent-color);\n}\n.delete-item-button > div {\n  width: 100%;\n  height: 100%;\n}\n\n.delete-item-button > div > img {\n  width: 100%;\n  height: 100%;\n}\n\n.controls-container {\n  position: absolute;\n  display: flex;\n  gap: 16px;\n}\n.close-button {\n  width: 25px;\n  height: 25px;\n  font-size: 100%;\n  border-radius: 5px;\n  margin-inline-start: auto;\n  cursor: pointer;\n  display: block;\n  background-color: var(--accent-color);\n  color: var(--primary-text-color);\n  outline: var(--primary-color);\n}\n\n.layer-title {\n  cursor: pointer;\n  color: var(--primary-text-color);\n  font-size: 2rem;\n  font-weight: 900;\n}\n.layer-description {\n  cursor: pointer;\n  color: var(--primary-text-color);\n  font-size: 0.8rem;\n}\n\n.todo-component {\n  color: var(--primary-text-color);\n  font-size: 1rem;\n  background-color: var(--accent-color);\n  padding: 8px;\n  margin-bottom: 4px;\n  box-shadow: 0px 1px 1px var(--primary-color);\n  border-radius: 5px;\n}\n.todo-component-title {\n  cursor: pointer;\n  text-transform: capitalize;\n  width: 400px;\n  margin: 0;\n  font-size: 1.3rem;\n}\n\n.todo-component-date {\n  cursor: pointer;\n  margin: 0;\n  margin-inline: auto;\n  font-size: 0.8rem;\n}\n.todo-main-container {\n  display: flex;\n  align-items: center;\n}\n\n.todo-checkbox {\n  margin-inline: auto 16px;\n  accent-color: var(--primary-color);\n  width: 25px;\n  height: 25px;\n}\n.todo-component-description {\n  text-transform: capitalize;\n  display: block;\n  font-size: 0.7rem;\n  margin: 0;\n}\n\n.todo-description[visible] {\n  font-size: 1.5rem;\n}\n\n.list-header {\n  text-transform: uppercase;\n}\n.project-list {\n  max-height: 650px;\n  padding: 0;\n  overflow-y: auto;\n}\n\n.project {\n  border: 5px solid var(--accent-color);\n  cursor: pointer;\n  padding: 16px;\n  display: flex;\n  gap: 4px;\n  justify-content: space-between;\n  background-color: var(--accent-color);\n  color: var(--primary-color);\n  font-weight: bold;\n  align-items: center;\n  margin-bottom: 8px;\n  border-radius: 5px;\n}\n\n.project:hover {\n  border: 5px solid var(--primary-color);\n}\n\n.project-title {\n  margin: 0;\n}\n\n/* Footer */\nfooter {\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\nfooter > a {\n  color: var(--secondary-color);\n}\n.icon-container {\n  height: 25px;\n  overflow: hidden;\n}\n.icon-container > img {\n  height: 100%;\n}\n\n/* Form */\n::placeholder {\n  color: var(--accent-color);\n}\n\n.project-form {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  display: grid;\n  grid-template-rows: min-content 2fr auto;\n  gap: 8px;\n}\n.registry-message {\n  text-transform: uppercase;\n  box-shadow: 0 4px 8px var(--primary-color);\n  padding: 16px;\n  width: max-content;\n  color: var(--primary-color);\n  border-radius: 5px;\n  font-size: x-large;\n  background-color: var(--accent-color);\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n.project-form > h1 {\n  color: var(--primary--color);\n}\n\n.project-form > button {\n  height: min-content;\n  padding: 8px;\n  text-transform: uppercase;\n}\n\n.fieldset-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  justify-content: center;\n}\n\nfieldset {\n  display: flex;\n  flex-direction: column;\n}\n\nfieldset > legend {\n  padding: 8px;\n  margin: 0 auto;\n  text-transform: uppercase;\n}\n\n.project-form > button {\n  color: var(--secondary-color);\n  background-color: var(--accent-color);\n  margin: 0 auto;\n  width: fit-content;\n}\n.todos-form-list {\n  height: 100%;\n  padding-inline: 0;\n  background-color: var(--secondary-color);\n  color: var(--primary-text-color);\n}\n\n.add-todo-button {\n  padding: 4px;\n  color: var(--secondary-color);\n  background-color: var(--accent-color);\n}\n\n.empty-list-msg {\n  text-align: center;\n  color: red;\n  display: block;\n}\n\ntextarea {\n  height: 100%;\n  resize: none;\n}\ninput {\n  min-height: 1.5rem;\n}\n\ninput,\ntextarea {\n  border: 3px solid var(--accent-color);\n  margin-block: 3px;\n  font-family: inherit;\n  font-size: inherit;\n  background-color: var(--secondary-color);\n  color: var(--primary-text-color);\n  outline-color: var(--primary--color);\n}\n\n.error {\n  border-color: red;\n}\n\n.error:focus {\n  outline-color: red;\n}\ninput:focus,\ntextarea:focus {\n  border-color: var(--primary--color);\n}\n\n::-webkit-calendar-picker-indicator:hover {\n  cursor: pointer;\n}\n\n.todo {\n  display: flex;\n  justify-content: space-between;\n  background-color: var(--accent-color);\n  color: var(--secondary-color);\n  align-items: center;\n  padding: 8px;\n  margin-bottom: 4px;\n  box-shadow: 0px 1px 1px var(--primary-color);\n}\n/* .todo > p {\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 15ch;\n    white-space: nowrap;\n} */\n\n.todo > button {\n  background-color: var(--primary-color);\n  color: var(--secondary-text-color);\n  height: min-content;\n  width: min-content;\n  border-color: var(--primary-color);\n}\n\n/* RESET */\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  margin-block: 0;\n}\n\nul {\n  padding: 0;\n  overflow-y: auto;\n  overflow: hidden;\n}\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js'
        )

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?'
        )

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addLeadingZeros)\n/* harmony export */ });\nfunction addLeadingZeros(number, targetLength) {\n  var sign = number < 0 ? '-' : '';\n  var output = Math.abs(number).toString();\n  while (output.length < targetLength) {\n    output = '0' + output;\n  }\n  return sign + output;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/defaultLocale/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js\");\n/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js\");\n/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js\");\n/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCWeek/index.js\");\n/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ \"./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js\");\n/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ \"./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js\");\n/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ \"./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js\");\n\n\n\n\n\n\n\nvar dayPeriodEnum = {\n  am: 'am',\n  pm: 'pm',\n  midnight: 'midnight',\n  noon: 'noon',\n  morning: 'morning',\n  afternoon: 'afternoon',\n  evening: 'evening',\n  night: 'night'\n};\n/*\n * |     | Unit                           |     | Unit                           |\n * |-----|--------------------------------|-----|--------------------------------|\n * |  a  | AM, PM                         |  A* | Milliseconds in day            |\n * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |\n * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |\n * |  d  | Day of month                   |  D  | Day of year                    |\n * |  e  | Local day of week              |  E  | Day of week                    |\n * |  f  |                                |  F* | Day of week in month           |\n * |  g* | Modified Julian day            |  G  | Era                            |\n * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |\n * |  i! | ISO day of week                |  I! | ISO week of year               |\n * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |\n * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |\n * |  l* | (deprecated)                   |  L  | Stand-alone month              |\n * |  m  | Minute                         |  M  | Month                          |\n * |  n  |                                |  N  |                                |\n * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |\n * |  p! | Long localized time            |  P! | Long localized date            |\n * |  q  | Stand-alone quarter            |  Q  | Quarter                        |\n * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |\n * |  s  | Second                         |  S  | Fraction of second             |\n * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |\n * |  u  | Extended year                  |  U* | Cyclic year                    |\n * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |\n * |  w  | Local week of year             |  W* | Week of month                  |\n * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |\n * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |\n * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |\n *\n * Letters marked by * are not implemented but reserved by Unicode standard.\n *\n * Letters marked by ! are non-standard, but implemented by date-fns:\n * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)\n * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,\n *   i.e. 7 for Sunday, 1 for Monday, etc.\n * - `I` is ISO week of year, as opposed to `w` which is local week of year.\n * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.\n *   `R` is supposed to be used in conjunction with `I` and `i`\n *   for universal ISO week-numbering date, whereas\n *   `Y` is supposed to be used in conjunction with `w` and `e`\n *   for week-numbering date specific to the locale.\n * - `P` is long localized date format\n * - `p` is long localized time format\n */\n\nvar formatters = {\n  // Era\n  G: function G(date, token, localize) {\n    var era = date.getUTCFullYear() > 0 ? 1 : 0;\n    switch (token) {\n      // AD, BC\n      case 'G':\n      case 'GG':\n      case 'GGG':\n        return localize.era(era, {\n          width: 'abbreviated'\n        });\n      // A, B\n      case 'GGGGG':\n        return localize.era(era, {\n          width: 'narrow'\n        });\n      // Anno Domini, Before Christ\n      case 'GGGG':\n      default:\n        return localize.era(era, {\n          width: 'wide'\n        });\n    }\n  },\n  // Year\n  y: function y(date, token, localize) {\n    // Ordinal number\n    if (token === 'yo') {\n      var signedYear = date.getUTCFullYear();\n      // Returns 1 for 1 BC (which is year 0 in JavaScript)\n      var year = signedYear > 0 ? signedYear : 1 - signedYear;\n      return localize.ordinalNumber(year, {\n        unit: 'year'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y(date, token);\n  },\n  // Local week-numbering year\n  Y: function Y(date, token, localize, options) {\n    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(date, options);\n    // Returns 1 for 1 BC (which is year 0 in JavaScript)\n    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;\n\n    // Two digit year\n    if (token === 'YY') {\n      var twoDigitYear = weekYear % 100;\n      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(twoDigitYear, 2);\n    }\n\n    // Ordinal number\n    if (token === 'Yo') {\n      return localize.ordinalNumber(weekYear, {\n        unit: 'year'\n      });\n    }\n\n    // Padding\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(weekYear, token.length);\n  },\n  // ISO week-numbering year\n  R: function R(date, token) {\n    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(date);\n\n    // Padding\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(isoWeekYear, token.length);\n  },\n  // Extended year. This is a single number designating the year of this calendar system.\n  // The main difference between `y` and `u` localizers are B.C. years:\n  // | Year | `y` | `u` |\n  // |------|-----|-----|\n  // | AC 1 |   1 |   1 |\n  // | BC 1 |   1 |   0 |\n  // | BC 2 |   2 |  -1 |\n  // Also `yy` always returns the last two digits of a year,\n  // while `uu` pads single digit years to 2 characters and returns other years unchanged.\n  u: function u(date, token) {\n    var year = date.getUTCFullYear();\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(year, token.length);\n  },\n  // Quarter\n  Q: function Q(date, token, localize) {\n    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);\n    switch (token) {\n      // 1, 2, 3, 4\n      case 'Q':\n        return String(quarter);\n      // 01, 02, 03, 04\n      case 'QQ':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(quarter, 2);\n      // 1st, 2nd, 3rd, 4th\n      case 'Qo':\n        return localize.ordinalNumber(quarter, {\n          unit: 'quarter'\n        });\n      // Q1, Q2, Q3, Q4\n      case 'QQQ':\n        return localize.quarter(quarter, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // 1, 2, 3, 4 (narrow quarter; could be not numerical)\n      case 'QQQQQ':\n        return localize.quarter(quarter, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // 1st quarter, 2nd quarter, ...\n      case 'QQQQ':\n      default:\n        return localize.quarter(quarter, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Stand-alone quarter\n  q: function q(date, token, localize) {\n    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);\n    switch (token) {\n      // 1, 2, 3, 4\n      case 'q':\n        return String(quarter);\n      // 01, 02, 03, 04\n      case 'qq':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(quarter, 2);\n      // 1st, 2nd, 3rd, 4th\n      case 'qo':\n        return localize.ordinalNumber(quarter, {\n          unit: 'quarter'\n        });\n      // Q1, Q2, Q3, Q4\n      case 'qqq':\n        return localize.quarter(quarter, {\n          width: 'abbreviated',\n          context: 'standalone'\n        });\n      // 1, 2, 3, 4 (narrow quarter; could be not numerical)\n      case 'qqqqq':\n        return localize.quarter(quarter, {\n          width: 'narrow',\n          context: 'standalone'\n        });\n      // 1st quarter, 2nd quarter, ...\n      case 'qqqq':\n      default:\n        return localize.quarter(quarter, {\n          width: 'wide',\n          context: 'standalone'\n        });\n    }\n  },\n  // Month\n  M: function M(date, token, localize) {\n    var month = date.getUTCMonth();\n    switch (token) {\n      case 'M':\n      case 'MM':\n        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].M(date, token);\n      // 1st, 2nd, ..., 12th\n      case 'Mo':\n        return localize.ordinalNumber(month + 1, {\n          unit: 'month'\n        });\n      // Jan, Feb, ..., Dec\n      case 'MMM':\n        return localize.month(month, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // J, F, ..., D\n      case 'MMMMM':\n        return localize.month(month, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // January, February, ..., December\n      case 'MMMM':\n      default:\n        return localize.month(month, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Stand-alone month\n  L: function L(date, token, localize) {\n    var month = date.getUTCMonth();\n    switch (token) {\n      // 1, 2, ..., 12\n      case 'L':\n        return String(month + 1);\n      // 01, 02, ..., 12\n      case 'LL':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(month + 1, 2);\n      // 1st, 2nd, ..., 12th\n      case 'Lo':\n        return localize.ordinalNumber(month + 1, {\n          unit: 'month'\n        });\n      // Jan, Feb, ..., Dec\n      case 'LLL':\n        return localize.month(month, {\n          width: 'abbreviated',\n          context: 'standalone'\n        });\n      // J, F, ..., D\n      case 'LLLLL':\n        return localize.month(month, {\n          width: 'narrow',\n          context: 'standalone'\n        });\n      // January, February, ..., December\n      case 'LLLL':\n      default:\n        return localize.month(month, {\n          width: 'wide',\n          context: 'standalone'\n        });\n    }\n  },\n  // Local week of year\n  w: function w(date, token, localize, options) {\n    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(date, options);\n    if (token === 'wo') {\n      return localize.ordinalNumber(week, {\n        unit: 'week'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(week, token.length);\n  },\n  // ISO week of year\n  I: function I(date, token, localize) {\n    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(date);\n    if (token === 'Io') {\n      return localize.ordinalNumber(isoWeek, {\n        unit: 'week'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(isoWeek, token.length);\n  },\n  // Day of the month\n  d: function d(date, token, localize) {\n    if (token === 'do') {\n      return localize.ordinalNumber(date.getUTCDate(), {\n        unit: 'date'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].d(date, token);\n  },\n  // Day of year\n  D: function D(date, token, localize) {\n    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(date);\n    if (token === 'Do') {\n      return localize.ordinalNumber(dayOfYear, {\n        unit: 'dayOfYear'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dayOfYear, token.length);\n  },\n  // Day of week\n  E: function E(date, token, localize) {\n    var dayOfWeek = date.getUTCDay();\n    switch (token) {\n      // Tue\n      case 'E':\n      case 'EE':\n      case 'EEE':\n        return localize.day(dayOfWeek, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // T\n      case 'EEEEE':\n        return localize.day(dayOfWeek, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // Tu\n      case 'EEEEEE':\n        return localize.day(dayOfWeek, {\n          width: 'short',\n          context: 'formatting'\n        });\n      // Tuesday\n      case 'EEEE':\n      default:\n        return localize.day(dayOfWeek, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Local day of week\n  e: function e(date, token, localize, options) {\n    var dayOfWeek = date.getUTCDay();\n    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;\n    switch (token) {\n      // Numerical value (Nth day of week with current locale or weekStartsOn)\n      case 'e':\n        return String(localDayOfWeek);\n      // Padded numerical value\n      case 'ee':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(localDayOfWeek, 2);\n      // 1st, 2nd, ..., 7th\n      case 'eo':\n        return localize.ordinalNumber(localDayOfWeek, {\n          unit: 'day'\n        });\n      case 'eee':\n        return localize.day(dayOfWeek, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // T\n      case 'eeeee':\n        return localize.day(dayOfWeek, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // Tu\n      case 'eeeeee':\n        return localize.day(dayOfWeek, {\n          width: 'short',\n          context: 'formatting'\n        });\n      // Tuesday\n      case 'eeee':\n      default:\n        return localize.day(dayOfWeek, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Stand-alone local day of week\n  c: function c(date, token, localize, options) {\n    var dayOfWeek = date.getUTCDay();\n    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;\n    switch (token) {\n      // Numerical value (same as in `e`)\n      case 'c':\n        return String(localDayOfWeek);\n      // Padded numerical value\n      case 'cc':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(localDayOfWeek, token.length);\n      // 1st, 2nd, ..., 7th\n      case 'co':\n        return localize.ordinalNumber(localDayOfWeek, {\n          unit: 'day'\n        });\n      case 'ccc':\n        return localize.day(dayOfWeek, {\n          width: 'abbreviated',\n          context: 'standalone'\n        });\n      // T\n      case 'ccccc':\n        return localize.day(dayOfWeek, {\n          width: 'narrow',\n          context: 'standalone'\n        });\n      // Tu\n      case 'cccccc':\n        return localize.day(dayOfWeek, {\n          width: 'short',\n          context: 'standalone'\n        });\n      // Tuesday\n      case 'cccc':\n      default:\n        return localize.day(dayOfWeek, {\n          width: 'wide',\n          context: 'standalone'\n        });\n    }\n  },\n  // ISO day of week\n  i: function i(date, token, localize) {\n    var dayOfWeek = date.getUTCDay();\n    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;\n    switch (token) {\n      // 2\n      case 'i':\n        return String(isoDayOfWeek);\n      // 02\n      case 'ii':\n        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(isoDayOfWeek, token.length);\n      // 2nd\n      case 'io':\n        return localize.ordinalNumber(isoDayOfWeek, {\n          unit: 'day'\n        });\n      // Tue\n      case 'iii':\n        return localize.day(dayOfWeek, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      // T\n      case 'iiiii':\n        return localize.day(dayOfWeek, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      // Tu\n      case 'iiiiii':\n        return localize.day(dayOfWeek, {\n          width: 'short',\n          context: 'formatting'\n        });\n      // Tuesday\n      case 'iiii':\n      default:\n        return localize.day(dayOfWeek, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // AM or PM\n  a: function a(date, token, localize) {\n    var hours = date.getUTCHours();\n    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';\n    switch (token) {\n      case 'a':\n      case 'aa':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      case 'aaa':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        }).toLowerCase();\n      case 'aaaaa':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      case 'aaaa':\n      default:\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // AM, PM, midnight, noon\n  b: function b(date, token, localize) {\n    var hours = date.getUTCHours();\n    var dayPeriodEnumValue;\n    if (hours === 12) {\n      dayPeriodEnumValue = dayPeriodEnum.noon;\n    } else if (hours === 0) {\n      dayPeriodEnumValue = dayPeriodEnum.midnight;\n    } else {\n      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';\n    }\n    switch (token) {\n      case 'b':\n      case 'bb':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      case 'bbb':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        }).toLowerCase();\n      case 'bbbbb':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      case 'bbbb':\n      default:\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // in the morning, in the afternoon, in the evening, at night\n  B: function B(date, token, localize) {\n    var hours = date.getUTCHours();\n    var dayPeriodEnumValue;\n    if (hours >= 17) {\n      dayPeriodEnumValue = dayPeriodEnum.evening;\n    } else if (hours >= 12) {\n      dayPeriodEnumValue = dayPeriodEnum.afternoon;\n    } else if (hours >= 4) {\n      dayPeriodEnumValue = dayPeriodEnum.morning;\n    } else {\n      dayPeriodEnumValue = dayPeriodEnum.night;\n    }\n    switch (token) {\n      case 'B':\n      case 'BB':\n      case 'BBB':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'abbreviated',\n          context: 'formatting'\n        });\n      case 'BBBBB':\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'narrow',\n          context: 'formatting'\n        });\n      case 'BBBB':\n      default:\n        return localize.dayPeriod(dayPeriodEnumValue, {\n          width: 'wide',\n          context: 'formatting'\n        });\n    }\n  },\n  // Hour [1-12]\n  h: function h(date, token, localize) {\n    if (token === 'ho') {\n      var hours = date.getUTCHours() % 12;\n      if (hours === 0) hours = 12;\n      return localize.ordinalNumber(hours, {\n        unit: 'hour'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h(date, token);\n  },\n  // Hour [0-23]\n  H: function H(date, token, localize) {\n    if (token === 'Ho') {\n      return localize.ordinalNumber(date.getUTCHours(), {\n        unit: 'hour'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].H(date, token);\n  },\n  // Hour [0-11]\n  K: function K(date, token, localize) {\n    var hours = date.getUTCHours() % 12;\n    if (token === 'Ko') {\n      return localize.ordinalNumber(hours, {\n        unit: 'hour'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(hours, token.length);\n  },\n  // Hour [1-24]\n  k: function k(date, token, localize) {\n    var hours = date.getUTCHours();\n    if (hours === 0) hours = 24;\n    if (token === 'ko') {\n      return localize.ordinalNumber(hours, {\n        unit: 'hour'\n      });\n    }\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(hours, token.length);\n  },\n  // Minute\n  m: function m(date, token, localize) {\n    if (token === 'mo') {\n      return localize.ordinalNumber(date.getUTCMinutes(), {\n        unit: 'minute'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].m(date, token);\n  },\n  // Second\n  s: function s(date, token, localize) {\n    if (token === 'so') {\n      return localize.ordinalNumber(date.getUTCSeconds(), {\n        unit: 'second'\n      });\n    }\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].s(date, token);\n  },\n  // Fraction of second\n  S: function S(date, token) {\n    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].S(date, token);\n  },\n  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)\n  X: function X(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timezoneOffset = originalDate.getTimezoneOffset();\n    if (timezoneOffset === 0) {\n      return 'Z';\n    }\n    switch (token) {\n      // Hours and optional minutes\n      case 'X':\n        return formatTimezoneWithOptionalMinutes(timezoneOffset);\n\n      // Hours, minutes and optional seconds without `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `XX`\n      case 'XXXX':\n      case 'XX':\n        // Hours and minutes without `:` delimiter\n        return formatTimezone(timezoneOffset);\n\n      // Hours, minutes and optional seconds with `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `XXX`\n      case 'XXXXX':\n      case 'XXX': // Hours and minutes with `:` delimiter\n      default:\n        return formatTimezone(timezoneOffset, ':');\n    }\n  },\n  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)\n  x: function x(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timezoneOffset = originalDate.getTimezoneOffset();\n    switch (token) {\n      // Hours and optional minutes\n      case 'x':\n        return formatTimezoneWithOptionalMinutes(timezoneOffset);\n\n      // Hours, minutes and optional seconds without `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `xx`\n      case 'xxxx':\n      case 'xx':\n        // Hours and minutes without `:` delimiter\n        return formatTimezone(timezoneOffset);\n\n      // Hours, minutes and optional seconds with `:` delimiter\n      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets\n      // so this token always has the same output as `xxx`\n      case 'xxxxx':\n      case 'xxx': // Hours and minutes with `:` delimiter\n      default:\n        return formatTimezone(timezoneOffset, ':');\n    }\n  },\n  // Timezone (GMT)\n  O: function O(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timezoneOffset = originalDate.getTimezoneOffset();\n    switch (token) {\n      // Short\n      case 'O':\n      case 'OO':\n      case 'OOO':\n        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');\n      // Long\n      case 'OOOO':\n      default:\n        return 'GMT' + formatTimezone(timezoneOffset, ':');\n    }\n  },\n  // Timezone (specific non-location)\n  z: function z(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timezoneOffset = originalDate.getTimezoneOffset();\n    switch (token) {\n      // Short\n      case 'z':\n      case 'zz':\n      case 'zzz':\n        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');\n      // Long\n      case 'zzzz':\n      default:\n        return 'GMT' + formatTimezone(timezoneOffset, ':');\n    }\n  },\n  // Seconds timestamp\n  t: function t(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timestamp = Math.floor(originalDate.getTime() / 1000);\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(timestamp, token.length);\n  },\n  // Milliseconds timestamp\n  T: function T(date, token, _localize, options) {\n    var originalDate = options._originalDate || date;\n    var timestamp = originalDate.getTime();\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(timestamp, token.length);\n  }\n};\nfunction formatTimezoneShort(offset, dirtyDelimiter) {\n  var sign = offset > 0 ? '-' : '+';\n  var absOffset = Math.abs(offset);\n  var hours = Math.floor(absOffset / 60);\n  var minutes = absOffset % 60;\n  if (minutes === 0) {\n    return sign + String(hours);\n  }\n  var delimiter = dirtyDelimiter || '';\n  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(minutes, 2);\n}\nfunction formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {\n  if (offset % 60 === 0) {\n    var sign = offset > 0 ? '-' : '+';\n    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Math.abs(offset) / 60, 2);\n  }\n  return formatTimezone(offset, dirtyDelimiter);\n}\nfunction formatTimezone(offset, dirtyDelimiter) {\n  var delimiter = dirtyDelimiter || '';\n  var sign = offset > 0 ? '-' : '+';\n  var absOffset = Math.abs(offset);\n  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Math.floor(absOffset / 60), 2);\n  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(absOffset % 60, 2);\n  return sign + hours + delimiter + minutes;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/format/formatters/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
      /*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ \"./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js\");\n\n/*\n * |     | Unit                           |     | Unit                           |\n * |-----|--------------------------------|-----|--------------------------------|\n * |  a  | AM, PM                         |  A* |                                |\n * |  d  | Day of month                   |  D  |                                |\n * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |\n * |  m  | Minute                         |  M  | Month                          |\n * |  s  | Second                         |  S  | Fraction of second             |\n * |  y  | Year (abs)                     |  Y  |                                |\n *\n * Letters marked by * are not implemented but reserved by Unicode standard.\n */\nvar formatters = {\n  // Year\n  y: function y(date, token) {\n    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens\n    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |\n    // |----------|-------|----|-------|-------|-------|\n    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |\n    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |\n    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |\n    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |\n    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |\n\n    var signedYear = date.getUTCFullYear();\n    // Returns 1 for 1 BC (which is year 0 in JavaScript)\n    var year = signedYear > 0 ? signedYear : 1 - signedYear;\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(token === 'yy' ? year % 100 : year, token.length);\n  },\n  // Month\n  M: function M(date, token) {\n    var month = date.getUTCMonth();\n    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(month + 1, 2);\n  },\n  // Day of the month\n  d: function d(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCDate(), token.length);\n  },\n  // AM or PM\n  a: function a(date, token) {\n    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';\n    switch (token) {\n      case 'a':\n      case 'aa':\n        return dayPeriodEnumValue.toUpperCase();\n      case 'aaa':\n        return dayPeriodEnumValue;\n      case 'aaaaa':\n        return dayPeriodEnumValue[0];\n      case 'aaaa':\n      default:\n        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';\n    }\n  },\n  // Hour [1-12]\n  h: function h(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCHours() % 12 || 12, token.length);\n  },\n  // Hour [0-23]\n  H: function H(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCHours(), token.length);\n  },\n  // Minute\n  m: function m(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCMinutes(), token.length);\n  },\n  // Second\n  s: function s(date, token) {\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date.getUTCSeconds(), token.length);\n  },\n  // Fraction of second\n  S: function S(date, token) {\n    var numberOfDigits = token.length;\n    var milliseconds = date.getUTCMilliseconds();\n    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));\n    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fractionalSeconds, token.length);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar dateLongFormatter = function dateLongFormatter(pattern, formatLong) {\n  switch (pattern) {\n    case 'P':\n      return formatLong.date({\n        width: 'short'\n      });\n    case 'PP':\n      return formatLong.date({\n        width: 'medium'\n      });\n    case 'PPP':\n      return formatLong.date({\n        width: 'long'\n      });\n    case 'PPPP':\n    default:\n      return formatLong.date({\n        width: 'full'\n      });\n  }\n};\nvar timeLongFormatter = function timeLongFormatter(pattern, formatLong) {\n  switch (pattern) {\n    case 'p':\n      return formatLong.time({\n        width: 'short'\n      });\n    case 'pp':\n      return formatLong.time({\n        width: 'medium'\n      });\n    case 'ppp':\n      return formatLong.time({\n        width: 'long'\n      });\n    case 'pppp':\n    default:\n      return formatLong.time({\n        width: 'full'\n      });\n  }\n};\nvar dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {\n  var matchResult = pattern.match(/(P+)(p+)?/) || [];\n  var datePattern = matchResult[1];\n  var timePattern = matchResult[2];\n  if (!timePattern) {\n    return dateLongFormatter(pattern, formatLong);\n  }\n  var dateTimeFormat;\n  switch (datePattern) {\n    case 'P':\n      dateTimeFormat = formatLong.dateTime({\n        width: 'short'\n      });\n      break;\n    case 'PP':\n      dateTimeFormat = formatLong.dateTime({\n        width: 'medium'\n      });\n      break;\n    case 'PPP':\n      dateTimeFormat = formatLong.dateTime({\n        width: 'long'\n      });\n      break;\n    case 'PPPP':\n    default:\n      dateTimeFormat = formatLong.dateTime({\n        width: 'full'\n      });\n      break;\n  }\n  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));\n};\nvar longFormatters = {\n  p: timeLongFormatter,\n  P: dateTimeLongFormatter\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/format/longFormatters/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));\n  utcDate.setUTCFullYear(date.getFullYear());\n  return date.getTime() - utcDate.getTime();\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\nvar MILLISECONDS_IN_DAY = 86400000;\nfunction getUTCDayOfYear(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var timestamp = date.getTime();\n  date.setUTCMonth(0, 1);\n  date.setUTCHours(0, 0, 0, 0);\n  var startOfYearTimestamp = date.getTime();\n  var difference = timestamp - startOfYearTimestamp;\n  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");\n/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n\nvar MILLISECONDS_IN_WEEK = 604800000;\nfunction getUTCISOWeek(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a week is not constant\n  // (e.g. it\'s different in the week of the daylight saving time clock shift)\n  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");\n\n\n\nfunction getUTCISOWeekYear(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var year = date.getUTCFullYear();\n  var fourthOfJanuaryOfNextYear = new Date(0);\n  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);\n  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);\n  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);\n  var fourthOfJanuaryOfThisYear = new Date(0);\n  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);\n  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);\n  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);\n  if (date.getTime() >= startOfNextYear.getTime()) {\n    return year + 1;\n  } else if (date.getTime() >= startOfThisYear.getTime()) {\n    return year;\n  } else {\n    return year - 1;\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");\n/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n\nvar MILLISECONDS_IN_WEEK = 604800000;\nfunction getUTCWeek(dirtyDate, options) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a week is not constant\n  // (e.g. it\'s different in the week of the daylight saving time clock shift)\n  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/getUTCWeek/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");\n/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");\n\n\n\n\n\nfunction getUTCWeekYear(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var year = date.getUTCFullYear();\n  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();\n  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);\n\n  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN\n  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {\n    throw new RangeError(\'firstWeekContainsDate must be between 1 and 7 inclusively\');\n  }\n  var firstWeekOfNextYear = new Date(0);\n  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);\n  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);\n  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);\n  var firstWeekOfThisYear = new Date(0);\n  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);\n  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);\n  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);\n  if (date.getTime() >= startOfNextYear.getTime()) {\n    return year + 1;\n  } else if (date.getTime() >= startOfThisYear.getTime()) {\n    return year;\n  } else {\n    return year - 1;\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),\n/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),\n/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)\n/* harmony export */ });\nvar protectedDayOfYearTokens = [\'D\', \'DD\'];\nvar protectedWeekYearTokens = [\'YY\', \'YYYY\'];\nfunction isProtectedDayOfYearToken(token) {\n  return protectedDayOfYearTokens.indexOf(token) !== -1;\n}\nfunction isProtectedWeekYearToken(token) {\n  return protectedWeekYearTokens.indexOf(token) !== -1;\n}\nfunction throwProtectedError(token, format, input) {\n  if (token === \'YYYY\') {\n    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));\n  } else if (token === \'YY\') {\n    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));\n  } else if (token === \'D\') {\n    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));\n  } else if (token === \'DD\') {\n    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/protectedTokens/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\nfunction startOfUTCISOWeek(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var weekStartsOn = 1;\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var day = date.getUTCDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setUTCDate(date.getUTCDate() - diff);\n  date.setUTCHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)\n/* harmony export */ });\n/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");\n/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\nfunction startOfUTCISOWeekYear(dirtyDate) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var fourthOfJanuary = new Date(0);\n  fourthOfJanuary.setUTCFullYear(year, 0, 4);\n  fourthOfJanuary.setUTCHours(0, 0, 0, 0);\n  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);\n  return date;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");\n\n\n\n\nfunction startOfUTCWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError(\'weekStartsOn must be between 0 and 6 inclusively\');\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);\n  var day = date.getUTCDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setUTCDate(date.getUTCDate() - diff);\n  date.setUTCHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)\n/* harmony export */ });\n/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");\n/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");\n\n\n\n\n\nfunction startOfUTCWeekYear(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);\n  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);\n  var firstWeek = new Date(0);\n  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);\n  firstWeek.setUTCHours(0, 0, 0, 0);\n  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);\n  return date;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ addMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n/**\n * @name addMilliseconds\n * @category Millisecond Helpers\n * @summary Add the specified number of milliseconds to the given date.\n *\n * @description\n * Add the specified number of milliseconds to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the milliseconds added\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Add 750 milliseconds to 10 July 2014 12:45:30.000:\n * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)\n * //=> Thu Jul 10 2014 12:45:30.750\n */\nfunction addMilliseconds(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);\n  return new Date(timestamp + amount);\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/addMilliseconds/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/compareAsc/index.js":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/compareAsc/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/constants/index.js":
      /*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * Days in 1 week.\n *\n * @name daysInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar daysInWeek = 7;\n\n/**\n * Days in 1 year\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n *\n * @name daysInYear\n * @constant\n * @type {number}\n * @default\n */\nvar daysInYear = 365.2425;\n\n/**\n * Maximum allowed time.\n *\n * @name maxTime\n * @constant\n * @type {number}\n * @default\n */\nvar maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * Milliseconds in 1 minute\n *\n * @name millisecondsInMinute\n * @constant\n * @type {number}\n * @default\n */\nvar millisecondsInMinute = 60000;\n\n/**\n * Milliseconds in 1 hour\n *\n * @name millisecondsInHour\n * @constant\n * @type {number}\n * @default\n */\nvar millisecondsInHour = 3600000;\n\n/**\n * Milliseconds in 1 second\n *\n * @name millisecondsInSecond\n * @constant\n * @type {number}\n * @default\n */\nvar millisecondsInSecond = 1000;\n\n/**\n * Minimum allowed time.\n *\n * @name minTime\n * @constant\n * @type {number}\n * @default\n */\nvar minTime = -maxTime;\n\n/**\n * Minutes in 1 hour\n *\n * @name minutesInHour\n * @constant\n * @type {number}\n * @default\n */\nvar minutesInHour = 60;\n\n/**\n * Months in 1 quarter\n *\n * @name monthsInQuarter\n * @constant\n * @type {number}\n * @default\n */\nvar monthsInQuarter = 3;\n\n/**\n * Months in 1 year\n *\n * @name monthsInYear\n * @constant\n * @type {number}\n * @default\n */\nvar monthsInYear = 12;\n\n/**\n * Quarters in 1 year\n *\n * @name quartersInYear\n * @constant\n * @type {number}\n * @default\n */\nvar quartersInYear = 4;\n\n/**\n * Seconds in 1 hour\n *\n * @name secondsInHour\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInHour = 3600;\n\n/**\n * Seconds in 1 minute\n *\n * @name secondsInMinute\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInMinute = 60;\n\n/**\n * Seconds in 1 day\n *\n * @name secondsInDay\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInDay = secondsInHour * 24;\n\n/**\n * Seconds in 1 week\n *\n * @name secondsInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInWeek = secondsInDay * 7;\n\n/**\n * Seconds in 1 year\n *\n * @name secondsInYear\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInYear = secondsInDay * daysInYear;\n\n/**\n * Seconds in 1 month\n *\n * @name secondsInMonth\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInMonth = secondsInYear / 12;\n\n/**\n * Seconds in 1 quarter\n *\n * @name secondsInQuarter\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInQuarter = secondsInMonth * 3;\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/constants/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/format/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ format)\n/* harmony export */ });\n/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ \"./node_modules/date-fns/esm/isValid/index.js\");\n/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ \"./node_modules/date-fns/esm/subMilliseconds/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ \"./node_modules/date-fns/esm/_lib/format/formatters/index.js\");\n/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ \"./node_modules/date-fns/esm/_lib/format/longFormatters/index.js\");\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js\");\n/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ \"./node_modules/date-fns/esm/_lib/protectedTokens/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ \"./node_modules/date-fns/esm/_lib/defaultLocale/index.js\");\n\n\n\n\n\n\n\n\n\n\n // This RegExp consists of three parts separated by `|`:\n// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token\n//   (one of the certain letters followed by `o`)\n// - (\\w)\\1* matches any sequences of the same letter\n// - '' matches two quote characters in a row\n// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),\n//   except a single quote symbol, which ends the sequence.\n//   Two quote characters do not end the sequence.\n//   If there is no matching single quote\n//   then the sequence will continue until the end of the string.\n// - . matches any single character unmatched by previous parts of the RegExps\nvar formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\\w)\\1*|''|'(''|[^'])+('|$)|./g;\n\n// This RegExp catches symbols escaped by quotes, and also\n// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`\nvar longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;\nvar escapedStringRegExp = /^'([^]*?)'?$/;\nvar doubleQuoteRegExp = /''/g;\nvar unescapedLatinCharacterRegExp = /[a-zA-Z]/;\n\n/**\n * @name format\n * @category Common Helpers\n * @summary Format the date.\n *\n * @description\n * Return the formatted date string in the given format. The result may vary by locale.\n *\n * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.\n * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * The characters wrapped between two single quotes characters (') are escaped.\n * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.\n * (see the last example)\n *\n * Format of the string is based on Unicode Technical Standard #35:\n * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table\n * with a few additions (see note 7 below the table).\n *\n * Accepted patterns:\n * | Unit                            | Pattern | Result examples                   | Notes |\n * |---------------------------------|---------|-----------------------------------|-------|\n * | Era                             | G..GGG  | AD, BC                            |       |\n * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |\n * |                                 | GGGGG   | A, B                              |       |\n * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |\n * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |\n * |                                 | yy      | 44, 01, 00, 17                    | 5     |\n * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |\n * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |\n * |                                 | yyyyy   | ...                               | 3,5   |\n * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |\n * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |\n * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |\n * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |\n * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |\n * |                                 | YYYYY   | ...                               | 3,5   |\n * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |\n * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |\n * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |\n * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |\n * |                                 | RRRRR   | ...                               | 3,5,7 |\n * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |\n * |                                 | uu      | -43, 01, 1900, 2017               | 5     |\n * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |\n * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |\n * |                                 | uuuuu   | ...                               | 3,5   |\n * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |\n * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |\n * |                                 | QQ      | 01, 02, 03, 04                    |       |\n * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |\n * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |\n * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |\n * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |\n * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |\n * |                                 | qq      | 01, 02, 03, 04                    |       |\n * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |\n * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |\n * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |\n * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |\n * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |\n * |                                 | MM      | 01, 02, ..., 12                   |       |\n * |                                 | MMM     | Jan, Feb, ..., Dec                |       |\n * |                                 | MMMM    | January, February, ..., December  | 2     |\n * |                                 | MMMMM   | J, F, ..., D                      |       |\n * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |\n * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |\n * |                                 | LL      | 01, 02, ..., 12                   |       |\n * |                                 | LLL     | Jan, Feb, ..., Dec                |       |\n * |                                 | LLLL    | January, February, ..., December  | 2     |\n * |                                 | LLLLL   | J, F, ..., D                      |       |\n * | Local week of year              | w       | 1, 2, ..., 53                     |       |\n * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |\n * |                                 | ww      | 01, 02, ..., 53                   |       |\n * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |\n * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |\n * |                                 | II      | 01, 02, ..., 53                   | 7     |\n * | Day of month                    | d       | 1, 2, ..., 31                     |       |\n * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |\n * |                                 | dd      | 01, 02, ..., 31                   |       |\n * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |\n * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |\n * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |\n * |                                 | DDD     | 001, 002, ..., 365, 366           |       |\n * |                                 | DDDD    | ...                               | 3     |\n * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |\n * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |\n * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |\n * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |\n * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |\n * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |\n * |                                 | ii      | 01, 02, ..., 07                   | 7     |\n * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |\n * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |\n * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |\n * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |\n * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |\n * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |\n * |                                 | ee      | 02, 03, ..., 01                   |       |\n * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |\n * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |\n * |                                 | eeeee   | M, T, W, T, F, S, S               |       |\n * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |\n * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |\n * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |\n * |                                 | cc      | 02, 03, ..., 01                   |       |\n * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |\n * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |\n * |                                 | ccccc   | M, T, W, T, F, S, S               |       |\n * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |\n * | AM, PM                          | a..aa   | AM, PM                            |       |\n * |                                 | aaa     | am, pm                            |       |\n * |                                 | aaaa    | a.m., p.m.                        | 2     |\n * |                                 | aaaaa   | a, p                              |       |\n * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |\n * |                                 | bbb     | am, pm, noon, midnight            |       |\n * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |\n * |                                 | bbbbb   | a, p, n, mi                       |       |\n * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |\n * |                                 | BBBB    | at night, in the morning, ...     | 2     |\n * |                                 | BBBBB   | at night, in the morning, ...     |       |\n * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |\n * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |\n * |                                 | hh      | 01, 02, ..., 11, 12               |       |\n * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |\n * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |\n * |                                 | HH      | 00, 01, 02, ..., 23               |       |\n * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |\n * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |\n * |                                 | KK      | 01, 02, ..., 11, 00               |       |\n * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |\n * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |\n * |                                 | kk      | 24, 01, 02, ..., 23               |       |\n * | Minute                          | m       | 0, 1, ..., 59                     |       |\n * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |\n * |                                 | mm      | 00, 01, ..., 59                   |       |\n * | Second                          | s       | 0, 1, ..., 59                     |       |\n * |                                 | so      | 0th, 1st, ..., 59th               | 7     |\n * |                                 | ss      | 00, 01, ..., 59                   |       |\n * | Fraction of second              | S       | 0, 1, ..., 9                      |       |\n * |                                 | SS      | 00, 01, ..., 99                   |       |\n * |                                 | SSS     | 000, 001, ..., 999                |       |\n * |                                 | SSSS    | ...                               | 3     |\n * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |\n * |                                 | XX      | -0800, +0530, Z                   |       |\n * |                                 | XXX     | -08:00, +05:30, Z                 |       |\n * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |\n * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |\n * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |\n * |                                 | xx      | -0800, +0530, +0000               |       |\n * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |\n * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |\n * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |\n * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |\n * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |\n * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |\n * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |\n * | Seconds timestamp               | t       | 512969520                         | 7     |\n * |                                 | tt      | ...                               | 3,7   |\n * | Milliseconds timestamp          | T       | 512969520900                      | 7     |\n * |                                 | TT      | ...                               | 3,7   |\n * | Long localized date             | P       | 04/29/1453                        | 7     |\n * |                                 | PP      | Apr 29, 1453                      | 7     |\n * |                                 | PPP     | April 29th, 1453                  | 7     |\n * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |\n * | Long localized time             | p       | 12:00 AM                          | 7     |\n * |                                 | pp      | 12:00:00 AM                       | 7     |\n * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |\n * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |\n * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |\n * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |\n * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |\n * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |\n * Notes:\n * 1. \"Formatting\" units (e.g. formatting quarter) in the default en-US locale\n *    are the same as \"stand-alone\" units, but are different in some languages.\n *    \"Formatting\" units are declined according to the rules of the language\n *    in the context of a date. \"Stand-alone\" units are always nominative singular:\n *\n *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`\n *\n *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`\n *\n * 2. Any sequence of the identical letters is a pattern, unless it is escaped by\n *    the single quote characters (see below).\n *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)\n *    the output will be the same as default pattern for this unit, usually\n *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units\n *    are marked with \"2\" in the last column of the table.\n *\n *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`\n *\n *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`\n *\n * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).\n *    The output will be padded with zeros to match the length of the pattern.\n *\n *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`\n *\n * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.\n *    These tokens represent the shortest form of the quarter.\n *\n * 5. The main difference between `y` and `u` patterns are B.C. years:\n *\n *    | Year | `y` | `u` |\n *    |------|-----|-----|\n *    | AC 1 |   1 |   1 |\n *    | BC 1 |   1 |   0 |\n *    | BC 2 |   2 |  -1 |\n *\n *    Also `yy` always returns the last two digits of a year,\n *    while `uu` pads single digit years to 2 characters and returns other years unchanged:\n *\n *    | Year | `yy` | `uu` |\n *    |------|------|------|\n *    | 1    |   01 |   01 |\n *    | 14   |   14 |   14 |\n *    | 376  |   76 |  376 |\n *    | 1453 |   53 | 1453 |\n *\n *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),\n *    except local week-numbering years are dependent on `options.weekStartsOn`\n *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}\n *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).\n *\n * 6. Specific non-location timezones are currently unavailable in `date-fns`,\n *    so right now these tokens fall back to GMT timezones.\n *\n * 7. These patterns are not in the Unicode Technical Standard #35:\n *    - `i`: ISO day of week\n *    - `I`: ISO week of year\n *    - `R`: ISO week-numbering year\n *    - `t`: seconds timestamp\n *    - `T`: milliseconds timestamp\n *    - `o`: ordinal number modifier\n *    - `P`: long localized date\n *    - `p`: long localized time\n *\n * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.\n *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.\n *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n *\n * @param {Date|Number} date - the original date\n * @param {String} format - the string of tokens\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is\n * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;\n *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;\n *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @returns {String} the formatted date string\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `date` must not be Invalid Date\n * @throws {RangeError} `options.locale` must contain `localize` property\n * @throws {RangeError} `options.locale` must contain `formatLong` property\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7\n * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\n * @throws {RangeError} format string contains an unescaped latin alphabet character\n *\n * @example\n * // Represent 11 February 2014 in middle-endian format:\n * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')\n * //=> '02/11/2014'\n *\n * @example\n * // Represent 2 July 2014 in Esperanto:\n * import { eoLocale } from 'date-fns/locale/eo'\n * const result = format(new Date(2014, 6, 2), \"do 'de' MMMM yyyy\", {\n *   locale: eoLocale\n * })\n * //=> '2-a de julio 2014'\n *\n * @example\n * // Escape string by single quote characters:\n * const result = format(new Date(2014, 6, 2, 15), \"h 'o''clock'\")\n * //=> \"3 o'clock\"\n */\n\nfunction format(dirtyDate, dirtyFormatStr, options) {\n  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var formatStr = String(dirtyFormatStr);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);\n\n  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN\n  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {\n    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');\n  }\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n  if (!locale.localize) {\n    throw new RangeError('locale must contain localize property');\n  }\n  if (!locale.formatLong) {\n    throw new RangeError('locale must contain formatLong property');\n  }\n  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dirtyDate);\n  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(originalDate)) {\n    throw new RangeError('Invalid time value');\n  }\n\n  // Convert the date in system timezone to the same date in UTC+00:00 timezone.\n  // This ensures that when UTC functions will be implemented, locales will be compatible with them.\n  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376\n  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(originalDate);\n  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(originalDate, timezoneOffset);\n  var formatterOptions = {\n    firstWeekContainsDate: firstWeekContainsDate,\n    weekStartsOn: weekStartsOn,\n    locale: locale,\n    _originalDate: originalDate\n  };\n  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {\n    var firstCharacter = substring[0];\n    if (firstCharacter === 'p' || firstCharacter === 'P') {\n      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"][firstCharacter];\n      return longFormatter(substring, locale.formatLong);\n    }\n    return substring;\n  }).join('').match(formattingTokensRegExp).map(function (substring) {\n    // Replace two single quote characters with one single quote character\n    if (substring === \"''\") {\n      return \"'\";\n    }\n    var firstCharacter = substring[0];\n    if (firstCharacter === \"'\") {\n      return cleanEscapedString(substring);\n    }\n    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"][firstCharacter];\n    if (formatter) {\n      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {\n        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));\n      }\n      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {\n        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));\n      }\n      return formatter(utcDate, substring, locale.localize, formatterOptions);\n    }\n    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {\n      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');\n    }\n    return substring;\n  }).join('');\n  return result;\n}\nfunction cleanEscapedString(input) {\n  var matched = input.match(escapedStringRegExp);\n  if (!matched) {\n    return input;\n  }\n  return matched[1].replace(doubleQuoteRegExp, \"'\");\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/format/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/isDate/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ isDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n/**\n * @name isDate\n * @category Common Helpers\n * @summary Is the given value a date?\n *\n * @description\n * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.\n *\n * @param {*} value - the value to check\n * @returns {boolean} true if the given value is a date\n * @throws {TypeError} 1 arguments required\n *\n * @example\n * // For a valid date:\n * const result = isDate(new Date())\n * //=> true\n *\n * @example\n * // For an invalid date:\n * const result = isDate(new Date(NaN))\n * //=> true\n *\n * @example\n * // For some value:\n * const result = isDate(\'2014-02-31\')\n * //=> false\n *\n * @example\n * // For an object:\n * const result = isDate({})\n * //=> false\n */\nfunction isDate(value) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);\n  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === \'object\' && Object.prototype.toString.call(value) === \'[object Date]\';\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/isDate/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/isValid/index.js":
      /*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ isValid)\n/* harmony export */ });\n/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n/**\n * @name isValid\n * @category Common Helpers\n * @summary Is the given date valid?\n *\n * @description\n * Returns false if argument is Invalid Date and true otherwise.\n * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}\n * Invalid Date is a Date, whose time value is NaN.\n *\n * Time value of Date: http://es5.github.io/#x15.9.1.1\n *\n * @param {*} date - the date to check\n * @returns {Boolean} the date is valid\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // For the valid date:\n * const result = isValid(new Date(2014, 1, 31))\n * //=> true\n *\n * @example\n * // For the value, convertable into a date:\n * const result = isValid(1393804800000)\n * //=> true\n *\n * @example\n * // For the invalid date:\n * const result = isValid(new Date(\'\'))\n * //=> false\n */\nfunction isValid(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== \'number\') {\n    return false;\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);\n  return !isNaN(Number(date));\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/isValid/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)\n/* harmony export */ });\nfunction buildFormatLongFn(args) {\n  return function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // TODO: Remove String()\n    var width = options.width ? String(options.width) : args.defaultWidth;\n    var format = args.formats[width] || args.formats[args.defaultWidth];\n    return format;\n  };\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
      /*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildLocalizeFn)\n/* harmony export */ });\nfunction buildLocalizeFn(args) {\n  return function (dirtyIndex, options) {\n    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';\n    var valuesArray;\n    if (context === 'formatting' && args.formattingValues) {\n      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;\n      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;\n      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];\n    } else {\n      var _defaultWidth = args.defaultWidth;\n      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;\n      valuesArray = args.values[_width] || args.values[_defaultWidth];\n    }\n    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;\n    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!\n    return valuesArray[index];\n  };\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildMatchFn)\n/* harmony export */ });\nfunction buildMatchFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var width = options.width;\n    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];\n    var matchResult = string.match(matchPattern);\n    if (!matchResult) {\n      return null;\n    }\n    var matchedString = matchResult[0];\n    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];\n    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    }) : findKey(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    });\n    var value;\n    value = args.valueCallback ? args.valueCallback(key) : key;\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\nfunction findKey(object, predicate) {\n  for (var key in object) {\n    if (object.hasOwnProperty(key) && predicate(object[key])) {\n      return key;\n    }\n  }\n  return undefined;\n}\nfunction findIndex(array, predicate) {\n  for (var key = 0; key < array.length; key++) {\n    if (predicate(array[key])) {\n      return key;\n    }\n  }\n  return undefined;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)\n/* harmony export */ });\nfunction buildMatchPatternFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var matchResult = string.match(args.matchPattern);\n    if (!matchResult) return null;\n    var matchedString = matchResult[0];\n    var parseResult = string.match(args.parsePattern);\n    if (!parseResult) return null;\n    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: 'less than a second',\n    other: 'less than {{count}} seconds'\n  },\n  xSeconds: {\n    one: '1 second',\n    other: '{{count}} seconds'\n  },\n  halfAMinute: 'half a minute',\n  lessThanXMinutes: {\n    one: 'less than a minute',\n    other: 'less than {{count}} minutes'\n  },\n  xMinutes: {\n    one: '1 minute',\n    other: '{{count}} minutes'\n  },\n  aboutXHours: {\n    one: 'about 1 hour',\n    other: 'about {{count}} hours'\n  },\n  xHours: {\n    one: '1 hour',\n    other: '{{count}} hours'\n  },\n  xDays: {\n    one: '1 day',\n    other: '{{count}} days'\n  },\n  aboutXWeeks: {\n    one: 'about 1 week',\n    other: 'about {{count}} weeks'\n  },\n  xWeeks: {\n    one: '1 week',\n    other: '{{count}} weeks'\n  },\n  aboutXMonths: {\n    one: 'about 1 month',\n    other: 'about {{count}} months'\n  },\n  xMonths: {\n    one: '1 month',\n    other: '{{count}} months'\n  },\n  aboutXYears: {\n    one: 'about 1 year',\n    other: 'about {{count}} years'\n  },\n  xYears: {\n    one: '1 year',\n    other: '{{count}} years'\n  },\n  overXYears: {\n    one: 'over 1 year',\n    other: 'over {{count}} years'\n  },\n  almostXYears: {\n    one: 'almost 1 year',\n    other: 'almost {{count}} years'\n  }\n};\nvar formatDistance = function formatDistance(token, count, options) {\n  var result;\n  var tokenValue = formatDistanceLocale[token];\n  if (typeof tokenValue === 'string') {\n    result = tokenValue;\n  } else if (count === 1) {\n    result = tokenValue.one;\n  } else {\n    result = tokenValue.other.replace('{{count}}', count.toString());\n  }\n  if (options !== null && options !== void 0 && options.addSuffix) {\n    if (options.comparison && options.comparison > 0) {\n      return 'in ' + result;\n    } else {\n      return result + ' ago';\n    }\n  }\n  return result;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js\");\n\nvar dateFormats = {\n  full: 'EEEE, MMMM do, y',\n  long: 'MMMM do, y',\n  medium: 'MMM d, y',\n  short: 'MM/dd/yyyy'\n};\nvar timeFormats = {\n  full: 'h:mm:ss a zzzz',\n  long: 'h:mm:ss a z',\n  medium: 'h:mm:ss a',\n  short: 'h:mm a'\n};\nvar dateTimeFormats = {\n  full: \"{{date}} 'at' {{time}}\",\n  long: \"{{date}} 'at' {{time}}\",\n  medium: '{{date}}, {{time}}',\n  short: '{{date}}, {{time}}'\n};\nvar formatLong = {\n  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateFormats,\n    defaultWidth: 'full'\n  }),\n  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: timeFormats,\n    defaultWidth: 'full'\n  }),\n  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateTimeFormats,\n    defaultWidth: 'full'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatRelativeLocale = {\n  lastWeek: \"'last' eeee 'at' p\",\n  yesterday: \"'yesterday at' p\",\n  today: \"'today at' p\",\n  tomorrow: \"'tomorrow at' p\",\n  nextWeek: \"eeee 'at' p\",\n  other: 'P'\n};\nvar formatRelative = function formatRelative(token, _date, _baseDate, _options) {\n  return formatRelativeLocale[token];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js\");\n\nvar eraValues = {\n  narrow: ['B', 'A'],\n  abbreviated: ['BC', 'AD'],\n  wide: ['Before Christ', 'Anno Domini']\n};\nvar quarterValues = {\n  narrow: ['1', '2', '3', '4'],\n  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],\n  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']\n};\n\n// Note: in English, the names of days of the week and months are capitalized.\n// If you are making a new locale based on this one, check if the same is true for the language you're working on.\n// Generally, formatted dates should look like they are in the middle of a sentence,\n// e.g. in Spanish language the weekdays and months should be in the lowercase.\nvar monthValues = {\n  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],\n  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n};\nvar dayValues = {\n  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],\n  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n};\nvar dayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  }\n};\nvar formattingDayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  }\n};\nvar ordinalNumber = function ordinalNumber(dirtyNumber, _options) {\n  var number = Number(dirtyNumber);\n\n  // If ordinal numbers depend on context, for example,\n  // if they are different for different grammatical genders,\n  // use `options.unit`.\n  //\n  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',\n  // 'day', 'hour', 'minute', 'second'.\n\n  var rem100 = number % 100;\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + 'st';\n      case 2:\n        return number + 'nd';\n      case 3:\n        return number + 'rd';\n    }\n  }\n  return number + 'th';\n};\nvar localize = {\n  ordinalNumber: ordinalNumber,\n  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: eraValues,\n    defaultWidth: 'wide'\n  }),\n  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: quarterValues,\n    defaultWidth: 'wide',\n    argumentCallback: function argumentCallback(quarter) {\n      return quarter - 1;\n    }\n  }),\n  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: monthValues,\n    defaultWidth: 'wide'\n  }),\n  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayValues,\n    defaultWidth: 'wide'\n  }),\n  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayPeriodValues,\n    defaultWidth: 'wide',\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: 'wide'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js\");\n/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js\");\n\n\nvar matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;\nvar parseOrdinalNumberPattern = /\\d+/i;\nvar matchEraPatterns = {\n  narrow: /^(b|a)/i,\n  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,\n  wide: /^(before christ|before common era|anno domini|common era)/i\n};\nvar parseEraPatterns = {\n  any: [/^b/i, /^(a|c)/i]\n};\nvar matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^q[1234]/i,\n  wide: /^[1234](th|st|nd|rd)? quarter/i\n};\nvar parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i]\n};\nvar matchMonthPatterns = {\n  narrow: /^[jfmasond]/i,\n  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,\n  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i\n};\nvar parseMonthPatterns = {\n  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],\n  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]\n};\nvar matchDayPatterns = {\n  narrow: /^[smtwf]/i,\n  short: /^(su|mo|tu|we|th|fr|sa)/i,\n  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,\n  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i\n};\nvar parseDayPatterns = {\n  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],\n  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]\n};\nvar matchDayPeriodPatterns = {\n  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,\n  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i\n};\nvar parseDayPeriodPatterns = {\n  any: {\n    am: /^a/i,\n    pm: /^p/i,\n    midnight: /^mi/i,\n    noon: /^no/i,\n    morning: /morning/i,\n    afternoon: /afternoon/i,\n    evening: /evening/i,\n    night: /night/i\n  }\n};\nvar match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: function valueCallback(value) {\n      return parseInt(value, 10);\n    }\n  }),\n  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: 'any'\n  }),\n  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: 'any',\n    valueCallback: function valueCallback(index) {\n      return index + 1;\n    }\n  }),\n  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: 'any'\n  }),\n  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: 'any'\n  }),\n  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: 'any',\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: 'any'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
      /*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");\n/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");\n/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");\n/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");\n/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");\n\n\n\n\n\n/**\n * @type {Locale}\n * @category Locales\n * @summary English locale (United States).\n * @language English\n * @iso-639-2 eng\n * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}\n * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}\n */\nvar locale = {\n  code: \'en-US\',\n  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],\n  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],\n  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],\n  options: {\n    weekStartsOn: 0 /* Sunday */,\n    firstWeekContainsDate: 1\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/locale/en-US/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/parseISO/index.js":
      /*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseISO)\n/* harmony export */ });\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ \"./node_modules/date-fns/esm/constants/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n\n\n\n/**\n * @name parseISO\n * @category Common Helpers\n * @summary Parse ISO string\n *\n * @description\n * Parse the given string in ISO 8601 format and return an instance of Date.\n *\n * Function accepts complete ISO 8601 formats as well as partial implementations.\n * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601\n *\n * If the argument isn't a string, the function cannot parse the string or\n * the values are invalid, it returns Invalid Date.\n *\n * @param {String} argument - the value to convert\n * @param {Object} [options] - an object with options.\n * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2\n *\n * @example\n * // Convert string '2014-02-11T11:30:30' to date:\n * const result = parseISO('2014-02-11T11:30:30')\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert string '+02014101' to date,\n * // if the additional number of digits in the extended year format is 1:\n * const result = parseISO('+02014101', { additionalDigits: 1 })\n * //=> Fri Apr 11 2014 00:00:00\n */\nfunction parseISO(argument, options) {\n  var _options$additionalDi;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);\n  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {\n    throw new RangeError('additionalDigits must be 0, 1 or 2');\n  }\n  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {\n    return new Date(NaN);\n  }\n  var dateStrings = splitDateString(argument);\n  var date;\n  if (dateStrings.date) {\n    var parseYearResult = parseYear(dateStrings.date, additionalDigits);\n    date = parseDate(parseYearResult.restDateString, parseYearResult.year);\n  }\n  if (!date || isNaN(date.getTime())) {\n    return new Date(NaN);\n  }\n  var timestamp = date.getTime();\n  var time = 0;\n  var offset;\n  if (dateStrings.time) {\n    time = parseTime(dateStrings.time);\n    if (isNaN(time)) {\n      return new Date(NaN);\n    }\n  }\n  if (dateStrings.timezone) {\n    offset = parseTimezone(dateStrings.timezone);\n    if (isNaN(offset)) {\n      return new Date(NaN);\n    }\n  } else {\n    var dirtyDate = new Date(timestamp + time);\n    // js parsed string assuming it's in UTC timezone\n    // but we need it to be parsed in our timezone\n    // so we use utc values to build date in our timezone.\n    // Year values from 0 to 99 map to the years 1900 to 1999\n    // so set year explicitly with setFullYear.\n    var result = new Date(0);\n    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());\n    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());\n    return result;\n  }\n  return new Date(timestamp + time + offset);\n}\nvar patterns = {\n  dateTimeDelimiter: /[T ]/,\n  timeZoneDelimiter: /[Z ]/i,\n  timezone: /([Z+-].*)$/\n};\nvar dateRegex = /^-?(?:(\\d{3})|(\\d{2})(?:-?(\\d{2}))?|W(\\d{2})(?:-?(\\d{1}))?|)$/;\nvar timeRegex = /^(\\d{2}(?:[.,]\\d*)?)(?::?(\\d{2}(?:[.,]\\d*)?))?(?::?(\\d{2}(?:[.,]\\d*)?))?$/;\nvar timezoneRegex = /^([+-])(\\d{2})(?::?(\\d{2}))?$/;\nfunction splitDateString(dateString) {\n  var dateStrings = {};\n  var array = dateString.split(patterns.dateTimeDelimiter);\n  var timeString;\n\n  // The regex match should only return at maximum two array elements.\n  // [date], [time], or [date, time].\n  if (array.length > 2) {\n    return dateStrings;\n  }\n  if (/:/.test(array[0])) {\n    timeString = array[0];\n  } else {\n    dateStrings.date = array[0];\n    timeString = array[1];\n    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {\n      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];\n      timeString = dateString.substr(dateStrings.date.length, dateString.length);\n    }\n  }\n  if (timeString) {\n    var token = patterns.timezone.exec(timeString);\n    if (token) {\n      dateStrings.time = timeString.replace(token[1], '');\n      dateStrings.timezone = token[1];\n    } else {\n      dateStrings.time = timeString;\n    }\n  }\n  return dateStrings;\n}\nfunction parseYear(dateString, additionalDigits) {\n  var regex = new RegExp('^(?:(\\\\d{4}|[+-]\\\\d{' + (4 + additionalDigits) + '})|(\\\\d{2}|[+-]\\\\d{' + (2 + additionalDigits) + '})$)');\n  var captures = dateString.match(regex);\n  // Invalid ISO-formatted year\n  if (!captures) return {\n    year: NaN,\n    restDateString: ''\n  };\n  var year = captures[1] ? parseInt(captures[1]) : null;\n  var century = captures[2] ? parseInt(captures[2]) : null;\n\n  // either year or century is null, not both\n  return {\n    year: century === null ? year : century * 100,\n    restDateString: dateString.slice((captures[1] || captures[2]).length)\n  };\n}\nfunction parseDate(dateString, year) {\n  // Invalid ISO-formatted year\n  if (year === null) return new Date(NaN);\n  var captures = dateString.match(dateRegex);\n  // Invalid ISO-formatted string\n  if (!captures) return new Date(NaN);\n  var isWeekDate = !!captures[4];\n  var dayOfYear = parseDateUnit(captures[1]);\n  var month = parseDateUnit(captures[2]) - 1;\n  var day = parseDateUnit(captures[3]);\n  var week = parseDateUnit(captures[4]);\n  var dayOfWeek = parseDateUnit(captures[5]) - 1;\n  if (isWeekDate) {\n    if (!validateWeekDate(year, week, dayOfWeek)) {\n      return new Date(NaN);\n    }\n    return dayOfISOWeekYear(year, week, dayOfWeek);\n  } else {\n    var date = new Date(0);\n    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {\n      return new Date(NaN);\n    }\n    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));\n    return date;\n  }\n}\nfunction parseDateUnit(value) {\n  return value ? parseInt(value) : 1;\n}\nfunction parseTime(timeString) {\n  var captures = timeString.match(timeRegex);\n  if (!captures) return NaN; // Invalid ISO-formatted time\n\n  var hours = parseTimeUnit(captures[1]);\n  var minutes = parseTimeUnit(captures[2]);\n  var seconds = parseTimeUnit(captures[3]);\n  if (!validateTime(hours, minutes, seconds)) {\n    return NaN;\n  }\n  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;\n}\nfunction parseTimeUnit(value) {\n  return value && parseFloat(value.replace(',', '.')) || 0;\n}\nfunction parseTimezone(timezoneString) {\n  if (timezoneString === 'Z') return 0;\n  var captures = timezoneString.match(timezoneRegex);\n  if (!captures) return 0;\n  var sign = captures[1] === '+' ? -1 : 1;\n  var hours = parseInt(captures[2]);\n  var minutes = captures[3] && parseInt(captures[3]) || 0;\n  if (!validateTimezone(hours, minutes)) {\n    return NaN;\n  }\n  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);\n}\nfunction dayOfISOWeekYear(isoWeekYear, week, day) {\n  var date = new Date(0);\n  date.setUTCFullYear(isoWeekYear, 0, 4);\n  var fourthOfJanuaryDay = date.getUTCDay() || 7;\n  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;\n  date.setUTCDate(date.getUTCDate() + diff);\n  return date;\n}\n\n// Validation functions\n\n// February is null to handle the leap year (using ||)\nvar daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\nfunction isLeapYearIndex(year) {\n  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;\n}\nfunction validateDate(year, month, date) {\n  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));\n}\nfunction validateDayOfYearDate(year, dayOfYear) {\n  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);\n}\nfunction validateWeekDate(_year, week, day) {\n  return week >= 1 && week <= 53 && day >= 0 && day <= 6;\n}\nfunction validateTime(hours, minutes, seconds) {\n  if (hours === 24) {\n    return minutes === 0 && seconds === 0;\n  }\n  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;\n}\nfunction validateTimezone(_hours, minutes) {\n  return minutes >= 0 && minutes <= 59;\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/parseISO/index.js?"
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ subMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n\n\n\n/**\n * @name subMilliseconds\n * @category Millisecond Helpers\n * @summary Subtract the specified number of milliseconds from the given date.\n *\n * @description\n * Subtract the specified number of milliseconds from the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the milliseconds subtracted\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:\n * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)\n * //=> Thu Jul 10 2014 12:45:29.250\n */\nfunction subMilliseconds(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);\n  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/subMilliseconds/index.js?'
        )

        /***/
      },

    /***/ "./node_modules/date-fns/esm/toDate/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/date-fns/esm/toDate/index.js?"
        )

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?'
        )

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        )

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        )

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        )

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        )

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        )

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        )

        /***/
      },

    /***/ "./src/data/model/createProject.js":
      /*!*****************************************!*\
  !*** ./src/data/model/createProject.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _utils_CompleteTodoCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/CompleteTodoCounter */ "./src/utils/CompleteTodoCounter.js");\n/* harmony import */ var _utils_Sorter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Sorter */ "./src/utils/Sorter.js");\n/* harmony import */ var _utils_TodoMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TodoMatcher */ "./src/utils/TodoMatcher.js");\n\n\n\n\nfunction createProject(id, title, description, todos) {\n  const getCompletedTodosTotal = () => {\n    let completed = (0,_utils_CompleteTodoCounter__WEBPACK_IMPORTED_MODULE_0__["default"])().getTotal(todos);\n    let total = todos.length;\n    return `${completed}/${total}`;\n  };\n  const getId = () => {\n    return id;\n  };\n\n  const getTitle = () => {\n    return title;\n  };\n\n  const getDescription = () => {\n    return description;\n  };\n\n  const getTodos = () => {\n    if (todos.length > 1) {\n      (0,_utils_Sorter__WEBPACK_IMPORTED_MODULE_1__["default"])().sortByDate(todos);\n    }\n    return todos;\n  };\n\n  // For serializing\n  const getObject = () => {\n    return { id, title, description, todos };\n  };\n  const toJSON = () => {\n    return getObject();\n  };\n  const addTodo = (todo) => {\n    todos.push(todo);\n  };\n\n  const deleteTodo = (todo) => {\n    let indexMatch = (0,_utils_TodoMatcher__WEBPACK_IMPORTED_MODULE_2__.TodoMatcher)().findTodoByTitle(todo, todos);\n    if (indexMatch === null) return;\n    todos.splice(indexMatch, 1);\n  };\n\n  return {\n    toJSON,\n    getId,\n    getDescription,\n    getTitle,\n    getTodos,\n    setTitle(value) {\n      title = value;\n    },\n    setDescription(value) {\n      description = value;\n    },\n    addTodo,\n    deleteTodo,\n    getCompletedTodosTotal,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/data/model/createProject.js?'
        )

        /***/
      },

    /***/ "./src/data/model/createTodo.js":
      /*!**************************************!*\
  !*** ./src/data/model/createTodo.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _utils_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Formatter */ "./src/utils/Formatter.js");\n\n\nfunction createTodo(\n  title,\n  description,\n  date = "No date set",\n  completeState = false\n) {\n  const getObject = () => {\n    return {\n      title,\n      description,\n      date,\n      completeState,\n    };\n  };\n\n  const toJSON = () => {\n    return getObject();\n  };\n  return {\n    toJSON,\n    getTitle() {\n      return title;\n    },\n    getDescription() {\n      return description;\n    },\n    getDate() {\n      if (date === "No date set") return date;\n      return (0,_utils_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"])().formatDate(date);\n    },\n    getCompleteState() {\n      return completeState;\n    },\n    setTitle(value) {\n      title = value;\n    },\n    setDescription(value) {\n      description = value;\n    },\n    setDate(value) {\n      date = value;\n    },\n    updateCompleteState(boolean) {\n      completeState = boolean;\n    },\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/data/model/createTodo.js?'
        )

        /***/
      },

    /***/ "./src/data/repository/projectRepository.js":
      /*!**************************************************!*\
  !*** ./src/data/repository/projectRepository.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n/* harmony import */ var _model_createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/createProject */ "./src/data/model/createProject.js");\n/* harmony import */ var _storage_factoryLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/factoryLocalStorage */ "./src/data/storage/factoryLocalStorage.js");\n\n\n\nconst projectRepository = (() => {\n  const localStorage = (0,_storage_factoryLocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  let data = [];\n\n  const update = () => {\n    data = localStorage.getAll();\n    _events__WEBPACK_IMPORTED_MODULE_0__["default"].emit("updateProjectList", data);\n  };\n\n  const addProject = (title, description, todos) => {\n    let id = localStorage.getLastId();\n    let project = (0,_model_createProject__WEBPACK_IMPORTED_MODULE_1__["default"])(id, title, description, todos);\n    localStorage.add(project);\n    update();\n  };\n\n  const getAllProjects = () => {\n    update();\n    return data;\n  };\n\n  const getProjectWithId = (id) => {\n    return localStorage.getProjectWithId(id);\n  };\n\n  const updateProject = (project) => {\n    localStorage.updateProject(project);\n    console.log("Updating project");\n  };\n\n  const removeProject = (identifier) => {\n    localStorage.removeProject(identifier);\n  };\n\n  update();\n\n  return {\n    addProject,\n    getAllProjects,\n    getProjectWithId,\n    updateProject,\n    removeProject,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectRepository);\n\n\n//# sourceURL=webpack://to-do-list/./src/data/repository/projectRepository.js?'
        )

        /***/
      },

    /***/ "./src/data/storage/factoryLocalStorage.js":
      /*!*************************************************!*\
  !*** ./src/data/storage/factoryLocalStorage.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ factoryLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _model_createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/createProject */ "./src/data/model/createProject.js");\n/* harmony import */ var _model_createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/createTodo */ "./src/data/model/createTodo.js");\n\n\n\nfunction factoryLocalStorage() {\n  const storage = window["localStorage"];\n\n  const add = (project) => {\n    let index = storage.length;\n\n    let projectJSON = JSON.stringify(project);\n\n    storage.setItem(index, projectJSON);\n  };\n\n  const updateProject = (project) => {\n    let projectJson = JSON.stringify(project);\n    storage.setItem(project.getId(), projectJson);\n  };\n\n  const getAll = () => {\n    const projects = [];\n    for (let i = 0; i < storage.length; i++) {\n      let projectJson = storage[i];\n      let obj = JSON.parse(projectJson);\n\n      let todos = [];\n      for (let i = 0; i < obj.todos.length; i++) {\n        let todoObj = obj.todos[i];\n        let todo = (0,_model_createTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(\n          todoObj.title,\n          todoObj.description,\n          todoObj.date,\n          todoObj.completeState\n        );\n        todos.push(todo);\n      }\n      let project = (0,_model_createProject__WEBPACK_IMPORTED_MODULE_0__["default"])(obj.id, obj.title, obj.description, todos);\n\n      projects.push(project);\n    }\n    return projects;\n  };\n\n  // localStorage.clear();\n  const getProjectWithId = (id) => {\n    let projectJSON = storage.getItem(id);\n    let obj = JSON.parse(projectJSON);\n\n    let todos = [];\n    for (let i = 0; i < obj.todos.length; i++) {\n      let todoObj = obj.todos[i];\n      let todo = (0,_model_createTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(\n        todoObj.title,\n        todoObj.description,\n        todoObj.date,\n        todoObj.completeState\n      );\n      todos.push(todo);\n    }\n\n    let project = (0,_model_createProject__WEBPACK_IMPORTED_MODULE_0__["default"])(obj.id, obj.title, obj.description, todos);\n    return project;\n  };\n\n  const getLastId = () => {\n    return storage.length;\n  };\n\n  const removeProject = (identifier) => {\n    storage.removeItem(identifier.toString());\n  };\n\n  return {\n    add,\n    updateProject,\n    getAll,\n    getLastId,\n    getProjectWithId,\n    removeProject,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/data/storage/factoryLocalStorage.js?'
        )

        /***/
      },

    /***/ "./src/events.js":
      /*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst events = {\n  _events: [],\n\n  on: function (eventName, fn) {\n    this._events[eventName] = this._events[eventName] || [];\n    this._events[eventName].push(fn);\n  },\n\n  off: function (eventName, fn) {\n    if (this._events[eventName]) {\n      for (let i = 0; i < this._events[eventName].lenght; i++) {\n        if (this._events[eventName][i] === fn) {\n          this._events[eventName].splice(i, 1);\n        }\n      }\n    }\n  },\n\n  emit: function (eventName, data) {\n    if (this._events[eventName]) {\n      this._events[eventName].forEach(function (fn) {\n        fn(data);\n      });\n    }\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n\n//# sourceURL=webpack://to-do-list/./src/events.js?'
        )

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");\n/* harmony import */ var _ui_footerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/footerFactory */ "./src/ui/footerFactory.js");\n/* harmony import */ var _ui_headerFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/headerFactory */ "./src/ui/headerFactory.js");\n/* harmony import */ var _ui_layer_layerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/layer/layerFactory */ "./src/ui/layer/layerFactory.js");\n/* harmony import */ var _ui_main_mainFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/main/mainFactory */ "./src/ui/main/mainFactory.js");\n/* harmony import */ var _ui_sidebar_sidebarFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/sidebar/sidebarFactory */ "./src/ui/sidebar/sidebarFactory.js");\n\n\n\n\n\n\n\nconst header = (0,_ui_headerFactory__WEBPACK_IMPORTED_MODULE_2__["default"])();\nconst sideBar = (0,_ui_sidebar_sidebarFactory__WEBPACK_IMPORTED_MODULE_5__["default"])();\nconst main = (0,_ui_main_mainFactory__WEBPACK_IMPORTED_MODULE_4__["default"])();\nconst footer = (0,_ui_footerFactory__WEBPACK_IMPORTED_MODULE_1__["default"])();\n\ndocument.body.appendChild(header);\ndocument.body.appendChild(sideBar);\ndocument.body.appendChild(main);\ndocument.body.appendChild(footer);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?'
        )

        /***/
      },

    /***/ "./src/ui/footerFactory.js":
      /*!*********************************!*\
  !*** ./src/ui/footerFactory.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ footerFactory)\n/* harmony export */ });\n/* harmony import */ var _asset_icon_discord_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/icon-discord.png */ "./src/asset/icon-discord.png");\n\n\nfunction footerFactory() {\n  const footerElement = document.createElement("footer");\n\n  const footerText = document.createElement("p");\n  footerText.textContent = "Created by Nefrodzv";\n\n  const footerAnchor = document.createElement("a");\n  footerAnchor.href = "https://github.com/NefrodzV/to-do-list";\n\n  const iconContainer = document.createElement("div");\n  iconContainer.classList.add("icon-container");\n\n  const icon = new Image();\n  icon.src = _asset_icon_discord_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  iconContainer.appendChild(icon);\n  footerAnchor.appendChild(iconContainer);\n\n  footerElement.append(footerText, footerAnchor);\n\n  return footerElement;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/footerFactory.js?'
        )

        /***/
      },

    /***/ "./src/ui/headerFactory.js":
      /*!*********************************!*\
  !*** ./src/ui/headerFactory.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ headerFactory)\n/* harmony export */ });\n/* harmony import */ var _asset_icon_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/icon-logo.png */ "./src/asset/icon-logo.png");\n\nfunction headerFactory() {\n  const headerElement = document.createElement("header");\n\n  const logoImg = new Image();\n  logoImg.src = _asset_icon_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  const logoContainer = document.createElement("div");\n  logoContainer.classList.add("logo-container");\n  logoContainer.appendChild(logoImg);\n\n  const title = document.createElement("h1");\n  title.textContent = "Todo List";\n  title.classList.add("uppercase");\n\n  headerElement.appendChild(logoContainer);\n  headerElement.appendChild(title);\n\n  return headerElement;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/headerFactory.js?'
        )

        /***/
      },

    /***/ "./src/ui/layer/layerFactory.js":
      /*!**************************************!*\
  !*** ./src/ui/layer/layerFactory.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ layerFactory)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n/* harmony import */ var _projectDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDetails */ "./src/ui/layer/projectDetails.js");\n\n\n\nfunction layerFactory() {\n  const LAYER_STYLE = "layer";\n\n  const layerElement = document.createElement("div");\n  layerElement.classList.add(LAYER_STYLE);\n\n  const toggleVisibility = () => {\n    layerElement.toggleAttribute("visible");\n  };\n\n  const detailsElement = (0,_projectDetails__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {\n    toggleVisibility();\n  });\n\n  const disableLayer = () => {\n    if (!layerElement.hasAttribute("visible")) return;\n    layerElement.removeAttribute("visible");\n  };\n  layerElement.appendChild(detailsElement);\n\n  _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("updateLayerVisibility", toggleVisibility);\n\n  return {\n    layerElement,\n    disableLayer,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/layer/layerFactory.js?'
        )

        /***/
      },

    /***/ "./src/ui/layer/projectDetails.js":
      /*!****************************************!*\
  !*** ./src/ui/layer/projectDetails.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ projectDetails)\n/* harmony export */ });\n/* harmony import */ var _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/repository/projectRepository */ "./src/data/repository/projectRepository.js");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n/* harmony import */ var _utils_Transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Transform */ "./src/utils/Transform.js");\n/* harmony import */ var _listComponents_todoListComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listComponents/todoListComponent */ "./src/ui/listComponents/todoListComponent.js");\n\n\n\n\n\nfunction projectDetails(closeFunction) {\n  const transform = (0,_utils_Transform__WEBPACK_IMPORTED_MODULE_2__["default"])();\n\n  let project;\n\n  const CONTAINER_STYLE = "layer-container";\n\n  const container = document.createElement("div");\n  container.classList.add(CONTAINER_STYLE);\n\n  const closeButton = document.createElement("button");\n  closeButton.classList.add("close-button");\n  closeButton.textContent = "X";\n  closeButton.addEventListener("click", () => {\n    closeFunction();\n  });\n\n  const title = document.createElement("p");\n  title.classList.add("layer-title");\n  title.addEventListener("click", () => {\n    transform.replaceElement(\n      title,\n      "input",\n      "text",\n      project.getTitle(),\n      (value) => {\n        project.setTitle(value);\n        update(title, project.getTitle());\n        updateProject();\n        _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("updateProjectList", _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects());\n      }\n    );\n  });\n  const description = document.createElement("p");\n  description.classList.add("layer-description");\n  description.addEventListener("click", () => {\n    transform.replaceElement(\n      description,\n      "input",\n      "text",\n      project.getDescription(),\n      (value) => {\n        project.setDescription(value);\n        update(description, project.getDescription());\n        updateProject();\n      }\n    );\n  });\n\n  container.addEventListener("dblclick", (event) => {\n    event.preventDefault();\n    transform.replaceElement(\n      description,\n      "input",\n      "text",\n      project.getDescription(),\n      (value) => {\n        project.setDescription(value);\n        update(description, project.getDescription());\n        updateProject();\n      }\n    );\n  });\n\n  const todosListComponent = (0,_listComponents_todoListComponent__WEBPACK_IMPORTED_MODULE_3__["default"])();\n\n  const controlsContainer = document.createElement("div");\n  controlsContainer.classList.add("controls-container");\n\n  const addTodoButton = document.createElement("button");\n  addTodoButton.classList.add("layer-add-todo-button");\n  addTodoButton.textContent = "+ Add Todo";\n  addTodoButton.addEventListener("click", () => {\n    todosListComponent.addInputComponent();\n  });\n\n  const deleteTodoButton = document.createElement("button");\n  deleteTodoButton.textContent = "Delete";\n  deleteTodoButton.classList.add("layer-delete-button");\n  deleteTodoButton.addEventListener("click", () => {\n    closeFunction();\n    _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project.getId());\n    _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("updateProjectList", _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects());\n  });\n\n  controlsContainer.append(addTodoButton, deleteTodoButton);\n\n  function update(target, value) {\n    target.textContent = value;\n  }\n  function updateFields() {\n    title.textContent = project.getTitle();\n    description.textContent = project.getDescription();\n    todosListComponent.updateList(project.getTodos());\n  }\n  _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("updateProjectFields", updateFields);\n  function getDataFromSource(id) {\n    project = _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectWithId(id);\n    console.log(project);\n    updateFields();\n  }\n  _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("updateProjectDetails", getDataFromSource);\n\n  function addTodoToProject(todo) {\n    project.addTodo(todo);\n    updateProject();\n  }\n  _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("addTodo", addTodoToProject);\n\n  function updateProject() {\n    _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__["default"].updateProject(project);\n    _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("updateProjectList", _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects());\n  }\n  _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("updateProject", updateProject);\n\n  function deleteTodo(todo) {\n    project.deleteTodo(todo);\n    updateProject();\n  }\n  _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("deleteTodo", deleteTodo);\n\n  const instructions = document.createElement("p");\n  instructions.innerHTML =\n    "->Right click in todo to add description <br> ->Click field to edit them <br> ->Double click to add project description";\n  instructions.style.fontSize = ".8rem";\n  instructions.style.height = "max-content";\n\n  container.append(\n    closeButton,\n    title,\n    description,\n    todosListComponent.getListElement(),\n    controlsContainer,\n    instructions\n  );\n\n  return container;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/layer/projectDetails.js?'
        )

        /***/
      },

    /***/ "./src/ui/listComponents/formListComponent.js":
      /*!****************************************************!*\
  !*** ./src/ui/listComponents/formListComponent.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ formListComponent)\n/* harmony export */ });\nfunction formListComponent(todos, itemCallback) {\n  const ul = document.createElement("ul");\n\n  // initializer if there is something in the todos array\n  (() => {\n    if (todos.length === 0 || todos === null) return;\n    for (let i = 0; i < todos.length; i++) {\n      let todo = todos[i];\n      updateList(todo);\n    }\n  })();\n\n  function updateList(todo) {\n    const item = formItemComponent(\n      todo.getTitle(),\n      todo.getDate(),\n      itemCallback\n    );\n    ul.appendChild(item);\n  }\n\n  function clear() {\n    while (ul.firstChild) {\n      ul.removeChild(ul.firstChild);\n    }\n  }\n\n  return {\n    getListElement() {\n      return ul;\n    },\n    updateList,\n    clear,\n  };\n}\n\nfunction formItemComponent(title, date, itemCallback) {\n  const STYLE = "todo";\n  const listItem = document.createElement("li");\n  listItem.classList.add(STYLE);\n  listItem.classList.add("corner");\n\n  const formTitleElement = document.createElement("p");\n  formTitleElement.textContent = title;\n\n  const formDateElement = document.createElement("p");\n  formDateElement.textContent = date;\n\n  const deleteButton = document.createElement("button");\n  deleteButton.textContent = "X";\n  deleteButton.type = "button";\n  deleteButton.addEventListener("click", () => {\n    itemCallback(title);\n    listItem.remove();\n  });\n\n  listItem.append(formTitleElement, formDateElement, deleteButton);\n  return listItem;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/listComponents/formListComponent.js?'
        )

        /***/
      },

    /***/ "./src/ui/listComponents/projectListComponent.js":
      /*!*******************************************************!*\
  !*** ./src/ui/listComponents/projectListComponent.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ projectListComponent)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n\n\nfunction projectListComponent(projects, itemCallback) {\n  const STYLE = "project-list";\n  const ul = document.createElement("ul");\n  ul.classList.add(STYLE);\n  (() => {\n    if (projects.length === 0 || projects === null) return;\n    for (let i = 0; i < projects.length; i++) {\n      let item = projects[i];\n      addItem(item);\n    }\n  })();\n\n  function addItem(project) {\n    const item = projectItemComponent(project, itemCallback);\n    ul.appendChild(item);\n  }\n\n  function removeItems() {\n    while (ul.firstChild) {\n      ul.removeChild(ul.firstChild);\n    }\n  }\n\n  function updateList(projects) {\n    removeItems();\n    for (let i = 0; i < projects.length; i++) {\n      let project = projects[i];\n      addItem(project);\n    }\n  }\n\n  _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("updateProjectList", updateList);\n  console.log(_events__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n  return {\n    getList() {\n      return ul;\n    },\n  };\n}\n\nfunction projectItemComponent(project, itemCallback) {\n  const STYLE = "project";\n\n  const listItem = document.createElement("li");\n  listItem.classList.add(STYLE);\n  listItem.addEventListener("click", () => {\n    itemCallback(project.getId());\n  });\n\n  const titlePara = document.createElement("p");\n  titlePara.textContent = project.getTitle();\n  titlePara.classList.add("project-title");\n\n  const completionSpan = document.createElement("span");\n  completionSpan.textContent = project.getCompletedTodosTotal();\n\n  listItem.append(titlePara, completionSpan);\n\n  return listItem;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/listComponents/projectListComponent.js?'
        )

        /***/
      },

    /***/ "./src/ui/listComponents/todoListComponent.js":
      /*!****************************************************!*\
  !*** ./src/ui/listComponents/todoListComponent.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ todoListComponent)\n/* harmony export */ });\n/* harmony import */ var _data_model_createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/model/createTodo */ "./src/data/model/createTodo.js");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n/* harmony import */ var _utils_Transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Transform */ "./src/utils/Transform.js");\n/* harmony import */ var _asset_icon_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../asset/icon-delete.png */ "./src/asset/icon-delete.png");\n\n\n\n\n\nfunction todoListComponent() {\n  let hasInputComponent = false;\n\n  const ul = document.createElement("ul");\n\n  ul.classList.add("layer-list");\n\n  function addItem(todo) {\n    const item = TodoItemComponent(todo);\n    ul.appendChild(item);\n  }\n\n  function updateList(todos) {\n    clear();\n    for (let i = 0; i < todos.length; i++) {\n      let todo = todos[i];\n      addItem(todo);\n    }\n  }\n\n  function clear() {\n    while (ul.firstChild) {\n      ul.removeChild(ul.firstChild);\n    }\n  }\n\n  function addInputComponent() {\n    if (hasInputComponent) return;\n    let inputComponent = InputItemComponent();\n    ul.appendChild(inputComponent.li);\n    inputComponent.setFocus();\n  }\n\n  // Class\n  function InputItemComponent() {\n    hasInputComponent = true;\n    const li = document.createElement("li");\n    li.classList.add("todo-component");\n\n    const input = document.createElement("input");\n    input.type = "text";\n    input.placeholder = "Enter title and press enter";\n\n    input.addEventListener("keypress", (event) => {\n      if (event.key === "Enter") {\n        if (input.value.trim().length === 0) {\n          input.classList.add("error");\n          return;\n        }\n\n        let todo = (0,_data_model_createTodo__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);\n        _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("addTodo", todo);\n        addItem(todo);\n        _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("updateProject");\n        event.preventDefault();\n        event.target.blur();\n      }\n    });\n\n    input.addEventListener("focusout", () => {\n      hasInputComponent = false;\n      li.remove();\n    });\n    li.appendChild(input);\n    input.focus();\n    return {\n      li,\n      setFocus() {\n        input.focus();\n      },\n    };\n  }\n  return {\n    getListElement() {\n      return ul;\n    },\n    updateList,\n    addInputComponent,\n  };\n}\n\nfunction TodoItemComponent(todo) {\n  const transform = (0,_utils_Transform__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  const STYLE = "todo-component";\n  const listItem = document.createElement("li");\n  listItem.classList.add(STYLE);\n\n  listItem.addEventListener("click", () => {\n    console.log("clickpressed");\n    deleteButton.toggleAttribute("visible");\n  });\n\n  const titleElement = document.createElement("p");\n  titleElement.textContent = todo.getTitle();\n  titleElement.classList.add("todo-component-title");\n  titleElement.addEventListener("click", () => {\n    transform.replaceElement(\n      titleElement,\n      "input",\n      "text",\n      todo.getTitle(),\n      (value) => {\n        todo.setTitle(value);\n        update(titleElement, todo.getTitle());\n        _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("updateProject");\n      }\n    );\n  });\n\n  const dateElement = document.createElement("p");\n  dateElement.classList.add("todo-component-date");\n  dateElement.textContent = todo.getDate();\n\n  dateElement.addEventListener("click", () => {\n    transform.replaceElement(\n      dateElement,\n      "input",\n      "date",\n      todo.getTitle(),\n      (value) => {\n        console.log("updating list");\n        todo.setDate(value);\n        update(dateElement, todo.getDate());\n        _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("updateProject");\n        _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("updateProjectFields");\n      }\n    );\n  });\n\n  const checkBoxElement = document.createElement("input");\n  checkBoxElement.type = "checkbox";\n  checkBoxElement.classList.add("todo-checkbox");\n  checkBoxElement.checked = todo.getCompleteState();\n  checkBoxElement.addEventListener("click", () => {\n    console.log("checkbox value is:" + checkBoxElement.checked);\n    todo.updateCompleteState(checkBoxElement.checked);\n    _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("updateProject");\n  });\n\n  const deleteButton = document.createElement("button");\n  const deleteImage = new Image();\n  deleteImage.src = _asset_icon_delete_png__WEBPACK_IMPORTED_MODULE_3__;\n  const container = document.createElement("div");\n  container.appendChild(deleteImage);\n  deleteButton.appendChild(container);\n  deleteButton.classList.add("delete-item-button");\n  deleteButton.addEventListener("click", () => {\n    _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("deleteTodo", todo);\n    listItem.remove();\n  });\n\n  const mainItemContainer = document.createElement("div");\n  mainItemContainer.classList.add("todo-main-container");\n  mainItemContainer.append(\n    titleElement,\n    dateElement,\n    checkBoxElement,\n    deleteButton\n  );\n\n  const todoDescription = document.createElement("p");\n  todoDescription.classList.add("todo-component-description");\n  todoDescription.textContent = todo.getDescription();\n\n  listItem.addEventListener("contextmenu", (event) => {\n    event.preventDefault();\n    transform.replaceElement(\n      todoDescription,\n      "input",\n      "text",\n      todo.getDescription(),\n      (value) => {\n        todo.setDescription(value);\n        _events__WEBPACK_IMPORTED_MODULE_1__["default"].emit("updateProject");\n        update(todoDescription, value);\n      }\n    );\n  });\n  listItem.append(mainItemContainer, todoDescription);\n\n  function update(target, value) {\n    target.textContent = value;\n  }\n\n  return listItem;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/listComponents/todoListComponent.js?'
        )

        /***/
      },

    /***/ "./src/ui/main/inboxFactory.js":
      /*!*************************************!*\
  !*** ./src/ui/main/inboxFactory.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ inboxFactory)\n/* harmony export */ });\n/* harmony import */ var _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/repository/projectRepository */ "./src/data/repository/projectRepository.js");\n/* harmony import */ var _listComponents_projectListComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listComponents/projectListComponent */ "./src/ui/listComponents/projectListComponent.js");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n\n\n\nfunction inboxFactory() {\n  const container = document.createElement("div");\n  const contentHeader = document.createElement("h2");\n  contentHeader.classList.add("list-header");\n  contentHeader.textContent = "Inbox";\n\n  const listComponent = (0,_listComponents_projectListComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(\n    _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects(),\n    (id) => {\n      _events__WEBPACK_IMPORTED_MODULE_2__["default"].emit("updateLayerVisibility");\n      _events__WEBPACK_IMPORTED_MODULE_2__["default"].emit("updateProjectDetails", id);\n    }\n  );\n\n  const projectList = listComponent.getList();\n\n  container.append(contentHeader, projectList);\n\n  return container;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/main/inboxFactory.js?'
        )

        /***/
      },

    /***/ "./src/ui/main/mainFactory.js":
      /*!************************************!*\
  !*** ./src/ui/main/mainFactory.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ mainFactory)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n/* harmony import */ var _layer_layerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layer/layerFactory */ "./src/ui/layer/layerFactory.js");\n/* harmony import */ var _inboxFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inboxFactory */ "./src/ui/main/inboxFactory.js");\n\n\n\n\nfunction mainFactory() {\n  const mainElement = document.createElement("main");\n  const layer = (0,_layer_layerFactory__WEBPACK_IMPORTED_MODULE_1__["default"])();\n\n  //Will only run once for when loading page\n  (() => {\n    mainElement.appendChild((0,_inboxFactory__WEBPACK_IMPORTED_MODULE_2__["default"])());\n    mainElement.appendChild(layer.layerElement);\n  })();\n\n  function update(element) {\n    removeElements();\n    layer.disableLayer();\n    mainElement.appendChild(element);\n    mainElement.appendChild(layer.layerElement);\n  }\n\n  // Used to communicate when menu items are clicked\n  _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("updateMain", update);\n\n  function removeElements() {\n    while (mainElement.firstChild) {\n      mainElement.removeChild(mainElement.firstChild);\n    }\n  }\n\n  return mainElement;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/main/mainFactory.js?'
        )

        /***/
      },

    /***/ "./src/ui/main/projectFormFactory.js":
      /*!*******************************************!*\
  !*** ./src/ui/main/projectFormFactory.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ projectFormFactory)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n/* harmony import */ var _data_model_createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/model/createTodo */ "./src/data/model/createTodo.js");\n/* harmony import */ var _utils_inputValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/inputValidator */ "./src/utils/inputValidator.js");\n/* harmony import */ var _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/repository/projectRepository */ "./src/data/repository/projectRepository.js");\n/* harmony import */ var _listComponents_formListComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listComponents/formListComponent */ "./src/ui/listComponents/formListComponent.js");\n/* harmony import */ var _utils_ElementCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ElementCreator */ "./src/utils/ElementCreator.js");\n\n\n\n\n\n\n\nfunction projectFormFactory() {\n  const todosData = [];\n  let errorField = false;\n  // Class used to create elements\n  const elementCreator = (0,_utils_ElementCreator__WEBPACK_IMPORTED_MODULE_5__["default"])();\n  // Displays error when validator finds an error\n  const displayInputError = (element) => {\n    errorField = true;\n    element.value = "";\n    element.classList.add("error");\n  };\n\n  _events__WEBPACK_IMPORTED_MODULE_0__["default"].on("displayInputError", displayInputError);\n\n  const form = document.createElement("form");\n  form.action = "#";\n  form.method = "post";\n  form.classList.add("project-form");\n  form.addEventListener("submit", (event) => {\n    event.preventDefault();\n    errorField = false;\n    removeEmptyListMessage();\n    console.log("submiting form......");\n    validate();\n  });\n\n  const formTitle = document.createElement("h1");\n  formTitle.textContent = "REGISTER PROJECT";\n\n  // Project details form part\n  const projectFieldset = document.createElement("fieldset");\n  const projectLegend = elementCreator.createLegend("Project details");\n  const projectTitleLabel = elementCreator.createLabel(\n    "Project title:",\n    "projectTitle"\n  );\n  const projectTitleInput = elementCreator.createInput(\n    "text",\n    "Title",\n    "projectTitle"\n  );\n  const projectDescriptionLabel = elementCreator.createLabel(\n    "Project description:",\n    "projectDescription"\n  );\n  const projectDescriptionTextarea = elementCreator.createTextarea(\n    3,\n    "What is the project about?",\n    "projectDescription"\n  );\n  projectFieldset.append(\n    projectLegend,\n    projectTitleLabel,\n    projectTitleInput,\n    projectDescriptionLabel,\n    projectDescriptionTextarea\n  );\n\n  // Todo items form part\n  const todoFieldset = document.createElement("fieldset");\n  const addTodoButton = elementCreator.createButton(\n    "button",\n    "+ ADD TODO",\n    "add-todo-button"\n  );\n  addTodoButton.addEventListener("click", () => {\n    errorField = false;\n    (0,_utils_inputValidator__WEBPACK_IMPORTED_MODULE_2__["default"])([todoTitleInput, todoDateInput]);\n    if (errorField) return;\n    removeEmptyListMessage();\n    addTodoToList();\n    resetInputText(todoTitleInput);\n    resetInputText(todoDescriptionTextarea);\n    resetInputText(todoDateInput);\n  });\n  const todoLegend = elementCreator.createLegend("Register todos");\n  const todoTitleLabel = elementCreator.createLabel("Title:", "todoTitle");\n  const todoTitleInput = elementCreator.createInput(\n    "text",\n    "Title",\n    "todoTitle"\n  );\n  const todoDateLabel = elementCreator.createLabel("Date:", "date");\n  const todoDateInput = elementCreator.createInput("date", null, "date");\n  const todoDescriptionLabel = elementCreator.createLabel(\n    "Description:",\n    "todoDescription"\n  );\n  const todoDescriptionTextarea = elementCreator.createTextarea(\n    3,\n    "Write a description for the todo!",\n    "todoDescription"\n  );\n  todoFieldset.append(\n    todoLegend,\n    todoTitleLabel,\n    todoTitleInput,\n    todoDateLabel,\n    todoDateInput,\n    todoDescriptionLabel,\n    todoDescriptionTextarea,\n    addTodoButton\n  );\n\n  // Todo List part\n  const todoListFieldset = document.createElement("fieldset");\n  const todoListLegend = elementCreator.createLegend("Todo List");\n  const listComponent = (0,_listComponents_formListComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(todosData, (title) => {\n    removeFromTodosData(title);\n  });\n  const todosList = listComponent.getListElement();\n  todosList.classList.add("todos-form-list");\n  todoListFieldset.append(todoListLegend, todosList);\n  const submitButton = document.createElement("button");\n  submitButton.textContent = "Submit";\n  const fieldsetContainer = document.createElement("div");\n  fieldsetContainer.classList.add("fieldset-container");\n  fieldsetContainer.append(projectFieldset, todoFieldset, todoListFieldset);\n\n  form.append(formTitle, fieldsetContainer, submitButton);\n\n  // Functions\n  function validate() {\n    (0,_utils_inputValidator__WEBPACK_IMPORTED_MODULE_2__["default"])([projectTitleInput]);\n    if (!listHasItem()) {\n      showEmptyListMessage();\n      errorField = true;\n    }\n    if (errorField) {\n      console.log("Error in an input cannot register");\n      return;\n    }\n    submit();\n\n    // Reset form\n    resetInputText(projectTitleInput);\n    resetInputText(projectDescriptionTextarea);\n    resetInputText(todoTitleInput);\n    resetInputText(todoDescriptionTextarea);\n    resetInputText(todoDateInput);\n    listComponent.clear();\n    todosData.length = 0;\n  }\n\n  // Span for empty\n  const emptyListSpan = document.createElement("span");\n  emptyListSpan.textContent = "There are no todos! Please add one!";\n  emptyListSpan.classList.add("empty-list-msg");\n\n  function showEmptyListMessage() {\n    todosList.append(emptyListSpan);\n  }\n  function removeEmptyListMessage() {\n    emptyListSpan.remove();\n  }\n  function listHasItem() {\n    return todosList.hasChildNodes();\n  }\n\n  function addTodoToList() {\n    const todoTitle = todoTitleInput.value;\n    const todoDescription = todoDescriptionTextarea.value;\n    const todoDate = todoDateInput.value;\n\n    // Pushing to data array\n    const todo = (0,_data_model_createTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(todoTitle, todoDescription, todoDate);\n    console.log(todo);\n    todosData.push(todo);\n    // Adding to list component\n    listComponent.updateList(todo);\n  }\n\n  function resetInputText(input) {\n    input.value = "";\n    input.classList.remove("error");\n  }\n\n  function removeFromTodosData(title) {\n    for (let i = 0; i < todosData.length; i++) {\n      const todo = todosData[i];\n      if (todo.getTitle() === title) {\n        todosData.splice(i, 1);\n        break;\n      }\n    }\n  }\n\n  function showRegistryMessage() {\n    const message = document.createElement("div");\n    message.textContent = "New project registered successful check your inbox!";\n    message.classList.add("registry-message");\n    form.appendChild(message);\n\n    setTimeout(() => {\n      message.remove();\n    }, 3000);\n  }\n\n  function submit() {\n    const title = projectTitleInput.value;\n    const description = projectDescriptionTextarea.value;\n    _data_repository_projectRepository__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(title, description, todosData);\n    showRegistryMessage();\n  }\n\n  return form;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/main/projectFormFactory.js?'
        )

        /***/
      },

    /***/ "./src/ui/sidebar/sidebarFactory.js":
      /*!******************************************!*\
  !*** ./src/ui/sidebar/sidebarFactory.js ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ sidebarFactory)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style.css */ "./src/style.css");\n/* harmony import */ var _sidebarListComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarListComponent */ "./src/ui/sidebar/sidebarListComponent.js");\n\n\nfunction sidebarFactory() {\n  const sideBarElement = document.createElement("div");\n  sideBarElement.classList.add("sidebar");\n\n  const title = document.createElement("h2");\n  title.textContent = "Menu";\n  title.classList.add("uppercase");\n\n  const nav = document.createElement("nav");\n\n  nav.appendChild((0,_sidebarListComponent__WEBPACK_IMPORTED_MODULE_1__["default"])());\n\n  sideBarElement.append(title, nav);\n\n  return sideBarElement;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/sidebar/sidebarFactory.js?'
        )

        /***/
      },

    /***/ "./src/ui/sidebar/sidebarItemFactory.js":
      /*!**********************************************!*\
  !*** ./src/ui/sidebar/sidebarItemFactory.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ sidebarItemFactory)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n\nfunction sidebarItemFactory(\n  icon,\n  title,\n  elementFactory,\n  isActive\n) {\n  const STYLE = "sidebar-item";\n  const ICON_CONTAINER_STYLE = "sidebar-item-container";\n  const sidebarItemElement = document.createElement("li");\n  sidebarItemElement.classList.add(STYLE);\n  sidebarItemElement.setAttribute("id", title);\n\n  sidebarItemElement.addEventListener("click", function (e) {\n    if (isActive) return;\n\n    _events__WEBPACK_IMPORTED_MODULE_0__["default"].emit("sidebarItemClicked");\n    toggleIsActive();\n    _events__WEBPACK_IMPORTED_MODULE_0__["default"].emit("updateMain", elementFactory);\n  });\n\n  if (isActive) {\n    toggleIsActive();\n  }\n\n  const itemIcon = new Image();\n  itemIcon.src = icon;\n\n  const iconContainer = document.createElement("div");\n  iconContainer.appendChild(itemIcon);\n  iconContainer.classList.add(ICON_CONTAINER_STYLE);\n\n  const titleElement = document.createElement("h3");\n  titleElement.textContent = title;\n  titleElement.classList.add("item-title");\n\n  sidebarItemElement.append(iconContainer, titleElement);\n\n  function toggleIsActive() {\n    isActive = true;\n    sidebarItemElement.toggleAttribute("isActive");\n  }\n\n  function disableActive() {\n    isActive = false;\n    sidebarItemElement.removeAttribute("isActive");\n  }\n\n  return {\n    getElement() {\n      return sidebarItemElement;\n    },\n    disableActive,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/sidebar/sidebarItemFactory.js?'
        )

        /***/
      },

    /***/ "./src/ui/sidebar/sidebarItemsFactory.js":
      /*!***********************************************!*\
  !*** ./src/ui/sidebar/sidebarItemsFactory.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ sidebarItemsFactory)\n/* harmony export */ });\n/* harmony import */ var _asset_icon_inbox_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../asset/icon-inbox.png */ "./src/asset/icon-inbox.png");\n/* harmony import */ var _asset_icon_add_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../asset/icon-add.png */ "./src/asset/icon-add.png");\n/* harmony import */ var _main_inboxFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/inboxFactory */ "./src/ui/main/inboxFactory.js");\n/* harmony import */ var _sidebarItemFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebarItemFactory */ "./src/ui/sidebar/sidebarItemFactory.js");\n/* harmony import */ var _main_projectFormFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main/projectFormFactory */ "./src/ui/main/projectFormFactory.js");\n\n\n\n\n\n\nfunction sidebarItemsFactory() {\n  const sidebarItems = [\n    (0,_sidebarItemFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(_asset_icon_inbox_png__WEBPACK_IMPORTED_MODULE_0__, "inbox", (0,_main_inboxFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(), true),\n    (0,_sidebarItemFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(_asset_icon_add_png__WEBPACK_IMPORTED_MODULE_1__, "new project", (0,_main_projectFormFactory__WEBPACK_IMPORTED_MODULE_4__["default"])()),\n  ];\n\n  return sidebarItems;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/sidebar/sidebarItemsFactory.js?'
        )

        /***/
      },

    /***/ "./src/ui/sidebar/sidebarListComponent.js":
      /*!************************************************!*\
  !*** ./src/ui/sidebar/sidebarListComponent.js ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ sidebarListComponent)\n/* harmony export */ });\n/* harmony import */ var _sidebarItemsFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarItemsFactory */ "./src/ui/sidebar/sidebarItemsFactory.js");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events */ "./src/events.js");\n\n\n\n\nfunction sidebarListComponent() {\n  const sidebarItems = (0,_sidebarItemsFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();\n\n  const ul = document.createElement("ul");\n\n  (() => {\n    if (\n      !Array.isArray(sidebarItems) ||\n      sidebarItems.length === 0 ||\n      sidebarItems === null\n    )\n      return;\n    updateList();\n  })();\n\n  function addItem(item) {\n    ul.appendChild(item);\n  }\n\n  function updateList() {\n    for (let i = 0; i < sidebarItems.length; i++) {\n      let sidebarItem = sidebarItems[i];\n      addItem(sidebarItem.getElement());\n    }\n  }\n\n  function disableActiveItems() {\n    sidebarItems.forEach((item) => {\n      item.disableActive();\n    });\n  }\n\n  _events__WEBPACK_IMPORTED_MODULE_1__["default"].on("sidebarItemClicked", disableActiveItems);\n\n  return ul;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui/sidebar/sidebarListComponent.js?'
        )

        /***/
      },

    /***/ "./src/utils/CompleteTodoCounter.js":
      /*!******************************************!*\
  !*** ./src/utils/CompleteTodoCounter.js ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CompleteTodosCounter)\n/* harmony export */ });\nfunction CompleteTodosCounter() {\n  const getTotal = (todos) => {\n    let counter = 0;\n    for (let i = 0; i < todos.length; i++) {\n      if (todos[i].getCompleteState()) {\n        counter++;\n      }\n    }\n    return counter;\n  };\n\n  return {\n    getTotal,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/utils/CompleteTodoCounter.js?'
        )

        /***/
      },

    /***/ "./src/utils/ElementCreator.js":
      /*!*************************************!*\
  !*** ./src/utils/ElementCreator.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ ElementCreator)\n/* harmony export */ });\n/* harmony import */ var _getSystemDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSystemDate */ "./src/utils/getSystemDate.js");\n\n\nfunction ElementCreator() {\n  const createLegend = (text) => {\n    const element = document.createElement("legend");\n    element.textContent = text;\n    return element;\n  };\n\n  const createTextarea = (rows, placeholder, name) => {\n    const element = document.createElement("textarea");\n    element.rows = rows;\n    element.placeholder = placeholder;\n    element.name = name;\n    element.id = name;\n    return element;\n  };\n\n  const createLabel = (text, inputId) => {\n    const element = document.createElement("label");\n    element.textContent = text;\n    element.htmlFor = inputId;\n    return element;\n  };\n\n  const createInput = (type, placeholderText, name) => {\n    const element = document.createElement("input");\n    element.type = type;\n    element.placeholder = placeholderText;\n    element.name = name;\n    element.id = name;\n    element.max = 20;\n\n    if (type === "date") {\n      element.min = (0,_getSystemDate__WEBPACK_IMPORTED_MODULE_0__["default"])();\n    }\n    return element;\n  };\n\n  const createButton = (type, text, style) => {\n    const element = document.createElement("button");\n    element.textContent = text;\n    element.classList.add(style);\n    element.type = type;\n    return element;\n  };\n  return {\n    createLegend,\n    createTextarea,\n    createLabel,\n    createInput,\n    createButton,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/utils/ElementCreator.js?'
        )

        /***/
      },

    /***/ "./src/utils/Formatter.js":
      /*!********************************!*\
  !*** ./src/utils/Formatter.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Formatter)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");\n\nfunction Formatter() {\n  const formatDate = (date) => {\n    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date), "ccc d, MMM, yyyy");\n  };\n  return {\n    formatDate,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/utils/Formatter.js?'
        )

        /***/
      },

    /***/ "./src/utils/Sorter.js":
      /*!*****************************!*\
  !*** ./src/utils/Sorter.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Sorter)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");\n\n\nfunction Sorter() {\n  const sortByDate = (items) => {\n    items.sort((firstItem, secondItem) => {\n      // Will compare the dates and see if its the init message for date if so move it last\n      if (\n        firstItem.getDate() === "No date set" &&\n        secondItem !== "No date set"\n      ) {\n        console.log("No date set");\n        return 1;\n      }\n      return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(\n        new Date(firstItem.getDate()),\n        new Date(secondItem.getDate())\n      );\n    });\n    for (let i = 0; i < items.length; i++) {\n      console.log(items[i].getDate());\n    }\n  };\n\n  return {\n    sortByDate,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/utils/Sorter.js?'
        )

        /***/
      },

    /***/ "./src/utils/TodoMatcher.js":
      /*!**********************************!*\
  !*** ./src/utils/TodoMatcher.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoMatcher: () => (/* binding */ TodoMatcher)\n/* harmony export */ });\nfunction TodoMatcher() {\n  function findTodoByTitle(todo, array) {\n    for (let i = 0; i < array.length; i++) {\n      if (todo.getTitle() === array[i].getTitle()) {\n        console.log("Found a match index is" + i);\n        return i;\n      }\n    }\n    return null;\n  }\n\n  return {\n    findTodoByTitle,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/utils/TodoMatcher.js?'
        )

        /***/
      },

    /***/ "./src/utils/Transform.js":
      /*!********************************!*\
  !*** ./src/utils/Transform.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Transform)\n/* harmony export */ });\n/* harmony import */ var _getSystemDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSystemDate */ "./src/utils/getSystemDate.js");\n\n\nfunction Transform() {\n  function replaceElement(oldElement, elementType, type, value, callback) {\n    const newElement = document.createElement(elementType);\n    newElement.type = type;\n    newElement.value = value;\n    newElement.placeholder = "Enter new field value and press enter";\n    if (type === "date") {\n      newElement.style.marginInlineStart = "auto";\n      newElement.min = (0,_getSystemDate__WEBPACK_IMPORTED_MODULE_0__["default"])();\n    }\n    if (value === undefined) {\n      newElement.value = "";\n    }\n    newElement.addEventListener("keypress", (event) => {\n      if (event.key === "Enter") {\n        if (newElement.value.trim().length === 0) {\n          newElement.classList.add("error");\n          return;\n        }\n\n        event.preventDefault();\n        callback(newElement.value);\n        event.target.blur();\n      }\n    });\n\n    newElement.addEventListener("focusout", () => {\n      undoTransform(newElement, oldElement);\n    });\n\n    oldElement.replaceWith(newElement);\n    newElement.focus();\n  }\n\n  function undoTransform(newElement, oldElement) {\n    newElement.replaceWith(oldElement);\n  }\n\n  return {\n    replaceElement,\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/utils/Transform.js?'
        )

        /***/
      },

    /***/ "./src/utils/getSystemDate.js":
      /*!************************************!*\
  !*** ./src/utils/getSystemDate.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ getSystemDate)\n/* harmony export */ });\nfunction getSystemDate() {\n  const date = new Date();\n  let dd = date.getDate();\n  let mm = date.getMonth() + 1;\n  let yyyy = date.getFullYear();\n\n  if (dd < 10) {\n    dd = "0" + dd;\n  }\n\n  if (mm < 10) {\n    mm = "0" + mm;\n  }\n\n  let today = yyyy + "-" + mm + "-" + dd;\n  return today;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/utils/getSystemDate.js?'
        )

        /***/
      },

    /***/ "./src/utils/inputValidator.js":
      /*!*************************************!*\
  !*** ./src/utils/inputValidator.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ inputValidator)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ "./src/events.js");\n\n\n// Will validate and array of inputs\nfunction inputValidator(inputs) {\n  for (let i = 0; i < inputs.length; i++) {\n    let input = inputs[i];\n    let data = input.value.trim();\n\n    if (data.length === 0) {\n      _events__WEBPACK_IMPORTED_MODULE_0__["default"].emit("displayInputError", input);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/utils/inputValidator.js?'
        )

        /***/
      },

    /***/ "./src/asset/icon-add.png":
      /*!********************************!*\
  !*** ./src/asset/icon-add.png ***!
  \********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "5fff2750e4369144388b.png";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-add.png?'
        )

        /***/
      },

    /***/ "./src/asset/icon-delete.png":
      /*!***********************************!*\
  !*** ./src/asset/icon-delete.png ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "a36af460f02a03b6fd30.png";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-delete.png?'
        )

        /***/
      },

    /***/ "./src/asset/icon-discord.png":
      /*!************************************!*\
  !*** ./src/asset/icon-discord.png ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "9d66702162f005cdbd06.png";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-discord.png?'
        )

        /***/
      },

    /***/ "./src/asset/icon-inbox.png":
      /*!**********************************!*\
  !*** ./src/asset/icon-inbox.png ***!
  \**********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "1f148003550a19537bac.png";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-inbox.png?'
        )

        /***/
      },

    /***/ "./src/asset/icon-logo.png":
      /*!*********************************!*\
  !*** ./src/asset/icon-logo.png ***!
  \*********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "e7c37d50f8d56a263c45.png";\n\n//# sourceURL=webpack://to-do-list/./src/asset/icon-logo.png?'
        )

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
      /*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  "@babel/helpers - typeof";\n\n  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/typeof.js?'
        )

        /***/
      },

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    )
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ ;(() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module
      /******/ __webpack_require__.d(getter, { a: getter })
      /******/ return getter
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ ;(() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/global */
  /******/ ;(() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis
      /******/ try {
        /******/ return this || new Function("return this")()
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window
        /******/
      }
      /******/
    })()
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ ;(() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ ;(() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        })
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true })
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ ;(() => {
    /******/ var scriptUrl
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + ""
    /******/ var document = __webpack_require__.g.document
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script")
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser")
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/")
    /******/ __webpack_require__.p = scriptUrl
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ ;(() => {
    /******/ __webpack_require__.nc = undefined
    /******/
  })()
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js")
  /******/
  /******/
})()
