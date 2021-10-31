import {ActionTypes, rootAction} from "../types/indexTyps";

export interface homePageState {
    tick: string
    registerWin: boolean
    pathAvatar: string | null
    registerTitle: string
    validateEmail: boolean | null
    validatePassword: boolean | null,
    emailValue: string | null
    passwordValue: string | null
}

export const initHomePage: homePageState = {
    tick: 'init',
    registerWin: false,
    pathAvatar: null,
    registerTitle: 'Регистрация',
    validateEmail: null,
    validatePassword: null,
    emailValue: null,
    passwordValue: null
}

export const homePageReducer = (state = initHomePage, action: rootAction): homePageState => {
    switch (action.type) {
        case ActionTypes.OPEN_WINDOW_REGISTER:
            return {
                ...state, registerWin: !state.registerWin, validatePassword: initHomePage.validatePassword, validateEmail: initHomePage.validateEmail
            }
        case ActionTypes.REGISTER_INPUT_EMAIL_VALIDATION:
            return {
                ...state,
                validateEmail:  "resultEmail" in action.payload ? action.payload.resultEmail : null,
                emailValue: "inputValue" in action.payload ? action.payload.inputValue : null
            }
        case ActionTypes.REGISTER_INPUT_PASSWORD_VALIDATION:
            return {
                ...state,
                validatePassword: "resultPassword" in action.payload ? action.payload.resultPassword : null,
                passwordValue: "inputValue" in action.payload ? action.payload.inputValue : null
            }
        default:
            return state
    }

}