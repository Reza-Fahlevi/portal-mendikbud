webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_useDarkMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useDarkMode */ "./src/utils/useDarkMode.js");
/* harmony import */ var _utils_Themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/Themes */ "./src/utils/Themes.js");
/* harmony import */ var _utils_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Meta */ "./src/utils/Meta.js");
/* harmony import */ var _utils_FirebaseRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/FirebaseRequest */ "./src/utils/FirebaseRequest.js");



var _jsxFileName = "D:\\Project\\portal-mendikbud\\src\\pages\\_app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  ::-moz-selection\n    color: ", ";\n    background: ", ";\n  }\n\n  ::selection {\n    color: ", ";\n    background: ", ";\n  }\n\n  body {\n    background: ", ";\n    color: ", ";\n    font-family: ", ";\n    margin: 0px;\n    padding: 0;\n    transition: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.background;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.secondary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.font;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.transition;
});
_c = Global;

function App(props) {
  _s();

  var Component = props.Component;

  var _useDarkMode = Object(_utils_useDarkMode__WEBPACK_IMPORTED_MODULE_6__["useDarkMode"])(),
      _useDarkMode2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDarkMode, 2),
      theme = _useDarkMode2[0],
      themeToggler = _useDarkMode2[1];

  var themeMode = theme === 'light' ? _utils_Themes__WEBPACK_IMPORTED_MODULE_7__["lightTheme"] : _utils_Themes__WEBPACK_IMPORTED_MODULE_7__["darkTheme"];
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: themeMode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Global, {
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


_s(App, "saMS7KGgBxrQmVrCefyFfk5oLwk=", false, function () {
  return [_utils_useDarkMode__WEBPACK_IMPORTED_MODULE_6__["useDarkMode"]];
});

_c2 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2;

$RefreshReg$(_c, "Global");
$RefreshReg$(_c2, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZm9udCIsInRyYW5zaXRpb24iLCJBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInVzZURhcmtNb2RlIiwidGhlbWVUb2dnbGVyIiwidGhlbWVNb2RlIiwibGlnaHRUaGVtZSIsImRhcmtUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsMkVBQUgsb0JBRUM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLFVBQXJCO0FBQUEsQ0FGRCxFQUdNO0FBQUEsTUFBR0QsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRSxPQUFyQjtBQUFBLENBSE4sRUFPQztBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsVUFBckI7QUFBQSxDQVBELEVBUU07QUFBQSxNQUFHRCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNFLE9BQXJCO0FBQUEsQ0FSTixFQVlNO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxVQUFyQjtBQUFBLENBWk4sRUFhQztBQUFBLE1BQUdELEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csU0FBckI7QUFBQSxDQWJELEVBY087QUFBQSxNQUFHSCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNJLElBQXJCO0FBQUEsQ0FkUCxFQWlCTTtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ssVUFBckI7QUFBQSxDQWpCTixDQUFaO0tBQU1QLE07O0FBcUJOLFNBQVNRLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLE1BRWhCQyxTQUZnQixHQU9kRCxLQVBjLENBRWhCQyxTQUZnQjs7QUFBQSxxQkFTWUMsc0VBQVcsRUFUdkI7QUFBQTtBQUFBLE1BU1hULEtBVFc7QUFBQSxNQVNKVSxZQVRJOztBQVdsQixNQUFNQyxTQUFTLEdBQUdYLEtBQUssS0FBSyxPQUFWLEdBQW9CWSx3REFBcEIsR0FBaUNDLHVEQUFuRDtBQUVBLFNBQ0UsTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRUYsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLG1FQUNFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRSxNQUFDO0FBQVU7QUFBWDtBQUE4QixTQUFLLEVBQUVBLFNBQXJDO0FBQWdELFVBQU0sRUFBRUQsWUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FERjtBQVNELEMsQ0FFRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztHQTlCU0osRztVQVN1QkcsOEQ7OztNQVR2QkgsRztBQWdDTUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMzQ1YTI3ZDhmMjkwYjUxZmJiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcydcblxuaW1wb3J0IHsgdXNlRGFya01vZGUgfSBmcm9tICcuLi91dGlscy91c2VEYXJrTW9kZSdcbmltcG9ydCB7IGxpZ2h0VGhlbWUsIGRhcmtUaGVtZSB9IGZyb20gJy4uL3V0aWxzL1RoZW1lcydcbmltcG9ydCBNZXRhIGZyb20gJy4uL3V0aWxzL01ldGEnXG5pbXBvcnQgeyBnZXRNZXRhIH0gZnJvbSAnLi4vdXRpbHMvRmlyZWJhc2VSZXF1ZXN0JztcblxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIDo6LW1vei1zZWxlY3Rpb25cbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICB9XG5cbiAgOjpzZWxlY3Rpb24ge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gIH1cblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNlY29uZGFyeX07XG4gICAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udH07XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB0cmFuc2l0aW9uOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb259O1xuICB9XG5gXG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICBjb25zdCB7IFxuICAgIENvbXBvbmVudCxcbiAgICAvLyAgcGFnZVByb3BzLFxuICAgIC8vIHJlc3BvbnNlTWV0YToge1xuICAgIC8vICAgZGVzY3JpcHRpb24sIGltYWdlLCBuYW1lLCBzaXRlXG4gICAgLy8gfVxuICB9ID0gcHJvcHNcbiAgXG4gIGNvbnN0IFt0aGVtZSwgdGhlbWVUb2dnbGVyXSA9IHVzZURhcmtNb2RlKClcblxuICBjb25zdCB0aGVtZU1vZGUgPSB0aGVtZSA9PT0gJ2xpZ2h0JyA/IGxpZ2h0VGhlbWUgOiBkYXJrVGhlbWVcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZU1vZGV9PlxuICAgICAgPD5cbiAgICAgICAgPEdsb2JhbCAvPlxuICAgICAgICB7LyogPE1ldGEgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBpbWFnZT17aW1hZ2V9IG5hbWU9e25hbWV9IHNpdGU9e3NpdGV9IC8+ICovfVxuICAgICAgICA8Q29tcG9uZW50IC8qey4uLnBhZ2VQcm9wc30qLyB0aGVtZT17dGhlbWVNb2RlfSB0b2dnbGU9e3RoZW1lVG9nZ2xlcn0gLz5cbiAgICAgIDwvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG4vLyBBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXNwb25zZU1ldGEgPSBhd2FpdCBnZXRNZXRhKClcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHJlc3BvbnNlTWV0YVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==