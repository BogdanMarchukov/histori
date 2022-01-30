"use strict";
exports.id = 414;
exports.ids = [414];
exports.modules = {

/***/ 4414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(2744);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(7561);
// EXTERNAL MODULE: ./redux/types/indexTyps.ts
var indexTyps = __webpack_require__(908);
;// CONCATENATED MODULE: ./redux/redusers/homePageReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initHomePage = {
  registerWin: false,
  pathAvatar: null,
  registerTitle: 'вход',
  validateEmail: null,
  validatePassword: null,
  emailValue: null,
  passwordValue: null,
  profileWindow: false,
  loading: false,
  alert: {
    alertMassage: null,
    alertStart: false,
    alertType: "error"
  },
  loadMini: false
};
const homePageReducer = (state = initHomePage, action) => {
  switch (action.type) {
    case indexTyps/* ActionTypes.OPEN_WINDOW_REGISTER */.M.OPEN_WINDOW_REGISTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        registerWin: !state.registerWin,
        validatePassword: initHomePage.validatePassword,
        validateEmail: initHomePage.validateEmail,
        registerTitle: initHomePage.registerTitle
      });

    case indexTyps/* ActionTypes.INIT_USER_SSR */.M.INIT_USER_SSR:
      return _objectSpread(_objectSpread({}, state), {}, {
        pathAvatar: action.payload.pathAvatar
      });

    case indexTyps/* ActionTypes.INIT_USER */.M.INIT_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        pathAvatar: action.payload.pathAvatar
      });

    case indexTyps/* ActionTypes.INIT_ACCOUNT */.M.INIT_ACCOUNT:
      return _objectSpread(_objectSpread({}, state), {}, {
        pathAvatar: action.payload.pathAvatar
      });

    case indexTyps/* ActionTypes.UPDATE_USER_REDUCER */.M.UPDATE_USER_REDUCER:
      return _objectSpread(_objectSpread({}, state), {}, {
        pathAvatar: action.payload.pathAvatar
      });

    case indexTyps/* ActionTypes.REGISTER_INPUT_EMAIL_VALIDATION */.M.REGISTER_INPUT_EMAIL_VALIDATION:
      return _objectSpread(_objectSpread({}, state), {}, {
        validateEmail: "resultEmail" in action.payload ? action.payload.resultEmail : null,
        emailValue: "inputValue" in action.payload ? action.payload.inputValue : null
      });

    case indexTyps/* ActionTypes.REGISTER_INPUT_PASSWORD_VALIDATION */.M.REGISTER_INPUT_PASSWORD_VALIDATION:
      return _objectSpread(_objectSpread({}, state), {}, {
        validatePassword: "resultPassword" in action.payload ? action.payload.resultPassword : null,
        passwordValue: "inputValue" in action.payload ? action.payload.inputValue : null
      });

    case indexTyps/* ActionTypes.OPEN_WINDOW_MINI_PROFILE */.M.OPEN_WINDOW_MINI_PROFILE:
      return _objectSpread(_objectSpread({}, state), {}, {
        profileWindow: action.payload
      });

    case indexTyps/* ActionTypes.LOADER_ON_OFF */.M.LOADER_ON_OFF:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload
      });

    case indexTyps/* ActionTypes.CLOSE_REGISTER_WINDOW */.M.CLOSE_REGISTER_WINDOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        registerWin: false,
        registerTitle: initHomePage.registerTitle
      });

    case indexTyps/* ActionTypes.LOGIN_ERROR */.M.LOGIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        alert: {
          // @ts-ignore
          alertStart: action.payload.error,
          // @ts-ignore
          alertType: action.payload.alertType,
          // @ts-ignore
          alertMassage: action.payload.errorMassage
        }
      });

    case indexTyps/* ActionTypes.RESET_LOGIN_ERROR */.M.RESET_LOGIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        alert: initHomePage.alert
      });

    case indexTyps/* ActionTypes.RESTART_STATE */.M.RESTART_STATE:
      return _objectSpread({}, initHomePage);

    case indexTyps/* ActionTypes.SWITCHING_WINDOW_REGISTER */.M.SWITCHING_WINDOW_REGISTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        registerTitle: action.payload
      });

    case indexTyps/* ActionTypes.MIMI_LOADER_START_STOP */.M.MIMI_LOADER_START_STOP:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadMini: action.payload
      });

    case indexTyps/* ActionTypes.SAVE_AVATAR */.M.SAVE_AVATAR:
      return _objectSpread(_objectSpread({}, state), {}, {
        pathAvatar: action.payload
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./redux/redusers/userReducer.ts
function userReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function userReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { userReducer_ownKeys(Object(source), true).forEach(function (key) { userReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { userReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function userReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initUserState = {
  id: null,
  email: null,
  isActivation: false,
  role: null,
  surname: null,
  userName: null,
  patronymic: null,
  address: null,
  tel: null,
  __v: null,
  accessToken: null
};
const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case indexTyps/* ActionTypes.INIT_USER */.M.INIT_USER:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        // @ts-ignore
        id: action.payload.id,
        // @ts-ignore
        isActivation: action.payload.isActivation,
        // @ts-ignore
        email: action.payload.emailDto,
        // @ts-ignore
        role: action.payload.role,
        // @ts-ignore
        __v: action.payload.__v,
        // @ts-ignore
        patronymic: action.payload.patronymic,
        // @ts-ignore
        tel: action.payload.tel,
        // @ts-ignore
        address: action.payload.address,
        // @ts-ignore
        userName: action.payload.userName,
        // @ts-ignore
        surname: action.payload.surname,
        // @ts-ignore
        accessToken: action.payload.accessToken
      });

    case indexTyps/* ActionTypes.INIT_USER_SSR */.M.INIT_USER_SSR:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        // @ts-ignore
        id: action.payload.id,
        // @ts-ignore
        isActivation: action.payload.isActivation,
        // @ts-ignore
        email: action.payload.emailDto,
        // @ts-ignore
        role: action.payload.role,
        // @ts-ignore
        __v: action.payload.__v,
        // @ts-ignore
        patronymic: action.payload.patronymic,
        // @ts-ignore
        tel: action.payload.tel,
        // @ts-ignore
        address: action.payload.address,
        // @ts-ignore
        userName: action.payload.userName,
        // @ts-ignore
        surname: action.payload.surname
      });

    case indexTyps/* ActionTypes.RESTART_STATE */.M.RESTART_STATE:
      return userReducer_objectSpread({}, initUserState);

    case indexTyps/* ActionTypes.INIT_ACCOUNT */.M.INIT_ACCOUNT:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        id: action.payload.id,
        isActivation: action.payload.isActivation,
        email: action.payload.emailDto,
        role: action.payload.role,
        __v: action.payload.__v,
        patronymic: action.payload.patronymic,
        tel: action.payload.tel,
        address: action.payload.address,
        userName: action.payload.userName,
        surname: action.payload.surname
      });

    case indexTyps/* ActionTypes.UPDATE_USER_REDUCER */.M.UPDATE_USER_REDUCER:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        accessToken: action.payload.accessToken,
        tel: action.payload.tel,
        surname: action.payload.surname,
        userName: action.payload.userName,
        email: action.payload.emailDto,
        __v: action.payload.__v,
        address: action.payload.address,
        id: action.payload.id,
        isActivation: action.payload.isActivation,
        patronymic: action.payload.patronymic,
        role: action.payload.role
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./redux/redusers/accountPageReducer.ts
function accountPageReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function accountPageReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { accountPageReducer_ownKeys(Object(source), true).forEach(function (key) { accountPageReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { accountPageReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function accountPageReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const accountPageReducer_initUserState = {
  editAccountWindow: false
};
const accountPageReducer = (state = accountPageReducer_initUserState, action) => {
  switch (action.type) {
    case indexTyps/* ActionTypes.OPEN_MODEL_WIDOW_EDIT_ACCOUNT */.M.OPEN_MODEL_WIDOW_EDIT_ACCOUNT:
      return accountPageReducer_objectSpread(accountPageReducer_objectSpread({}, state), {}, {
        editAccountWindow: action.payload
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./redux/redusers/textReducer.ts
function textReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function textReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { textReducer_ownKeys(Object(source), true).forEach(function (key) { textReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { textReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function textReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  tableCells: [],
  currentArticle: null,
  _id: null,
  dirName: null,
  paragraphList: null,
  currentArticleCash: null,
  articleList: null,
  editorStatus: null
};
const textReducer = (state = initState, action) => {
  switch (action.type) {
    case indexTyps/* ActionTypes.SAVE_TEXT */.M.SAVE_TEXT:
      return textReducer_objectSpread(textReducer_objectSpread({}, state), {}, {
        currentArticle: action.payload.article.article,
        currentArticleCash: action.payload.article.article,
        tableCells: action.payload.article.tableCells,
        _id: action.payload.article._id.toString(),
        dirName: action.payload.dir,
        articleList: action.payload.articleList
      });

    case indexTyps/* ActionTypes.TABLE_SELECT_SAVE */.M.TABLE_SELECT_SAVE:
      return textReducer_objectSpread(textReducer_objectSpread({}, state), {}, {
        tableCells: [...state.tableCells, action.payload]
      });

    case indexTyps/* ActionTypes.SAVE_PARAGRAPH */.M.SAVE_PARAGRAPH:
      return textReducer_objectSpread(textReducer_objectSpread({}, state), {}, {
        paragraphList: action.payload
      });

    case indexTyps/* ActionTypes.FILTER_NAVIGATION_PARAGRAPH */.M.FILTER_NAVIGATION_PARAGRAPH:
      return textReducer_objectSpread(textReducer_objectSpread({}, state), {}, {
        currentArticle: action.payload
      });

    case indexTyps/* ActionTypes.SELECT_STATUS_EDITOR_TEXT */.M.SELECT_STATUS_EDITOR_TEXT:
      return textReducer_objectSpread(textReducer_objectSpread({}, state), {}, {
        editorStatus: action.payload
      });

    case indexTyps/* ActionTypes.SELECT_DIR_NAME */.M.SELECT_DIR_NAME:
      return textReducer_objectSpread(textReducer_objectSpread({}, state), {}, {
        dirName: action.payload
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./redux/redusers/adminPanelReducer.ts
const adminPanelReducer_initState = {
  linkNameList: null
};
const adminPanelReducer = (state = adminPanelReducer_initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./redux/redusers/indexReduser.ts
function indexReduser_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function indexReduser_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { indexReduser_ownKeys(Object(source), true).forEach(function (key) { indexReduser_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { indexReduser_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function indexReduser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const rootReducer = (0,external_redux_.combineReducers)({
  homePageReducer: homePageReducer,
  userReducer: userReducer,
  accountPageReducer: accountPageReducer,
  textReducer: textReducer,
  adminPanelReducer: adminPanelReducer
});
const reducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_.HYDRATE:
      return indexReduser_objectSpread(indexReduser_objectSpread({}, state), action.payload);

    case 'TICK':
      return rootReducer(state, action);

    default:
      return rootReducer(state, action);
  }
};
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(5694);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
;// CONCATENATED MODULE: ./redux/composeEnhancers.js


const middleware = [(external_redux_thunk_default())];
const composeEnhancers =  false ? 0 : external_redux_.compose;
const enhancer = composeEnhancers((0,external_redux_.applyMiddleware)(...middleware));
;// CONCATENATED MODULE: ./redux/index.ts





const makeStore = context => (0,external_redux_.createStore)(reducer, enhancer); // export an assembled wrapper


const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore, {
  debug: true
});

/***/ })

};
;