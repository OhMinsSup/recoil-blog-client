exports.ids = [2];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/containers/common/HeaderContainer.tsx + 1 modules
var HeaderContainer = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(35);

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(29);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(4);

// EXTERNAL MODULE: ./src/lib/contants.ts
var contants = __webpack_require__(6);

// EXTERNAL MODULE: ./src/lib/apis/post.ts
var apis_post = __webpack_require__(39);

// CONCATENATED MODULE: ./src/store/posts.ts





var postsState = Object(external_recoil_["atom"])({
  key: contants["a" /* RECOIL_KEY */].LIST_POSTS_DATA,
  default: []
});
var paginationState = Object(external_recoil_["atom"])({
  key: contants["a" /* RECOIL_KEY */].LIST_PAGINATION_DATA,
  default: 1
});
var listPostsQuery = Object(external_recoil_["selectorFamily"])({
  key: contants["a" /* RECOIL_KEY */].LIST_POSTS_QUERY,
  get: function get(_ref) {
    var tag = _ref.tag,
        page = _ref.page,
        username = _ref.username;
    return /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var response;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(apis_post["a" /* listPostsAPI */])({
                tag: tag,
                page: page,
                username: username
              });

            case 3:
              response = _context.sent;
              return _context.abrupt("return", {
                lastPage: parseInt(response.headers['last-page'], 10),
                // 문자열을 숫자로 변환
                posts: response.data
              });

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
  },
  set: function set() {
    return function (_ref3, newValue) {
      var set = _ref3.set;
      if (!newValue) return;
      var postData = newValue;
      set(paginationState, postData.lastPage);
      set(postsState, postData.posts);
    };
  }
});
// EXTERNAL MODULE: ./src/store/user.ts
var store_user = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(32);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./src/components/common/Responsive.tsx + 2 modules
var Responsive = __webpack_require__(37);

// EXTERNAL MODULE: ./src/components/common/Button.tsx
var Button = __webpack_require__(34);

// EXTERNAL MODULE: ./src/components/common/SubInfo.tsx
var SubInfo = __webpack_require__(41);

// EXTERNAL MODULE: ./src/components/common/Tags.tsx
var Tags = __webpack_require__(42);

// EXTERNAL MODULE: ./src/lib/styles/palette.ts
var palette = __webpack_require__(33);

// CONCATENATED MODULE: ./src/components/posts/PostList.tsx


function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  /* \uB9E8 \uC704 \uD3EC\uC2A4\uD2B8\uB294 padding-top \uC5C6\uC74C */\n  &:first-child {\n    padding-top: 0;\n  }\n  & + & {\n    border-top: 1px solid ", ";\n  }\n  h2 {\n    font-size: 2rem;\n    margin-bottom: 0;\n    margin-top: 0;\n    &:hover {\n      color: ", ";\n    }\n  }\n  p {\n    margin-top: 2rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 3rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  margin-top: 3rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var PostList_PostItem = function PostItem(_ref) {
  var post = _ref.post;
  var publishedDate = post.publishedDate,
      user = post.user,
      tags = post.tags,
      title = post.title,
      body = post.body,
      _id = post._id;
  return /*#__PURE__*/external_react_default.a.createElement(PostItemBlock, null, /*#__PURE__*/external_react_default.a.createElement("h2", null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
    to: "/@".concat(user.username, "/").concat(_id)
  }, title)), /*#__PURE__*/external_react_default.a.createElement(SubInfo["a" /* default */], {
    username: user.username,
    publishedDate: new Date(publishedDate),
    hasMarginTop: false
  }), /*#__PURE__*/external_react_default.a.createElement(Tags["a" /* default */], {
    tags: tags
  }), /*#__PURE__*/external_react_default.a.createElement("p", null, body));
};

var PostList_PostList = function PostList(_ref2) {
  var posts = _ref2.posts,
      showWriteButton = _ref2.showWriteButton;
  return /*#__PURE__*/external_react_default.a.createElement(PostListBlock, null, /*#__PURE__*/external_react_default.a.createElement(WritePostButtonWrapper, null, showWriteButton && /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    cyan: true,
    to: "/write"
  }, "\uC0C8 \uAE00 \uC791\uC131\uD558\uAE30")), posts && posts.length > 0 ? /*#__PURE__*/external_react_default.a.createElement("div", null, posts.map(function (post) {
    return /*#__PURE__*/external_react_default.a.createElement(PostList_PostItem, {
      post: post,
      key: post._id
    });
  })) : null);
};

/* harmony default export */ var posts_PostList = (PostList_PostList);
var PostListBlock = external_styled_components_default()(Responsive["a" /* default */])(_templateObject());
var WritePostButtonWrapper = external_styled_components_default.a.div(_templateObject2());
var PostItemBlock = external_styled_components_default.a.div(_templateObject3(), palette["a" /* default */].gray[2], palette["a" /* default */].gray[6]);
// CONCATENATED MODULE: ./src/components/posts/PostListError.tsx


function PostListError_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  margin-top: 3rem;\n"]);

  PostListError_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PostListError_PostListError = function PostListError() {
  return /*#__PURE__*/external_react_default.a.createElement(PostListErrorBlock, null, "\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
};

/* harmony default export */ var posts_PostListError = (PostListError_PostListError);
var PostListErrorBlock = external_styled_components_default()(Responsive["a" /* default */])(PostListError_templateObject());
// CONCATENATED MODULE: ./src/containers/posts/PostListContainer.tsx











var PostListContainer_PostListContainer = function PostListContainer(_ref) {
  var match = _ref.match;
  var location = Object(external_react_router_dom_["useLocation"])();

  var _qs$parse = external_qs_default.a.parse(location.search, {
    ignoreQueryPrefix: true
  }),
      tag = _qs$parse.tag,
      page = _qs$parse.page;

  var username = match.params.username;

  var queryString = Object(objectSpread2["a" /* default */])({
    username: username,
    page: parseInt(String(page || 1), 10)
  }, tag ? {
    tag: String(tag)
  } : {});

  var _useRecoilState = Object(external_recoil_["useRecoilState"])(store_user["b" /* userState */]),
      _useRecoilState2 = Object(slicedToArray["a" /* default */])(_useRecoilState, 1),
      user = _useRecoilState2[0];

  var _useRecoilStateLoadab = Object(external_recoil_["useRecoilStateLoadable"])(listPostsQuery(queryString)),
      _useRecoilStateLoadab2 = Object(slicedToArray["a" /* default */])(_useRecoilStateLoadab, 2),
      listPostsLoadable = _useRecoilStateLoadab2[0],
      setListPostsLoadable = _useRecoilStateLoadab2[1];

  Object(external_react_["useEffect"])(function () {
    console.log(listPostsLoadable.state);

    if (listPostsLoadable.state === 'hasValue') {
      setListPostsLoadable(listPostsLoadable.contents);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [listPostsLoadable.state, setListPostsLoadable, location.search]);

  switch (listPostsLoadable.state) {
    case 'hasError':
      return /*#__PURE__*/external_react_default.a.createElement(posts_PostListError, null);

    case 'loading':
      return null;

    case 'hasValue':
      return /*#__PURE__*/external_react_default.a.createElement(posts_PostList, {
        posts: listPostsLoadable.contents.posts,
        showWriteButton: user
      });
  }
};

/* harmony default export */ var posts_PostListContainer = (PostListContainer_PostListContainer);
// CONCATENATED MODULE: ./src/components/posts/Pagination.tsx



function Pagination_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])([""]);

  Pagination_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Pagination_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  width: 320px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 3rem;\n"]);

  Pagination_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Pagination_Pagination = function Pagination(_ref) {
  var page = _ref.page,
      lastPage = _ref.lastPage,
      username = _ref.username,
      tag = _ref.tag;
  return /*#__PURE__*/external_react_default.a.createElement(PaginationBlock, null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    disabled: page === 1,
    to: page === 1 ? undefined : Pagination_buildLink({
      username: username,
      tag: tag,
      page: page - 1
    })
  }, "\uC774\uC804"), /*#__PURE__*/external_react_default.a.createElement(PageNumber, null, page), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    disabled: page === lastPage,
    to: page === lastPage ? undefined : Pagination_buildLink({
      username: username,
      tag: tag,
      page: page + 1
    })
  }, "\uB2E4\uC74C"));
};

/* harmony default export */ var posts_Pagination = (Pagination_Pagination);

var Pagination_buildLink = function buildLink(_ref2) {
  var username = _ref2.username,
      tag = _ref2.tag,
      page = _ref2.page;
  var query = external_qs_default.a.stringify(Object(objectSpread2["a" /* default */])({
    page: page
  }, tag ? {
    tag: String(tag)
  } : {}));
  return username ? "/@".concat(username, "?").concat(query) : "/?".concat(query);
};

var PaginationBlock = external_styled_components_default.a.div(Pagination_templateObject());
var PageNumber = external_styled_components_default.a.div(Pagination_templateObject2());
// CONCATENATED MODULE: ./src/containers/posts/PaginationContainer.tsx







var PaginationContainer_PaginationContainer = function PaginationContainer(_ref) {
  var match = _ref.match;
  var location = Object(external_react_router_dom_["useLocation"])();
  var lastPage = Object(external_recoil_["useRecoilValue"])(paginationState);
  var posts = Object(external_recoil_["useRecoilValue"])(postsState);
  var username = match.params.username;

  var _qs$parse = external_qs_default.a.parse(location.search, {
    ignoreQueryPrefix: true
  }),
      tag = _qs$parse.tag,
      _qs$parse$page = _qs$parse.page,
      page = _qs$parse$page === void 0 ? 1 : _qs$parse$page;

  if (posts.length === 0) {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement(posts_Pagination, {
    tag: tag,
    username: username,
    page: parseInt(String(page), 10),
    lastPage: lastPage
  });
};

/* harmony default export */ var posts_PaginationContainer = (PaginationContainer_PaginationContainer);
// CONCATENATED MODULE: ./src/pages/PostListPage.tsx





var PostListPage_PostListPage = function PostListPage(_ref) {
  var match = _ref.match;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(HeaderContainer["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(posts_PostListContainer, {
    match: match
  }), /*#__PURE__*/external_react_default.a.createElement(posts_PaginationContainer, {
    match: match
  }));
};

/* harmony default export */ var pages_PostListPage = __webpack_exports__["default"] = (PostListPage_PostListPage);

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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/common/Responsive.tsx



function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 1024px;\n  margin: 0 auto; /* \uC911\uC559 \uC815\uB82C */\n  /* \uBE0C\uB77C\uC6B0\uC800 \uD06C\uAE30\uC5D0 \uB530\uB77C \uAC00\uB85C \uC0AC\uC774\uC988 \uBCC0\uACBD */\n  @media (max-width: 1024px) {\n    width: 768px;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Responsive_Responsive = function Responsive(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/external_react_default.a.createElement(ResponsiveBlock, rest, children);
};

var ResponsiveBlock = external_styled_components_default.a.div(_templateObject());
/* harmony default export */ var common_Responsive = __webpack_exports__["a"] = (Responsive_Responsive);

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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return writePostAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return readPostAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listPostsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removePostAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updatePostAPI; });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


var writePostAPI = function writePostAPI(_ref) {
  var title = _ref.title,
      body = _ref.body,
      tags = _ref.tags;
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/posts', {
    title: title,
    body: body,
    tags: tags
  });
};
var readPostAPI = function readPostAPI(id) {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get("/api/posts/".concat(id));
};
var listPostsAPI = function listPostsAPI(_ref2) {
  var page = _ref2.page,
      username = _ref2.username,
      tag = _ref2.tag;
  var queryString = qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
    page: page,
    username: username,
    tag: tag
  });
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get("/api/posts?".concat(queryString));
};
var removePostAPI = function removePostAPI(id) {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].delete("/api/posts/".concat(id));
};
var updatePostAPI = function updatePostAPI(_ref3) {
  var id = _ref3.id,
      title = _ref3.title,
      body = _ref3.body,
      tags = _ref3.tags;
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].patch("/api/posts/".concat(id), {
    title: title,
    body: body,
    tags: tags
  });
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);


function _templateObject2() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      margin-top: 1rem;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  ", "\n  color: ", ";\n  /* span \uC0AC\uC774\uC5D0 \uAC00\uC6B4\uB383\uC810 \uBB38\uC790 \uBCF4\uC5EC\uC8FC\uAE30*/\n  span + span:before {\n    color: ", ";\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    content: '\\B7'; /* \uAC00\uC6B4\uB383\uC810 \uBB38\uC790 */\n  }\n"], ["\n  ", "\n  color: ", ";\n  /* span \uC0AC\uC774\uC5D0 \uAC00\uC6B4\uB383\uC810 \uBB38\uC790 \uBCF4\uC5EC\uC8FC\uAE30*/\n  span + span:before {\n    color: ", ";\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    content: '\\\\B7'; /* \uAC00\uC6B4\uB383\uC810 \uBB38\uC790 */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SubInfo = function SubInfo(_ref) {
  var username = _ref.username,
      publishedDate = _ref.publishedDate,
      hasMarginTop = _ref.hasMarginTop;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubInfoBlock, {
    hasMarginTop: hasMarginTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/@".concat(username)
  }, username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, new Date(publishedDate).toLocaleDateString()));
};

/* harmony default export */ __webpack_exports__["a"] = (SubInfo);
var SubInfoBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), function (props) {
  return props.hasMarginTop && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
}, _lib_styles_palette__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].gray[6], _lib_styles_palette__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].gray[4]);

/***/ }),

/***/ 42:
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


function _templateObject() {
  var data = Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n  margin-top: 0.5rem;\n  .tag {\n    display: inline-block;\n    color: ", ";\n    text-decoration: none;\n    margin-right: 0.5rem;\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Tags = function Tags(_ref) {
  var tags = _ref.tags;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TagsBlock, null, tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "tag",
      to: "/?tag=".concat(tag),
      key: tag
    }, "#", tag);
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Tags);
var TagsBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].cyan[7], _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].cyan[6]);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(14);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(3);

// EXTERNAL MODULE: ./src/lib/hooks/useRequest.tsx
var useRequest = __webpack_require__(38);

// EXTERNAL MODULE: ./src/lib/apis/auth.ts
var auth = __webpack_require__(16);

// EXTERNAL MODULE: ./src/store/user.ts
var store_user = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(32);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/common/Responsive.tsx + 2 modules
var Responsive = __webpack_require__(37);

// EXTERNAL MODULE: ./src/components/common/Button.tsx
var Button = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/common/Header.tsx


function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  font-weight: 800;\n  margin-right: 1rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  height: 4rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; /* \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8 \uC0AC\uC774\uC5D0 \uC5EC\uBC31\uC744 \uCD5C\uB300\uB85C \uC124\uC815 */\n  .logo {\n    font-size: 1.125rem;\n    font-weight: 800;\n    letter-spacing: 2px;\n  }\n  .right {\n    display: flex;\n    align-items: center;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  position: fixed;\n  width: 100%;\n  background: white;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Header_Header = function Header(_ref) {
  var user = _ref.user,
      onLogout = _ref.onLogout;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(HeaderBlock, null, /*#__PURE__*/external_react_default.a.createElement(Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
    to: "/",
    className: "logo"
  }, "REACTERS"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "right"
  }, user ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(UserInfo, null, user.username), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    onClick: onLogout
  }, "\uB85C\uADF8\uC544\uC6C3")) : /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    to: "/login"
  }, "\uB85C\uADF8\uC778")))), /*#__PURE__*/external_react_default.a.createElement(Spacer, null));
};

var HeaderBlock = external_styled_components_default.a.div(_templateObject());
/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */

var Wrapper = external_styled_components_default()(Responsive["a" /* default */])(_templateObject2());
/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */

var Spacer = external_styled_components_default.a.div(_templateObject3());
var UserInfo = external_styled_components_default.a.div(_templateObject4());
/* harmony default export */ var common_Header = (Header_Header);
// EXTERNAL MODULE: ./src/lib/contants.ts
var contants = __webpack_require__(6);

// CONCATENATED MODULE: ./src/containers/common/HeaderContainer.tsx










var HeaderContainer_HeaderContainer = function HeaderContainer() {
  var history = Object(external_react_router_dom_["useHistory"])();

  var _useRecoilState = Object(external_recoil_["useRecoilState"])(store_user["b" /* userState */]),
      _useRecoilState2 = Object(slicedToArray["a" /* default */])(_useRecoilState, 2),
      user = _useRecoilState2[0],
      setUser = _useRecoilState2[1];

  var _useRequest = Object(useRequest["a" /* default */])(auth["c" /* logoutAPI */]),
      _useRequest2 = Object(slicedToArray["a" /* default */])(_useRequest, 1),
      _logout = _useRequest2[0];

  var onLogout = Object(external_react_["useCallback"])(function () {
    _logout();

    setUser(null);
    localStorage.removeItem(contants["b" /* STORAGE_KEY */].BLOG_USER_DATA);
    history.push('/');
  }, [_logout, setUser, history]);
  return /*#__PURE__*/external_react_default.a.createElement(common_Header, {
    user: user,
    onLogout: onLogout
  });
};

/* harmony default export */ var common_HeaderContainer = __webpack_exports__["a"] = (HeaderContainer_HeaderContainer);

/***/ })

};;