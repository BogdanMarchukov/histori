import {ActionTypes, rootAction} from "../types/indexTyps";

interface alertObjectType {
    alertType: 'error'
    alertMassage: string | null
    alertStart: boolean
}

export interface homePageState {
    registerWin: boolean
    pathAvatar: string | null
    registerTitle: string
    validateEmail: boolean | null
    validatePassword: boolean | null,
    emailValue: string | null
    passwordValue: string | null
    profileWindow: boolean
    loading: boolean
    alert: alertObjectType
    loadMini: boolean

}

export const initHomePage: homePageState = {
    registerWin: false,
    pathAvatar: null,
    registerTitle: 'вход',
    validateEmail: null,
    validatePassword: null,
    emailValue: null,
    passwordValue: null,
    profileWindow: false,
    loading: false,
    alert: {
        alertMassage: null,
        alertStart: false,
        alertType: "error"
    },
    loadMini: false
}

export const homePageReducer = (state = initHomePage, action: rootAction): homePageState => {
    switch (action.type) {
        case ActionTypes.OPEN_WINDOW_REGISTER:
            return {
                ...state,
                registerWin: !state.registerWin,
                validatePassword: initHomePage.validatePassword,
                validateEmail: initHomePage.validateEmail,
                registerTitle: initHomePage.registerTitle
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
        case ActionTypes.OPEN_WINDOW_MINI_PROFILE:
            return {
                ...state,
                profileWindow: action.payload
            }
        case ActionTypes.LOADER_ON_OFF:
            return <homePageState>{
                ...state,
                loading: action.payload
            }
        case ActionTypes.CLOSE_REGISTER_WINDOW:
            return {
                ...state,
                registerWin: false,
                registerTitle: initHomePage.registerTitle
            }
        case ActionTypes.LOGIN_ERROR:
            return <homePageState>{
                ...state,
                alert: {
                    // @ts-ignore
                    alertStart: action.payload.error,
                    // @ts-ignore
                    alertType: action.payload.alertType,
                    // @ts-ignore
                    alertMassage: action.payload.errorMassage
                }
            }
        case ActionTypes.RESET_LOGIN_ERROR:
            return <homePageState>{
                ...state,
                alert: initHomePage.alert
            }
        case ActionTypes.RESTART_STATE:
            return {
                ...initHomePage
            }
        case ActionTypes.SWITCHING_WINDOW_REGISTER:
            return {
                ...state, registerTitle: action.payload
            }
        case ActionTypes.MIMI_LOADER_START_STOP:
            return {
                ...state, loadMini: action.payload
            }
        default:
            return state
    }

}