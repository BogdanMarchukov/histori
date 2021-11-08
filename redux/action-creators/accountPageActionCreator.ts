import {getLocalStorage, saveLocalStorage, updateToken} from "./rootFunction";
import {userDto} from "../../models/UserHandler";
import {ActionTypes, rootAction} from "../types/indexTyps";
import {updateUserReducerType} from "../../serverTypes/serverTypes";


//=================отправка GET запроса на получение данных об акаунте========================

export interface initAccountActionType {
    type: ActionTypes.INIT_ACCOUNT
    payload: userDto
}
export async function initAccount(dispatch: (object: rootAction)=> void) {
    onOffMiniLoader(dispatch, true) // индикатор загрузки включен
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
            saveLocalStorage('accessToken', accessToken) // токен сохраннен в localStorage
            updateUserReducer(dispatch, tokenData) // state userReducer обновлен
            onOffMiniLoader(dispatch, false) // индикатор загрузки выключен
        }
        if ('error' in tokenData) { // ошибка

            const {error, errorMassage} = tokenData
            onOffMiniLoader(dispatch, false) // индикатор загрузки выключен

        }
        if ('redirect' in tokenData) { // refreshToken просрочен редирект на главную страницу
            const {redirect, patch} = tokenData
            onOffMiniLoader(dispatch, false) // индикатор загрузки выключен

        }
    }
    if (response.status === 200){  // access токен жив state обновлен
        const responseData: userDto = await response.json()
        dispatch({type: ActionTypes.INIT_ACCOUNT, payload: responseData})
        onOffMiniLoader(dispatch, false) // индикатор загрузки выключен
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

// ===============================запуск мини loader=====================================

export interface miniLoaderDispatchType {
    type: ActionTypes.MIMI_LOADER_START_STOP
    payload: boolean
}

export function onOffMiniLoader(dispatch: (object:miniLoaderDispatchType)=> void, stateLoader: boolean){
    dispatch({type: ActionTypes.MIMI_LOADER_START_STOP, payload: stateLoader})
}
//===================================================================================================

// =========================открытие закрытие окна редактирования профиля=============================

export interface onOffEditorAccountModelDispatchType {
    type: ActionTypes.OPEN_MODEL_WIDOW_EDIT_ACCOUNT
    payload: boolean
}

export function onOffEditorAccountModel (dispatch: (object: onOffEditorAccountModelDispatchType)=> void, editAccountWindow: boolean) {
    dispatch({type: ActionTypes.OPEN_MODEL_WIDOW_EDIT_ACCOUNT, payload: !editAccountWindow})
}