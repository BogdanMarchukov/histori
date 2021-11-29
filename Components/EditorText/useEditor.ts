import {useState} from "react";
import {EditorState, RichUtils} from "draft-js";

export function useEditor(){
    type editorStateType = typeof editorState

    const [renderClient, setRenderClient] = useState(false)
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    )



    function handleKeyCommand(command:string, editorState: editorStateType) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    function onChange(editorState: editorStateType) {
        setEditorState(editorState)
    }

    function commandStyle(editorState: editorStateType, command: string){
        onChange(RichUtils.toggleInlineStyle(editorState, command))
    }

    function commandBlockStyle(editorState: editorStateType, command: string){
        onChange(RichUtils.toggleBlockType(editorState, command))
    }

    const customInlineStyle = {
        BOLD: {
            fontWeight: 'bold'
        },
        ITALIC: {

        }
    }


    return {
        renderClient,
        setRenderClient,
        editorState,
        setEditorState,
        handleKeyCommand,
        commandStyle,
        onChange,
        customInlineStyle,
        commandBlockStyle
    }
}

