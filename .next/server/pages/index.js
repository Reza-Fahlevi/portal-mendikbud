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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/Contact/index.js":
/*!*****************************************!*\
  !*** ./src/components/Contact/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Svg */ "./src/components/Svg/index.js");
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\components\\Contact\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContainerHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  align-items: center;
  display: flex;
  margin: 16px 0;
  padding: 16px 0;
  transition: ${({
  theme
}) => theme.transition}; 
`;
const TitleHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  color: ${({
  theme
}) => theme.primary};
  transition: ${({
  theme
}) => theme.transition}; 
`;
const ContainerContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-wrap: wrap;
`;
const ContainerForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 48%;
  transition: ${({
  theme
}) => theme.transition};
  
  ${props => props.size.width < 768 && `
    width: 100% !important;
  `}
`;
const ContainerSocialMedia = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ContainerForm)`
  transition: ${({
  theme
}) => theme.transition};

  ${props => props.size.width < 768 && `
    margin: 32px 0;
    text-align: center;
  `}
`;
const FormContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-bottom: 16px;

  label {
    color: ${({
  theme
}) => theme.primary};
    font-size: 14px;
    font-weight: 300;
  }
`;
const Subject = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  background: ${({
  theme
}) => theme.primary};
  border: none;
  border-radius: 4px;
  color: ${({
  theme
}) => theme.background};
  font-family: ${({
  theme
}) => theme.font};
  margin: 8px 0;
  outline: none;
  padding: 12px 8px;
  width: 95%;
  
  &::placeholder {
    color: ${({
  theme
}) => theme.background};
  }
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea`
  background: ${({
  theme
}) => theme.primary};
  border: none;
  border-radius: 4px;
  color: ${({
  theme
}) => theme.background};
  font-family: ${({
  theme
}) => theme.font};
  margin: 8px 0;
  max-height: 160px;
  max-width: 95%;
  min-height: 72px;
  min-width: 95%;
  outline: none;
  padding: 12px 8px;

  &::placeholder {
    color: ${({
  theme
}) => theme.background};
  }
`;
const Submit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background: ${({
  theme
}) => theme.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({
  theme
}) => theme.font};
  margin: 8px 0;
  outline: none;
  padding: 12px 0;
  text-align: center;
  width: 50%;
  
  a {
    color: ${({
  theme
}) => theme.background};
    text-decoration: none;
  }
`;
const Url = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  display: flex;
  text-decoration: none;

  ${props => props.mobile && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    margin: 16px;
  `}
`;
const SocialMediaContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  margin-bottom: 24px;
  margin-left: 32px;
`;
const SocialMediaTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  flex-direction: column;
  margin-left: 16px;
`;
const SocialMediaLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  color: ${({
  theme
}) => theme.primary};
  font-weight: 300;
  margin-block-end: 0;
  margin-block-start: 0;
`;
const SocialMediaValue = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SocialMediaLabel)`
  font-weight: 500;
  margin-top: 4px;
`;
const MobileSocialMedia = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  align-items: center;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
`;

const Contact = ({
  size,
  theme
}) => {
  const [subject, setSubject] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const [textArea, setTextArea] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const data = [{
    title: 'GitHub',
    name: 'RandyWardhana',
    icon: __jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__["GitHub"], {
      fill: theme.primary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }
    }),
    url: 'https://github.com/RandyWardhana'
  }, {
    title: 'GitLab',
    name: 'randy_w',
    icon: __jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__["GitLab"], {
      fill: theme.primary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }
    }),
    url: 'https://gitlab.com/randy_w'
  }, {
    title: 'Phone / WhatsApp',
    name: '+62 813 8104 9196',
    icon: __jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__["WhatsApp"], {
      fill: theme.primary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }),
    url: 'https://api.whatsapp.com/send?phone=6281381049196'
  }, {
    title: 'LinkedIn',
    name: 'Randy Wardhana',
    icon: __jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__["LinkedIn"], {
      fill: theme.primary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }
    }),
    url: 'https://www.linkedin.com/in/randy-wardhana-a7b1a017a/'
  }];

  const renderSocialMedia = () => {
    return data.map((item, index) => {
      return __jsx(SocialMediaContainer, {
        key: index,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }
      }, __jsx(Url, {
        mobile: false,
        href: item.url,
        target: "_blank",
        rel: "noopener noreferer",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }
      }, item.icon, __jsx(SocialMediaTextContainer, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 15
        }
      }, __jsx(SocialMediaLabel, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 17
        }
      }, item.title), __jsx(SocialMediaValue, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 17
        }
      }, item.name))));
    });
  };

  const renderMobileSocialMedia = () => {
    return __jsx(MobileSocialMedia, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 7
      }
    }, data.map((item, index) => {
      return __jsx(Url, {
        mobile: true,
        key: index,
        href: item.url,
        target: "_blank",
        rel: "noopener noreferer",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 13
        }
      }, item.icon);
    }));
  };

  const sendData = () => {
    if (textArea.trim() !== '') window.open(`mailto:randywardhana37@gmail.com?subject=${subject}&body=${textArea}`);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ContainerHeader, {
    id: "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }, __jsx(TitleHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, "CONTACT")), __jsx(ContainerContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }, __jsx(ContainerForm, {
    size: size,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, __jsx(FormContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "subject",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, "Subject"), __jsx(Subject, {
    id: "subject",
    name: "subject",
    onChange: e => setSubject(e.target.value),
    placeholder: "Subject (Optional)",
    type: "text",
    value: subject,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  })), __jsx(FormContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, "Message"), __jsx(Content, {
    id: "message",
    name: "message",
    onChange: e => setTextArea(e.target.value),
    placeholder: "Message",
    rows: 4,
    value: textArea,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  })), __jsx(Submit, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }, __jsx("a", {
    onClick: () => sendData(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, "Submit"))), __jsx(ContainerSocialMedia, {
    size: size,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  }, size.width < 768 ? renderMobileSocialMedia() : renderSocialMedia())));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Svg */ "./src/components/Svg/index.js");
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\components\\Footer\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContainerHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 96px 0 0;
  
  ${props => props.size.width < 768 && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    margin: 16px 0 0;
  `}
`;
const TitleHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  align-items: center;
  color: ${({
  theme
}) => theme.primary};
  display: flex;
  font-weight: 300;
  transition: ${({
  theme
}) => theme.transition}; 

  @media(max-width: 375px) {
    font-size: 14px;
  }

  @media(max-width: 320px) {
    font-size: 11.75px;
  }
`;
const Author = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  color: ${({
  theme
}) => theme.primary};
  font-weight: 500;
  margin: 0 4px;
  text-decoration: none;
`;

const Footer = ({
  size,
  theme
}) => __jsx(ContainerHeader, {
  size: size,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }
}, __jsx(TitleHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }
}, "Made with\u2002", __jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__["Heart"], {
  size: size.width <= 375 ? 14 : 24,
  fill: theme.primary,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 22
  }
}), "\u2002by", __jsx(Author, {
  href: "https://github.com/RandyWardhana",
  target: "_blank",
  rel: "noopener noreferer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
}, "Randy Wardhana")));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Svg */ "./src/components/Svg/index.js");
/* harmony import */ var _utils_greetings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/greetings */ "./src/utils/greetings.js");
/* harmony import */ var _utils_FirebaseRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/FirebaseRequest */ "./src/utils/FirebaseRequest.js");
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\components\\Header\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  margin: 32px 0;
  
  ${props => props.size.width < 768 && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    justify-content: center;
  `}
`;
const ProfileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  flex-direction: column;

  ${props => props.size.width < 768 && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    text-align: center;
  `}
`;
const Greeting = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  font-weight: 400;
`;
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  margin-block-end: 0;
  margin-block-start: 0;
  transition: ${({
  theme
}) => theme.transition};
`;
const FullName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  color: ${({
  theme
}) => theme.primary};
  margin-left: 8px;
  transition: ${({
  theme
}) => theme.transition};
  width: 50px;

  ${props => props.size.width < 768 && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    width: auto;
  `}
`;
const Profession = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  font-size: 20px;
`;
const DownloadCV = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  align-items: center;
  background: ${({
  theme
}) => theme.background};
  border: 1px solid ${({
  theme
}) => theme.primary};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  outline: none;
  padding: 8px 16px;
  transition: ${({
  theme
}) => theme.transition};

  ${props => props.size.width < 768 && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    margin: 0 auto;
  `}
`;
const DownloadText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  color: ${({
  theme
}) => theme.primary};
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  margin-left: 16px;
  transition: ${({
  theme
}) => theme.transition};
`;
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  height: 400px;
  margin-right: 64px;
  width: 400px;
  `;
const Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  border-radius: 8px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Header = ({
  size,
  theme
}) => {
  // const handleStoreImage = async (e) => {
  //   await storeImage(e.target.files[0])
  // }
  return __jsx(Container, {
    size: size,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx(ProfileContainer, {
    size: size,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(Greeting, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "Good Ohayou"), __jsx(Name, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "I'm", __jsx(FullName, {
    size: size,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Reza Fahlevi")), __jsx(Profession, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "Jagoan Neon")), size.width >= 768 && __jsx(ImageContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Svg */ "./src/components/Svg/index.js");
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\components\\Navbar\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background: ${({
  theme
}) => theme.background};
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.35);
  display: flex;
  position: fixed;
  margin: 0;
  padding: 0;
  transition: ${({
  theme
}) => theme.transition};
  width: 100%;
  z-index: 999;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  width: 100%;

  @media (max-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  align-items: center;
  display: flex;
`;
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  margin-block-end: 0;
  margin-block-start: 0;
  
  a {
    color: ${({
  theme
}) => theme.secondary};
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-right: 16px;
    text-decoration: none;
    transition: ${({
  theme
}) => theme.transition};

    &:hover {
      color: ${({
  theme
}) => theme.primary};
    }
  }
  ${props => props.active && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    a {
      color: ${({
  theme
}) => theme.primary};
      font-weight: 500;
    }
  `}
  ${props => props.mobile && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    padding: 12px 16px;
  `}
`;
const Modal = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background: ${({
  theme
}) => theme.primary};
  position: fixed;
  transition: ${({
  theme
}) => theme.transition};
  width: 100%;
  z-index: 1000;

  span {
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 16px;
  }
`;

const Navbar = ({
  size,
  theme,
  toggle
}) => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  }, [open]);

  const handleMenu = () => {
    setOpen(!open);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx(MenuContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx(StyledLink, {
    active: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("a", {
    style: {
      color: theme.primary,
      fontWeight: '700'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, "RANDY")))), size.width <= 576 && __jsx("span", {
    style: {
      transition: theme.transition
    },
    onClick: () => handleMenu(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx(_Svg__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    space: 16,
    size: 20,
    fill: theme.primary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  })), size.width > 576 && __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx(StyledLink, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#project",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, "Project"))), __jsx(StyledLink, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#skills",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, "Skills"))), __jsx(StyledLink, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#contact",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "Contact"))), __jsx("span", {
    style: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex'
    },
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, theme.theme == 'light' ? __jsx(_Svg__WEBPACK_IMPORTED_MODULE_3__["Moon"], {
    size: 20,
    fill: theme.secondary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 45
    }
  }) : __jsx(_Svg__WEBPACK_IMPORTED_MODULE_3__["Sun"], {
    size: 20,
    fill: theme.secondary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 89
    }
  })))))), open && __jsx(Modal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx("span", {
    style: {
      justifyContent: 'flex-end'
    },
    onClick: () => handleMenu(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, __jsx(_Svg__WEBPACK_IMPORTED_MODULE_3__["Close"], {
    space: 16,
    size: 20,
    fill: theme.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  })), __jsx(StyledLink, {
    onClick: () => handleMenu(),
    mobile: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#project",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, "Project"))), __jsx(StyledLink, {
    onClick: () => handleMenu(),
    mobile: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#skills",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, "Skills"))), __jsx(StyledLink, {
    onClick: () => handleMenu(),
    mobile: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/#contact",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, "Contact"))), __jsx("span", {
    style: {
      marginBottom: 16
    },
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, theme.theme == 'light' ? __jsx(_Svg__WEBPACK_IMPORTED_MODULE_3__["Moon"], {
    size: 20,
    fill: theme.secondary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 39
    }
  }) : __jsx(_Svg__WEBPACK_IMPORTED_MODULE_3__["Sun"], {
    size: 20,
    fill: theme.secondary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 83
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Project/index.js":
/*!*****************************************!*\
  !*** ./src/components/Project/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\components\\Project\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContainerHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  transition: ${({
  theme
}) => theme.transition}; 
`;
const TitleHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1`
  color: ${({
  theme
}) => theme.primary};
  transition: ${({
  theme
}) => theme.transition};
`;
const SeeMore = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a`
  color: ${({
  theme
}) => theme.secondary};
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-right: 16px;
  text-decoration: none;
  transition: ${({
  theme
}) => theme.transition};

  &:hover {
    color: ${({
  theme
}) => theme.primary};
  }

  ${props => props.size.width < 425 && `
    display: none
  `}
`;
const ContainerContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  flex-wrap: wrap;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  cursor: pointer;
  padding-bottom: 32px;
  width: 48%;

  ${props => props.index == 0 ? `
    margin-left: 0;
  ` : `
    margin-left: ${props.index % 2 !== 0 ? '16px !important' : 0};
  `}

  ${props => props.size.width < 768 && `
    width: 100% !important;
    margin: 0 !important;
  `}
`;
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  border-radius: 8px;
  height: 176px;
  width: 100%;
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
  border-radius: 8px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
  color: ${({
  theme
}) => theme.primary};
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px !important;
  margin-block-end: 0;
  margin-block-start: 0;
  transition: ${({
  theme
}) => theme.transition};
`;
const Truncate = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin: 0 0 1em 0;
  overflow: hidden;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Title)`
  color: ${({
  theme
}) => theme.secondary};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

const Project = ({
  data,
  size
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ContainerHeader, {
  id: "project",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }
}, __jsx(TitleHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 7
  }
}, "PROJECT"), __jsx(SeeMore, {
  size: size,
  href: "https://github.com/RandyWardhana",
  target: "_blank",
  rel: "noopener noreferer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 7
  }
}, "See More on Github")), __jsx(ContainerContent, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }
}, __jsx(SeeMore, {
  size: size,
  href: "https://github.com/RandyWardhana",
  target: "_blank",
  rel: "noopener noreferer",
  style: {
    display: size.width < 425 ? 'inline-block' : 'none'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 7
  }
}, "See More on Github")));

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/components/Skills/index.js":
/*!****************************************!*\
  !*** ./src/components/Skills/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_DummyData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/DummyData */ "./src/utils/DummyData.js");
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\components\\Skills\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ContainerHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  align-items: center;
  display: flex;
  margin: 16px 0;
  padding: 16px 0;
  transition: ${({
  theme
}) => theme.transition}; 
  `;
const TitleHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  color: ${({
  theme
}) => theme.primary};
  transition: ${({
  theme
}) => theme.transition}; 
`;
const SwiperContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  object-fit: cover;
`;
const Skill = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  color: ${({
  theme
}) => theme.primary};
  font-size: 16px;
  font-weight: 400;
  transition: ${({
  theme
}) => theme.transition};
`;
const CustomDotItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li`
  background: ${({
  theme
}) => theme.secondary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 8px;
  padding: 8px;
  outline: none;
  transition: ${({
  theme
}) => theme.transition};
  
  &:hover {
    background: ${({
  theme
}) => theme.primary};
  }

  ${props => props.active && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    background: ${({
  theme
}) => theme.primary};
  `}
`;
const responsive = {
  desktop: {
    breakpoint: {
      max: 15360,
      min: 1024
    },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 375
    },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: {
      max: 374,
      min: 0
    },
    items: 2,
    slidesToSlide: 2
  }
};

const CustomDot = ({
  onClick,
  active
}) => __jsx(CustomDotItem, {
  active: active,
  onClick: e => {
    onClick();
    e.preventDefault();
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 3
  }
});

const Skills = ({
  theme,
  data
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ContainerHeader, {
  id: "skills",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }
}, __jsx(TitleHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 7
  }
}, "SKILLS")), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
  swipeable: true,
  draggable: true,
  showDots: true,
  responsive: responsive,
  ssr: true,
  keyBoardControl: true,
  renderDotsOutside: true,
  customTransition: "all .5s ease-in-out",
  containerClass: "carousel-container",
  removeArrowOnDeviceType: ["desktop", "tablet", "mobile"],
  dotListClass: "custom-dot-list-style",
  itemClass: "carousel-item-padding-40-px",
  customDot: __jsx(CustomDot, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 18
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }
}, Object(_utils_DummyData__WEBPACK_IMPORTED_MODULE_3__["SkillsData"])(theme.primary, theme.background).map((item, index) => __jsx(SwiperContainer, {
  key: index,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 9
  }
}, item.icon, __jsx(Skill, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 11
  }
}, item.caption)))));

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./src/components/Svg/index.js":
/*!*************************************!*\
  !*** ./src/components/Svg/index.js ***!
  \*************************************/
/*! exports provided: Menu, Close, Download, Heart, GitHub, GitLab, LinkedIn, WhatsApp, Moon, Sun, Loader, CSS, Discord, ExpressJS, Figma, HTML, JavaScript, Laravel, MySQL, NextJS, NodeJS, PhotoShop, PostgreSQL, ReactJS, Redux, TypeScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return Download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heart", function() { return Heart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHub", function() { return GitHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitLab", function() { return GitLab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedIn", function() { return LinkedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsApp", function() { return WhatsApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moon", function() { return Moon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sun", function() { return Sun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSS", function() { return CSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Discord", function() { return Discord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressJS", function() { return ExpressJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figma", function() { return Figma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML", function() { return HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaScript", function() { return JavaScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Laravel", function() { return Laravel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySQL", function() { return MySQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextJS", function() { return NextJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeJS", function() { return NodeJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoShop", function() { return PhotoShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostgreSQL", function() { return PostgreSQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactJS", function() { return ReactJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redux", function() { return Redux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeScript", function() { return TypeScript; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\components\\Svg\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Menu = ({
  fill,
  size,
  space
}) => __jsx("svg", {
  width: "24",
  height: "20",
  viewBox: "0 0 24 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    cursor: 'pointer',
    height: size,
    marginRight: space,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }
}, __jsx("rect", {
  y: "8",
  width: "24",
  height: "4",
  rx: "2",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }
}), __jsx("rect", {
  x: "12",
  width: "12",
  height: "4",
  rx: "2",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}), __jsx("rect", {
  y: "16",
  width: "12",
  height: "4",
  rx: "2",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}));

const Close = ({
  fill,
  size,
  space
}) => __jsx("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    cursor: 'pointer',
    height: size,
    marginRight: space,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M23.2476 19.6154L15.6322 11.9999L23.2476 4.38448C24.2506 3.38154 24.2507 1.75538 23.2478 0.752305C22.2446 -0.250769 20.6184 -0.25064 19.6156 0.752305L12 8.36776L4.38442 0.752305C3.3816 -0.250769 1.75519 -0.250769 0.752241 0.752305C-0.250705 1.75538 -0.250704 3.38154 0.75237 4.38448L8.36782 11.9999L0.75237 19.6154C-0.250704 20.6185 -0.250833 22.2446 0.752241 23.2476C1.75557 24.2508 3.38173 24.2504 4.38442 23.2476L12 15.6321L19.6156 23.2476C20.6183 24.2505 22.2447 24.2506 23.2478 23.2476C24.2508 22.2445 24.2507 20.6183 23.2476 19.6154Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}));

const Download = ({
  fill,
  size
}) => __jsx("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    transition: 'all .3s ease-in-out',
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM17 13L12 18L7 13H10V9H14V13H17Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}));

const Heart = ({
  fill,
  size
}) => __jsx("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M12 21.35L10.55 20.03C5.40003 15.36 2.00003 12.28 2.00003 8.5C2.00003 5.42 4.42003 3 7.50003 3C9.24003 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}));

const GitHub = ({
  fill,
  size
}) => __jsx("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M29.8535 7.96868C28.4227 5.51725 26.482 3.57645 24.0308 2.14584C21.5792 0.715158 18.9028 0 15.9997 0C13.097 0 10.4197 0.715377 7.96868 2.14584C5.51725 3.57638 3.57659 5.51725 2.14584 7.96868C0.715304 10.42 0 13.0969 0 15.9993C0 19.4857 1.01717 22.6208 3.05203 25.4053C5.08667 28.1901 7.71511 30.117 10.9372 31.1863C11.3122 31.2559 11.5899 31.207 11.7704 31.0407C11.951 30.8742 12.0412 30.6656 12.0412 30.4159C12.0412 30.3743 12.0376 29.9994 12.0307 29.291C12.0235 28.5825 12.0201 27.9645 12.0201 27.4372L11.541 27.5201C11.2354 27.576 10.85 27.5997 10.3847 27.593C9.91962 27.5865 9.43679 27.5378 8.93689 27.4472C8.43677 27.3573 7.9716 27.149 7.54101 26.8226C7.11065 26.4962 6.80513 26.069 6.62454 25.5416L6.41621 25.0622C6.27735 24.743 6.05874 24.3885 5.76009 23.9999C5.46143 23.6109 5.15941 23.3472 4.8539 23.2083L4.70803 23.1039C4.61084 23.0345 4.52065 22.9508 4.43725 22.8537C4.35392 22.7566 4.29153 22.6594 4.24987 22.562C4.20813 22.4646 4.24272 22.3847 4.35399 22.322C4.46527 22.2594 4.66637 22.2289 4.95817 22.2289L5.37467 22.2912C5.65246 22.3469 5.99606 22.5132 6.40592 22.7911C6.81557 23.0688 7.15231 23.4298 7.41624 23.8741C7.73584 24.4437 8.12089 24.8777 8.57249 25.1763C9.02372 25.475 9.47868 25.6241 9.93691 25.6241C10.3952 25.6241 10.7909 25.5893 11.1244 25.5202C11.4575 25.4508 11.77 25.3463 12.0618 25.2076C12.1868 24.2766 12.5271 23.5615 13.0825 23.0616C12.2909 22.9784 11.5793 22.8531 10.9472 22.6865C10.3154 22.5197 9.66255 22.249 8.98906 21.8737C8.3152 21.4988 7.7562 21.0334 7.31189 20.4781C6.86752 19.9225 6.50283 19.1931 6.21832 18.2906C5.93368 17.3877 5.79132 16.3461 5.79132 15.1656C5.79132 13.4848 6.34003 12.0545 7.43725 10.8739C6.92327 9.61024 6.97179 8.19364 7.58297 6.62424C7.98575 6.4991 8.58307 6.59301 9.37462 6.90539C10.1663 7.21791 10.746 7.48563 11.1142 7.7076C11.4824 7.92949 11.7774 8.11753 11.9996 8.27004C13.2915 7.90906 14.6247 7.72854 15.9996 7.72854C17.3745 7.72854 18.7079 7.90906 19.9999 8.27004L20.7915 7.77028C21.3329 7.43681 21.9722 7.13123 22.7078 6.85344C23.4439 6.57579 24.0068 6.49932 24.3959 6.62446C25.0206 8.19393 25.0763 9.61046 24.5622 10.8741C25.6593 12.0547 26.2082 13.4854 26.2082 15.1659C26.2082 16.3463 26.0654 17.3912 25.7812 18.301C25.4966 19.211 25.1288 19.9396 24.6775 20.4885C24.2258 21.0373 23.6632 21.4991 22.9897 21.8739C22.3161 22.2489 21.663 22.5196 21.0312 22.6864C20.3992 22.8533 19.6875 22.9786 18.896 23.0619C19.6179 23.6867 19.979 24.6729 19.979 26.02V30.4154C19.979 30.665 20.0658 30.8735 20.2396 31.0401C20.4132 31.2064 20.6873 31.2554 21.0624 31.1857C24.2849 30.1165 26.9133 28.1895 28.9479 25.4047C30.9822 22.6202 31.9998 19.4851 31.9998 15.9987C31.999 13.0967 31.2834 10.42 29.8535 7.96868Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}));

const GitLab = ({
  fill,
  size
}) => __jsx("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M24.3275 2.55992C24.0475 2.55743 23.7975 2.73493 23.71 3.00242L20.5275 12.7999H11.4725L8.29 3.00242C8.205 2.74493 7.9675 2.56743 7.695 2.55992C7.4225 2.55493 7.1775 2.71992 7.08 2.97493L3.245 13.2099C3.2425 13.2099 3.2425 13.2124 3.24 13.2149L1.32 18.3349C1.22 18.6049 1.31 18.9074 1.545 19.0774L15.62 29.3124L15.6225 29.3174C15.625 29.3174 15.625 29.3174 15.625 29.3199C15.6325 29.3249 15.6425 29.3299 15.65 29.3349C15.66 29.3399 15.6675 29.3474 15.6775 29.3524C15.68 29.3524 15.68 29.3549 15.6825 29.3549C15.6825 29.3549 15.685 29.3574 15.6875 29.3574C15.69 29.3599 15.6925 29.3624 15.6975 29.3624C15.7 29.3649 15.705 29.3674 15.7075 29.3699C15.72 29.3749 15.735 29.3824 15.75 29.3874C15.75 29.3874 15.75 29.3874 15.75 29.3899C15.765 29.3949 15.78 29.3999 15.7925 29.4049C15.795 29.4049 15.795 29.4049 15.7975 29.4074C15.8075 29.4099 15.8175 29.4124 15.83 29.4174C15.835 29.4174 15.84 29.4199 15.8475 29.4199C15.8475 29.4224 15.8475 29.4224 15.8475 29.4199C15.86 29.4249 15.8725 29.4274 15.885 29.4299C15.9025 29.4324 15.9175 29.4349 15.935 29.4374C15.96 29.4374 15.9875 29.4399 16.0125 29.4399C16.0375 29.4374 16.06 29.4374 16.0825 29.4324C16.0925 29.4324 16.1 29.4324 16.11 29.4299C16.11 29.4299 16.1125 29.4299 16.115 29.4299C16.12 29.4274 16.1225 29.4274 16.1275 29.4274C16.13 29.4274 16.1325 29.4249 16.1375 29.4249C16.1425 29.4224 16.15 29.4224 16.155 29.4199C16.165 29.4174 16.1725 29.4149 16.18 29.4124C16.185 29.4124 16.1875 29.4124 16.19 29.4099C16.1925 29.4099 16.195 29.4099 16.1975 29.4099C16.2075 29.4049 16.22 29.3999 16.23 29.3974C16.2425 29.3924 16.2525 29.3874 16.2625 29.3824C16.265 29.3824 16.265 29.3824 16.2675 29.3799C16.27 29.3799 16.2725 29.3799 16.275 29.3774C16.28 29.3749 16.285 29.3724 16.29 29.3699C16.305 29.3624 16.3175 29.3549 16.33 29.3474C16.335 29.3449 16.3375 29.3424 16.34 29.3399C16.3425 29.3399 16.345 29.3374 16.3475 29.3374C16.3575 29.3299 16.3675 29.3249 16.3775 29.3174L16.3825 29.3099L30.4575 19.0774C30.69 18.9074 30.78 18.6049 30.68 18.3349L28.765 13.2324C28.7625 13.2274 28.76 13.2199 28.76 13.2149L24.92 2.97493C24.825 2.72743 24.5925 2.56242 24.3275 2.55992ZM7.6375 5.13742L10.1275 12.7999H4.765L7.6375 5.13742ZM24.3625 5.13742L27.2375 12.7999H21.8725L24.3625 5.13742ZM5.1625 14.0799H10.5425L14.29 25.6099L5.1625 14.0799ZM11.89 14.0799H20.11L16 26.7299L11.89 14.0799ZM21.4575 14.0799H26.8375L17.71 25.6099L21.4575 14.0799ZM4.04 14.7249L12.6 25.5374L2.69 18.3299L4.04 14.7249ZM27.96 14.7249L29.31 18.3299L19.4 25.5374L27.96 14.7249Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}));

const LinkedIn = ({
  fill,
  size
}) => __jsx("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM11.3506 24.1875H7.45386V12.4641H11.3506V24.1875ZM9.40234 10.8633H9.37695C8.06934 10.8633 7.22363 9.96313 7.22363 8.83813C7.22363 7.68774 8.09521 6.8125 9.42822 6.8125C10.7612 6.8125 11.5815 7.68774 11.6069 8.83813C11.6069 9.96313 10.7612 10.8633 9.40234 10.8633ZM25.4014 24.1875H21.5051V17.9158C21.5051 16.3396 20.9409 15.2646 19.531 15.2646C18.4546 15.2646 17.8135 15.9897 17.5317 16.6897C17.4287 16.9402 17.4036 17.2903 17.4036 17.6406V24.1875H13.5071C13.5071 24.1875 13.5581 13.564 13.5071 12.4641H17.4036V14.124C17.9214 13.3252 18.8479 12.189 20.9153 12.189C23.479 12.189 25.4014 13.8645 25.4014 17.4653V24.1875Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }
}));

const WhatsApp = ({
  fill,
  size
}) => __jsx("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 3
  }
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M26.6119 5.34412C23.8053 2.53418 20.0726 0.986023 16.0961 0.984375C7.90216 0.984375 1.23346 7.65289 1.23016 15.8491C1.22907 18.4691 1.91351 21.0267 3.21448 23.2811L1.10547 30.9844L8.98615 28.9171C11.1576 30.1016 13.6022 30.7258 16.0901 30.7266H16.0963C24.2894 30.7266 30.9588 24.0575 30.9619 15.861C30.9636 11.8887 29.4187 8.15387 26.6119 5.34412ZM16.0961 28.216H16.091C13.874 28.2151 11.6996 27.6193 9.80225 26.4937L9.35126 26.2258L4.67475 27.4526L5.92298 22.8931L5.62909 22.4257C4.39221 20.4584 3.73908 18.1846 3.74018 15.85C3.74274 9.03754 9.28571 3.49512 16.1011 3.49512C19.4014 3.49622 22.5037 4.78308 24.8365 7.11859C27.1693 9.4541 28.4532 12.5585 28.4521 15.86C28.4492 22.673 22.9066 28.216 16.0961 28.216ZM22.8736 18.962C22.5023 18.776 20.676 17.8777 20.3354 17.7535C19.9952 17.6296 19.7473 17.5679 19.4999 17.9396C19.2521 18.3113 18.5404 19.1481 18.3236 19.3958C18.1068 19.6437 17.8904 19.6749 17.5189 19.4888C17.1473 19.303 15.9506 18.9106 14.5317 17.6451C13.4276 16.6602 12.6821 15.4438 12.4653 15.0721C12.2489 14.7001 12.4635 14.5184 12.6283 14.3141C13.0304 13.8148 13.4331 13.2913 13.5568 13.0435C13.6808 12.7956 13.6187 12.5786 13.5257 12.3928C13.4331 12.2069 12.6902 10.3786 12.3807 9.63464C12.079 8.91064 11.773 9.00842 11.5449 8.99707C11.3284 8.98627 11.0807 8.98407 10.833 8.98407C10.5854 8.98407 10.1829 9.0769 9.84235 9.44897C9.50196 9.82086 8.54249 10.7194 8.54249 12.5477C8.54249 14.376 9.87348 16.1422 10.0591 16.3901C10.2448 16.6381 12.6785 20.3899 16.4045 21.9987C17.2907 22.3817 17.9825 22.61 18.5221 22.7812C19.412 23.064 20.2215 23.024 20.8616 22.9285C21.5754 22.8217 23.0591 22.0298 23.3689 21.1622C23.6784 20.2945 23.6784 19.5509 23.5853 19.3958C23.4927 19.2409 23.2449 19.1481 22.8736 18.962Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}));

const Moon = ({
  fill,
  size
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }
}, __jsx("path", {
  fill: fill || "#F6C358",
  d: "M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }
}));

const Sun = ({
  fill,
  size
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }
}, __jsx("path", {
  fill: fill || "#FFFFFF",
  d: "M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0-2c.34 0 .672.033 1 .08v-2.08h-2v2.08c.328-.047.66-.08 1-.08zm-4.184 1.401l-1.472-1.473-1.414 1.415 1.473 1.473c.401-.537.876-1.013 1.413-1.415zm9.782 1.414l1.473-1.473-1.414-1.414-1.473 1.473c.537.402 1.012.878 1.414 1.414zm-5.598 11.185c-.34 0-.672-.033-1-.08v2.08h2v-2.08c-.328.047-.66.08-1 .08zm4.185-1.402l1.473 1.473 1.415-1.415-1.473-1.472c-.403.536-.879 1.012-1.415 1.414zm-11.185-5.598c0-.34.033-.672.08-1h-2.08v2h2.08c-.047-.328-.08-.66-.08-1zm13.92-1c.047.328.08.66.08 1s-.033.672-.08 1h2.08v-2h-2.08zm-12.519 5.184l-1.473 1.473 1.414 1.414 1.473-1.473c-.536-.402-1.012-.877-1.414-1.414z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }
}));

const Loader = ({
  fill,
  size
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  style: "margin: auto; background: none; display: block; shape-rendering: auto;",
  width: "200px",
  height: "200px",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMid",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 3
  }
}, __jsx("circle", {
  cx: "50",
  cy: "50",
  r: "32",
  strokeWidth: "2",
  stroke: fill || "#2f3136",
  strokeDasharray: "50.26548245743669 50.26548245743669",
  fill: "none",
  strokeLinecap: "round",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }
}, __jsx("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  dur: "1s",
  repeatCount: "indefinite",
  keyTimes: "0;1",
  values: "0 50 50;360 50 50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 7
  }
})), __jsx("circle", {
  cx: "50",
  cy: "50",
  r: "29",
  strokeWidth: "2",
  stroke: "#9ea4a9",
  strokeDasharray: "45.553093477052 45.553093477052",
  "stroke-dashoffset": "45.553093477052",
  fill: "none",
  strokeLinecap: "round",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }
}, __jsx("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  dur: "1s",
  repeatCount: "indefinite",
  keyTimes: "0;1",
  values: "0 50 50;-360 50 50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 7
  }
}))); // Skills


const CSS = ({
  fill,
  fillSecondary,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M54.6667 6.66675H9.33333L13.3333 52.0001L32 57.3334L50.6667 52.0001L54.6667 6.66675Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M32 10.6667V53.2001L46.9333 48.9334L50.2667 10.6667H32Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M44.1333 17.3333H32V22.6666H38.5333L38.1333 27.9999H32V33.3333H37.8667L37.4667 39.3333L32 41.1999V46.7999L42.5333 43.3333L43.4667 27.9999L44.1333 17.3333Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M32 17.3333V22.6666H20.1333L19.7333 17.3333H32ZM25.8667 27.9999L26.1333 33.3333H32V27.9999H25.8667ZM26.4 35.9999H21.0667L21.4667 43.3333L32 46.7999V41.1999L26.5333 39.3333L26.4 35.9999Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }
}));

const Discord = ({
  fill,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M53.3333 16.0001C53.3333 16.0001 47.22 11.2161 40 10.6667L39.3493 11.9681C45.8773 13.5654 48.872 15.8547 52 18.6667C46.6067 15.9134 41.2813 13.3334 32 13.3334C22.7187 13.3334 17.3933 15.9134 12 18.6667C15.128 15.8547 18.6907 13.3134 24.6507 11.9681L24 10.6667C16.4253 11.3827 10.6667 16.0001 10.6667 16.0001C10.6667 16.0001 3.83866 25.9001 2.66666 45.3334C9.54932 53.2707 20 53.3334 20 53.3334L22.1853 50.4201C18.476 49.1307 14.2867 46.8281 10.6667 42.6667C14.984 45.9334 21.5 49.3334 32 49.3334C42.5 49.3334 49.016 45.9334 53.3333 42.6667C49.7133 46.8281 45.524 49.1307 41.8147 50.4201L44 53.3334C44 53.3334 54.4507 53.2707 61.3333 45.3334C60.1613 25.9001 53.3333 16.0001 53.3333 16.0001ZM23.3333 40.0001C20.756 40.0001 18.6667 37.6121 18.6667 34.6667C18.6667 31.7214 20.756 29.3334 23.3333 29.3334C25.9107 29.3334 28 31.7214 28 34.6667C28 37.6121 25.9107 40.0001 23.3333 40.0001ZM40.6667 40.0001C38.0893 40.0001 36 37.6121 36 34.6667C36 31.7214 38.0893 29.3334 40.6667 29.3334C43.244 29.3334 45.3333 31.7214 45.3333 34.6667C45.3333 37.6121 43.244 40.0001 40.6667 40.0001Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }
}));

const ExpressJS = ({
  fill,
  size
}) => __jsx("svg", {
  width: "72",
  height: "64",
  viewBox: "0 0 72 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M31.584 31.184H10.208C10.3787 29.6907 10.72 28.24 11.232 26.832C11.7867 25.3813 12.512 24.1227 13.408 23.056C14.304 21.9467 15.392 21.072 16.672 20.432C17.952 19.7493 19.424 19.408 21.088 19.408C22.7093 19.408 24.16 19.7493 25.44 20.432C26.72 21.072 27.808 21.9467 28.704 23.056C29.6 24.1227 30.2827 25.36 30.752 26.768C31.264 28.176 31.5413 29.648 31.584 31.184ZM10.208 34.576H35.616C35.7013 32.272 35.488 30.0107 34.976 27.792C34.464 25.5307 33.6107 23.5467 32.416 21.84C31.264 20.0907 29.7493 18.6827 27.872 17.616C25.9947 16.5493 23.7333 16.016 21.088 16.016C18.4853 16.016 16.224 16.528 14.304 17.552C12.4267 18.5333 10.8907 19.856 9.696 21.52C8.50133 23.1413 7.60533 24.9973 7.008 27.088C6.45333 29.1787 6.176 31.312 6.176 33.488C6.176 35.8347 6.45333 38.0747 7.008 40.208C7.60533 42.2987 8.50133 44.1547 9.696 45.776C10.8907 47.3547 12.4267 48.6133 14.304 49.552C16.224 50.448 18.4853 50.896 21.088 50.896C25.2693 50.896 28.4907 49.872 30.752 47.824C33.056 45.776 34.6347 42.8747 35.488 39.12H31.456C30.816 41.68 29.664 43.728 28 45.264C26.336 46.8 24.032 47.568 21.088 47.568C19.168 47.568 17.5253 47.1627 16.16 46.352C14.7947 45.5413 13.664 44.5173 12.768 43.28C11.872 42.0427 11.2107 40.656 10.784 39.12C10.4 37.5413 10.208 36.0267 10.208 34.576ZM50.0515 32.848L37.2515 50H42.2435L52.4195 36.112L62.7875 50H67.9075L55.0435 32.784L66.9475 16.976H61.8915L52.6755 29.52L43.2675 16.976H38.2115L50.0515 32.848Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }
}));

const Figma = ({
  fill,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M25 2C18.934 2 14 6.934 14 13C14 16.3158 15.481 19.2863 17.8086 21.3047C14.3547 23.1619 12 26.811 12 31C12 34.7213 13.8633 38.0085 16.6992 40C13.8633 41.9915 12 45.2787 12 49C12 55.066 16.934 60 23 60C29.066 60 34 55.066 34 49V38V24H41C47.066 24 52 19.066 52 13C52 6.934 47.066 2 41 2H25ZM25 6H41C44.86 6 48 9.14 48 13C48 16.86 44.86 20 41 20H34H25C21.14 20 18 16.86 18 13C18 9.14 21.14 6 25 6ZM23 24H25H30V38H23C19.14 38 16 34.86 16 31C16 27.14 19.14 24 23 24ZM42 24C39.8783 24 37.8434 24.8429 36.3431 26.3431C34.8429 27.8434 34 29.8783 34 32C34 34.1217 34.8429 36.1566 36.3431 37.6569C37.8434 39.1571 39.8783 40 42 40C44.1217 40 46.1566 39.1571 47.6569 37.6569C49.1571 36.1566 50 34.1217 50 32C50 29.8783 49.1571 27.8434 47.6569 26.3431C46.1566 24.8429 44.1217 24 42 24V24ZM23 42H30V49C30 52.86 26.86 56 23 56C19.14 56 16 52.86 16 49C16 45.14 19.14 42 23 42Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }
}));

const HTML = ({
  fill,
  fillSecondary,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M54.6667 6.66675H9.33333L13.3333 52.0001L32 57.3334L50.6667 52.0001L54.6667 6.66675Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M32 10.6667V53.2001L46.9333 48.9334L50.2667 10.6667H32Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M32 33.3333V27.9999H43.4667L42.5333 43.3333L32 46.7999V41.1999L37.4667 39.3333L37.8667 33.3333H32V33.3333ZM43.8667 22.6666L44.2667 17.3333H32V22.6666H43.8667Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M32 41.1999V46.7999L21.4667 43.3333L20.9333 35.9999H26.2667L26.5333 39.3333L32 41.1999ZM25.4667 22.6666H32V17.3333H19.8667L20.8 33.3333H32V27.9999H25.8667L25.4667 22.6666Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }
}));

const JavaScript = ({
  fill,
  fillSecondary,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M8 56V8H56V56H8Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M39.384 43.9293C40.3067 45.4279 41.3093 46.8639 43.4333 46.8639C45.2173 46.8639 46.1533 45.9773 46.1533 44.7506C46.1533 43.2826 45.1853 42.7613 43.2227 41.9066L42.1467 41.4479C39.0413 40.1306 36.976 38.4799 36.976 34.9933C36.976 31.7799 39.436 29.3346 43.28 29.3346C46.0173 29.3346 47.984 30.2826 49.4027 32.7653L46.0507 34.9079C45.3133 33.5906 44.516 33.0719 43.28 33.0719C42.0187 33.0719 41.22 33.8679 41.22 34.9079C41.22 36.1933 42.02 36.7133 43.8667 37.5093L44.9427 37.9679C48.6027 39.5266 50.6667 41.1186 50.6667 44.6973C50.6667 48.5533 47.6213 50.6666 43.5333 50.6666C39.5347 50.6666 37.264 48.6599 36 46.1759L39.384 43.9293ZM23.936 44.0386C24.6107 45.2466 25.636 46.1759 27.1107 46.1759C28.5213 46.1759 29.3333 45.6186 29.3333 43.4519V29.3333H33.7773V44.1346C33.7773 48.6239 31.1733 50.6666 27.3707 50.6666C23.9347 50.6666 21.4547 48.3386 20.444 46.1759L23.936 44.0386Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 5
  }
}));

const Laravel = ({
  fill,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M15.1133 10.0116C13.7993 10.0676 3.77838 10.9182 3.06638 10.9842C2.35438 11.0422 1.56922 11.3715 2.28122 13.0975C2.99322 14.8235 14.3714 39.9027 14.6914 40.6327C15.0094 41.3607 15.8356 42.5502 17.7656 42.0702C19.7436 41.5822 26.6054 39.7481 30.3554 38.7421C32.3334 42.4141 36.375 49.8577 37.125 50.9217C38.119 52.3497 38.8118 52.1068 40.3398 51.6288C41.5398 51.2548 59.0518 44.8142 59.8398 44.4882C60.6278 44.1522 61.1121 43.9232 60.5781 43.1092C60.1841 42.5152 55.5625 36.1851 53.1445 32.8671C54.8045 32.4171 60.7001 30.8147 61.3281 30.6327C62.0661 30.4387 62.1696 30.0771 61.7656 29.6171C61.3716 29.1571 55.88 22.1293 54.914 20.9413C53.948 19.7533 53.4689 19.9607 52.8789 20.0467C52.2789 20.1327 45.3333 21.3307 44.5273 21.4647C43.7213 21.6087 43.2149 21.9344 43.7109 22.6444C44.1509 23.2764 48.7184 29.9052 49.7304 31.3632L31.5703 35.8085L17.1211 11.121C16.5491 10.249 16.4253 9.94359 15.1133 10.0116ZM14.8867 11.7264C15.2247 11.7064 15.1866 11.7821 15.3086 11.9921C15.3086 11.9921 28.6393 35.5215 28.8633 35.9335C29.1073 36.3455 28.9699 36.4714 28.7539 36.5194C28.5379 36.5674 18.3643 39.0575 17.8203 39.1835C17.2763 39.3075 17.2769 39.2505 17.2109 39.0585C17.1449 38.8665 5.1211 13.4897 4.9531 13.1717C4.7851 12.8557 4.7931 12.6053 4.9531 12.6053C5.1131 12.6053 14.5587 11.7444 14.8867 11.7264ZM53.5429 21.6913C53.6777 21.7225 53.8193 21.8235 53.9883 22.0585C54.3263 22.5285 58.9196 28.4808 59.0976 28.7108C59.2656 28.9328 58.9643 29.0679 58.5703 29.1639C58.1763 29.2499 51.6718 30.8983 51.6718 30.8983L46.3554 23.4413C46.2054 23.2213 46.0849 23.0088 46.4609 22.9608C46.8349 22.9128 52.8725 21.7883 53.1445 21.7303C53.2805 21.6963 53.4082 21.66 53.5429 21.6913ZM51.0547 33.2342C51.1802 33.2485 51.2858 33.3374 51.4258 33.5624C51.6998 34.0244 57.2775 41.7633 57.4375 42.0233C57.5975 42.2813 57.7621 42.4546 57.2461 42.6366C56.7401 42.8286 40.0289 48.5902 39.7109 48.7342C39.3829 48.8782 39.1268 48.9247 38.7148 48.3007C38.3028 47.6767 32.8672 38.0624 32.8672 38.0624L50.5625 33.3553C50.7825 33.2833 50.9292 33.22 51.0547 33.2342Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }
}));

const MySQL = ({
  fill,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 3
  }
}, __jsx("g", {
  clipPath: "url(#clip0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M39.895 10.2399C39.295 10.2249 38.77 10.4549 38.5 11.1199C38.04 12.2349 39.185 13.3249 39.595 13.8949C39.88 14.2899 40.25 14.7349 40.455 15.1799C40.59 15.4749 40.61 15.7699 40.725 16.0799C41.01 16.8449 41.465 17.7149 41.83 18.4249C42.015 18.7849 42.22 19.1599 42.455 19.4799C42.6 19.6749 42.845 19.7649 42.885 20.0649C42.645 20.4049 42.63 20.9299 42.495 21.3599C41.885 23.2849 42.115 25.6799 43 27.0999C43.275 27.5399 43.92 28.4749 44.8 28.1199C45.57 27.8049 45.4 26.8299 45.62 25.9649C45.67 25.7749 45.64 25.6299 45.74 25.4999V25.5399C45.97 26.0099 46.205 26.4799 46.44 26.9449C46.965 27.7849 47.89 28.6599 48.67 29.2549C49.075 29.5599 49.395 30.0899 49.92 30.2699V30.2299H49.88C49.78 30.0699 49.62 30.0049 49.49 29.8799C49.185 29.5799 48.845 29.2049 48.595 28.8599C47.88 27.8949 47.25 26.8349 46.68 25.7349C46.405 25.2099 46.165 24.6299 45.935 24.0949C45.845 23.8849 45.845 23.5749 45.66 23.4649C45.405 23.8599 45.035 24.1749 44.84 24.6399C44.53 25.3799 44.485 26.2849 44.37 27.2199C44.3 27.2449 44.33 27.2249 44.295 27.2599C43.75 27.1249 43.555 26.5649 43.355 26.0849C42.845 24.8699 42.745 22.9099 43.2 21.5149C43.315 21.1499 43.84 20.0099 43.63 19.6749C43.53 19.3399 43.19 19.1499 43.005 18.8949C42.77 18.5799 42.54 18.1649 42.38 17.7999C41.96 16.8499 41.565 15.7499 41.12 14.7899C40.91 14.3299 40.555 13.8699 40.26 13.4599C39.935 13.0099 39.575 12.6799 39.32 12.1299C39.235 11.9399 39.11 11.6299 39.245 11.4299C39.285 11.2949 39.345 11.2399 39.48 11.1949C39.705 11.0199 40.335 11.2499 40.575 11.3499C41.2 11.6099 41.725 11.8599 42.255 12.2099C42.51 12.3799 42.765 12.7049 43.075 12.7999H43.425C43.98 12.9249 44.595 12.8349 45.105 12.9949C46.015 13.2699 46.83 13.6999 47.565 14.1649C49.82 15.5849 51.665 17.6099 52.92 20.0249C53.125 20.4149 53.215 20.7899 53.395 21.1999C53.75 22.0299 54.205 22.8899 54.565 23.6999C54.92 24.5149 55.27 25.3299 55.775 26.0049C56.04 26.3599 57.07 26.5549 57.535 26.7499C57.86 26.8899 58.4 27.0349 58.705 27.2199C59.3 27.5749 59.87 27.9999 60.425 28.3949C60.705 28.5899 61.555 29.0149 61.6 29.3699C60.225 29.3349 59.175 29.4599 58.28 29.8399C58.025 29.9499 57.615 29.9499 57.575 30.2699C57.71 30.4149 57.735 30.6349 57.845 30.8149C58.06 31.1599 58.42 31.6249 58.745 31.8699C59.1 32.1349 59.46 32.4199 59.84 32.6549C60.51 33.0599 61.26 33.2949 61.91 33.7049C62.29 33.9499 62.675 34.2549 63.045 34.5249C63.23 34.6649 63.35 34.8749 63.59 34.9599V34.9199C63.465 34.7599 63.435 34.5399 63.32 34.3749L62.805 33.8599C62.31 33.2049 61.68 32.6249 61.01 32.1449C60.475 31.7599 59.28 31.2399 59.06 30.6199L59.02 30.5799C59.395 30.5399 59.84 30.3999 60.19 30.3049C60.78 30.1499 61.3 30.1899 61.905 30.0349C62.18 29.9549 62.455 29.8749 62.73 29.7999V29.6399C62.425 29.3299 62.205 28.9099 61.87 28.6249C60.995 27.8799 60.04 27.1349 59.055 26.5149C58.51 26.1699 57.835 25.9449 57.26 25.6549C57.065 25.5549 56.725 25.5049 56.595 25.3399C56.29 24.9549 56.125 24.4649 55.89 24.0149C55.4 23.0699 54.92 22.0399 54.485 21.0449C54.19 20.3699 53.995 19.6999 53.625 19.0899C51.85 16.1749 49.94 14.4099 46.98 12.6799C46.35 12.3099 45.595 12.1699 44.795 11.9799C44.36 11.9499 43.935 11.9249 43.5 11.8999C43.24 11.7899 42.965 11.4699 42.72 11.3099C42.105 10.9249 40.895 10.2549 39.895 10.2399ZM44.13 14.4799C43.845 14.4749 43.64 14.5149 43.425 14.5599V14.5999H43.465C43.6 14.8799 43.845 15.0599 44.015 15.2999C44.145 15.5749 44.27 15.8499 44.4 16.1249L44.44 16.0849C44.68 15.9149 44.795 15.6399 44.795 15.2249C44.695 15.1249 44.68 14.9949 44.6 14.8749C44.485 14.7099 44.27 14.6199 44.13 14.4799ZM2.39 30.7149C2.005 30.7299 1.585 30.8049 1.13 30.9499C0.37 31.1799 -0.00500107 31.6349 -0.00500107 32.5599V42.2399H2.56V32.7949L6.115 40.8699C6.555 41.8749 7.155 42.2349 8.33 42.2349C9.51 42.2349 10.085 41.8749 10.525 40.8699L14.08 32.9999V42.2399H16.64V32.5599C16.64 31.6349 16.27 31.1799 15.505 30.9499C13.685 30.3749 12.46 30.8699 11.91 32.1149L8.26 40.3249L4.73 32.1149C4.33 31.1799 3.53 30.6699 2.39 30.7149ZM33.595 30.7199C32.585 30.7199 29.44 30.8399 29.44 33.2799V34.8599C29.44 35.9799 30.425 36.8949 32.56 37.1199C32.8 37.1349 33.04 37.1549 33.28 37.1549C33.28 37.1549 35.77 37.1049 35.84 37.1199C37.28 37.1199 37.12 38.2399 37.12 38.3999V39.6799C37.12 39.8549 37.08 40.9599 35.825 40.9599H29.44V42.2399H35.85C36.69 42.2399 37.505 42.0649 38.155 41.7599C39.235 41.2649 39.68 40.5949 39.68 39.7149V37.8849C39.68 35.9199 37.24 35.8399 35.84 35.8399H33.28C32.275 35.8399 32.12 35.2299 32 34.5599V33.2799C32.12 32.7699 32.345 32.0799 33.235 31.9999H39.68V30.7199H33.595ZM43.495 30.7199C41.605 30.9799 40.94 31.9199 40.94 33.2799V39.6799C40.94 40.9249 41.635 41.6749 43.065 42.0649C43.545 42.1999 43.98 42.2549 44.39 42.2549L47.24 42.2399H48.915L50.34 43.5199H53.22L51.24 41.7349C52.17 41.3499 52.46 40.7599 52.46 39.6549V33.2799C52.46 31.9199 51.575 30.9799 49.685 30.7199H43.495ZM53.76 30.7199V39.6249C53.76 41.1699 54.635 42.0399 56.95 42.2149C57.165 42.2249 57.385 42.2399 57.6 42.2399H64V40.9599H58.085C56.765 40.9599 56.32 40.4049 56.32 39.6149V30.7199H53.76ZM45.02 31.9999H48.315C49.185 31.9999 49.77 32.6999 49.9 33.2799C49.9 33.2799 49.92 39.2399 49.92 39.6799C49.92 40.1199 49.675 40.3199 49.675 40.3199L48.98 39.6799H46.08L47.505 40.9599H45.02C44.13 40.9599 43.63 40.2999 43.5 39.6799V33.4099C43.5 32.7299 44.02 31.9999 45.02 31.9999ZM17.92 34.5599C17.97 34.6099 17.92 40.0149 17.92 40.1199C17.94 41.2399 19.36 42.2199 21.585 42.2399H25.6V42.3249C25.6 42.5649 25.775 43.3649 24.32 43.5199C24.305 43.5199 17.935 43.5199 17.92 43.5199V44.7999H24.595C25.725 44.7649 28.175 44.5099 28.16 42.5499C28.16 42.5149 28.17 34.5599 28.16 34.5599H25.6V40.9599C25.56 40.9599 22.43 40.9699 21.8 40.9599C20.565 40.9399 20.46 40.2349 20.48 39.9649V34.5599H17.92Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 7
  }
})), __jsx("defs", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 5
  }
}, __jsx("clipPath", {
  id: "clip0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 7
  }
}, __jsx("rect", {
  width: "64",
  height: "64",
  fill: "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 9
  }
}))));

const NextJS = ({
  fill,
  size
}) => __jsx("svg", {
  width: "107",
  height: "64",
  viewBox: "0 0 107 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 3
  }
}, __jsx("g", {
  clipPath: "url(#clip0)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M25.1193 16.6858H45.1204V18.2756H26.9527V30.2403H44.0372V31.83H26.9527V44.9661H45.3288V46.5558H25.1193V16.6858ZM46.9124 16.6858H49.0375L58.4546 29.8219L68.0801 16.6856L81.1723 0L59.6629 31.2026L70.747 46.5558H68.5384L58.4546 32.583L48.3289 46.5558H46.1623L57.3295 31.2024L46.9122 16.6858H46.9124ZM71.5386 18.2756V16.6856H94.3317V18.2754H83.8309V46.5555H81.9975V18.2756H71.5386V18.2756ZM0.0971718 16.6856H2.38895L33.9913 63.9758L20.9318 46.5555L2.01386 18.9448L1.9306 46.556H0.0971718V16.6856ZM94.1469 44.486C93.7723 44.486 93.4914 44.196 93.4914 43.8207C93.4914 43.4459 93.7723 43.1555 94.1469 43.1555C94.526 43.1555 94.8025 43.4456 94.8025 43.8207C94.8025 44.1958 94.526 44.486 94.1469 44.486ZM95.9485 42.7358H96.9296C96.9428 43.2671 97.3308 43.6244 97.9016 43.6244C98.5393 43.6244 98.9005 43.2404 98.9005 42.5215V37.9669H99.8995V42.5258C99.8995 43.8207 99.1503 44.5666 97.9105 44.5666C96.7465 44.5666 95.9485 43.8431 95.9485 42.7356V42.7358ZM101.206 42.6779H102.196C102.281 43.2895 102.878 43.6778 103.739 43.6778C104.542 43.6778 105.13 43.2626 105.13 42.6911C105.13 42.2 104.756 41.9053 103.904 41.7044L103.074 41.5035C101.91 41.2309 101.38 40.6684 101.38 39.7218C101.38 38.5744 102.316 37.8107 103.721 37.8107C105.028 37.8107 105.982 38.5742 106.04 39.6593H105.068C104.974 39.0655 104.457 38.6947 103.708 38.6947C102.918 38.6947 102.392 39.0744 102.392 39.6547C102.392 40.1145 102.731 40.3782 103.569 40.5746L104.278 40.7487C105.598 41.0569 106.142 41.5928 106.142 42.5617C106.142 43.794 105.188 44.5666 103.663 44.5666C102.236 44.5666 101.277 43.8296 101.206 42.6776V42.6779Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 7
  }
})), __jsx("defs", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 5
  }
}, __jsx("clipPath", {
  id: "clip0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 7
  }
}, __jsx("rect", {
  width: "106.24",
  height: "64",
  fill: "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 9
  }
}))));

const NodeJS = ({
  fill,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M22.9387 25.4959L16.396 29.1159C16.1507 29.2505 16 29.5012 16 29.7719V37.0159C16 37.2865 16.1507 37.5359 16.396 37.6719L22.94 41.2945C23.184 41.4292 23.4867 41.4292 23.7307 41.2945L30.2733 37.6719C30.516 37.5359 30.6667 37.2865 30.6667 37.0159V29.7719C30.6667 29.5012 30.516 29.2519 30.2707 29.1159L23.7293 25.4959C23.6067 25.4279 23.4693 25.3945 23.3333 25.3945C23.196 25.3945 23.06 25.4279 22.9373 25.4959H22.9387ZM56.6013 32.0172L55.5107 32.6199C55.4693 32.6425 55.4453 32.6839 55.4453 32.7292V33.9372C55.4453 33.9825 55.4707 34.0239 55.5107 34.0465L56.6013 34.6505C56.6427 34.6732 56.692 34.6732 56.7333 34.6505L57.824 34.0465C57.864 34.0239 57.8893 33.9825 57.8893 33.9372V32.7292C57.8893 32.6839 57.864 32.6425 57.8227 32.6199L56.732 32.0172C56.712 32.0052 56.6893 31.9999 56.6667 31.9999C56.644 31.9999 56.6213 32.0052 56.6013 32.0172Z",
  fill: "#388E3C",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M47.668 17.8186L44.4827 16.0413C44.3827 15.9853 44.26 15.9866 44.1613 16.0453C44.0627 16.1039 44.0013 16.2093 44.0013 16.3239L44 27.0599L41.0627 25.4346C40.94 25.3666 40.8027 25.3333 40.6667 25.3333C40.5307 25.3333 40.3933 25.3666 40.2707 25.4346H40.272L33.7293 29.0546C33.484 29.1893 33.3333 29.4399 33.3333 29.7093V36.9533C33.3333 37.2239 33.484 37.4733 33.7293 37.6093L40.2733 41.2319C40.5173 41.3666 40.82 41.3666 41.064 41.2319L47.6067 37.6093C47.8493 37.4746 48 37.2239 48 36.9533V18.3839C48 18.1493 47.872 17.9333 47.668 17.8186ZM43.8213 35.2773L40.848 36.9239C40.7373 36.9853 40.6 36.9853 40.4893 36.9239L37.5147 35.2773C37.4013 35.2159 37.3333 35.1013 37.3333 34.9786V31.6853C37.3333 31.5626 37.4013 31.4493 37.5133 31.3866L40.488 29.7413H40.4867C40.5427 29.7106 40.604 29.6959 40.6667 29.6959C40.7293 29.6959 40.7907 29.7119 40.8467 29.7413L43.82 31.3866C43.932 31.4493 44 31.5639 44 31.6866V34.9799C44 35.1013 43.932 35.2159 43.8213 35.2773Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M22.9387 25.4959L16 37.0159C16 37.2865 16.1507 37.5359 16.396 37.6719L22.94 41.2945C23.184 41.4292 23.4867 41.4292 23.7307 41.2945L30.6667 29.7719C30.6667 29.5012 30.516 29.2519 30.2707 29.1159L23.7293 25.4959C23.6067 25.4279 23.4693 25.3945 23.3333 25.3945C23.196 25.3945 23.06 25.4279 22.9373 25.4959",
  fill: "#2E7D32",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M22.9387 25.4959L16.396 29.1159C16.1507 29.2505 16 29.5012 16 29.7719L22.9387 41.2945C23.1827 41.4292 23.4853 41.4292 23.7293 41.2945L30.272 37.6719C30.516 37.5359 30.6667 37.2865 30.6667 37.0159L23.7293 25.4959C23.6067 25.4279 23.4693 25.3945 23.3333 25.3945C23.196 25.3945 23.06 25.4279 22.9373 25.4959",
  fill: "#4CAF50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M63.604 29.0546L57.0627 25.4346C56.94 25.3666 56.8027 25.3333 56.6667 25.3333C56.5307 25.3333 56.3933 25.3666 56.2707 25.4346H56.272L49.7293 29.0546C49.4853 29.1893 49.3333 29.4453 49.3333 29.7253V36.9399C49.3333 37.2186 49.4853 37.4759 49.7293 37.6106L56.2733 41.2332C56.5187 41.3692 56.8187 41.3692 57.064 41.2332L60.0813 39.5626C60.3573 39.4093 60.356 39.0132 60.0787 38.8612L53.5133 35.2786C53.4027 35.2159 53.3333 35.0999 53.3333 34.9746V31.6866C53.3333 31.5639 53.4 31.4506 53.5067 31.3919L56.4867 29.7439H56.4853C56.5413 29.7133 56.6027 29.6986 56.6653 29.6986C56.728 29.6986 56.7893 29.7146 56.8453 29.7439L59.8253 31.3933C59.932 31.4519 59.9987 31.5653 59.9987 31.6879V34.3706C59.9987 34.4853 60.06 34.5919 60.16 34.6492C60.26 34.7052 60.3827 34.7053 60.4827 34.6479L63.68 32.7906C63.8773 32.6759 64 32.4639 64 32.2346V29.7279C64 29.4466 63.848 29.1893 63.604 29.0546ZM14.2707 29.0546L7.72933 25.4346C7.60667 25.3666 7.46933 25.3333 7.33333 25.3333C7.19733 25.3333 7.06 25.3666 6.93733 25.4346H6.93867L0.396 29.0546C0.152 29.1893 0 29.4453 0 29.7253V39.6786C0 39.7933 0.0613333 39.8999 0.161333 39.9573C0.261333 40.0133 0.384 40.0132 0.484 39.9559L3.68133 38.0986C3.87867 37.9839 4 37.7719 4 37.5426V31.6853C4 31.5626 4.06667 31.4493 4.17333 31.3906L7.15333 29.7426C7.20933 29.7119 7.27067 29.6973 7.33333 29.6973C7.396 29.6973 7.45733 29.7133 7.51333 29.7426L10.4933 31.3919C10.6 31.4506 10.6667 31.5639 10.6667 31.6866V37.5439C10.6667 37.7733 10.788 37.9853 10.9867 38.0999L14.184 39.9573C14.284 40.0146 14.4067 40.0146 14.5067 39.9586C14.6053 39.8999 14.6667 39.7933 14.6667 39.6786V29.7266C14.6667 29.4466 14.5147 29.1893 14.2707 29.0546Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 5
  }
}));

const PhotoShop = ({
  fill,
  fillSecondary,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M48 8H16C11.5813 8 8 11.5813 8 16V48C8 52.4187 11.5813 56 16 56H48C52.4187 56 56 52.4187 56 48V16C56 11.5813 52.4187 8 48 8Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M48 53.3334H16C13.0547 53.3334 10.6667 50.9454 10.6667 48.0001V16.0001C10.6667 13.0547 13.0547 10.6667 16 10.6667H48C50.9454 10.6667 53.3334 13.0547 53.3334 16.0001V48.0001C53.3334 50.9454 50.9454 53.3334 48 53.3334Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M19.3427 20.496C19.3427 20.3547 19.4453 20.236 19.5853 20.22C20.1187 20.1614 21.6067 20.04 24.7813 20.04C29.5653 20.04 32.916 21.9374 32.916 27.1294C32.916 31.812 29.728 34.56 24.584 34.56C24.284 34.56 23.984 34.56 22.9627 34.56V42.4027C22.9627 42.5334 22.856 42.64 22.7253 42.64H19.5813C19.4507 42.64 19.344 42.5334 19.344 42.4027V20.496H19.3427ZM22.9627 31.2627C22.9627 31.2627 24.5453 31.2734 24.9027 31.2734C27.84 31.2734 29.176 29.532 29.176 27.1987C29.176 25.0134 27.8773 23.3094 25.1627 23.3094C24.044 23.3094 22.964 23.3734 22.964 23.3734V31.2627H22.9627Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M34.8746 38.6266C34.8746 38.4999 35.012 38.4213 35.1173 38.4906C35.7893 38.9399 37.1533 39.7093 39.2653 39.7093C40.644 39.7093 41.516 39.1159 41.516 38.1479C41.516 37.076 40.0426 36.2986 38.8266 35.6386C37.6173 34.9826 34.9013 33.9293 34.9013 30.5373C34.9013 27.5306 37.304 25.7173 40.576 25.7173C41.8293 25.7173 43.212 25.912 44.1453 26.252C44.2986 26.308 44.392 26.4573 44.392 26.6213V29.676C44.392 29.8013 44.26 29.8826 44.1546 29.8133C43.5693 29.4306 42.2786 28.8453 40.5026 28.8453C39.024 28.8453 38.3733 29.5653 38.3733 30.2986C38.3733 31.584 40.0853 32.1213 41.6213 33.0226C44.0173 34.356 45.128 35.6586 45.128 37.6999C45.128 41.0386 42.6386 42.9133 39.2666 42.9133C37.5253 42.9133 35.888 42.5333 35.0506 42.0239C34.9346 41.9533 34.876 41.8253 34.876 41.6893L34.8746 38.6266Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 5
  }
}));

const PostgreSQL = ({
  fill,
  fillSecondary,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M58.7773 39.7199C58.5333 38.6146 57.5307 37.3253 55.508 37.3253C55.0947 37.3253 54.6427 37.3773 54.128 37.4839C53.184 37.6786 52.38 37.7733 51.672 37.8053C57.1827 28.4186 60.76 15.3799 57.2173 10.8533C52.5493 4.88928 46.2653 3.99861 42.936 3.99861L42.6227 3.99994C41.384 4.01994 40.0987 4.17194 38.8053 4.45194L34.028 5.48394C33.3773 5.40261 32.7147 5.34528 32.024 5.33328H31.984H31.9627L31.76 5.33194C29.636 5.33194 27.6987 5.78261 25.972 6.62928L24.304 5.97194C22.0107 5.06794 18.56 3.99194 15.1467 3.99194C14.9547 3.99194 14.764 3.99594 14.572 4.00261C11.2093 4.12394 8.32134 5.39994 6.21867 7.69194C3.59467 10.5533 2.40001 14.7386 2.67067 20.1333C2.68401 20.4119 5.94801 47.9999 15.2 47.9999H15.2333L15.3187 47.9986C16.52 47.9693 17.6653 47.4866 18.736 46.5626C19.5533 47.1759 20.6107 47.5386 21.596 47.6826C22.2467 47.8359 23.4173 48.0533 24.82 48.0533C26.532 48.0533 28.076 47.7026 29.4067 47.0693C29.4053 48.2426 29.3987 49.7279 29.3853 51.6266L29.384 51.7266L29.3907 51.8266C29.52 53.7186 29.8467 55.4239 30.3387 56.7613C31.74 60.5733 34.16 62.6733 37.1533 62.6733C37.2773 62.6733 37.404 62.6693 37.532 62.6613C39.9933 62.5093 42.488 61.1266 44.204 58.9653C46.0613 56.6253 46.4907 54.1559 46.656 52.2639L46.6667 52.1479V52.0306V46.5919L46.804 46.6053L47.3853 46.6559L47.4413 46.6613L47.4973 46.6639C47.6627 46.6719 47.8333 46.6746 48.0053 46.6746C50.0147 46.6746 52.488 46.1533 54.16 45.3759C55.7587 44.6346 59.412 42.5973 58.7773 39.7199Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M44 45.3334C44 45.06 44.016 44.832 44.024 44.58C44.0107 44.2454 44 44 44 44C44 44 44.016 43.988 44.0427 43.9707C44.2413 40.4067 45.224 39.0334 46.276 38.2507C46.1293 38.0467 45.96 37.8267 45.8013 37.6174C45.3573 37.0347 44.804 36.312 44.212 35.3854L44.1027 35.1747C44.0133 34.956 43.7973 34.5787 43.5227 34.0827C41.9453 31.2294 38.6627 25.2934 40.9093 21.544C41.8933 19.9014 43.7387 18.9547 46.404 18.7214C45.3147 15.624 41.2333 8.15335 31.98 8.00002C31.9773 8.00002 31.9747 8.00002 31.972 8.00002C23.9173 7.86935 21.2707 15.1894 20.4093 19.5627C21.596 19.06 22.9507 18.7547 24.1907 18.7547C24.2093 18.7547 24.2293 18.7547 24.248 18.7547C27.3013 18.7774 29.4013 20.4067 30.012 23.2267C30.4587 25.296 30.6733 27.1067 30.668 28.764C30.6547 32.3894 29.924 34.296 29.2787 35.9787L29.0733 36.5227C28.908 36.968 28.7333 37.3827 28.568 37.772C28.4 38.1694 28.252 38.5227 28.144 38.8414C28.7893 38.988 29.296 39.1947 29.644 39.348L29.8453 39.436C29.908 39.4627 29.9707 39.4934 30.028 39.528C31.1587 40.216 31.8627 41.2734 32.0133 42.5054C32.0947 43.1694 32.0813 47.696 32.0533 51.6454C32.1693 53.3587 32.46 54.7974 32.844 55.84C33.3893 57.3254 34.752 60.1614 37.3693 59.9987C39.196 59.8854 40.952 58.7733 42.1173 57.3067C43.368 55.732 43.8293 53.9907 44.0027 52.0293V45.3334H44Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M20.152 38.5561C18.0013 36.3121 16.9533 33.2935 17.3467 30.4815C17.7267 27.7681 17.512 25.1121 17.396 23.6841C17.3573 23.2081 17.332 22.8535 17.3333 22.6575C17.3333 22.6468 17.336 22.6375 17.3373 22.6268C17.3373 22.6215 17.3347 22.6175 17.3347 22.6121C17.496 18.5841 19.0493 12.2295 23.3253 8.45214C21.2427 7.63214 17.8507 6.55081 14.6667 6.66681C9.67734 6.84814 4.84801 10.2988 5.33334 20.0001C5.51601 23.6401 9.62934 45.4708 15.2533 45.3335C16.0573 45.3135 16.892 44.7975 17.7493 43.7655C19.1053 42.1348 20.4227 40.6561 21.36 39.6268C20.94 39.3081 20.5347 38.9561 20.152 38.5561ZM49.364 19.6415C49.384 19.8468 49.3667 20.0228 49.3347 20.1855C49.376 21.4121 49.244 22.6028 49.1093 23.7548C49.0107 24.6028 48.9093 25.4788 48.8813 26.3575C48.8533 27.2175 48.9747 28.0668 49.1027 28.9655C49.4027 31.0695 49.7147 33.4441 48.0827 36.2148C48.3827 36.6095 48.6467 36.9761 48.8573 37.3308C55.004 27.3641 57.4813 15.5161 55.1173 12.4961C51.54 7.92547 46.588 6.60281 42.6653 6.66681C41.4373 6.68681 40.3213 6.85214 39.368 7.05881C46.136 10.3388 49.1507 17.3681 49.364 19.6415ZM54.6667 40.0948C51.1133 40.8281 49.404 40.4375 48.5747 39.9268C48.4413 40.0228 48.308 40.1041 48.184 40.1801C47.688 40.4801 46.9027 40.9575 46.7107 43.8895C46.8213 43.9108 46.9187 43.9228 47.0387 43.9481L47.6187 44.0001C49.3787 44.0801 51.684 43.5868 53.036 42.9588C55.9493 41.6068 57.5373 39.5028 54.6667 40.0948ZM29.364 42.8255C29.3147 42.4281 29.1 42.1068 28.708 41.8495L28.564 41.7868C28.0827 41.5748 27.5373 41.3335 26.6667 41.3335H26.6613C26.492 41.3468 26.324 41.3588 26.1547 41.3588C26.0853 41.3588 26.0173 41.3495 25.948 41.3468C25.316 41.8335 24.4173 42.2095 22.1933 42.6668C18.22 43.6788 20.5653 44.8735 22.0893 45.0588C23.564 45.4281 27.0693 45.8775 29.3973 43.9801C29.3907 43.3828 29.38 42.9721 29.364 42.8255Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M27.5747 24.6679C27.1853 25.0705 26.5707 25.4226 25.892 25.3132C24.788 25.1346 23.9414 23.8025 24.0027 23.3025C24.0614 22.8039 25.004 22.5439 26.1067 22.7225C26.4893 22.7852 26.8373 22.8932 27.1307 23.0266C26.704 22.1092 25.932 21.5799 24.7547 21.4505C22.668 21.2185 20.4533 22.3092 20.008 22.9132C20.0173 23.0599 20.0347 23.2479 20.052 23.4692C20.176 24.9985 20.4053 27.8479 19.9853 30.8519C19.708 32.8319 20.5093 35.0772 22.0747 36.7119C23.084 37.7652 24.2627 38.4319 25.4253 38.6292C25.5733 37.9919 25.8373 37.3705 26.1093 36.7292C26.26 36.3759 26.42 35.9999 26.5707 35.5932L26.7867 35.0239C27.3773 33.4839 27.9867 31.8905 27.9987 28.7532C28.004 27.5466 27.856 26.1692 27.5747 24.6679ZM46.4627 29.3425C46.324 28.3705 46.1813 27.3639 46.216 26.2719C46.2467 25.2826 46.356 24.3492 46.4614 23.4465C46.544 22.7359 46.608 22.0532 46.6454 21.3799C44.9267 21.5225 43.7853 22.0185 43.244 22.8572C43.468 22.7812 43.7213 22.7212 44.0013 22.6852C45.1907 22.5305 46.0587 22.8732 46.1587 23.5345C46.232 24.0185 45.8213 24.4745 45.6413 24.6492C45.272 25.0079 44.8067 25.2385 44.3333 25.2999C44.248 25.3105 44.1613 25.3159 44.0773 25.3159C43.6067 25.3159 43.1574 25.1545 42.812 24.9159C42.9614 27.5465 44.9013 31.0652 45.856 32.7919C46.06 33.1612 46.2174 33.4559 46.348 33.7092C46.872 32.2172 46.6787 30.8572 46.4627 29.3425Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 5
  }
}));

const ReactJS = ({
  fill,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M32 45.3334C14.8 45.3334 1.33331 39.4667 1.33331 32.0001C1.33331 24.5334 14.8 18.6667 32 18.6667C49.2 18.6667 62.6666 24.5334 62.6666 32.0001C62.6666 39.4667 49.2 45.3334 32 45.3334ZM32 21.3334C15.2 21.3334 3.99998 26.8001 3.99998 32.0001C3.99998 37.2001 15.2 42.6667 32 42.6667C48.8 42.6667 60 37.2001 60 32.0001C60 26.8001 48.8 21.3334 32 21.3334Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M20.1334 59.4668C18.8 59.4668 17.7334 59.2001 16.6667 58.5334C10.1334 54.8001 11.8667 40.2668 20.4 25.3334C24.4 18.4001 29.3334 12.5334 34.1334 8.80011C39.3334 4.80011 44 3.60011 47.2 5.46678C50.5334 7.33344 51.7334 12.0001 50.9334 18.5334C50.1334 24.6668 47.4667 31.8668 43.4667 38.8001C39.4667 45.7334 34.5334 51.6001 29.7334 55.3334C26.2667 58.0001 22.9334 59.4668 20.1334 59.4668ZM43.8667 7.20011C41.7334 7.20011 38.9334 8.40011 35.8667 10.8001C31.3334 14.4001 26.6667 20.0001 22.8 26.6668C14.4 41.2001 13.6 53.7334 18 56.2668C20.2667 57.6001 24 56.4001 28.1334 53.2001C32.6667 49.6001 37.3334 44.0001 41.2 37.3334C45.0667 30.6668 47.6 23.8668 48.4 18.1334C49.0667 12.8001 48.2667 9.06678 46 7.73345C45.3334 7.46678 44.6667 7.20011 43.8667 7.20011Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M44.6257 58.8652C37.959 58.8652 28.359 50.7319 21.159 38.0652C12.4924 23.1319 10.759 8.59853 17.2924 4.8652C23.8257 1.13186 35.559 9.79853 44.2257 24.7319C48.2257 31.6652 50.8924 38.8652 51.6924 44.9985C52.6257 51.5319 51.2924 56.0652 47.959 58.0652C46.8924 58.5985 45.8257 58.8652 44.6257 58.8652ZM18.6257 7.13186C14.2257 9.6652 15.0257 22.1985 23.4257 36.7319C31.8257 51.2652 42.2257 58.1985 46.6257 55.6652C48.8924 54.3319 49.6924 50.5985 49.0257 45.2652C48.2257 39.5319 45.6924 32.7319 41.8257 26.0652C33.4257 11.5319 23.0257 4.59853 18.6257 7.13186Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M32 37.3334C34.9455 37.3334 37.3334 34.9456 37.3334 32.0001C37.3334 29.0546 34.9455 26.6667 32 26.6667C29.0545 26.6667 26.6667 29.0546 26.6667 32.0001C26.6667 34.9456 29.0545 37.3334 32 37.3334Z",
  fill: fill || "#2F3136",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 5
  }
}));

const Redux = ({
  fill,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M30.6667 5.33325C21.844 5.33325 14.6667 15.0266 14.6667 26.9399C14.6667 33.3853 16.776 39.1653 20.104 43.1213C20.04 43.4053 20 43.6973 20 43.9999C20 46.2093 21.7907 47.9999 24 47.9999C26.2093 47.9999 28 46.2093 28 43.9999C28 41.7906 26.2093 39.9999 24 39.9999C23.58 39.9999 23.184 40.0826 22.804 40.2026C20.2747 36.9746 18.6667 32.2333 18.6667 26.9399C18.6667 17.2319 24.0493 9.33325 30.6667 9.33325C35.7827 9.33325 40.148 14.0626 41.872 20.6906C43.368 21.1519 44.8547 21.7333 46.312 22.4346C44.772 12.6773 38.3453 5.33325 30.6667 5.33325Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M47.3427 26.7786C42.08 23.5893 36.1773 22.1893 31.1 22.8333C30.3667 21.9253 29.2573 21.3333 28 21.3333C25.7907 21.3333 24 23.1239 24 25.3333C24 27.5426 25.7907 29.3333 28 29.3333C29.696 29.3333 31.1373 28.2733 31.7187 26.7839C35.876 26.2786 40.8013 27.4919 45.2693 30.2013C53.8067 35.3759 58.1627 44.2933 54.9787 50.0826C53.876 52.0879 51.9307 53.5119 49.3547 54.2026C46.3067 55.0173 42.6787 54.7279 39.052 53.4986C37.9333 54.5279 36.72 55.4959 35.4187 56.3892C38.8213 57.8786 42.3467 58.6612 45.644 58.6612C47.2973 58.6612 48.8947 58.4652 50.3893 58.0652C54.044 57.0879 56.844 54.9932 58.484 52.0093C62.688 44.3679 57.6893 33.0493 47.3427 26.7786Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M46.6667 38.6561C46.6667 36.4534 44.876 34.6667 42.6667 34.6667C40.4573 34.6667 38.6667 36.4534 38.6667 38.6561C38.6667 39.5481 38.9707 40.3641 39.4667 41.0281C37.7613 44.7641 34.4747 48.4507 30.0507 51.1321C24.8973 54.2574 19.1373 55.4014 14.644 54.2014C12.068 53.5107 10.1227 52.0867 9.02001 50.0814C6.75068 45.9561 8.32535 40.2467 12.5 35.4307C12.0693 33.9054 11.7507 32.3107 11.5587 30.6641C4.79868 37.0601 2.08001 45.7614 5.51601 52.0094C7.15601 54.9934 9.95601 57.0881 13.6107 58.0654C15.1053 58.4654 16.7013 58.6614 18.356 58.6614C22.8173 58.6614 27.6987 57.2374 32.124 54.5547C37.2387 51.4547 41.0347 47.1187 43.0693 42.6054C45.0867 42.4014 46.6667 40.7214 46.6667 38.6561Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194,
    columnNumber: 5
  }
}));

const TypeScript = ({
  fill,
  fillSecondary,
  size
}) => __jsx("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    height: size,
    width: size
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "M56 8H8V56H56V8Z",
  fill: fill || "#F6C358",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M36.6533 29.3333H18.9693V33.6853H25.312V53.3333H30.3373V33.6853H36.6533V29.3333Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 201,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M52.2587 34.7787C52.2587 34.7787 49.876 33.1893 47.1827 33.1893C44.4893 33.1893 43.52 34.4693 43.52 35.8373C43.52 39.368 53.3613 39.0147 53.3613 46.12C53.3613 57.0653 38.356 52.2107 38.356 52.2107V46.96C38.356 46.96 41.2253 49.1227 44.6667 49.1227C48.108 49.1227 47.9773 46.872 47.9773 46.5627C47.9773 43.2973 38.224 43.2973 38.224 36.0587C38.224 26.2173 52.4347 30.1 52.4347 30.1L52.2587 34.7787Z",
  fill: fillSecondary || "white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 5
  }
}));



/***/ }),

/***/ "./src/layout/index.js":
/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DefaultLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 32px 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (max-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Project */ "./src/components/Project/index.js");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Skills */ "./src/components/Skills/index.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ "./src/components/Contact/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout */ "./src/layout/index.js");
/* harmony import */ var _utils_resizeWindowSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/resizeWindowSize */ "./src/utils/resizeWindowSize.js");
/* harmony import */ var _utils_FirebaseRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/FirebaseRequest */ "./src/utils/FirebaseRequest.js");
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Index = props => {
  const size = Object(_utils_resizeWindowSize__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: size,
    theme: props.theme,
    toggle: props.toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      margin: '60px auto 0',
      padding: size.width <= 768 ? '0 32px' : 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: size,
    theme: props.theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_components_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: size,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_4__["default"], {
    theme: props.theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: size,
    theme: props.theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: size,
    theme: props.theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }))));
}; // export async function getServerSideProps() {
//   const responseHeader = await getHeader()
//   const responseProjects = await getProjects()
//   return {
//     props: {
//       responseHeader,
//       responseProjects
//     }
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/utils/DummyData.js":
/*!********************************!*\
  !*** ./src/utils/DummyData.js ***!
  \********************************/
/*! exports provided: SkillsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsData", function() { return SkillsData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Svg */ "./src/components/Svg/index.js");
var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\utils\\DummyData.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SkillsData = (fill, fillSecondary) => {
  return [{
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["ReactJS"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }),
    caption: 'React Native'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["ReactJS"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }),
    caption: 'React JS'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["Redux"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }),
    caption: 'Redux'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["NextJS"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }),
    caption: 'Next.js'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["Discord"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }),
    caption: 'Discord.js'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["JavaScript"], {
      fill: fill,
      fillSecondary: fillSecondary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }),
    caption: 'JavaScript'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["CSS"], {
      fill: fill,
      fillSecondary: fillSecondary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }),
    caption: 'CSS'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["HTML"], {
      fill: fill,
      fillSecondary: fillSecondary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }),
    caption: 'HTML'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["Figma"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }),
    caption: 'Figma'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["PhotoShop"], {
      fill: fill,
      fillSecondary: fillSecondary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }),
    caption: 'Adobe PhotoShop'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["MySQL"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }),
    caption: 'MySQL'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["PostgreSQL"], {
      fill: fill,
      fillSecondary: fillSecondary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }),
    caption: 'PostgreSQL'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["TypeScript"], {
      fill: fill,
      fillSecondary: fillSecondary,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }),
    caption: 'TypeScript'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["NodeJS"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }),
    caption: 'Node.js'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["ExpressJS"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }),
    caption: 'Express.JS'
  }, {
    icon: __jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_1__["Laravel"], {
      fill: fill,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }),
    caption: 'Laravel'
  }];
};



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

/***/ "./src/utils/greetings.js":
/*!********************************!*\
  !*** ./src/utils/greetings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Greetings = lang => {
  let d = new Date();
  let time = d.getHours();
  let id = '',
      en = '',
      jp = '';
  let greet;

  switch (true) {
    case time >= 4 && time <= 10:
      if (lang == 'jp') greet = 'おはよう!';else if (lang == 'en') greet = 'Good Morning!';else greet = 'Selamat Pagi!';
      return {
        greet
      };

    case time > 10 && time <= 14:
      if (lang == 'jp') greet = 'こんにちは!';else if (lang == 'en') greet = 'Good Afternoon!';else greet = 'Selamat Siang!';
      return {
        greet
      };

    case time > 14 && time <= 17:
      if (lang == 'jp') greet = 'こんばんは！';else if (lang == 'en') greet = 'Good Evening!';else greet = 'Selamat Sore!';
      return {
        greet
      };

    default:
      if (lang == 'jp') greet = 'おやすみ！';else if (lang == 'en') greet = 'Good Night!';else greet = 'Selamat Malam!';
      return {
        greet
      };
  } // switch (true) {
  //   case time >= 4 && time <= 10:
  //     id = 'Selamat Pagi!'
  //     en = 'Good Morning!'
  //     jp = 'おはよう！'
  //     return { id, en, jp }
  //   case time > 10 && time <= 14:
  //     id = 'Selamat Siang!'
  //     en = 'Good Afternoon!'
  //     jp = 'こんにちは！'
  //     return { id, en, jp }
  //   case time > 14 && time <= 17:
  //     id = 'Selamat Sore!'
  //     en = 'Good Evening!'
  //     jp = 'こんばんは！'
  //     return { id, en, jp }
  //   default:
  //     id = 'Selamat Malam!'
  //     en = 'Good Night!'
  //     jp = 'おやすみ！'
  //     return { id, en, jp }
  // }

};

/* harmony default export */ __webpack_exports__["default"] = (Greetings);

/***/ }),

/***/ "./src/utils/resizeWindowSize.js":
/*!***************************************!*\
  !*** ./src/utils/resizeWindowSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWindowSize() {
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NraWxscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0R1bW15RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0ZpcmViYXNlUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ3JlZXRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXNpemVXaW5kb3dTaXplLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInByb3BzIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJ2YWx1ZSIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsInVybCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwia2V5Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ29udGFpbmVySGVhZGVyIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJ0cmFuc2l0aW9uIiwiVGl0bGVIZWFkZXIiLCJoMSIsInByaW1hcnkiLCJDb250YWluZXJDb250ZW50IiwiQ29udGFpbmVyRm9ybSIsInNpemUiLCJ3aWR0aCIsIkNvbnRhaW5lclNvY2lhbE1lZGlhIiwiRm9ybUNvbnRlbnQiLCJTdWJqZWN0IiwiaW5wdXQiLCJiYWNrZ3JvdW5kIiwiZm9udCIsIkNvbnRlbnQiLCJ0ZXh0YXJlYSIsIlN1Ym1pdCIsIlVybCIsImEiLCJtb2JpbGUiLCJjc3MiLCJTb2NpYWxNZWRpYUNvbnRhaW5lciIsIlNvY2lhbE1lZGlhVGV4dENvbnRhaW5lciIsIlNvY2lhbE1lZGlhTGFiZWwiLCJTb2NpYWxNZWRpYVZhbHVlIiwiTW9iaWxlU29jaWFsTWVkaWEiLCJDb250YWN0Iiwic3ViamVjdCIsInNldFN1YmplY3QiLCJ1c2VTdGF0ZSIsInRleHRBcmVhIiwic2V0VGV4dEFyZWEiLCJ0aXRsZSIsImljb24iLCJyZW5kZXJTb2NpYWxNZWRpYSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJlbmRlck1vYmlsZVNvY2lhbE1lZGlhIiwic2VuZERhdGEiLCJ0cmltIiwib3BlbiIsIkF1dGhvciIsIkZvb3RlciIsIkNvbnRhaW5lciIsIlByb2ZpbGVDb250YWluZXIiLCJHcmVldGluZyIsIk5hbWUiLCJGdWxsTmFtZSIsInNwYW4iLCJQcm9mZXNzaW9uIiwiRG93bmxvYWRDViIsImJ1dHRvbiIsIkRvd25sb2FkVGV4dCIsIkltYWdlQ29udGFpbmVyIiwiSW1nIiwiaW1nIiwiSGVhZGVyIiwiTWVudUNvbnRhaW5lciIsIlN0eWxlZExpbmsiLCJzZWNvbmRhcnkiLCJhY3RpdmUiLCJNb2RhbCIsIk5hdmJhciIsInRvZ2dsZSIsInNldE9wZW4iLCJ1c2VFZmZlY3QiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJoYW5kbGVNZW51IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjdXJzb3IiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkJvdHRvbSIsIlNlZU1vcmUiLCJJbWFnZSIsIlRpdGxlIiwiVHJ1bmNhdGUiLCJEZXNjcmlwdGlvbiIsIlByb2plY3QiLCJTd2lwZXJDb250YWluZXIiLCJTa2lsbCIsIkN1c3RvbURvdEl0ZW0iLCJsaSIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsInRhYmxldCIsIkN1c3RvbURvdCIsInByZXZlbnREZWZhdWx0IiwiU2tpbGxzIiwiU2tpbGxzRGF0YSIsImNhcHRpb24iLCJNZW51IiwiZmlsbCIsInNwYWNlIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJDbG9zZSIsIkRvd25sb2FkIiwiSGVhcnQiLCJHaXRIdWIiLCJHaXRMYWIiLCJMaW5rZWRJbiIsIldoYXRzQXBwIiwiTW9vbiIsIlN1biIsIkxvYWRlciIsIkNTUyIsImZpbGxTZWNvbmRhcnkiLCJEaXNjb3JkIiwiRXhwcmVzc0pTIiwiRmlnbWEiLCJIVE1MIiwiSmF2YVNjcmlwdCIsIkxhcmF2ZWwiLCJNeVNRTCIsIk5leHRKUyIsIk5vZGVKUyIsIlBob3RvU2hvcCIsIlBvc3RncmVTUUwiLCJSZWFjdEpTIiwiUmVkdXgiLCJUeXBlU2NyaXB0IiwiRGVmYXVsdExheW91dCIsIkluZGV4IiwidXNlV2luZG93U2l6ZSIsIm1hcmdpbiIsInBhZGRpbmciLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImVudiIsIkFQSV9LRVkiLCJhdXRoRG9tYWluIiwiQVVUSF9ET01BSU4iLCJkYXRhYmFzZVVSTCIsIkRBVEFCQVNFX1VSTCIsInByb2plY3RJZCIsIlBST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk1FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIkFQUF9JRCIsIm1lYXN1cmVtZW50SWQiLCJNRUFTVVJFTUVOVF9JRCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcHAiLCJnZXRNZXRhIiwic25hcHNob3QiLCJkYXRhYmFzZSIsIm9uY2UiLCJ2YWwiLCJnZXRIZWFkZXIiLCJnZXRTa2lsbHMiLCJnZXRQcm9qZWN0cyIsInN0b3JlSW1hZ2UiLCJmaWxlIiwiZmlsZU5hbWUiLCJ2NCIsInN0b3JhZ2UiLCJwdXQiLCJnZXRVUkwiLCJnZXREb3dubG9hZFVSTCIsIkdyZWV0aW5ncyIsImxhbmciLCJkIiwiRGF0ZSIsInRpbWUiLCJnZXRIb3VycyIsImlkIiwiZW4iLCJqcCIsImdyZWV0Iiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1bmRlZmluZWQiLCJoYW5kbGVSZXNpemUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtR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ZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucywgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UsIGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgZnJvbSB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgcGFnZSAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZnVuY3Rpb24gaXNMb2NhbCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgaWYgKFxuICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICBlLm1ldGFLZXkgfHxcbiAgICAgIGUuY3RybEtleSB8fFxuICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiBjaGlsZEVsbSAmJiBjaGlsZEVsbS50YWdOYW1lKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgaWYgKFxuICAgICAgY2hpbGRQcm9wcy5ocmVmICYmXG4gICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICkge1xuICAgICAgY2hpbGRQcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoY2hpbGRQcm9wcy5ocmVmKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3NlYXJjaC1wYXJhbXMtdG8tdXJsLXF1ZXJ5J1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHtcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBiYXNlUGF0aFxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgOiBmaW5hbFVybC5ocmVmXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBfX04gfSA9IGUuc3RhdGVcbiAgICBpZiAoIV9fTikge1xuICAgICAgLy8gdGhpcyBoaXN0b3J5IHN0YXRlIHdhc24ndCBjcmVhdGVkIGJ5IG5leHQuanMgc28gaXQgY2FuIGJlIGlnbm9yZWRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKG9wdGlvbnMuX05fWCwgb3B0aW9ucy5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIsIGVycm9yOiBlcnIgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgICAgfSBhcyBSb3V0ZUluZm8pXG4gICAgICAgICAgKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBlbmNvZGUgYXMgZW5jb2RlUXVlcnlzdHJpbmcgfSBmcm9tICdxdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBxdWVyeSA9ICcnICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeSk7XG4gICAgcXVlcnkgPSBlbmNvZGVRdWVyeXN0cmluZyhxdWVyeSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKCdodHRwOi8vbicpXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgR2l0SHViLCBHaXRMYWIsIFdoYXRzQXBwLCBMaW5rZWRJbiB9IGZyb20gJy4uL1N2ZydcblxuY29uc3QgQ29udGFpbmVySGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgdHJhbnNpdGlvbjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50cmFuc2l0aW9ufTsgXG5gXG5cbmNvbnN0IFRpdGxlSGVhZGVyID0gc3R5bGVkLmgxYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgdHJhbnNpdGlvbjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50cmFuc2l0aW9ufTsgXG5gXG5cbmNvbnN0IENvbnRhaW5lckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5gXG5cbmNvbnN0IENvbnRhaW5lckZvcm0gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNDglO1xuICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259O1xuICBcbiAgJHsocHJvcHMpID0+IHByb3BzLnNpemUud2lkdGggPCA3NjggJiYgYFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGB9XG5gXG5cbmNvbnN0IENvbnRhaW5lclNvY2lhbE1lZGlhID0gc3R5bGVkKENvbnRhaW5lckZvcm0pYFxuICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259O1xuXG4gICR7KHByb3BzKSA9PiBwcm9wcy5zaXplLndpZHRoIDwgNzY4ICYmIGBcbiAgICBtYXJnaW46IDMycHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGB9XG5gXG5cbmNvbnN0IEZvcm1Db250ZW50ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICBsYWJlbCB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbmBcblxuY29uc3QgU3ViamVjdCA9IHN0eWxlZC5pbnB1dGBcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250fTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTJweCA4cHg7XG4gIHdpZHRoOiA5NSU7XG4gIFxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIH1cbmBcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250fTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgbWF4LWhlaWdodDogMTYwcHg7XG4gIG1heC13aWR0aDogOTUlO1xuICBtaW4taGVpZ2h0OiA3MnB4O1xuICBtaW4td2lkdGg6IDk1JTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTJweCA4cHg7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICB9XG5gXG5cbmNvbnN0IFN1Ym1pdCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnR9O1xuICBtYXJnaW46IDhweCAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgXG4gIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBVcmwgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICR7KHByb3BzKSA9PiBwcm9wcy5tb2JpbGUgJiYgY3NzYFxuICAgIG1hcmdpbjogMTZweDtcbiAgYH1cbmBcblxuY29uc3QgU29jaWFsTWVkaWFDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMzJweDtcbmBcblxuY29uc3QgU29jaWFsTWVkaWFUZXh0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5gXG5cbmNvbnN0IFNvY2lhbE1lZGlhTGFiZWwgPSBzdHlsZWQucGBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbmBcblxuY29uc3QgU29jaWFsTWVkaWFWYWx1ZSA9IHN0eWxlZChTb2NpYWxNZWRpYUxhYmVsKWBcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuYFxuXG5jb25zdCBNb2JpbGVTb2NpYWxNZWRpYSA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzJweDtcbmBcblxuXG5jb25zdCBDb250YWN0ID0gKHsgc2l6ZSwgdGhlbWUgfSkgPT4ge1xuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW3RleHRBcmVhLCBzZXRUZXh0QXJlYV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnR2l0SHViJyxcbiAgICAgIG5hbWU6ICdSYW5keVdhcmRoYW5hJyxcbiAgICAgIGljb246IDxHaXRIdWIgZmlsbD17dGhlbWUucHJpbWFyeX0gLz4sXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vUmFuZHlXYXJkaGFuYScsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0dpdExhYicsXG4gICAgICBuYW1lOiAncmFuZHlfdycsXG4gICAgICBpY29uOiA8R2l0TGFiIGZpbGw9e3RoZW1lLnByaW1hcnl9IC8+LFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRsYWIuY29tL3JhbmR5X3cnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdQaG9uZSAvIFdoYXRzQXBwJyxcbiAgICAgIG5hbWU6ICcrNjIgODEzIDgxMDQgOTE5NicsXG4gICAgICBpY29uOiA8V2hhdHNBcHAgZmlsbD17dGhlbWUucHJpbWFyeX0gLz4sXG4gICAgICB1cmw6ICdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT02MjgxMzgxMDQ5MTk2JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTGlua2VkSW4nLFxuICAgICAgbmFtZTogJ1JhbmR5IFdhcmRoYW5hJyxcbiAgICAgIGljb246IDxMaW5rZWRJbiBmaWxsPXt0aGVtZS5wcmltYXJ5fSAvPixcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yYW5keS13YXJkaGFuYS1hN2IxYTAxN2EvJyxcbiAgICB9LFxuICBdXG5cbiAgY29uc3QgcmVuZGVyU29jaWFsTWVkaWEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTb2NpYWxNZWRpYUNvbnRhaW5lciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxVcmwgbW9iaWxlPXtmYWxzZX0gaHJlZj17aXRlbS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJlclwiPlxuICAgICAgICAgICAgICB7aXRlbS5pY29ufVxuICAgICAgICAgICAgICA8U29jaWFsTWVkaWFUZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxTb2NpYWxNZWRpYUxhYmVsPntpdGVtLnRpdGxlfTwvU29jaWFsTWVkaWFMYWJlbD5cbiAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWFWYWx1ZT57aXRlbS5uYW1lfTwvU29jaWFsTWVkaWFWYWx1ZT5cbiAgICAgICAgICAgICAgPC9Tb2NpYWxNZWRpYVRleHRDb250YWluZXI+XG4gICAgICAgICAgICA8L1VybD5cbiAgICAgICAgICA8L1NvY2lhbE1lZGlhQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHJlbmRlck1vYmlsZVNvY2lhbE1lZGlhID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TW9iaWxlU29jaWFsTWVkaWE+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFVybCBtb2JpbGU9e3RydWV9IGtleT17aW5kZXh9IGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVyZXJcIj5cbiAgICAgICAgICAgICAge2l0ZW0uaWNvbn1cbiAgICAgICAgICAgIDwvVXJsPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L01vYmlsZVNvY2lhbE1lZGlhPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHNlbmREYXRhID0gKCkgPT4ge1xuICAgIGlmICh0ZXh0QXJlYS50cmltKCkgIT09ICcnKSB3aW5kb3cub3BlbihgbWFpbHRvOnJhbmR5d2FyZGhhbmEzN0BnbWFpbC5jb20/c3ViamVjdD0ke3N1YmplY3R9JmJvZHk9JHt0ZXh0QXJlYX1gKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lckhlYWRlciBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgPFRpdGxlSGVhZGVyPkNPTlRBQ1Q8L1RpdGxlSGVhZGVyPlxuICAgICAgPC9Db250YWluZXJIZWFkZXI+XG4gICAgICA8Q29udGFpbmVyQ29udGVudD5cbiAgICAgICAgPENvbnRhaW5lckZvcm0gc2l6ZT17c2l6ZX0+XG4gICAgICAgICAgPEZvcm1Db250ZW50PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3N1YmplY3QnPlN1YmplY3Q8L2xhYmVsPlxuICAgICAgICAgICAgPFN1YmplY3RcbiAgICAgICAgICAgICAgaWQ9J3N1YmplY3QnXG4gICAgICAgICAgICAgIG5hbWU9J3N1YmplY3QnXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3ViamVjdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTdWJqZWN0IChPcHRpb25hbCknXG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIHZhbHVlPXtzdWJqZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Db250ZW50PlxuICAgICAgICAgIDxGb3JtQ29udGVudD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdtZXNzYWdlJz5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgIGlkPSdtZXNzYWdlJ1xuICAgICAgICAgICAgICBuYW1lPSdtZXNzYWdlJ1xuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHRBcmVhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J01lc3NhZ2UnXG4gICAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICAgIHZhbHVlPXt0ZXh0QXJlYX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtQ29udGVudD5cbiAgICAgICAgICA8U3VibWl0PlxuICAgICAgICAgICAgey8qIDxhIGhyZWY9XCJtYWlsdG86cmFuZHl3YXJkaGFuYTM3QGdtYWlsLmNvbT9ib2R5PSdoYWknXCI+ICovfVxuICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2VuZERhdGEoKX0+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvU3VibWl0PlxuICAgICAgICA8L0NvbnRhaW5lckZvcm0+XG4gICAgICAgIDxDb250YWluZXJTb2NpYWxNZWRpYSBzaXplPXtzaXplfT5cbiAgICAgICAgICB7c2l6ZS53aWR0aCA8IDc2OCA/IHJlbmRlck1vYmlsZVNvY2lhbE1lZGlhKCkgOiByZW5kZXJTb2NpYWxNZWRpYSgpfVxuICAgICAgICA8L0NvbnRhaW5lclNvY2lhbE1lZGlhPlxuICAgICAgPC9Db250YWluZXJDb250ZW50PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBIZWFydCB9IGZyb20gJy4uL1N2ZydcblxuY29uc3QgQ29udGFpbmVySGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogOTZweCAwIDA7XG4gIFxuICAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZS53aWR0aCA8IDc2OCAmJiBjc3NgXG4gICAgbWFyZ2luOiAxNnB4IDAgMDtcbiAgYH1cbmBcblxuY29uc3QgVGl0bGVIZWFkZXIgPSBzdHlsZWQucGBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRyYW5zaXRpb246ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudHJhbnNpdGlvbn07IFxuXG4gIEBtZWRpYShtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgQG1lZGlhKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICBmb250LXNpemU6IDExLjc1cHg7XG4gIH1cbmBcblxuY29uc3QgQXV0aG9yID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDAgNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gXG5cbmNvbnN0IEZvb3RlciA9ICh7IHNpemUsIHRoZW1lIH0pID0+IChcbiAgPENvbnRhaW5lckhlYWRlciBzaXplPXtzaXplfT5cbiAgICA8VGl0bGVIZWFkZXI+XG4gICAgICBNYWRlIHdpdGgmZW5zcDs8SGVhcnQgc2l6ZT17c2l6ZS53aWR0aCA8PSAzNzUgPyAxNCA6IDI0fSBmaWxsPXt0aGVtZS5wcmltYXJ5fSAvPiZlbnNwO2J5XG4gICAgICA8QXV0aG9yXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUmFuZHlXYXJkaGFuYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJlclwiXG4gICAgICA+XG4gICAgICAgIFJhbmR5IFdhcmRoYW5hXG4gICAgICA8L0F1dGhvcj5cbiAgICA8L1RpdGxlSGVhZGVyPlxuICA8L0NvbnRhaW5lckhlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgRG93bmxvYWQgfSBmcm9tICcuLi9TdmcnXG5cbmltcG9ydCBHcmVldGluZ3MgZnJvbSAnLi4vLi4vdXRpbHMvZ3JlZXRpbmdzJ1xuaW1wb3J0IHsgc3RvcmVJbWFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL0ZpcmViYXNlUmVxdWVzdCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzJweCAwO1xuICBtYXJnaW46IDMycHggMDtcbiAgXG4gICR7KHByb3BzKSA9PiBwcm9wcy5zaXplLndpZHRoIDwgNzY4ICYmIGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYH1cbmBcblxuY29uc3QgUHJvZmlsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgJHsocHJvcHMpID0+IHByb3BzLnNpemUud2lkdGggPCA3NjggJiYgY3NzYFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYH1cbmBcblxuY29uc3QgR3JlZXRpbmcgPSBzdHlsZWQucGBcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbmBcblxuY29uc3QgTmFtZSA9IHN0eWxlZC5oMWBcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259O1xuYFxuXG5jb25zdCBGdWxsTmFtZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgdHJhbnNpdGlvbjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50cmFuc2l0aW9ufTtcbiAgd2lkdGg6IDUwcHg7XG5cbiAgJHsocHJvcHMpID0+IHByb3BzLnNpemUud2lkdGggPCA3NjggJiYgY3NzYFxuICAgIHdpZHRoOiBhdXRvO1xuICBgfVxuYFxuXG5jb25zdCBQcm9mZXNzaW9uID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMjBweDtcbmBcblxuY29uc3QgRG93bmxvYWRDViA9IHN0eWxlZC5idXR0b25gXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdHJhbnNpdGlvbjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50cmFuc2l0aW9ufTtcblxuICAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZS53aWR0aCA8IDc2OCAmJiBjc3NgXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIGB9XG5gXG5cbmNvbnN0IERvd25sb2FkVGV4dCA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHRyYW5zaXRpb246ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudHJhbnNpdGlvbn07XG5gXG5cbmNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA2NHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGBcblxuY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgSGVhZGVyID0gKHsgc2l6ZSwgdGhlbWUgfSkgPT4ge1xuICAvLyBjb25zdCBoYW5kbGVTdG9yZUltYWdlID0gYXN5bmMgKGUpID0+IHtcbiAgLy8gICBhd2FpdCBzdG9yZUltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKVxuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIHNpemU9e3NpemV9PlxuICAgICAgPFByb2ZpbGVDb250YWluZXIgc2l6ZT17c2l6ZX0+XG4gICAgICAgIDxHcmVldGluZz5Hb29kIE9oYXlvdTwvR3JlZXRpbmc+XG4gICAgICAgIDxOYW1lPlxuICAgICAgICAgIEknbVxuICAgICAgPEZ1bGxOYW1lIHNpemU9e3NpemV9PlJlemEgRmFobGV2aTwvRnVsbE5hbWU+XG4gICAgICAgIDwvTmFtZT5cbiAgICAgICAgPFByb2Zlc3Npb24+SmFnb2FuIE5lb248L1Byb2Zlc3Npb24+XG4gICAgICAgIHsvKiB7ZGF0YS5zaG93X2N2ICYmIChcbiAgICAgICAgICA8RG93bmxvYWRDViBzaXplPXtzaXplfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihkYXRhLmN2KX0+XG4gICAgICAgICAgICA8RG93bmxvYWQgZmlsbD17dGhlbWUucHJpbWFyeX0gLz5cbiAgICAgICAgICAgIDxEb3dubG9hZFRleHQ+RG93bmxvYWQgQ1Y8L0Rvd25sb2FkVGV4dD5cbiAgICAgICAgICA8L0Rvd25sb2FkQ1Y+XG4gICAgICAgICl9ICovfVxuICAgICAgPC9Qcm9maWxlQ29udGFpbmVyPlxuICAgICAge3NpemUud2lkdGggPj0gNzY4ICYmXG4gICAgICAgIDxJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICB7LyogPEltZyBhbHQ9e2RhdGEubmFtZX0gc3JjPXsnaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9zaXRlLXJhbmR5LmFwcHNwb3QuY29tL28vYXZhdGFyJTJGYmFuZHkucG5nP2FsdD1tZWRpYSZ0b2tlbj1iYTNiYWIyOC05MjlkLTRlYzEtYWNiMC0wYTI1NDUwZjY1NmEnfSAvPiAqL31cbiAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cbiAgICAgIH1cbiAgICAgIHsvKiA8aW5wdXQgdHlwZT0nZmlsZScgb25DaGFuZ2U9e2hhbmRsZVN0b3JlSW1hZ2V9IC8+ICovfVxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IE1lbnUsIFN1biwgTW9vbiwgQ2xvc2UgfSBmcm9tICcuLi9TdmcnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIGJveC1zaGFkb3c6IDAgLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudHJhbnNpdGlvbn07XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG5gXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIH1cbmBcblxuY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gXG5cbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQucGBcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICBcbiAgYSB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2Vjb25kYXJ5fTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50cmFuc2l0aW9ufTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgfVxuICB9XG4gICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgJiYgY3NzYFxuICAgIGEge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgYH1cbiAgJHsocHJvcHMpID0+IHByb3BzLm1vYmlsZSAmJiBjc3NgXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICBgfVxuYFxuXG5jb25zdCBNb2RhbCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdHJhbnNpdGlvbjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50cmFuc2l0aW9ufTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgc3BhbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5gXG5cbmNvbnN0IE5hdmJhciA9ICh7IHNpemUsIHRoZW1lLCB0b2dnbGUgfSkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gb3BlbiA/ICdoaWRkZW4nIDogJ2F1dG8nXG4gIH0sIFtvcGVuXSlcblxuICBjb25zdCBoYW5kbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE9wZW4oIW9wZW4pXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICA8TWVudUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPFN0eWxlZExpbmsgYWN0aXZlPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogdGhlbWUucHJpbWFyeSwgZm9udFdlaWdodDogJzcwMCcgfX0+UkFORFk8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgICA8L01lbnVDb250YWluZXI+XG4gICAgICAgICAgICB7c2l6ZS53aWR0aCA8PSA1NzYgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9uIH19IG9uQ2xpY2s9eygpID0+IGhhbmRsZU1lbnUoKX0+XG4gICAgICAgICAgICAgICAgPE1lbnUgc3BhY2U9ezE2fSBzaXplPXsyMH0gZmlsbD17dGhlbWUucHJpbWFyeX0gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzaXplLndpZHRoID4gNTc2ICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgPFN0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNwcm9qZWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPlByb2plY3Q8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRMaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jc2tpbGxzXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPlNraWxsczwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgPFN0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNjb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBjdXJzb3I6ICdwb2ludGVyJywgZGlzcGxheTogJ2ZsZXgnIH19IG9uQ2xpY2s9e3RvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICB7dGhlbWUudGhlbWUgPT0gJ2xpZ2h0JyA/IDxNb29uIHNpemU9ezIwfSBmaWxsPXt0aGVtZS5zZWNvbmRhcnl9IC8+IDogPFN1biBzaXplPXsyMH0gZmlsbD17dGhlbWUuc2Vjb25kYXJ5fSAvPn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9uYXY+XG4gICAgICB7b3BlbiAmJlxuICAgICAgICA8TW9kYWw+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfX0gb25DbGljaz17KCkgPT4gaGFuZGxlTWVudSgpfT5cbiAgICAgICAgICAgIDxDbG9zZSBzcGFjZT17MTZ9IHNpemU9ezIwfSBmaWxsPXt0aGVtZS5iYWNrZ3JvdW5kfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8U3R5bGVkTGluayBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51KCl9IG1vYmlsZT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI3Byb2plY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPGE+UHJvamVjdDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgPFN0eWxlZExpbmsgb25DbGljaz17KCkgPT4gaGFuZGxlTWVudSgpfSBtb2JpbGU+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNza2lsbHNcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPGE+U2tpbGxzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgICA8U3R5bGVkTGluayBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51KCl9IG1vYmlsZT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fSBvbkNsaWNrPXt0b2dnbGV9PlxuICAgICAgICAgICAge3RoZW1lLnRoZW1lID09ICdsaWdodCcgPyA8TW9vbiBzaXplPXsyMH0gZmlsbD17dGhlbWUuc2Vjb25kYXJ5fSAvPiA6IDxTdW4gc2l6ZT17MjB9IGZpbGw9e3RoZW1lLnNlY29uZGFyeX0gLz59XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IENvbnRhaW5lckhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTZweCAwO1xuICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259OyBcbmBcblxuY29uc3QgVGl0bGVIZWFkZXIgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259O1xuYFxuXG5jb25zdCBTZWVNb3JlID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNlY29uZGFyeX07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICB9XG5cbiAgJHsocHJvcHMpID0+IHByb3BzLnNpemUud2lkdGggPCA0MjUgJiYgYFxuICAgIGRpc3BsYXk6IG5vbmVcbiAgYH1cbmBcblxuY29uc3QgQ29udGFpbmVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbmBcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIHdpZHRoOiA0OCU7XG5cbiAgJHsocHJvcHMpID0+IHByb3BzLmluZGV4ID09IDAgPyBgXG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIGAgOiBgXG4gICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMuaW5kZXggJSAyICE9PSAwID8gJzE2cHggIWltcG9ydGFudCcgOiAwfTtcbiAgYH1cblxuICAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZS53aWR0aCA8IDc2OCAmJiBgXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYH1cbmBcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMTc2cHg7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLnBgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gIHRyYW5zaXRpb246ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudHJhbnNpdGlvbn07XG5gXG5cbmNvbnN0IFRydW5jYXRlID0gc3R5bGVkLmRpdmBcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gXG5cbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKFRpdGxlKWBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2Vjb25kYXJ5fTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG5gXG5cbmNvbnN0IFByb2plY3QgPSAoeyBkYXRhLCBzaXplIH0pID0+IChcbiAgPD5cbiAgICA8Q29udGFpbmVySGVhZGVyIGlkPVwicHJvamVjdFwiPlxuICAgICAgPFRpdGxlSGVhZGVyPlBST0pFQ1Q8L1RpdGxlSGVhZGVyPlxuICAgICAgPFNlZU1vcmVcbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9SYW5keVdhcmRoYW5hXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcmVyXCJcbiAgICAgID5cbiAgICAgICAgU2VlIE1vcmUgb24gR2l0aHViXG4gICAgICA8L1NlZU1vcmU+XG4gICAgPC9Db250YWluZXJIZWFkZXI+XG4gICAgPENvbnRhaW5lckNvbnRlbnQ+XG4gICAgICB7Lyoge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb250ZW50IGtleT17aW5kZXh9IHNpemU9e3NpemV9IGluZGV4PXtpbmRleH0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oaXRlbS51cmwpfT5cbiAgICAgICAgICAgIDxJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEltYWdlIGFsdD17aXRlbS50aXRsZX0gc3JjPXtpdGVtLmltYWdlfSAvPlxuICAgICAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxUaXRsZT57aXRlbS50aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgPFRydW5jYXRlPlxuICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+e2l0ZW0uZGVzY3JpcHRpb259PC9EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDwvVHJ1bmNhdGU+XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICApXG4gICAgICB9KX0gKi99XG5cbiAgICAgIDxTZWVNb3JlXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUmFuZHlXYXJkaGFuYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJlclwiXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHNpemUud2lkdGggPCA0MjUgPyAnaW5saW5lLWJsb2NrJyA6ICdub25lJyB9fVxuICAgICAgPlxuICAgICAgICBTZWUgTW9yZSBvbiBHaXRodWJcbiAgICAgIDwvU2VlTW9yZT5cbiAgICA8L0NvbnRhaW5lckNvbnRlbnQ+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCdcblxuaW1wb3J0IHsgU2tpbGxzRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL0R1bW15RGF0YSdcblxuY29uc3QgQ29udGFpbmVySGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgdHJhbnNpdGlvbjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50cmFuc2l0aW9ufTsgXG4gIGBcblxuY29uc3QgVGl0bGVIZWFkZXIgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259OyBcbmBcblxuY29uc3QgU3dpcGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmBcblxuY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgb2JqZWN0LWZpdDogY292ZXI7XG5gXG5cbmNvbnN0IFNraWxsID0gc3R5bGVkLnBgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRyYW5zaXRpb246ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudHJhbnNpdGlvbn07XG5gXG5cbmNvbnN0IEN1c3RvbURvdEl0ZW0gPSBzdHlsZWQubGlgXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2Vjb25kYXJ5fTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259O1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgfVxuXG4gICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgJiYgY3NzYFxuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gIGB9XG5gXG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMTUzNjAsIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiA0LFxuICAgIHNsaWRlc1RvU2xpZGU6IDRcbiAgfSxcbiAgdGFibGV0OiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogMzc1IH0sXG4gICAgaXRlbXM6IDIsXG4gICAgc2xpZGVzVG9TbGlkZTogMlxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzc0LCBtaW46IDAgfSxcbiAgICBpdGVtczogMixcbiAgICBzbGlkZXNUb1NsaWRlOiAyXG4gIH1cbn1cblxuY29uc3QgQ3VzdG9tRG90ID0gKHsgb25DbGljaywgYWN0aXZlIH0pID0+IChcbiAgPEN1c3RvbURvdEl0ZW1cbiAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgIG9uQ2xpY2soKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9fSAvPlxuKVxuXG5jb25zdCBTa2lsbHMgPSAoeyB0aGVtZSwgZGF0YSB9KSA9PiAoXG4gIDw+XG4gICAgPENvbnRhaW5lckhlYWRlciBpZD1cInNraWxsc1wiPlxuICAgICAgPFRpdGxlSGVhZGVyPlNLSUxMUzwvVGl0bGVIZWFkZXI+XG4gICAgPC9Db250YWluZXJIZWFkZXI+XG4gICAgPENhcm91c2VsXG4gICAgICBzd2lwZWFibGU9e3RydWV9XG4gICAgICBkcmFnZ2FibGU9e3RydWV9XG4gICAgICBzaG93RG90cz17dHJ1ZX1cbiAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICBzc3I9e3RydWV9XG4gICAgICBrZXlCb2FyZENvbnRyb2w9e3RydWV9XG4gICAgICByZW5kZXJEb3RzT3V0c2lkZT17dHJ1ZX1cbiAgICAgIGN1c3RvbVRyYW5zaXRpb249XCJhbGwgLjVzIGVhc2UtaW4tb3V0XCJcbiAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcbiAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlPXtbXCJkZXNrdG9wXCIsIFwidGFibGV0XCIsIFwibW9iaWxlXCJdfVxuICAgICAgZG90TGlzdENsYXNzPVwiY3VzdG9tLWRvdC1saXN0LXN0eWxlXCJcbiAgICAgIGl0ZW1DbGFzcz1cImNhcm91c2VsLWl0ZW0tcGFkZGluZy00MC1weFwiXG4gICAgICBjdXN0b21Eb3Q9ezxDdXN0b21Eb3QgLz59XG4gICAgPlxuICAgICAge1NraWxsc0RhdGEodGhlbWUucHJpbWFyeSwgdGhlbWUuYmFja2dyb3VuZCkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8U3dpcGVyQ29udGFpbmVyIGtleT17aW5kZXh9PlxuICAgICAgICAgIHtpdGVtLmljb259XG4gICAgICAgICAgPFNraWxsPntpdGVtLmNhcHRpb259PC9Ta2lsbD5cbiAgICAgICAgPC9Td2lwZXJDb250YWluZXI+XG4gICAgICApKX1cbiAgICA8L0Nhcm91c2VsPlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzIiwiY29uc3QgTWVudSA9ICh7IGZpbGwsIHNpemUsIHNwYWNlIH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogc2l6ZSwgbWFyZ2luUmlnaHQ6IHNwYWNlLCB3aWR0aDogc2l6ZSB9fT5cbiAgICA8cmVjdCB5PVwiOFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD17ZmlsbCB8fCBcIiMyRjMxMzZcIn0gLz5cbiAgICA8cmVjdCB4PVwiMTJcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9e2ZpbGwgfHwgXCIjMkYzMTM2XCJ9IC8+XG4gICAgPHJlY3QgeT1cIjE2XCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjRcIiByeD1cIjJcIiBmaWxsPXtmaWxsIHx8IFwiIzJGMzEzNlwifSAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgQ2xvc2UgPSAoeyBmaWxsLCBzaXplLCBzcGFjZSB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6IHNpemUsIG1hcmdpblJpZ2h0OiBzcGFjZSwgd2lkdGg6IHNpemUgfX0+XG4gICAgPHBhdGggZD1cIk0yMy4yNDc2IDE5LjYxNTRMMTUuNjMyMiAxMS45OTk5TDIzLjI0NzYgNC4zODQ0OEMyNC4yNTA2IDMuMzgxNTQgMjQuMjUwNyAxLjc1NTM4IDIzLjI0NzggMC43NTIzMDVDMjIuMjQ0NiAtMC4yNTA3NjkgMjAuNjE4NCAtMC4yNTA2NCAxOS42MTU2IDAuNzUyMzA1TDEyIDguMzY3NzZMNC4zODQ0MiAwLjc1MjMwNUMzLjM4MTYgLTAuMjUwNzY5IDEuNzU1MTkgLTAuMjUwNzY5IDAuNzUyMjQxIDAuNzUyMzA1Qy0wLjI1MDcwNSAxLjc1NTM4IC0wLjI1MDcwNCAzLjM4MTU0IDAuNzUyMzcgNC4zODQ0OEw4LjM2NzgyIDExLjk5OTlMMC43NTIzNyAxOS42MTU0Qy0wLjI1MDcwNCAyMC42MTg1IC0wLjI1MDgzMyAyMi4yNDQ2IDAuNzUyMjQxIDIzLjI0NzZDMS43NTU1NyAyNC4yNTA4IDMuMzgxNzMgMjQuMjUwNCA0LjM4NDQyIDIzLjI0NzZMMTIgMTUuNjMyMUwxOS42MTU2IDIzLjI0NzZDMjAuNjE4MyAyNC4yNTA1IDIyLjI0NDcgMjQuMjUwNiAyMy4yNDc4IDIzLjI0NzZDMjQuMjUwOCAyMi4yNDQ1IDI0LjI1MDcgMjAuNjE4MyAyMy4yNDc2IDE5LjYxNTRaXCIgZmlsbD17ZmlsbCB8fCBcIiMyRjMxMzZcIn0gLz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IERvd25sb2FkID0gKHsgZmlsbCwgc2l6ZSB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgdHJhbnNpdGlvbjogJ2FsbCAuM3MgZWFzZS1pbi1vdXQnLCB3aWR0aDogc2l6ZSB9fT5cbiAgICA8cGF0aCBkPVwiTTE5LjM1IDEwLjA0QzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0QzkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDRDMi4zNCA4LjM2IDAgMTAuOTEgMCAxNEMwIDE3LjMxIDIuNjkgMjAgNiAyMEgxOUMyMS43NiAyMCAyNCAxNy43NiAyNCAxNUMyNCAxMi4zNiAyMS45NSAxMC4yMiAxOS4zNSAxMC4wNFpNMTcgMTNMMTIgMThMNyAxM0gxMFY5SDE0VjEzSDE3WlwiIGZpbGw9e2ZpbGwgfHwgXCIjMkYzMTM2XCJ9IC8+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBIZWFydCA9ICh7IGZpbGwsIHNpemUgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplIH19PlxuICAgIDxwYXRoIGQ9XCJNMTIgMjEuMzVMMTAuNTUgMjAuMDNDNS40MDAwMyAxNS4zNiAyLjAwMDAzIDEyLjI4IDIuMDAwMDMgOC41QzIuMDAwMDMgNS40MiA0LjQyMDAzIDMgNy41MDAwMyAzQzkuMjQwMDMgMyAxMC45MSAzLjgxIDEyIDUuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgM0MxOS41OCAzIDIyIDUuNDIgMjIgOC41QzIyIDEyLjI4IDE4LjYgMTUuMzYgMTMuNDUgMjAuMDRMMTIgMjEuMzVaXCIgZmlsbD17ZmlsbCB8fCBcIiMyRjMxMzZcIn0gLz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IEdpdEh1YiA9ICh7IGZpbGwsIHNpemUgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplIH19PlxuICAgIDxwYXRoIGQ9XCJNMjkuODUzNSA3Ljk2ODY4QzI4LjQyMjcgNS41MTcyNSAyNi40ODIgMy41NzY0NSAyNC4wMzA4IDIuMTQ1ODRDMjEuNTc5MiAwLjcxNTE1OCAxOC45MDI4IDAgMTUuOTk5NyAwQzEzLjA5NyAwIDEwLjQxOTcgMC43MTUzNzcgNy45Njg2OCAyLjE0NTg0QzUuNTE3MjUgMy41NzYzOCAzLjU3NjU5IDUuNTE3MjUgMi4xNDU4NCA3Ljk2ODY4QzAuNzE1MzA0IDEwLjQyIDAgMTMuMDk2OSAwIDE1Ljk5OTNDMCAxOS40ODU3IDEuMDE3MTcgMjIuNjIwOCAzLjA1MjAzIDI1LjQwNTNDNS4wODY2NyAyOC4xOTAxIDcuNzE1MTEgMzAuMTE3IDEwLjkzNzIgMzEuMTg2M0MxMS4zMTIyIDMxLjI1NTkgMTEuNTg5OSAzMS4yMDcgMTEuNzcwNCAzMS4wNDA3QzExLjk1MSAzMC44NzQyIDEyLjA0MTIgMzAuNjY1NiAxMi4wNDEyIDMwLjQxNTlDMTIuMDQxMiAzMC4zNzQzIDEyLjAzNzYgMjkuOTk5NCAxMi4wMzA3IDI5LjI5MUMxMi4wMjM1IDI4LjU4MjUgMTIuMDIwMSAyNy45NjQ1IDEyLjAyMDEgMjcuNDM3MkwxMS41NDEgMjcuNTIwMUMxMS4yMzU0IDI3LjU3NiAxMC44NSAyNy41OTk3IDEwLjM4NDcgMjcuNTkzQzkuOTE5NjIgMjcuNTg2NSA5LjQzNjc5IDI3LjUzNzggOC45MzY4OSAyNy40NDcyQzguNDM2NzcgMjcuMzU3MyA3Ljk3MTYgMjcuMTQ5IDcuNTQxMDEgMjYuODIyNkM3LjExMDY1IDI2LjQ5NjIgNi44MDUxMyAyNi4wNjkgNi42MjQ1NCAyNS41NDE2TDYuNDE2MjEgMjUuMDYyMkM2LjI3NzM1IDI0Ljc0MyA2LjA1ODc0IDI0LjM4ODUgNS43NjAwOSAyMy45OTk5QzUuNDYxNDMgMjMuNjEwOSA1LjE1OTQxIDIzLjM0NzIgNC44NTM5IDIzLjIwODNMNC43MDgwMyAyMy4xMDM5QzQuNjEwODQgMjMuMDM0NSA0LjUyMDY1IDIyLjk1MDggNC40MzcyNSAyMi44NTM3QzQuMzUzOTIgMjIuNzU2NiA0LjI5MTUzIDIyLjY1OTQgNC4yNDk4NyAyMi41NjJDNC4yMDgxMyAyMi40NjQ2IDQuMjQyNzIgMjIuMzg0NyA0LjM1Mzk5IDIyLjMyMkM0LjQ2NTI3IDIyLjI1OTQgNC42NjYzNyAyMi4yMjg5IDQuOTU4MTcgMjIuMjI4OUw1LjM3NDY3IDIyLjI5MTJDNS42NTI0NiAyMi4zNDY5IDUuOTk2MDYgMjIuNTEzMiA2LjQwNTkyIDIyLjc5MTFDNi44MTU1NyAyMy4wNjg4IDcuMTUyMzEgMjMuNDI5OCA3LjQxNjI0IDIzLjg3NDFDNy43MzU4NCAyNC40NDM3IDguMTIwODkgMjQuODc3NyA4LjU3MjQ5IDI1LjE3NjNDOS4wMjM3MiAyNS40NzUgOS40Nzg2OCAyNS42MjQxIDkuOTM2OTEgMjUuNjI0MUMxMC4zOTUyIDI1LjYyNDEgMTAuNzkwOSAyNS41ODkzIDExLjEyNDQgMjUuNTIwMkMxMS40NTc1IDI1LjQ1MDggMTEuNzcgMjUuMzQ2MyAxMi4wNjE4IDI1LjIwNzZDMTIuMTg2OCAyNC4yNzY2IDEyLjUyNzEgMjMuNTYxNSAxMy4wODI1IDIzLjA2MTZDMTIuMjkwOSAyMi45Nzg0IDExLjU3OTMgMjIuODUzMSAxMC45NDcyIDIyLjY4NjVDMTAuMzE1NCAyMi41MTk3IDkuNjYyNTUgMjIuMjQ5IDguOTg5MDYgMjEuODczN0M4LjMxNTIgMjEuNDk4OCA3Ljc1NjIgMjEuMDMzNCA3LjMxMTg5IDIwLjQ3ODFDNi44Njc1MiAxOS45MjI1IDYuNTAyODMgMTkuMTkzMSA2LjIxODMyIDE4LjI5MDZDNS45MzM2OCAxNy4zODc3IDUuNzkxMzIgMTYuMzQ2MSA1Ljc5MTMyIDE1LjE2NTZDNS43OTEzMiAxMy40ODQ4IDYuMzQwMDMgMTIuMDU0NSA3LjQzNzI1IDEwLjg3MzlDNi45MjMyNyA5LjYxMDI0IDYuOTcxNzkgOC4xOTM2NCA3LjU4Mjk3IDYuNjI0MjRDNy45ODU3NSA2LjQ5OTEgOC41ODMwNyA2LjU5MzAxIDkuMzc0NjIgNi45MDUzOUMxMC4xNjYzIDcuMjE3OTEgMTAuNzQ2IDcuNDg1NjMgMTEuMTE0MiA3LjcwNzZDMTEuNDgyNCA3LjkyOTQ5IDExLjc3NzQgOC4xMTc1MyAxMS45OTk2IDguMjcwMDRDMTMuMjkxNSA3LjkwOTA2IDE0LjYyNDcgNy43Mjg1NCAxNS45OTk2IDcuNzI4NTRDMTcuMzc0NSA3LjcyODU0IDE4LjcwNzkgNy45MDkwNiAxOS45OTk5IDguMjcwMDRMMjAuNzkxNSA3Ljc3MDI4QzIxLjMzMjkgNy40MzY4MSAyMS45NzIyIDcuMTMxMjMgMjIuNzA3OCA2Ljg1MzQ0QzIzLjQ0MzkgNi41NzU3OSAyNC4wMDY4IDYuNDk5MzIgMjQuMzk1OSA2LjYyNDQ2QzI1LjAyMDYgOC4xOTM5MyAyNS4wNzYzIDkuNjEwNDYgMjQuNTYyMiAxMC44NzQxQzI1LjY1OTMgMTIuMDU0NyAyNi4yMDgyIDEzLjQ4NTQgMjYuMjA4MiAxNS4xNjU5QzI2LjIwODIgMTYuMzQ2MyAyNi4wNjU0IDE3LjM5MTIgMjUuNzgxMiAxOC4zMDFDMjUuNDk2NiAxOS4yMTEgMjUuMTI4OCAxOS45Mzk2IDI0LjY3NzUgMjAuNDg4NUMyNC4yMjU4IDIxLjAzNzMgMjMuNjYzMiAyMS40OTkxIDIyLjk4OTcgMjEuODczOUMyMi4zMTYxIDIyLjI0ODkgMjEuNjYzIDIyLjUxOTYgMjEuMDMxMiAyMi42ODY0QzIwLjM5OTIgMjIuODUzMyAxOS42ODc1IDIyLjk3ODYgMTguODk2IDIzLjA2MTlDMTkuNjE3OSAyMy42ODY3IDE5Ljk3OSAyNC42NzI5IDE5Ljk3OSAyNi4wMlYzMC40MTU0QzE5Ljk3OSAzMC42NjUgMjAuMDY1OCAzMC44NzM1IDIwLjIzOTYgMzEuMDQwMUMyMC40MTMyIDMxLjIwNjQgMjAuNjg3MyAzMS4yNTU0IDIxLjA2MjQgMzEuMTg1N0MyNC4yODQ5IDMwLjExNjUgMjYuOTEzMyAyOC4xODk1IDI4Ljk0NzkgMjUuNDA0N0MzMC45ODIyIDIyLjYyMDIgMzEuOTk5OCAxOS40ODUxIDMxLjk5OTggMTUuOTk4N0MzMS45OTkgMTMuMDk2NyAzMS4yODM0IDEwLjQyIDI5Ljg1MzUgNy45Njg2OFpcIiBmaWxsPXtmaWxsIHx8IFwiIzJGMzEzNlwifSAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgR2l0TGFiID0gKHsgZmlsbCwgc2l6ZSB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUgfX0+XG4gICAgPHBhdGggZD1cIk0yNC4zMjc1IDIuNTU5OTJDMjQuMDQ3NSAyLjU1NzQzIDIzLjc5NzUgMi43MzQ5MyAyMy43MSAzLjAwMjQyTDIwLjUyNzUgMTIuNzk5OUgxMS40NzI1TDguMjkgMy4wMDI0MkM4LjIwNSAyLjc0NDkzIDcuOTY3NSAyLjU2NzQzIDcuNjk1IDIuNTU5OTJDNy40MjI1IDIuNTU0OTMgNy4xNzc1IDIuNzE5OTIgNy4wOCAyLjk3NDkzTDMuMjQ1IDEzLjIwOTlDMy4yNDI1IDEzLjIwOTkgMy4yNDI1IDEzLjIxMjQgMy4yNCAxMy4yMTQ5TDEuMzIgMTguMzM0OUMxLjIyIDE4LjYwNDkgMS4zMSAxOC45MDc0IDEuNTQ1IDE5LjA3NzRMMTUuNjIgMjkuMzEyNEwxNS42MjI1IDI5LjMxNzRDMTUuNjI1IDI5LjMxNzQgMTUuNjI1IDI5LjMxNzQgMTUuNjI1IDI5LjMxOTlDMTUuNjMyNSAyOS4zMjQ5IDE1LjY0MjUgMjkuMzI5OSAxNS42NSAyOS4zMzQ5QzE1LjY2IDI5LjMzOTkgMTUuNjY3NSAyOS4zNDc0IDE1LjY3NzUgMjkuMzUyNEMxNS42OCAyOS4zNTI0IDE1LjY4IDI5LjM1NDkgMTUuNjgyNSAyOS4zNTQ5QzE1LjY4MjUgMjkuMzU0OSAxNS42ODUgMjkuMzU3NCAxNS42ODc1IDI5LjM1NzRDMTUuNjkgMjkuMzU5OSAxNS42OTI1IDI5LjM2MjQgMTUuNjk3NSAyOS4zNjI0QzE1LjcgMjkuMzY0OSAxNS43MDUgMjkuMzY3NCAxNS43MDc1IDI5LjM2OTlDMTUuNzIgMjkuMzc0OSAxNS43MzUgMjkuMzgyNCAxNS43NSAyOS4zODc0QzE1Ljc1IDI5LjM4NzQgMTUuNzUgMjkuMzg3NCAxNS43NSAyOS4zODk5QzE1Ljc2NSAyOS4zOTQ5IDE1Ljc4IDI5LjM5OTkgMTUuNzkyNSAyOS40MDQ5QzE1Ljc5NSAyOS40MDQ5IDE1Ljc5NSAyOS40MDQ5IDE1Ljc5NzUgMjkuNDA3NEMxNS44MDc1IDI5LjQwOTkgMTUuODE3NSAyOS40MTI0IDE1LjgzIDI5LjQxNzRDMTUuODM1IDI5LjQxNzQgMTUuODQgMjkuNDE5OSAxNS44NDc1IDI5LjQxOTlDMTUuODQ3NSAyOS40MjI0IDE1Ljg0NzUgMjkuNDIyNCAxNS44NDc1IDI5LjQxOTlDMTUuODYgMjkuNDI0OSAxNS44NzI1IDI5LjQyNzQgMTUuODg1IDI5LjQyOTlDMTUuOTAyNSAyOS40MzI0IDE1LjkxNzUgMjkuNDM0OSAxNS45MzUgMjkuNDM3NEMxNS45NiAyOS40Mzc0IDE1Ljk4NzUgMjkuNDM5OSAxNi4wMTI1IDI5LjQzOTlDMTYuMDM3NSAyOS40Mzc0IDE2LjA2IDI5LjQzNzQgMTYuMDgyNSAyOS40MzI0QzE2LjA5MjUgMjkuNDMyNCAxNi4xIDI5LjQzMjQgMTYuMTEgMjkuNDI5OUMxNi4xMSAyOS40Mjk5IDE2LjExMjUgMjkuNDI5OSAxNi4xMTUgMjkuNDI5OUMxNi4xMiAyOS40Mjc0IDE2LjEyMjUgMjkuNDI3NCAxNi4xMjc1IDI5LjQyNzRDMTYuMTMgMjkuNDI3NCAxNi4xMzI1IDI5LjQyNDkgMTYuMTM3NSAyOS40MjQ5QzE2LjE0MjUgMjkuNDIyNCAxNi4xNSAyOS40MjI0IDE2LjE1NSAyOS40MTk5QzE2LjE2NSAyOS40MTc0IDE2LjE3MjUgMjkuNDE0OSAxNi4xOCAyOS40MTI0QzE2LjE4NSAyOS40MTI0IDE2LjE4NzUgMjkuNDEyNCAxNi4xOSAyOS40MDk5QzE2LjE5MjUgMjkuNDA5OSAxNi4xOTUgMjkuNDA5OSAxNi4xOTc1IDI5LjQwOTlDMTYuMjA3NSAyOS40MDQ5IDE2LjIyIDI5LjM5OTkgMTYuMjMgMjkuMzk3NEMxNi4yNDI1IDI5LjM5MjQgMTYuMjUyNSAyOS4zODc0IDE2LjI2MjUgMjkuMzgyNEMxNi4yNjUgMjkuMzgyNCAxNi4yNjUgMjkuMzgyNCAxNi4yNjc1IDI5LjM3OTlDMTYuMjcgMjkuMzc5OSAxNi4yNzI1IDI5LjM3OTkgMTYuMjc1IDI5LjM3NzRDMTYuMjggMjkuMzc0OSAxNi4yODUgMjkuMzcyNCAxNi4yOSAyOS4zNjk5QzE2LjMwNSAyOS4zNjI0IDE2LjMxNzUgMjkuMzU0OSAxNi4zMyAyOS4zNDc0QzE2LjMzNSAyOS4zNDQ5IDE2LjMzNzUgMjkuMzQyNCAxNi4zNCAyOS4zMzk5QzE2LjM0MjUgMjkuMzM5OSAxNi4zNDUgMjkuMzM3NCAxNi4zNDc1IDI5LjMzNzRDMTYuMzU3NSAyOS4zMjk5IDE2LjM2NzUgMjkuMzI0OSAxNi4zNzc1IDI5LjMxNzRMMTYuMzgyNSAyOS4zMDk5TDMwLjQ1NzUgMTkuMDc3NEMzMC42OSAxOC45MDc0IDMwLjc4IDE4LjYwNDkgMzAuNjggMTguMzM0OUwyOC43NjUgMTMuMjMyNEMyOC43NjI1IDEzLjIyNzQgMjguNzYgMTMuMjE5OSAyOC43NiAxMy4yMTQ5TDI0LjkyIDIuOTc0OTNDMjQuODI1IDIuNzI3NDMgMjQuNTkyNSAyLjU2MjQyIDI0LjMyNzUgMi41NTk5MlpNNy42Mzc1IDUuMTM3NDJMMTAuMTI3NSAxMi43OTk5SDQuNzY1TDcuNjM3NSA1LjEzNzQyWk0yNC4zNjI1IDUuMTM3NDJMMjcuMjM3NSAxMi43OTk5SDIxLjg3MjVMMjQuMzYyNSA1LjEzNzQyWk01LjE2MjUgMTQuMDc5OUgxMC41NDI1TDE0LjI5IDI1LjYwOTlMNS4xNjI1IDE0LjA3OTlaTTExLjg5IDE0LjA3OTlIMjAuMTFMMTYgMjYuNzI5OUwxMS44OSAxNC4wNzk5Wk0yMS40NTc1IDE0LjA3OTlIMjYuODM3NUwxNy43MSAyNS42MDk5TDIxLjQ1NzUgMTQuMDc5OVpNNC4wNCAxNC43MjQ5TDEyLjYgMjUuNTM3NEwyLjY5IDE4LjMyOTlMNC4wNCAxNC43MjQ5Wk0yNy45NiAxNC43MjQ5TDI5LjMxIDE4LjMyOTlMMTkuNCAyNS41Mzc0TDI3Ljk2IDE0LjcyNDlaXCIgZmlsbD17ZmlsbCB8fCBcIiMyRjMxMzZcIn0gLz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IExpbmtlZEluID0gKHsgZmlsbCwgc2l6ZSB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUgfX0+XG4gICAgPHBhdGggZD1cIk0xNiAwQzcuMTY0NzkgMCAwIDcuMTY0NzkgMCAxNkMwIDI0LjgzNTIgNy4xNjQ3OSAzMiAxNiAzMkMyNC44MzUyIDMyIDMyIDI0LjgzNTIgMzIgMTZDMzIgNy4xNjQ3OSAyNC44MzUyIDAgMTYgMFpNMTEuMzUwNiAyNC4xODc1SDcuNDUzODZWMTIuNDY0MUgxMS4zNTA2VjI0LjE4NzVaTTkuNDAyMzQgMTAuODYzM0g5LjM3Njk1QzguMDY5MzQgMTAuODYzMyA3LjIyMzYzIDkuOTYzMTMgNy4yMjM2MyA4LjgzODEzQzcuMjIzNjMgNy42ODc3NCA4LjA5NTIxIDYuODEyNSA5LjQyODIyIDYuODEyNUMxMC43NjEyIDYuODEyNSAxMS41ODE1IDcuNjg3NzQgMTEuNjA2OSA4LjgzODEzQzExLjYwNjkgOS45NjMxMyAxMC43NjEyIDEwLjg2MzMgOS40MDIzNCAxMC44NjMzWk0yNS40MDE0IDI0LjE4NzVIMjEuNTA1MVYxNy45MTU4QzIxLjUwNTEgMTYuMzM5NiAyMC45NDA5IDE1LjI2NDYgMTkuNTMxIDE1LjI2NDZDMTguNDU0NiAxNS4yNjQ2IDE3LjgxMzUgMTUuOTg5NyAxNy41MzE3IDE2LjY4OTdDMTcuNDI4NyAxNi45NDAyIDE3LjQwMzYgMTcuMjkwMyAxNy40MDM2IDE3LjY0MDZWMjQuMTg3NUgxMy41MDcxQzEzLjUwNzEgMjQuMTg3NSAxMy41NTgxIDEzLjU2NCAxMy41MDcxIDEyLjQ2NDFIMTcuNDAzNlYxNC4xMjRDMTcuOTIxNCAxMy4zMjUyIDE4Ljg0NzkgMTIuMTg5IDIwLjkxNTMgMTIuMTg5QzIzLjQ3OSAxMi4xODkgMjUuNDAxNCAxMy44NjQ1IDI1LjQwMTQgMTcuNDY1M1YyNC4xODc1WlwiIGZpbGw9e2ZpbGwgfHwgXCIjMkYzMTM2XCJ9IC8+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBXaGF0c0FwcCA9ICh7IGZpbGwsIHNpemUgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplIH19PlxuICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjYuNjExOSA1LjM0NDEyQzIzLjgwNTMgMi41MzQxOCAyMC4wNzI2IDAuOTg2MDIzIDE2LjA5NjEgMC45ODQzNzVDNy45MDIxNiAwLjk4NDM3NSAxLjIzMzQ2IDcuNjUyODkgMS4yMzAxNiAxNS44NDkxQzEuMjI5MDcgMTguNDY5MSAxLjkxMzUxIDIxLjAyNjcgMy4yMTQ0OCAyMy4yODExTDEuMTA1NDcgMzAuOTg0NEw4Ljk4NjE1IDI4LjkxNzFDMTEuMTU3NiAzMC4xMDE2IDEzLjYwMjIgMzAuNzI1OCAxNi4wOTAxIDMwLjcyNjZIMTYuMDk2M0MyNC4yODk0IDMwLjcyNjYgMzAuOTU4OCAyNC4wNTc1IDMwLjk2MTkgMTUuODYxQzMwLjk2MzYgMTEuODg4NyAyOS40MTg3IDguMTUzODcgMjYuNjExOSA1LjM0NDEyWk0xNi4wOTYxIDI4LjIxNkgxNi4wOTFDMTMuODc0IDI4LjIxNTEgMTEuNjk5NiAyNy42MTkzIDkuODAyMjUgMjYuNDkzN0w5LjM1MTI2IDI2LjIyNThMNC42NzQ3NSAyNy40NTI2TDUuOTIyOTggMjIuODkzMUw1LjYyOTA5IDIyLjQyNTdDNC4zOTIyMSAyMC40NTg0IDMuNzM5MDggMTguMTg0NiAzLjc0MDE4IDE1Ljg1QzMuNzQyNzQgOS4wMzc1NCA5LjI4NTcxIDMuNDk1MTIgMTYuMTAxMSAzLjQ5NTEyQzE5LjQwMTQgMy40OTYyMiAyMi41MDM3IDQuNzgzMDggMjQuODM2NSA3LjExODU5QzI3LjE2OTMgOS40NTQxIDI4LjQ1MzIgMTIuNTU4NSAyOC40NTIxIDE1Ljg2QzI4LjQ0OTIgMjIuNjczIDIyLjkwNjYgMjguMjE2IDE2LjA5NjEgMjguMjE2Wk0yMi44NzM2IDE4Ljk2MkMyMi41MDIzIDE4Ljc3NiAyMC42NzYgMTcuODc3NyAyMC4zMzU0IDE3Ljc1MzVDMTkuOTk1MiAxNy42Mjk2IDE5Ljc0NzMgMTcuNTY3OSAxOS40OTk5IDE3LjkzOTZDMTkuMjUyMSAxOC4zMTEzIDE4LjU0MDQgMTkuMTQ4MSAxOC4zMjM2IDE5LjM5NThDMTguMTA2OCAxOS42NDM3IDE3Ljg5MDQgMTkuNjc0OSAxNy41MTg5IDE5LjQ4ODhDMTcuMTQ3MyAxOS4zMDMgMTUuOTUwNiAxOC45MTA2IDE0LjUzMTcgMTcuNjQ1MUMxMy40Mjc2IDE2LjY2MDIgMTIuNjgyMSAxNS40NDM4IDEyLjQ2NTMgMTUuMDcyMUMxMi4yNDg5IDE0LjcwMDEgMTIuNDYzNSAxNC41MTg0IDEyLjYyODMgMTQuMzE0MUMxMy4wMzA0IDEzLjgxNDggMTMuNDMzMSAxMy4yOTEzIDEzLjU1NjggMTMuMDQzNUMxMy42ODA4IDEyLjc5NTYgMTMuNjE4NyAxMi41Nzg2IDEzLjUyNTcgMTIuMzkyOEMxMy40MzMxIDEyLjIwNjkgMTIuNjkwMiAxMC4zNzg2IDEyLjM4MDcgOS42MzQ2NEMxMi4wNzkgOC45MTA2NCAxMS43NzMgOS4wMDg0MiAxMS41NDQ5IDguOTk3MDdDMTEuMzI4NCA4Ljk4NjI3IDExLjA4MDcgOC45ODQwNyAxMC44MzMgOC45ODQwN0MxMC41ODU0IDguOTg0MDcgMTAuMTgyOSA5LjA3NjkgOS44NDIzNSA5LjQ0ODk3QzkuNTAxOTYgOS44MjA4NiA4LjU0MjQ5IDEwLjcxOTQgOC41NDI0OSAxMi41NDc3QzguNTQyNDkgMTQuMzc2IDkuODczNDggMTYuMTQyMiAxMC4wNTkxIDE2LjM5MDFDMTAuMjQ0OCAxNi42MzgxIDEyLjY3ODUgMjAuMzg5OSAxNi40MDQ1IDIxLjk5ODdDMTcuMjkwNyAyMi4zODE3IDE3Ljk4MjUgMjIuNjEgMTguNTIyMSAyMi43ODEyQzE5LjQxMiAyMy4wNjQgMjAuMjIxNSAyMy4wMjQgMjAuODYxNiAyMi45Mjg1QzIxLjU3NTQgMjIuODIxNyAyMy4wNTkxIDIyLjAyOTggMjMuMzY4OSAyMS4xNjIyQzIzLjY3ODQgMjAuMjk0NSAyMy42Nzg0IDE5LjU1MDkgMjMuNTg1MyAxOS4zOTU4QzIzLjQ5MjcgMTkuMjQwOSAyMy4yNDQ5IDE5LjE0ODEgMjIuODczNiAxOC45NjJaXCIgZmlsbD17ZmlsbCB8fCBcIiMyRjMxMzZcIn0gLz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IE1vb24gPSAoeyBmaWxsLCBzaXplIH0pID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUgfX0+XG4gICAgPHBhdGggZmlsbD17ZmlsbCB8fCBcIiNGNkMzNThcIn0gZD1cIk0xMC43MTkgMi4wODJjLTIuNTcyIDIuMDI4LTQuNzE5IDUuMjEyLTQuNzE5IDkuOTE4IDAgNC41NjkgMS45MzggNy43OTggNC41NDggOS44OTUtNC44MjktLjcwNS04LjU0OC00Ljg3NC04LjU0OC05Ljg5NSAwLTUuMDggMy44MDgtOS4yODggOC43MTktOS45MTh6bTEuMjgxLTIuMDgyYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyYzEuODk0IDAgMy44Ny0uMzMzIDUuMzctMS4xNzktMy40NTMtLjYxMy05LjM3LTMuMzY3LTkuMzctMTAuODIxIDAtNy41NTUgNi40MjItMTAuMzE3IDkuMzctMTAuODIxLTEuNzQtLjY4Mi0zLjQ3Ni0xLjE3OS01LjM3LTEuMTc5em0wIDEwLjk5OWMxLjQzNy40MzggMi41NjIgMS41NjQgMi45OTkgMy4wMDEuNDQtMS40MzcgMS41NjUtMi41NjIgMy4wMDEtMy0xLjQzNi0uNDM5LTIuNTYxLTEuNTYzLTMuMDAxLTMtLjQzNyAxLjQzNi0xLjU2MiAyLjU2MS0yLjk5OSAyLjk5OXptOC4wMDEuMDAxYy45NTguMjkzIDEuNzA3IDEuMDQyIDIgMi4wMDEuMjkxLS45NTkgMS4wNDItMS43MDkgMS45OTktMi4wMDEtLjk1Ny0uMjkyLTEuNzA3LTEuMDQyLTItMi0uMjkzLjk1OC0xLjA0MiAxLjcwOC0xLjk5OSAyem0tMS05Yy0uNDM3IDEuNDM3LTEuNTYzIDIuNTYyLTIuOTk4IDMuMDAxIDEuNDM4LjQ0IDIuNTYxIDEuNTY0IDMuMDAxIDMuMDAyLjQzNy0xLjQzOCAxLjU2My0yLjU2MyAyLjk5Ni0zLjAwMi0xLjQzMy0uNDM3LTIuNTU5LTEuNTY0LTIuOTk5LTMuMDAxelwiIC8+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBTdW4gPSAoeyBmaWxsLCBzaXplIH0pID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUgfX0+XG4gICAgPHBhdGggZmlsbD17ZmlsbCB8fCBcIiNGRkZGRkZcIn0gZD1cIk0xMiA5YzEuNjU0IDAgMyAxLjM0NiAzIDNzLTEuMzQ2IDMtMyAzLTMtMS4zNDYtMy0zIDEuMzQ2LTMgMy0zem0wLTJjLTIuNzYyIDAtNSAyLjIzOC01IDVzMi4yMzggNSA1IDUgNS0yLjIzOCA1LTUtMi4yMzgtNS01LTV6bTAtMmMuMzQgMCAuNjcyLjAzMyAxIC4wOHYtMi4wOGgtMnYyLjA4Yy4zMjgtLjA0Ny42Ni0uMDggMS0uMDh6bS00LjE4NCAxLjQwMWwtMS40NzItMS40NzMtMS40MTQgMS40MTUgMS40NzMgMS40NzNjLjQwMS0uNTM3Ljg3Ni0xLjAxMyAxLjQxMy0xLjQxNXptOS43ODIgMS40MTRsMS40NzMtMS40NzMtMS40MTQtMS40MTQtMS40NzMgMS40NzNjLjUzNy40MDIgMS4wMTIuODc4IDEuNDE0IDEuNDE0em0tNS41OTggMTEuMTg1Yy0uMzQgMC0uNjcyLS4wMzMtMS0uMDh2Mi4wOGgydi0yLjA4Yy0uMzI4LjA0Ny0uNjYuMDgtMSAuMDh6bTQuMTg1LTEuNDAybDEuNDczIDEuNDczIDEuNDE1LTEuNDE1LTEuNDczLTEuNDcyYy0uNDAzLjUzNi0uODc5IDEuMDEyLTEuNDE1IDEuNDE0em0tMTEuMTg1LTUuNTk4YzAtLjM0LjAzMy0uNjcyLjA4LTFoLTIuMDh2MmgyLjA4Yy0uMDQ3LS4zMjgtLjA4LS42Ni0uMDgtMXptMTMuOTItMWMuMDQ3LjMyOC4wOC42Ni4wOCAxcy0uMDMzLjY3Mi0uMDggMWgyLjA4di0yaC0yLjA4em0tMTIuNTE5IDUuMTg0bC0xLjQ3MyAxLjQ3MyAxLjQxNCAxLjQxNCAxLjQ3My0xLjQ3M2MtLjUzNi0uNDAyLTEuMDEyLS44NzctMS40MTQtMS40MTR6XCIgLz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IExvYWRlciA9ICh7IGZpbGwsIHNpemUgfSkgPT4gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBzdHlsZT1cIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcIiB3aWR0aD1cIjIwMHB4XCIgaGVpZ2h0PVwiMjAwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplIH19PlxuICAgIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMzJcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2U9e2ZpbGwgfHwgXCIjMmYzMTM2XCJ9IHN0cm9rZURhc2hhcnJheT1cIjUwLjI2NTQ4MjQ1NzQzNjY5IDUwLjI2NTQ4MjQ1NzQzNjY5XCIgZmlsbD1cIm5vbmVcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIj5cbiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgZHVyPVwiMXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBrZXlUaW1lcz1cIjA7MVwiIHZhbHVlcz1cIjAgNTAgNTA7MzYwIDUwIDUwXCIgLz5cbiAgICA8L2NpcmNsZT5cbiAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjI5XCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlPVwiIzllYTRhOVwiIHN0cm9rZURhc2hhcnJheT1cIjQ1LjU1MzA5MzQ3NzA1MiA0NS41NTMwOTM0NzcwNTJcIiBzdHJva2UtZGFzaG9mZnNldD1cIjQ1LjU1MzA5MzQ3NzA1MlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCI+XG4gICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInJvdGF0ZVwiIGR1cj1cIjFzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIga2V5VGltZXM9XCIwOzFcIiB2YWx1ZXM9XCIwIDUwIDUwOy0zNjAgNTAgNTBcIiAvPlxuICAgIDwvY2lyY2xlPlxuICA8L3N2Zz5cbilcblxuLy8gU2tpbGxzXG5cbmNvbnN0IENTUyA9ICh7IGZpbGwsIGZpbGxTZWNvbmRhcnksIHNpemUgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplIH19PlxuICAgIDxwYXRoIGQ9XCJNNTQuNjY2NyA2LjY2Njc1SDkuMzMzMzNMMTMuMzMzMyA1Mi4wMDAxTDMyIDU3LjMzMzRMNTAuNjY2NyA1Mi4wMDAxTDU0LjY2NjcgNi42NjY3NVpcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICAgIDxwYXRoIGQ9XCJNMzIgMTAuNjY2N1Y1My4yMDAxTDQ2LjkzMzMgNDguOTMzNEw1MC4yNjY3IDEwLjY2NjdIMzJaXCIgZmlsbD17ZmlsbCB8fCBcIiNGNkMzNThcIn0gLz5cbiAgICA8cGF0aCBkPVwiTTQ0LjEzMzMgMTcuMzMzM0gzMlYyMi42NjY2SDM4LjUzMzNMMzguMTMzMyAyNy45OTk5SDMyVjMzLjMzMzNIMzcuODY2N0wzNy40NjY3IDM5LjMzMzNMMzIgNDEuMTk5OVY0Ni43OTk5TDQyLjUzMzMgNDMuMzMzM0w0My40NjY3IDI3Ljk5OTlMNDQuMTMzMyAxNy4zMzMzWlwiIGZpbGw9e2ZpbGxTZWNvbmRhcnkgfHwgXCJ3aGl0ZVwifSAvPlxuICAgIDxwYXRoIGQ9XCJNMzIgMTcuMzMzM1YyMi42NjY2SDIwLjEzMzNMMTkuNzMzMyAxNy4zMzMzSDMyWk0yNS44NjY3IDI3Ljk5OTlMMjYuMTMzMyAzMy4zMzMzSDMyVjI3Ljk5OTlIMjUuODY2N1pNMjYuNCAzNS45OTk5SDIxLjA2NjdMMjEuNDY2NyA0My4zMzMzTDMyIDQ2Ljc5OTlWNDEuMTk5OUwyNi41MzMzIDM5LjMzMzNMMjYuNCAzNS45OTk5WlwiIGZpbGw9e2ZpbGxTZWNvbmRhcnkgfHwgXCJ3aGl0ZVwifSAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgRGlzY29yZCA9ICh7IGZpbGwsIHNpemUgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplIH19PlxuICAgIDxwYXRoIGQ9XCJNNTMuMzMzMyAxNi4wMDAxQzUzLjMzMzMgMTYuMDAwMSA0Ny4yMiAxMS4yMTYxIDQwIDEwLjY2NjdMMzkuMzQ5MyAxMS45NjgxQzQ1Ljg3NzMgMTMuNTY1NCA0OC44NzIgMTUuODU0NyA1MiAxOC42NjY3QzQ2LjYwNjcgMTUuOTEzNCA0MS4yODEzIDEzLjMzMzQgMzIgMTMuMzMzNEMyMi43MTg3IDEzLjMzMzQgMTcuMzkzMyAxNS45MTM0IDEyIDE4LjY2NjdDMTUuMTI4IDE1Ljg1NDcgMTguNjkwNyAxMy4zMTM0IDI0LjY1MDcgMTEuOTY4MUwyNCAxMC42NjY3QzE2LjQyNTMgMTEuMzgyNyAxMC42NjY3IDE2LjAwMDEgMTAuNjY2NyAxNi4wMDAxQzEwLjY2NjcgMTYuMDAwMSAzLjgzODY2IDI1LjkwMDEgMi42NjY2NiA0NS4zMzM0QzkuNTQ5MzIgNTMuMjcwNyAyMCA1My4zMzM0IDIwIDUzLjMzMzRMMjIuMTg1MyA1MC40MjAxQzE4LjQ3NiA0OS4xMzA3IDE0LjI4NjcgNDYuODI4MSAxMC42NjY3IDQyLjY2NjdDMTQuOTg0IDQ1LjkzMzQgMjEuNSA0OS4zMzM0IDMyIDQ5LjMzMzRDNDIuNSA0OS4zMzM0IDQ5LjAxNiA0NS45MzM0IDUzLjMzMzMgNDIuNjY2N0M0OS43MTMzIDQ2LjgyODEgNDUuNTI0IDQ5LjEzMDcgNDEuODE0NyA1MC40MjAxTDQ0IDUzLjMzMzRDNDQgNTMuMzMzNCA1NC40NTA3IDUzLjI3MDcgNjEuMzMzMyA0NS4zMzM0QzYwLjE2MTMgMjUuOTAwMSA1My4zMzMzIDE2LjAwMDEgNTMuMzMzMyAxNi4wMDAxWk0yMy4zMzMzIDQwLjAwMDFDMjAuNzU2IDQwLjAwMDEgMTguNjY2NyAzNy42MTIxIDE4LjY2NjcgMzQuNjY2N0MxOC42NjY3IDMxLjcyMTQgMjAuNzU2IDI5LjMzMzQgMjMuMzMzMyAyOS4zMzM0QzI1LjkxMDcgMjkuMzMzNCAyOCAzMS43MjE0IDI4IDM0LjY2NjdDMjggMzcuNjEyMSAyNS45MTA3IDQwLjAwMDEgMjMuMzMzMyA0MC4wMDAxWk00MC42NjY3IDQwLjAwMDFDMzguMDg5MyA0MC4wMDAxIDM2IDM3LjYxMjEgMzYgMzQuNjY2N0MzNiAzMS43MjE0IDM4LjA4OTMgMjkuMzMzNCA0MC42NjY3IDI5LjMzMzRDNDMuMjQ0IDI5LjMzMzQgNDUuMzMzMyAzMS43MjE0IDQ1LjMzMzMgMzQuNjY2N0M0NS4zMzMzIDM3LjYxMjEgNDMuMjQ0IDQwLjAwMDEgNDAuNjY2NyA0MC4wMDAxWlwiIGZpbGw9e2ZpbGwgfHwgXCIjRjZDMzU4XCJ9IC8+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBFeHByZXNzSlMgPSAoeyBmaWxsLCBzaXplIH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjcyXCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDcyIDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSB9fT5cbiAgICA8cGF0aCBkPVwiTTMxLjU4NCAzMS4xODRIMTAuMjA4QzEwLjM3ODcgMjkuNjkwNyAxMC43MiAyOC4yNCAxMS4yMzIgMjYuODMyQzExLjc4NjcgMjUuMzgxMyAxMi41MTIgMjQuMTIyNyAxMy40MDggMjMuMDU2QzE0LjMwNCAyMS45NDY3IDE1LjM5MiAyMS4wNzIgMTYuNjcyIDIwLjQzMkMxNy45NTIgMTkuNzQ5MyAxOS40MjQgMTkuNDA4IDIxLjA4OCAxOS40MDhDMjIuNzA5MyAxOS40MDggMjQuMTYgMTkuNzQ5MyAyNS40NCAyMC40MzJDMjYuNzIgMjEuMDcyIDI3LjgwOCAyMS45NDY3IDI4LjcwNCAyMy4wNTZDMjkuNiAyNC4xMjI3IDMwLjI4MjcgMjUuMzYgMzAuNzUyIDI2Ljc2OEMzMS4yNjQgMjguMTc2IDMxLjU0MTMgMjkuNjQ4IDMxLjU4NCAzMS4xODRaTTEwLjIwOCAzNC41NzZIMzUuNjE2QzM1LjcwMTMgMzIuMjcyIDM1LjQ4OCAzMC4wMTA3IDM0Ljk3NiAyNy43OTJDMzQuNDY0IDI1LjUzMDcgMzMuNjEwNyAyMy41NDY3IDMyLjQxNiAyMS44NEMzMS4yNjQgMjAuMDkwNyAyOS43NDkzIDE4LjY4MjcgMjcuODcyIDE3LjYxNkMyNS45OTQ3IDE2LjU0OTMgMjMuNzMzMyAxNi4wMTYgMjEuMDg4IDE2LjAxNkMxOC40ODUzIDE2LjAxNiAxNi4yMjQgMTYuNTI4IDE0LjMwNCAxNy41NTJDMTIuNDI2NyAxOC41MzMzIDEwLjg5MDcgMTkuODU2IDkuNjk2IDIxLjUyQzguNTAxMzMgMjMuMTQxMyA3LjYwNTMzIDI0Ljk5NzMgNy4wMDggMjcuMDg4QzYuNDUzMzMgMjkuMTc4NyA2LjE3NiAzMS4zMTIgNi4xNzYgMzMuNDg4QzYuMTc2IDM1LjgzNDcgNi40NTMzMyAzOC4wNzQ3IDcuMDA4IDQwLjIwOEM3LjYwNTMzIDQyLjI5ODcgOC41MDEzMyA0NC4xNTQ3IDkuNjk2IDQ1Ljc3NkMxMC44OTA3IDQ3LjM1NDcgMTIuNDI2NyA0OC42MTMzIDE0LjMwNCA0OS41NTJDMTYuMjI0IDUwLjQ0OCAxOC40ODUzIDUwLjg5NiAyMS4wODggNTAuODk2QzI1LjI2OTMgNTAuODk2IDI4LjQ5MDcgNDkuODcyIDMwLjc1MiA0Ny44MjRDMzMuMDU2IDQ1Ljc3NiAzNC42MzQ3IDQyLjg3NDcgMzUuNDg4IDM5LjEySDMxLjQ1NkMzMC44MTYgNDEuNjggMjkuNjY0IDQzLjcyOCAyOCA0NS4yNjRDMjYuMzM2IDQ2LjggMjQuMDMyIDQ3LjU2OCAyMS4wODggNDcuNTY4QzE5LjE2OCA0Ny41NjggMTcuNTI1MyA0Ny4xNjI3IDE2LjE2IDQ2LjM1MkMxNC43OTQ3IDQ1LjU0MTMgMTMuNjY0IDQ0LjUxNzMgMTIuNzY4IDQzLjI4QzExLjg3MiA0Mi4wNDI3IDExLjIxMDcgNDAuNjU2IDEwLjc4NCAzOS4xMkMxMC40IDM3LjU0MTMgMTAuMjA4IDM2LjAyNjcgMTAuMjA4IDM0LjU3NlpNNTAuMDUxNSAzMi44NDhMMzcuMjUxNSA1MEg0Mi4yNDM1TDUyLjQxOTUgMzYuMTEyTDYyLjc4NzUgNTBINjcuOTA3NUw1NS4wNDM1IDMyLjc4NEw2Ni45NDc1IDE2Ljk3Nkg2MS44OTE1TDUyLjY3NTUgMjkuNTJMNDMuMjY3NSAxNi45NzZIMzguMjExNUw1MC4wNTE1IDMyLjg0OFpcIiBmaWxsPXtmaWxsIHx8IFwiIzJGMzEzNlwifSAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgRmlnbWEgPSAoeyBmaWxsLCBzaXplIH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSB9fT5cbiAgICA8cGF0aCBkPVwiTTI1IDJDMTguOTM0IDIgMTQgNi45MzQgMTQgMTNDMTQgMTYuMzE1OCAxNS40ODEgMTkuMjg2MyAxNy44MDg2IDIxLjMwNDdDMTQuMzU0NyAyMy4xNjE5IDEyIDI2LjgxMSAxMiAzMUMxMiAzNC43MjEzIDEzLjg2MzMgMzguMDA4NSAxNi42OTkyIDQwQzEzLjg2MzMgNDEuOTkxNSAxMiA0NS4yNzg3IDEyIDQ5QzEyIDU1LjA2NiAxNi45MzQgNjAgMjMgNjBDMjkuMDY2IDYwIDM0IDU1LjA2NiAzNCA0OVYzOFYyNEg0MUM0Ny4wNjYgMjQgNTIgMTkuMDY2IDUyIDEzQzUyIDYuOTM0IDQ3LjA2NiAyIDQxIDJIMjVaTTI1IDZINDFDNDQuODYgNiA0OCA5LjE0IDQ4IDEzQzQ4IDE2Ljg2IDQ0Ljg2IDIwIDQxIDIwSDM0SDI1QzIxLjE0IDIwIDE4IDE2Ljg2IDE4IDEzQzE4IDkuMTQgMjEuMTQgNiAyNSA2Wk0yMyAyNEgyNUgzMFYzOEgyM0MxOS4xNCAzOCAxNiAzNC44NiAxNiAzMUMxNiAyNy4xNCAxOS4xNCAyNCAyMyAyNFpNNDIgMjRDMzkuODc4MyAyNCAzNy44NDM0IDI0Ljg0MjkgMzYuMzQzMSAyNi4zNDMxQzM0Ljg0MjkgMjcuODQzNCAzNCAyOS44NzgzIDM0IDMyQzM0IDM0LjEyMTcgMzQuODQyOSAzNi4xNTY2IDM2LjM0MzEgMzcuNjU2OUMzNy44NDM0IDM5LjE1NzEgMzkuODc4MyA0MCA0MiA0MEM0NC4xMjE3IDQwIDQ2LjE1NjYgMzkuMTU3MSA0Ny42NTY5IDM3LjY1NjlDNDkuMTU3MSAzNi4xNTY2IDUwIDM0LjEyMTcgNTAgMzJDNTAgMjkuODc4MyA0OS4xNTcxIDI3Ljg0MzQgNDcuNjU2OSAyNi4zNDMxQzQ2LjE1NjYgMjQuODQyOSA0NC4xMjE3IDI0IDQyIDI0VjI0Wk0yMyA0MkgzMFY0OUMzMCA1Mi44NiAyNi44NiA1NiAyMyA1NkMxOS4xNCA1NiAxNiA1Mi44NiAxNiA0OUMxNiA0NS4xNCAxOS4xNCA0MiAyMyA0MlpcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgSFRNTCA9ICh7IGZpbGwsIGZpbGxTZWNvbmRhcnksIHNpemUgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplIH19PlxuICAgIDxwYXRoIGQ9XCJNNTQuNjY2NyA2LjY2Njc1SDkuMzMzMzNMMTMuMzMzMyA1Mi4wMDAxTDMyIDU3LjMzMzRMNTAuNjY2NyA1Mi4wMDAxTDU0LjY2NjcgNi42NjY3NVpcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICAgIDxwYXRoIGQ9XCJNMzIgMTAuNjY2N1Y1My4yMDAxTDQ2LjkzMzMgNDguOTMzNEw1MC4yNjY3IDEwLjY2NjdIMzJaXCIgZmlsbD17ZmlsbCB8fCBcIiNGNkMzNThcIn0gLz5cbiAgICA8cGF0aCBkPVwiTTMyIDMzLjMzMzNWMjcuOTk5OUg0My40NjY3TDQyLjUzMzMgNDMuMzMzM0wzMiA0Ni43OTk5VjQxLjE5OTlMMzcuNDY2NyAzOS4zMzMzTDM3Ljg2NjcgMzMuMzMzM0gzMlYzMy4zMzMzWk00My44NjY3IDIyLjY2NjZMNDQuMjY2NyAxNy4zMzMzSDMyVjIyLjY2NjZINDMuODY2N1pcIiBmaWxsPXtmaWxsU2Vjb25kYXJ5IHx8IFwid2hpdGVcIn0gLz5cbiAgICA8cGF0aCBkPVwiTTMyIDQxLjE5OTlWNDYuNzk5OUwyMS40NjY3IDQzLjMzMzNMMjAuOTMzMyAzNS45OTk5SDI2LjI2NjdMMjYuNTMzMyAzOS4zMzMzTDMyIDQxLjE5OTlaTTI1LjQ2NjcgMjIuNjY2NkgzMlYxNy4zMzMzSDE5Ljg2NjdMMjAuOCAzMy4zMzMzSDMyVjI3Ljk5OTlIMjUuODY2N0wyNS40NjY3IDIyLjY2NjZaXCIgZmlsbD17ZmlsbFNlY29uZGFyeSB8fCBcIndoaXRlXCJ9IC8+XG4gIDwvc3ZnPlxuXG4pXG5cbmNvbnN0IEphdmFTY3JpcHQgPSAoeyBmaWxsLCBmaWxsU2Vjb25kYXJ5LCBzaXplIH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSB9fT5cbiAgICA8cGF0aCBkPVwiTTggNTZWOEg1NlY1Nkg4WlwiIGZpbGw9e2ZpbGwgfHwgXCIjRjZDMzU4XCJ9IC8+XG4gICAgPHBhdGggZD1cIk0zOS4zODQgNDMuOTI5M0M0MC4zMDY3IDQ1LjQyNzkgNDEuMzA5MyA0Ni44NjM5IDQzLjQzMzMgNDYuODYzOUM0NS4yMTczIDQ2Ljg2MzkgNDYuMTUzMyA0NS45NzczIDQ2LjE1MzMgNDQuNzUwNkM0Ni4xNTMzIDQzLjI4MjYgNDUuMTg1MyA0Mi43NjEzIDQzLjIyMjcgNDEuOTA2Nkw0Mi4xNDY3IDQxLjQ0NzlDMzkuMDQxMyA0MC4xMzA2IDM2Ljk3NiAzOC40Nzk5IDM2Ljk3NiAzNC45OTMzQzM2Ljk3NiAzMS43Nzk5IDM5LjQzNiAyOS4zMzQ2IDQzLjI4IDI5LjMzNDZDNDYuMDE3MyAyOS4zMzQ2IDQ3Ljk4NCAzMC4yODI2IDQ5LjQwMjcgMzIuNzY1M0w0Ni4wNTA3IDM0LjkwNzlDNDUuMzEzMyAzMy41OTA2IDQ0LjUxNiAzMy4wNzE5IDQzLjI4IDMzLjA3MTlDNDIuMDE4NyAzMy4wNzE5IDQxLjIyIDMzLjg2NzkgNDEuMjIgMzQuOTA3OUM0MS4yMiAzNi4xOTMzIDQyLjAyIDM2LjcxMzMgNDMuODY2NyAzNy41MDkzTDQ0Ljk0MjcgMzcuOTY3OUM0OC42MDI3IDM5LjUyNjYgNTAuNjY2NyA0MS4xMTg2IDUwLjY2NjcgNDQuNjk3M0M1MC42NjY3IDQ4LjU1MzMgNDcuNjIxMyA1MC42NjY2IDQzLjUzMzMgNTAuNjY2NkMzOS41MzQ3IDUwLjY2NjYgMzcuMjY0IDQ4LjY1OTkgMzYgNDYuMTc1OUwzOS4zODQgNDMuOTI5M1pNMjMuOTM2IDQ0LjAzODZDMjQuNjEwNyA0NS4yNDY2IDI1LjYzNiA0Ni4xNzU5IDI3LjExMDcgNDYuMTc1OUMyOC41MjEzIDQ2LjE3NTkgMjkuMzMzMyA0NS42MTg2IDI5LjMzMzMgNDMuNDUxOVYyOS4zMzMzSDMzLjc3NzNWNDQuMTM0NkMzMy43NzczIDQ4LjYyMzkgMzEuMTczMyA1MC42NjY2IDI3LjM3MDcgNTAuNjY2NkMyMy45MzQ3IDUwLjY2NjYgMjEuNDU0NyA0OC4zMzg2IDIwLjQ0NCA0Ni4xNzU5TDIzLjkzNiA0NC4wMzg2WlwiIGZpbGw9e2ZpbGxTZWNvbmRhcnkgfHwgXCJ3aGl0ZVwifSAvPlxuICA8L3N2Zz5cblxuKVxuXG5jb25zdCBMYXJhdmVsID0gKHsgZmlsbCwgc2l6ZSB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUgfX0+XG4gICAgPHBhdGggZD1cIk0xNS4xMTMzIDEwLjAxMTZDMTMuNzk5MyAxMC4wNjc2IDMuNzc4MzggMTAuOTE4MiAzLjA2NjM4IDEwLjk4NDJDMi4zNTQzOCAxMS4wNDIyIDEuNTY5MjIgMTEuMzcxNSAyLjI4MTIyIDEzLjA5NzVDMi45OTMyMiAxNC44MjM1IDE0LjM3MTQgMzkuOTAyNyAxNC42OTE0IDQwLjYzMjdDMTUuMDA5NCA0MS4zNjA3IDE1LjgzNTYgNDIuNTUwMiAxNy43NjU2IDQyLjA3MDJDMTkuNzQzNiA0MS41ODIyIDI2LjYwNTQgMzkuNzQ4MSAzMC4zNTU0IDM4Ljc0MjFDMzIuMzMzNCA0Mi40MTQxIDM2LjM3NSA0OS44NTc3IDM3LjEyNSA1MC45MjE3QzM4LjExOSA1Mi4zNDk3IDM4LjgxMTggNTIuMTA2OCA0MC4zMzk4IDUxLjYyODhDNDEuNTM5OCA1MS4yNTQ4IDU5LjA1MTggNDQuODE0MiA1OS44Mzk4IDQ0LjQ4ODJDNjAuNjI3OCA0NC4xNTIyIDYxLjExMjEgNDMuOTIzMiA2MC41NzgxIDQzLjEwOTJDNjAuMTg0MSA0Mi41MTUyIDU1LjU2MjUgMzYuMTg1MSA1My4xNDQ1IDMyLjg2NzFDNTQuODA0NSAzMi40MTcxIDYwLjcwMDEgMzAuODE0NyA2MS4zMjgxIDMwLjYzMjdDNjIuMDY2MSAzMC40Mzg3IDYyLjE2OTYgMzAuMDc3MSA2MS43NjU2IDI5LjYxNzFDNjEuMzcxNiAyOS4xNTcxIDU1Ljg4IDIyLjEyOTMgNTQuOTE0IDIwLjk0MTNDNTMuOTQ4IDE5Ljc1MzMgNTMuNDY4OSAxOS45NjA3IDUyLjg3ODkgMjAuMDQ2N0M1Mi4yNzg5IDIwLjEzMjcgNDUuMzMzMyAyMS4zMzA3IDQ0LjUyNzMgMjEuNDY0N0M0My43MjEzIDIxLjYwODcgNDMuMjE0OSAyMS45MzQ0IDQzLjcxMDkgMjIuNjQ0NEM0NC4xNTA5IDIzLjI3NjQgNDguNzE4NCAyOS45MDUyIDQ5LjczMDQgMzEuMzYzMkwzMS41NzAzIDM1LjgwODVMMTcuMTIxMSAxMS4xMjFDMTYuNTQ5MSAxMC4yNDkgMTYuNDI1MyA5Ljk0MzU5IDE1LjExMzMgMTAuMDExNlpNMTQuODg2NyAxMS43MjY0QzE1LjIyNDcgMTEuNzA2NCAxNS4xODY2IDExLjc4MjEgMTUuMzA4NiAxMS45OTIxQzE1LjMwODYgMTEuOTkyMSAyOC42MzkzIDM1LjUyMTUgMjguODYzMyAzNS45MzM1QzI5LjEwNzMgMzYuMzQ1NSAyOC45Njk5IDM2LjQ3MTQgMjguNzUzOSAzNi41MTk0QzI4LjUzNzkgMzYuNTY3NCAxOC4zNjQzIDM5LjA1NzUgMTcuODIwMyAzOS4xODM1QzE3LjI3NjMgMzkuMzA3NSAxNy4yNzY5IDM5LjI1MDUgMTcuMjEwOSAzOS4wNTg1QzE3LjE0NDkgMzguODY2NSA1LjEyMTEgMTMuNDg5NyA0Ljk1MzEgMTMuMTcxN0M0Ljc4NTEgMTIuODU1NyA0Ljc5MzEgMTIuNjA1MyA0Ljk1MzEgMTIuNjA1M0M1LjExMzEgMTIuNjA1MyAxNC41NTg3IDExLjc0NDQgMTQuODg2NyAxMS43MjY0Wk01My41NDI5IDIxLjY5MTNDNTMuNjc3NyAyMS43MjI1IDUzLjgxOTMgMjEuODIzNSA1My45ODgzIDIyLjA1ODVDNTQuMzI2MyAyMi41Mjg1IDU4LjkxOTYgMjguNDgwOCA1OS4wOTc2IDI4LjcxMDhDNTkuMjY1NiAyOC45MzI4IDU4Ljk2NDMgMjkuMDY3OSA1OC41NzAzIDI5LjE2MzlDNTguMTc2MyAyOS4yNDk5IDUxLjY3MTggMzAuODk4MyA1MS42NzE4IDMwLjg5ODNMNDYuMzU1NCAyMy40NDEzQzQ2LjIwNTQgMjMuMjIxMyA0Ni4wODQ5IDIzLjAwODggNDYuNDYwOSAyMi45NjA4QzQ2LjgzNDkgMjIuOTEyOCA1Mi44NzI1IDIxLjc4ODMgNTMuMTQ0NSAyMS43MzAzQzUzLjI4MDUgMjEuNjk2MyA1My40MDgyIDIxLjY2IDUzLjU0MjkgMjEuNjkxM1pNNTEuMDU0NyAzMy4yMzQyQzUxLjE4MDIgMzMuMjQ4NSA1MS4yODU4IDMzLjMzNzQgNTEuNDI1OCAzMy41NjI0QzUxLjY5OTggMzQuMDI0NCA1Ny4yNzc1IDQxLjc2MzMgNTcuNDM3NSA0Mi4wMjMzQzU3LjU5NzUgNDIuMjgxMyA1Ny43NjIxIDQyLjQ1NDYgNTcuMjQ2MSA0Mi42MzY2QzU2Ljc0MDEgNDIuODI4NiA0MC4wMjg5IDQ4LjU5MDIgMzkuNzEwOSA0OC43MzQyQzM5LjM4MjkgNDguODc4MiAzOS4xMjY4IDQ4LjkyNDcgMzguNzE0OCA0OC4zMDA3QzM4LjMwMjggNDcuNjc2NyAzMi44NjcyIDM4LjA2MjQgMzIuODY3MiAzOC4wNjI0TDUwLjU2MjUgMzMuMzU1M0M1MC43ODI1IDMzLjI4MzMgNTAuOTI5MiAzMy4yMiA1MS4wNTQ3IDMzLjIzNDJaXCIgZmlsbD17ZmlsbCB8fCBcIiNGNkMzNThcIn0gLz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IE15U1FMID0gKHsgZmlsbCwgc2l6ZSB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUgfX0+XG4gICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxuICAgICAgPHBhdGggZD1cIk0zOS44OTUgMTAuMjM5OUMzOS4yOTUgMTAuMjI0OSAzOC43NyAxMC40NTQ5IDM4LjUgMTEuMTE5OUMzOC4wNCAxMi4yMzQ5IDM5LjE4NSAxMy4zMjQ5IDM5LjU5NSAxMy44OTQ5QzM5Ljg4IDE0LjI4OTkgNDAuMjUgMTQuNzM0OSA0MC40NTUgMTUuMTc5OUM0MC41OSAxNS40NzQ5IDQwLjYxIDE1Ljc2OTkgNDAuNzI1IDE2LjA3OTlDNDEuMDEgMTYuODQ0OSA0MS40NjUgMTcuNzE0OSA0MS44MyAxOC40MjQ5QzQyLjAxNSAxOC43ODQ5IDQyLjIyIDE5LjE1OTkgNDIuNDU1IDE5LjQ3OTlDNDIuNiAxOS42NzQ5IDQyLjg0NSAxOS43NjQ5IDQyLjg4NSAyMC4wNjQ5QzQyLjY0NSAyMC40MDQ5IDQyLjYzIDIwLjkyOTkgNDIuNDk1IDIxLjM1OTlDNDEuODg1IDIzLjI4NDkgNDIuMTE1IDI1LjY3OTkgNDMgMjcuMDk5OUM0My4yNzUgMjcuNTM5OSA0My45MiAyOC40NzQ5IDQ0LjggMjguMTE5OUM0NS41NyAyNy44MDQ5IDQ1LjQgMjYuODI5OSA0NS42MiAyNS45NjQ5QzQ1LjY3IDI1Ljc3NDkgNDUuNjQgMjUuNjI5OSA0NS43NCAyNS40OTk5VjI1LjUzOTlDNDUuOTcgMjYuMDA5OSA0Ni4yMDUgMjYuNDc5OSA0Ni40NCAyNi45NDQ5QzQ2Ljk2NSAyNy43ODQ5IDQ3Ljg5IDI4LjY1OTkgNDguNjcgMjkuMjU0OUM0OS4wNzUgMjkuNTU5OSA0OS4zOTUgMzAuMDg5OSA0OS45MiAzMC4yNjk5VjMwLjIyOTlINDkuODhDNDkuNzggMzAuMDY5OSA0OS42MiAzMC4wMDQ5IDQ5LjQ5IDI5Ljg3OTlDNDkuMTg1IDI5LjU3OTkgNDguODQ1IDI5LjIwNDkgNDguNTk1IDI4Ljg1OTlDNDcuODggMjcuODk0OSA0Ny4yNSAyNi44MzQ5IDQ2LjY4IDI1LjczNDlDNDYuNDA1IDI1LjIwOTkgNDYuMTY1IDI0LjYyOTkgNDUuOTM1IDI0LjA5NDlDNDUuODQ1IDIzLjg4NDkgNDUuODQ1IDIzLjU3NDkgNDUuNjYgMjMuNDY0OUM0NS40MDUgMjMuODU5OSA0NS4wMzUgMjQuMTc0OSA0NC44NCAyNC42Mzk5QzQ0LjUzIDI1LjM3OTkgNDQuNDg1IDI2LjI4NDkgNDQuMzcgMjcuMjE5OUM0NC4zIDI3LjI0NDkgNDQuMzMgMjcuMjI0OSA0NC4yOTUgMjcuMjU5OUM0My43NSAyNy4xMjQ5IDQzLjU1NSAyNi41NjQ5IDQzLjM1NSAyNi4wODQ5QzQyLjg0NSAyNC44Njk5IDQyLjc0NSAyMi45MDk5IDQzLjIgMjEuNTE0OUM0My4zMTUgMjEuMTQ5OSA0My44NCAyMC4wMDk5IDQzLjYzIDE5LjY3NDlDNDMuNTMgMTkuMzM5OSA0My4xOSAxOS4xNDk5IDQzLjAwNSAxOC44OTQ5QzQyLjc3IDE4LjU3OTkgNDIuNTQgMTguMTY0OSA0Mi4zOCAxNy43OTk5QzQxLjk2IDE2Ljg0OTkgNDEuNTY1IDE1Ljc0OTkgNDEuMTIgMTQuNzg5OUM0MC45MSAxNC4zMjk5IDQwLjU1NSAxMy44Njk5IDQwLjI2IDEzLjQ1OTlDMzkuOTM1IDEzLjAwOTkgMzkuNTc1IDEyLjY3OTkgMzkuMzIgMTIuMTI5OUMzOS4yMzUgMTEuOTM5OSAzOS4xMSAxMS42Mjk5IDM5LjI0NSAxMS40Mjk5QzM5LjI4NSAxMS4yOTQ5IDM5LjM0NSAxMS4yMzk5IDM5LjQ4IDExLjE5NDlDMzkuNzA1IDExLjAxOTkgNDAuMzM1IDExLjI0OTkgNDAuNTc1IDExLjM0OTlDNDEuMiAxMS42MDk5IDQxLjcyNSAxMS44NTk5IDQyLjI1NSAxMi4yMDk5QzQyLjUxIDEyLjM3OTkgNDIuNzY1IDEyLjcwNDkgNDMuMDc1IDEyLjc5OTlINDMuNDI1QzQzLjk4IDEyLjkyNDkgNDQuNTk1IDEyLjgzNDkgNDUuMTA1IDEyLjk5NDlDNDYuMDE1IDEzLjI2OTkgNDYuODMgMTMuNjk5OSA0Ny41NjUgMTQuMTY0OUM0OS44MiAxNS41ODQ5IDUxLjY2NSAxNy42MDk5IDUyLjkyIDIwLjAyNDlDNTMuMTI1IDIwLjQxNDkgNTMuMjE1IDIwLjc4OTkgNTMuMzk1IDIxLjE5OTlDNTMuNzUgMjIuMDI5OSA1NC4yMDUgMjIuODg5OSA1NC41NjUgMjMuNjk5OUM1NC45MiAyNC41MTQ5IDU1LjI3IDI1LjMyOTkgNTUuNzc1IDI2LjAwNDlDNTYuMDQgMjYuMzU5OSA1Ny4wNyAyNi41NTQ5IDU3LjUzNSAyNi43NDk5QzU3Ljg2IDI2Ljg4OTkgNTguNCAyNy4wMzQ5IDU4LjcwNSAyNy4yMTk5QzU5LjMgMjcuNTc0OSA1OS44NyAyNy45OTk5IDYwLjQyNSAyOC4zOTQ5QzYwLjcwNSAyOC41ODk5IDYxLjU1NSAyOS4wMTQ5IDYxLjYgMjkuMzY5OUM2MC4yMjUgMjkuMzM0OSA1OS4xNzUgMjkuNDU5OSA1OC4yOCAyOS44Mzk5QzU4LjAyNSAyOS45NDk5IDU3LjYxNSAyOS45NDk5IDU3LjU3NSAzMC4yNjk5QzU3LjcxIDMwLjQxNDkgNTcuNzM1IDMwLjYzNDkgNTcuODQ1IDMwLjgxNDlDNTguMDYgMzEuMTU5OSA1OC40MiAzMS42MjQ5IDU4Ljc0NSAzMS44Njk5QzU5LjEgMzIuMTM0OSA1OS40NiAzMi40MTk5IDU5Ljg0IDMyLjY1NDlDNjAuNTEgMzMuMDU5OSA2MS4yNiAzMy4yOTQ5IDYxLjkxIDMzLjcwNDlDNjIuMjkgMzMuOTQ5OSA2Mi42NzUgMzQuMjU0OSA2My4wNDUgMzQuNTI0OUM2My4yMyAzNC42NjQ5IDYzLjM1IDM0Ljg3NDkgNjMuNTkgMzQuOTU5OVYzNC45MTk5QzYzLjQ2NSAzNC43NTk5IDYzLjQzNSAzNC41Mzk5IDYzLjMyIDM0LjM3NDlMNjIuODA1IDMzLjg1OTlDNjIuMzEgMzMuMjA0OSA2MS42OCAzMi42MjQ5IDYxLjAxIDMyLjE0NDlDNjAuNDc1IDMxLjc1OTkgNTkuMjggMzEuMjM5OSA1OS4wNiAzMC42MTk5TDU5LjAyIDMwLjU3OTlDNTkuMzk1IDMwLjUzOTkgNTkuODQgMzAuMzk5OSA2MC4xOSAzMC4zMDQ5QzYwLjc4IDMwLjE0OTkgNjEuMyAzMC4xODk5IDYxLjkwNSAzMC4wMzQ5QzYyLjE4IDI5Ljk1NDkgNjIuNDU1IDI5Ljg3NDkgNjIuNzMgMjkuNzk5OVYyOS42Mzk5QzYyLjQyNSAyOS4zMjk5IDYyLjIwNSAyOC45MDk5IDYxLjg3IDI4LjYyNDlDNjAuOTk1IDI3Ljg3OTkgNjAuMDQgMjcuMTM0OSA1OS4wNTUgMjYuNTE0OUM1OC41MSAyNi4xNjk5IDU3LjgzNSAyNS45NDQ5IDU3LjI2IDI1LjY1NDlDNTcuMDY1IDI1LjU1NDkgNTYuNzI1IDI1LjUwNDkgNTYuNTk1IDI1LjMzOTlDNTYuMjkgMjQuOTU0OSA1Ni4xMjUgMjQuNDY0OSA1NS44OSAyNC4wMTQ5QzU1LjQgMjMuMDY5OSA1NC45MiAyMi4wMzk5IDU0LjQ4NSAyMS4wNDQ5QzU0LjE5IDIwLjM2OTkgNTMuOTk1IDE5LjY5OTkgNTMuNjI1IDE5LjA4OTlDNTEuODUgMTYuMTc0OSA0OS45NCAxNC40MDk5IDQ2Ljk4IDEyLjY3OTlDNDYuMzUgMTIuMzA5OSA0NS41OTUgMTIuMTY5OSA0NC43OTUgMTEuOTc5OUM0NC4zNiAxMS45NDk5IDQzLjkzNSAxMS45MjQ5IDQzLjUgMTEuODk5OUM0My4yNCAxMS43ODk5IDQyLjk2NSAxMS40Njk5IDQyLjcyIDExLjMwOTlDNDIuMTA1IDEwLjkyNDkgNDAuODk1IDEwLjI1NDkgMzkuODk1IDEwLjIzOTlaTTQ0LjEzIDE0LjQ3OTlDNDMuODQ1IDE0LjQ3NDkgNDMuNjQgMTQuNTE0OSA0My40MjUgMTQuNTU5OVYxNC41OTk5SDQzLjQ2NUM0My42IDE0Ljg3OTkgNDMuODQ1IDE1LjA1OTkgNDQuMDE1IDE1LjI5OTlDNDQuMTQ1IDE1LjU3NDkgNDQuMjcgMTUuODQ5OSA0NC40IDE2LjEyNDlMNDQuNDQgMTYuMDg0OUM0NC42OCAxNS45MTQ5IDQ0Ljc5NSAxNS42Mzk5IDQ0Ljc5NSAxNS4yMjQ5QzQ0LjY5NSAxNS4xMjQ5IDQ0LjY4IDE0Ljk5NDkgNDQuNiAxNC44NzQ5QzQ0LjQ4NSAxNC43MDk5IDQ0LjI3IDE0LjYxOTkgNDQuMTMgMTQuNDc5OVpNMi4zOSAzMC43MTQ5QzIuMDA1IDMwLjcyOTkgMS41ODUgMzAuODA0OSAxLjEzIDMwLjk0OTlDMC4zNyAzMS4xNzk5IC0wLjAwNTAwMTA3IDMxLjYzNDkgLTAuMDA1MDAxMDcgMzIuNTU5OVY0Mi4yMzk5SDIuNTZWMzIuNzk0OUw2LjExNSA0MC44Njk5QzYuNTU1IDQxLjg3NDkgNy4xNTUgNDIuMjM0OSA4LjMzIDQyLjIzNDlDOS41MSA0Mi4yMzQ5IDEwLjA4NSA0MS44NzQ5IDEwLjUyNSA0MC44Njk5TDE0LjA4IDMyLjk5OTlWNDIuMjM5OUgxNi42NFYzMi41NTk5QzE2LjY0IDMxLjYzNDkgMTYuMjcgMzEuMTc5OSAxNS41MDUgMzAuOTQ5OUMxMy42ODUgMzAuMzc0OSAxMi40NiAzMC44Njk5IDExLjkxIDMyLjExNDlMOC4yNiA0MC4zMjQ5TDQuNzMgMzIuMTE0OUM0LjMzIDMxLjE3OTkgMy41MyAzMC42Njk5IDIuMzkgMzAuNzE0OVpNMzMuNTk1IDMwLjcxOTlDMzIuNTg1IDMwLjcxOTkgMjkuNDQgMzAuODM5OSAyOS40NCAzMy4yNzk5VjM0Ljg1OTlDMjkuNDQgMzUuOTc5OSAzMC40MjUgMzYuODk0OSAzMi41NiAzNy4xMTk5QzMyLjggMzcuMTM0OSAzMy4wNCAzNy4xNTQ5IDMzLjI4IDM3LjE1NDlDMzMuMjggMzcuMTU0OSAzNS43NyAzNy4xMDQ5IDM1Ljg0IDM3LjExOTlDMzcuMjggMzcuMTE5OSAzNy4xMiAzOC4yMzk5IDM3LjEyIDM4LjM5OTlWMzkuNjc5OUMzNy4xMiAzOS44NTQ5IDM3LjA4IDQwLjk1OTkgMzUuODI1IDQwLjk1OTlIMjkuNDRWNDIuMjM5OUgzNS44NUMzNi42OSA0Mi4yMzk5IDM3LjUwNSA0Mi4wNjQ5IDM4LjE1NSA0MS43NTk5QzM5LjIzNSA0MS4yNjQ5IDM5LjY4IDQwLjU5NDkgMzkuNjggMzkuNzE0OVYzNy44ODQ5QzM5LjY4IDM1LjkxOTkgMzcuMjQgMzUuODM5OSAzNS44NCAzNS44Mzk5SDMzLjI4QzMyLjI3NSAzNS44Mzk5IDMyLjEyIDM1LjIyOTkgMzIgMzQuNTU5OVYzMy4yNzk5QzMyLjEyIDMyLjc2OTkgMzIuMzQ1IDMyLjA3OTkgMzMuMjM1IDMxLjk5OTlIMzkuNjhWMzAuNzE5OUgzMy41OTVaTTQzLjQ5NSAzMC43MTk5QzQxLjYwNSAzMC45Nzk5IDQwLjk0IDMxLjkxOTkgNDAuOTQgMzMuMjc5OVYzOS42Nzk5QzQwLjk0IDQwLjkyNDkgNDEuNjM1IDQxLjY3NDkgNDMuMDY1IDQyLjA2NDlDNDMuNTQ1IDQyLjE5OTkgNDMuOTggNDIuMjU0OSA0NC4zOSA0Mi4yNTQ5TDQ3LjI0IDQyLjIzOTlINDguOTE1TDUwLjM0IDQzLjUxOTlINTMuMjJMNTEuMjQgNDEuNzM0OUM1Mi4xNyA0MS4zNDk5IDUyLjQ2IDQwLjc1OTkgNTIuNDYgMzkuNjU0OVYzMy4yNzk5QzUyLjQ2IDMxLjkxOTkgNTEuNTc1IDMwLjk3OTkgNDkuNjg1IDMwLjcxOTlINDMuNDk1Wk01My43NiAzMC43MTk5VjM5LjYyNDlDNTMuNzYgNDEuMTY5OSA1NC42MzUgNDIuMDM5OSA1Ni45NSA0Mi4yMTQ5QzU3LjE2NSA0Mi4yMjQ5IDU3LjM4NSA0Mi4yMzk5IDU3LjYgNDIuMjM5OUg2NFY0MC45NTk5SDU4LjA4NUM1Ni43NjUgNDAuOTU5OSA1Ni4zMiA0MC40MDQ5IDU2LjMyIDM5LjYxNDlWMzAuNzE5OUg1My43NlpNNDUuMDIgMzEuOTk5OUg0OC4zMTVDNDkuMTg1IDMxLjk5OTkgNDkuNzcgMzIuNjk5OSA0OS45IDMzLjI3OTlDNDkuOSAzMy4yNzk5IDQ5LjkyIDM5LjIzOTkgNDkuOTIgMzkuNjc5OUM0OS45MiA0MC4xMTk5IDQ5LjY3NSA0MC4zMTk5IDQ5LjY3NSA0MC4zMTk5TDQ4Ljk4IDM5LjY3OTlINDYuMDhMNDcuNTA1IDQwLjk1OTlINDUuMDJDNDQuMTMgNDAuOTU5OSA0My42MyA0MC4yOTk5IDQzLjUgMzkuNjc5OVYzMy40MDk5QzQzLjUgMzIuNzI5OSA0NC4wMiAzMS45OTk5IDQ1LjAyIDMxLjk5OTlaTTE3LjkyIDM0LjU1OTlDMTcuOTcgMzQuNjA5OSAxNy45MiA0MC4wMTQ5IDE3LjkyIDQwLjExOTlDMTcuOTQgNDEuMjM5OSAxOS4zNiA0Mi4yMTk5IDIxLjU4NSA0Mi4yMzk5SDI1LjZWNDIuMzI0OUMyNS42IDQyLjU2NDkgMjUuNzc1IDQzLjM2NDkgMjQuMzIgNDMuNTE5OUMyNC4zMDUgNDMuNTE5OSAxNy45MzUgNDMuNTE5OSAxNy45MiA0My41MTk5VjQ0Ljc5OTlIMjQuNTk1QzI1LjcyNSA0NC43NjQ5IDI4LjE3NSA0NC41MDk5IDI4LjE2IDQyLjU0OTlDMjguMTYgNDIuNTE0OSAyOC4xNyAzNC41NTk5IDI4LjE2IDM0LjU1OTlIMjUuNlY0MC45NTk5QzI1LjU2IDQwLjk1OTkgMjIuNDMgNDAuOTY5OSAyMS44IDQwLjk1OTlDMjAuNTY1IDQwLjkzOTkgMjAuNDYgNDAuMjM0OSAyMC40OCAzOS45NjQ5VjM0LjU1OTlIMTcuOTJaXCIgZmlsbD17ZmlsbCB8fCBcIiNGNkMzNThcIn0gLz5cbiAgICA8L2c+XG4gICAgPGRlZnM+XG4gICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiBmaWxsPXtcIndoaXRlXCJ9IC8+XG4gICAgICA8L2NsaXBQYXRoPlxuICAgIDwvZGVmcz5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IE5leHRKUyA9ICh7IGZpbGwsIHNpemUgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiMTA3XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDEwNyA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUgfX0+XG4gICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxuICAgICAgPHBhdGggZD1cIk0yNS4xMTkzIDE2LjY4NThINDUuMTIwNFYxOC4yNzU2SDI2Ljk1MjdWMzAuMjQwM0g0NC4wMzcyVjMxLjgzSDI2Ljk1MjdWNDQuOTY2MUg0NS4zMjg4VjQ2LjU1NThIMjUuMTE5M1YxNi42ODU4Wk00Ni45MTI0IDE2LjY4NThINDkuMDM3NUw1OC40NTQ2IDI5LjgyMTlMNjguMDgwMSAxNi42ODU2TDgxLjE3MjMgMEw1OS42NjI5IDMxLjIwMjZMNzAuNzQ3IDQ2LjU1NThINjguNTM4NEw1OC40NTQ2IDMyLjU4M0w0OC4zMjg5IDQ2LjU1NThINDYuMTYyM0w1Ny4zMjk1IDMxLjIwMjRMNDYuOTEyMiAxNi42ODU4SDQ2LjkxMjRaTTcxLjUzODYgMTguMjc1NlYxNi42ODU2SDk0LjMzMTdWMTguMjc1NEg4My44MzA5VjQ2LjU1NTVIODEuOTk3NVYxOC4yNzU2SDcxLjUzODZWMTguMjc1NlpNMC4wOTcxNzE4IDE2LjY4NTZIMi4zODg5NUwzMy45OTEzIDYzLjk3NThMMjAuOTMxOCA0Ni41NTU1TDIuMDEzODYgMTguOTQ0OEwxLjkzMDYgNDYuNTU2SDAuMDk3MTcxOFYxNi42ODU2Wk05NC4xNDY5IDQ0LjQ4NkM5My43NzIzIDQ0LjQ4NiA5My40OTE0IDQ0LjE5NiA5My40OTE0IDQzLjgyMDdDOTMuNDkxNCA0My40NDU5IDkzLjc3MjMgNDMuMTU1NSA5NC4xNDY5IDQzLjE1NTVDOTQuNTI2IDQzLjE1NTUgOTQuODAyNSA0My40NDU2IDk0LjgwMjUgNDMuODIwN0M5NC44MDI1IDQ0LjE5NTggOTQuNTI2IDQ0LjQ4NiA5NC4xNDY5IDQ0LjQ4NlpNOTUuOTQ4NSA0Mi43MzU4SDk2LjkyOTZDOTYuOTQyOCA0My4yNjcxIDk3LjMzMDggNDMuNjI0NCA5Ny45MDE2IDQzLjYyNDRDOTguNTM5MyA0My42MjQ0IDk4LjkwMDUgNDMuMjQwNCA5OC45MDA1IDQyLjUyMTVWMzcuOTY2OUg5OS44OTk1VjQyLjUyNThDOTkuODk5NSA0My44MjA3IDk5LjE1MDMgNDQuNTY2NiA5Ny45MTA1IDQ0LjU2NjZDOTYuNzQ2NSA0NC41NjY2IDk1Ljk0ODUgNDMuODQzMSA5NS45NDg1IDQyLjczNTZWNDIuNzM1OFpNMTAxLjIwNiA0Mi42Nzc5SDEwMi4xOTZDMTAyLjI4MSA0My4yODk1IDEwMi44NzggNDMuNjc3OCAxMDMuNzM5IDQzLjY3NzhDMTA0LjU0MiA0My42Nzc4IDEwNS4xMyA0My4yNjI2IDEwNS4xMyA0Mi42OTExQzEwNS4xMyA0Mi4yIDEwNC43NTYgNDEuOTA1MyAxMDMuOTA0IDQxLjcwNDRMMTAzLjA3NCA0MS41MDM1QzEwMS45MSA0MS4yMzA5IDEwMS4zOCA0MC42Njg0IDEwMS4zOCAzOS43MjE4QzEwMS4zOCAzOC41NzQ0IDEwMi4zMTYgMzcuODEwNyAxMDMuNzIxIDM3LjgxMDdDMTA1LjAyOCAzNy44MTA3IDEwNS45ODIgMzguNTc0MiAxMDYuMDQgMzkuNjU5M0gxMDUuMDY4QzEwNC45NzQgMzkuMDY1NSAxMDQuNDU3IDM4LjY5NDcgMTAzLjcwOCAzOC42OTQ3QzEwMi45MTggMzguNjk0NyAxMDIuMzkyIDM5LjA3NDQgMTAyLjM5MiAzOS42NTQ3QzEwMi4zOTIgNDAuMTE0NSAxMDIuNzMxIDQwLjM3ODIgMTAzLjU2OSA0MC41NzQ2TDEwNC4yNzggNDAuNzQ4N0MxMDUuNTk4IDQxLjA1NjkgMTA2LjE0MiA0MS41OTI4IDEwNi4xNDIgNDIuNTYxN0MxMDYuMTQyIDQzLjc5NCAxMDUuMTg4IDQ0LjU2NjYgMTAzLjY2MyA0NC41NjY2QzEwMi4yMzYgNDQuNTY2NiAxMDEuMjc3IDQzLjgyOTYgMTAxLjIwNiA0Mi42Nzc2VjQyLjY3NzlaXCIgZmlsbD17ZmlsbCB8fCBcIiNGNkMzNThcIn0gLz5cbiAgICA8L2c+XG4gICAgPGRlZnM+XG4gICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEwNi4yNFwiIGhlaWdodD1cIjY0XCIgZmlsbD17XCJ3aGl0ZVwifSAvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICA8L2RlZnM+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBOb2RlSlMgPSAoeyBmaWxsLCBzaXplIH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSB9fT5cbiAgICA8cGF0aCBkPVwiTTIyLjkzODcgMjUuNDk1OUwxNi4zOTYgMjkuMTE1OUMxNi4xNTA3IDI5LjI1MDUgMTYgMjkuNTAxMiAxNiAyOS43NzE5VjM3LjAxNTlDMTYgMzcuMjg2NSAxNi4xNTA3IDM3LjUzNTkgMTYuMzk2IDM3LjY3MTlMMjIuOTQgNDEuMjk0NUMyMy4xODQgNDEuNDI5MiAyMy40ODY3IDQxLjQyOTIgMjMuNzMwNyA0MS4yOTQ1TDMwLjI3MzMgMzcuNjcxOUMzMC41MTYgMzcuNTM1OSAzMC42NjY3IDM3LjI4NjUgMzAuNjY2NyAzNy4wMTU5VjI5Ljc3MTlDMzAuNjY2NyAyOS41MDEyIDMwLjUxNiAyOS4yNTE5IDMwLjI3MDcgMjkuMTE1OUwyMy43MjkzIDI1LjQ5NTlDMjMuNjA2NyAyNS40Mjc5IDIzLjQ2OTMgMjUuMzk0NSAyMy4zMzMzIDI1LjM5NDVDMjMuMTk2IDI1LjM5NDUgMjMuMDYgMjUuNDI3OSAyMi45MzczIDI1LjQ5NTlIMjIuOTM4N1pNNTYuNjAxMyAzMi4wMTcyTDU1LjUxMDcgMzIuNjE5OUM1NS40NjkzIDMyLjY0MjUgNTUuNDQ1MyAzMi42ODM5IDU1LjQ0NTMgMzIuNzI5MlYzMy45MzcyQzU1LjQ0NTMgMzMuOTgyNSA1NS40NzA3IDM0LjAyMzkgNTUuNTEwNyAzNC4wNDY1TDU2LjYwMTMgMzQuNjUwNUM1Ni42NDI3IDM0LjY3MzIgNTYuNjkyIDM0LjY3MzIgNTYuNzMzMyAzNC42NTA1TDU3LjgyNCAzNC4wNDY1QzU3Ljg2NCAzNC4wMjM5IDU3Ljg4OTMgMzMuOTgyNSA1Ny44ODkzIDMzLjkzNzJWMzIuNzI5MkM1Ny44ODkzIDMyLjY4MzkgNTcuODY0IDMyLjY0MjUgNTcuODIyNyAzMi42MTk5TDU2LjczMiAzMi4wMTcyQzU2LjcxMiAzMi4wMDUyIDU2LjY4OTMgMzEuOTk5OSA1Ni42NjY3IDMxLjk5OTlDNTYuNjQ0IDMxLjk5OTkgNTYuNjIxMyAzMi4wMDUyIDU2LjYwMTMgMzIuMDE3MlpcIiBmaWxsPVwiIzM4OEUzQ1wiIC8+XG4gICAgPHBhdGggZD1cIk00Ny42NjggMTcuODE4Nkw0NC40ODI3IDE2LjA0MTNDNDQuMzgyNyAxNS45ODUzIDQ0LjI2IDE1Ljk4NjYgNDQuMTYxMyAxNi4wNDUzQzQ0LjA2MjcgMTYuMTAzOSA0NC4wMDEzIDE2LjIwOTMgNDQuMDAxMyAxNi4zMjM5TDQ0IDI3LjA1OTlMNDEuMDYyNyAyNS40MzQ2QzQwLjk0IDI1LjM2NjYgNDAuODAyNyAyNS4zMzMzIDQwLjY2NjcgMjUuMzMzM0M0MC41MzA3IDI1LjMzMzMgNDAuMzkzMyAyNS4zNjY2IDQwLjI3MDcgMjUuNDM0Nkg0MC4yNzJMMzMuNzI5MyAyOS4wNTQ2QzMzLjQ4NCAyOS4xODkzIDMzLjMzMzMgMjkuNDM5OSAzMy4zMzMzIDI5LjcwOTNWMzYuOTUzM0MzMy4zMzMzIDM3LjIyMzkgMzMuNDg0IDM3LjQ3MzMgMzMuNzI5MyAzNy42MDkzTDQwLjI3MzMgNDEuMjMxOUM0MC41MTczIDQxLjM2NjYgNDAuODIgNDEuMzY2NiA0MS4wNjQgNDEuMjMxOUw0Ny42MDY3IDM3LjYwOTNDNDcuODQ5MyAzNy40NzQ2IDQ4IDM3LjIyMzkgNDggMzYuOTUzM1YxOC4zODM5QzQ4IDE4LjE0OTMgNDcuODcyIDE3LjkzMzMgNDcuNjY4IDE3LjgxODZaTTQzLjgyMTMgMzUuMjc3M0w0MC44NDggMzYuOTIzOUM0MC43MzczIDM2Ljk4NTMgNDAuNiAzNi45ODUzIDQwLjQ4OTMgMzYuOTIzOUwzNy41MTQ3IDM1LjI3NzNDMzcuNDAxMyAzNS4yMTU5IDM3LjMzMzMgMzUuMTAxMyAzNy4zMzMzIDM0Ljk3ODZWMzEuNjg1M0MzNy4zMzMzIDMxLjU2MjYgMzcuNDAxMyAzMS40NDkzIDM3LjUxMzMgMzEuMzg2Nkw0MC40ODggMjkuNzQxM0g0MC40ODY3QzQwLjU0MjcgMjkuNzEwNiA0MC42MDQgMjkuNjk1OSA0MC42NjY3IDI5LjY5NTlDNDAuNzI5MyAyOS42OTU5IDQwLjc5MDcgMjkuNzExOSA0MC44NDY3IDI5Ljc0MTNMNDMuODIgMzEuMzg2NkM0My45MzIgMzEuNDQ5MyA0NCAzMS41NjM5IDQ0IDMxLjY4NjZWMzQuOTc5OUM0NCAzNS4xMDEzIDQzLjkzMiAzNS4yMTU5IDQzLjgyMTMgMzUuMjc3M1pcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICAgIDxwYXRoIGQ9XCJNMjIuOTM4NyAyNS40OTU5TDE2IDM3LjAxNTlDMTYgMzcuMjg2NSAxNi4xNTA3IDM3LjUzNTkgMTYuMzk2IDM3LjY3MTlMMjIuOTQgNDEuMjk0NUMyMy4xODQgNDEuNDI5MiAyMy40ODY3IDQxLjQyOTIgMjMuNzMwNyA0MS4yOTQ1TDMwLjY2NjcgMjkuNzcxOUMzMC42NjY3IDI5LjUwMTIgMzAuNTE2IDI5LjI1MTkgMzAuMjcwNyAyOS4xMTU5TDIzLjcyOTMgMjUuNDk1OUMyMy42MDY3IDI1LjQyNzkgMjMuNDY5MyAyNS4zOTQ1IDIzLjMzMzMgMjUuMzk0NUMyMy4xOTYgMjUuMzk0NSAyMy4wNiAyNS40Mjc5IDIyLjkzNzMgMjUuNDk1OVwiIGZpbGw9XCIjMkU3RDMyXCIgLz5cbiAgICA8cGF0aCBkPVwiTTIyLjkzODcgMjUuNDk1OUwxNi4zOTYgMjkuMTE1OUMxNi4xNTA3IDI5LjI1MDUgMTYgMjkuNTAxMiAxNiAyOS43NzE5TDIyLjkzODcgNDEuMjk0NUMyMy4xODI3IDQxLjQyOTIgMjMuNDg1MyA0MS40MjkyIDIzLjcyOTMgNDEuMjk0NUwzMC4yNzIgMzcuNjcxOUMzMC41MTYgMzcuNTM1OSAzMC42NjY3IDM3LjI4NjUgMzAuNjY2NyAzNy4wMTU5TDIzLjcyOTMgMjUuNDk1OUMyMy42MDY3IDI1LjQyNzkgMjMuNDY5MyAyNS4zOTQ1IDIzLjMzMzMgMjUuMzk0NUMyMy4xOTYgMjUuMzk0NSAyMy4wNiAyNS40Mjc5IDIyLjkzNzMgMjUuNDk1OVwiIGZpbGw9XCIjNENBRjUwXCIgLz5cbiAgICA8cGF0aCBkPVwiTTYzLjYwNCAyOS4wNTQ2TDU3LjA2MjcgMjUuNDM0NkM1Ni45NCAyNS4zNjY2IDU2LjgwMjcgMjUuMzMzMyA1Ni42NjY3IDI1LjMzMzNDNTYuNTMwNyAyNS4zMzMzIDU2LjM5MzMgMjUuMzY2NiA1Ni4yNzA3IDI1LjQzNDZINTYuMjcyTDQ5LjcyOTMgMjkuMDU0NkM0OS40ODUzIDI5LjE4OTMgNDkuMzMzMyAyOS40NDUzIDQ5LjMzMzMgMjkuNzI1M1YzNi45Mzk5QzQ5LjMzMzMgMzcuMjE4NiA0OS40ODUzIDM3LjQ3NTkgNDkuNzI5MyAzNy42MTA2TDU2LjI3MzMgNDEuMjMzMkM1Ni41MTg3IDQxLjM2OTIgNTYuODE4NyA0MS4zNjkyIDU3LjA2NCA0MS4yMzMyTDYwLjA4MTMgMzkuNTYyNkM2MC4zNTczIDM5LjQwOTMgNjAuMzU2IDM5LjAxMzIgNjAuMDc4NyAzOC44NjEyTDUzLjUxMzMgMzUuMjc4NkM1My40MDI3IDM1LjIxNTkgNTMuMzMzMyAzNS4wOTk5IDUzLjMzMzMgMzQuOTc0NlYzMS42ODY2QzUzLjMzMzMgMzEuNTYzOSA1My40IDMxLjQ1MDYgNTMuNTA2NyAzMS4zOTE5TDU2LjQ4NjcgMjkuNzQzOUg1Ni40ODUzQzU2LjU0MTMgMjkuNzEzMyA1Ni42MDI3IDI5LjY5ODYgNTYuNjY1MyAyOS42OTg2QzU2LjcyOCAyOS42OTg2IDU2Ljc4OTMgMjkuNzE0NiA1Ni44NDUzIDI5Ljc0MzlMNTkuODI1MyAzMS4zOTMzQzU5LjkzMiAzMS40NTE5IDU5Ljk5ODcgMzEuNTY1MyA1OS45OTg3IDMxLjY4NzlWMzQuMzcwNkM1OS45OTg3IDM0LjQ4NTMgNjAuMDYgMzQuNTkxOSA2MC4xNiAzNC42NDkyQzYwLjI2IDM0LjcwNTIgNjAuMzgyNyAzNC43MDUzIDYwLjQ4MjcgMzQuNjQ3OUw2My42OCAzMi43OTA2QzYzLjg3NzMgMzIuNjc1OSA2NCAzMi40NjM5IDY0IDMyLjIzNDZWMjkuNzI3OUM2NCAyOS40NDY2IDYzLjg0OCAyOS4xODkzIDYzLjYwNCAyOS4wNTQ2Wk0xNC4yNzA3IDI5LjA1NDZMNy43MjkzMyAyNS40MzQ2QzcuNjA2NjcgMjUuMzY2NiA3LjQ2OTMzIDI1LjMzMzMgNy4zMzMzMyAyNS4zMzMzQzcuMTk3MzMgMjUuMzMzMyA3LjA2IDI1LjM2NjYgNi45MzczMyAyNS40MzQ2SDYuOTM4NjdMMC4zOTYgMjkuMDU0NkMwLjE1MiAyOS4xODkzIDAgMjkuNDQ1MyAwIDI5LjcyNTNWMzkuNjc4NkMwIDM5Ljc5MzMgMC4wNjEzMzMzIDM5Ljg5OTkgMC4xNjEzMzMgMzkuOTU3M0MwLjI2MTMzMyA0MC4wMTMzIDAuMzg0IDQwLjAxMzIgMC40ODQgMzkuOTU1OUwzLjY4MTMzIDM4LjA5ODZDMy44Nzg2NyAzNy45ODM5IDQgMzcuNzcxOSA0IDM3LjU0MjZWMzEuNjg1M0M0IDMxLjU2MjYgNC4wNjY2NyAzMS40NDkzIDQuMTczMzMgMzEuMzkwNkw3LjE1MzMzIDI5Ljc0MjZDNy4yMDkzMyAyOS43MTE5IDcuMjcwNjcgMjkuNjk3MyA3LjMzMzMzIDI5LjY5NzNDNy4zOTYgMjkuNjk3MyA3LjQ1NzMzIDI5LjcxMzMgNy41MTMzMyAyOS43NDI2TDEwLjQ5MzMgMzEuMzkxOUMxMC42IDMxLjQ1MDYgMTAuNjY2NyAzMS41NjM5IDEwLjY2NjcgMzEuNjg2NlYzNy41NDM5QzEwLjY2NjcgMzcuNzczMyAxMC43ODggMzcuOTg1MyAxMC45ODY3IDM4LjA5OTlMMTQuMTg0IDM5Ljk1NzNDMTQuMjg0IDQwLjAxNDYgMTQuNDA2NyA0MC4wMTQ2IDE0LjUwNjcgMzkuOTU4NkMxNC42MDUzIDM5Ljg5OTkgMTQuNjY2NyAzOS43OTMzIDE0LjY2NjcgMzkuNjc4NlYyOS43MjY2QzE0LjY2NjcgMjkuNDQ2NiAxNC41MTQ3IDI5LjE4OTMgMTQuMjcwNyAyOS4wNTQ2WlwiIGZpbGw9e2ZpbGwgfHwgXCIjRjZDMzU4XCJ9IC8+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBQaG90b1Nob3AgPSAoeyBmaWxsLCBmaWxsU2Vjb25kYXJ5LCBzaXplIH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSB9fT5cbiAgICA8cGF0aCBkPVwiTTQ4IDhIMTZDMTEuNTgxMyA4IDggMTEuNTgxMyA4IDE2VjQ4QzggNTIuNDE4NyAxMS41ODEzIDU2IDE2IDU2SDQ4QzUyLjQxODcgNTYgNTYgNTIuNDE4NyA1NiA0OFYxNkM1NiAxMS41ODEzIDUyLjQxODcgOCA0OCA4WlwiIGZpbGw9e2ZpbGxTZWNvbmRhcnkgfHwgXCJ3aGl0ZVwifSAvPlxuICAgIDxwYXRoIGQ9XCJNNDggNTMuMzMzNEgxNkMxMy4wNTQ3IDUzLjMzMzQgMTAuNjY2NyA1MC45NDU0IDEwLjY2NjcgNDguMDAwMVYxNi4wMDAxQzEwLjY2NjcgMTMuMDU0NyAxMy4wNTQ3IDEwLjY2NjcgMTYgMTAuNjY2N0g0OEM1MC45NDU0IDEwLjY2NjcgNTMuMzMzNCAxMy4wNTQ3IDUzLjMzMzQgMTYuMDAwMVY0OC4wMDAxQzUzLjMzMzQgNTAuOTQ1NCA1MC45NDU0IDUzLjMzMzQgNDggNTMuMzMzNFpcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICAgIDxwYXRoIGQ9XCJNMTkuMzQyNyAyMC40OTZDMTkuMzQyNyAyMC4zNTQ3IDE5LjQ0NTMgMjAuMjM2IDE5LjU4NTMgMjAuMjJDMjAuMTE4NyAyMC4xNjE0IDIxLjYwNjcgMjAuMDQgMjQuNzgxMyAyMC4wNEMyOS41NjUzIDIwLjA0IDMyLjkxNiAyMS45Mzc0IDMyLjkxNiAyNy4xMjk0QzMyLjkxNiAzMS44MTIgMjkuNzI4IDM0LjU2IDI0LjU4NCAzNC41NkMyNC4yODQgMzQuNTYgMjMuOTg0IDM0LjU2IDIyLjk2MjcgMzQuNTZWNDIuNDAyN0MyMi45NjI3IDQyLjUzMzQgMjIuODU2IDQyLjY0IDIyLjcyNTMgNDIuNjRIMTkuNTgxM0MxOS40NTA3IDQyLjY0IDE5LjM0NCA0Mi41MzM0IDE5LjM0NCA0Mi40MDI3VjIwLjQ5NkgxOS4zNDI3Wk0yMi45NjI3IDMxLjI2MjdDMjIuOTYyNyAzMS4yNjI3IDI0LjU0NTMgMzEuMjczNCAyNC45MDI3IDMxLjI3MzRDMjcuODQgMzEuMjczNCAyOS4xNzYgMjkuNTMyIDI5LjE3NiAyNy4xOTg3QzI5LjE3NiAyNS4wMTM0IDI3Ljg3NzMgMjMuMzA5NCAyNS4xNjI3IDIzLjMwOTRDMjQuMDQ0IDIzLjMwOTQgMjIuOTY0IDIzLjM3MzQgMjIuOTY0IDIzLjM3MzRWMzEuMjYyN0gyMi45NjI3WlwiIGZpbGw9e2ZpbGxTZWNvbmRhcnkgfHwgXCJ3aGl0ZVwifSAvPlxuICAgIDxwYXRoIGQ9XCJNMzQuODc0NiAzOC42MjY2QzM0Ljg3NDYgMzguNDk5OSAzNS4wMTIgMzguNDIxMyAzNS4xMTczIDM4LjQ5MDZDMzUuNzg5MyAzOC45Mzk5IDM3LjE1MzMgMzkuNzA5MyAzOS4yNjUzIDM5LjcwOTNDNDAuNjQ0IDM5LjcwOTMgNDEuNTE2IDM5LjExNTkgNDEuNTE2IDM4LjE0NzlDNDEuNTE2IDM3LjA3NiA0MC4wNDI2IDM2LjI5ODYgMzguODI2NiAzNS42Mzg2QzM3LjYxNzMgMzQuOTgyNiAzNC45MDEzIDMzLjkyOTMgMzQuOTAxMyAzMC41MzczQzM0LjkwMTMgMjcuNTMwNiAzNy4zMDQgMjUuNzE3MyA0MC41NzYgMjUuNzE3M0M0MS44MjkzIDI1LjcxNzMgNDMuMjEyIDI1LjkxMiA0NC4xNDUzIDI2LjI1MkM0NC4yOTg2IDI2LjMwOCA0NC4zOTIgMjYuNDU3MyA0NC4zOTIgMjYuNjIxM1YyOS42NzZDNDQuMzkyIDI5LjgwMTMgNDQuMjYgMjkuODgyNiA0NC4xNTQ2IDI5LjgxMzNDNDMuNTY5MyAyOS40MzA2IDQyLjI3ODYgMjguODQ1MyA0MC41MDI2IDI4Ljg0NTNDMzkuMDI0IDI4Ljg0NTMgMzguMzczMyAyOS41NjUzIDM4LjM3MzMgMzAuMjk4NkMzOC4zNzMzIDMxLjU4NCA0MC4wODUzIDMyLjEyMTMgNDEuNjIxMyAzMy4wMjI2QzQ0LjAxNzMgMzQuMzU2IDQ1LjEyOCAzNS42NTg2IDQ1LjEyOCAzNy42OTk5QzQ1LjEyOCA0MS4wMzg2IDQyLjYzODYgNDIuOTEzMyAzOS4yNjY2IDQyLjkxMzNDMzcuNTI1MyA0Mi45MTMzIDM1Ljg4OCA0Mi41MzMzIDM1LjA1MDYgNDIuMDIzOUMzNC45MzQ2IDQxLjk1MzMgMzQuODc2IDQxLjgyNTMgMzQuODc2IDQxLjY4OTNMMzQuODc0NiAzOC42MjY2WlwiIGZpbGw9e2ZpbGxTZWNvbmRhcnkgfHwgXCJ3aGl0ZVwifSAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgUG9zdGdyZVNRTCA9ICh7IGZpbGwsIGZpbGxTZWNvbmRhcnksIHNpemUgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplIH19PlxuICAgIDxwYXRoIGQ9XCJNNTguNzc3MyAzOS43MTk5QzU4LjUzMzMgMzguNjE0NiA1Ny41MzA3IDM3LjMyNTMgNTUuNTA4IDM3LjMyNTNDNTUuMDk0NyAzNy4zMjUzIDU0LjY0MjcgMzcuMzc3MyA1NC4xMjggMzcuNDgzOUM1My4xODQgMzcuNjc4NiA1Mi4zOCAzNy43NzMzIDUxLjY3MiAzNy44MDUzQzU3LjE4MjcgMjguNDE4NiA2MC43NiAxNS4zNzk5IDU3LjIxNzMgMTAuODUzM0M1Mi41NDkzIDQuODg5MjggNDYuMjY1MyAzLjk5ODYxIDQyLjkzNiAzLjk5ODYxTDQyLjYyMjcgMy45OTk5NEM0MS4zODQgNC4wMTk5NCA0MC4wOTg3IDQuMTcxOTQgMzguODA1MyA0LjQ1MTk0TDM0LjAyOCA1LjQ4Mzk0QzMzLjM3NzMgNS40MDI2MSAzMi43MTQ3IDUuMzQ1MjggMzIuMDI0IDUuMzMzMjhIMzEuOTg0SDMxLjk2MjdMMzEuNzYgNS4zMzE5NEMyOS42MzYgNS4zMzE5NCAyNy42OTg3IDUuNzgyNjEgMjUuOTcyIDYuNjI5MjhMMjQuMzA0IDUuOTcxOTRDMjIuMDEwNyA1LjA2Nzk0IDE4LjU2IDMuOTkxOTQgMTUuMTQ2NyAzLjk5MTk0QzE0Ljk1NDcgMy45OTE5NCAxNC43NjQgMy45OTU5NCAxNC41NzIgNC4wMDI2MUMxMS4yMDkzIDQuMTIzOTQgOC4zMjEzNCA1LjM5OTk0IDYuMjE4NjcgNy42OTE5NEMzLjU5NDY3IDEwLjU1MzMgMi40MDAwMSAxNC43Mzg2IDIuNjcwNjcgMjAuMTMzM0MyLjY4NDAxIDIwLjQxMTkgNS45NDgwMSA0Ny45OTk5IDE1LjIgNDcuOTk5OUgxNS4yMzMzTDE1LjMxODcgNDcuOTk4NkMxNi41MiA0Ny45NjkzIDE3LjY2NTMgNDcuNDg2NiAxOC43MzYgNDYuNTYyNkMxOS41NTMzIDQ3LjE3NTkgMjAuNjEwNyA0Ny41Mzg2IDIxLjU5NiA0Ny42ODI2QzIyLjI0NjcgNDcuODM1OSAyMy40MTczIDQ4LjA1MzMgMjQuODIgNDguMDUzM0MyNi41MzIgNDguMDUzMyAyOC4wNzYgNDcuNzAyNiAyOS40MDY3IDQ3LjA2OTNDMjkuNDA1MyA0OC4yNDI2IDI5LjM5ODcgNDkuNzI3OSAyOS4zODUzIDUxLjYyNjZMMjkuMzg0IDUxLjcyNjZMMjkuMzkwNyA1MS44MjY2QzI5LjUyIDUzLjcxODYgMjkuODQ2NyA1NS40MjM5IDMwLjMzODcgNTYuNzYxM0MzMS43NCA2MC41NzMzIDM0LjE2IDYyLjY3MzMgMzcuMTUzMyA2Mi42NzMzQzM3LjI3NzMgNjIuNjczMyAzNy40MDQgNjIuNjY5MyAzNy41MzIgNjIuNjYxM0MzOS45OTMzIDYyLjUwOTMgNDIuNDg4IDYxLjEyNjYgNDQuMjA0IDU4Ljk2NTNDNDYuMDYxMyA1Ni42MjUzIDQ2LjQ5MDcgNTQuMTU1OSA0Ni42NTYgNTIuMjYzOUw0Ni42NjY3IDUyLjE0NzlWNTIuMDMwNlY0Ni41OTE5TDQ2LjgwNCA0Ni42MDUzTDQ3LjM4NTMgNDYuNjU1OUw0Ny40NDEzIDQ2LjY2MTNMNDcuNDk3MyA0Ni42NjM5QzQ3LjY2MjcgNDYuNjcxOSA0Ny44MzMzIDQ2LjY3NDYgNDguMDA1MyA0Ni42NzQ2QzUwLjAxNDcgNDYuNjc0NiA1Mi40ODggNDYuMTUzMyA1NC4xNiA0NS4zNzU5QzU1Ljc1ODcgNDQuNjM0NiA1OS40MTIgNDIuNTk3MyA1OC43NzczIDM5LjcxOTlaXCIgZmlsbD17ZmlsbFNlY29uZGFyeSB8fCBcIndoaXRlXCJ9IC8+XG4gICAgPHBhdGggZD1cIk00NCA0NS4zMzM0QzQ0IDQ1LjA2IDQ0LjAxNiA0NC44MzIgNDQuMDI0IDQ0LjU4QzQ0LjAxMDcgNDQuMjQ1NCA0NCA0NCA0NCA0NEM0NCA0NCA0NC4wMTYgNDMuOTg4IDQ0LjA0MjcgNDMuOTcwN0M0NC4yNDEzIDQwLjQwNjcgNDUuMjI0IDM5LjAzMzQgNDYuMjc2IDM4LjI1MDdDNDYuMTI5MyAzOC4wNDY3IDQ1Ljk2IDM3LjgyNjcgNDUuODAxMyAzNy42MTc0QzQ1LjM1NzMgMzcuMDM0NyA0NC44MDQgMzYuMzEyIDQ0LjIxMiAzNS4zODU0TDQ0LjEwMjcgMzUuMTc0N0M0NC4wMTMzIDM0Ljk1NiA0My43OTczIDM0LjU3ODcgNDMuNTIyNyAzNC4wODI3QzQxLjk0NTMgMzEuMjI5NCAzOC42NjI3IDI1LjI5MzQgNDAuOTA5MyAyMS41NDRDNDEuODkzMyAxOS45MDE0IDQzLjczODcgMTguOTU0NyA0Ni40MDQgMTguNzIxNEM0NS4zMTQ3IDE1LjYyNCA0MS4yMzMzIDguMTUzMzUgMzEuOTggOC4wMDAwMkMzMS45NzczIDguMDAwMDIgMzEuOTc0NyA4LjAwMDAyIDMxLjk3MiA4LjAwMDAyQzIzLjkxNzMgNy44NjkzNSAyMS4yNzA3IDE1LjE4OTQgMjAuNDA5MyAxOS41NjI3QzIxLjU5NiAxOS4wNiAyMi45NTA3IDE4Ljc1NDcgMjQuMTkwNyAxOC43NTQ3QzI0LjIwOTMgMTguNzU0NyAyNC4yMjkzIDE4Ljc1NDcgMjQuMjQ4IDE4Ljc1NDdDMjcuMzAxMyAxOC43Nzc0IDI5LjQwMTMgMjAuNDA2NyAzMC4wMTIgMjMuMjI2N0MzMC40NTg3IDI1LjI5NiAzMC42NzMzIDI3LjEwNjcgMzAuNjY4IDI4Ljc2NEMzMC42NTQ3IDMyLjM4OTQgMjkuOTI0IDM0LjI5NiAyOS4yNzg3IDM1Ljk3ODdMMjkuMDczMyAzNi41MjI3QzI4LjkwOCAzNi45NjggMjguNzMzMyAzNy4zODI3IDI4LjU2OCAzNy43NzJDMjguNCAzOC4xNjk0IDI4LjI1MiAzOC41MjI3IDI4LjE0NCAzOC44NDE0QzI4Ljc4OTMgMzguOTg4IDI5LjI5NiAzOS4xOTQ3IDI5LjY0NCAzOS4zNDhMMjkuODQ1MyAzOS40MzZDMjkuOTA4IDM5LjQ2MjcgMjkuOTcwNyAzOS40OTM0IDMwLjAyOCAzOS41MjhDMzEuMTU4NyA0MC4yMTYgMzEuODYyNyA0MS4yNzM0IDMyLjAxMzMgNDIuNTA1NEMzMi4wOTQ3IDQzLjE2OTQgMzIuMDgxMyA0Ny42OTYgMzIuMDUzMyA1MS42NDU0QzMyLjE2OTMgNTMuMzU4NyAzMi40NiA1NC43OTc0IDMyLjg0NCA1NS44NEMzMy4zODkzIDU3LjMyNTQgMzQuNzUyIDYwLjE2MTQgMzcuMzY5MyA1OS45OTg3QzM5LjE5NiA1OS44ODU0IDQwLjk1MiA1OC43NzMzIDQyLjExNzMgNTcuMzA2N0M0My4zNjggNTUuNzMyIDQzLjgyOTMgNTMuOTkwNyA0NC4wMDI3IDUyLjAyOTNWNDUuMzMzNEg0NFpcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICAgIDxwYXRoIGQ9XCJNMjAuMTUyIDM4LjU1NjFDMTguMDAxMyAzNi4zMTIxIDE2Ljk1MzMgMzMuMjkzNSAxNy4zNDY3IDMwLjQ4MTVDMTcuNzI2NyAyNy43NjgxIDE3LjUxMiAyNS4xMTIxIDE3LjM5NiAyMy42ODQxQzE3LjM1NzMgMjMuMjA4MSAxNy4zMzIgMjIuODUzNSAxNy4zMzMzIDIyLjY1NzVDMTcuMzMzMyAyMi42NDY4IDE3LjMzNiAyMi42Mzc1IDE3LjMzNzMgMjIuNjI2OEMxNy4zMzczIDIyLjYyMTUgMTcuMzM0NyAyMi42MTc1IDE3LjMzNDcgMjIuNjEyMUMxNy40OTYgMTguNTg0MSAxOS4wNDkzIDEyLjIyOTUgMjMuMzI1MyA4LjQ1MjE0QzIxLjI0MjcgNy42MzIxNCAxNy44NTA3IDYuNTUwODEgMTQuNjY2NyA2LjY2NjgxQzkuNjc3MzQgNi44NDgxNCA0Ljg0ODAxIDEwLjI5ODggNS4zMzMzNCAyMC4wMDAxQzUuNTE2MDEgMjMuNjQwMSA5LjYyOTM0IDQ1LjQ3MDggMTUuMjUzMyA0NS4zMzM1QzE2LjA1NzMgNDUuMzEzNSAxNi44OTIgNDQuNzk3NSAxNy43NDkzIDQzLjc2NTVDMTkuMTA1MyA0Mi4xMzQ4IDIwLjQyMjcgNDAuNjU2MSAyMS4zNiAzOS42MjY4QzIwLjk0IDM5LjMwODEgMjAuNTM0NyAzOC45NTYxIDIwLjE1MiAzOC41NTYxWk00OS4zNjQgMTkuNjQxNUM0OS4zODQgMTkuODQ2OCA0OS4zNjY3IDIwLjAyMjggNDkuMzM0NyAyMC4xODU1QzQ5LjM3NiAyMS40MTIxIDQ5LjI0NCAyMi42MDI4IDQ5LjEwOTMgMjMuNzU0OEM0OS4wMTA3IDI0LjYwMjggNDguOTA5MyAyNS40Nzg4IDQ4Ljg4MTMgMjYuMzU3NUM0OC44NTMzIDI3LjIxNzUgNDguOTc0NyAyOC4wNjY4IDQ5LjEwMjcgMjguOTY1NUM0OS40MDI3IDMxLjA2OTUgNDkuNzE0NyAzMy40NDQxIDQ4LjA4MjcgMzYuMjE0OEM0OC4zODI3IDM2LjYwOTUgNDguNjQ2NyAzNi45NzYxIDQ4Ljg1NzMgMzcuMzMwOEM1NS4wMDQgMjcuMzY0MSA1Ny40ODEzIDE1LjUxNjEgNTUuMTE3MyAxMi40OTYxQzUxLjU0IDcuOTI1NDcgNDYuNTg4IDYuNjAyODEgNDIuNjY1MyA2LjY2NjgxQzQxLjQzNzMgNi42ODY4MSA0MC4zMjEzIDYuODUyMTQgMzkuMzY4IDcuMDU4ODFDNDYuMTM2IDEwLjMzODggNDkuMTUwNyAxNy4zNjgxIDQ5LjM2NCAxOS42NDE1Wk01NC42NjY3IDQwLjA5NDhDNTEuMTEzMyA0MC44MjgxIDQ5LjQwNCA0MC40Mzc1IDQ4LjU3NDcgMzkuOTI2OEM0OC40NDEzIDQwLjAyMjggNDguMzA4IDQwLjEwNDEgNDguMTg0IDQwLjE4MDFDNDcuNjg4IDQwLjQ4MDEgNDYuOTAyNyA0MC45NTc1IDQ2LjcxMDcgNDMuODg5NUM0Ni44MjEzIDQzLjkxMDggNDYuOTE4NyA0My45MjI4IDQ3LjAzODcgNDMuOTQ4MUw0Ny42MTg3IDQ0LjAwMDFDNDkuMzc4NyA0NC4wODAxIDUxLjY4NCA0My41ODY4IDUzLjAzNiA0Mi45NTg4QzU1Ljk0OTMgNDEuNjA2OCA1Ny41MzczIDM5LjUwMjggNTQuNjY2NyA0MC4wOTQ4Wk0yOS4zNjQgNDIuODI1NUMyOS4zMTQ3IDQyLjQyODEgMjkuMSA0Mi4xMDY4IDI4LjcwOCA0MS44NDk1TDI4LjU2NCA0MS43ODY4QzI4LjA4MjcgNDEuNTc0OCAyNy41MzczIDQxLjMzMzUgMjYuNjY2NyA0MS4zMzM1SDI2LjY2MTNDMjYuNDkyIDQxLjM0NjggMjYuMzI0IDQxLjM1ODggMjYuMTU0NyA0MS4zNTg4QzI2LjA4NTMgNDEuMzU4OCAyNi4wMTczIDQxLjM0OTUgMjUuOTQ4IDQxLjM0NjhDMjUuMzE2IDQxLjgzMzUgMjQuNDE3MyA0Mi4yMDk1IDIyLjE5MzMgNDIuNjY2OEMxOC4yMiA0My42Nzg4IDIwLjU2NTMgNDQuODczNSAyMi4wODkzIDQ1LjA1ODhDMjMuNTY0IDQ1LjQyODEgMjcuMDY5MyA0NS44Nzc1IDI5LjM5NzMgNDMuOTgwMUMyOS4zOTA3IDQzLjM4MjggMjkuMzggNDIuOTcyMSAyOS4zNjQgNDIuODI1NVpcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICAgIDxwYXRoIGQ9XCJNMjcuNTc0NyAyNC42Njc5QzI3LjE4NTMgMjUuMDcwNSAyNi41NzA3IDI1LjQyMjYgMjUuODkyIDI1LjMxMzJDMjQuNzg4IDI1LjEzNDYgMjMuOTQxNCAyMy44MDI1IDI0LjAwMjcgMjMuMzAyNUMyNC4wNjE0IDIyLjgwMzkgMjUuMDA0IDIyLjU0MzkgMjYuMTA2NyAyMi43MjI1QzI2LjQ4OTMgMjIuNzg1MiAyNi44MzczIDIyLjg5MzIgMjcuMTMwNyAyMy4wMjY2QzI2LjcwNCAyMi4xMDkyIDI1LjkzMiAyMS41Nzk5IDI0Ljc1NDcgMjEuNDUwNUMyMi42NjggMjEuMjE4NSAyMC40NTMzIDIyLjMwOTIgMjAuMDA4IDIyLjkxMzJDMjAuMDE3MyAyMy4wNTk5IDIwLjAzNDcgMjMuMjQ3OSAyMC4wNTIgMjMuNDY5MkMyMC4xNzYgMjQuOTk4NSAyMC40MDUzIDI3Ljg0NzkgMTkuOTg1MyAzMC44NTE5QzE5LjcwOCAzMi44MzE5IDIwLjUwOTMgMzUuMDc3MiAyMi4wNzQ3IDM2LjcxMTlDMjMuMDg0IDM3Ljc2NTIgMjQuMjYyNyAzOC40MzE5IDI1LjQyNTMgMzguNjI5MkMyNS41NzMzIDM3Ljk5MTkgMjUuODM3MyAzNy4zNzA1IDI2LjEwOTMgMzYuNzI5MkMyNi4yNiAzNi4zNzU5IDI2LjQyIDM1Ljk5OTkgMjYuNTcwNyAzNS41OTMyTDI2Ljc4NjcgMzUuMDIzOUMyNy4zNzczIDMzLjQ4MzkgMjcuOTg2NyAzMS44OTA1IDI3Ljk5ODcgMjguNzUzMkMyOC4wMDQgMjcuNTQ2NiAyNy44NTYgMjYuMTY5MiAyNy41NzQ3IDI0LjY2NzlaTTQ2LjQ2MjcgMjkuMzQyNUM0Ni4zMjQgMjguMzcwNSA0Ni4xODEzIDI3LjM2MzkgNDYuMjE2IDI2LjI3MTlDNDYuMjQ2NyAyNS4yODI2IDQ2LjM1NiAyNC4zNDkyIDQ2LjQ2MTQgMjMuNDQ2NUM0Ni41NDQgMjIuNzM1OSA0Ni42MDggMjIuMDUzMiA0Ni42NDU0IDIxLjM3OTlDNDQuOTI2NyAyMS41MjI1IDQzLjc4NTMgMjIuMDE4NSA0My4yNDQgMjIuODU3MkM0My40NjggMjIuNzgxMiA0My43MjEzIDIyLjcyMTIgNDQuMDAxMyAyMi42ODUyQzQ1LjE5MDcgMjIuNTMwNSA0Ni4wNTg3IDIyLjg3MzIgNDYuMTU4NyAyMy41MzQ1QzQ2LjIzMiAyNC4wMTg1IDQ1LjgyMTMgMjQuNDc0NSA0NS42NDEzIDI0LjY0OTJDNDUuMjcyIDI1LjAwNzkgNDQuODA2NyAyNS4yMzg1IDQ0LjMzMzMgMjUuMjk5OUM0NC4yNDggMjUuMzEwNSA0NC4xNjEzIDI1LjMxNTkgNDQuMDc3MyAyNS4zMTU5QzQzLjYwNjcgMjUuMzE1OSA0My4xNTc0IDI1LjE1NDUgNDIuODEyIDI0LjkxNTlDNDIuOTYxNCAyNy41NDY1IDQ0LjkwMTMgMzEuMDY1MiA0NS44NTYgMzIuNzkxOUM0Ni4wNiAzMy4xNjEyIDQ2LjIxNzQgMzMuNDU1OSA0Ni4zNDggMzMuNzA5MkM0Ni44NzIgMzIuMjE3MiA0Ni42Nzg3IDMwLjg1NzIgNDYuNDYyNyAyOS4zNDI1WlwiIGZpbGw9e2ZpbGwgfHwgXCIjRjZDMzU4XCJ9IC8+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBSZWFjdEpTID0gKHsgZmlsbCwgc2l6ZSB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0eWxlPXt7IGhlaWdodDogc2l6ZSwgd2lkdGg6IHNpemUgfX0+XG4gICAgPHBhdGggZD1cIk0zMiA0NS4zMzM0QzE0LjggNDUuMzMzNCAxLjMzMzMxIDM5LjQ2NjcgMS4zMzMzMSAzMi4wMDAxQzEuMzMzMzEgMjQuNTMzNCAxNC44IDE4LjY2NjcgMzIgMTguNjY2N0M0OS4yIDE4LjY2NjcgNjIuNjY2NiAyNC41MzM0IDYyLjY2NjYgMzIuMDAwMUM2Mi42NjY2IDM5LjQ2NjcgNDkuMiA0NS4zMzM0IDMyIDQ1LjMzMzRaTTMyIDIxLjMzMzRDMTUuMiAyMS4zMzM0IDMuOTk5OTggMjYuODAwMSAzLjk5OTk4IDMyLjAwMDFDMy45OTk5OCAzNy4yMDAxIDE1LjIgNDIuNjY2NyAzMiA0Mi42NjY3QzQ4LjggNDIuNjY2NyA2MCAzNy4yMDAxIDYwIDMyLjAwMDFDNjAgMjYuODAwMSA0OC44IDIxLjMzMzQgMzIgMjEuMzMzNFpcIiBmaWxsPXtmaWxsIHx8IFwiIzJGMzEzNlwifSAvPlxuICAgIDxwYXRoIGQ9XCJNMjAuMTMzNCA1OS40NjY4QzE4LjggNTkuNDY2OCAxNy43MzM0IDU5LjIwMDEgMTYuNjY2NyA1OC41MzM0QzEwLjEzMzQgNTQuODAwMSAxMS44NjY3IDQwLjI2NjggMjAuNCAyNS4zMzM0QzI0LjQgMTguNDAwMSAyOS4zMzM0IDEyLjUzMzQgMzQuMTMzNCA4LjgwMDExQzM5LjMzMzQgNC44MDAxMSA0NCAzLjYwMDExIDQ3LjIgNS40NjY3OEM1MC41MzM0IDcuMzMzNDQgNTEuNzMzNCAxMi4wMDAxIDUwLjkzMzQgMTguNTMzNEM1MC4xMzM0IDI0LjY2NjggNDcuNDY2NyAzMS44NjY4IDQzLjQ2NjcgMzguODAwMUMzOS40NjY3IDQ1LjczMzQgMzQuNTMzNCA1MS42MDAxIDI5LjczMzQgNTUuMzMzNEMyNi4yNjY3IDU4LjAwMDEgMjIuOTMzNCA1OS40NjY4IDIwLjEzMzQgNTkuNDY2OFpNNDMuODY2NyA3LjIwMDExQzQxLjczMzQgNy4yMDAxMSAzOC45MzM0IDguNDAwMTEgMzUuODY2NyAxMC44MDAxQzMxLjMzMzQgMTQuNDAwMSAyNi42NjY3IDIwLjAwMDEgMjIuOCAyNi42NjY4QzE0LjQgNDEuMjAwMSAxMy42IDUzLjczMzQgMTggNTYuMjY2OEMyMC4yNjY3IDU3LjYwMDEgMjQgNTYuNDAwMSAyOC4xMzM0IDUzLjIwMDFDMzIuNjY2NyA0OS42MDAxIDM3LjMzMzQgNDQuMDAwMSA0MS4yIDM3LjMzMzRDNDUuMDY2NyAzMC42NjY4IDQ3LjYgMjMuODY2OCA0OC40IDE4LjEzMzRDNDkuMDY2NyAxMi44MDAxIDQ4LjI2NjcgOS4wNjY3OCA0NiA3LjczMzQ1QzQ1LjMzMzQgNy40NjY3OCA0NC42NjY3IDcuMjAwMTEgNDMuODY2NyA3LjIwMDExWlwiIGZpbGw9e2ZpbGwgfHwgXCIjMkYzMTM2XCJ9IC8+XG4gICAgPHBhdGggZD1cIk00NC42MjU3IDU4Ljg2NTJDMzcuOTU5IDU4Ljg2NTIgMjguMzU5IDUwLjczMTkgMjEuMTU5IDM4LjA2NTJDMTIuNDkyNCAyMy4xMzE5IDEwLjc1OSA4LjU5ODUzIDE3LjI5MjQgNC44NjUyQzIzLjgyNTcgMS4xMzE4NiAzNS41NTkgOS43OTg1MyA0NC4yMjU3IDI0LjczMTlDNDguMjI1NyAzMS42NjUyIDUwLjg5MjQgMzguODY1MiA1MS42OTI0IDQ0Ljk5ODVDNTIuNjI1NyA1MS41MzE5IDUxLjI5MjQgNTYuMDY1MiA0Ny45NTkgNTguMDY1MkM0Ni44OTI0IDU4LjU5ODUgNDUuODI1NyA1OC44NjUyIDQ0LjYyNTcgNTguODY1MlpNMTguNjI1NyA3LjEzMTg2QzE0LjIyNTcgOS42NjUyIDE1LjAyNTcgMjIuMTk4NSAyMy40MjU3IDM2LjczMTlDMzEuODI1NyA1MS4yNjUyIDQyLjIyNTcgNTguMTk4NSA0Ni42MjU3IDU1LjY2NTJDNDguODkyNCA1NC4zMzE5IDQ5LjY5MjQgNTAuNTk4NSA0OS4wMjU3IDQ1LjI2NTJDNDguMjI1NyAzOS41MzE5IDQ1LjY5MjQgMzIuNzMxOSA0MS44MjU3IDI2LjA2NTJDMzMuNDI1NyAxMS41MzE5IDIzLjAyNTcgNC41OTg1MyAxOC42MjU3IDcuMTMxODZaXCIgZmlsbD17ZmlsbCB8fCBcIiMyRjMxMzZcIn0gLz5cbiAgICA8cGF0aCBkPVwiTTMyIDM3LjMzMzRDMzQuOTQ1NSAzNy4zMzM0IDM3LjMzMzQgMzQuOTQ1NiAzNy4zMzM0IDMyLjAwMDFDMzcuMzMzNCAyOS4wNTQ2IDM0Ljk0NTUgMjYuNjY2NyAzMiAyNi42NjY3QzI5LjA1NDUgMjYuNjY2NyAyNi42NjY3IDI5LjA1NDYgMjYuNjY2NyAzMi4wMDAxQzI2LjY2NjcgMzQuOTQ1NiAyOS4wNTQ1IDM3LjMzMzQgMzIgMzcuMzMzNFpcIiBmaWxsPXtmaWxsIHx8IFwiIzJGMzEzNlwifSAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgUmVkdXggPSAoeyBmaWxsLCBzaXplIH0pID0+IChcbiAgPHN2ZyB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3R5bGU9e3sgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSB9fT5cbiAgICA8cGF0aCBkPVwiTTMwLjY2NjcgNS4zMzMyNUMyMS44NDQgNS4zMzMyNSAxNC42NjY3IDE1LjAyNjYgMTQuNjY2NyAyNi45Mzk5QzE0LjY2NjcgMzMuMzg1MyAxNi43NzYgMzkuMTY1MyAyMC4xMDQgNDMuMTIxM0MyMC4wNCA0My40MDUzIDIwIDQzLjY5NzMgMjAgNDMuOTk5OUMyMCA0Ni4yMDkzIDIxLjc5MDcgNDcuOTk5OSAyNCA0Ny45OTk5QzI2LjIwOTMgNDcuOTk5OSAyOCA0Ni4yMDkzIDI4IDQzLjk5OTlDMjggNDEuNzkwNiAyNi4yMDkzIDM5Ljk5OTkgMjQgMzkuOTk5OUMyMy41OCAzOS45OTk5IDIzLjE4NCA0MC4wODI2IDIyLjgwNCA0MC4yMDI2QzIwLjI3NDcgMzYuOTc0NiAxOC42NjY3IDMyLjIzMzMgMTguNjY2NyAyNi45Mzk5QzE4LjY2NjcgMTcuMjMxOSAyNC4wNDkzIDkuMzMzMjUgMzAuNjY2NyA5LjMzMzI1QzM1Ljc4MjcgOS4zMzMyNSA0MC4xNDggMTQuMDYyNiA0MS44NzIgMjAuNjkwNkM0My4zNjggMjEuMTUxOSA0NC44NTQ3IDIxLjczMzMgNDYuMzEyIDIyLjQzNDZDNDQuNzcyIDEyLjY3NzMgMzguMzQ1MyA1LjMzMzI1IDMwLjY2NjcgNS4zMzMyNVpcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICAgIDxwYXRoIGQ9XCJNNDcuMzQyNyAyNi43Nzg2QzQyLjA4IDIzLjU4OTMgMzYuMTc3MyAyMi4xODkzIDMxLjEgMjIuODMzM0MzMC4zNjY3IDIxLjkyNTMgMjkuMjU3MyAyMS4zMzMzIDI4IDIxLjMzMzNDMjUuNzkwNyAyMS4zMzMzIDI0IDIzLjEyMzkgMjQgMjUuMzMzM0MyNCAyNy41NDI2IDI1Ljc5MDcgMjkuMzMzMyAyOCAyOS4zMzMzQzI5LjY5NiAyOS4zMzMzIDMxLjEzNzMgMjguMjczMyAzMS43MTg3IDI2Ljc4MzlDMzUuODc2IDI2LjI3ODYgNDAuODAxMyAyNy40OTE5IDQ1LjI2OTMgMzAuMjAxM0M1My44MDY3IDM1LjM3NTkgNTguMTYyNyA0NC4yOTMzIDU0Ljk3ODcgNTAuMDgyNkM1My44NzYgNTIuMDg3OSA1MS45MzA3IDUzLjUxMTkgNDkuMzU0NyA1NC4yMDI2QzQ2LjMwNjcgNTUuMDE3MyA0Mi42Nzg3IDU0LjcyNzkgMzkuMDUyIDUzLjQ5ODZDMzcuOTMzMyA1NC41Mjc5IDM2LjcyIDU1LjQ5NTkgMzUuNDE4NyA1Ni4zODkyQzM4LjgyMTMgNTcuODc4NiA0Mi4zNDY3IDU4LjY2MTIgNDUuNjQ0IDU4LjY2MTJDNDcuMjk3MyA1OC42NjEyIDQ4Ljg5NDcgNTguNDY1MiA1MC4zODkzIDU4LjA2NTJDNTQuMDQ0IDU3LjA4NzkgNTYuODQ0IDU0Ljk5MzIgNTguNDg0IDUyLjAwOTNDNjIuNjg4IDQ0LjM2NzkgNTcuNjg5MyAzMy4wNDkzIDQ3LjM0MjcgMjYuNzc4NlpcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICAgIDxwYXRoIGQ9XCJNNDYuNjY2NyAzOC42NTYxQzQ2LjY2NjcgMzYuNDUzNCA0NC44NzYgMzQuNjY2NyA0Mi42NjY3IDM0LjY2NjdDNDAuNDU3MyAzNC42NjY3IDM4LjY2NjcgMzYuNDUzNCAzOC42NjY3IDM4LjY1NjFDMzguNjY2NyAzOS41NDgxIDM4Ljk3MDcgNDAuMzY0MSAzOS40NjY3IDQxLjAyODFDMzcuNzYxMyA0NC43NjQxIDM0LjQ3NDcgNDguNDUwNyAzMC4wNTA3IDUxLjEzMjFDMjQuODk3MyA1NC4yNTc0IDE5LjEzNzMgNTUuNDAxNCAxNC42NDQgNTQuMjAxNEMxMi4wNjggNTMuNTEwNyAxMC4xMjI3IDUyLjA4NjcgOS4wMjAwMSA1MC4wODE0QzYuNzUwNjggNDUuOTU2MSA4LjMyNTM1IDQwLjI0NjcgMTIuNSAzNS40MzA3QzEyLjA2OTMgMzMuOTA1NCAxMS43NTA3IDMyLjMxMDcgMTEuNTU4NyAzMC42NjQxQzQuNzk4NjggMzcuMDYwMSAyLjA4MDAxIDQ1Ljc2MTQgNS41MTYwMSA1Mi4wMDk0QzcuMTU2MDEgNTQuOTkzNCA5Ljk1NjAxIDU3LjA4ODEgMTMuNjEwNyA1OC4wNjU0QzE1LjEwNTMgNTguNDY1NCAxNi43MDEzIDU4LjY2MTQgMTguMzU2IDU4LjY2MTRDMjIuODE3MyA1OC42NjE0IDI3LjY5ODcgNTcuMjM3NCAzMi4xMjQgNTQuNTU0N0MzNy4yMzg3IDUxLjQ1NDcgNDEuMDM0NyA0Ny4xMTg3IDQzLjA2OTMgNDIuNjA1NEM0NS4wODY3IDQyLjQwMTQgNDYuNjY2NyA0MC43MjE0IDQ2LjY2NjcgMzguNjU2MVpcIiBmaWxsPXtmaWxsIHx8IFwiI0Y2QzM1OFwifSAvPlxuICA8L3N2Zz5cbilcblxuY29uc3QgVHlwZVNjcmlwdCA9ICh7IGZpbGwsIGZpbGxTZWNvbmRhcnksIHNpemUgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT17eyBoZWlnaHQ6IHNpemUsIHdpZHRoOiBzaXplIH19PlxuICAgIDxwYXRoIGQ9XCJNNTYgOEg4VjU2SDU2VjhaXCIgZmlsbD17ZmlsbCB8fCBcIiNGNkMzNThcIn0gLz5cbiAgICA8cGF0aCBkPVwiTTM2LjY1MzMgMjkuMzMzM0gxOC45NjkzVjMzLjY4NTNIMjUuMzEyVjUzLjMzMzNIMzAuMzM3M1YzMy42ODUzSDM2LjY1MzNWMjkuMzMzM1pcIiBmaWxsPXtmaWxsU2Vjb25kYXJ5IHx8IFwid2hpdGVcIn0gLz5cbiAgICA8cGF0aCBkPVwiTTUyLjI1ODcgMzQuNzc4N0M1Mi4yNTg3IDM0Ljc3ODcgNDkuODc2IDMzLjE4OTMgNDcuMTgyNyAzMy4xODkzQzQ0LjQ4OTMgMzMuMTg5MyA0My41MiAzNC40NjkzIDQzLjUyIDM1LjgzNzNDNDMuNTIgMzkuMzY4IDUzLjM2MTMgMzkuMDE0NyA1My4zNjEzIDQ2LjEyQzUzLjM2MTMgNTcuMDY1MyAzOC4zNTYgNTIuMjEwNyAzOC4zNTYgNTIuMjEwN1Y0Ni45NkMzOC4zNTYgNDYuOTYgNDEuMjI1MyA0OS4xMjI3IDQ0LjY2NjcgNDkuMTIyN0M0OC4xMDggNDkuMTIyNyA0Ny45NzczIDQ2Ljg3MiA0Ny45NzczIDQ2LjU2MjdDNDcuOTc3MyA0My4yOTczIDM4LjIyNCA0My4yOTczIDM4LjIyNCAzNi4wNTg3QzM4LjIyNCAyNi4yMTczIDUyLjQzNDcgMzAuMSA1Mi40MzQ3IDMwLjFMNTIuMjU4NyAzNC43Nzg3WlwiIGZpbGw9e2ZpbGxTZWNvbmRhcnkgfHwgXCJ3aGl0ZVwifSAvPlxuICA8L3N2Zz5cbilcblxuZXhwb3J0IHtcbiAgTWVudSwgQ2xvc2UsIERvd25sb2FkLCBIZWFydCwgR2l0SHViLCBHaXRMYWIsIExpbmtlZEluLCBXaGF0c0FwcCwgTW9vbiwgU3VuLCBMb2FkZXIsXG4gIENTUywgRGlzY29yZCwgRXhwcmVzc0pTLCBGaWdtYSwgSFRNTCwgSmF2YVNjcmlwdCwgTGFyYXZlbCwgTXlTUUwsIE5leHRKUywgTm9kZUpTLCBQaG90b1Nob3AsIFBvc3RncmVTUUwsIFJlYWN0SlMsIFJlZHV4LCBUeXBlU2NyaXB0XG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgRGVmYXVsdExheW91dCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMycHggMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiA1NDBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1heC13aWR0aDogNzIwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIG1heC13aWR0aDogMTE0MHB4O1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0J1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL1NraWxscydcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCdcblxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vdXRpbHMvcmVzaXplV2luZG93U2l6ZSdcbmltcG9ydCB7IGdldFByb2plY3RzLCBnZXRIZWFkZXIgfSBmcm9tICcuLi91dGlscy9GaXJlYmFzZVJlcXVlc3QnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKClcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciBzaXplPXtzaXplfSB0aGVtZT17cHJvcHMudGhlbWV9IHRvZ2dsZT17cHJvcHMudG9nZ2xlfSAvPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICc2MHB4IGF1dG8gMCcsIHBhZGRpbmc6IHNpemUud2lkdGggPD0gNzY4ID8gJzAgMzJweCcgOiAwIH19PlxuICAgICAgICAgIHsvKiA8SGVhZGVyIGRhdGE9e3Byb3BzLnJlc3BvbnNlSGVhZGVyfSBzaXplPXtzaXplfSB0aGVtZT17cHJvcHMudGhlbWV9IC8+XG4gICAgICAgICAgPFByb2plY3QgZGF0YT17cHJvcHMucmVzcG9uc2VQcm9qZWN0c30gc2l6ZT17c2l6ZX0gLz4gKi99XG4gICAgICAgICAgPEhlYWRlciBzaXplPXtzaXplfSB0aGVtZT17cHJvcHMudGhlbWV9IC8+XG4gICAgICAgICAgPFByb2plY3Qgc2l6ZT17c2l6ZX0gLz5cbiAgICAgICAgICA8U2tpbGxzIHRoZW1lPXtwcm9wcy50aGVtZX0gLz5cbiAgICAgICAgICA8Q29udGFjdCBzaXplPXtzaXplfSB0aGVtZT17cHJvcHMudGhlbWV9IC8+XG4gICAgICAgICAgPEZvb3RlciBzaXplPXtzaXplfSB0aGVtZT17cHJvcHMudGhlbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbi8vICAgY29uc3QgcmVzcG9uc2VIZWFkZXIgPSBhd2FpdCBnZXRIZWFkZXIoKVxuLy8gICBjb25zdCByZXNwb25zZVByb2plY3RzID0gYXdhaXQgZ2V0UHJvamVjdHMoKVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIHJlc3BvbnNlSGVhZGVyLFxuLy8gICAgICAgcmVzcG9uc2VQcm9qZWN0c1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCIsImltcG9ydCB7IFxuICBDU1MsIERpc2NvcmQsIEV4cHJlc3NKUywgRmlnbWEsIEhUTUwsXG4gIEphdmFTY3JpcHQsIExhcmF2ZWwsIE15U1FMLCBOZXh0SlMsIE5vZGVKUyxcbiAgUGhvdG9TaG9wLCBQb3N0Z3JlU1FMLCBSZWFjdEpTLCBSZWR1eCwgVHlwZVNjcmlwdFxufSBmcm9tICcuLi9jb21wb25lbnRzL1N2ZydcblxuY29uc3QgU2tpbGxzRGF0YSA9IChmaWxsLCBmaWxsU2Vjb25kYXJ5KSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWNvbjogPFJlYWN0SlMgZmlsbD17ZmlsbH0gLz4sXG4gICAgICBjYXB0aW9uOiAnUmVhY3QgTmF0aXZlJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPFJlYWN0SlMgZmlsbD17ZmlsbH0gLz4sXG4gICAgICBjYXB0aW9uOiAnUmVhY3QgSlMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8UmVkdXggZmlsbD17ZmlsbH0gLz4sXG4gICAgICBjYXB0aW9uOiAnUmVkdXgnXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8TmV4dEpTIGZpbGw9e2ZpbGx9IC8+LFxuICAgICAgY2FwdGlvbjogJ05leHQuanMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8RGlzY29yZCBmaWxsPXtmaWxsfSAvPixcbiAgICAgIGNhcHRpb246ICdEaXNjb3JkLmpzJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEphdmFTY3JpcHQgZmlsbD17ZmlsbH0gZmlsbFNlY29uZGFyeT17ZmlsbFNlY29uZGFyeX0gLz4sXG4gICAgICBjYXB0aW9uOiAnSmF2YVNjcmlwdCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxDU1MgZmlsbD17ZmlsbH0gZmlsbFNlY29uZGFyeT17ZmlsbFNlY29uZGFyeX0gLz4sXG4gICAgICBjYXB0aW9uOiAnQ1NTJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEhUTUwgZmlsbD17ZmlsbH0gZmlsbFNlY29uZGFyeT17ZmlsbFNlY29uZGFyeX0gLz4sXG4gICAgICBjYXB0aW9uOiAnSFRNTCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxGaWdtYSBmaWxsPXtmaWxsfSAvPixcbiAgICAgIGNhcHRpb246ICdGaWdtYSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxQaG90b1Nob3AgZmlsbD17ZmlsbH0gZmlsbFNlY29uZGFyeT17ZmlsbFNlY29uZGFyeX0gLz4sXG4gICAgICBjYXB0aW9uOiAnQWRvYmUgUGhvdG9TaG9wJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPE15U1FMIGZpbGw9e2ZpbGx9IC8+LFxuICAgICAgY2FwdGlvbjogJ015U1FMJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPFBvc3RncmVTUUwgZmlsbD17ZmlsbH0gZmlsbFNlY29uZGFyeT17ZmlsbFNlY29uZGFyeX0gLz4sXG4gICAgICBjYXB0aW9uOiAnUG9zdGdyZVNRTCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxUeXBlU2NyaXB0IGZpbGw9e2ZpbGx9IGZpbGxTZWNvbmRhcnk9e2ZpbGxTZWNvbmRhcnl9IC8+LFxuICAgICAgY2FwdGlvbjogJ1R5cGVTY3JpcHQnXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8Tm9kZUpTIGZpbGw9e2ZpbGx9IC8+LFxuICAgICAgY2FwdGlvbjogJ05vZGUuanMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8RXhwcmVzc0pTIGZpbGw9e2ZpbGx9IC8+LFxuICAgICAgY2FwdGlvbjogJ0V4cHJlc3MuSlMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiA8TGFyYXZlbCBmaWxsPXtmaWxsfSAvPixcbiAgICAgIGNhcHRpb246ICdMYXJhdmVsJ1xuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IHsgU2tpbGxzRGF0YSB9IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5BVVRIX0RPTUFJTixcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lELFxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk1FU1NBR0lOR19TRU5ERVJfSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5BUFBfSUQsXG4gIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk1FQVNVUkVNRU5UX0lEXG59XG5cbmlmKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcbmVsc2UgZmlyZWJhc2UuYXBwKClcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2UiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuL0ZpcmViYXNlJ1xuXG5jb25zdCBnZXRNZXRhID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGxldCBzbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGBtZXRhL2ApLm9uY2UoJ3ZhbHVlJylcbiAgICByZXR1cm4gc25hcHNob3QudmFsKClcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IGVcbiAgfVxufVxuXG5jb25zdCBnZXRIZWFkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IHNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoYGhlYWRlci9gKS5vbmNlKCd2YWx1ZScpXG4gICAgcmV0dXJuIHNuYXBzaG90LnZhbCgpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cblxuY29uc3QgZ2V0U2tpbGxzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGxldCBzbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGBza2lsbHMvYCkub25jZSgndmFsdWUnKVxuICAgIHJldHVybiBzbmFwc2hvdC52YWwoKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG5cbmNvbnN0IGdldFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGxldCBzbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGBwcm9qZWN0cy9gKS5vbmNlKCd2YWx1ZScpXG4gICAgcmV0dXJuIHNuYXBzaG90LnZhbCgpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cblxuY29uc3Qgc3RvcmVJbWFnZSA9IGFzeW5jIChmaWxlKSA9PiB7XG4gIGxldCBmaWxlTmFtZSA9IHY0KClcblxuICB0cnkge1xuICAgIGxldCBzbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoYC9wcm9qZWN0cy8ke2ZpbGVOYW1lfWApLnB1dChmaWxlKVxuICAgIGxldCBnZXRVUkwgPSBhd2FpdCBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCdwcm9qZWN0cycpLmNoaWxkKGZpbGVOYW1lKS5nZXREb3dubG9hZFVSTCgpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0TWV0YSwgZ2V0SGVhZGVyLCBnZXRTa2lsbHMsIGdldFByb2plY3RzLCBzdG9yZUltYWdlIH0iLCJjb25zdCBHcmVldGluZ3MgPSAobGFuZykgPT4ge1xuICBsZXQgZCA9IG5ldyBEYXRlKClcbiAgbGV0IHRpbWUgPSBkLmdldEhvdXJzKClcblxuICBsZXQgaWQgPSAnJywgZW4gPSAnJywganAgPSAnJ1xuICBsZXQgZ3JlZXRcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHRpbWUgPj0gNCAmJiB0aW1lIDw9IDEwOlxuICAgICAgaWYgKGxhbmcgPT0gJ2pwJykgZ3JlZXQgPSAn44GK44Gv44KI44GGISdcbiAgICAgIGVsc2UgaWYgKGxhbmcgPT0gJ2VuJykgZ3JlZXQgPSAnR29vZCBNb3JuaW5nISdcbiAgICAgIGVsc2UgZ3JlZXQgPSAnU2VsYW1hdCBQYWdpISdcbiAgICAgIHJldHVybiB7IGdyZWV0IH1cblxuICAgIGNhc2UgdGltZSA+IDEwICYmIHRpbWUgPD0gMTQ6XG4gICAgICBpZiAobGFuZyA9PSAnanAnKSBncmVldCA9ICfjgZPjgpPjgavjgaHjga8hJ1xuICAgICAgZWxzZSBpZiAobGFuZyA9PSAnZW4nKSBncmVldCA9ICdHb29kIEFmdGVybm9vbiEnXG4gICAgICBlbHNlIGdyZWV0ID0gJ1NlbGFtYXQgU2lhbmchJ1xuICAgICAgcmV0dXJuIHsgZ3JlZXQgfVxuXG4gICAgY2FzZSB0aW1lID4gMTQgJiYgdGltZSA8PSAxNzpcbiAgICAgIGlmIChsYW5nID09ICdqcCcpIGdyZWV0ID0gJ+OBk+OCk+OBsOOCk+OBr++8gSdcbiAgICAgIGVsc2UgaWYgKGxhbmcgPT0gJ2VuJykgZ3JlZXQgPSAnR29vZCBFdmVuaW5nISdcbiAgICAgIGVsc2UgZ3JlZXQgPSAnU2VsYW1hdCBTb3JlISdcbiAgICAgIHJldHVybiB7IGdyZWV0IH1cbiAgICAgIFxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAobGFuZyA9PSAnanAnKSBncmVldCA9ICfjgYrjgoTjgZnjgb/vvIEnXG4gICAgICBlbHNlIGlmIChsYW5nID09ICdlbicpIGdyZWV0ID0gJ0dvb2QgTmlnaHQhJ1xuICAgICAgZWxzZSBncmVldCA9ICdTZWxhbWF0IE1hbGFtISdcbiAgICAgIHJldHVybiB7IGdyZWV0IH1cbiAgfVxuXG4gIC8vIHN3aXRjaCAodHJ1ZSkge1xuICAvLyAgIGNhc2UgdGltZSA+PSA0ICYmIHRpbWUgPD0gMTA6XG4gIC8vICAgICBpZCA9ICdTZWxhbWF0IFBhZ2khJ1xuICAvLyAgICAgZW4gPSAnR29vZCBNb3JuaW5nISdcbiAgLy8gICAgIGpwID0gJ+OBiuOBr+OCiOOBhu+8gSdcbiAgLy8gICAgIHJldHVybiB7IGlkLCBlbiwganAgfVxuICAvLyAgIGNhc2UgdGltZSA+IDEwICYmIHRpbWUgPD0gMTQ6XG4gIC8vICAgICBpZCA9ICdTZWxhbWF0IFNpYW5nISdcbiAgLy8gICAgIGVuID0gJ0dvb2QgQWZ0ZXJub29uISdcbiAgLy8gICAgIGpwID0gJ+OBk+OCk+OBq+OBoeOBr++8gSdcbiAgLy8gICAgIHJldHVybiB7IGlkLCBlbiwganAgfVxuICAvLyAgIGNhc2UgdGltZSA+IDE0ICYmIHRpbWUgPD0gMTc6XG4gIC8vICAgICBpZCA9ICdTZWxhbWF0IFNvcmUhJ1xuICAvLyAgICAgZW4gPSAnR29vZCBFdmVuaW5nISdcbiAgLy8gICAgIGpwID0gJ+OBk+OCk+OBsOOCk+OBr++8gSdcbiAgLy8gICAgIHJldHVybiB7IGlkLCBlbiwganAgfVxuICAvLyAgIGRlZmF1bHQ6XG4gIC8vICAgICBpZCA9ICdTZWxhbWF0IE1hbGFtISdcbiAgLy8gICAgIGVuID0gJ0dvb2QgTmlnaHQhJ1xuICAvLyAgICAganAgPSAn44GK44KE44GZ44G/77yBJ1xuICAvLyAgICAgcmV0dXJuIHsgaWQsIGVuLCBqcCB9XG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JlZXRpbmdzIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHNldFdpbmRvd1NpemUoe1xuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG5cbiAgICBoYW5kbGVSZXNpemUoKVxuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIHdpbmRvd1NpemVcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93U2l6ZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9