/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./js/" + ({"1":"pages-LoginPage","2":"pages-PostListPage","3":"pages-PostPage","4":"pages-RegisterPage","5":"pages-WritePage"}[chunkId]||chunkId) + ".chunk.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECOIL_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STORAGE_KEY; });
var RECOIL_KEY = {
  AUTH_LOGIN_FORM_KEY: 'auth/AUTH_LOGIN_FORM_KEY',
  AUTH_REGISTER_FROM_KEY: 'auth/AUTH_REGISTER_FROM_KEY',
  AUTH_LOGIN: 'auth/AUTH_LOGIN',
  AUTH_REGISTER: 'auth/AUTH_REGISTER',
  USER_DATA: 'user/USER_DATA',
  USER_QUERY: 'user/USER_QUERY',
  EDITOR_DATA: 'write/EDITOR_DATA',
  EDITOR_TAGS_DATA: 'write/EDITOR_TAGS_DATA',
  LIST_POSTS_DATA: 'posts/LIST_POSTS_DATA',
  LIST_PAGINATION_DATA: 'posts/LIST_PAGINATION_DATA',
  LIST_POSTS_QUERY: 'posts/LIST_POSTS_QUERY',
  ORIGINAL_POST_DATA: 'post/ORIGINAL_POST_DATA',
  READ_POST_DATA: 'post/READ_POST_DATA',
  READ_POST_QUERY: 'post/READ_POST_QUERY'
};
var STORAGE_KEY = {
  BLOG_USER_DATA: '@@blog/user'
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // const host =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:4000/api'
//     : process.env.REACT_APP_API_HOST || 'http://localhost:4000/api';

var apiClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true
});
/* harmony default export */ __webpack_exports__["a"] = (apiClient);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || _nonIterableRest();
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userQuery; });
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _lib_apis_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);





var userState = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["atom"])({
  key: _lib_contants__WEBPACK_IMPORTED_MODULE_3__[/* RECOIL_KEY */ "a"].USER_DATA,
  default: null
});
var userQuery = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["selector"])({
  key: _lib_contants__WEBPACK_IMPORTED_MODULE_3__[/* RECOIL_KEY */ "a"].USER_QUERY,
  get: function () {
    var _get = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_lib_apis_auth__WEBPACK_IMPORTED_MODULE_4__[/* checkAPI */ "a"])();

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              throw _context.t0;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function get() {
      return _get.apply(this, arguments);
    }

    return get;
  }(),
  set: function set(_ref, newValue) {
    var _set = _ref.set;

    _set(userState, newValue);
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return registerAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logoutAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkAPI; });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

var loginAPI = function loginAPI(username, password) {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/auth/login', {
    username: username,
    password: password
  });
};
var registerAPI = function registerAPI(username, password) {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/auth/register', {
    username: username,
    password: password
  });
};
var logoutAPI = function logoutAPI() {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/auth/logout');
};
var checkAPI = function checkAPI() {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/api/auth/check');
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-helmet-async");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_common_Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);




var PostListPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-PostListPage";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | pages-PostListPage */ 2).then(__webpack_require__.bind(null, 23));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(23);
    }

    return eval('require.resolve')("./pages/PostListPage");
  }
});
var PostPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-PostPage";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | pages-PostPage */ 3).then(__webpack_require__.bind(null, 24));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(24);
    }

    return eval('require.resolve')("./pages/PostPage");
  }
});
var WritePage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-WritePage";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | pages-WritePage */ 5).then(__webpack_require__.bind(null, 22));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(22);
    }

    return eval('require.resolve')("./pages/WritePage");
  }
});
var LoginPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-LoginPage";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | pages-LoginPage */ 1).then(__webpack_require__.bind(null, 25));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(25);
    }

    return eval('require.resolve')("./pages/LoginPage");
  }
});
var RegisterPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "pages-RegisterPage";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/* import() | pages-RegisterPage */ 4).then(__webpack_require__.bind(null, 26));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(26);
    }

    return eval('require.resolve')("./pages/RegisterPage");
  }
});

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: PostListPage,
    path: ['/@:username', '/'],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: LoginPage,
    path: "/login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: RegisterPage,
    path: "/register"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: WritePage,
    path: "/write",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: WritePage,
    path: "/write/:postId"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: PostPage,
    path: "/@:username/:postId"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_common_Core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _lib_contants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);






var Core = function Core() {
  var _useRecoilStateLoadab = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["useRecoilStateLoadable"])(_store_user__WEBPACK_IMPORTED_MODULE_3__[/* userQuery */ "a"]),
      _useRecoilStateLoadab2 = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useRecoilStateLoadab, 2),
      userLoadable = _useRecoilStateLoadab2[0],
      setUserLoadable = _useRecoilStateLoadab2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var user = localStorage.getItem(_lib_contants__WEBPACK_IMPORTED_MODULE_4__[/* STORAGE_KEY */ "b"].BLOG_USER_DATA);
    if (!user) return;
    setUserLoadable(JSON.parse(user));

    if (userLoadable.state === 'hasValue') {
      setUserLoadable(userLoadable.contents);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [userLoadable.state, setUserLoadable]);
  return null;
};

/* harmony default export */ __webpack_exports__["a"] = (Core);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(11);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(8);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(4);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(12);
var server_default = /*#__PURE__*/__webpack_require__.n(server_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@loadable/server"
var external_loadable_server_ = __webpack_require__(13);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9);

// EXTERNAL MODULE: external "react-helmet-async"
var external_react_helmet_async_ = __webpack_require__(17);

// EXTERNAL MODULE: ./src/App.tsx
var App = __webpack_require__(19);

// CONCATENATED MODULE: ./src/server/Html.tsx


function Html(_ref) {
  var content = _ref.content,
      styledElement = _ref.styledElement,
      extractor = _ref.extractor,
      helmet = _ref.helmet;
  return /*#__PURE__*/external_react_default.a.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/external_react_default.a.createElement("head", null, helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), styledElement, extractor.getLinkElements(), extractor.getStyleElements(), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, "React App")), /*#__PURE__*/external_react_default.a.createElement("body", null, /*#__PURE__*/external_react_default.a.createElement("noscript", null, "You need to enable JavaScript to run this app."), /*#__PURE__*/external_react_default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), extractor.getScriptElements()));
}

/* harmony default export */ var server_Html = (Html);
// CONCATENATED MODULE: ./src/server/serverRender.tsx











 // asset-manifest.json 에서 파일 경로들을 조회합니다.

var statsFile = external_path_default.a.resolve('./build/loadable-stats.json');

var serverRender = /*#__PURE__*/function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref) {
    var url, loggedIn, cookie, context, sheet, extractor, helmetContext, Root, content, styledElement, html, pageHtml;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, loggedIn = _ref.loggedIn, cookie = _ref.cookie;
            context = {};
            sheet = new external_styled_components_["ServerStyleSheet"]();
            extractor = new external_loadable_server_["ChunkExtractor"]({
              statsFile: statsFile
            });
            helmetContext = {};
            Root = /*#__PURE__*/external_react_default.a.createElement(external_loadable_server_["ChunkExtractorManager"], {
              extractor: extractor
            }, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_async_["HelmetProvider"], {
              context: helmetContext
            }, /*#__PURE__*/external_react_default.a.createElement(external_styled_components_["StyleSheetManager"], {
              sheet: sheet.instance
            }, /*#__PURE__*/external_react_default.a.createElement(external_recoil_["RecoilRoot"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["StaticRouter"], {
              location: url,
              context: context
            }, /*#__PURE__*/external_react_default.a.createElement(App["a" /* default */], null))))));

            try {} catch (e) {
              console.error(e);
            }

            content = server_default.a.renderToString(Root);
            styledElement = sheet.getStyleElement();
            html = /*#__PURE__*/external_react_default.a.createElement(server_Html, {
              content: content,
              styledElement: styledElement,
              extractor: extractor,
              helmet: helmetContext.helmet
            });
            pageHtml = "<!doctype html>\n".concat(server_default.a.renderToStaticMarkup(html));
            return _context.abrupt("return", {
              html: pageHtml
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function serverRender(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ var server_serverRender = (serverRender);
// CONCATENATED MODULE: ./src/server/ssrMiddleware.ts




var ssrMiddleware = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(req, res, next) {
    var result;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return server_serverRender({
              url: req.url // cookie: req.cookies,
              // loggedIn: !!req.cookies['access_token'],

            });

          case 3:
            result = _context.sent;

            if (result) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", next());

          case 6:
            res.status(200).send(result.html);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function ssrMiddleware(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var server_ssrMiddleware = (ssrMiddleware);
// CONCATENATED MODULE: ./src/index.server.ts



var app = external_express_default()();
var serve = external_express_default.a.static(external_path_default.a.resolve('./build'), {
  index: false // "/" 경로에서 index.html 을 보여주지 않도록 설정

});
app.use(serve); // 순서가 중요합니다. serverRender 전에 위치해야 합니다.

app.use(server_ssrMiddleware); // 5000 포트로 서버를 가동합니다.

app.listen(5000, function () {
  console.log('SSR server is listening to http://localhost:5000');
});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("quill");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("quill/dist/quill.bubble.css");

/***/ })
/******/ ]);