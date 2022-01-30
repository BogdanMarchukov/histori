"use strict";
(() => {
var exports = {};
exports.id = 83;
exports.ids = [83];
exports.modules = {

/***/ 4707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editHandler)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serverMiddleware_authorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3391);
/* harmony import */ var _serverMiddleware_admin_heckMiddlewre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6045);
/* harmony import */ var _models_ArticleHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7099);




const cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({
  methods: ["POST"]
});
async function editHandler(req, res) {
  // @ts-ignore
  const {
    id
  } = req.query;

  try {
    await (0,_serverMiddleware_authorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__/* .authorizationMiddleware */ .u)(req, res, cors); // авторизация

    await (0,_serverMiddleware_admin_heckMiddlewre__WEBPACK_IMPORTED_MODULE_2__/* .adminCheckMiddleware */ .r)(req, res, cors); // проверка прав admin

    const articleHandler = new _models_ArticleHandler__WEBPACK_IMPORTED_MODULE_3__/* .ArticleHandler */ .j(req.body, id, 'edit'); // @ts-ignore

    const result = await articleHandler.actionArticle();

    if (typeof result === 'object') {
      var _articleHandler$input, _articleHandler$input2;

      const outputData = {
        article: result[0],
        articleList: result[1],
        dir: (_articleHandler$input = (_articleHandler$input2 = articleHandler.inputData) === null || _articleHandler$input2 === void 0 ? void 0 : _articleHandler$input2.categoryName) !== null && _articleHandler$input !== void 0 ? _articleHandler$input : ''
      };
      res.status(200);
      res.json(outputData);
    } else {
      res.status(501);
      res.json({
        error: true,
        errorMassage: 'Не Выпорненно'
      });
    }
  } catch (e) {}
}

/***/ }),

/***/ 6552:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 9379:
/***/ ((module) => {

module.exports = require("draft-js");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [345,753,391,680,111], () => (__webpack_exec__(4707)));
module.exports = __webpack_exports__;

})();