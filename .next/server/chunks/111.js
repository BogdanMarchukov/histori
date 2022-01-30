"use strict";
exports.id = 111;
exports.ids = [111];
exports.modules = {

/***/ 7099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ ArticleHandler)
/* harmony export */ });
const SocietyArticle = __webpack_require__(8103);

const SocietyArticleList = __webpack_require__(608);

const StoryArticle = __webpack_require__(4489);

const StoryArticleList = __webpack_require__(7422);

const EconomyArticle = __webpack_require__(3186);

const EconomyArticleList = __webpack_require__(5748);

const JurisprudenceArticle = __webpack_require__(824);

const JurisprudenceArticleList = __webpack_require__(5953);

class ArticleHandler {
  constructor(inputData = null, id = null, command = null, dirName = null) {
    this.inputData = inputData;
    this.id = id;
    this.command = command;
    this.dirName = dirName;
    this.inputData = inputData;
    this.id = id;
    this.command = command;
    this.dirName = dirName;
  }

  saveDataObject() {
    // данные для сохранения статьи в БД
    if (this.inputData) {
      return {
        article: this.inputData.article,
        name: this.inputData.article.blocks[0].text,
        tableCells: this.inputData.tableCells
      };
    } else return null;
  } // ==================== редактирование данных ========================================


  async editArticle(articleSchema, listSchema) {
    try {
      var _this$inputData, _this$inputData2, _this$inputData3;

      let articleMongo = await articleSchema.findById(this.id);
      articleMongo.article = (_this$inputData = this.inputData) === null || _this$inputData === void 0 ? void 0 : _this$inputData.article;
      articleMongo.tableCells = (_this$inputData2 = this.inputData) === null || _this$inputData2 === void 0 ? void 0 : _this$inputData2.tableCells;
      articleMongo.name = (_this$inputData3 = this.inputData) === null || _this$inputData3 === void 0 ? void 0 : _this$inputData3.article.blocks[0].text;
      await articleMongo.save();
      const articleListMongo = await listSchema.findOne(); // если есть данные дабавляет новые в список статей

      articleListMongo.articleList = articleListMongo.articleList.map(list => {
        if (Object.keys(list)[0] === articleMongo._id.valueOf().toString()) {
          return {
            [articleMongo._id.valueOf().toString()]: articleMongo.name
          };
        } else return list;
      });
      return Promise.all([articleMongo.save(), articleListMongo.save()]);
    } catch (e) {
      console.log(e, 'error editArticle');
    }
  } // ===============================удаление из БД==================================


  async deleteArticle(schema, listClass) {
    const id = this.id;

    async function getList() {
      return new Promise(async (resolve, reject) => {
        try {
          const articleListMongo = await listClass.findOne();
          resolve(articleListMongo);
        } catch (e) {
          reject(e);
        }
      });
    }

    async function delPost() {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await schema.deleteOne({
            _id: id
          });
          resolve(true);
        } catch (e) {
          reject(false);
        }
      });
    }

    try {
      const deleteResultArray = await Promise.all([getList(), delPost()]); //@ts-ignore

      deleteResultArray[0].articleList = deleteResultArray[0].articleList.filter(listObjItem => {
        return Object.keys(listObjItem)[0] !== id;
      }); //@ts-ignore

      console.log(deleteResultArray[0].articleList, 'ArticleList+++'); //@ts-ignore

      await deleteResultArray[0].save();
    } catch (e) {
      console.log(e, 'ArticleHandler== Error');
      return {
        error: true,
        errorMassage: 'Не удалось удалить'
      };
    }
  } ///=================== функция сохранения статьи и списка статей в указанную категорию =======================


  async saveArticle(schema, listClass) {
    const societyArticle = new schema(this.saveDataObject());
    const newArticle = await societyArticle.save(); // сохранение статьи в БД

    let societyArticleList = await listClass.find(); // поиск списка статей

    if (societyArticleList.length === 0) {
      // если список пуст
      const societyArticleList = new listClass({
        articleList: [{
          [newArticle._id.valueOf().toString()]: newArticle.name
        }]
      });
      const newList = await societyArticleList.save();
      return {
        article: newArticle,
        articleList: newList
      };
    } else {
      const societyArticleList = await listClass.findOne(); // если есть данные дабавляет новые в список статей

      societyArticleList.articleList = [...societyArticleList.articleList, {
        [newArticle._id.valueOf().toString()]: newArticle.name
      }];
      await societyArticleList.save();
      return {
        article: newArticle,
        articleList: societyArticleList
      };
    }
  } ///======================================================================


  async actionArticle() {
    var _this$inputData$categ, _this$inputData4;

    // сохранение/удаление/редактирование в/из базу данных
    if (this.inputData || this.dirName) {
      switch ((_this$inputData$categ = (_this$inputData4 = this.inputData) === null || _this$inputData4 === void 0 ? void 0 : _this$inputData4.categoryName) !== null && _this$inputData$categ !== void 0 ? _this$inputData$categ : this.dirName) {
        case 'society':
          if (this.command === 'edit') {
            return await this.editArticle(SocietyArticle, SocietyArticleList);
          }

          if (this.command === 'delete') {
            return await this.deleteArticle(SocietyArticle, SocietyArticleList);
          }

          return await this.saveArticle(SocietyArticle, SocietyArticleList);

        case 'story':
          if (this.command === 'edit') {
            return await this.editArticle(StoryArticle, StoryArticleList);
          }

          if (this.command === 'delete') {
            return await this.deleteArticle(StoryArticle, StoryArticleList);
          }

          return await this.saveArticle(StoryArticle, StoryArticleList);

        case 'jurisprudence':
          if (this.command === 'edit') {
            return await this.editArticle(JurisprudenceArticle, JurisprudenceArticleList);
          }

          if (this.command === 'delete') {
            return await this.deleteArticle(JurisprudenceArticle, JurisprudenceArticleList);
          }

          return await this.saveArticle(JurisprudenceArticle, JurisprudenceArticleList);

        case 'economy':
          if (this.command === 'edit') {
            return await this.editArticle(EconomyArticle, EconomyArticleList);
          }

          if (this.command === 'delete') {
            return await this.deleteArticle(EconomyArticle, EconomyArticleList);
          }

          return await this.saveArticle(EconomyArticle, EconomyArticleList);
      }
    }
  }

}



/***/ }),

/***/ 6045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ adminCheckMiddleware)
/* harmony export */ });
/* harmony import */ var _models_TokenHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4345);
/* harmony import */ var _models_UserHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9753);



const User = __webpack_require__(2080);

async function adminCheckMiddleware(req, res, next) {
  return new Promise(async (resolve, reject) => {
    const {
      authorization
    } = req.headers;

    if (authorization) {
      try {
        const userId = await _models_TokenHandler__WEBPACK_IMPORTED_MODULE_0__/* .TokenHandler.decodedPayloadAccess */ .M.decodedPayloadAccess(authorization); // userId from cookies

        try {
          const user = await User.findById(userId.payload);
          const userHandler = new _models_UserHandler__WEBPACK_IMPORTED_MODULE_1__/* .UserHandler */ .V(user); // поиск пользователя по id

          if (userHandler.userDto().role.includes('admin')) {
            // проверка роли на admin
            resolve(true);
          } else {
            res.statusCode = 403;
            res.json({
              error: true,
              errorMassage: 'доступ запрещен'
            });
            reject();
          }
        } catch (e) {
          res.status(401).json({
            error: true,
            errorMassage: 'не авторизован'
          });
          reject();
        }
      } catch (e) {
        res.status(401).json({
          error: true,
          errorMassage: 'не авторизован'
        });
        reject();
      }
    } else {
      res.status(401).json({
        error: true,
        errorMassage: 'не авторизован'
      });
      reject();
    }
  });
}

/***/ })

};
;