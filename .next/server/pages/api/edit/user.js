"use strict";
(() => {
var exports = {};
exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 3686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ apiUserHandler)
/* harmony export */ });
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _serverMiddleware_authorizationMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3391);
/* harmony import */ var _models_UserHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9753);




(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
const cors = cors__WEBPACK_IMPORTED_MODULE_1___default()({
  methods: ['POST']
});
async function apiUserHandler(req, res) {
  const tokenPayload = await (0,_serverMiddleware_authorizationMiddleware__WEBPACK_IMPORTED_MODULE_2__/* .authorizationMiddleware */ .u)(req, res, cors);
  const reqUserData = new Object(req.body);

  try {
    await _models_UserHandler__WEBPACK_IMPORTED_MODULE_3__/* .UserHandler.updateUser */ .V.updateUser(tokenPayload, reqUserData);
  } catch (e) {
    res.status(404).json({
      error: true,
      errorMassage: 'Пользователь не найден'
    });
  }

  res.status(200).json({
    state: 'ok'
  }); // todo остановился тут
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
var __webpack_exports__ = __webpack_require__.X(0, [345,753,391], () => (__webpack_exec__(3686)));
module.exports = __webpack_exports__;

})();