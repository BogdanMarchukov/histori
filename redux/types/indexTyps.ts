import {
    initUserType,
    openRegisterActionType,
    RegisterFormActionType,
    ShowProfileWindowType
} from "../action-creators/homePageActionCreator";
import {homePageState} from "../redusers/homePageReducer";
import {testStateType} from "../redusers/testReducer";
import {userReducer, userState} from "../redusers/userReducer";


export type rootAction =
    | openRegisterActionType
    | RegisterFormActionType
    | initUserType
    | ShowProfileWindowType



export type rootState =
    | {homePageReducer: homePageState}
    | {testReducer: testStateType}
    | {userReducer: userState}

export enum ActionTypes {
    OPEN_WINDOW_REGISTER = 'HOME_PAGE/TEST',
    REGISTER_INPUT_EMAIL_VALIDATION = 'HOME_PAGE/REGISTER_INPUT_EMAIL_VALIDATION',
    REGISTER_INPUT_PASSWORD_VALIDATION = 'HOME_PAGE/REGISTER_INPUT_PASSWORD_VALIDATION',
    INIT_USER = 'INIT_USER',
    OPEN_WINDOW_MINI_PROFILE = 'HOME_PAGE/OPEN_WINDOW_MINI_PROFILE'

}

