import {ActionTypes, rootAction} from "../types/indexTyps";

export interface accountPageReducerType {
    editAccountWindow: boolean // окно редактирования профиля
}

export const initUserState: accountPageReducerType = {
    editAccountWindow: false
}

export const accountPageReducer = (state: accountPageReducerType = initUserState, action: rootAction): accountPageReducerType => {
    switch (action.type) {
        case ActionTypes.OPEN_MODEL_WIDOW_EDIT_ACCOUNT:
            return {
                ...state, editAccountWindow: action.payload
            }

        default:
            return state
    }

}