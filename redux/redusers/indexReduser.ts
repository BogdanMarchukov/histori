import {AnyAction, combineReducers} from "redux";
import {homePageReducer} from "./homePageReducer";
import {HYDRATE} from "next-redux-wrapper";
import {ActionTypes, homePageState, rootAction} from "../types/indexTyps";


const rootReducer = combineReducers({
    homePageReducer
})



export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state, ...action.payload};
        case 'TICK':
            return {...state, tick: action.payload};
        default:
            return rootReducer(state, action);
    }
};

export type RootState = ReturnType<typeof rootReducer>