import Elements from "./Elements";
import {render, screen} from '@testing-library/react'
const func = require('./useStyleText')

const {offsetSort, filterBlock} = func





describe('test function in hook useStyleText',()=>{

    test('sort the array by the offset property',()=> {
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
        console.log(offsetSort(inputData))
        expect(JSON.stringify(offsetSort(inputData))).toBe(JSON.stringify(outputData))

    })
    test ('duplicate style filter', ()=>{
        const inputData =  [
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
    const dataTest = (inlineStyleRanges) => {
        return {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: inlineStyleRanges,
            key: 'jdjd',
            text: 'О запросах',
            type: 'header-one'
        }
    }

    const notStyleHeading = dataTest([])
    test('render not style heading ', () => {
        render(<Elements content={notStyleHeading}/>)
        screen.debug()
        expect(screen.getByText('О запросах')).toBeInTheDocument()


    })
    const stylizedHeading = dataTest([{offset: 0, length: 10, style: "TEXT_CENTER"}])
    test('render stylized heading ', () => {
        render(<Elements content={stylizedHeading}/>)
        screen.debug()
        expect(screen.getByText('О запросах')).toBeInTheDocument()
        expect(screen.getByText('О запросах')).toHaveClass('TEXT_CENTER')

    })
    const colorText = dataTest([
        {offset: 0, length: 10, style: "Orange"},
        {offset: 0, length: 10, style: "TEXT_CENTER"}
    ])
    test('render more than one class', () => {
        render(<Elements content={colorText}/>)
        screen.debug()
        expect(screen.getByText('О запросах')).toBeInTheDocument()
        expect(screen.getByText('О запросах')).toHaveClass('Orange')
        expect(screen.getByText('О запросах')).toHaveClass('TEXT_CENTER')
    })
    test('class update', () => {
        const updateClass = dataTest([
            {offset: 0, length: 10, style: "Orange"},
            {offset: 0, length: 10, style: "Green"},
            {offset: 0, length: 10, style: "Yellow"},
            {offset: 0, length: 10, style: "TEXT_LEFT"},
            {offset: 0, length: 10, style: "TEXT_CENTER"}
        ])
        render(<Elements content={updateClass}/>)
        screen.debug()
        expect(screen.getByText('О запросах')).toBeInTheDocument()
        expect(screen.getByText('О запросах')).not.toHaveClass('TEXT_LEFT')
        expect(screen.getByText('О запросах')).not.toHaveClass('Orange')
        expect(screen.getByText('О запросах')).toHaveClass('TEXT_CENTER')
    })
})





