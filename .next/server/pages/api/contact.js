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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_config_nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/config/nodemailer */ \"(api)/./app/config/nodemailer.js\");\n\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n        try {\n            await _app_config_nodemailer__WEBPACK_IMPORTED_MODULE_0__.transporter.sendMail({\n                ..._app_config_nodemailer__WEBPACK_IMPORTED_MODULE_0__.mailOptions,\n                subject: `Nuevo mensaje de ${data.nombre}`,\n                text: `¡Hola! Has recibido un nuevo mensaje de ${data.nombre}.\\n\\nConsulta:\\n${data.mensaje}`,\n                html: `\n          <h1>¡Hola!</h1>\n          <p>Has recibido un nuevo mensaje de <strong>${data.nombre}</strong>.</p>\n          <h2>Datos de contacto:</h2>\n          <p>Correo: ${data.email}</p>\n          <p>Teléfono: ${data.telefono}</p>\n          <h2>Consulta:</h2>\n          <p>${data.mensaje}</p>\n          <p>¡Revisa tu bandeja para responder!</p>\n        `\n            });\n            console.log(\"enviadisimo\");\n            return res.status(200).json({\n                success: \"true\"\n            });\n        } catch (error) {\n            console.log(error);\n            return res.status(400).json({\n                message: \"babadddd\"\n            });\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1RTtBQUV2RSxNQUFNRSxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDbEMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtRQUNyQixJQUFJO1lBQ0YsTUFBTVAsd0VBQW9CLENBQUM7Z0JBQ3pCLEdBQUdDLCtEQUFXO2dCQUNkUSxTQUFTLENBQUMsaUJBQWlCLEVBQUVILEtBQUtJLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQ0MsTUFBTSxDQUFDLHdDQUF3QyxFQUFFTCxLQUFLSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUVKLEtBQUtNLE9BQU8sQ0FBQyxDQUFDO2dCQUM3RkMsTUFBTSxDQUFDOztzREFFdUMsRUFBRVAsS0FBS0ksTUFBTSxDQUFDOztxQkFFL0MsRUFBRUosS0FBS1EsS0FBSyxDQUFDO3VCQUNYLEVBQUVSLEtBQUtTLFFBQVEsQ0FBQzs7YUFFMUIsRUFBRVQsS0FBS00sT0FBTyxDQUFDOztRQUVwQixDQUFDO1lBQ0g7WUFDQUksUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT2IsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFPO1FBQ2hELEVBQUUsT0FBT0MsT0FBTztZQUNkTCxRQUFRQyxHQUFHLENBQUNJO1lBQ1osT0FBT2pCLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVHLFNBQVM7WUFBVztRQUNwRDtJQUNGLENBQUM7QUFDSDtBQUVBLGlFQUFlcEIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsZXhpcmVkLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFuc3BvcnRlciwgbWFpbE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYXBwL2NvbmZpZy9ub2RlbWFpbGVyXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICAgIC4uLm1haWxPcHRpb25zLFxuICAgICAgICBzdWJqZWN0OiBgTnVldm8gbWVuc2FqZSBkZSAke2RhdGEubm9tYnJlfWAsXG4gICAgICAgIHRleHQ6IGDCoUhvbGEhIEhhcyByZWNpYmlkbyB1biBudWV2byBtZW5zYWplIGRlICR7ZGF0YS5ub21icmV9LlxcblxcbkNvbnN1bHRhOlxcbiR7ZGF0YS5tZW5zYWplfWAsXG4gICAgICAgIGh0bWw6IGBcbiAgICAgICAgICA8aDE+wqFIb2xhITwvaDE+XG4gICAgICAgICAgPHA+SGFzIHJlY2liaWRvIHVuIG51ZXZvIG1lbnNhamUgZGUgPHN0cm9uZz4ke2RhdGEubm9tYnJlfTwvc3Ryb25nPi48L3A+XG4gICAgICAgICAgPGgyPkRhdG9zIGRlIGNvbnRhY3RvOjwvaDI+XG4gICAgICAgICAgPHA+Q29ycmVvOiAke2RhdGEuZW1haWx9PC9wPlxuICAgICAgICAgIDxwPlRlbMOpZm9ubzogJHtkYXRhLnRlbGVmb25vfTwvcD5cbiAgICAgICAgICA8aDI+Q29uc3VsdGE6PC9oMj5cbiAgICAgICAgICA8cD4ke2RhdGEubWVuc2FqZX08L3A+XG4gICAgICAgICAgPHA+wqFSZXZpc2EgdHUgYmFuZGVqYSBwYXJhIHJlc3BvbmRlciE8L3A+XG4gICAgICAgIGAsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW52aWFkaXNpbW9cIik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiBcInRydWVcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJiYWJhZGRkZFwiIH0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJ0cmFuc3BvcnRlciIsIm1haWxPcHRpb25zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5Iiwic2VuZE1haWwiLCJzdWJqZWN0Iiwibm9tYnJlIiwidGV4dCIsIm1lbnNhamUiLCJodG1sIiwiZW1haWwiLCJ0ZWxlZm9ubyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

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