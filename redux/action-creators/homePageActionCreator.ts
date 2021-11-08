//=============== открытие окна регистрации
import SimpleReactValidator from 'simple-react-validator';
import {ActionTypes, rootAction} from "../types/indexTyps";
import {userDto} from "../../models/UserHandler";
import {ErrorType} from "../../serverTypes/serverTypes";
import {ResponseTypeLogin} from "../../pages/api/login";
import {saveLocalStorage} from "./rootFunction";

export interface openRegisterActionType {
    type: ActionTypes.OPEN_WINDOW_REGISTER
}
// открытие закрытие окна регистрации или логин===========================
export function openRegisterWindow(dispatch: (object: openRegisterActionType) => void) {
    dispatch({type: ActionTypes.OPEN_WINDOW_REGISTER})
}


// *****************************************************

// =================переключение окна из режима вход в режим регистрации=======================

export interface switchingDispatchType {
    type: ActionTypes.SWITCHING_WINDOW_REGISTER
    payload: 'вход' | 'регистрация'
}

export function switchingWindowRegister(dispatch: (object: switchingDispatchType)=> void, registerTitle: string) {
    switch (registerTitle) {
        case 'вход':
        dispatch({type: ActionTypes.SWITCHING_WINDOW_REGISTER, payload: 'вход'})
            break
        case 'регистрация':
            dispatch({type: ActionTypes.SWITCHING_WINDOW_REGISTER, payload: 'регистрация'})
            break
    }
}

// ================валидация формы и сохранение в store=================
interface PayloadRegisterFormEmail {
    resultEmail: boolean
    inputValue: string
}
interface PayloadRegisterFormPassword {
    resultPassword: boolean
    inputValue: string
}

export interface RegisterFormActionType {
    type: ActionTypes.REGISTER_INPUT_EMAIL_VALIDATION | ActionTypes.REGISTER_INPUT_PASSWORD_VALIDATION
    payload: PayloadRegisterFormEmail | PayloadRegisterFormPassword
}

export function validateRegisterForm(dispatch: (object: RegisterFormActionType) => void, inputValue: string, inputName: string) {
    const validator = new SimpleReactValidator()
    switch (inputName) {
        case 'email':
            const resultEmail = validator.check(inputValue, 'required|email')
            dispatch({type: ActionTypes.REGISTER_INPUT_EMAIL_VALIDATION, payload: {resultEmail: !resultEmail, inputValue}})
            break
        case 'password':
            const resultPassword = validator.check(inputValue, 'required|min:6')
            dispatch({type: ActionTypes.REGISTER_INPUT_PASSWORD_VALIDATION, payload: {resultPassword: !resultPassword, inputValue}})
            break
    }
}
//**************************************************************************************************

// ================================on/off полосы загрузки========================================
export interface loadingIndicatorType {
    type: ActionTypes.LOADER_ON_OFF
    payload: boolean
}

export function loadingIndicator(dispatch: (object: loadingIndicatorType)=> void, payload: boolean) {
    dispatch({type: ActionTypes.LOADER_ON_OFF, payload})
}
//****************************************************************************************************

// ==============================обработчик ошибки ===================================================
export interface loginErrorType {
    type: ActionTypes.RESET_LOGIN_ERROR
}

export interface errorInitType {
    type: ActionTypes.LOGIN_ERROR
    payload: errorLogin
}
interface errorLogin {
    error: boolean
    errorMassage: string
    alertType: string
}
function errorHandlerServer(dispatch: (object: errorInitType | loginErrorType)=> void, responseError: ErrorType, errorType: string ){
    dispatch({type: ActionTypes.LOGIN_ERROR, payload: {error: responseError.error, errorMassage: responseError.errorMassage, alertType: errorType}})
    setTimeout(()=> dispatch({type: ActionTypes.RESET_LOGIN_ERROR}), 4000)
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ==============================отправка формы регистрации на сервер====================================

export interface closeRegisterWindow {
    type: ActionTypes.CLOSE_REGISTER_WINDOW
}


export async function onSubmitForm (dispatch: (object: initUserType | closeRegisterWindow | loginErrorType | ErrorType )=> void, emailValid: boolean, passwordValid: boolean, email: string, password: string, registerTitle: string) {
    let url = 'login'
        if (!emailValid && !passwordValid) {
            if (registerTitle === 'регистрация') {
                url = 'register'
            }
            const data = {email, password}
            loadingIndicator(dispatch, true)
            dispatch({type: ActionTypes.CLOSE_REGISTER_WINDOW})
            const response = await fetch(`/api/${url}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            if (response.status === 200 || response.status === 201) {
                const responseData: ResponseTypeLogin = await response.json()
                loadingIndicator(dispatch, false)
                saveLocalStorage('accessToken', responseData.accessToken)
                dispatch({type: ActionTypes.INIT_USER, payload: responseData})
                if (response.status === 201) {
                    errorHandlerServer(dispatch, {error: true, errorMassage: 'ссылка для активации отправленна на email'}, 'warning')
                }
            }
            if (response.status === 403) {
                const responseError: ErrorType = await response.json()
                loadingIndicator(dispatch, false)
                errorHandlerServer(dispatch, responseError, 'error')
            }
            if (response.status === 404) {
                const responseError: ErrorType = await response.json()
                loadingIndicator(dispatch, false)
                errorHandlerServer(dispatch, responseError, 'error')
            }
    }
}


/// ===================== инициализация пользователя SSR==========================

export interface initUserType {
    type: ActionTypes.INIT_USER_SSR | ActionTypes.LOADER_ON_OFF | ActionTypes.LOGIN_ERROR | ActionTypes.INIT_USER
    payload: userDto | boolean | ErrorType
}


export const initUser = (userData: userDto) => (dispatch: (object: initUserType)=> void) => {
    dispatch({type: ActionTypes.INIT_USER_SSR, payload: userData})
}
//*********************************************************************************************

// ============================окно мини личный кабинет======================================
export interface ShowProfileWindowType {
    type: ActionTypes.OPEN_WINDOW_MINI_PROFILE,
    payload: boolean
}

export const showProfileWindow = (dispatch: (object: rootAction)=>void, profileWindow: boolean, isActivation: boolean) => {
    if (!profileWindow && !isActivation) {
        errorHandlerServer(dispatch, {error: true, errorMassage: 'email не подтвержден'}, 'error')
    } else {
        dispatch({type: ActionTypes.OPEN_WINDOW_MINI_PROFILE, payload: !profileWindow})
    }

}
//********************************************************************************************


//===================выход из акаунта==========================

export interface logoutType {
    type: ActionTypes.RESTART_STATE
}

export async function logout(dispatch: (object: logoutType)=> void) {
    const response = await fetch('api/logout')
    if (response.status === 200) {
        dispatch({type: ActionTypes.RESTART_STATE})
    }
}
//**************************************************************