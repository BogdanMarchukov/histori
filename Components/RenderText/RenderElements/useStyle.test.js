import {useStyleText} from "./useStyleText";

function cum(a, b){
    return a + b
}

test('tw==', ()=> {
   expect(useStyleText({})).toBe('ds')
})

