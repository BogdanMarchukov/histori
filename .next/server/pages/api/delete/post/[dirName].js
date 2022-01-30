"use strict";
(() => {
var exports = {};
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 5538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deletePostHandler)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serverMiddleware_authorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3391);
/* harmony import */ var _serverMiddleware_admin_heckMiddlewre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6045);
/* harmony import */ var _models_ArticleHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7099);




const cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({
  methods: ["POST"]
});
async function deletePostHandler(req, res) {
  // @ts-ignore
  const {
    dirName,
    id
  } = req.query;
  await (0,_serverMiddleware_authorizationMiddleware__WEBPACK_IMPORTED_MODULE_1__/* .authorizationMiddleware */ .u)(req, res, cors);
  await (0,_serverMiddleware_admin_heckMiddlewre__WEBPACK_IMPORTED_MODULE_2__/* .adminCheckMiddleware */ .r)(req, res, cors);
  const articleHandler = new _models_ArticleHandler__WEBPACK_IMPORTED_MODULE_3__/* .ArticleHandler */ .j(null, id, 'delete', dirName);

  try {
    await articleHandler.actionArticle();
    res.status(200);
    res.json({
      error: false,
      errorMassage: 'Статья удаленна'
    });
  } catch (e) {
    res.status(500);
    res.json({
      error: false,
      errorMassage: 'Не удалось удалить'
    });
  }
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
var __webpack_exports__ = __webpack_require__.X(0, [345,753,391,680,111], () => (__webpack_exec__(5538)));
module.exports = __webpack_exports__;

})();