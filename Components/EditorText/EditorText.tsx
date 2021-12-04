import React, {useEffect, useRef} from 'react'
import {Editor} from 'draft-js'
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


function EditorText() {
    const editRef = useRef(null)
    const {
        renderClient, setRenderClient,
        editorState, commandBlockStyle,
        handleKeyCommand, commandStyle,
        onChange, customInlineStyle
    } = useEditor()
    const contentState = editorState.getCurrentContent()

    useEffect(() => {
        setRenderClient(true)
    }, [])


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
                                    <SelectAutoWidth commandStyle={commandStyle} minWidth={140} title={'Цвет текста'}
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
                                                         {value: '8', content: '8'},
                                                         {value: '9', content: "9"},
                                                         {value: '10', content: "10"},
                                                         {value: '11', content: "11"},
                                                         {value: '12', content: "12"},
                                                         {value: '14', content: "14"},
                                                         {value: '16', content: "16"},
                                                         {value: '18', content: "18"},
                                                         {value: '20', content: "20"},
                                                         {value: '22', content: "22"},
                                                         {value: '24', content: "24"},
                                                         {value: '26', content: "26"},
                                                         {value: '28', content: "28"},
                                                         {value: '36', content: "36"},
                                                         {value: '48', content: "48"},
                                                         {value: '72', content: "72"},
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
                                    <ListTextSvg clickHandler={() => commandBlockStyle( 'unordered-list-item')}/>
                                    <ListNumberSvg clickHandler={() => commandBlockStyle( 'ordered-list-item')}/>
                                    <TextParagraphSvg/>
                                    <SelectAutoWidth commandStyle={commandStyle} minWidth={120} title={'Интервал'}
                                                     item={[
                                                         {value: '1', content: '1'},
                                                         {value: '1.15', content: "1.15"},
                                                         {value: '1.5', content: "1.5"},
                                                         {value: '2', content: "2"},
                                                         {value: '2.5', content: "2.5"},
                                                         {value: '3', content: "3"}

                                                     ]}/>
                                    <SelectAutoWidth commandStyle={commandBlockStyle} minWidth={120} title={'Заглавие'}
                                                     item={[
                                                         {value: 'header-one', content: 'Заголовок'},
                                                         {value: 'header-two', content: "Подзаголовок"},

                                                     ]}/>
                                </div>
                            </div>


                            {/*<button onClick={() => commandStyle(editorState, 'BOLD')}>Жирный</button>*/}
                            {/*<button onClick={() => commandStyle(editorState, 'ITALIC')}>Курсив</button>*/}
                            {/*<button onClick={() => commandBlockStyle(editorState, 'ordered-list-item')}>Список</button>*/}
                        </div>
                        <div className={classes.editor}>
                            <Editor
                                editorState={editorState}
                                onChange={onChange}
                                editorKey="editor"
                                handleKeyCommand={handleKeyCommand}
                                ref={editRef}
                                //@ts-ignore
                                customStyleMap={customInlineStyle}
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
