import React, {useRef} from 'react'
import classes from './RenderText.module.css'
import {RawDraftContentState, RawDraftContentBlock} from "draft-js";
import Elements from "./RenderElements/Elements";


type Props = {
    content: RawDraftContentState
}

const RenderText = (props: Props) => {

    const paragraph = (content: RawDraftContentState): RawDraftContentBlock[][][] => { // сортировка контента по блокам параграфам
        const blockParagraph: RawDraftContentBlock[] = []
        const blocksContent: RawDraftContentBlock[][][] = []
        content.blocks.forEach((item, index) => {
            const {type} = item
            if (type === 'header-one') {
                blockParagraph.push(item)
                return true
            }
            if (type !== 'header-two') {
                if (content.blocks.length - 1 === index) {
                    blockParagraph.push(item)
                    blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))])
                } else {
                    blockParagraph.push(item)
                    return true
                }

            }
            if (type === 'header-two') {
                blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))])
                blockParagraph.length = 0
                blockParagraph.push(item)
            }


        })
        return blocksContent
    }


    return (
        <div className={classes.renderTextWrapper}>
            <article>
                {
                    paragraph(props.content).map((item, index) => {
                        return (
                            <React.Fragment key={Math.random()}>
                                {
                                    item.map((i, ind) => {
                                        return (
                                            <React.Fragment key={Math.random()}>
                                                        <section>
                                                            {
                                                                i.map((k, indexK)=> {
                                                                    return(
                                                                        <>
                                                                            <Elements content={k}/>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </section>


                                            </React.Fragment>
                                        )
                                    })
                                }

                            </React.Fragment>
                        )
                    })
                }
            </article>
        </div>
    )
}

export default RenderText