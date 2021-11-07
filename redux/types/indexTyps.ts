import {
    closeRegisterWindow, errorInitType,
    initUserType, loadingIndicatorType, loginErrorType, logoutType,
    openRegisterActionType,
    RegisterFormActionType,
    ShowProfileWindowType, switchingDispatchType
} from "../action-creators/homePageActionCreator";
import {homePageState} from "../redusers/homePageReducer";
import {testStateType} from "../redusers/testReducer";
import {userState} from "../redusers/userReducer";
import {ResponseTypeLogin} from "../../pages/api/login";
import {initAccountActionType, updateUserReducerPayloadType} from "../action-creators/accountPageActionCreator";



export type rootAction =
    | openRegisterActionType
    | RegisterFormActionType
    | initUserType
    | ShowProfileWindowType
    | closeRegisterWindow
    | errorInitType
    | logoutType
    | switchingDispatchType
    | loadingIndicatorType
    | loginErrorType
    | initAccountActionType
    | updateUserReducerPayloadType



export type rootState =
    | { homePageReducer: homePageState }
    | { testReducer: testStateType }
    | { userReducer: userState }

export enum ActionTypes {
    OPEN_WINDOW_REGISTER = 'HOME_PAGE/OPEN_WINDOW_REGISTER',
    REGISTER_INPUT_EMAIL_VALIDATION = 'HOME_PAGE/REGISTER_INPUT_EMAIL_VALIDATION',
    REGISTER_INPUT_PASSWORD_VALIDATION = 'HOME_PAGE/REGISTER_INPUT_PASSWORD_VALIDATION',
    INIT_USER = 'INIT_USER',
    INIT_USER_SSR = 'INIT_USER_SSR',
    OPEN_WINDOW_MINI_PROFILE = 'HOME_PAGE/OPEN_WINDOW_MINI_PROFILE',
    LOADER_ON_OFF = 'HOME_PAGE/LOADER_ON_OFF',
    CLOSE_REGISTER_WINDOW = 'HOME_PAGE/CLOSE_REGISTER_WINDOW',
    LOGIN_ERROR = 'HOME_PAGE/LOGIN_ERROR',
    RESET_LOGIN_ERROR = 'HOME_PAGE/RESET_LOGIN_ERROR',
    RESTART_STATE = 'HOME_PAGE/RESTART_STATE',
    SWITCHING_WINDOW_REGISTER = 'HOME_PAGE/SWITCHING_WINDOW_REGISTER',
    UPDATE_TOKENS = 'ROOT_FUNCTION/UPDATE_TOKENS',
    INIT_ACCOUNT = 'ACCOUNT/INIT_ACCOUNT',
    UPDATE_USER_REDUCER = 'ACCOUNT/UPDATE_USER_REDUCER'

}

