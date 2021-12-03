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

    function commandStyleSelect(editorState: editorStateType){
        return function (command: string) {
            onChange(RichUtils.toggleInlineStyle(editorState, command))
        }
    }

    function commandBlockStyle(editorState: editorStateType, command: string){
        onChange(RichUtils.toggleBlockType(editorState, command))
    }

    const customInlineStyle = {
        BOLD: {
            fontWeight: 'bold'
        },
        ITALIC: {
            fontStyle: 'italic'
        },
        UNDERLINE: {
            textDecoration : 'underline'
        },
        LINE_THROUGH: {
            textDecoration : 'line-through'
        },
        FONT_ROBOTO: {
            fontFamily : '\'Roboto\', sans-serif'
        },
        '8': {
            fontSize: '8px'
        },
        '9': {
            fontSize: '9px'
        },
        '10': {
            fontSize: '10px'
        },
        '11': {
            fontSize: '11px'
        },
        '12': {
            fontSize: '12px'
        },
        '14': {
            fontSize: '14px'
        },
        '16': {
            fontSize: '16px'
        },
        '18': {
            fontSize: '18px'
        },
        '20': {
            fontSize: '20px'
        },
        '22': {
            fontSize: '22px'
        },
        '24': {
            fontSize: '24px'
        },
        '26': {
            fontSize: '26px'
        },
        '28': {
            fontSize: '28px'
        },
        '36': {
            fontSize: '36px'
        },
        '48': {
            fontSize: '48px'
        },
        '72': {
            fontSize: '72px'
        },
        Black: {
            color: 'black'
        },
        Red: {
            color: 'red'
        },
        Grey: {
            color: 'grey'
        },
        LightLue: {
            color: 'blue'
        },
        DarkBlue: {
            color: 'navy'
        },
        Green: {
            color: 'green'
        },
        Yellow: {
            color: 'yellow'
        },
        Pink: {
            color: 'fuchsia'
        },
        Orange: {
            color: '#ffa500'
        }


    }


    return {
        renderClient,
        setRenderClient,
        editorState,
        setEditorState,
        handleKeyCommand,
        commandStyle: commandStyleSelect(editorState),
        onChange,
        customInlineStyle,
        commandBlockStyle
    }
}

