"use strict";
(() => {
var exports = {};
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ avatarHandler)
});

// EXTERNAL MODULE: ./serverMiddleware/authorizationMiddleware.ts
var authorizationMiddleware = __webpack_require__(3391);
// EXTERNAL MODULE: ./models/TokenHandler.ts
var TokenHandler = __webpack_require__(4345);
;// CONCATENATED MODULE: ./multer/storege.ts
const multer = __webpack_require__(8633);

function multerStorage(pathName, userId) {
  return {
    configStorage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, pathName);
      },
      filename: function (req, file, cb) {
        const extension = file.originalname.toString().split(".");
        cb(null, `${userId}.${extension[extension.length - 1]}`);
      }
    })
  };
}
;// CONCATENATED MODULE: ./multer/filter.ts
function filter(mimetype) {
  return {
    configFilter: function fileFilter(req, file, cb) {
      const candidateFile = mimetype.includes(file.mimetype);

      if (candidateFile) {
        cb(null, true);
      } else {
        cb(new Error('I don\'t have a clue!'));
      }
    }
  };
}
;// CONCATENATED MODULE: ./serverMiddleware/file/saveImgFileMiddleware.ts




const {
  v4: uuidv4
} = __webpack_require__(1231);

const saveImgFileMiddleware_multer = __webpack_require__(8633);

async function saveImgFileMiddleware(req, res, next) {
  const {
    configStorage
  } = multerStorage('public/img/avatar', uuidv4());
  const {
    configFilter
  } = filter(['image/jpeg', 'image/png', 'image/svg+xml']);
  return new Promise(async (resolve, reject) => {
    const {
      token
    } = req.cookies;
    const {
      payload
    } = await TokenHandler/* TokenHandler.decodedPayloadRefresh */.M.decodedPayloadRefresh(token);
    const upload = saveImgFileMiddleware_multer({
      storage: configStorage,
      fileFilter: configFilter,
      fileSize: 10000000
    }).single('userAvatar');
    upload(req, res, error => {
      if (error) {
        reject(error);
      } else {
        resolve({
          userId: payload,
          patch: `${req.file.filename}`
        });
      }
    });
  });
}
// EXTERNAL MODULE: external "cors"
var external_cors_ = __webpack_require__(479);
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_);
// EXTERNAL MODULE: ./models/AvatarHandler.ts + 1 modules
var AvatarHandler = __webpack_require__(69);
;// CONCATENATED MODULE: ./pages/api/create/avatar.ts




const cors = external_cors_default()({
  methods: ['GET', "POST"]
});
const config = {
  api: {
    bodyParser: false
  }
};
async function avatarHandler(req, res) {
  try {
    const userId = await (0,authorizationMiddleware/* authorizationMiddleware */.u)(req, res, cors);

    try {
      const pathName = await saveImgFileMiddleware(req, res, cors);
      const avatarHandler = new AvatarHandler/* AvatarHandler */.r(undefined, pathName.userId, pathName.patch);

      try {
        const newAvatar = await avatarHandler.saveAvatar();
        const userAvatar = {
          saveResult: true,
          patch: newAvatar.avatarPath
        };
        res.json(userAvatar);
      } catch (e) {
        console.log(e, 'error тут');
        res.status(415);
        res.json({
          error: true,
          errorMassage: 'Ошибка сохранения!'
        });
      }
    } catch (e) {
      res.status(415);
      res.json({
        error: true,
        errorMassage: 'Ошибка сохранения!'
      });
    }
  } catch (e) {
    console.log(e);
  } //console.log(req.body)

}

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

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

/***/ 8633:
/***/ ((module) => {

module.exports = require("multer");

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
var __webpack_exports__ = __webpack_require__.X(0, [345,391,69], () => (__webpack_exec__(2536)));
module.exports = __webpack_exports__;

})();