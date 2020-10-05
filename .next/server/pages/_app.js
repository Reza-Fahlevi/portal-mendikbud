module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_useDarkMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useDarkMode */ "./src/utils/useDarkMode.js");
/* harmony import */ var _utils_Themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Themes */ "./src/utils/Themes.js");
/* harmony import */ var _utils_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Meta */ "./src/utils/Meta.js");
/* harmony import */ var _utils_FirebaseRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/FirebaseRequest */ "./src/utils/FirebaseRequest.js");
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Global = styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"]`
  ::-moz-selection
    color: ${({
  theme
}) => theme.background};
    background: ${({
  theme
}) => theme.primary};
  }

  ::selection {
    color: ${({
  theme
}) => theme.background};
    background: ${({
  theme
}) => theme.primary};
  }

  body {
    background: ${({
  theme
}) => theme.background};
    color: ${({
  theme
}) => theme.secondary};
    font-family: ${({
  theme
}) => theme.font};
    margin: 0px;
    padding: 0;
    transition: ${({
  theme
}) => theme.transition};
  }
`;

function App(props) {
  const {
    Component //  pageProps,
    // responseMeta: {
    //   description, image, name, site
    // }

  } = props;
  const [theme, themeToggler] = Object(_utils_useDarkMode__WEBPACK_IMPORTED_MODULE_4__["useDarkMode"])();
  const themeMode = theme === 'light' ? _utils_Themes__WEBPACK_IMPORTED_MODULE_5__["lightTheme"] : _utils_Themes__WEBPACK_IMPORTED_MODULE_5__["darkTheme"];
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: themeMode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Global, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(Component
  /*{...pageProps}*/
  , {
    theme: themeMode,
    toggle: themeToggler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })));
} // App.getInitialProps = async () => {
//   const responseMeta = await getMeta()
//   return {
//     responseMeta
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/utils/Firebase.js":
/*!*******************************!*\
  !*** ./src/utils/Firebase.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
if (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);else firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app();
/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/utils/FirebaseRequest.js":
/*!**************************************!*\
  !*** ./src/utils/FirebaseRequest.js ***!
  \**************************************/
/*! exports provided: getMeta, getHeader, getSkills, getProjects, storeImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeta", function() { return getMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkills", function() { return getSkills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeImage", function() { return storeImage; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firebase */ "./src/utils/Firebase.js");




const getMeta = async () => {
  try {
    let snapshot = await _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref(`meta/`).once('value');
    return snapshot.val();
  } catch (e) {
    throw e;
  }
};

const getHeader = async () => {
  try {
    let snapshot = await _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref(`header/`).once('value');
    return snapshot.val();
  } catch (e) {
    throw e;
  }
};

const getSkills = async () => {
  try {
    let snapshot = await _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref(`skills/`).once('value');
    return snapshot.val();
  } catch (e) {
    throw e;
  }
};

const getProjects = async () => {
  try {
    let snapshot = await _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref(`projects/`).once('value');
    return snapshot.val();
  } catch (e) {
    throw e;
  }
};

const storeImage = async file => {
  let fileName = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();

  try {
    let snapshot = await _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref(`/projects/${fileName}`).put(file);
    let getURL = await _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref('projects').child(fileName).getDownloadURL();
  } catch (e) {
    throw e;
  }
};



/***/ }),

/***/ "./src/utils/Meta.js":
/*!***************************!*\
  !*** ./src/utils/Meta.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\utils\\Meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Meta = ({
  description,
  image,
  name,
  site
}) => {
  name = name || 'Randy Wardhana';
  description = description || 'Hi There! I’m Randy Wardhana, a frontend engineer and a weeb';
  image = image || 'https://firebasestorage.googleapis.com/v0/b/site-randy.appspot.com/o/avatar%2Fbandy.png?alt=media&token=ba3bab28-929d-4ec1-acb0-0a25450f656a';
  site = site || 'https://site-randy.vercel.app';
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "next-head-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#2F3136",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:title",
    content: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:url",
    content: site,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image",
    content: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:secure_url",
    content: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:type",
    content: "image/png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: "500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: "500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:alt",
    content: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@randywardhana3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:site:id",
    content: "@randywardhana3 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "@randywardhana3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "branch:deeplink:$desktop_url",
    content: site,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "branch:deeplink:$ios_deeplink_path",
    content: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "branch:deeplink:$android_deeplink_path",
    content: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/styles.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, name));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./src/utils/Themes.js":
/*!*****************************!*\
  !*** ./src/utils/Themes.js ***!
  \*****************************/
/*! exports provided: lightTheme, darkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
const lightTheme = {
  background: '#FFFFFF',
  primary: '#2F3136',
  secondary: '#9EA4A9',
  font: "'Poppins', sans-serif",
  transition: 'all .3s ease-in-out',
  theme: 'light'
};
const darkTheme = {
  background: '#2F3136',
  primary: '#FFFFFF',
  secondary: '#9EA4A9',
  font: "'Poppins', sans-serif",
  transition: 'all .3s ease-in-out',
  theme: 'dark'
};

/***/ }),

/***/ "./src/utils/useDarkMode.js":
/*!**********************************!*\
  !*** ./src/utils/useDarkMode.js ***!
  \**********************************/
/*! exports provided: useDarkMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDarkMode", function() { return useDarkMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDarkMode = () => {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('light');
  const {
    0: mountedComponent,
    1: setMountedComponent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9GaXJlYmFzZVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1RoZW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXNlRGFya01vZGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImZvbnQiLCJ0cmFuc2l0aW9uIiwiQXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJ0aGVtZVRvZ2dsZXIiLCJ1c2VEYXJrTW9kZSIsInRoZW1lTW9kZSIsImxpZ2h0VGhlbWUiLCJkYXJrVGhlbWUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIiwiYXV0aERvbWFpbiIsIkFVVEhfRE9NQUlOIiwiZGF0YWJhc2VVUkwiLCJEQVRBQkFTRV9VUkwiLCJwcm9qZWN0SWQiLCJQUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIlNUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJNRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJBUFBfSUQiLCJtZWFzdXJlbWVudElkIiwiTUVBU1VSRU1FTlRfSUQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBwIiwiZ2V0TWV0YSIsInNuYXBzaG90IiwiZGF0YWJhc2UiLCJyZWYiLCJvbmNlIiwidmFsIiwiZSIsImdldEhlYWRlciIsImdldFNraWxscyIsImdldFByb2plY3RzIiwic3RvcmVJbWFnZSIsImZpbGUiLCJmaWxlTmFtZSIsInY0Iiwic3RvcmFnZSIsInB1dCIsImdldFVSTCIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJNZXRhIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIm5hbWUiLCJzaXRlIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsIm1vdW50ZWRDb21wb25lbnQiLCJzZXRNb3VudGVkQ29tcG9uZW50Iiwic2V0TW9kZSIsIm1vZGUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlRWZmZWN0IiwibG9jYWxUaGVtZSIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixF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QUVPLE1BQU1VLFdBQVcsR0FBRyxNQUFNO0FBQy9CLFFBQU07QUFBQSxPQUFDVixLQUFEO0FBQUEsT0FBUThEO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsT0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ0Ysc0RBQVEsQ0FBQyxLQUFELENBQXhEOztBQUVBLFFBQU1HLE9BQU8sR0FBR0MsSUFBSSxJQUFJO0FBQ3RCQyxVQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDSCxJQUFyQztBQUNBTCxZQUFRLENBQUNLLElBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBS0EsUUFBTTFELFlBQVksR0FBRyxNQUFNO0FBQ3pCVCxTQUFLLEtBQUssT0FBVixHQUFvQmtFLE9BQU8sQ0FBQyxNQUFELENBQTNCLEdBQXNDQSxPQUFPLENBQUMsT0FBRCxDQUE3QztBQUNELEdBRkQ7O0FBSUFLLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFVBQVUsR0FBR0osTUFBTSxDQUFDQyxZQUFQLENBQW9CSSxPQUFwQixDQUE0QixPQUE1QixDQUFuQjtBQUNBRCxjQUFVLEdBQUdWLFFBQVEsQ0FBQ1UsVUFBRCxDQUFYLEdBQTBCTixPQUFPLENBQUMsT0FBRCxDQUEzQztBQUNBRCx1QkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBQU8sQ0FBQ2pFLEtBQUQsRUFBUVMsWUFBUixFQUFzQnVELGdCQUF0QixDQUFQO0FBQ0QsQ0FwQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUCxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcydcblxuaW1wb3J0IHsgdXNlRGFya01vZGUgfSBmcm9tICcuLi91dGlscy91c2VEYXJrTW9kZSdcbmltcG9ydCB7IGxpZ2h0VGhlbWUsIGRhcmtUaGVtZSB9IGZyb20gJy4uL3V0aWxzL1RoZW1lcydcbmltcG9ydCBNZXRhIGZyb20gJy4uL3V0aWxzL01ldGEnXG5pbXBvcnQgeyBnZXRNZXRhIH0gZnJvbSAnLi4vdXRpbHMvRmlyZWJhc2VSZXF1ZXN0JztcblxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIDo6LW1vei1zZWxlY3Rpb25cbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICB9XG5cbiAgOjpzZWxlY3Rpb24ge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gIH1cblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNlY29uZGFyeX07XG4gICAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udH07XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259O1xuICB9XG5gXG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICBjb25zdCB7IFxuICAgIENvbXBvbmVudCxcbiAgICAvLyAgcGFnZVByb3BzLFxuICAgIC8vIHJlc3BvbnNlTWV0YToge1xuICAgIC8vICAgZGVzY3JpcHRpb24sIGltYWdlLCBuYW1lLCBzaXRlXG4gICAgLy8gfVxuICB9ID0gcHJvcHNcbiAgXG4gIGNvbnN0IFt0aGVtZSwgdGhlbWVUb2dnbGVyXSA9IHVzZURhcmtNb2RlKClcblxuICBjb25zdCB0aGVtZU1vZGUgPSB0aGVtZSA9PT0gJ2xpZ2h0JyA/IGxpZ2h0VGhlbWUgOiBkYXJrVGhlbWVcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZU1vZGV9PlxuICAgICAgPD5cbiAgICAgICAgPEdsb2JhbCAvPlxuICAgICAgICB7LyogPE1ldGEgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBpbWFnZT17aW1hZ2V9IG5hbWU9e25hbWV9IHNpdGU9e3NpdGV9IC8+ICovfVxuICAgICAgICA8Q29tcG9uZW50IC8qey4uLnBhZ2VQcm9wc30qLyB0aGVtZT17dGhlbWVNb2RlfSB0b2dnbGU9e3RoZW1lVG9nZ2xlcn0gLz5cbiAgICAgIDwvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG4vLyBBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXNwb25zZU1ldGEgPSBhd2FpdCBnZXRNZXRhKClcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHJlc3BvbnNlTWV0YVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5BVVRIX0RPTUFJTixcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lELFxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk1FU1NBR0lOR19TRU5ERVJfSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5BUFBfSUQsXG4gIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk1FQVNVUkVNRU5UX0lEXG59XG5cbmlmKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcbmVsc2UgZmlyZWJhc2UuYXBwKClcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2UiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuL0ZpcmViYXNlJ1xuXG5jb25zdCBnZXRNZXRhID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGxldCBzbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGBtZXRhL2ApLm9uY2UoJ3ZhbHVlJylcbiAgICByZXR1cm4gc25hcHNob3QudmFsKClcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IGVcbiAgfVxufVxuXG5jb25zdCBnZXRIZWFkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IHNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoYGhlYWRlci9gKS5vbmNlKCd2YWx1ZScpXG4gICAgcmV0dXJuIHNuYXBzaG90LnZhbCgpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cblxuY29uc3QgZ2V0U2tpbGxzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGxldCBzbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGBza2lsbHMvYCkub25jZSgndmFsdWUnKVxuICAgIHJldHVybiBzbmFwc2hvdC52YWwoKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG5cbmNvbnN0IGdldFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGxldCBzbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGBwcm9qZWN0cy9gKS5vbmNlKCd2YWx1ZScpXG4gICAgcmV0dXJuIHNuYXBzaG90LnZhbCgpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cblxuY29uc3Qgc3RvcmVJbWFnZSA9IGFzeW5jIChmaWxlKSA9PiB7XG4gIGxldCBmaWxlTmFtZSA9IHY0KClcblxuICB0cnkge1xuICAgIGxldCBzbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoYC9wcm9qZWN0cy8ke2ZpbGVOYW1lfWApLnB1dChmaWxlKVxuICAgIGxldCBnZXRVUkwgPSBhd2FpdCBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCdwcm9qZWN0cycpLmNoaWxkKGZpbGVOYW1lKS5nZXREb3dubG9hZFVSTCgpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0TWV0YSwgZ2V0SGVhZGVyLCBnZXRTa2lsbHMsIGdldFByb2plY3RzLCBzdG9yZUltYWdlIH0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IE1ldGEgPSAoeyBkZXNjcmlwdGlvbiwgaW1hZ2UsIG5hbWUsIHNpdGUgfSkgPT4ge1xuICAgIG5hbWUgPSBuYW1lfHwgJ1JhbmR5IFdhcmRoYW5hJ1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgJ0hpIFRoZXJlISBJ4oCZbSBSYW5keSBXYXJkaGFuYSwgYSBmcm9udGVuZCBlbmdpbmVlciBhbmQgYSB3ZWViJ1xuICAgIGltYWdlID0gaW1hZ2UgfHwgJ2h0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2Ivc2l0ZS1yYW5keS5hcHBzcG90LmNvbS9vL2F2YXRhciUyRmJhbmR5LnBuZz9hbHQ9bWVkaWEmdG9rZW49YmEzYmFiMjgtOTI5ZC00ZWMxLWFjYjAtMGEyNTQ1MGY2NTZhJ1xuICAgIHNpdGUgPSBzaXRlIHx8ICdodHRwczovL3NpdGUtcmFuZHkudmVyY2VsLmFwcCdcblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgY2hhclNldD0nVVRGLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibmV4dC1oZWFkLWNvdW50XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyAvPlxuICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD0nIzJGMzEzNicgLz5cblxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtuYW1lfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PXtzaXRlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PXtpbWFnZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJyBjb250ZW50PXtpbWFnZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9wbmcnIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2U6d2lkdGgnIGNvbnRlbnQ9JzUwMCcgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTpoZWlnaHQnIGNvbnRlbnQ9JzUwMCcgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTphbHQnIGNvbnRlbnQ9e25hbWV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17bmFtZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cblxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtuYW1lfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAcmFuZHl3YXJkaGFuYTNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZTppZFwiIGNvbnRlbnQ9XCJAcmFuZHl3YXJkaGFuYTMgXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHJhbmR5d2FyZGhhbmEzXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlfSAvPlxuXG4gICAgICA8bWV0YSBuYW1lPVwiYnJhbmNoOmRlZXBsaW5rOiRkZXNrdG9wX3VybFwiIGNvbnRlbnQ9e3NpdGV9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYnJhbmNoOmRlZXBsaW5rOiRpb3NfZGVlcGxpbmtfcGF0aFwiIGNvbnRlbnQ9e25hbWV9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYnJhbmNoOmRlZXBsaW5rOiRhbmRyb2lkX2RlZXBsaW5rX3BhdGhcIiBjb250ZW50PXtuYW1lfSAvPlxuXG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy9jc3Mvc3R5bGVzLmNzcycgLz5cbiAgICAgIDx0aXRsZT57bmFtZX08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXRhIiwiZXhwb3J0IGNvbnN0IGxpZ2h0VGhlbWUgPSB7XG4gIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcbiAgcHJpbWFyeTogJyMyRjMxMzYnLFxuICBzZWNvbmRhcnk6ICcjOUVBNEE5JyxcbiAgZm9udDogXCInUG9wcGlucycsIHNhbnMtc2VyaWZcIixcbiAgdHJhbnNpdGlvbjogJ2FsbCAuM3MgZWFzZS1pbi1vdXQnLFxuICB0aGVtZTogJ2xpZ2h0J1xufVxuXG5leHBvcnQgY29uc3QgZGFya1RoZW1lID0ge1xuICBiYWNrZ3JvdW5kOiAnIzJGMzEzNicsXG4gIHByaW1hcnk6ICcjRkZGRkZGJyxcbiAgc2Vjb25kYXJ5OiAnIzlFQTRBOScsXG4gIGZvbnQ6IFwiJ1BvcHBpbnMnLCBzYW5zLXNlcmlmXCIsXG4gIHRyYW5zaXRpb246ICdhbGwgLjNzIGVhc2UtaW4tb3V0JyxcbiAgdGhlbWU6ICdkYXJrJ1xufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IHVzZURhcmtNb2RlID0gKCkgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpXG4gIGNvbnN0IFttb3VudGVkQ29tcG9uZW50LCBzZXRNb3VudGVkQ29tcG9uZW50XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgY29uc3Qgc2V0TW9kZSA9IG1vZGUgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBtb2RlKVxuICAgIHNldFRoZW1lKG1vZGUpXG4gIH1cblxuICBjb25zdCB0aGVtZVRvZ2dsZXIgPSAoKSA9PiB7XG4gICAgdGhlbWUgPT09ICdsaWdodCcgPyBzZXRNb2RlKCdkYXJrJykgOiBzZXRNb2RlKCdsaWdodCcpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgICBsb2NhbFRoZW1lID8gc2V0VGhlbWUobG9jYWxUaGVtZSkgOiBzZXRNb2RlKCdsaWdodCcpXG4gICAgc2V0TW91bnRlZENvbXBvbmVudCh0cnVlKVxuICB9LCBbXSlcblxuICByZXR1cm4gW3RoZW1lLCB0aGVtZVRvZ2dsZXIsIG1vdW50ZWRDb21wb25lbnRdXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=