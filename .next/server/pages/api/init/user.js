"use strict";
(() => {
var exports = {};
exports.id = 400;
exports.ids = [400];
exports.modules = {

/***/ 4529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initMiddleware)
/* harmony export */ });
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);
/* harmony import */ var _models_TokenHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4345);
/* harmony import */ var _models_UserHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9753);
/* harmony import */ var _models_AvatarHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
async function initMiddleware(req, res) {
  if (req.method === 'POST') {
    await handler(req, res);
  } else {
    res.status(405).json({
      error: true,
      errorMassage: 'Данный метод запрещен'
    });
  }
}

async function handler(req, res) {
  const {
    payload
  } = req.body.userId;
  const mongoToken = await _models_TokenHandler__WEBPACK_IMPORTED_MODULE_1__/* .TokenHandler.searchTokenMongo */ .M.searchTokenMongo(payload);

  if (mongoToken) {
    const {
      _id
    } = mongoToken;
    const userMongo = await _models_UserHandler__WEBPACK_IMPORTED_MODULE_2__/* .UserHandler.searchByEmail */ .V.searchByEmail(null, _id);
    const userHandler = new _models_UserHandler__WEBPACK_IMPORTED_MODULE_2__/* .UserHandler */ .V(userMongo);
    const avatarHandler = new _models_AvatarHandler__WEBPACK_IMPORTED_MODULE_3__/* .AvatarHandler */ .r(await _models_AvatarHandler__WEBPACK_IMPORTED_MODULE_3__/* .AvatarHandler.gerAvatar */ .r.gerAvatar(_id));
    res.status(200).json(JSON.stringify(_objectSpread(_objectSpread({}, userHandler.userDto()), avatarHandler.avatarDto())));
  } else {
    res.status(403).json({
      error: true,
      errorMassage: 'Пользователь не найден'
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [345,753,69], () => (__webpack_exec__(4529)));
module.exports = __webpack_exports__;

})();