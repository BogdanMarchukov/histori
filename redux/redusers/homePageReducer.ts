import {ActionTypes, homePageState, initHomePage, rootAction} from "../types/indexTyps";


export const homePageReducer = (state = initHomePage, action: rootAction): homePageState => {
    switch (action.type) {
        case ActionTypes.TEST:
            return state
        default:
            return state
    }

}