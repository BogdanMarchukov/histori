import {rootAction} from "../types/indexTyps";


export type initStateAdminPanelReducer = {
    linkNameList: string[] | null
}

const initState: initStateAdminPanelReducer = {
    linkNameList: null
}


export const adminPanelReducer = (state = initState, action: rootAction): initStateAdminPanelReducer => {

    switch (action.type) {

        default:
            return state


    }
}