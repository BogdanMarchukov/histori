import React from 'react'
import classes from './RenderText.module.css'
import {RawDraftContentState} from "draft-js";
import Elements from "./RenderElements/Elements";


type Props = {
    content: RawDraftContentState
}

const RenderText = (props: Props) => {


    return (
        <div className={classes.renderTextWrapper}>
            {props.content.blocks.map((item, index) => {
                return (
                    <>
                        <article>
                            <Elements content={item}/>
                        </article>
                    </>
                )


            })}
        </div>
    )
}

export default RenderText