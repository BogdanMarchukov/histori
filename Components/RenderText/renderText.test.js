import {render, screen} from '@testing-library/react'
import RenderText from './RenderText'


describe('Testing component Render Text', ()=> {
    const block = (text, type)=> {
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
            block('Определения типов', 'header-one'),
            block('Для анализа ошибок и выдачи всплывающих', 'unstyled'),
            block('1111','unordered-list-item' ),
            block('222','unordered-list-item' ),
            block('3333','unordered-list-item' ),
            block('4444','unordered-list-item' ),
            block('Они содержат в себе всю информацию о типах, которые','unstyled' ),
            block('В свою очередь это позволяет нам использовать','unstyled' )

        ],
        entityMap: {}
    }
    test('Render Component', ()=> {
        render(<RenderText content={inputData}/>)
        screen.debug()
        expect(screen.getByText('Определения типов')).toBeInTheDocument()
        expect(screen.getByText('Для анализа ошибок и выдачи всплывающих')).toBeInTheDocument()
        expect(screen.getByText('1111')).toBeInTheDocument()
        expect(screen.getByText('222')).toBeInTheDocument()
        expect(screen.getByText('3333')).toBeInTheDocument()
        expect(screen.getByText('4444')).toBeInTheDocument()
        expect(screen.getByText('Они содержат в себе всю информацию о типах, которые')).toBeInTheDocument()
        expect(screen.getByText('В свою очередь это позволяет нам использовать')).toBeInTheDocument()


    })

    test('Render table ', ()=> {
        const content = {
            blocks: [
                block('Определения типов', 'header-one'),
                block('Для анализа ошибок и выдачи всплывающих', 'unstyled'),
                block('1','table' ),
                block('2','table' ),
                block('3','table' ),
                block('4','table' ),
                block('5','table' ),
                block('6','table' ),
               block('Они содержат в себе всю информацию о типах, которые','unstyled' ),
               block('В свою очередь это позволяет нам использовать','unstyled' )

            ],
            entityMap: {}
        }
        const tableCells = ['3']
        render(<RenderText content={content} tableCells={tableCells}/>)
        screen.debug()
        expect(screen.getByText('Определения типов')).toBeInTheDocument()
        expect(screen.getByText('Для анализа ошибок и выдачи всплывающих')).toBeInTheDocument()
        expect(screen.getByText('1')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('4')).toBeInTheDocument()
        expect(screen.getByText('5')).toBeInTheDocument()
        expect(screen.getByText('6')).toBeInTheDocument()
        expect(screen.getByText('Они содержат в себе всю информацию о типах, которые')).toBeInTheDocument()
        expect(screen.getByText('В свою очередь это позволяет нам использовать')).toBeInTheDocument()
    })

})