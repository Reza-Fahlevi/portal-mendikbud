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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__("VLDe");

// CONCATENATED MODULE: ./src/utils/useDarkMode.js

const useDarkMode = () => {
  const {
    0: theme,
    1: setTheme
  } = Object(external_react_["useState"])('light');
  const {
    0: mountedComponent,
    1: setMountedComponent
  } = Object(external_react_["useState"])(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  Object(external_react_["useEffect"])(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};
// CONCATENATED MODULE: ./src/utils/Themes.js
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
// CONCATENATED MODULE: ./src/utils/Meta.js

var __jsx = external_react_default.a.createElement;


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
  return __jsx(head_default.a, null, __jsx("meta", {
    charSet: "UTF-8"
  }), __jsx("meta", {
    name: "next-head-count"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), __jsx("meta", {
    name: "description",
    content: description
  }), __jsx("meta", {
    name: "theme-color",
    content: "#2F3136"
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US"
  }), __jsx("meta", {
    property: "og:title",
    content: name
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    property: "og:url",
    content: site
  }), __jsx("meta", {
    property: "og:image",
    content: image
  }), __jsx("meta", {
    property: "og:image:secure_url",
    content: image
  }), __jsx("meta", {
    property: "og:image:type",
    content: "image/png"
  }), __jsx("meta", {
    property: "og:image:width",
    content: "500"
  }), __jsx("meta", {
    property: "og:image:height",
    content: "500"
  }), __jsx("meta", {
    property: "og:image:alt",
    content: name
  }), __jsx("meta", {
    property: "og:description",
    content: description
  }), __jsx("meta", {
    property: "og:site_name",
    content: name
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    name: "twitter:title",
    content: name
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@randywardhana3"
  }), __jsx("meta", {
    name: "twitter:site:id",
    content: "@randywardhana3 "
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "@randywardhana3"
  }), __jsx("meta", {
    name: "twitter:description",
    content: description
  }), __jsx("meta", {
    name: "twitter:image",
    content: image
  }), __jsx("meta", {
    name: "branch:deeplink:$desktop_url",
    content: site
  }), __jsx("meta", {
    name: "branch:deeplink:$ios_deeplink_path",
    content: name
  }), __jsx("meta", {
    name: "branch:deeplink:$android_deeplink_path",
    content: name
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/styles.css"
  }), __jsx("title", null, name));
};

/* harmony default export */ var utils_Meta = (Meta);
// EXTERNAL MODULE: ./src/utils/FirebaseRequest.js + 1 modules
var FirebaseRequest = __webpack_require__("LzZN");

// CONCATENATED MODULE: ./src/pages/_app.js
var _app_jsx = external_react_default.a.createElement;








const Global = external_styled_components_["createGlobalStyle"]`
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
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return _app_jsx(external_styled_components_["ThemeProvider"], {
    theme: themeMode
  }, _app_jsx(external_react_default.a.Fragment, null, _app_jsx(Global, null), _app_jsx(Component
  /*{...pageProps}*/
  , {
    theme: themeMode,
    toggle: themeToggler
  })));
} // App.getInitialProps = async () => {
//   const responseMeta = await getMeta()
//   return {
//     responseMeta
//   }
// }


/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "LzZN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: getMeta, getHeader, getSkills, getProjects, storeImage

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// CONCATENATED MODULE: ./src/utils/Firebase.js

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
if (!external_firebase_default.a.apps.length) external_firebase_default.a.initializeApp(firebaseConfig);else external_firebase_default.a.app();
/* harmony default export */ var Firebase = (external_firebase_default.a);
// CONCATENATED MODULE: ./src/utils/FirebaseRequest.js




const getMeta = async () => {
  try {
    let snapshot = await Firebase.database().ref(`meta/`).once('value');
    return snapshot.val();
  } catch (e) {
    throw e;
  }
};

const getHeader = async () => {
  try {
    let snapshot = await Firebase.database().ref(`header/`).once('value');
    return snapshot.val();
  } catch (e) {
    throw e;
  }
};

const getSkills = async () => {
  try {
    let snapshot = await Firebase.database().ref(`skills/`).once('value');
    return snapshot.val();
  } catch (e) {
    throw e;
  }
};

const getProjects = async () => {
  try {
    let snapshot = await Firebase.database().ref(`projects/`).once('value');
    return snapshot.val();
  } catch (e) {
    throw e;
  }
};

const storeImage = async file => {
  let fileName = Object(external_uuid_["v4"])();

  try {
    let snapshot = await Firebase.storage().ref(`/projects/${fileName}`).put(file);
    let getURL = await Firebase.storage().ref('projects').child(fileName).getDownloadURL();
  } catch (e) {
    throw e;
  }
};



/***/ }),

/***/ "VLDe":
/***/ (function(module, exports) {



/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });