import React, {useEffect, useRef} from 'react'
import {convertToRaw, Editor, RawDraftContentState} from 'draft-js'
import 'draft-js/dist/Draft.css'
import {useEditor} from "./useEditor"
import classes from './editorText.module.css'
import ItalicSvg from '../IconSvg/Editor/ItalicSvg'
import BoldSvg from '../IconSvg/Editor/BoldSvg'
import UnderlineSvg from '../IconSvg/Editor/UnderlineSvg'
import StrikethroughSvg from '../IconSvg/Editor/StrikethroughSvg'
import TextLeftSvg from '../IconSvg/Editor/TextLeftSvg'
import TextCenterSvg from '../IconSvg/Editor/TextCenterSvg'
import TextRightSvg from '../IconSvg/Editor/TextRightSvg'
import ListTextSvg from '../IconSvg/Editor/ListTextSvg'
import ListNumberSvg from '../IconSvg/Editor/ListNumberSvg'
import TextParagraphSvg from '../IconSvg/Editor/TextParagraphSvg'
import SelectAutoWidth from "../SelectAutoWidth/SelectAutoWidth"
import {Button} from "@mui/material";
import SaveProject from "../IconSvg/Editor/SaveProject";
import {RootState} from "../../redux/redusers/indexReduser";
import {useDispatch, useSelector} from "react-redux";
import {saveArticle} from "../../redux/action-creators/editorTextActionCreator";


type Props = {
}

function EditorText(props: Props) {
    const editRef = useRef(null)
    const {
        renderClient, setRenderClient,
        editorState, commandBlockStyle,
        handleKeyCommand, commandStyle,
        onChange, customInlineStyle,
        extendedBlockRenderMap,
        myBlockStyleFn, tableSelection
    } = useEditor()
    const contentState = editorState.getCurrentContent()

    useEffect(() => {
        setRenderClient(true)
    }, [])

    function textReducerSelect(state: RootState) {

        return {
            // @ts-ignore
            tableCells: state.textReducer.tableCells
        }
    }

    interface useSelector {
        tableCells: string[]

    }



    const {tableCells}: useSelector = useSelector(textReducerSelect)
    const dispatch: ()=> void = useDispatch()





    return (
        <>
            {
                renderClient ?
                    <div className={classes.editWrapper}>
                            <div className={classes.toolBar}>
                                <div>
                                    <div className={classes.fontTitle}>
                                        <p>Шрифт</p>
                                    </div>
                                    <div className={classes.font}>
                                        <ItalicSvg clickHandler={() => commandStyle('ITALIC')}/>
                                        <BoldSvg clickHandler={() => commandStyle('BOLD')}/>
                                        <UnderlineSvg clickHandler={() => commandStyle('UNDERLINE')}/>
                                        <StrikethroughSvg clickHandler={() => commandStyle('LINE_THROUGH')}/>
                                        <SelectAutoWidth commandStyle={commandStyle} minWidth={100} title={'Шрифт'}
                                                         item={[{value: 'FONT_ROBOTO', content: 'Roboto'}
                                                         ]}/>
                                        <SelectAutoWidth commandStyle={commandStyle} minWidth={140}
                                                         title={'Цвет текста'}
                                                         item={[
                                                             {value: 'Black', content: 'черный'},
                                                             {value: 'Red', content: 'красный'},
                                                             {value: 'Grey', content: 'серый'},
                                                             {value: 'LightLue', content: 'голубой'},
                                                             {value: 'DarkBlue', content: 'синий'},
                                                             {value: 'Green', content: 'зеленый'},
                                                             {value: 'Yellow', content: 'желтый'},
                                                             {value: 'Pink', content: 'розовый'},
                                                             {value: 'Orange', content: 'оранжевый'}
                                                         ]}/>
                                        <SelectAutoWidth commandStyle={commandStyle} minWidth={100} title={'размер'}
                                                         item={[
                                                             {value: 'size8', content: '8'},
                                                             {value: 'size9', content: "9"},
                                                             {value: 'size10', content: "10"},
                                                             {value: 'size11', content: "11"},
                                                             {value: 'size12', content: "12"},
                                                             {value: 'size14', content: "14"},
                                                             {value: 'size16', content: "16"},
                                                             {value: 'size18', content: "18"},
                                                             {value: 'size20', content: "20"},
                                                             {value: 'size22', content: "22"},
                                                             {value: 'size24', content: "24"},
                                                             {value: 'size26', content: "26"},
                                                             {value: 'size28', content: "28"},
                                                             {value: 'size36', content: "36"},
                                                             {value: 'size48', content: "48"},
                                                             {value: 'size72', content: "72"},
                                                         ]}

                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.fontTitle}>
                                        <p>Абзац</p>
                                    </div>
                                    <div className={classes.font}>
                                        <TextLeftSvg clickHandler={() => commandStyle('TEXT_LEFT')}/>
                                        <TextCenterSvg clickHandler={() => commandStyle('TEXT_CENTER')}/>
                                        <TextRightSvg clickHandler={() => commandStyle('TEXT_RIGHT')}/>
                                        <ListTextSvg clickHandler={() => commandBlockStyle('unordered-list-item')}/>
                                        <ListNumberSvg clickHandler={() => commandBlockStyle('ordered-list-item')}/>
                                        <TextParagraphSvg clickHandler={() => commandBlockStyle('paragraph')}/>
                                        <SelectAutoWidth commandStyle={commandStyle} minWidth={120} title={'Интервал'}
                                                         item={[
                                                             {value: '1', content: '1'},
                                                             {value: '1.15', content: "1.15"},
                                                             {value: '1.5', content: "1.5"},
                                                             {value: '2', content: "2"},
                                                             {value: '2.5', content: "2.5"},
                                                             {value: '3', content: "3"}

                                                         ]}/>
                                        <SelectAutoWidth commandStyle={commandBlockStyle} minWidth={120}
                                                         title={'Заглавие'}
                                                         item={[
                                                             {value: 'header-one', content: 'Заголовок'},
                                                             {value: 'header-two', content: "Подзаголовок"},

                                                         ]}/>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.fontTitle}>
                                        <p>Таблица</p>
                                    </div>
                                    <div className={classes.font}>
                                        <SelectAutoWidth commandStyle={tableSelection} minWidth={120} title={'столбцы'}
                                                         item={[
                                                             {value: '2', content: '2'},
                                                             {value: '3', content: "3"},
                                                             {value: '4', content: "4"},
                                                             {value: '5', content: "5"},
                                                             {value: '6', content: "6"}

                                                         ]}/>
                                        <Button
                                            variant="outlined"
                                            onClick={() => commandBlockStyle('table')}
                                        >
                                            создать
                                        </Button>
                                        <Button
                                            sx={{margin: '0 8px 0 5px',}}
                                            onClick={() => commandBlockStyle('split-block')}
                                            variant="outlined"

                                        >
                                            выход
                                        </Button>
                                    </div>

                                </div>
                                <div>
                                    <div className={classes.fontTitle}>
                                        <p>Проект</p>
                                    </div>
                                    <div className={classes.font}>
                                       <SaveProject clickHandler={()=> saveArticle(dispatch, convertToRaw(contentState), tableCells, 'post')}/>
                                    </div>

                                </div>

                            </div>
                        <div className={classes.editor}>
                            <Editor
                                editorState={editorState}
                                blockRenderMap={extendedBlockRenderMap}
                                onChange={onChange}
                                editorKey="editor"
                                handleKeyCommand={handleKeyCommand}
                                ref={editRef}
                                //@ts-ignore
                                customStyleMap={customInlineStyle}
                                blockStyleFn={myBlockStyleFn}
                            />
                        </div>
                    </div>
                    :
                    null
            }

        </>
    )
}

export default EditorText
