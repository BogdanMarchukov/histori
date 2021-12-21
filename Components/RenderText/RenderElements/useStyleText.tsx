import {RawDraftContentBlock} from "draft-js";
import classes from './elementStyles.module.css'


export function useStyleText(content: RawDraftContentBlock) {

    const {inlineStyleRanges, text} = content
    let classArray: string = ''

    function clsName(styleName: string) {
        switch (styleName) {
            case "TEXT_CENTER":
                classArray = `${classArray} ${classes.TEXT_CENTER}`
                return classArray
            default:
                return ''
        }
    }

    if (inlineStyleRanges.length > 0) {
        const textBlock = inlineStyleRanges.map((i, index) => {
            if (i) {
                if (i.offset > 0 && index === 0) {
                    return (
                        <>
                            <span>{text.substring(0, i.offset)}</span>
                        </>
                    )
                }
                if (index === inlineStyleRanges.length - 1) {
                    return (
                        <>
                            <span className={clsName(i.style)}>{text.substring(i.offset, i.length)}</span>
                        </>
                    )
                }


            } else return (
                <>
                    <span>{text}</span>
                </>
            )
        })
        return {
            textBlock
        }
    } else return {
        textBlock: [
            <>
                <span key={Math.random().toString()}>{text}</span>
            </>
        ]
    }


}