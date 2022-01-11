import { combineReducers} from "redux";
import {homePageReducer, initHomePage} from "./homePageReducer";
import {HYDRATE} from "next-redux-wrapper";
import {userReducer} from "./userReducer";
import {accountPageReducer} from "./accountPageReducer";
import {textReducer} from "./textReducer";



const rootReducer = combineReducers({
    homePageReducer,
    userReducer,
    accountPageReducer,
    textReducer
})



export const reducer = (state: any, action: any) => {

    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case 'TICK':
            return rootReducer(state, action);
        default:
            return rootReducer(state, action);

    }
};

export type RootState = ReturnType<typeof rootReducer>