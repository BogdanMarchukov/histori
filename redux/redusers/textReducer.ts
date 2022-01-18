import {ActionTypes, rootAction} from "../types/indexTyps";
import {RawDraftContentState} from 'draft-js'



export type initStateTextReducer = {
   currentArticle: RawDraftContentState | null
   tableCells: string[]
   _id: string | null
   dirName: string | null

}

const initState = {
   tableCells: [],
   currentArticle: null,
   _id: null,
   dirName: null

}


export const textReducer = (state = initState, action: rootAction ): initStateTextReducer => {

   switch (action.type){
      case ActionTypes.SAVE_TEXT:
         return {
            ...state,
            currentArticle: action.payload.article.article,
            tableCells: action.payload.article.tableCells,
            _id: action.payload.article._id.toString(),
            dirName: action.payload.dir
         }
      case ActionTypes.TABLE_SELECT_SAVE:
         return {
            ...state,
            tableCells: [...state.tableCells, action.payload]
         }

      default:
         return state



   }
}