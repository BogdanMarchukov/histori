exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 9753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ UserHandler)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const uuid = __webpack_require__(1231);

const User = __webpack_require__(2080);

const bcrypt = __webpack_require__(6552);

class UserHandler {
  constructor(user) {
    var _user$_id, _user$email, _user$password, _user$isActivation, _user$activatedLink, _user$role, _user$__v, _user$_id$valueOf$toS, _user$surname, _user$userName, _user$patronymic, _user$address, _user$tel;

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "_id", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);

    _defineProperty(this, "isActivation", void 0);

    _defineProperty(this, "activatedLink", void 0);

    _defineProperty(this, "role", void 0);

    _defineProperty(this, "__v", void 0);

    _defineProperty(this, "surname", void 0);

    _defineProperty(this, "userName", void 0);

    _defineProperty(this, "patronymic", void 0);

    _defineProperty(this, "address", void 0);

    _defineProperty(this, "tel", void 0);

    this._id = (_user$_id = user._id) !== null && _user$_id !== void 0 ? _user$_id : null;
    this.email = (_user$email = user.email) !== null && _user$email !== void 0 ? _user$email : null;
    this.password = (_user$password = user.password) !== null && _user$password !== void 0 ? _user$password : null;
    this.isActivation = (_user$isActivation = user.isActivation) !== null && _user$isActivation !== void 0 ? _user$isActivation : null;
    this.activatedLink = (_user$activatedLink = user.activatedLink) !== null && _user$activatedLink !== void 0 ? _user$activatedLink : null;
    this.role = (_user$role = user.role) !== null && _user$role !== void 0 ? _user$role : null;
    this.__v = (_user$__v = user.__v) !== null && _user$__v !== void 0 ? _user$__v : null;
    this.id = (_user$_id$valueOf$toS = user._id.valueOf().toString()) !== null && _user$_id$valueOf$toS !== void 0 ? _user$_id$valueOf$toS : null;
    this.surname = (_user$surname = user.surname) !== null && _user$surname !== void 0 ? _user$surname : null;
    this.userName = (_user$userName = user.userName) !== null && _user$userName !== void 0 ? _user$userName : null;
    this.patronymic = (_user$patronymic = user.patronymic) !== null && _user$patronymic !== void 0 ? _user$patronymic : null;
    this.address = (_user$address = user.address) !== null && _user$address !== void 0 ? _user$address : null;
    this.tel = (_user$tel = user.tel) !== null && _user$tel !== void 0 ? _user$tel : null;
  }

  static async searchByEmail(email = null, id = null) {
    // поиск пользователя из БД по email или id
    try {
      if (email) {
        return await User.findOne({
          email
        });
      }

      if (id) {
        return await User.findById(id);
      }
    } catch (e) {
      return null;
    }
  }

  static async updateUser(id, data) {
    return new Promise(async (resolve, reject) => {
      const updateUser = await User.updateOne({
        _id: id
      }, data);

      if (updateUser) {
        resolve(updateUser);
      } else {
        reject(null);
      }
    });
  }

  static async createUser(email, password, role) {
    // создание нового пользователя
    const hashPassword = await bcrypt.hash(password, 3);
    const newUser = new User({
      email,
      password: hashPassword,
      activatedLink: uuid.v4(),
      role: role
    });

    try {
      return await newUser.save();
    } catch (e) {
      return e;
    }
  }

  userDto() {
    return {
      _id: this._id,
      emailDto: this.email,
      passwordDto: this.password,
      isActivation: this.isActivation,
      activatedLink: this.activatedLink,
      role: this.role,
      __v: this.__v,
      id: this.id,
      patronymic: this.patronymic,
      tel: this.tel,
      address: this.address,
      userName: this.userName,
      surname: this.surname
    };
  }

}



/***/ }),

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

/***/ })

};
;