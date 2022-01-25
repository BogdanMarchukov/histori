import {ActionTypes} from "../types/indexTyps";
import {RawDraftContentBlock, RawDraftContentState} from "draft-js";
import {getLocalStorage, responseHandler} from "./rootFunction";
import {responseArticle} from "../../serverTypes/serverTypes";
import {errorHandlerServer} from "./homePageActionCreator";


export interface SaveTextType {
    type: ActionTypes.SAVE_TEXT
    payload: responseArticle
}

// ===========сохранение отсортированного параграфа=================

export interface saveParagraphActionType {
    type: ActionTypes.SAVE_PARAGRAPH,
    payload: string[]
}

export function saveParagraph(dispatch: (obj: saveParagraphActionType) => void, content: RawDraftContentState) {

    const blockParagraph: RawDraftContentBlock[] = []
    const blocksContent: RawDraftContentBlock[][][] = []
    content.blocks.forEach((item, index) => {
        const {type} = item
        if (type === 'header-one') {
            blockParagraph.push(JSON.parse(JSON.stringify(item)))
            return true
        }
        if (type === 'header-two' && index === 0) {
            blockParagraph.push(JSON.parse(JSON.stringify(item)))
            return true
        }
        if (type !== 'header-two') {
            if (content.blocks.length - 1 === index) {
                blockParagraph.push(JSON.parse(JSON.stringify(item)))
                blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))])
            } else {
                blockParagraph.push(JSON.parse(JSON.stringify(item)))
                return true
            }

        }
        if (type === 'header-two') {
            blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))])
            blockParagraph.length = 0
            blockParagraph.push(JSON.parse(JSON.stringify(item)))
        }


    })


    const list = (): string[] => blocksContent.map(paragraph => paragraph[0][0].text)
    dispatch({type: ActionTypes.SAVE_PARAGRAPH, payload: list()})
}

//=====================================================================================================


//====================== сохранение текста в store================
export function saveText(dispatch: (object: SaveTextType) => void, content: responseArticle) {
    console.log(content)
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


export async function saveArticle(
    dispatch: () => void,
    article: RawDraftContentState,
    tableCells: string[],
    categoryName: string,
    command: string,
    id: string | null = null

) {
    const inputData = {
        categoryName,
        article,
        tableCells
    }

    const returnPath = () => {
        if (command === 'create') {
            return 'api/create/article'
        }
        if (command === 'edit') {
            return `api/edit/post/${id}`
        }
    }


    try {
        const responseData: Response = await fetch(returnPath() ?? '', { /// отправка новой статьи для сохранения
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
                    saveArticle(dispatch, article, tableCells, categoryName, command, id)
                    return true
                }
                if (typeof data === 'object') {
                    if ('error' in data) {
                        errorHandlerServer(dispatch, data, 'error') // error 403

                    }
                }
                if (data === 'Ok') {
                    const currentArticle: responseArticle = await responseData.json()
                    saveText(dispatch, currentArticle) // сохранение в store
                }

            })
    } catch (e) {
        errorHandlerServer(dispatch, {error: true, errorMassage: 'Данные не отправлненны'}, 'error') // error 403
    }

}

//============================навигация по статье=============================================

export interface navigationArticleDispatch {
    type: ActionTypes.FILTER_NAVIGATION_PARAGRAPH
    payload: RawDraftContentState
}

export function navigationArticle(dispatch: (obj: navigationArticleDispatch) => void, currentArticleCash: RawDraftContentState | null, paragraphName: string) {
    console.log('click')
    if (currentArticleCash) {
        const {blocks} = currentArticleCash
        let flagStopContent = false
        let flagStartParagraph = false
        let currentArticleFinishData: RawDraftContentState = JSON.parse(JSON.stringify(currentArticleCash))
        if (paragraphName === currentArticleCash.blocks[0].text) {
            dispatch({type: ActionTypes.FILTER_NAVIGATION_PARAGRAPH, payload: currentArticleFinishData})
            //return currentArticleFinishData // для теста

        } else {
            currentArticleFinishData.blocks = blocks.filter(block => {
                const {type} = block
                const {text} = block
                if (text !== paragraphName && !flagStartParagraph) {
                    return false
                }
                if (text === paragraphName) {
                    flagStartParagraph = true
                    return true
                }
                if (!flagStopContent && type !== 'header-two') {
                    return true
                }
                if (type === 'header-two') {
                    flagStopContent = true
                    return false
                }
                return false
            })

            dispatch({type: ActionTypes.FILTER_NAVIGATION_PARAGRAPH, payload: currentArticleFinishData})

            //return currentArticleFinishData // для теста
        }
    }

}

// ========================= переключатель статуса editor-text=============================

export interface editorTextSelectStatusActionType {
    type: ActionTypes.SELECT_STATUS_EDITOR_TEXT,
    payload: string
}

export function editorTextSelectStatus(dispatch: (obj: editorTextSelectStatusActionType) => void, status: string) {
    dispatch({type: ActionTypes.SELECT_STATUS_EDITOR_TEXT, payload: status})
}
