import {RawDraftContentBlock, RawDraftInlineStyleRange} from "draft-js";
import classes from './elementStyles.module.css'
import React, {useEffect, useMemo, useRef, useState} from "react";

// сортировка по параметрам offset
export function offsetSort(inlineStyleRanges: RawDraftInlineStyleRange[]): RawDraftInlineStyleRange[][] {
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
export function filterBlock(styleBlock: RawDraftInlineStyleRange[][]): RawDraftInlineStyleRange[][] {

    return styleBlock.map((i, index) => {
        const flexSort: RawDraftInlineStyleRange[] = []
        const colorSort: RawDraftInlineStyleRange[] = []
        const sizeSort: RawDraftInlineStyleRange[] = []
        i.forEach((item, itemIndex) => {
            const flex = ['TEXT_LEFT', 'TEXT_RIGHT', 'TEXT_CENTER']
            const color = ['Red', 'Yellow', 'Pink', 'Green', 'DarkBlue', 'Black', 'Grey', 'Orange']
            const size = ['size8', 'size9', 'size10', 'size11', 'size12', 'size14', 'size16', 'size18', 'size20', 'size22', 'size24', 'size26', 'size28', 'size36', 'size48', 'size72']
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
        if (colorSort.length && sizeSort.length) {
            return [colorSort[colorSort.length - 1], sizeSort[sizeSort.length - 1]]
        }
        if (flexSort.length && sizeSort.length) {
            return [flexSort[flexSort.length - 1], flexSort[flexSort.length - 1]]
        }
        if (flexSort.length) {
            return [flexSort[flexSort.length - 1]]
        }
        if (colorSort.length) {
            return [colorSort[colorSort.length - 1]]
        }
        if (sizeSort.length) {
            return [sizeSort[sizeSort.length - 1]]
        } else {
            return i
        }

    })


}


export function useStyleText(content: RawDraftContentBlock) {

    const {inlineStyleRanges, text} = content  // входные данные
    const textBlock = useRef([<React.Fragment key={Math.random()}></React.Fragment>]) // дефолтный контент
    const offsetCount = useRef(0)


    // основная логика по стилизации блоков
    function start() {
        if (inlineStyleRanges.length > 0) {
            const offsetArray = offsetSort(inlineStyleRanges) // сортировка по параметрам offset
            const deleteDabbleStyleArray = filterBlock(offsetArray) // фильтрует классы по группам и удаляет дублирующие
            deleteDabbleStyleArray.forEach((i, index) => {
                let cls = ''
                const clsName = () => {
                    i.forEach(item => {
                        cls = `${cls} ${classes[item.style]}`
                    })
                }
                if (index === deleteDabbleStyleArray.length - 1){
                    clsName()
                    textBlock.current = [
                        ...textBlock.current,
                        <React.Fragment key={Math.random()}><span>{text.substring(offsetCount.current, i[0].offset)}</span></React.Fragment>,
                        <React.Fragment key={Math.random()}><span className={cls}>{text.substring(i[0].offset, i[0].offset + i[0].length)}</span></React.Fragment>,
                        <React.Fragment key={Math.random()}><span>{text.substring(i[0].offset + i[0].length)}</span></React.Fragment>,


                    ]
                    return true
                }

                if (index === 0 && i[0].offset > 0){
                    clsName()
                   textBlock.current = [
                       <React.Fragment key={Math.random()}><span>{text.substring(0, i[0].offset)}</span></React.Fragment>,
                       <React.Fragment key={Math.random()}><span className={cls}>{text.substring(i[0].offset, i[0].offset + i[0].length)}</span></React.Fragment>
                   ]
                    offsetCount.current = i[0].offset + i[0].length
                    return true
                }


                if (index > 0 && offsetCount.current < i[0].offset) {
                    clsName()
                    textBlock.current = [
                        ...textBlock.current,
                        <React.Fragment key={Math.random()}><span>{text.substring(offsetCount.current, i[0].offset)}</span></React.Fragment>,
                        <React.Fragment key={Math.random()}><span className={cls}>{text.substring(i[0].offset, i[0].offset + i[0].length)}</span></React.Fragment>
                    ]
                    offsetCount.current = i[0].offset + i[0].length
                    return true
                }




            })

        } else textBlock.current = [<React.Fragment key={Math.random()}><span>{text}</span></React.Fragment>]
    }

    start()


    return {
        textBlock: textBlock.current
    }


}