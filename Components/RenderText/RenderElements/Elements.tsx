import React from 'react'
import {RawDraftContentBlock} from "draft-js";
import {useStyleText} from "./useStyleText";
import classes from './elementStyles.module.css'

type Props = {
    content: RawDraftContentBlock
}

const Elements = (props: Props) => {
    const {type, key} = props.content


    const {textBlock} = useStyleText(props.content)
    console.log(textBlock)

    switch (type) {
        case 'header-one':
            return (
                <React.Fragment >
                        <h1 key={key} className={classes.elementH1}>
                            {textBlock}
                        </h1>
                </React.Fragment>
            )
        case 'unstyled':
            return (
                <React.Fragment key={key}>
                    <span>
                        {textBlock}
                    </span>
                </React.Fragment>
            )
        default:
            return null

    }


}

export default Elements