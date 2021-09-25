import { AnyAction } from 'redux'
import {HYDRATE} from 'next-redux-wrapper'


interface initialStateType {
    tick: string
    test: string
}

const initialState: initialStateType = {
    tick: 'init',
    test: "hello test"
}


// create your reducer
export const indexReducer = (state: initialStateType = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state, ...action.payload}
        case 'TICK':
            return {...state, tick: action.payload}
        default:
            return state
    }
}