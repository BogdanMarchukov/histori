import React, {useEffect, useState} from 'react'
import classes from './RenderText.module.css'
import {RawDraftContentBlock, RawDraftContentState} from "draft-js";
import Elements from "./RenderElements/Elements";
import {useDispatch, useSelector} from "react-redux";
import {saveParagraph} from "../../redux/action-creators/editorTextActionCreator";
import {RootState} from "../../redux/redusers/indexReduser";


type Props = {
    content: RawDraftContentState
    tableCells: string[]
}

const RenderText = (props: Props) => {

    const dispatch = useDispatch()
    const [clientRender, setClientRender] = useState(false)



    // функция разбивает контент на параграфы
    const paragraph = (content: RawDraftContentState): RawDraftContentBlock[][][] => { // сортировка контента по блокам параграфам
        const blockParagraph: RawDraftContentBlock[] = []
        const blocksContent: RawDraftContentBlock[][][] = []
        content.blocks.forEach((item, index) => {
            const {type} = item
            if (type === 'header-one') {
                blockParagraph.push(JSON.parse(JSON.stringify(item)))
                return true
            }
            if (type === 'header-two' && index === 0) {
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
         if (!clientRender){
            setClientRender(true)
            saveParagraph(dispatch, blocksContent) // сохраняем в store отсартированный массив

        }
        return blocksContent
    }



    return (
        <div className={classes.renderTextWrapper}>
            <article>
                {
                    paragraph(props.content).map((item, index) => {

                        return (
                            <React.Fragment key={Math.random()}>

                                {index === 0 ? <Elements
                                    content={item[0][0]}/> : null} {/*выносим заголовок статьи за приделы section*/}

                                <section>
                                    {
                                        item.map((i, ind) => {


                                            const ulList: RawDraftContentBlock[] = [] // сохраняем элименты li маркированный список
                                            let ulListCache: RawDraftContentBlock[] = [] // капируем элимены li для того чтобы отчистить массив радитель
                                            const olList: RawDraftContentBlock[] = [] // нумерованный список
                                            let olListCache: RawDraftContentBlock[] = []
                                            const line: RawDraftContentBlock[] = [] // сортировка ячеек таблицы по строкам
                                            let lineCache: RawDraftContentBlock[] = [] // кеш строк таблицы
                                            let table: RawDraftContentBlock[][] = [] // вся таблица целеком разбита на строки
                                            let tableCache: RawDraftContentBlock[][] = []
                                            let lastElement = true
                                            return (
                                                <React.Fragment key={Math.random()}>
                                                    {
                                                        i.map((k, indexK) => {
                                                            function renderTable() {
                                                                    tableCache = JSON.parse(JSON.stringify(table))
                                                                    table.length = 0
                                                                    return (
                                                                        <React.Fragment key={Math.random()}>
                                                                            <table key={Math.random()}>
                                                                                <tbody key={Math.random()}>
                                                                                {
                                                                                    tableCache.map(line => { // линия таблицы
                                                                                        return (
                                                                                            <React.Fragment key={Math.random()}>
                                                                                                <tr>
                                                                                                    {
                                                                                                        line.map(cell => { // ячейка табл
                                                                                                            return (
                                                                                                                <React.Fragment key={Math.random()}>
                                                                                                                    <Elements content={cell}/>
                                                                                                                </React.Fragment>

                                                                                                            )
                                                                                                        })
                                                                                                    }
                                                                                                </tr>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                }
                                                                                </tbody>
                                                                            </table>
                                                                            {lastElement ? <Elements content={k}/> : null}
                                                                        </React.Fragment>
                                                                    )

                                                            }


                                                            if (index === 0 && ind === 0 && indexK === 0) {
                                                                return null // исключаем заголовок h1
                                                            }

                                                            if (k.type === 'table' && line.length === +props.tableCells[0]) {
                                                                lineCache = JSON.parse(JSON.stringify(line))
                                                                line.length = 0
                                                                table.push(lineCache)
                                                                line.push(k)
                                                                return null

                                                            }



                                                            if (k.type !== 'table' && table.length || indexK === i.length - 1 && table.length) {
                                                                if (k.type === 'table'){
                                                                    line.push(k)
                                                                }
                                                                lineCache = JSON.parse(JSON.stringify(line))
                                                                line.length = 0
                                                                table.push(lineCache)
                                                                return  renderTable()

                                                            }
                                                            if (k.type === 'table' && line.length !== +props.tableCells[0]) {
                                                                line.push(k)
                                                                return null

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
                                                                ulListCache = JSON.parse(JSON.stringify(ulList))
                                                                ulList.length = 0
                                                                return (
                                                                    <React.Fragment key={Math.random()}>
                                                                        <ul>
                                                                            {
                                                                                ulListCache.map(ul => {
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
                                                                olListCache = JSON.parse(JSON.stringify(olList))
                                                                olList.length = 0
                                                                return (
                                                                    <React.Fragment key={Math.random()}>
                                                                        <ol>
                                                                            {
                                                                                olListCache.map(ul => {
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