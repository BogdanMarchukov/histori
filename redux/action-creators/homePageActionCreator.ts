//=============== открытие окна регистрации
import SimpleReactValidator from 'simple-react-validator';
import {ActionTypes} from "../types/indexTyps";
import {userDto} from "../../models/UserHandler";

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


export async function onSubmitForm (dispatch: (object: initUserType)=> void, emailValid: boolean, passwordValid: boolean, email: string, password: string, registerTitle: string) {
    let url = 'login'
        if (!emailValid && !passwordValid) {
            if (registerTitle === 'регистрация') {
                url = 'register'
            }
            const data = {email, password}

            const response = await fetch(`/api/${url}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const responseData: userDto = await response.json()
            dispatch({type: ActionTypes.INIT_USER, payload: responseData})


    }

}
/// ===================== инициализация пользователя SSR==========================

export interface initUserType {
    type: ActionTypes.INIT_USER
    payload: userDto
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