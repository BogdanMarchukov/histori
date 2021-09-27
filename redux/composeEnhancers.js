import thunk from "redux-thunk";
import {applyMiddleware, compose} from "redux";

const middleware = [thunk]
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
export const enhancer = composeEnhancers(applyMiddleware(...middleware))