"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handlerNext)
/* harmony export */ });
/* harmony import */ var _models_UserHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9753);
/* harmony import */ var _models_TokenHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4345);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8883);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3363);
/* harmony import */ var _models_AvatarHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const bcrypt = __webpack_require__(6552);

(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
async function handlerNext(req, res) {
  if (req.method === 'POST') {
    const {
      email,
      password
    } = req.body;
    const user = await _models_UserHandler__WEBPACK_IMPORTED_MODULE_0__/* .UserHandler.searchByEmail */ .V.searchByEmail(email); // поиск клиента на сервере

    if (user) {
      const userHandler = new _models_UserHandler__WEBPACK_IMPORTED_MODULE_0__/* .UserHandler */ .V(user);
      const {
        passwordDto,
        _id,
        emailDto,
        id,
        isActivation,
        role
      } = userHandler.userDto();
      const passwordCompare = await bcrypt.compare(password, passwordDto); // проверка пароля

      if (!passwordCompare) {
        res.status(403).json({
          error: true,
          errorMassage: "Не верный логин или пароль"
        });
      } else {
        const tokenHandler = new _models_TokenHandler__WEBPACK_IMPORTED_MODULE_1__/* .TokenHandler */ .M(_id);
        tokenHandler.generateTokens(); // создание токена

        await tokenHandler.replaceToken(); // перезапись токена

        const avatarHandler = new _models_AvatarHandler__WEBPACK_IMPORTED_MODULE_4__/* .AvatarHandler */ .r(await _models_AvatarHandler__WEBPACK_IMPORTED_MODULE_4__/* .AvatarHandler.gerAvatar */ .r.gerAvatar(id)); // получение пути Аватар

        const tokenDto = await tokenHandler.tokenDTO();
        const userDto = userHandler.userDto();
        const avatarDto = avatarHandler.avatarDto();
        res.setHeader("Set-Cookie", [cookie__WEBPACK_IMPORTED_MODULE_2___default().serialize("token", tokenHandler.refreshToken || '', {
          httpOnly: true,
          secure: false,
          maxAge: 30 * 24 * 60 * 60 * 1000,
          path: "/"
        }), cookie__WEBPACK_IMPORTED_MODULE_2___default().serialize("role", JSON.stringify(role), {
          httpOnly: true,
          secure: false,
          maxAge: 30 * 24 * 60 * 60 * 1000,
          path: "/"
        })]);
        res.status(200).json(_objectSpread(_objectSpread(_objectSpread({}, tokenDto), userDto), avatarDto)); // отправка на клиент данные пользователя
      }
    } else {
      res.status(403).json({
        error: true,
        errorMassage: "Не верный логин или пароль"
      });
    }
  } else {
    res.status(405).json({
      error: true,
      errorMassage: 'Данный метод запрещен'
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

/***/ 8883:
/***/ ((module) => {

module.exports = require("cookie");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [345,753,69], () => (__webpack_exec__(171)));
module.exports = __webpack_exports__;

})();