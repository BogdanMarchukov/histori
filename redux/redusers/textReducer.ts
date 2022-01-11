import {ActionTypes, rootAction} from "../types/indexTyps";
import {RawDraftContentState} from 'draft-js'



export type initStateTextReducer = {
   currentArticle: RawDraftContentState | null
   tableCells: string[]

}

const initState = {
   tableCells: [],
   currentArticle: null

}


export const textReducer = (state = initState, action: rootAction ): initStateTextReducer => {

   switch (action.type){
      case ActionTypes.SAVE_TEXT:
         return {
            ...state,
            currentArticle: action.payload
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