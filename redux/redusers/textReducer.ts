import {ActionTypes, rootAction} from "../types/indexTyps";
import {RawDraftContentState} from 'draft-js'


export type initStateTextReducer = {
   currentArticle: RawDraftContentState | null
}

const initState = {
   currentArticle: null
}


export const textReducer = (state = initState, action: rootAction ): initStateTextReducer => {

   switch (action.type){
      case ActionTypes.SAVE_TEXT:
         console.log(action.payload)
         return {
            ...state,
            currentArticle: action.payload
         }
      default:
         return state



   }
}