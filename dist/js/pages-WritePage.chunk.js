exports.ids = [5];
exports.modules = {

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/common/Responsive.tsx + 2 modules
var Responsive = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(14);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(3);

// EXTERNAL MODULE: ./src/store/post.ts
var store_post = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(32);

// EXTERNAL MODULE: external "quill"
var external_quill_ = __webpack_require__(30);
var external_quill_default = /*#__PURE__*/__webpack_require__.n(external_quill_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./src/lib/styles/palette.ts
var palette = __webpack_require__(33);

// EXTERNAL MODULE: external "quill/dist/quill.bubble.css"
var quill_bubble_css_ = __webpack_require__(31);

// CONCATENATED MODULE: ./src/components/write/Editor.tsx


function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  /* \uCD5C\uC18C \uD06C\uAE30 \uC9C0\uC815 \uBC0F padding \uC81C\uAC70 */\n  .ql-editor {\n    padding: 0;\n    min-height: 320px;\n    font-size: 1.125rem;\n    line-height: 1.5;\n  }\n  .ql-editor.ql-blank::before {\n    left: 0px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  font-size: 3rem;\n  outline: none;\n  padding-bottom: 0.5rem;\n  border: none;\n  border-bottom: 1px solid ", ";\n  margin-bottom: 2rem;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  /* \uD398\uC774\uC9C0 \uC704 \uC544\uB798 \uC5EC\uBC31 \uC9C0\uC815 */\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Editor_Editor = function Editor(_ref) {
  var title = _ref.title,
      body = _ref.body,
      onChangeField = _ref.onChangeField;
  var quillElement = Object(external_react_["useRef"])(null); // Quill을 적용할 DivElement를 설정

  var quillInstance = Object(external_react_["useRef"])(null); // Quill 인스턴스를 설정

  Object(external_react_["useEffect"])(function () {
    quillInstance.current = new external_quill_default.a(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요...',
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [[{
          header: '1'
        }, {
          header: '2'
        }], ['bold', 'italic', 'underline', 'strike'], [{
          list: 'ordered'
        }, {
          list: 'bullet'
        }], ['blockquote', 'code-block', 'link', 'image']]
      }
    }); // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events

    var quill = quillInstance.current;

    if (quill) {
      quill.on('text-change', function (delta, oldDelta, source) {
        if (source === 'user') {
          onChangeField({
            key: 'body',
            value: quill.root.innerHTML
          });
        }
      });
    }
  }, [onChangeField]);
  var mounted = Object(external_react_["useRef"])(false);
  Object(external_react_["useEffect"])(function () {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);
  var onChangeTitle = Object(external_react_["useCallback"])(function (e) {
    onChangeField({
      key: 'title',
      value: e.target.value
    });
  }, [onChangeField]);
  return /*#__PURE__*/external_react_default.a.createElement(EditorBlock, null, /*#__PURE__*/external_react_default.a.createElement(TitleInput, {
    placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",
    onChange: onChangeTitle,
    value: title
  }), /*#__PURE__*/external_react_default.a.createElement(QuillWrapper, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    ref: quillElement
  })));
};

var EditorBlock = external_styled_components_default()(Responsive["a" /* default */])(_templateObject());
var TitleInput = external_styled_components_default.a.input(_templateObject2(), palette["a" /* default */].gray[4]);
var QuillWrapper = external_styled_components_default.a.div(_templateObject3());
/* harmony default export */ var write_Editor = (Editor_Editor);
// CONCATENATED MODULE: ./src/containers/write/EditorContainer.tsx








var EditorContainer_EditorContainer = function EditorContainer() {
  var _useRecoilState = Object(external_recoil_["useRecoilState"])(store_post["a" /* editorFormState */]),
      _useRecoilState2 = Object(slicedToArray["a" /* default */])(_useRecoilState, 2),
      editor = _useRecoilState2[0],
      setEditor = _useRecoilState2[1];

  var resetEditorForm = Object(external_recoil_["useResetRecoilState"])(store_post["a" /* editorFormState */]);
  var onChangeField = Object(external_react_["useCallback"])(function (_ref) {
    var key = _ref.key,
        value = _ref.value;
    setEditor(function (oldEditor) {
      return Object(objectSpread2["a" /* default */])({}, oldEditor, Object(defineProperty["a" /* default */])({}, key, value));
    });
  }, [setEditor]);
  Object(external_react_["useEffect"])(function () {
    return function () {
      resetEditorForm();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetEditorForm, setEditor]);
  return /*#__PURE__*/external_react_default.a.createElement(write_Editor, {
    title: editor.title,
    body: editor.body,
    onChangeField: onChangeField
  });
};

/* harmony default export */ var write_EditorContainer = (EditorContainer_EditorContainer);
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./src/components/write/TagBox.tsx




function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  display: flex;\n  margin-top: 0.5rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function TagBox_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  margin-right: 0.5rem;\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    opacity: 0.5;\n  }\n"]);

  TagBox_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function TagBox_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  width: 256px;\n  border: 1px solid ", "; /* \uC2A4\uD0C0\uC77C \uCD08\uAE30\uD654 */\n  input,\n  button {\n    outline: none;\n    border: none;\n    font-size: 1rem;\n  }\n  input {\n    padding: 0.5rem;\n    flex: 1;\n  }\n  button {\n    cursor: pointer;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    border: none;\n    background: ", ";\n    color: white;\n    font-weight: bold;\n    &:hover {\n      background: ", ";\n    }\n  }\n"]);

  TagBox_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function TagBox_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  width: 100%;\n  border-top: 1px solid ", ";\n  padding-top: 2rem;\n  h4 {\n    color: ", ";\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n  }\n"]);

  TagBox_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
var TagItem = external_react_default.a.memo(function (_ref) {
  var tag = _ref.tag,
      onRemove = _ref.onRemove,
      onChangeTags = _ref.onChangeTags;
  return /*#__PURE__*/external_react_default.a.createElement(Tag, {
    onClick: function onClick() {
      return onRemove(tag);
    }
  }, "#", tag);
}); // React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리

var TagList = external_react_default.a.memo(function (_ref2) {
  var tags = _ref2.tags,
      onRemove = _ref2.onRemove;
  return /*#__PURE__*/external_react_default.a.createElement(TagListBlock, null, tags.map(function (tag) {
    return /*#__PURE__*/external_react_default.a.createElement(TagItem, {
      key: tag,
      tag: tag,
      onRemove: onRemove
    });
  }));
});

var TagBox_TagBox = function TagBox(_ref3) {
  var tags = _ref3.tags,
      onChangeTags = _ref3.onChangeTags;

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = Object(external_react_["useState"])([]),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      localTags = _useState4[0],
      setLocalTags = _useState4[1];

  var insertTag = Object(external_react_["useCallback"])(function (tag) {
    if (!tag) return; // 공백이라면 추가하지 않음

    if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음

    var nextTags = [].concat(_toConsumableArray(localTags), [tag]);
    setLocalTags(nextTags);
    onChangeTags(nextTags);
  }, [localTags, onChangeTags]);
  var onRemove = Object(external_react_["useCallback"])(function (tag) {
    var nextTags = localTags.filter(function (t) {
      return t !== tag;
    });
    setLocalTags(nextTags);
    onChangeTags(nextTags);
  }, [localTags, onChangeTags]);
  var onChange = Object(external_react_["useCallback"])(function (e) {
    setInput(e.target.value);
  }, []);
  var onSubmit = Object(external_react_["useCallback"])(function (e) {
    e.preventDefault();
    insertTag(input.trim()); // 앞뒤 공백 없앤 후 등록

    setInput(''); // input 초기화
  }, [input, insertTag]); // tags 값이 바뀔 때

  Object(external_react_["useEffect"])(function () {
    setLocalTags(tags);
  }, [tags]);
  return /*#__PURE__*/external_react_default.a.createElement(TagBoxBlock, null, /*#__PURE__*/external_react_default.a.createElement("h4", null, "\uD0DC\uADF8"), /*#__PURE__*/external_react_default.a.createElement(TagForm, {
    onSubmit: onSubmit
  }, /*#__PURE__*/external_react_default.a.createElement("input", {
    placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694",
    value: input,
    onChange: onChange
  }), /*#__PURE__*/external_react_default.a.createElement("button", {
    type: "submit"
  }, "\uCD94\uAC00")), /*#__PURE__*/external_react_default.a.createElement(TagList, {
    tags: localTags,
    onRemove: onRemove
  }));
};

var TagBoxBlock = external_styled_components_default.a.div(TagBox_templateObject(), palette["a" /* default */].gray[2], palette["a" /* default */].gray[8]);
var TagForm = external_styled_components_default.a.form(TagBox_templateObject2(), palette["a" /* default */].gray[9], palette["a" /* default */].gray[8], palette["a" /* default */].gray[6]);
var Tag = external_styled_components_default.a.div(TagBox_templateObject3(), palette["a" /* default */].gray[6]);
var TagListBlock = external_styled_components_default.a.div(_templateObject4());
/* harmony default export */ var write_TagBox = (TagBox_TagBox);
// CONCATENATED MODULE: ./src/containers/write/TagBoxContainer.tsx







var TagBoxContainer_TagBoxContainer = function TagBoxContainer() {
  var _useRecoilState = Object(external_recoil_["useRecoilState"])(store_post["a" /* editorFormState */]),
      _useRecoilState2 = Object(slicedToArray["a" /* default */])(_useRecoilState, 2),
      editor = _useRecoilState2[0],
      setEditor = _useRecoilState2[1];

  var onChangeTags = Object(external_react_["useCallback"])(function (tags) {
    setEditor(function (oldEditor) {
      return Object(objectSpread2["a" /* default */])({}, oldEditor, {
        tags: tags
      });
    });
  }, [setEditor]);
  return /*#__PURE__*/external_react_default.a.createElement(write_TagBox, {
    tags: editor.tags,
    onChangeTags: onChangeTags
  });
};

/* harmony default export */ var write_TagBoxContainer = (TagBoxContainer_TagBoxContainer);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/lib/apis/post.ts
var apis_post = __webpack_require__(39);

// EXTERNAL MODULE: ./src/lib/hooks/useRequest.tsx
var useRequest = __webpack_require__(38);

// EXTERNAL MODULE: ./src/components/common/Button.tsx
var Button = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/write/WriteActionButtons.tsx


function WriteActionButtons_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  height: 2.125rem;\n  & + & {\n    margin-left: 0.5rem;\n  }\n"]);

  WriteActionButtons_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function WriteActionButtons_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n  button + button {\n    margin-left: 0.5rem;\n  }\n"]);

  WriteActionButtons_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var WriteActionButtons_WriteActionButtons = function WriteActionButtons(_ref) {
  var onCancel = _ref.onCancel,
      onPublish = _ref.onPublish,
      postId = _ref.postId;
  return /*#__PURE__*/external_react_default.a.createElement(WriteActionButtonsBlock, null, /*#__PURE__*/external_react_default.a.createElement(StyledButton, {
    cyan: true,
    onClick: onPublish
  }, "\uD3EC\uC2A4\uD2B8 ", postId ? '수정' : '등록'), /*#__PURE__*/external_react_default.a.createElement(StyledButton, {
    onClick: onCancel
  }, "\uCDE8\uC18C"));
};

var WriteActionButtonsBlock = external_styled_components_default.a.div(WriteActionButtons_templateObject());
/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정 후 서로 간의 여백 지정 */

var StyledButton = external_styled_components_default()(Button["a" /* default */])(WriteActionButtons_templateObject2());
/* harmony default export */ var write_WriteActionButtons = (WriteActionButtons_WriteActionButtons);
// CONCATENATED MODULE: ./src/containers/write/WriteActionButtonsContainer.tsx










var WriteActionButtonsContainer_WriteActionButtonsContainer = function WriteActionButtonsContainer(_ref) {
  var postId = _ref.postId;

  var _useRecoilState = Object(external_recoil_["useRecoilState"])(store_post["b" /* postState */]),
      _useRecoilState2 = Object(slicedToArray["a" /* default */])(_useRecoilState, 1),
      post = _useRecoilState2[0];

  var _useRecoilState3 = Object(external_recoil_["useRecoilState"])(store_post["a" /* editorFormState */]),
      _useRecoilState4 = Object(slicedToArray["a" /* default */])(_useRecoilState3, 1),
      editor = _useRecoilState4[0];

  var _useRequest = Object(useRequest["a" /* default */])(apis_post["e" /* writePostAPI */]),
      _useRequest2 = Object(slicedToArray["a" /* default */])(_useRequest, 3),
      _writePost = _useRequest2[0],
      _ = _useRequest2[1],
      createData = _useRequest2[2];

  var _useRequest3 = Object(useRequest["a" /* default */])(apis_post["d" /* updatePostAPI */]),
      _useRequest4 = Object(slicedToArray["a" /* default */])(_useRequest3, 3),
      _updatePost = _useRequest4[0],
      __ = _useRequest4[1],
      updateData = _useRequest4[2];

  var history = Object(external_react_router_dom_["useHistory"])(); // 성공 혹은 실패시 할 작업

  Object(external_react_["useEffect"])(function () {
    var movePost = function movePost(postData) {
      var _id = postData._id,
          user = postData.user;
      history.push("/@".concat(user.username, "/").concat(_id));
    };

    if (createData) {
      movePost(createData);
    }

    if (updateData) {
      movePost(updateData);
    }
  }, [history, createData, updateData]); // 포스트 등록

  var onPublish = function onPublish() {
    if (post) {
      _updatePost(Object(objectSpread2["a" /* default */])({
        id: post._id
      }, editor));

      return;
    }

    _writePost(Object(objectSpread2["a" /* default */])({}, editor));
  }; // 취소


  var onCancel = function onCancel() {
    history.goBack();
  };

  return /*#__PURE__*/external_react_default.a.createElement(write_WriteActionButtons, {
    onCancel: onCancel,
    onPublish: onPublish,
    postId: postId
  });
};

/* harmony default export */ var write_WriteActionButtonsContainer = (WriteActionButtonsContainer_WriteActionButtonsContainer);
// CONCATENATED MODULE: ./src/containers/write/WriteContainer.tsx








var WriteContainer_WriteContainer = function WriteContainer(_ref) {
  var match = _ref.match;
  var postId = match.params.postId;

  var _useRecoilStateLoadab = Object(external_recoil_["useRecoilStateLoadable"])(Object(store_post["c" /* readPostQuery */])(postId ? postId : null)),
      _useRecoilStateLoadab2 = Object(slicedToArray["a" /* default */])(_useRecoilStateLoadab, 2),
      readPostLoadable = _useRecoilStateLoadab2[0],
      setReadPostLoadable = _useRecoilStateLoadab2[1];

  Object(external_react_["useEffect"])(function () {
    if (readPostLoadable.state === 'hasValue') {
      setReadPostLoadable(readPostLoadable.contents);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [readPostLoadable.state, setReadPostLoadable]);

  switch (readPostLoadable.state) {
    case 'hasValue':
    default:
      return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(write_EditorContainer, null), /*#__PURE__*/external_react_default.a.createElement(write_TagBoxContainer, null), /*#__PURE__*/external_react_default.a.createElement(write_WriteActionButtonsContainer, {
        postId: postId
      }));
  }
};

/* harmony default export */ var write_WriteContainer = (WriteContainer_WriteContainer);
// CONCATENATED MODULE: ./src/pages/WritePage.tsx




var WritePage_WritePage = function WritePage(_ref) {
  var match = _ref.match;
  return /*#__PURE__*/external_react_default.a.createElement(Responsive["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(write_WriteContainer, {
    match: match
  }));
};

/* harmony default export */ var pages_WritePage = __webpack_exports__["default"] = (WritePage_WritePage);

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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editorFormState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return readPostQuery; });
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _lib_apis_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);





var editorFormState = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["atom"])({
  key: _lib_contants__WEBPACK_IMPORTED_MODULE_3__[/* RECOIL_KEY */ "a"].EDITOR_DATA,
  default: {
    title: '',
    body: '',
    tags: []
  }
});
var postState = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["atom"])({
  key: _lib_contants__WEBPACK_IMPORTED_MODULE_3__[/* RECOIL_KEY */ "a"].READ_POST_DATA,
  default: null
});
var readPostQuery = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["selectorFamily"])({
  key: _lib_contants__WEBPACK_IMPORTED_MODULE_3__[/* RECOIL_KEY */ "a"].LIST_POSTS_QUERY,
  get: function get(postId) {
    return /*#__PURE__*/Object(_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _Users_ominseob_Project_ReactProject_blog_blog_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (postId) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", null);

            case 2:
              _context.prev = 2;
              _context.next = 5;
              return Object(_lib_apis_post__WEBPACK_IMPORTED_MODULE_4__[/* readPostAPI */ "b"])(postId);

            case 5:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              console.error(_context.t0);
              throw _context.t0;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));
  },
  set: function set(postId) {
    return function (_ref2, newValue) {
      var set = _ref2.set;
      if (!newValue) return;
      var postData = newValue;
      set(postState, postData);
      set(editorFormState, {
        title: postData.title,
        body: postData.body,
        tags: postData.tags
      });
    };
  }
});

/***/ })

};;