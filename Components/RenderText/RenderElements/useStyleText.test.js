import Elements from "./Elements";
import {render, screen} from '@testing-library/react'
import {offsetSort, filterBlock} from './useStyleText'


describe('test function in hook useStyleText', () => {

    test('sort the array by the offset property', () => {
        const inputData = [
            {offset: 0, length: 10, style: "Orange"},
            {offset: 0, length: 10, style: "Green"},
            {offset: 0, length: 10, style: "Yellow"},
            {offset: 0, length: 10, style: "TEXT_LEFT"},

        ]
        const outputData = [
            [
                {offset: 0, length: 10, style: "Orange"},
                {offset: 0, length: 10, style: "Green"},
                {offset: 0, length: 10, style: "Yellow"},
                {offset: 0, length: 10, style: "TEXT_LEFT"},
            ]
        ]
        expect(JSON.stringify(offsetSort(inputData))).toBe(JSON.stringify(outputData))

    })
    test('duplicate style filter', () => {
        const inputData = [
            [
                {offset: 0, length: 10, style: "Orange"},
                {offset: 0, length: 10, style: "Green"},
                {offset: 0, length: 10, style: "Yellow"},
                {offset: 0, length: 10, style: "TEXT_LEFT"},
                {offset: 0, length: 10, style: "size9"},
                {offset: 0, length: 10, style: "size20"}
            ],
            [
                {offset: 5, length: 10, style: "TEXT_CENTER"},
                {offset: 5, length: 10, style: "TEXT_LEFT"},
            ],
            [
                {offset: 8, length: 10, style: "TEXT_CENTER"}
            ],
            [
                {offset: 10, length: 10, style: "TEXT_CENTER"},
                {offset: 10, length: 10, style: "TEXT_CENTER"}
            ]
        ]
        const outputData = [
            [

                {offset: 0, length: 10, style: "Yellow"},
                {offset: 0, length: 10, style: "TEXT_LEFT"},
                {offset: 0, length: 10, style: "size20"}
            ],
            [
                {offset: 5, length: 10, style: "TEXT_LEFT"},
            ],
            [
                {offset: 8, length: 10, style: "TEXT_CENTER"}
            ],
            [
                {offset: 10, length: 10, style: "TEXT_CENTER"}
            ]
        ]
        console.log(filterBlock(inputData))
        expect(JSON.stringify(filterBlock(inputData))).toBe(JSON.stringify(outputData))
    })

})

describe('testing component Elements', () => {
    const dataTest = (inlineStyleRanges, text) => {
        return {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: inlineStyleRanges,
            key: 'jdjd',
            text: text,
            type: 'header-one'
        }
    }

    const notStyleHeading = dataTest([], '?? ????????????????')
    test('render not style heading ', () => {
        render(<Elements content={notStyleHeading}/>)
        screen.debug()
        expect(screen.getByText('?? ????????????????')).toBeInTheDocument()


    })
    const stylizedHeading = dataTest([{offset: 0, length: 10, style: "TEXT_CENTER"}], '?? ????????????????')
    test('render stylized heading ', () => {
        render(<Elements content={stylizedHeading}/>)
        screen.debug()
        expect(screen.getByText('?? ????????????????')).toBeInTheDocument()
        expect(screen.getByText('?? ????????????????')).toHaveClass('TEXT_CENTER')

    })
    const colorText = dataTest([
        {offset: 0, length: 10, style: "Orange"},
        {offset: 0, length: 10, style: "TEXT_CENTER"}
    ], '?? ????????????????')
    test('render more than one class', () => {
        render(<Elements content={colorText}/>)
        screen.debug()
        expect(screen.getByText('?? ????????????????')).toBeInTheDocument()
        expect(screen.getByText('?? ????????????????')).toHaveClass('Orange')
        expect(screen.getByText('?? ????????????????')).toHaveClass('TEXT_CENTER')
    })
    test('class update', () => {
        const updateClass = dataTest([
            {offset: 0, length: 10, style: "Orange"},
            {offset: 0, length: 10, style: "Green"},
            {offset: 0, length: 10, style: "Yellow"},
            {offset: 0, length: 10, style: "TEXT_LEFT"},
            {offset: 0, length: 10, style: "TEXT_CENTER"}
        ], '?? ????????????????')
        render(<Elements content={updateClass}/>)
        screen.debug()
        expect(screen.getByText('?? ????????????????')).toBeInTheDocument()
        expect(screen.getByText('?? ????????????????')).not.toHaveClass('TEXT_LEFT')
        expect(screen.getByText('?? ????????????????')).not.toHaveClass('Orange')
        expect(screen.getByText('?? ????????????????')).toHaveClass('TEXT_CENTER')
    })

    test('render of one blank with different styles', () => {
        const text = "?????????????????? ?????????????????????????????? ???????????????? ???????????? ??????????, ?????????? ???????????????? ??????????-???????? ???? ???????????????????????? ????????????????????. ?????? ?????????????????????? ???????????????? ???????????????? ?????????????????????????? ???????????????????? ?????? ???????????? ??????????????."
        const textStart = '?????????????????? ??????????????????????????????'
        const textCenter = '????????????????'
        const textFinish = '???????????? ??????????, ?????????? ???????????????? ??????????-???????? ???? ???????????????????????? ????????????????????. ?????? ?????????????????????? ???????????????? ???????????????? ?????????????????????????? ???????????????????? ?????? ???????????? ??????????????.'

        const updateClass = dataTest([
            {offset: 26, length: 9, style: "Grey"},
            {offset: 26, length: 9, style: "Orange"},
            {offset: 26, length: 9, style: "TEXT_CENTER"},
            {offset: 42, length: 5, style: "Red"},
        ], text)
        render(<Elements content={updateClass}/>)
        screen.debug()
        console.log(text.substring(42, 47))
         expect(screen.getByText(textStart)).toBeInTheDocument()
        // expect(screen.getByText(textCenter)).toBeInTheDocument()
        // expect(screen.getByText(textFinish)).toBeInTheDocument()
        // expect(screen.getByText(textCenter)).not.toHaveClass('Grey')
        // expect(screen.getByText(textCenter)).toHaveClass('Orange')
    })

})





