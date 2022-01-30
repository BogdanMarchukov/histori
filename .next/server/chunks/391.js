"use strict";
exports.id = 391;
exports.ids = [391];
exports.modules = {

/***/ 3391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ authorizationMiddleware)
/* harmony export */ });
/* harmony import */ var _models_TokenHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4345);

async function authorizationMiddleware(req, res, next) {
  const {
    authorization
  } = req.headers;
  return new Promise(async (resolve, reject) => {
    if (authorization === 'null') {
      res.status(401).json({
        error: true,
        errorMassage: 'не авторизован'
      });
      reject();
    } else {
      if (typeof authorization === "string") {
        try {
          const token = await _models_TokenHandler__WEBPACK_IMPORTED_MODULE_0__/* .TokenHandler.decodedPayloadAccess */ .M.decodedPayloadAccess(authorization);

          if (token instanceof Error) {
            res.status(401).json({
              error: true,
              errorMassage: 'Токен не валидный'
            });
            reject();
          } else {
            const {
              payload
            } = token;
            resolve(payload);
          }
        } catch (e) {
          res.status(401).json({
            error: true,
            errorMassage: 'Токен не валидный'
          });
        }
      }
    }
  });
}

/***/ })

};
;