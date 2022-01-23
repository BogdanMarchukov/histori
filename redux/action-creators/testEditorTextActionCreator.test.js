import {navigationArticle} from "./editorTextActionCreator";

describe('navigation Article', () => {
    const block = (text, type) => {
        return {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: [],
            key: 'jdjd',
            text: text,
            type: type
        }
    }
    const inputData = {
        blocks: [
            block('Текст целиком', 'header-one'),
            block('Для анализа ошибок и выдачи всплывающих', 'unstyled'),
            block('1111', 'unordered-list-item'),
            block('222', 'unordered-list-item'),
            block('3333', 'unordered-list-item'),
            block('4444', 'unordered-list-item'),
            block('Они содержат в себе всю информацию о типах, которые', 'unstyled'),
            block('Параграф 2', 'header-two'),
            block('В свою очередь это позволяет нам использовать', 'unstyled'),
            block('4444', 'unordered-list-item'),
            block('Они содержат в себе всю информацию о типах, которые', 'unstyled'),
            block('В свою очередь это позволяет нам использовать', 'unstyled'),
            block('Параграф 3', 'header-two'),
            block('В свою очередь это позволяет нам использовать', 'unstyled'),
            block('4444', 'unordered-list-item'),
            block('Они содержат в себе всю информацию о типах, которые', 'unstyled'),
            block('В свою очередь это позволяет нам использовать', 'unstyled')

        ],
        entityMap: {}
    }

    test('return the entire article', ()=> {
        const testData = navigationArticle(null, inputData, 'Текст целиком')
        console.log(testData)
        expect(testData).toEqual(inputData)
    })
    test('returns the second paragraph', ()=> {
        const outputData = {
            blocks: [
                block('Параграф 2', 'header-two'),
                block('В свою очередь это позволяет нам использовать', 'unstyled'),
                block('4444', 'unordered-list-item'),
                block('Они содержат в себе всю информацию о типах, которые', 'unstyled'),
                block('В свою очередь это позволяет нам использовать', 'unstyled')
            ],
            entityMap: {}
        }
        const testData = navigationArticle(null, inputData, 'Параграф 2')
        console.log(testData)
       expect(testData).toEqual(outputData)
    })
    test('returns third paragraph', ()=> {
        const outputData = {
            blocks: [
                block('Параграф 3', 'header-two'),
                block('В свою очередь это позволяет нам использовать', 'unstyled'),
                block('4444', 'unordered-list-item'),
                block('Они содержат в себе всю информацию о типах, которые', 'unstyled'),
                block('В свою очередь это позволяет нам использовать', 'unstyled')
            ],
            entityMap: {}
        }
        const testData = navigationArticle(null, inputData, 'Параграф 3')
        console.log(testData)
        expect(testData).toEqual(outputData)
    })

})