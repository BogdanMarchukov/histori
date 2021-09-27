import {AnyAction} from "redux";

export interface homePageState {
    test: string
    tick: string
}

export const initHomePage: homePageState = {
    test: 'test',
    tick: 'init'
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

