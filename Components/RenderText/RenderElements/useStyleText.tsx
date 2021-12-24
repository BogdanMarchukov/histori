import {RawDraftContentBlock, RawDraftInlineStyleRange} from "draft-js";
import classes from './elementStyles.module.css'
import React, {useEffect, useMemo, useRef, useState} from "react";

// сортировка по параметрам offset
function offsetSort(inlineStyleRanges: RawDraftInlineStyleRange[]): RawDraftInlineStyleRange[][] {
    const sortArray: RawDraftInlineStyleRange[][] = [] // отсортированный массив
    const cache: RawDraftInlineStyleRange[] = []
    inlineStyleRanges.forEach((i, index) => {

        if (index === 0) {
            cache.push(i)
            return true
        }
        if (cache.length) {
            if (index > 0 && i.offset === cache[cache.length - 1].offset) {
                cache.push(i)
                return true
            } else {
                sortArray.push(JSON.parse(JSON.stringify(cache)))
                cache.length = 0
                cache.push(i)
            }
        }


    })
    sortArray.push(cache)
    return sortArray
}

// фильтрует классы по группам и удаляет дублирующие
function filterBlock(styleBlock: RawDraftInlineStyleRange[][]): RawDraftInlineStyleRange[][] {

    return styleBlock.map((i, index) => {
        const flexSort: RawDraftInlineStyleRange[] = []
        const colorSort: RawDraftInlineStyleRange[] = []
        const sizeSort: RawDraftInlineStyleRange[] = []
        i.forEach((item, itemIndex) => {
            const flex = [classes.TEXT_LEFT, classes.TEXT_RIGHT, classes.TEXT_CENTER]
            const color = [classes.Red, classes.Yellow, classes.Pink, classes.Green, classes.DarkBlue, classes.Black, classes.Grey, classes.Orange]
            const size = [classes.size8, classes.size9, classes.size10, classes.size11, classes.size12, classes.size14, classes.size16, classes.size18, classes.size20, classes.size22, classes.size24, classes.size26, classes.size28, classes.size36, classes.size48, classes.size72]
            if (flex.includes(item.style)) {
                flexSort.push(item)
                return true
            }
            if (color.includes(item.style)) {
                colorSort.push(item)
                return true
            }
            if (size.includes(item.style)) {
                sizeSort.push(item)
                return true
            }
        })
        if (flexSort.length && colorSort.length && sizeSort.length) {
            return [colorSort[colorSort.length - 1], flexSort[flexSort.length - 1], sizeSort[sizeSort.length - 1]]
        }
        if (flexSort.length && colorSort.length) {
            return [flexSort[flexSort.length - 1], colorSort[colorSort.length - 1]]
        }
        if (flexSort.length) {
            return [flexSort[flexSort.length - 1]]
        } else {
            return i
        }

    })


}

// module.exports = {
//     offsetSort,
//     filterBlock
// }


export function useStyleText(content: RawDraftContentBlock) {

    const {inlineStyleRanges, text} = content  // входные данные
    const textBlock = useRef([<React.Fragment key={Math.random()}><span>{text}</span></React.Fragment>]) // дефолтный контент



    // основная логика по стилизации блоков
        function start() {
            if (inlineStyleRanges.length > 0) {
                const offsetArray = offsetSort(inlineStyleRanges) // сортировка по параметрам offset
                const deleteDabbleStyleArray = filterBlock(offsetArray) // фильтрует классы по группам и удаляет дублирующие
                console.log(deleteDabbleStyleArray)
                deleteDabbleStyleArray.forEach((i, index) => {
                    let cls: string[] = []

                    function clsToSorting(){
                        let clsData: any
                        cls.forEach((i, index)=>{
                            if (index === 0){
                                clsData = i
                            }else {
                                clsData = clsData + ' ' + i
                            }

                        })
                        return clsData
                    }
                    i.forEach((item, indexItem) => {
                        if (indexItem === 0) {
                            cls.push(classes[item.style])
                            return true
                        }
                        if (indexItem > 0 && indexItem !== i.length - 1) {
                            cls.push(classes[item.style])
                            return true
                        }
                        if (indexItem > 0 && indexItem === i.length - 1) {
                            cls.push(classes[item.style])
                            textBlock.current = [<React.Fragment key={Math.random()}><span
                                className={clsToSorting()}>{text.substring(item.offset, item.length)}</span></React.Fragment>]
                            return true
                        }
                    })
                })
            }
        }

        start()


    return {
        textBlock: textBlock.current
    }


}