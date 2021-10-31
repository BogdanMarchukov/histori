import {ActionTypes, rootAction} from "../types/indexTyps";
import {initHomePage} from "./homePageReducer";

export interface testStateType {
    test: string
    test_test: number
}

export const initTestReducer: testStateType = {
    test: 'test',
    test_test: 1234

}

export const testReducer = (state: testStateType = initTestReducer, action: any): testStateType => {
    switch (action.type) {
        case "TEST":
            return {
                ...state, test: action.payload
            }

        default:
            return state
    }

}