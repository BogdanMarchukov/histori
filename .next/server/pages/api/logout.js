"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 9549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8883);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_TokenHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4345);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7548);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3363);




(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
async function handler(req, res) {
  if (req.method === 'GET') {
    const {
      token,
      role
    } = req.cookies;

    if (token) {
      const {
        payload
      } = await _models_TokenHandler__WEBPACK_IMPORTED_MODULE_1__/* .TokenHandler.decodedPayloadRefresh */ .M.decodedPayloadRefresh(token);
      const id = new mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId(payload);
      const tokenHandler = new _models_TokenHandler__WEBPACK_IMPORTED_MODULE_1__/* .TokenHandler */ .M(id);
      await tokenHandler.deleteTokenMongo();
      res.status(200).setHeader("Set-Cookie", [cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize("token", '', {
        httpOnly: true,
        secure: false,
        maxAge: 0,
        path: "/"
      }), cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize("role", '', {
        httpOnly: true,
        secure: false,
        maxAge: 0,
        path: "/"
      })]);
      res.json({
        error: false,
        errorMassage: ''
      });
    } else res.json({
      error: false,
      errorMassage: ''
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

/***/ 8883:
/***/ ((module) => {

module.exports = require("cookie");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [345], () => (__webpack_exec__(9549)));
module.exports = __webpack_exports__;

})();