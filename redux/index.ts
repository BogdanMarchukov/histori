import {Context, createWrapper} from "next-redux-wrapper";
import {createStore, Store} from "redux";
import {reducer, RootState} from "./redusers/indexReduser";

import {enhancer} from './composeEnhancers'




const makeStore = (context: Context) => createStore(reducer, enhancer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});