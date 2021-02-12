webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layouts/Navbar.js":
/*!**************************************!*\
  !*** ./components/Layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");







var _jsxFileName = "C:\\xamp\\htdocs\\jumpx\\jumpx\\components\\Layouts\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Navbar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar, _Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_isMounted", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      display: false,
      collapsed: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "navbar",
        className: "navbar-area fixed-top",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "navbar-brand",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 33
        }
      }, __jsx("img", {
        src: "/images/white-logo.png",
        alt: "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 37
        }
      }))), __jsx("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 29
        }
      }, __jsx("span", {
        className: "icon-bar top-bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 33
        }
      }), __jsx("span", {
        className: "icon-bar middle-bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 33
        }
      }), __jsx("span", {
        className: "icon-bar bottom-bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 29
        }
      }, __jsx("ul", {
        className: "navbar-nav m-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 33
        }
      }, __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 37
        }
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/",
        activeClassName: "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 45
        }
      }, "Home"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 37
        }
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "../about-1",
        activeClassName: "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 45
        }
      }, "Despre Noi"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 37
        }
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/news-grid",
        activeClassName: "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 45
        }
      }, "Noutati"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 37
        }
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/contact-2",
        activeClassName: "active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 45
        }
      }, "Contact")))), __jsx("div", {
        className: "others-options",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 33
        }
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "default-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 41
        }
      }, "Intra in Cont ", __jsx("i", {
        className: "bx bx-log-in-circle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 59
        }
      })))))))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJkaXNwbGF5IiwiY29sbGFwc2VkIiwic2V0U3RhdGUiLCJzdGF0ZSIsImVsZW1lbnRJZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjcm9sbFRvIiwiX2lzTW91bnRlZCIsImNsYXNzT25lIiwiY2xhc3NUd28iLCJ0b2dnbGVOYXZiYXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs7OztxTkFHVyxLOztnTkFDTDtBQUNKQyxhQUFPLEVBQUUsS0FETDtBQUVKQyxlQUFTLEVBQUU7QUFGUCxLOzt1TkFJTyxZQUFNO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBYztBQUNWRCxpQkFBUyxFQUFFLENBQUMsTUFBS0UsS0FBTCxDQUFXRjtBQURiLE9BQWQ7QUFHSCxLOzs7Ozs7O3dDQUNtQjtBQUNoQixVQUFJRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFoQjtBQUNBRCxjQUFRLENBQUNFLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQU07QUFDdEMsWUFBSUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEdBQXJCLEVBQTBCO0FBQ3RCTCxtQkFBUyxDQUFDTSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixXQUF4QjtBQUNILFNBRkQsTUFFTztBQUNIUCxtQkFBUyxDQUFDTSxTQUFWLENBQW9CRSxNQUFwQixDQUEyQixXQUEzQjtBQUNIO0FBQ0osT0FORDtBQU9BSixZQUFNLENBQUNLLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDs7OzJDQUNzQjtBQUNuQixXQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0g7Ozs2QkFFUTtBQUFBLFVBRUdiLFNBRkgsR0FFaUIsS0FBS0UsS0FGdEIsQ0FFR0YsU0FGSDtBQUdMLFVBQU1jLFFBQVEsR0FBR2QsU0FBUyxHQUFHLDBCQUFILEdBQWdDLCtCQUExRDtBQUNBLFVBQU1lLFFBQVEsR0FBR2YsU0FBUyxHQUFHLCtDQUFILEdBQXFELHFDQUEvRTtBQUVBLGFBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssVUFBRSxFQUFDLFFBQVI7QUFBaUIsaUJBQVMsRUFBQyx1QkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMseURBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssV0FBRyxFQUFDLHdCQUFUO0FBQWtDLFdBQUcsRUFBQyxNQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixDQURKLEVBT0k7QUFDSSxlQUFPLEVBQUUsS0FBS2dCLFlBRGxCO0FBRUksaUJBQVMsRUFBRUQsUUFGZjtBQUdJLFlBQUksRUFBQyxRQUhUO0FBSUksdUJBQVksVUFKaEI7QUFLSSx1QkFBWSx5QkFMaEI7QUFLMEMseUJBQWMsd0JBTHhEO0FBTUkseUJBQWMsT0FObEI7QUFPSSxzQkFBVyxtQkFQZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBU0k7QUFBTSxpQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEosRUFVSTtBQUFNLGlCQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFWSixFQVdJO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVhKLENBUEosRUFxQkk7QUFBSyxpQkFBUyxFQUFFRCxRQUFoQjtBQUEwQixVQUFFLEVBQUMsd0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksaUJBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNSSxNQUFDLHlEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBZSx1QkFBZSxFQUFDLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBTkosQ0FESixFQW9CSTtBQUFJLGlCQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUksTUFBQyx5REFBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQXdCLHVCQUFlLEVBQUMsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosQ0FOSixDQXBCSixFQWlMSTtBQUFJLGlCQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUksTUFBQyx5REFBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQXdCLHVCQUFlLEVBQUMsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosQ0FOSixDQWpMSixFQWdOSTtBQUFJLGlCQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUksTUFBQyx5REFBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQXdCLHVCQUFlLEVBQUMsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosQ0FOSixDQWhOSixDQURKLEVBMk9JO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyx5REFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNrQjtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURsQixDQURKLENBREosQ0EzT0osQ0FyQkosQ0FESixDQURKLENBREosQ0FESjtBQWlSSDs7OztFQW5UZ0JHLCtDOztBQXNUTm5CLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU3ZThiMzk1MjJiODcyNWFkM2MyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi91dGlscy9BY3RpdmVMaW5rJztcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTmF2YmFyIFxyXG4gICAgX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LmFkZChcImlzLXN0aWNreVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc3RpY2t5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IGNvbGxhcHNlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjbGFzc09uZSA9IGNvbGxhcHNlZCA/ICdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UnIDogJ2NvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93JztcclxuICAgICAgICBjb25zdCBjbGFzc1R3byA9IGNvbGxhcHNlZCA/ICduYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCBjb2xsYXBzZWQnIDogJ25hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0JztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhci1hcmVhIGZpeGVkLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbmF2YmFyLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd2hpdGUtbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU5hdmJhcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1R3b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgdG9wLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhciBtaWRkbGUtYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyIGJvdHRvbS1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NPbmV9IGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG0tYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIEhvbWUgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9uLWRvd24nPjwvaT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8TGluayBocmVmPVwiL1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lIE9uZTwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvbGk+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3VsPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiLyNcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgQWJvdXQgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9uLWRvd24nPjwvaT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLi4vYWJvdXQtMVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+RGVzcHJlIE5vaTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0LTFcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QWJvdXQgU3R5bGUgT25lPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPC9saT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXQtMlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dCBTdHlsZSBUd288L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L2xpPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC91bD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPExpbmsgaHJlZj1cIi8jXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIFNlcnZpY2VzIDxpIGNsYXNzTmFtZT0nYnggYngtY2hldnJvbi1kb3duJz48L2k+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPC9MaW5rPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2VydmljZXMgU3R5bGUgT25lPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9saT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXMtMlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TZXJ2aWNlcyBTdHlsZSBUd288L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2xpPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlcy0zXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNlcnZpY2VzIFN0eWxlIFRocmVlPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9saT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXMtNFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TZXJ2aWNlcyBTdHlsZSBGb3VyPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9saT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZS1kZXRhaWxzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNlcnZpY2UgRGV0YWlsczwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvbGk+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L3VsPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2xpPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8TGluayBocmVmPVwiLyNcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgUGFnZXMgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9uLWRvd24nPjwvaT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L0xpbms+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcmljaW5nXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlByaWNpbmc8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2xpPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWFtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlRlYW08L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2xpPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZXN0aW1vbmlhbHNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+VGVzdGltb25pYWxzPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9saT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFxXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZhcTwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvbGk+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17ZSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIFVzZXIgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9uLWRvd24nPjwvaT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9MaW5rPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Mb2dpbjwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8L2xpPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNpZ24gVXA8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPC9saT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPC91bD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2xpPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZXJtcy1jb25kaXRpb25zXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlRlcm1zICYgQ29uZGl0aW9uczwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvbGk+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Qcml2YWN5IFBvbGljeTwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvbGk+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbWluZy1zb29uXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkNvbWluZyBTb29uPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9saT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TG9nIEluPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9saT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TaWduIFVwPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9saT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8TGluayBocmVmPVwiLzQwNFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj40MDQgZXJyb3I8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2xpPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPC91bD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9saT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPExpbmsgaHJlZj1cIi8jXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIE5ld3MgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9uLWRvd24nPjwvaT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ld3MtZ3JpZFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Tm91dGF0aTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8TGluayBocmVmPVwiL25ld3MtZ3JpZFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5OZXdzIEdyaWQ8L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L2xpPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzLXJpZ2h0LXNpZGViYXJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TmV3cyBSaWdodCBTaWRlYmFyPC9hPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPC9saT4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3cy1kZXRhaWxzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk5ld3MgRGV0YWlsczwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvbGk+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3VsPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiLyNcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgQ29udGFjdCA8aSBjbGFzc05hbWU9J2J4IGJ4LWNoZXZyb24tZG93bic+PC9pPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC0yXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Db250YWN0IFN0eWxlIE9uZTwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvbGk+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3QtMlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Db250YWN0IFN0eWxlIFR3bzwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9MaW5rPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvbGk+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3VsPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnRyYSBpbiBDb250IDxpIGNsYXNzTmFtZT1cImJ4IGJ4LWxvZy1pbi1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwic291cmNlUm9vdCI6IiJ9