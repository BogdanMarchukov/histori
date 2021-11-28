import React from 'react'
import classes from './SocietyPageMainContent.module.css'
import EditorText from "../EditorText/EditorText";

type Props = {

}

const SocietyPageMainContent = (props: Props) => {
    return (
        <div className={classes.wrapper} >
            <EditorText/>
        </div>
    )
}

export default SocietyPageMainContent