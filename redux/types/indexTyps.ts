import {AnyAction} from "redux";

export interface homePageState {
    test: string
    tick: string
}

export const initHomePage: homePageState = {
    test: 'test',
    tick: 'init'
}

export enum ActionTypes {
    TEST = 'TEST'
}

interface testAction {
    type: ActionTypes.TEST
}

export type rootAction =
    testAction
    | AnyAction