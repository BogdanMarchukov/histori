"use strict";
(() => {
var exports = {};
exports.id = 249;
exports.ids = [249];
exports.modules = {

/***/ 7689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handlerInitUser)
/* harmony export */ });
/* harmony import */ var _serverMiddleware_authorizationMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3391);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3363);
/* harmony import */ var _models_mongoose_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2080);
/* harmony import */ var _models_mongoose_User__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_mongoose_User__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_UserHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9753);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_AvatarHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
const cors = cors__WEBPACK_IMPORTED_MODULE_4___default()({
  methods: ['GET']
});
async function handlerInitUser(req, res) {
  try {
    const result = await (0,_serverMiddleware_authorizationMiddleware__WEBPACK_IMPORTED_MODULE_0__/* .authorizationMiddleware */ .u)(req, res, cors);
    const userDb = await _models_mongoose_User__WEBPACK_IMPORTED_MODULE_2___default().findById(result);
    const userHandler = new _models_UserHandler__WEBPACK_IMPORTED_MODULE_3__/* .UserHandler */ .V(userDb);
    const avatar = await _models_AvatarHandler__WEBPACK_IMPORTED_MODULE_5__/* .AvatarHandler.gerAvatar */ .r.gerAvatar(userHandler.id);
    const avatarHandler = new _models_AvatarHandler__WEBPACK_IMPORTED_MODULE_5__/* .AvatarHandler */ .r(avatar);

    const responseData = _objectSpread(_objectSpread({}, userHandler.userDto()), avatarHandler.avatarDto());

    res.status(200).json(responseData);
  } catch (e) {
    console.log(e, 'error');
  }
}

/***/ }),

/***/ 3363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return false;
  }

  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected, 'ok');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);

/***/ }),

/***/ 6552:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 7548:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5619:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 1231:
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [345,753,391,69], () => (__webpack_exec__(7689)));
module.exports = __webpack_exports__;

})();