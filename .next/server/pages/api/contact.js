"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./app/config/nodemailer.js":
/*!**********************************!*\
  !*** ./app/config/nodemailer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mailOptions\": () => (/* binding */ mailOptions),\n/* harmony export */   \"transporter\": () => (/* binding */ transporter)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst email = process.env.EMAIL;\nconst pass = process.env.EMAIL_PASS;\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: \"gmail\",\n    auth: {\n        user: email,\n        pass\n    }\n});\nconst mailOptions = {\n    from: email,\n    to: email\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvY29uZmlnL25vZGVtYWlsZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvQztBQUVwQyxNQUFNQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLEtBQUs7QUFDL0IsTUFBTUMsT0FBT0gsUUFBUUMsR0FBRyxDQUFDRyxVQUFVO0FBRTVCLE1BQU1DLGNBQWNQLGlFQUEwQixDQUFDO0lBQ3BEUyxTQUFTO0lBQ1RDLE1BQU07UUFDSkMsTUFBTVY7UUFDTkk7SUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNTyxjQUFjO0lBQ3pCQyxNQUFNWjtJQUNOYSxJQUFJYjtBQUNOLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4aXJlZC8uL2FwcC9jb25maWcvbm9kZW1haWxlci5qcz83OWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCI7XG5cbmNvbnN0IGVtYWlsID0gcHJvY2Vzcy5lbnYuRU1BSUw7XG5jb25zdCBwYXNzID0gcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUztcblxuZXhwb3J0IGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICBzZXJ2aWNlOiBcImdtYWlsXCIsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiBlbWFpbCxcbiAgICBwYXNzLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgZnJvbTogZW1haWwsXG4gIHRvOiBlbWFpbCxcbn07XG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIkVNQUlMIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./app/config/nodemailer.js\n");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_config_nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/config/nodemailer */ \"(api)/./app/config/nodemailer.js\");\n\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n    }\n    try {\n        await _app_config_nodemailer__WEBPACK_IMPORTED_MODULE_0__.transporter.sendMail({\n            from: \"maurolobo.ml@gmail.com\",\n            to: \"maurolobo.ml@gmail.com\",\n            // subject: data.subject,\n            text: \"This is a test string\",\n            html: \"<h1>Test </h1>\"\n        });\n        return res.status(200).json({\n            success: \"true\"\n        });\n    } catch (error) {\n        console.log(error);\n        return res.status(400).json({\n            message: \"babadddd\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1RTtBQUV2RSxNQUFNRSxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDbEMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtJQUN2QixDQUFDO0lBQ0QsSUFBSTtRQUNGLE1BQU1QLHdFQUFvQixDQUFDO1lBQ3pCUyxNQUFNO1lBQ05DLElBQUk7WUFDSix5QkFBeUI7WUFDekJDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0EsT0FBT1IsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQU87SUFDaEQsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPWixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVLLFNBQVM7UUFBVztJQUNwRDtBQUNGO0FBRUEsaUVBQWVqQixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxleGlyZWQvLi9wYWdlcy9hcGkvY29udGFjdC5qcz8zNDkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYW5zcG9ydGVyLCBtYWlsT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9hcHAvY29uZmlnL25vZGVtYWlsZXJcIjtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gIH1cbiAgdHJ5IHtcbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICBmcm9tOiBcIm1hdXJvbG9iby5tbEBnbWFpbC5jb21cIixcbiAgICAgIHRvOiBcIm1hdXJvbG9iby5tbEBnbWFpbC5jb21cIixcbiAgICAgIC8vIHN1YmplY3Q6IGRhdGEuc3ViamVjdCxcbiAgICAgIHRleHQ6IFwiVGhpcyBpcyBhIHRlc3Qgc3RyaW5nXCIsXG4gICAgICBodG1sOiBcIjxoMT5UZXN0IDwvaDE+XCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogXCJ0cnVlXCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiYmFiYWRkZGRcIiB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJ0cmFuc3BvcnRlciIsIm1haWxPcHRpb25zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5Iiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJ0ZXh0IiwiaHRtbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();