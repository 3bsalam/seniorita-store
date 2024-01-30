"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./helpers/apollo.js":
/*!***************************!*\
  !*** ./helpers/apollo.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   APOLLO_STATE_PROP_NAME: function() { return /* binding */ APOLLO_STATE_PROP_NAME; },\n/* harmony export */   addApolloState: function() { return /* binding */ addApolloState; },\n/* harmony export */   initializeApollo: function() { return /* binding */ initializeApollo; },\n/* harmony export */   useApollo: function() { return /* binding */ useApollo; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/utilities */ \"./node_modules/@apollo/client/utilities/index.js\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/dist/cjs.js\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst APOLLO_STATE_PROP_NAME = \"__APOLLO_STATE__\";\nlet apolloClient;\nfunction createApolloClient() {\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({\n        ssrMode: \"object\" === \"undefined\",\n        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.HttpLink({\n            uri: \"http://localhost:1337/graphql\",\n            credentials: \"same-origin\",\n            fetch\n        }),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache({\n            typePolicies: {\n                Query: {\n                    fields: {\n                        allPosts: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4__.concatPagination)()\n                    }\n                }\n            }\n        })\n    });\n}\nfunction initializeApollo() {\n    let initialState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;\n    const _apolloClient = apolloClient !== null && apolloClient !== void 0 ? apolloClient : createApolloClient();\n    // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n    // gets hydrated here\n    if (initialState) {\n        // Get existing cache, loaded during client side data fetching\n        const existingCache = _apolloClient.extract();\n        // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(initialState, existingCache, {\n            // combine arrays using object equality (like in sets)\n            arrayMerge: (destinationArray, sourceArray)=>[\n                    ...sourceArray,\n                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(d, s)))\n                ]\n        });\n        // Restore the cache with the merged data\n        _apolloClient.cache.restore(data);\n    }\n    // For SSG and SSR always create a new Apollo Client\n    if (false) {}\n    // Create the Apollo Client once in the client\n    if (!apolloClient) apolloClient = _apolloClient;\n    return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n    if (pageProps === null || pageProps === void 0 ? void 0 : pageProps.props) {\n        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n    }\n    return pageProps;\n}\nfunction useApollo(pageProps) {\n    _s();\n    const state = pageProps[APOLLO_STATE_PROP_NAME];\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state), [\n        state\n    ]);\n    return store;\n}\n_s(useApollo, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2Fwb2xsby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3VDO0FBQ1g7QUFDOUI7QUFDTztBQUU5QixNQUFNTyx5QkFBeUIsbUJBQW1CO0FBRXpELElBQUlDO0FBRUosU0FBU0M7SUFDUCxPQUFPLElBQUlSLHdEQUFZQSxDQUFDO1FBQ3RCUyxTQUFTLGFBQWtCO1FBQzNCQyxNQUFNLElBQUlULG9EQUFRQSxDQUFDO1lBQ2pCVSxLQUFLO1lBQ0xDLGFBQWE7WUFDYkM7UUFDRjtRQUNBQyxPQUFPLElBQUlaLHlEQUFhQSxDQUFDO1lBQ3ZCYSxjQUFjO2dCQUNaQyxPQUFPO29CQUNMQyxRQUFRO3dCQUNOQyxVQUFVZiwwRUFBZ0JBO29CQUM1QjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtBQUNGO0FBRU8sU0FBU2dCO1FBQWlCQyxlQUFBQSxpRUFBZTtJQUM5QyxNQUFNQyxnQkFBZ0JkLHlCQUFBQSwwQkFBQUEsZUFBZ0JDO0lBRXRDLDJGQUEyRjtJQUMzRixxQkFBcUI7SUFDckIsSUFBSVksY0FBYztRQUNoQiw4REFBOEQ7UUFDOUQsTUFBTUUsZ0JBQWdCRCxjQUFjRSxPQUFPO1FBRTNDLG1GQUFtRjtRQUNuRixNQUFNQyxPQUFPcEIsZ0RBQUtBLENBQUNnQixjQUFjRSxlQUFlO1lBQzlDLHNEQUFzRDtZQUN0REcsWUFBWSxDQUFDQyxrQkFBa0JDLGNBQWdCO3VCQUMxQ0E7dUJBQ0FELGlCQUFpQkUsTUFBTSxDQUFDLENBQUNDLElBQzFCRixZQUFZRyxLQUFLLENBQUMsQ0FBQ0MsSUFBTSxDQUFDMUIscURBQU9BLENBQUN3QixHQUFHRTtpQkFFeEM7UUFDSDtRQUVBLHlDQUF5QztRQUN6Q1YsY0FBY1AsS0FBSyxDQUFDa0IsT0FBTyxDQUFDUjtJQUM5QjtJQUNBLG9EQUFvRDtJQUNwRCxJQUFJLEtBQTZCLEVBQUUsRUFBcUJIO0lBQ3hELDhDQUE4QztJQUM5QyxJQUFJLENBQUNkLGNBQWNBLGVBQWVjO0lBRWxDLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTWSxlQUFlQyxNQUFNLEVBQUVDLFNBQVM7SUFDOUMsSUFBSUEsc0JBQUFBLGdDQUFBQSxVQUFXQyxLQUFLLEVBQUU7UUFDcEJELFVBQVVDLEtBQUssQ0FBQzlCLHVCQUF1QixHQUFHNEIsT0FBT3BCLEtBQUssQ0FBQ1MsT0FBTztJQUNoRTtJQUVBLE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTRSxVQUFVRixTQUFTOztJQUNqQyxNQUFNRyxRQUFRSCxTQUFTLENBQUM3Qix1QkFBdUI7SUFDL0MsTUFBTWlDLFFBQVF4Qyw4Q0FBT0EsQ0FBQyxJQUFNb0IsaUJBQWlCbUIsUUFBUTtRQUFDQTtLQUFNO0lBQzVELE9BQU9DO0FBQ1Q7R0FKZ0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hlbHBlcnMvYXBvbGxvLmpzPzVkYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgY29uY2F0UGFnaW5hdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiZGVlcG1lcmdlXCI7XG5pbXBvcnQgaXNFcXVhbCBmcm9tIFwibG9kYXNoL2lzRXF1YWxcIjtcblxuZXhwb3J0IGNvbnN0IEFQT0xMT19TVEFURV9QUk9QX05BTUUgPSBcIl9fQVBPTExPX1NUQVRFX19cIjtcblxubGV0IGFwb2xsb0NsaWVudDtcblxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIixcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9ncmFwaHFsXCIsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgICBmZXRjaCxcbiAgICB9KSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICAgIFF1ZXJ5OiB7XG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICBhbGxQb3N0czogY29uY2F0UGFnaW5hdGlvbigpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xuXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcbiAgLy8gZ2V0cyBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKTtcblxuICAgIC8vIE1lcmdlIHRoZSBleGlzdGluZyBjYWNoZSBpbnRvIGRhdGEgcGFzc2VkIGZyb20gZ2V0U3RhdGljUHJvcHMvZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgY29uc3QgZGF0YSA9IG1lcmdlKGluaXRpYWxTdGF0ZSwgZXhpc3RpbmdDYWNoZSwge1xuICAgICAgLy8gY29tYmluZSBhcnJheXMgdXNpbmcgb2JqZWN0IGVxdWFsaXR5IChsaWtlIGluIHNldHMpXG4gICAgICBhcnJheU1lcmdlOiAoZGVzdGluYXRpb25BcnJheSwgc291cmNlQXJyYXkpID0+IFtcbiAgICAgICAgLi4uc291cmNlQXJyYXksXG4gICAgICAgIC4uLmRlc3RpbmF0aW9uQXJyYXkuZmlsdGVyKChkKSA9PlxuICAgICAgICAgIHNvdXJjZUFycmF5LmV2ZXJ5KChzKSA9PiAhaXNFcXVhbChkLCBzKSlcbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICAvLyBSZXN0b3JlIHRoZSBjYWNoZSB3aXRoIHRoZSBtZXJnZWQgZGF0YVxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKTtcbiAgfVxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbiAgLy8gQ3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcblxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFwb2xsb1N0YXRlKGNsaWVudCwgcGFnZVByb3BzKSB7XG4gIGlmIChwYWdlUHJvcHM/LnByb3BzKSB7XG4gICAgcGFnZVByb3BzLnByb3BzW0FQT0xMT19TVEFURV9QUk9QX05BTUVdID0gY2xpZW50LmNhY2hlLmV4dHJhY3QoKTtcbiAgfVxuXG4gIHJldHVybiBwYWdlUHJvcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8ocGFnZVByb3BzKSB7XG4gIGNvbnN0IHN0YXRlID0gcGFnZVByb3BzW0FQT0xMT19TVEFURV9QUk9QX05BTUVdO1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhzdGF0ZSksIFtzdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImNvbmNhdFBhZ2luYXRpb24iLCJtZXJnZSIsImlzRXF1YWwiLCJBUE9MTE9fU1RBVEVfUFJPUF9OQU1FIiwiYXBvbGxvQ2xpZW50IiwiY3JlYXRlQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImZldGNoIiwiY2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsImFsbFBvc3RzIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsImRhdGEiLCJhcnJheU1lcmdlIiwiZGVzdGluYXRpb25BcnJheSIsInNvdXJjZUFycmF5IiwiZmlsdGVyIiwiZCIsImV2ZXJ5IiwicyIsInJlc3RvcmUiLCJhZGRBcG9sbG9TdGF0ZSIsImNsaWVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwidXNlQXBvbGxvIiwic3RhdGUiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/apollo.js\n"));

/***/ })

});