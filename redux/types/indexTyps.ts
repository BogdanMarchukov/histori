import {AnyAction} from "redux";
import {openRegisterActionType} from "../action-creators/homePageActionCreator";
import {homePageState} from "../redusers/homePageReducer";


export type rootAction =
    | AnyAction
    | openRegisterActionType

export type rootState =
    | {homePageReducer: homePageState}

export enum ActionTypes {
    OPEN_WINDOW_REGISTER = 'HOME_PAGE/TEST',
    REGISTER_INPUT_EMAIL_VALIDATION = 'HOME_PAGE/REGISTER_INPUT_EMAIL_VALIDATION'
}

