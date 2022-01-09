import React from 'react'
import {RawDraftContentBlock} from "draft-js";
import {useStyleText} from "./useStyleText";
import classes from './elementStyles.module.css'

type Props = {
    content: RawDraftContentBlock

}

const Elements = (props: Props) => {

    const {type, key} = props.content
    const {textBlock} = useStyleText(JSON.parse(JSON.stringify(props.content)))


    switch (type) {
        case 'header-one':
            return (
                <React.Fragment>
                    <h1 key={key} className={classes.elementH1}>
                        {textBlock}
                    </h1>
                </React.Fragment>
            )

        case 'header-two':
            return (
                <React.Fragment>
                    <h2 key={key} className={classes.elementH1}>
                        {textBlock}
                    </h2>
                    <br/>
                </React.Fragment>
            )
        case 'unstyled':
            return (
                <React.Fragment key={key}>
                    <span>
                        {textBlock}
                    </span>
                    <br/>
                </React.Fragment>
            )
        case 'unordered-list-item':
                return (
                    <React.Fragment key={key}>
                            <li>
                                {textBlock}
                            </li>
                    </React.Fragment>
                )
        case 'ordered-list-item':
            return (
                <React.Fragment key={key}>
                    <li>
                        {textBlock}
                    </li>
                </React.Fragment>
            )

        default:
            return null

    }


}




export default Elements