import {ActionTypes, rootAction} from "../types/indexTyps";

export interface homePageState {
    tick: string
    registerWin: boolean
    pathAvatar: string | null
    registerTitle: string
}

export const initHomePage: homePageState = {
    tick: 'init',
    registerWin: false,
    pathAvatar: null,
    registerTitle: 'Регистрация'
}

export const homePageReducer = (state = initHomePage, action: rootAction): homePageState => {
    switch (action.type) {
        case ActionTypes.OPEN_WINDOW_REGISTER:
            return {
                ...state, registerWin: !state.registerWin
            }
        default:
            return state
    }

}