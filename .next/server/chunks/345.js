exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 4345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ TokenHandler)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7548);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
const Token = __webpack_require__(6353);



const jwt = __webpack_require__(9722);

class TokenHandler {
  constructor(id, accessToken = null, refreshToken = null) {
    this.id = id;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.id = id;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  } // генерация нового токена


  generateTokens() {
    this.accessToken = jwt.sign({
      payload: this.id.valueOf()
    }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30min'
    });
    this.refreshToken = jwt.sign({
      payload: this.id.valueOf()
    }, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d'
    });
  } //  сохранение токена в БД


  async saveToken() {
    const token = await Token.findOne({
      refreshToken: this.refreshToken
    });

    if (!token) {
      const tokenNew = new Token({
        _id: this.id,
        refreshToken: this.refreshToken
      });
      return await tokenNew.save();
    } else {
      token.refreshToken = this.refreshToken;
      return await token.save();
    }
  }

  async replaceToken() {
    // перезапись токена в БД
    try {
      const userToken = await Token.findOne({
        _id: this.id
      });
      userToken.refreshToken = this.refreshToken;
      await userToken.save();
    } catch (e) {
      throw e;
    }
  }

  static async decodedPayloadRefresh(token) {
    // декодирование payload
    try {
      return await jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (e) {
      return e;
    }
  }

  static async decodedPayloadAccess(token) {
    // декодирование payload Access токен
    try {
      return await jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (e) {
      return e;
    }
  }

  static async searchTokenMongo(id) {
    // поиск токина по id
    return Token.findOne({
      _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(id)
    });
  }

  async deleteTokenMongo() {
    // удаления токена из БД
    try {
      const token = await Token.findOne({
        _id: this.id
      });
      token.refreshToken = '';
      token.save();
    } catch (e) {
      throw e;
    }
  }

  tokenDTO() {
    if (typeof this.refreshToken === 'string' && typeof this.accessToken === 'string') {
      return {
        accessToken: this.accessToken,
        refreshToken: this.refreshToken
      };
    } else {
      return {
        accessToken: '',
        refreshToken: ''
      };
    }
  }

}



/***/ }),

/***/ 6353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const token = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  refreshToken: {
    type: String,
    required: false
  }
});
module.exports = models.Token || model('Token', token);

/***/ })

};
;