
import {ErrorType, initAccountDto, RedirectType} from "../../serverTypes/serverTypes";


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

    const response = await fetch('/api/token/update')
    if (response.status === 307) {
        return redirect(response) // редирект RedirectType
    } else {
        if (response.status === 200) {  // токен и данные пользователя обнавлены
            return success(response)
        } else {
            return unknownError(response)
        }
    }
}
//===============проверка токена на наличие в ответе и сохранение в LocalStorage=====================
const  success = async <T extends Response> (response: T): Promise<initAccountDto| ErrorType>   => {
    const data = await response.json()
    if ('accessToken' in data) { // елси все хорошо то сохраняем в LocalStorage и снова вызываем функцию
        const {accessToken} = data
        saveLocalStorage('accessToken', accessToken) // сохраняем и проверяем LocalStorage
        return data
    } else {
        return {error: true, errorMassage: 'токен не записан'}
    }
}

const  redirect = async <T extends Response> (response: T): Promise<RedirectType>  => {
    return await response.json() // todo обработать ошибку
}
const  unknownError = async <T extends Response> (response: T): Promise<ErrorType>  => {
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