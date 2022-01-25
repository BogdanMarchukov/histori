import {ActionTypes, rootAction} from "../types/indexTyps";
import {RawDraftContentState} from 'draft-js'


export type initStateTextReducer = {
    currentArticle: RawDraftContentState | null
    currentArticleCash: RawDraftContentState | null
    tableCells: string[]
    _id: string | null
    dirName: string | null
    paragraphList: string[] | null
    articleList: object[] | null
    editorStatus: string | null

}

const initState: initStateTextReducer = {
    tableCells: [],
    currentArticle: null,
    _id: null,
    dirName: null,
    paragraphList: null,
    currentArticleCash: null,
    articleList: null,
    editorStatus: null
}


export const textReducer = (state = initState, action: rootAction): initStateTextReducer => {

    switch (action.type) {
        case ActionTypes.SAVE_TEXT:

            return {
                ...state,
                currentArticle: action.payload.article.article,
                currentArticleCash: action.payload.article.article,
                tableCells: action.payload.article.tableCells,
                _id: action.payload.article._id.toString(),
                dirName: action.payload.dir,
                articleList: action.payload.articleList
            }
        case ActionTypes.TABLE_SELECT_SAVE:
            return {
                ...state,
                tableCells: [...state.tableCells, action.payload]
            }
        case ActionTypes.SAVE_PARAGRAPH:
            return {
                ...state,
                paragraphList: action.payload
            }
        case ActionTypes.FILTER_NAVIGATION_PARAGRAPH:
            return {
                ...state,
               currentArticle: action.payload
            }
        case ActionTypes.SELECT_STATUS_EDITOR_TEXT:
            return {
                ...state,
                editorStatus: action.payload
            }

        default:
            return state


    }
}