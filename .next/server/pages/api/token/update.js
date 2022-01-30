"use strict";
(() => {
var exports = {};
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 5386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handlerUpdateToken)
});

// EXTERNAL MODULE: ./models/TokenHandler.ts
var TokenHandler = __webpack_require__(4345);
;// CONCATENATED MODULE: ./serverMiddleware/refreshToken/validateTokenMiddleware.ts

async function validateTokenMiddleware(req, res, next) {
  const {
    token
  } = req.cookies;
  return new Promise(async (resolve, reject) => {
    if (token) {
      const payloadToken = await TokenHandler/* TokenHandler.decodedPayloadRefresh */.M.decodedPayloadRefresh(token);

      if (payloadToken instanceof Error) {
        // @ts-ignore
        res.status(307).json({
          redirect: true,
          patch: process.env.API_URL
        });
        reject();
      } else {
        const {
          payload
        } = payloadToken;
        resolve(payload);
      }
    } else {
      // @ts-ignore
      res.status(307).json({
        redirect: true,
        patch: process.env.API_URL
      });
      reject();
    }
  });
}
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(7548);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(8883);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
// EXTERNAL MODULE: external "cors"
var external_cors_ = __webpack_require__(479);
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_);
;// CONCATENATED MODULE: ./pages/api/token/update.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const cors = external_cors_default()({
  methods: ['GET']
});
async function handlerUpdateToken(req, res) {
  try {
    const userId = await validateTokenMiddleware(req, res, cors);
    const id = new external_mongodb_.ObjectId(userId);
    const tokenHandler = new TokenHandler/* TokenHandler */.M(id);
    tokenHandler.generateTokens();
    await tokenHandler.replaceToken();
    const responseUser = await fetch(`${process.env.API_URL}/api/init/user`, {
      method: 'POST',
      body: JSON.stringify({
        userId: {
          payload: userId
        }
      }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const userData = await responseUser.json();
    res.setHeader("Set-Cookie", external_cookie_default().serialize("token", tokenHandler.refreshToken || '', {
      httpOnly: true,
      secure: false,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: "/"
    }));
    res.status(200).json(_objectSpread(_objectSpread({}, tokenHandler.tokenDTO()), userData));
  } catch (e) {}
}

/***/ }),

/***/ 8883:
/***/ ((module) => {

module.exports = require("cookie");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [345], () => (__webpack_exec__(5386)));
module.exports = __webpack_exports__;

})();