"use strict";
(() => {
var exports = {};
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 3217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postsHandler)
/* harmony export */ });
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);


const SocietyArticle = __webpack_require__(8103);

const SocietyArticleList = __webpack_require__(608);

const EconomyArticle = __webpack_require__(3186);

const EconomyArticleList = __webpack_require__(5748);

const JurisprudenceArticle = __webpack_require__(824);

const JurisprudenceArticleList = __webpack_require__(5953);

const StoryArticle = __webpack_require__(4489);

const StoryArticleList = __webpack_require__(7422);

(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
async function postsHandler(req, res) {
  // @ts-ignore
  const {
    query: {
      id,
      dir
    }
  } = req;

  function dirName(dir, category) {
    switch (dir) {
      case 'society':
        if (category === 'Article') {
          return SocietyArticle;
        } else {
          return SocietyArticleList;
        }

      case 'story':
        if (category === 'Article') {
          return StoryArticle;
        } else {
          return StoryArticleList;
        }

      case 'jurisprudence':
        if (category === 'Article') {
          return JurisprudenceArticle;
        } else {
          return JurisprudenceArticleList;
        }

      case 'economy':
        if (category === 'Article') {
          return EconomyArticle;
        } else {
          return EconomyArticleList;
        }

    }
  }

  try {
    let article;

    if (id === '0') {
      article = await dirName(dir, 'Article').findOne({});
    } else {
      article = await dirName(dir, 'Article').findById(id);
    }

    const articleList = await dirName(dir, 'List').findOne({});
    res.status(200);
    res.json({
      article,
      articleList: articleList.articleList,
      dir
    });
  } catch (e) {
    res.json({
      error: true,
      errorMassage: 'Статья отсутствуют'
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

/***/ 9379:
/***/ ((module) => {

module.exports = require("draft-js");

/***/ }),

/***/ 5619:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [680], () => (__webpack_exec__(3217)));
module.exports = __webpack_exports__;

})();