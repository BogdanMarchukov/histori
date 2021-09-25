import {applyMiddleware, compose, createStore} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import {rootReducer} from "./reducers/rootReduser"
import thunk from "redux-thunk"

const middleware = [thunk]
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const makeStore = () => createStore(rootReducer, enhancer)

export const wrapper = createWrapper(makeStore, {debug: true})