exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 3186:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _draftJs = __webpack_require__(9379);

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const economyArticle = new Schema({
  article: {
    type: _draftJs.RawDraftContentState,
    required: true
  },
  tableCells: {
    type: Array,
    required: true
  },
  keyWords: {
    type: Array,
    required: false
  },
  name: String
});
module.exports = models.EconomyArticle || model('EconomyArticle', economyArticle);

/***/ }),

/***/ 5748:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const economyArticleList = new Schema({
  articleList: Array
});
module.exports = models.EconomyArticleList || model('EconomyArticleList', economyArticleList);

/***/ }),

/***/ 824:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _draftJs = __webpack_require__(9379);

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const jurisprudenceArticle = new Schema({
  article: {
    type: _draftJs.RawDraftContentState,
    required: true
  },
  tableCells: {
    type: Array,
    required: true
  },
  keyWords: {
    type: Array,
    required: false
  },
  name: String
});
module.exports = models.JurisprudenceArticle || model('JurisprudenceArticle', jurisprudenceArticle);

/***/ }),

/***/ 5953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const jurisprudenceArticleList = new Schema({
  articleList: Array
});
module.exports = models.JurisprudenceArticleList || model('JurisprudenceArticleList', jurisprudenceArticleList);

/***/ }),

/***/ 8103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _draftJs = __webpack_require__(9379);

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const societyArticle = new Schema({
  article: {
    type: _draftJs.RawDraftContentState,
    required: true
  },
  tableCells: {
    type: Array,
    required: true
  },
  keyWords: {
    type: Array,
    required: false
  },
  name: String
});
module.exports = models.SocietyArticle || model('SocietyArticle', societyArticle);

/***/ }),

/***/ 608:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const societyArticleList = new Schema({
  articleList: Array
});
module.exports = models.SocietyArticleList || model('SocietyArticleList', societyArticleList);

/***/ }),

/***/ 4489:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _draftJs = __webpack_require__(9379);

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const storyArticle = new Schema({
  article: {
    type: _draftJs.RawDraftContentState,
    required: true
  },
  tableCells: {
    type: Array,
    required: true
  },
  keyWords: {
    type: Array,
    required: false
  },
  name: String
});
module.exports = models.StoryArticle || model('StoryArticle', storyArticle);

/***/ }),

/***/ 7422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  Schema,
  model,
  models
} = __webpack_require__(5619);

const storyArticleList = new Schema({
  articleList: Array
});
module.exports = models.StoryArticleList || model('StoryArticleList', storyArticleList);

/***/ })

};
;