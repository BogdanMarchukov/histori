import {RawDraftContentBlock} from "draft-js";
import classes from './elementStyles.module.css'
import React, {useEffect, useRef, useState} from "react";
import {getLocalFileName} from "next/dist/build/webpack/plugins/webpack-conformance-plugin/utils/file-utils";


export function useStyleText(content: RawDraftContentBlock) {

    const {inlineStyleRanges, text} = content
    const textBlock = useRef([<React.Fragment key={Math.random()}><span>{text}</span></React.Fragment>]) // дефолтный контент
    const clsArr = useRef(classes.default) // стили
    const flexSort: any = []
    const colorSort: any = []
    const sizeSort: any = []

    function filterClass(style: string) { // фильтрует классы по группам и удаляет дублирующие
        const flex = [classes.TEXT_LEFT, classes.TEXT_RIGHT, classes.TEXT_CENTER]
        const color = [classes.Red, classes.Yellow, classes.Pink, classes.Green, classes.DarkBlue, classes.Black, classes.Grey, classes.Orange]
        const size = [classes.size8, classes.size9, classes.size10, classes.size11, classes.size12, classes.size14, classes.size16, classes.size18, classes.size20, classes.size22, classes.size24, classes.size26, classes.size28, classes.size36, classes.size48, classes.size72]
        if (flex.includes(style)) {
            console.log(classes[style])
            flexSort.push(classes[style])
        }
        if (color.includes(style)) {
            console.log(classes[style])
            colorSort.push(classes[style])
        }
        if (size.includes(style)) {
            console.log(classes[style])
            sizeSort.push(classes[style])
        }
        if (flexSort.length && colorSort.length && sizeSort.length) {
            clsArr.current = `${flexSort[flexSort.length - 1]} ${colorSort[colorSort.length - 1]} ${sizeSort[sizeSort.length - 1]}`
            return true
        }
        if (flexSort.length && colorSort.length) {
            clsArr.current = `${flexSort[flexSort.length - 1]} ${colorSort[colorSort.length - 1]}`
            return true
        }
        if (flexSort.length) {
            clsArr.current = `${flexSort[flexSort.length - 1]}`
            return true
        }


    }


    function clsName(styleName: string) {
        switch (styleName) {
            case "TEXT_CENTER":
                filterClass(styleName)
                break
            case "Red":
                filterClass(styleName)

                break
            case "Grey":
                filterClass(styleName)

                break
            case "LightLue":
                filterClass(styleName)

                break
            case "DarkBlue":
                filterClass(styleName)

                break
            case "Green":
                filterClass(styleName)

                break
            case "Yellow":
                filterClass(styleName)

                break
            case "Pink":
                filterClass(styleName)

                break
            case "Orange":
                filterClass(styleName)

                break
            case "TEXT_LEFT":
                filterClass(styleName)

                break
            case "TEXT_RIGHT":
                filterClass(styleName)

                break
            default:
                return ''
        }
    } // добавление новых стилий


    if (inlineStyleRanges.length > 0) {
        inlineStyleRanges.forEach((i, index) => {
            clsName(i.style)
            textBlock.current = [
                <React.Fragment
                    key={Math.random().toString()}
                >
                <span
                    className={clsArr.current}
                >
                    {text.substring(i.offset, i.length)}
                </span>
                </React.Fragment>]

        })
        return {
            textBlock: textBlock.current
        }
    } else {
        return {
            textBlock: textBlock.current
        }
    }





}