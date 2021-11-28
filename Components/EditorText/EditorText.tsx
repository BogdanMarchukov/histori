import React, {useEffect, useRef} from 'react'
import {convertToRaw, Editor} from 'draft-js'
import 'draft-js/dist/Draft.css'
import {useEditor} from "./useEditor";

function EditorText() {
    const editRef = useRef(null)
    const {
        renderClient, setRenderClient,
        editorState,commandBlockStyle,
        handleKeyCommand, commandStyle,
        onChange, customStyle
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
                    <div>
                        <button onClick={() => commandStyle(editorState, 'BOLD')}>Жирный</button>
                        <button onClick={() => commandStyle(editorState, 'ITALIC')}>Курсив</button>
                        <button onClick={() => commandBlockStyle(editorState, 'ordered-list-item')}>Список</button>
                        <Editor
                            editorState={editorState}
                            onChange={onChange}
                            editorKey="editor"
                            handleKeyCommand={handleKeyCommand}
                            ref={editRef}
                            customStyleMap={customStyle}
                            blockRendererFn={test}

                        />
                    </div>
                    :
                    null
            }

        </>
    )
}

export default EditorText
