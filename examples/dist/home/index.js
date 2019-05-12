/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"home/index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./home/index.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../index.js":
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Uppy = __webpack_require__(/*! @uppy/core */ \"../node_modules/@uppy/core/lib/index.js\");\n\nconst Dashboard = __webpack_require__(/*! @uppy/dashboard */ \"../node_modules/@uppy/dashboard/lib/index.js\");\n\nconst XHRUpload = __webpack_require__(/*! @uppy/xhr-upload */ \"../node_modules/@uppy/xhr-upload/lib/index.js\");\n\n__webpack_require__(/*! @uppy/core/dist/style.css */ \"../node_modules/@uppy/core/dist/style.css\");\n\n__webpack_require__(/*! @uppy/dashboard/dist/style.css */ \"../node_modules/@uppy/dashboard/dist/style.css\");\n\nconst getRandomString = __webpack_require__(/*! ./utils/utils */ \"../utils/utils.js\").getRandomString;\n\nfunction FilelibJs(targetElementId, options) {\n  //TODO: Update to production endpoint url\n  const ENDPOINT = 'http://localhost:9000/upload/';\n  const FILE_FIELD_NAME = 'filelib_file';\n\n  try {\n    // Ensure the provided value is a string identifying DOM object\n    if (targetElementId) {\n      if (typeof targetElementId !== 'string') {\n        throw Error('targetElementId must be a typeof string');\n      }\n    } // Verify the targetElementID exits in DOM\n\n\n    if (!document.getElementById(targetElementId)) {\n      throw Error('DOM has no element with given ID:' + targetElementId);\n    }\n\n    let _targetElementID = targetElementId || 'filelib'; // Ensure options is an object if provided\n\n\n    if (options && typeof options !== 'object') {\n      throw Error('Options must be an object');\n    } // Uppy expects `id` value to be unique for every Dashboard plugin\n    // Ref LINK: https://uppy.io/docs/dashboard/#id-39-Dashboard-39\n\n\n    const dashboardId = getRandomString(12);\n    console.log('DashboardId', dashboardId); // Initialize uploader with given options\n\n    let uppy = Uppy();\n    uppy.use(Dashboard, {\n      id: dashboardId,\n      inline: true,\n      target: '#' + _targetElementID,\n      allowMultipleUploads: true,\n      // disables Powered By Uppy tagline from uploader interface\n      proudlyDisplayPoweredByUppy: false\n    }); //TODO: ACCESS_TOKEN ACQUISITION\n\n    uppy.use(XHRUpload, {\n      method: \"POST\",\n      headers: {\n        'FILELIB_ACCESS_TOKEN': 'b76e6cdb-af89-47f5-b73f-0f376311eb7d-ZtTyxhwRYLxfSBJl63HuiGqVo1bcEd7fkmW6'\n      },\n      endpoint: ENDPOINT,\n      formData: true,\n      fieldName: FILE_FIELD_NAME,\n      withCredentials: false\n    });\n    uppy.on('upload-success', (file, response) => {\n      console.log(file.name, response);\n    });\n  } catch (Err) {\n    console.error(Err);\n  }\n}\n\nmodule.exports = FilelibJs;\n\n//# sourceURL=webpack:///../index.js?");

/***/ }),

/***/ "../utils/utils.js":
/*!*************************!*\
  !*** ../utils/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getRandomString(length) {\n  let _length = length || 8;\n\n  var result = '';\n  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n  var charactersLength = characters.length;\n\n  for (var i = 0; i < length; i++) {\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  }\n\n  return result;\n}\n\nmodule.exports = {\n  getRandomString: getRandomString\n};\n\n//# sourceURL=webpack:///../utils/utils.js?");

/***/ }),

/***/ "./home/index.js":
/*!***********************!*\
  !*** ./home/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var filelibjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! filelibjs */ \"../index.js\");\n/* harmony import */ var filelibjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filelibjs__WEBPACK_IMPORTED_MODULE_0__);\n\nvar filelib = filelibjs__WEBPACK_IMPORTED_MODULE_0___default()('filelib', {\n  'yolo': 'swag'\n});\nconsole.log('FILELIB Object', filelib);\n\n//# sourceURL=webpack:///./home/index.js?");

/***/ })

/******/ });