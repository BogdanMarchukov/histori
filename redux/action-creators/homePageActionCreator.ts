//=============== открытие окна регистрации
import SimpleReactValidator from 'simple-react-validator';
import {ActionTypes} from "../types/indexTyps";

export interface openRegisterActionType {
    type: ActionTypes.OPEN_WINDOW_REGISTER
}

export function openRegisterWindow (dispatch: (object: openRegisterActionType)=> void) {
    dispatch({type: ActionTypes.OPEN_WINDOW_REGISTER})
    const validator = new SimpleReactValidator()

    console.log(validator.check('sas12/', 'alpha_num'))
}
// *****************************************************

interface RegisterFormActionType {
    type: ActionTypes.REGISTER_INPUT_EMAIL_VALIDATION,
    result: boolean
}

export function validateRegisterForm(dispatch: ()=> void, inputValue: string, inputName: string) {
    const validator  = new SimpleReactValidator()
    switch (inputName){
        case 'email':
        const result = validator.check(inputValue, 'email')
            console.log(result)
    }
}