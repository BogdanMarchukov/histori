import {ErrorType, initAccountDto, RedirectType} from "../../serverTypes/serverTypes";
import {string} from "prop-types";
import {NextApiResponse} from "next";
import {onOffMiniLoader, updateReducers} from "./accountPageActionCreator";


// ====================сохранение данных в LocalStorage==================


export function saveLocalStorage(name: string, data: string): boolean {
    localStorage.setItem(name, data)
    const examination = localStorage.getItem(name)
    if (examination === data) {
        return true
    } else {
        return false
    }
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

export async function updateToken() {

    try {
        const response = await fetch('/api/token/update')
        if (response.status === 307) {
            return redirect(response) // редирект RedirectType
        } else {
            if (response.status === 200) {
                // токен и данные пользователя обнавлены
                return success(response)
            } else {
                return unknownError(response)
            }
        }
    }catch (e){
       // todo обработать
    }


}

//===============проверка токена на наличие в response и сохранение в LocalStorage=====================
const success = async <T extends Response>(response: T): Promise<initAccountDto | ErrorType> => {
    const data = await response.json()
    if ('accessToken' in data) { // елси все хорошо то сохраняем в LocalStorage и снова вызываем функцию
        const {accessToken} = data
        saveLocalStorage('accessToken', accessToken) // сохраняем и проверяем LocalStorage
        return data
    } else {
        return {error: true, errorMassage: 'токен не записан'}
    }
}

const redirect = async <T extends Response>(response: T): Promise<RedirectType> => {
    return await response.json() // todo обработать ошибку
}
const unknownError = async <T extends Response>(response: T): Promise<ErrorType> => {
    return await response.json() // todo обработать ошибку
}


//=========================отпрвака файла/файлов на сервер=======================

export async function sendFile(apiUrl: string, files: Blob[], filesName: string[], Authorization: string) {
    const formData = new FormData()
    files.forEach((i, index) => formData.append(filesName[index], i))
    return await fetch(apiUrl, {
        method: "POST",
        body: formData,
        headers: {
            Authorization: Authorization
        }
    })
}

//=================================================================================

// =======================загрузка аватарки (src)===================================

export function avatarImgSrc(patchName: string, fileName: string): string
export function avatarImgSrc(patchName: string, fileName: null): undefined

export function avatarImgSrc(patchName: any, fileName: any): any {
    if (fileName) {
        return `${patchName}?fileName=${fileName}`
    } else return undefined
}
//======================================================================================


export function responseHandler(response: Response): Promise<string | ErrorType> {
    return new Promise((async (resolve, reject) => {
        switch (response.status){
            case 401:
            updateToken()
                .then(data => {
                    if (data) {
                        if ('accessToken' in data) { // токен успешно обнавлен данные о пользователе получены
                            const {accessToken} = data
                            saveLocalStorage('accessToken', accessToken) // токен сохраннен в localStorage
                            resolve('restartFunction')
                        }
                    }



                })
                .catch(e => reject(e))

                break
            case 403:
                resolve({error: true, errorMassage: 'Доступ запрещен'})
                break
            case 200:
                resolve('Ok')
                break
        }
    }))

}


