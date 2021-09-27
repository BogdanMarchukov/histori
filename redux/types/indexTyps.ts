import {AnyAction} from "redux";

export interface homePageState {
    test: string
    tick: string
    auth: boolean
    pathAvatar: string | null
}

export const initHomePage: homePageState = {
    test: 'test',
    tick: 'init',
    auth: false,
    pathAvatar: null
}

interface homePageAction {
    type: ActionTypes.TEST
}


export type rootAction =
    homePageAction
    | AnyAction
export enum ActionTypes {
    TEST = 'TEST'
}

