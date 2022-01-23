import {
    closeRegisterWindow,
    errorInitType,
    initUserType,
    loadingIndicatorType,
    loginErrorType,
    logoutType,
    openRegisterActionType,
    RegisterFormActionType,
    ShowProfileWindowType,
    switchingDispatchType
} from "../action-creators/homePageActionCreator";
import {homePageState} from "../redusers/homePageReducer";
import {userState} from "../redusers/userReducer";
import {
    initAccountActionType,
    miniLoaderDispatchType,
    onOffEditorAccountModelDispatchType,
    saveAvatarType,
    updateUserReducerPayloadType
} from "../action-creators/accountPageActionCreator";
import {accountPageReducerType} from "../redusers/accountPageReducer";
import {initStateTextReducer} from "../redusers/textReducer";
import {
    navigationArticleDispatch,
    saveParagraphActionType,
    SaveTextType,
    TableSelectionType
} from "../action-creators/editorTextActionCreator";


export type FileEventTarget = EventTarget & { files: FileList }


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
    | miniLoaderDispatchType
    | onOffEditorAccountModelDispatchType
    | saveAvatarType
    | SaveTextType
    | TableSelectionType
    | saveParagraphActionType
    | navigationArticleDispatch


export type rootState =
    | { homePageReducer: homePageState }
    | { userReducer: userState }
    | { accountPageReducer: accountPageReducerType }
    | { textReducer: initStateTextReducer }

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
    INIT_ACCOUNT = 'ACCOUNT/INIT_ACCOUNT',
    UPDATE_USER_REDUCER = 'ACCOUNT/UPDATE_USER_REDUCER',
    MIMI_LOADER_START_STOP = 'ACCOUNT/MIMI_LOADER_START_STOP',
    OPEN_MODEL_WIDOW_EDIT_ACCOUNT = 'OPEN_MODEL_WIDOW_EDIT_ACCOUNT',
    SAVE_AVATAR = 'ACCOUNT/SAVE_AVATAR',
    SAVE_TEXT = 'EDITOR_TEXT/SAVE_TEXT',
    TABLE_SELECT_SAVE = 'EDITOR_TEXT/TABLE_SELECT_SAVE',
    SAVE_PARAGRAPH = 'EDITOR_TEXT/SAVE_PARAGRAPH',
    FILTER_NAVIGATION_PARAGRAPH = 'EDITOR_TEXT/FILTER_NAVIGATION_PARAGRAPH'


}

