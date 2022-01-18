import {ActionTypes} from "../types/indexTyps";
import {RawDraftContentState} from "draft-js";
import {getLocalStorage, responseHandler} from "./rootFunction";
import {ArticleType, responseArticle} from "../../serverTypes/serverTypes";
import {errorHandlerServer} from "./homePageActionCreator";


export interface SaveTextType {
    type: ActionTypes.SAVE_TEXT
    payload: responseArticle
}





//====================== сохранение текста в store================
export function saveText(dispatch: (object: SaveTextType) => void, content: responseArticle) {
    dispatch({type: ActionTypes.SAVE_TEXT, payload: content})
}

//============================================================================

// ================ сохраняем в store колличество ячеек==============================
export interface TableSelectionType {
    type: ActionTypes.TABLE_SELECT_SAVE,
    payload: string
}

export function saveTableCells(dispatch: (object: TableSelectionType) => void, select: string) {
    dispatch({type: ActionTypes.TABLE_SELECT_SAVE, payload: select})
}

//=========================================================================================

// =========================сохраняем старью в БД =================================



export async function saveArticle(dispatch: ()=> void, article: RawDraftContentState, tableCells: string[], categoryName: string){
    const inputData = {
        categoryName,
        article,
        tableCells
    }

    try {
        const responseData: Response = await fetch('api/create/article', { /// отправка новой статьи для сохранения
            method: 'POST',
            headers: {
                'Authorization': getLocalStorage('accessToken') ?? '',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })

        responseHandler(responseData)// обработка запроса

            .then(async data => {
                if (data === 'restartFunction') {
                    saveArticle(dispatch, article, tableCells, categoryName)
                    return true
                }
                if (typeof data === 'object'){
                    if ('error' in data){
                       errorHandlerServer(dispatch, data, 'error') // error 403

                    }
                }
                if (data === 'Ok') {
                   const currentArticle: responseArticle =  await responseData.json()
                    saveText(dispatch, currentArticle) // сохранение в store
                }

            })
    } catch (e) {
        errorHandlerServer(dispatch, {error: true, errorMassage: 'Данные не отправлненны'}, 'error') // error 403
    }

}
