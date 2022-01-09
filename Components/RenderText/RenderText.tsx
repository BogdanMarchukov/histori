import React from 'react'
import classes from './RenderText.module.css'
import {RawDraftContentBlock, RawDraftContentState} from "draft-js";
import Elements from "./RenderElements/Elements";


type Props = {
    content: RawDraftContentState
}

const RenderText = (props: Props) => {
    console.log(props.content)

    const paragraph = (content: RawDraftContentState): RawDraftContentBlock[][][] => { // сортировка контента по блокам параграфам
        const blockParagraph: RawDraftContentBlock[] = []
        const blocksContent: RawDraftContentBlock[][][] = []
        content.blocks.forEach((item, index) => {
            const {type} = item
            if (type === 'header-one') {
                blockParagraph.push(JSON.parse(JSON.stringify(item)))
                return true
            }
            if (type !== 'header-two') {
                if (content.blocks.length - 1 === index) {
                    blockParagraph.push(JSON.parse(JSON.stringify(item)))
                    blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))])
                } else {
                    blockParagraph.push(JSON.parse(JSON.stringify(item)))
                    return true
                }

            }
            if (type === 'header-two') {
                blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))])
                blockParagraph.length = 0
                blockParagraph.push(JSON.parse(JSON.stringify(item)))
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

                                {index === 0 ? <Elements content={item[0][0]}/>: null} {/*выносим заголовок статьи за приделы section*/}

                                <section>
                                    {
                                        item.map((i, ind) => {

                                            const ulList: RawDraftContentBlock[] = [] // сохраняем элименты li
                                            let ulListMap: RawDraftContentBlock[] = [] // капируем элимены li для того чтобы отчистить массив радитель
                                            const olList: RawDraftContentBlock[] = []
                                            let olListMap: RawDraftContentBlock[] = []
                                            let lastElement = true
                                            return (
                                                <React.Fragment key={Math.random()}>
                                                    {
                                                        i.map((k, indexK) => {
                                                            if (index === 0 && ind ===0 && indexK ===0){
                                                                return null // исключаем заголовок h1
                                                            }

                                                            if (k.type === 'unordered-list-item') {
                                                                ulList.push(k)
                                                                if (indexK !== i.length - 1) {
                                                                    return null
                                                                } else {
                                                                    lastElement = false
                                                                }

                                                            }
                                                            if (ulList.length) {
                                                                ulListMap = JSON.parse(JSON.stringify(ulList))
                                                                ulList.length = 0
                                                                return (
                                                                    <React.Fragment key={Math.random()}>
                                                                        <ul>
                                                                            {
                                                                                ulListMap.map(ul => {
                                                                                    return (
                                                                                        <React.Fragment
                                                                                            key={Math.random()}>
                                                                                            <Elements content={ul}/>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                        {lastElement ? <Elements content={k}/> : null}

                                                                    </React.Fragment>
                                                                )

                                                            }
                                                            if (k.type === 'ordered-list-item') {
                                                                olList.push(k)
                                                                if (indexK !== i.length - 1) {
                                                                    return null
                                                                } else {
                                                                    lastElement = false
                                                                }
                                                            }
                                                            if (olList.length) {
                                                                olListMap = JSON.parse(JSON.stringify(olList))
                                                                olList.length = 0
                                                                return (
                                                                    <React.Fragment key={Math.random()}>
                                                                        <ol>
                                                                            {
                                                                                olListMap.map(ul => {
                                                                                    return (
                                                                                        <React.Fragment
                                                                                            key={Math.random()}>
                                                                                            <Elements content={ul}/>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ol>
                                                                        {lastElement ? <Elements content={k}/> : null}
                                                                    </React.Fragment>
                                                                )

                                                            }


                                                            return (
                                                                <React.Fragment key={Math.random()}>
                                                                    <Elements content={k}/>
                                                                </React.Fragment>
                                                            )


                                                        })
                                                    }

                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </section>
                            </React.Fragment>
                        )
                    })
                }
            </article>
        </div>
    )
}

export default React.memo(RenderText)