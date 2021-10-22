import {openRegisterActionType, RegisterFormActionType} from "../action-creators/homePageActionCreator";
import {homePageState} from "../redusers/homePageReducer";


export type rootAction =
    | openRegisterActionType
    | RegisterFormActionType



export type rootState =
    | {homePageReducer: homePageState}

export enum ActionTypes {
    OPEN_WINDOW_REGISTER = 'HOME_PAGE/TEST',
    REGISTER_INPUT_EMAIL_VALIDATION = 'HOME_PAGE/REGISTER_INPUT_EMAIL_VALIDATION',
    REGISTER_INPUT_PASSWORD_VALIDATION = 'HOME_PAGE/REGISTER_INPUT_PASSWORD_VALIDATION',

}

