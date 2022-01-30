exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 69:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ AvatarHandler)
});

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(7548);
;// CONCATENATED MODULE: ./models/FileHandler.ts
const fs = __webpack_require__(5747);

const path = __webpack_require__(5622);

class FileHandler {
  constructor(file) {
    this.file = file;
    this.file = file;
  } //==================удаление файла======================================


  removeFile() {
    return new Promise((resolve, reject) => {
      const rmPath = path.join(__dirname, process.env.DELETE_AVATAR_PATCH);
      fs.rm(path.join(rmPath, this.file.path), err => {
        if (err) {
          reject(err);
        } else resolve(true);
      });
    });
  }

} //*******************************************************************************************



;// CONCATENATED MODULE: ./models/AvatarHandler.ts



const Avatar = __webpack_require__(5449);

class AvatarHandler {
  constructor(mongoAvatar, avatarId, pathAvatar, _id = new external_mongodb_.ObjectId(avatarId)) {
    this.mongoAvatar = mongoAvatar;
    this.avatarId = avatarId;
    this.pathAvatar = pathAvatar;
    this._id = _id;
    this.mongoAvatar = mongoAvatar;
    this.avatarId = avatarId;
    this.pathAvatar = pathAvatar;
    this._id = _id;
  } //====================== сохранение пути аватара в БД======================


  async saveAvatar() {
    return new Promise(async (resolve, reject) => {
      const mongoAvatar = await Avatar.findById(this._id);

      if (mongoAvatar) {
        const fileHandler = new FileHandler({
          path: mongoAvatar.avatarPath
        });
        mongoAvatar.avatarPath = this.pathAvatar;
        const newAvatar = await mongoAvatar.save();
        fileHandler.removeFile().then(data => console.log('Файл аватар удален', data)).catch(err => console.log('Ошибка удаления файла аватар', err));
        resolve(newAvatar);
      } else {
        const avatar = new Avatar({
          _id: new external_mongodb_.ObjectId(this.avatarId),
          avatarPath: this.pathAvatar
        });

        try {
          const avatarData = await avatar.save();
          resolve(avatarData);
        } catch (e) {
          reject(e);
        }
      }
    });
  } //****************************************************************************************
  // получение данных Avatar из БД======================


  static async gerAvatar(id) {
    return await Avatar.findById(new external_mongodb_.ObjectId(id));
  } //====================================== вывод данных===========================


  avatarDto() {
    var _this$mongoAvatar$_id, _this$mongoAvatar, _this$mongoAvatar$ava, _this$mongoAvatar2;

    return {
      avatarId: (_this$mongoAvatar$_id = (_this$mongoAvatar = this.mongoAvatar) === null || _this$mongoAvatar === void 0 ? void 0 : _this$mongoAvatar._id.valueOf().toString()) !== null && _this$mongoAvatar$_id !== void 0 ? _this$mongoAvatar$_id : null,
      pathAvatar: (_this$mongoAvatar$ava = (_this$mongoAvatar2 = this.mongoAvatar) === null || _this$mongoAvatar2 === void 0 ? void 0 : _this$mongoAvatar2.avatarPath) !== null && _this$mongoAvatar$ava !== void 0 ? _this$mongoAvatar$ava : null
    };
  }

} //******************************************************************************




/***/ }),

/***/ 5449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const avatar = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  avatarPath: {
    type: String,
    required: false
  }
});
module.exports = models.Avatar || model('Avatar', avatar);

/***/ })

};
;