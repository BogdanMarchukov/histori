"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 7542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./models/UserHandler.ts
var UserHandler = __webpack_require__(9753);
// EXTERNAL MODULE: ./utils/dbConnect.js
var dbConnect = __webpack_require__(3363);
// EXTERNAL MODULE: ./models/TokenHandler.ts
var TokenHandler = __webpack_require__(4345);
;// CONCATENATED MODULE: ./models/MailHandler.ts
const nodemailer = __webpack_require__(8123);

class MailHandler {
  constructor(userEmail, link, transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  })) {
    this.userEmail = userEmail;
    this.link = link;
    this.transporter = transporter;
    this.userEmail = userEmail;
    this.link = link;
    this.transporter = transporter;
  }

  async sendMail() {
    // отправка ссылки для активации пользователю
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: this.userEmail,
      subject: `Активация Акаунта на ${process.env.API_URL}`,
      text: '',
      html: `
                <div>
                    <h1>для активации перейдите по ссылке</h1>
                    <a href="${this.link}">${this.link}</a>
                </div>
            `
    });
  }

}


// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(8883);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);
;// CONCATENATED MODULE: ./pages/api/register.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






(0,dbConnect/* default */.Z)();
async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      email,
      password
    } = req.body;
    const candidate = await UserHandler/* UserHandler.searchByEmail */.V.searchByEmail(email); // проверка на регистрацию по email

    if (!candidate) {
      const newUserResult = await UserHandler/* UserHandler.createUser */.V.createUser(email, password, ['user']); // создаем нового пользователя

      const user = new UserHandler/* UserHandler */.V(newUserResult);
      const {
        _id,
        role,
        id,
        isActivation,
        activatedLink
      } = user.userDto();
      const tokenHandler = new TokenHandler/* TokenHandler */.M(_id);
      tokenHandler.generateTokens(); // генерация нового токена

      try {
        await tokenHandler.saveToken(); // сохранение токена в БД

        const mailHandler = new MailHandler(email, `${process.env.API_URL}/api/activate/${activatedLink}`); // отправка письма пользоавтелю

        try {
          var _tokenHandler$accessT;

          await mailHandler.sendMail(); // отправка письма пользоавтелю

          res.setHeader("Set-Cookie", [external_cookie_default().serialize("token", tokenHandler.refreshToken || '', {
            httpOnly: true,
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1000,
            path: "/"
          }), external_cookie_default().serialize("role", JSON.stringify(role), {
            httpOnly: true,
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1001,
            path: "/"
          })]);
          res.status(201).json(_objectSpread(_objectSpread({}, user.userDto()), {}, {
            accessToken: (_tokenHandler$accessT = tokenHandler.accessToken) !== null && _tokenHandler$accessT !== void 0 ? _tokenHandler$accessT : ''
          })); // отправка на клиент данные нового пользователя
        } catch (e) {
          res.status(501).json({
            error: true,
            errorMassage: 'Ошибка email сервиса'
          });
        }
      } catch (e) {
        res.status(500);
      }
    } else {
      res.status(404).json({
        error: true,
        errorMassage: 'Пользователь уже зарегистрирован'
      });
    }
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

/***/ 8123:
/***/ ((module) => {

module.exports = require("nodemailer");

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
var __webpack_exports__ = __webpack_require__.X(0, [345,753], () => (__webpack_exec__(7542)));
module.exports = __webpack_exports__;

})();