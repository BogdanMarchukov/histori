import {ActionTypes, rootAction} from "../types/indexTyps";
import {initHomePage} from "./homePageReducer";

export interface userState {
    id: string | null
    email: string | null
    isActivation: boolean
    role: string[] | null
    __v: number | null
    surname: string | null
    userName: string | null
    patronymic: string | null
    address: string | null
    tel: string | null
}

export const initUserState: userState = {
    id: null,
    email: null,
    isActivation: false,
    role: null,
    surname: null,
    userName: null,
    patronymic: null,
    address: null,
    tel: null,
    __v: null
}

export const userReducer = (state: userState = initUserState, action: rootAction): userState => {
    switch (action.type) {
        case ActionTypes.INIT_USER :
            return {
                ...state,
                // @ts-ignore
                id: action.payload.id,
                // @ts-ignore
                isActivation: action.payload.isActivation,
                // @ts-ignore
                email: action.payload.emailDto,
                // @ts-ignore
                role: action.payload.role,
                // @ts-ignore
                __v: action.payload.__v,
                // @ts-ignore
                patronymic: action.payload.patronymic,
                // @ts-ignore
                tel: action.payload.tel,
                // @ts-ignore
                address: action.payload.address,
                // @ts-ignore
                userName: action.payload.userName,
                // @ts-ignore
                surname: action.payload.surname
            }
        case ActionTypes.RESTART_STATE:
            return {
                ...initUserState
            }

        default:
            return state
    }

}