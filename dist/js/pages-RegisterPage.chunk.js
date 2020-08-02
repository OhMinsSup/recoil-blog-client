exports.ids = [4];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/auth/AuthTemplate.tsx
var AuthTemplate = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(14);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(3);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/store/auth.ts
var auth = __webpack_require__(44);

// EXTERNAL MODULE: ./src/store/user.ts
var user = __webpack_require__(15);

// EXTERNAL MODULE: ./src/lib/apis/auth.ts
var apis_auth = __webpack_require__(16);

// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(45);

// EXTERNAL MODULE: ./src/lib/hooks/useRequest.tsx
var useRequest = __webpack_require__(38);

// EXTERNAL MODULE: ./src/components/auth/AuthForm.tsx
var AuthForm = __webpack_require__(46);

// CONCATENATED MODULE: ./src/containers/auth/RegisterForm.tsx















var RegisterForm_LoginForm = function LoginForm() {
  var history = Object(external_react_router_dom_["useHistory"])();
  var setUserData = Object(external_recoil_["useSetRecoilState"])(user["b" /* userState */]);

  var _useRecoilState = Object(external_recoil_["useRecoilState"])(auth["b" /* registerFormState */]),
      _useRecoilState2 = Object(slicedToArray["a" /* default */])(_useRecoilState, 2),
      form = _useRecoilState2[0],
      setForm = _useRecoilState2[1];

  var resetRegisterForm = Object(external_recoil_["useResetRecoilState"])(auth["b" /* registerFormState */]);

  var _useState = Object(external_react_["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useRequest = Object(useRequest["a" /* default */])(apis_auth["d" /* registerAPI */]),
      _useRequest2 = Object(slicedToArray["a" /* default */])(_useRequest, 4),
      _register = _useRequest2[0],
      _ = _useRequest2[1],
      userData = _useRequest2[2],
      userError = _useRequest2[3];

  var onChange = Object(external_react_["useCallback"])(function (e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;
    setForm(function (oldForm) {
      return Object(objectSpread2["a" /* default */])({}, oldForm, Object(defineProperty["a" /* default */])({}, name, value));
    });
  }, [setForm]);
  Object(external_react_["useEffect"])(function () {
    resetRegisterForm(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  Object(external_react_["useEffect"])(function () {
    if (userData) {
      setUserData(function (oldUserData) {
        return Object(objectSpread2["a" /* default */])({}, oldUserData, {}, userData);
      });
      Object(utils["a" /* saveUserData */])(userData);
      history.push('/');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [history, userData]);
  Object(external_react_["useEffect"])(function () {
    var _userError$response;

    if (userError && ((_userError$response = userError.response) === null || _userError$response === void 0 ? void 0 : _userError$response.status) === 409) {
      setError('이미 존재하는 계정입니다.');
      return;
    }
  }, [userError, setError]);

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(e) {
      var validation, username, password, passwordConfirm, error;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setError(null);
              e.preventDefault();
              validation = {
                username: function username(text) {
                  if (!/^[a-z0-9-_]{3,16}$/.test(text)) {
                    return '아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다.';
                  }
                },
                password: function password(text) {
                  if (!text) {
                    return '패스워드를 입력해주세요.';
                  }
                },
                passwordConfirm: function passwordConfirm(password, _passwordConfirm) {
                  if (!_passwordConfirm) {
                    return '패스워드 확인을 입력해주세요';
                  }

                  if (password !== _passwordConfirm) {
                    return '패스워드가 같지 않습니다.';
                  }
                }
              };
              username = form.username, password = form.password, passwordConfirm = form.passwordConfirm;
              error = validation.username(username) || validation.password(password) || validation.passwordConfirm(password, passwordConfirm) || null;

              if (!error) {
                _context.next = 8;
                break;
              }

              setError(error);
              return _context.abrupt("return");

            case 8:
              _context.prev = 8;
              _context.next = 11;
              return _register(username, password);

            case 11:
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](8);
              setError('에러 발생!!');
              throw _context.t0;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 13]]);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/external_react_default.a.createElement(AuthForm["b" /* default */], {
    type: AuthForm["a" /* AuthFormType */].REGISTER,
    username: form.username,
    password: form.password,
    passwordConfirm: form.passwordConfirm,
    error: error,
    onSubmit: onSubmit,
    onChange: onChange
  });
};

/* harmony default export */ var RegisterForm = (RegisterForm_LoginForm);
// CONCATENATED MODULE: ./src/pages/RegisterPage.tsx




var RegisterPage_RegisterPage = function RegisterPage() {
  return /*#__PURE__*/external_react_default.a.createElement(AuthTemplate["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(RegisterForm, null));
};

/* harmony default export */ var pages_RegisterPage = __webpack_exports__["default"] = (RegisterPage_RegisterPage);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var palette = {
  gray: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'],
  cyan: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285']
};
/* harmony default export */ __webpack_exports__["a"] = (palette);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject5() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      background: ", ";\n      &:hover {\n        background: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      width: 100%;\n      font-size: 1.125rem;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.25rem 1rem;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n  ", "\n  ", "\n    &:disabled {\n    background: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Button = function Button(props) {
  return props.to ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, Object.assign({}, props, {
    to: props.to,
    cyan: props.cyan ? 'true' : ''
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, props);
};

/* harmony default export */ __webpack_exports__["a"] = (Button);
var buttonStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[8], _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[6], function (props) {
  return props.fullwidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
}, function (props) {
  return props.cyan && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].cyan[5], _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].cyan[4]);
}, _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[3], _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[5]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject4(), buttonStyle);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"])(_templateObject5(), buttonStyle);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRequest; });
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function useRequest(promiseCreator) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState4 = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState6 = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var onRequest = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])( /*#__PURE__*/Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response,
        _args = arguments;
    return _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            _context.next = 4;
            return promiseCreator.apply(void 0, _args);

          case 4:
            response = _context.sent;
            setData(response.data);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            setError(_context.t0);
            throw _context.t0;

          case 12:
            setLoading(false);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  })), // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  var onReset = function onReset() {
    setLoading(false);
    setData(null);
    setError(null);
  };

  return [onRequest, loading, data, error, onReset];
}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject2() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  .logo-area {\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n  }\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);\n  padding: 2rem;\n  width: 360px;\n  background: white;\n  border-radius: 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var AuthTemplate = function AuthTemplate(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AuthTemplateBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WhiteBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/"
  }, "REACTERS")), children));
};

var AuthTemplateBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[2]);
var WhiteBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
/* harmony default export */ __webpack_exports__["a"] = (AuthTemplate);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LoginFormInitState */
/* unused harmony export RegisterFormInitState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginFormState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registerFormState; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


var LoginFormInitState = {
  username: '',
  password: ''
};
var RegisterFormInitState = {
  username: '',
  password: '',
  passwordConfirm: ''
};
var loginFormState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: _lib_contants__WEBPACK_IMPORTED_MODULE_1__[/* RECOIL_KEY */ "a"].AUTH_LOGIN_FORM_KEY,
  default: LoginFormInitState
});
var registerFormState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: _lib_contants__WEBPACK_IMPORTED_MODULE_1__[/* RECOIL_KEY */ "a"].AUTH_REGISTER_FROM_KEY,
  default: RegisterFormInitState
});

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return saveUserData; });
/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

var saveUserData = function saveUserData(userData) {
  var stringObj = JSON.stringify(userData);
  localStorage.setItem(_contants__WEBPACK_IMPORTED_MODULE_0__[/* STORAGE_KEY */ "b"].BLOG_USER_DATA, stringObj);
};

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthFormType; });
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);


function _templateObject4() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  color: red;\n  text-align: center;\n  font-size: 0.875rem;\n  margin-top: 1rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  margin-top: 2rem;\n  text-align: right;\n  a {\n    color: ", ";\n    text-decoration: underline;\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  font-size: 1rem;\n  border: none;\n  border-bottom: 1px solid ", ";\n  padding-bottom: 0.5rem;\n  outline: none;\n  width: 100%;\n  &:focus {\n    color: ", ";\n    border-bottom: 1px solid ", ";\n  }\n\n  & + & {\n    margin-top: 1rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  h3 {\n    margin: 0;\n    color: ", ";\n    margin-bottom: 1rem;\n  }\n\n  button {\n    margin-top: 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var TITLE_MAP = {
  LOGIN: '로그인',
  REGISTER: '회원가입'
};
var AuthFormType;

(function (AuthFormType) {
  AuthFormType["LOGIN"] = "LOGIN";
  AuthFormType["REGISTER"] = "REGISTER";
})(AuthFormType || (AuthFormType = {}));

var AuthForm = function AuthForm(_ref) {
  var type = _ref.type,
      password = _ref.password,
      username = _ref.username,
      passwordConfirm = _ref.passwordConfirm,
      error = _ref.error,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;
  var title = TITLE_MAP[type];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AuthFormBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput, {
    autoComplete: "username",
    name: "username",
    placeholder: "\uC544\uC774\uB514",
    value: username,
    onChange: onChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput, {
    type: "password",
    autoComplete: "new-password",
    name: "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638",
    value: password,
    onChange: onChange
  }), type === AuthFormType.REGISTER && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput, {
    type: "password",
    autoComplete: "new-password",
    name: "passwordConfirm",
    placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
    value: passwordConfirm,
    onChange: onChange
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorMessage, null, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    cyan: true,
    fullwidth: true
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, null, type === AuthFormType.LOGIN ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/register"
  }, "\uD68C\uC6D0\uAC00\uC785") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/login"
  }, "\uB85C\uADF8\uC778")));
};

var AuthFormBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[8]);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input(_templateObject2(), _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[5], _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].cyan[7], _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[7]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(), _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[6], _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].gray[9]);
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
/* harmony default export */ __webpack_exports__["b"] = (AuthForm);

/***/ })

};;