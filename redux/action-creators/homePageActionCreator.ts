//=============== открытие окна регистрации
import SimpleReactValidator from 'simple-react-validator';
import {ActionTypes} from "../types/indexTyps";
import {userDto} from "../../models/UserHandler";
import {ErrorType} from "../../serverTypes/serverTypes";

export interface openRegisterActionType {
    type: ActionTypes.OPEN_WINDOW_REGISTER
}

export function openRegisterWindow(dispatch: (object: openRegisterActionType) => void) {
    dispatch({type: ActionTypes.OPEN_WINDOW_REGISTER})
}

export const serverRenderClock = (payload: any) => (dispatch:any) => {
    dispatch({
        type: 'TICK',
        payload
    })
}

export const testTest = (payload: any) => (dispatch:any) => {
    dispatch({
            type: 'TEST',
        payload
    })
}

// *****************************************************

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

// ==============================отправка формы регистрации на сервер====================================

export interface closeRegisterWindow {
    type: ActionTypes.CLOSE_REGISTER_WINDOW | ActionTypes.RESET_LOGIN_ERROR
}

interface errorLogin {
    error: boolean
    errorMassage: string
}
export interface errorInitType {
    type: ActionTypes.LOGIN_ERROR
    payload: errorLogin
}

export async function onSubmitForm (dispatch: (object: initUserType | closeRegisterWindow | errorInitType)=> void, emailValid: boolean, passwordValid: boolean, email: string, password: string, registerTitle: string) {
    let url = 'login'
        if (!emailValid && !passwordValid) {
            if (registerTitle === 'регистрация') {
                url = 'register'
            }
            const data = {email, password}
            dispatch({type: ActionTypes.LOADER_ON_OFF, payload: true})
            dispatch({type: ActionTypes.CLOSE_REGISTER_WINDOW})
            const response = await fetch(`/api/${url}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            if (response.status === 200) {
                const responseData: userDto = await response.json()
                dispatch({type: ActionTypes.LOADER_ON_OFF, payload: false})
                dispatch({type: ActionTypes.INIT_USER, payload: responseData})
            }
            if (response.status === 403) {
                const responseError: ErrorType = await response.json()
                dispatch({type: ActionTypes.LOADER_ON_OFF, payload: false})
                dispatch({type: ActionTypes.LOGIN_ERROR, payload: {error: responseError.error, errorMassage: responseError.errorMassage}})
                setTimeout(()=> dispatch({type: ActionTypes.RESET_LOGIN_ERROR}), 4000)
            }
    }
}


/// ===================== инициализация пользователя SSR==========================

export interface initUserType {
    type: ActionTypes.INIT_USER | ActionTypes.LOADER_ON_OFF | ActionTypes.LOGIN_ERROR
    payload: userDto | boolean | ErrorType
}


export const initUser = (userData: userDto) => (dispatch: (object: initUserType)=> void) => {
    dispatch({type: ActionTypes.INIT_USER, payload: userData})
}
//*********************************************************************************************

// ============================окно мини личный кобинет======================================
export interface ShowProfileWindowType {
    type: ActionTypes.OPEN_WINDOW_MINI_PROFILE,
    payload: boolean
}

export const showProfileWindow = (dispatch: (object: ShowProfileWindowType)=>void, profileWindow: boolean) => {
    dispatch({type: ActionTypes.OPEN_WINDOW_MINI_PROFILE, payload: !profileWindow})
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