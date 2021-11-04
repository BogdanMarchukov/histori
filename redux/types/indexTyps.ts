import {
    closeRegisterWindow, errorInitType,
    initUserType, logoutType,
    openRegisterActionType,
    RegisterFormActionType,
    ShowProfileWindowType
} from "../action-creators/homePageActionCreator";
import {homePageState} from "../redusers/homePageReducer";
import {testStateType} from "../redusers/testReducer";
import {userState} from "../redusers/userReducer";



export type rootAction =
    | openRegisterActionType
    | RegisterFormActionType
    | initUserType
    | ShowProfileWindowType
    | closeRegisterWindow
    | errorInitType
    | logoutType



export type rootState =
    | { homePageReducer: homePageState }
    | { testReducer: testStateType }
    | { userReducer: userState }

export enum ActionTypes {
    OPEN_WINDOW_REGISTER = 'HOME_PAGE/TEST',
    REGISTER_INPUT_EMAIL_VALIDATION = 'HOME_PAGE/REGISTER_INPUT_EMAIL_VALIDATION',
    REGISTER_INPUT_PASSWORD_VALIDATION = 'HOME_PAGE/REGISTER_INPUT_PASSWORD_VALIDATION',
    INIT_USER = 'INIT_USER',
    OPEN_WINDOW_MINI_PROFILE = 'HOME_PAGE/OPEN_WINDOW_MINI_PROFILE',
    LOADER_ON_OFF = 'HOME_PAGE/LOADER_ON_OFF',
    CLOSE_REGISTER_WINDOW = 'HOME_PAGE/CLOSE_REGISTER_WINDOW',
    LOGIN_ERROR = 'HOME_PAGE/LOGIN_ERROR',
    RESET_LOGIN_ERROR = 'HOME_PAGE/RESET_LOGIN_ERROR',
    RESTART_STATE = 'HOME_PAGE/RESTART_STATE'

}

