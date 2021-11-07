import {getLocalStorage, saveLocalStorage, updateToken} from "./rootFunction";
import {userDto} from "../../models/UserHandler";
import {ActionTypes} from "../types/indexTyps";
import {updateUserReducerType} from "../../serverTypes/serverTypes";


//=================отправка GET запроса на получение данных об акаунте========================

export interface initAccountActionType {
    type: ActionTypes.INIT_ACCOUNT
    payload: userDto
}

export async function initAccount(dispatch: (object: initAccountActionType | updateUserReducerPayloadType)=> void) {
    const response = await fetch('/api/init/account', {
        method: 'GET',
        headers: {
            'Authorization': getLocalStorage('accessToken') ?? ''
        }
    })
    if (response.status === 401) {
        const tokenData = await updateToken()
        if ('accessToken' in tokenData) { // токен успешно обнавлен данные о пользователе получены
            const {accessToken} = tokenData
            saveLocalStorage('accessToken', accessToken)
            updateUserReducer(dispatch, tokenData)

        }
        if ('error' in tokenData) { // ошибка

            const {error, errorMassage} = tokenData

        }
        if ('redirect' in tokenData) { // refreshToken просрочен редирект на главную страницу
            const {redirect, patch} = tokenData

        }
    }
    if (response.status === 200){
        const responseData: userDto = await response.json()
        dispatch({type: ActionTypes.INIT_ACCOUNT, payload: responseData})
    }

}
// *******************************************************************************************

// ==============================обновление userReducer =====================================

export interface updateUserReducerPayloadType {
    type: ActionTypes.UPDATE_USER_REDUCER,
    payload: updateUserReducerType
}

export function updateUserReducer(dispatch: (object: updateUserReducerPayloadType)=> void, userData: updateUserReducerType ) {
    dispatch({type: ActionTypes.UPDATE_USER_REDUCER, payload: userData})
}

//******************************************************************************************
