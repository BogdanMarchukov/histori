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

        default:
            return state
    }

}