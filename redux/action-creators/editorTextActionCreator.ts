import {ActionTypes} from "../types/indexTyps";
import {RawDraftContentState} from "draft-js";


export interface SaveTextType {
    type: ActionTypes.SAVE_TEXT
    payload: RawDraftContentState
}



//====================== сохранение текста в store================
export function saveText(dispatch: (object: SaveTextType) => void, content: RawDraftContentState) {
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


