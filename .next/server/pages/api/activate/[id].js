(() => {
var exports = {};
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 2080:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const user = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  isActivation: {
    type: Boolean,
    default: false
  },
  activatedLink: {
    type: String
  },
  role: {
    required: true,
    type: Array
  },
  surname: {
    required: false,
    type: String
  },
  userName: {
    required: false,
    type: String
  },
  patronymic: {
    required: false,
    type: String
  },
  address: {
    required: false,
    type: String
  },
  tel: {
    required: false,
    type: String
  }
});
module.exports = models.User || model('User', user);

/***/ }),

/***/ 7990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models_mongoose_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2080);
/* harmony import */ var _models_mongoose_User__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_mongoose_User__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3363);


(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
async function handler(req, res) {
  const {
    id
  } = req.query;

  try {
    const user = await _models_mongoose_User__WEBPACK_IMPORTED_MODULE_0___default().findOne({
      activatedLink: id
    });

    if (user) {
      user.isActivation = true;
      await user.save(); // @ts-ignore

      res.redirect(process.env.API_URL);
    } else {
      res.status(400).json({
        error: true,
        errorMassage: 'Пользователь не найден'
      });
    }
  } catch (e) {
    res.status(501).json({
      error: true,
      errorMassage: `Ошибка активации ${e}`
    });
  }
}

/***/ }),

/***/ 3363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 5619:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7990));
module.exports = __webpack_exports__;

})();