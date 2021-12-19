import {ActionTypes} from "../types/indexTyps";
import {RawDraftContentState} from "draft-js";


export interface SaveTextType {
    type: ActionTypes.SAVE_TEXT
    payload: RawDraftContentState
}

export function saveText (dispatch: (object: SaveTextType)=> void, content: RawDraftContentState){
    dispatch({type: ActionTypes.SAVE_TEXT, payload: content})
}