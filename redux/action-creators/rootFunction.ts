
import {ErrorType, RedirectType, updateUserReducerType} from "../../serverTypes/serverTypes";


// ====================сохранение данных в LocalStorage==================


export function saveLocalStorage(name: string, data: string) {
    localStorage.setItem(name, data)
}

// ======================================================================

// ====================чтение данных из LocalStorage=====================

export function getLocalStorage(name: string): string | null {
    const dataStorage = localStorage.getItem(name)
    if (dataStorage) {
        return dataStorage
    } else return null
}

//======================================================================



// ======================обнавление токена=============================



export async function updateToken(): Promise<RedirectType | updateUserReducerType | ErrorType> {

    const response = await fetch('/api/token/update')
    if (response.status === 307) {
        return await response.json() // редирект RedirectType
    } else {
        if (response.status === 200) {  // токен и данные пользователя обнавлены
            return  await response.json()
        } else {
            return {error: true, errorMassage: 'непридвиденная ошибка'}
        }
    }


}
