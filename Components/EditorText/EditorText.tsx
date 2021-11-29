import React, {useEffect, useRef} from 'react'
import {convertToRaw, Editor} from 'draft-js'
import 'draft-js/dist/Draft.css'
import {useEditor} from "./useEditor"
import classes from './editorText.module.css'

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

    const test = (contentBlock: any) => {
        console.log(contentBlock.getType().type)
    }
    return (
        <>
            {
                renderClient ?
                    <div className={classes.editWrapper}>
                        <div className={classes.toolBar}>
                            <button onClick={() => commandStyle(editorState, 'BOLD')}>Жирный</button>
                            <button onClick={() => commandStyle(editorState, 'ITALIC')}>Курсив</button>
                            <button onClick={() => commandBlockStyle(editorState, 'ordered-list-item')}>Список</button>
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
