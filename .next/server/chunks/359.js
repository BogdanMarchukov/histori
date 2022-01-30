"use strict";
exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 5359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wQ": () => (/* binding */ saveParagraph),
/* harmony export */   "E4": () => (/* binding */ saveText),
/* harmony export */   "gv": () => (/* binding */ saveTableCells),
/* harmony export */   "j8": () => (/* binding */ saveArticle),
/* harmony export */   "Ix": () => (/* binding */ deleteCurrentArticle),
/* harmony export */   "Zo": () => (/* binding */ navigationArticle),
/* harmony export */   "Cn": () => (/* binding */ editorTextSelectStatus),
/* harmony export */   "rf": () => (/* binding */ dirNameSelect)
/* harmony export */ });
/* harmony import */ var _types_indexTyps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);
/* harmony import */ var _rootFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8393);
/* harmony import */ var _homePageActionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9350);



function saveParagraph(dispatch, content) {
  const blockParagraph = [];
  const blocksContent = [];
  content.blocks.forEach((item, index) => {
    const {
      type
    } = item;

    if (type === 'header-one') {
      blockParagraph.push(JSON.parse(JSON.stringify(item)));
      return true;
    }

    if (type === 'header-two' && index === 0) {
      blockParagraph.push(JSON.parse(JSON.stringify(item)));
      return true;
    }

    if (type !== 'header-two') {
      if (content.blocks.length - 1 === index) {
        blockParagraph.push(JSON.parse(JSON.stringify(item)));
        blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))]);
      } else {
        blockParagraph.push(JSON.parse(JSON.stringify(item)));
        return true;
      }
    }

    if (type === 'header-two') {
      blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))]);
      blockParagraph.length = 0;
      blockParagraph.push(JSON.parse(JSON.stringify(item)));
    }
  });

  const list = () => blocksContent.map(paragraph => paragraph[0][0].text);

  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.SAVE_PARAGRAPH */ .M.SAVE_PARAGRAPH,
    payload: list()
  });
} //=====================================================================================================
//====================== сохранение текста в store================

function saveText(dispatch, content) {
  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.SAVE_TEXT */ .M.SAVE_TEXT,
    payload: content
  });
} //============================================================================
// ================ сохраняем в store колличество ячеек==============================

function saveTableCells(dispatch, select) {
  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.TABLE_SELECT_SAVE */ .M.TABLE_SELECT_SAVE,
    payload: select
  });
} //=========================================================================================
// =========================сохраняем старью в БД =================================

async function saveArticle(dispatch, article, tableCells, categoryName, command, id = null, router) {
  const inputData = {
    categoryName,
    article,
    tableCells
  };

  const returnPath = () => {
    if (command === 'create') {
      return 'api/create/article';
    }

    if (command === 'edit') {
      return `api/edit/post/${id}`;
    }
  };

  try {
    var _returnPath, _getLocalStorage;

    const responseData = await fetch((_returnPath = returnPath()) !== null && _returnPath !== void 0 ? _returnPath : '', {
      /// отправка новой статьи для сохранения
      method: 'POST',
      headers: {
        'Authorization': (_getLocalStorage = (0,_rootFunction__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$o)('accessToken')) !== null && _getLocalStorage !== void 0 ? _getLocalStorage : 'null',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputData)
    });
    (0,_rootFunction__WEBPACK_IMPORTED_MODULE_1__/* .responseHandler */ .E1)(responseData, () => saveArticle(dispatch, article, tableCells, categoryName, command, id, router), dispatch) // обработка запроса
    .then(async data => {
      if (data === 'Ok') {
        const currentArticle = await responseData.json();
        saveText(dispatch, currentArticle); // сохранение в store

        return router.push(`/post/${categoryName}?id=${currentArticle.article._id}`); // редирект
      }
    });
  } catch (e) {
    (0,_homePageActionCreator__WEBPACK_IMPORTED_MODULE_2__/* .errorHandlerServer */ .cz)(dispatch, {
      error: true,
      errorMassage: 'Данные не отправлненны'
    }, 'error'); // error 403
  }
} //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=============================Удаление текущей статьи  ==============================================

async function deleteCurrentArticle(dispatch, dirName, idArticle, router) {
  var _getLocalStorage2;

  const response = await fetch(`/api/delete/post/${dirName}?id=${idArticle}`, {
    method: 'POST',
    headers: {
      'Authorization': (_getLocalStorage2 = (0,_rootFunction__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$o)('accessToken')) !== null && _getLocalStorage2 !== void 0 ? _getLocalStorage2 : ''
    }
  });
  const processedResponse = await (0,_rootFunction__WEBPACK_IMPORTED_MODULE_1__/* .responseHandler */ .E1)(response, () => deleteCurrentArticle(dispatch, dirName, idArticle, router), dispatch);

  if (processedResponse === 'Ok') {
    (0,_homePageActionCreator__WEBPACK_IMPORTED_MODULE_2__/* .errorHandlerServer */ .cz)(dispatch, {
      error: true,
      errorMassage: 'Материал удален'
    }, 'success');
    setTimeout(() => {
      return router.push(`/post/${dirName}?id=0`); // редирект
    }, 1000);
  }
} //==============================================================================================
//============================навигация по статье=============================================

function navigationArticle(dispatch, currentArticleCash, paragraphName) {
  if (currentArticleCash) {
    const {
      blocks
    } = currentArticleCash;
    let flagStopContent = false;
    let flagStartParagraph = false;
    let currentArticleFinishData = JSON.parse(JSON.stringify(currentArticleCash));

    if (paragraphName === currentArticleCash.blocks[0].text) {
      dispatch({
        type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.FILTER_NAVIGATION_PARAGRAPH */ .M.FILTER_NAVIGATION_PARAGRAPH,
        payload: currentArticleFinishData
      }); //return currentArticleFinishData // для теста
    } else {
      currentArticleFinishData.blocks = blocks.filter(block => {
        const {
          type
        } = block;
        const {
          text
        } = block;

        if (text !== paragraphName && !flagStartParagraph) {
          return false;
        }

        if (text === paragraphName) {
          flagStartParagraph = true;
          return true;
        }

        if (!flagStopContent && type !== 'header-two') {
          return true;
        }

        if (type === 'header-two') {
          flagStopContent = true;
          return false;
        }

        return false;
      });
      dispatch({
        type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.FILTER_NAVIGATION_PARAGRAPH */ .M.FILTER_NAVIGATION_PARAGRAPH,
        payload: currentArticleFinishData
      }); //return currentArticleFinishData // для теста
    }
  }
} // ========================= переключатель статуса editor-text=============================

function editorTextSelectStatus(dispatch, status) {
  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.SELECT_STATUS_EDITOR_TEXT */ .M.SELECT_STATUS_EDITOR_TEXT,
    payload: status
  });
} //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =========================== переключение дерриктории ======================================

function dirNameSelect(dispatch, dirName) {
  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_0__/* .ActionTypes.SELECT_DIR_NAME */ .M.SELECT_DIR_NAME,
    payload: dirName
  });
} // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/***/ })

};
;