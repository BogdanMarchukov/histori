exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 5666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Alert_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7808);
/* harmony import */ var _Alert_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Alert_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7949);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const AlertCustomize = props => {
  if (props.alert.alertStart) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_Alert_module_css__WEBPACK_IMPORTED_MODULE_3___default().alertWrapper),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_Alert_module_css__WEBPACK_IMPORTED_MODULE_3___default().alertContent),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert, {
          severity: props.alert.alertType,
          children: props.alert.alertMassage
        })
      })
    });
  } else return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertCustomize);

/***/ }),

/***/ 7465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9535);
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const Footer = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().footerContainer),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("footer", {})
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 9350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G7": () => (/* binding */ openRegisterWindow),
/* harmony export */   "BD": () => (/* binding */ switchingWindowRegister),
/* harmony export */   "To": () => (/* binding */ validateRegisterForm),
/* harmony export */   "gJ": () => (/* binding */ loadingIndicator),
/* harmony export */   "cz": () => (/* binding */ errorHandlerServer),
/* harmony export */   "qk": () => (/* binding */ onSubmitForm),
/* harmony export */   "PJ": () => (/* binding */ initUser),
/* harmony export */   "Av": () => (/* binding */ showProfileWindow),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_react_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _rootFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8393);
//=============== открытие окна регистрации



// открытие закрытие окна регистрации или логин===========================
function openRegisterWindow(dispatch) {
  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.OPEN_WINDOW_REGISTER */ .M.OPEN_WINDOW_REGISTER
  });
} // *****************************************************
// =================переключение окна из режима вход в режим регистрации=======================

function switchingWindowRegister(dispatch, registerTitle) {
  switch (registerTitle) {
    case 'вход':
      dispatch({
        type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.SWITCHING_WINDOW_REGISTER */ .M.SWITCHING_WINDOW_REGISTER,
        payload: 'вход'
      });
      break;

    case 'регистрация':
      dispatch({
        type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.SWITCHING_WINDOW_REGISTER */ .M.SWITCHING_WINDOW_REGISTER,
        payload: 'регистрация'
      });
      break;
  }
} // ================валидация формы и сохранение в store=================

function validateRegisterForm(dispatch, inputValue, inputName) {
  const validator = new (simple_react_validator__WEBPACK_IMPORTED_MODULE_0___default())();

  switch (inputName) {
    case 'email':
      const resultEmail = validator.check(inputValue, 'required|email');
      dispatch({
        type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.REGISTER_INPUT_EMAIL_VALIDATION */ .M.REGISTER_INPUT_EMAIL_VALIDATION,
        payload: {
          resultEmail: !resultEmail,
          inputValue
        }
      });
      break;

    case 'password':
      const resultPassword = validator.check(inputValue, 'required|min:6');
      dispatch({
        type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.REGISTER_INPUT_PASSWORD_VALIDATION */ .M.REGISTER_INPUT_PASSWORD_VALIDATION,
        payload: {
          resultPassword: !resultPassword,
          inputValue
        }
      });
      break;
  }
} //**************************************************************************************************
// ================================on/off полосы загрузки========================================

function loadingIndicator(dispatch, payload) {
  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.LOADER_ON_OFF */ .M.LOADER_ON_OFF,
    payload
  });
} //****************************************************************************************************
// ==============================обработчик ошибки ===================================================

function errorHandlerServer(dispatch, responseError, errorType) {
  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.LOGIN_ERROR */ .M.LOGIN_ERROR,
    payload: {
      error: responseError.error,
      errorMassage: responseError.errorMassage,
      alertType: errorType
    }
  });
  setTimeout(() => dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.RESET_LOGIN_ERROR */ .M.RESET_LOGIN_ERROR
  }), 4000);
} //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ==============================отправка формы регистрации на сервер====================================

async function onSubmitForm(dispatch, emailValid, passwordValid, email, password, registerTitle) {
  let url = 'login';

  if (!emailValid && !passwordValid) {
    if (registerTitle === 'регистрация') {
      url = 'register';
    }

    const data = {
      email,
      password
    };
    loadingIndicator(dispatch, true);
    dispatch({
      type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.CLOSE_REGISTER_WINDOW */ .M.CLOSE_REGISTER_WINDOW
    });
    const response = await fetch(`/api/${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    });

    if (response.status === 200 || response.status === 201) {
      const responseData = await response.json();
      loadingIndicator(dispatch, false);
      (0,_rootFunction__WEBPACK_IMPORTED_MODULE_2__/* .saveLocalStorage */ .nL)('accessToken', responseData.accessToken);
      dispatch({
        type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.INIT_USER */ .M.INIT_USER,
        payload: responseData
      });

      if (response.status === 201) {
        errorHandlerServer(dispatch, {
          error: true,
          errorMassage: 'ссылка для активации отправленна на email'
        }, 'warning');
      }
    }

    if (response.status === 403) {
      const responseError = await response.json();
      loadingIndicator(dispatch, false);
      errorHandlerServer(dispatch, responseError, 'error');
    }

    if (response.status === 404) {
      const responseError = await response.json();
      loadingIndicator(dispatch, false);
      errorHandlerServer(dispatch, responseError, 'error');
    }
  }
} /// ===================== инициализация пользователя SSR==========================

const initUser = userData => dispatch => {
  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.INIT_USER_SSR */ .M.INIT_USER_SSR,
    payload: userData
  });
}; //*********************************************************************************************
// ============================окно мини личный кабинет======================================

const showProfileWindow = (dispatch, profileWindow) => {
  dispatch({
    type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.OPEN_WINDOW_MINI_PROFILE */ .M.OPEN_WINDOW_MINI_PROFILE,
    payload: !profileWindow
  });
}; //********************************************************************************************
//===================выход из акаунта==========================

async function logout(dispatch) {
  const response = await fetch('api/logout');

  if (response.status === 200) {
    dispatch({
      type: _types_indexTyps__WEBPACK_IMPORTED_MODULE_1__/* .ActionTypes.RESTART_STATE */ .M.RESTART_STATE
    });
  }
} //**************************************************************

/***/ }),

/***/ 8393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nL": () => (/* binding */ saveLocalStorage),
/* harmony export */   "$o": () => (/* binding */ getLocalStorage),
/* harmony export */   "jM": () => (/* binding */ updateToken),
/* harmony export */   "kB": () => (/* binding */ sendFile),
/* harmony export */   "gR": () => (/* binding */ avatarImgSrc),
/* harmony export */   "E1": () => (/* binding */ responseHandler)
/* harmony export */ });
/* harmony import */ var _homePageActionCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9350);

// ====================сохранение данных в LocalStorage==================
function saveLocalStorage(name, data) {
  localStorage.setItem(name, data);
  const examination = localStorage.getItem(name);

  if (examination === data) {
    return true;
  } else {
    return false;
  }
} // ======================================================================
// ====================чтение данных из LocalStorage=====================

function getLocalStorage(name) {
  const dataStorage = localStorage.getItem(name);

  if (dataStorage) {
    return dataStorage;
  } else return null;
} //======================================================================
// ======================обнавление токена=============================

async function updateToken() {
  try {
    const response = await fetch('/api/token/update');

    if (response.status === 307) {
      return redirect(response); // редирект RedirectType
    } else {
      if (response.status === 200) {
        // токен и данные пользователя обнавлены
        return success(response);
      } else {
        return unknownError(response);
      }
    }
  } catch (e) {// todo обработать
  }
} //===============проверка токена на наличие в response и сохранение в LocalStorage=====================

const success = async response => {
  const data = await response.json();

  if ('accessToken' in data) {
    // елси все хорошо то сохраняем в LocalStorage и снова вызываем функцию
    const {
      accessToken
    } = data;
    saveLocalStorage('accessToken', accessToken); // сохраняем и проверяем LocalStorage

    return data;
  } else {
    return {
      error: true,
      errorMassage: 'токен не записан'
    };
  }
};

const redirect = async response => {
  return await response.json(); // todo обработать ошибку
};

const unknownError = async response => {
  return await response.json(); // todo обработать ошибку
}; //=========================отпрвака файла/файлов на сервер=======================


async function sendFile(apiUrl, files, filesName, Authorization) {
  const formData = new FormData();
  files.forEach((i, index) => formData.append(filesName[index], i));
  return await fetch(apiUrl, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: Authorization
    }
  });
} //=================================================================================
// =======================загрузка аватарки (src)===================================

function avatarImgSrc(patchName, fileName) {
  if (fileName) {
    return `${patchName}?fileName=${fileName}`;
  } else return undefined;
} //======================================================================================

function responseHandler(response, restartFunction, dispatch = null) {
  return new Promise(async (resolve, reject) => {
    switch (response.status) {
      case 401:
        updateToken().then(data => {
          if (data) {
            if ('accessToken' in data) {
              // токен успешно обнавлен данные о пользователе получены
              const {
                accessToken
              } = data;
              saveLocalStorage('accessToken', accessToken); // токен сохраннен в localStorage

              restartFunction();
            }
          }
        }).catch(e => reject(e));
        break;

      case 403:
        if (dispatch) {
          (0,_homePageActionCreator__WEBPACK_IMPORTED_MODULE_0__/* .errorHandlerServer */ .cz)(dispatch, {
            error: true,
            errorMassage: 'Доступ запрещенн'
          }, 'error');
        }

        break;

      case 500:
        if (dispatch) {
          (0,_homePageActionCreator__WEBPACK_IMPORTED_MODULE_0__/* .errorHandlerServer */ .cz)(dispatch, {
            error: true,
            errorMassage: 'Ошибка сервера'
          }, 'error');
        }

        break;

      case 200:
        resolve('Ok');
        break;
    }
  });
}

/***/ }),

/***/ 7808:
/***/ ((module) => {

// Exports
module.exports = {
	"alertWrapper": "Alert_alertWrapper__3C2Qc",
	"alertContent": "Alert_alertContent__3iwvX",
	"animal": "Alert_animal__1lKYB"
};


/***/ }),

/***/ 9535:
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "footer_footerContainer__3iT40"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;