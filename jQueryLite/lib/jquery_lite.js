/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(htmlElements) {\n    this.htmlElements = htmlElements;\n\n  }\n\n  html(string) {\n\n    if ( string === undefined ) {\n      return this.htmlElements[0].innerHTML;\n    } else {\n      this.htmlElements.forEach((el) => {\n        el.innerHTML = string;\n      });\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(appendix) {\n    let appendString = \"\";\n    if ( typeof appendix === \"string\") {\n      appendString = appendix;\n    } else if ( appendix instanceof HTMLElement) {\n      appendString = appendix.outerHTML;\n    } else {\n      appendix.htmlElements.forEach( (el) => {\n        appendString += el.outerHTML;\n      });\n    }\n\n    this.htmlElements.forEach( (el) => {\n      el.innerHTML += appendString;\n    });\n  }\n\n  addClass(className) {\n\n    let classes = className.split(\" \");\n\n    classes.forEach( (name) =>{\n      this.htmlElements.forEach((el) => {\n        el.classList.add(name);\n      });\n    });\n\n  }\n\n  removeClass(classNames) {\n\n    if (classNames) {\n      this.htmlElements.forEach((el) => {\n        el.classList.remove(classNames);\n      });\n    } else {\n      this.htmlElements.forEach((el) => {\n        el.removeAttribute(\"class\");\n      });\n    }\n  }\n\n  attr(attrName, attrValue){\n    if ( attrValue ) {\n      this.htmlElements.forEach((el) => {\n        el.setAttribute(attrName, attrValue);\n      });\n    } else {\n        return this.htmlElements[0].getAttribute(attrName);\n    }\n  }\n\n  children() {\n    let kids = [];\n\n    this.htmlElements.forEach((el) => {\n      kids = kids.concat(Array.from(el.children));\n    });\n\n    return new DOMNodeCollection(kids);\n  }\n\n  parent() {\n    let bananas = [];\n    // debugger\n    this.htmlElements.forEach((el) => {\n      bananas = bananas.concat([el.parentElement]);\n    });\n\n    let uniqueParents = Array.from(new Set(bananas));\n    return new DOMNodeCollection(uniqueParents);\n  }\n\n  find(selector) {\n    let bananas = [];\n    // debugger\n    this.htmlElements.forEach((el) => {\n      bananas = bananas.concat(Array.from(el.querySelectorAll(selector)));\n    });\n    return new DOMNodeCollection(bananas);\n  }\n\n  remove() {\n    this.htmlElements.forEach((el) => {\n      el.remove();\n    });\n    this.htmlElement = [];\n  }\n\n  on(type,callback){\n    this.htmlElements.forEach( (el) => {\n      el.addEventListener(type,callback);\n      if (!el.event) {\n        el.event = [callback];\n      } else {\n        el.event.concat([callback]);\n      }\n\n    });\n  }\n\n  off(type){\n    this.htmlElements.forEach( (el) => {\n      el.event.forEach((ev) => {\n        el.removeEventListener(type, ev);\n        el.event = [];\n      });\n    });\n  }\n\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\n\nfunction $l(selector) {\n  let nodeArr;\n  let callbacks = [];\n\n  if (selector instanceof Function) {\n    callbacks.push(selector);\n    let stateCheck = setInterval(() => {\n      if (document.readyState === 'complete') {\n        clearInterval(stateCheck);\n        callbacks.forEach((fn)=>{\n          fn();\n        });\n    }\n  }, 100);\n  } else if (selector instanceof HTMLElement ) {\n    nodeArr = [selector];\n  } else {\n    let nodelist = document.querySelectorAll(selector);\n    nodeArr =  Array.from(nodelist);\n  }\n\n  return new DOMNodeCollection(nodeArr);\n}\n\nwindow.$l = $l;\n\n$l.extend = (first_obj,...args) => {\n  args.forEach((arg)=>{\n    let keys = Object.keys(arg);\n    keys.forEach((key)=>{\n      first_obj[key] = arg[key]\n    });\n  });\n  return first_obj;\n};\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });