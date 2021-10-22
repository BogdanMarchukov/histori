//=============== открытие окна регистрации
import SimpleReactValidator from 'simple-react-validator';
import {ActionTypes} from "../types/indexTyps";

export interface openRegisterActionType {
    type: ActionTypes.OPEN_WINDOW_REGISTER
}

export function openRegisterWindow(dispatch: (object: openRegisterActionType) => void) {
    dispatch({type: ActionTypes.OPEN_WINDOW_REGISTER})
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

// ==============================птправка формы регистрации на сервер

export async function onSubmitForm (dispatch:()=> void, emailValid: boolean, passwordValid: boolean, email: string, password: string) {

    if (!emailValid && !passwordValid) {
        const data = {email, password}
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
        console.log(response)
    }
}