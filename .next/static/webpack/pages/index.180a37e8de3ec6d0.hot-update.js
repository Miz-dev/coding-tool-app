"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/mantine */ \"./src/lib/mantine/index.ts\");\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var width = (0,src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useViewportSize)().width;\n    var largerThanXs = (0,src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(\"xs\");\n    var largerThanSm = (0,src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(\"sm\");\n    var largerThanMd = (0,src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(\"md\");\n    var largerThanLg = (0,src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(\"lg\");\n    var largerThanXl = (0,src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(\"xl\");\n    var handleClick = function() {\n        console.log(\"Hello!\");\n    };\n    var input_w = document.getElementById(\"ratio-w\");\n    var input_h = document.getElementById(\"ratio-h\");\n    var result_pt = document.getElementById(\"pt\");\n    input_w.addEventListener(\"change\", function() {\n        var w = input_w.value - 0;\n        var h = input_h.value - 0;\n        var digit = 3;\n        var result = Math.round(h / w * 100 * Math.pow(10, digit)) / Math.pow(10, digit);\n        result_pt.innerHTML = \"padding-top\\uFF1A\".concat(result, \"%\");\n    }, false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"width: \".concat(width)\n                    }, void 0, false, {\n                        fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"largerThanXs: \".concat(largerThanXs)\n                    }, void 0, false, {\n                        fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"largerThanSm: \".concat(largerThanSm)\n                    }, void 0, false, {\n                        fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"largerThanMd: \".concat(largerThanMd)\n                    }, void 0, false, {\n                        fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"largerThanLg: \".concat(largerThanLg)\n                    }, void 0, false, {\n                        fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"largerThanXl: \".concat(largerThanXl)\n                    }, void 0, false, {\n                        fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                dent: true,\n                onClick: handleClick,\n                className: \"mt-4 block\",\n                children: \"Click me!\"\n            }, void 0, false, {\n                fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                onClick: handleClick,\n                className: \"mt-4 block\",\n                children: \"Click me!\"\n            }, void 0, false, {\n                fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shn/projects/coding-tool-app/src/pages/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"iV0GsKZ7fOcbmTQbV7aKVt2k350=\", false, function() {\n    return [\n        src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useViewportSize,\n        src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery,\n        src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery,\n        src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery,\n        src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery,\n        src_lib_mantine__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtRQUNiQSwwREFBYTtRQUNiQSwwREFBYTs7O0FBTjlCRSxLQUFBQSxJQUFJO0FBaURWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VNZWRpYVF1ZXJ5LCB1c2VWaWV3cG9ydFNpemUgfSBmcm9tIFwic3JjL2xpYi9tYW50aW5lXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VWaWV3cG9ydFNpemUoKTtcbiAgY29uc3QgbGFyZ2VyVGhhblhzID0gdXNlTWVkaWFRdWVyeShcInhzXCIpO1xuICBjb25zdCBsYXJnZXJUaGFuU20gPSB1c2VNZWRpYVF1ZXJ5KFwic21cIik7XG4gIGNvbnN0IGxhcmdlclRoYW5NZCA9IHVzZU1lZGlhUXVlcnkoXCJtZFwiKTtcbiAgY29uc3QgbGFyZ2VyVGhhbkxnID0gdXNlTWVkaWFRdWVyeShcImxnXCIpO1xuICBjb25zdCBsYXJnZXJUaGFuWGwgPSB1c2VNZWRpYVF1ZXJ5KFwieGxcIik7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyFcIik7XG4gIH07XG5cbmNvbnN0IGlucHV0X3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGlvLXdcIik7XG5jb25zdCBpbnB1dF9oID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYXRpby1oXCIpO1xuY29uc3QgcmVzdWx0X3B0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdFwiKTtcblxuaW5wdXRfdy5hZGRFdmVudExpc3RlbmVyIChcbiAgXCJjaGFuZ2VcIixcbiAgKCkgPT4ge1xuICAgIGNvbnN0IHcgPSBpbnB1dF93LnZhbHVlIC0gMDtcbiAgICBjb25zdCBoID0gaW5wdXRfaC52YWx1ZSAtIDA7XG4gICAgY29uc3QgZGlnaXQgPSAzO1xuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgucm91bmQoIChoIC8gdyAqIDEwMCkgKiBNYXRoLnBvdyggMTAsIGRpZ2l0ICkpIC8gTWF0aC5wb3coIDEwLCBkaWdpdCApO1xuXG4gICAgcmVzdWx0X3B0LmlubmVySFRNTCA9IGBwYWRkaW5nLXRvcO+8miR7cmVzdWx0fSVgO1xuICB9LFxuICBmYWxzZVxuKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1mdWNoc2lhLTIwMCB4czpiZy1yZWQtMjAwIHNtOmJnLWFtYmVyLTIwMCBtZDpiZy1saW1lLTIwMCBsZzpiZy1lbWVyYWxkLTIwMCB4bDpiZy1jeWFuLTIwMFwiPlxuICAgICAgICA8ZGl2Pntgd2lkdGg6ICR7d2lkdGh9YH08L2Rpdj5cbiAgICAgICAgPGRpdj57YGxhcmdlclRoYW5YczogJHtsYXJnZXJUaGFuWHN9YH08L2Rpdj5cbiAgICAgICAgPGRpdj57YGxhcmdlclRoYW5TbTogJHtsYXJnZXJUaGFuU219YH08L2Rpdj5cbiAgICAgICAgPGRpdj57YGxhcmdlclRoYW5NZDogJHtsYXJnZXJUaGFuTWR9YH08L2Rpdj5cbiAgICAgICAgPGRpdj57YGxhcmdlclRoYW5MZzogJHtsYXJnZXJUaGFuTGd9YH08L2Rpdj5cbiAgICAgICAgPGRpdj57YGxhcmdlclRoYW5YbDogJHtsYXJnZXJUaGFuWGx9YH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ1dHRvbiBkZW50IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJtdC00IGJsb2NrXCI+XG4gICAgICAgIENsaWNrIG1lIVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJtdC00IGJsb2NrXCI+XG4gICAgICAgIENsaWNrIG1lIVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZU1lZGlhUXVlcnkiLCJ1c2VWaWV3cG9ydFNpemUiLCJIb21lIiwid2lkdGgiLCJsYXJnZXJUaGFuWHMiLCJsYXJnZXJUaGFuU20iLCJsYXJnZXJUaGFuTWQiLCJsYXJnZXJUaGFuTGciLCJsYXJnZXJUaGFuWGwiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dF93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlucHV0X2giLCJyZXN1bHRfcHQiLCJhZGRFdmVudExpc3RlbmVyIiwidyIsInZhbHVlIiwiaCIsImRpZ2l0IiwicmVzdWx0IiwiTWF0aCIsInJvdW5kIiwicG93IiwiaW5uZXJIVE1MIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});