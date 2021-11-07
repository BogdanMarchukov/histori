import {ActionTypes, rootAction} from "../types/indexTyps";

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
    accessToken: string | null
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
    __v: null,
    accessToken: null
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
                surname: action.payload.surname,
                // @ts-ignore
                accessToken: action.payload.accessToken
            }
        case ActionTypes.INIT_USER_SSR :
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
        case ActionTypes.INIT_ACCOUNT:
            return {
                ...state,
                id: action.payload.id,
                isActivation: action.payload.isActivation,
                email: action.payload.emailDto,
                role: action.payload.role,
                __v: action.payload.__v,
                patronymic: action.payload.patronymic,
                tel: action.payload.tel,
                address: action.payload.address,
                userName: action.payload.userName,
                surname: action.payload.surname
            }
        case ActionTypes.UPDATE_USER_REDUCER:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                tel: action.payload.tel,
                surname: action.payload.surname,
                userName: action.payload.userName,
                email: action.payload.emailDto,
                __v: action.payload.__v,
                address: action.payload.address,
                id: action.payload.id,
                isActivation: action.payload.isActivation,
                patronymic: action.payload.patronymic,
                role: action.payload.role
            }

        default:
            return state
    }

}