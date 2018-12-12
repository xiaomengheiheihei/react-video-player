(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["typeOf"] = factory();
	else
		root["typeOf"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/carlos/Desktop/react-video-player/src/index.js: Unexpected token (9:12)\\n\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m    render () {\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  9 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mPlayer\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m        )\\u001b[0m\\n    at Parser.raise (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:4028:15)\\n    at Parser.unexpected (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:5359:16)\\n    at Parser.parseExprAtom (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:6518:20)\\n    at Parser.parseExprSubscripts (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:6081:21)\\n    at Parser.parseMaybeUnary (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:6060:21)\\n    at Parser.parseExprOps (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:5945:21)\\n    at Parser.parseMaybeConditional (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:5917:21)\\n    at Parser.parseMaybeAssign (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:5864:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:6676:28)\\n    at Parser.parseExprAtom (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:6450:21)\\n    at Parser.parseExprSubscripts (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:6081:21)\\n    at Parser.parseMaybeUnary (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:6060:21)\\n    at Parser.parseExprOps (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:5945:21)\\n    at Parser.parseMaybeConditional (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:5917:21)\\n    at Parser.parseMaybeAssign (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:5864:21)\\n    at Parser.parseExpression (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:5817:21)\\n    at Parser.parseReturnStatement (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:7836:28)\\n    at Parser.parseStatementContent (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:7512:21)\\n    at Parser.parseStatement (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:7478:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:8046:23)\\n    at Parser.parseBlockBody (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:8033:10)\\n    at Parser.parseBlock (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:8022:10)\\n    at Parser.parseFunctionBody (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:7130:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:7112:10)\\n    at Parser.parseMethod (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:7054:10)\\n    at Parser.pushClassMethod (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:8442:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:8367:12)\\n    at Parser.parseClassMember (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:8309:10)\\n    at /Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:8263:16\\n    at Parser.withTopicForbiddingContext (/Users/carlos/Desktop/react-video-player/node_modules/@babel/parser/lib/index.js:7402:14)\");\n\n//# sourceURL=webpack://typeOf/./src/index.js?");

/***/ })

/******/ })["default"];
});