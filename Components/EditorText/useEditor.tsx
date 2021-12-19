import React, {useState} from "react";
import Draft, {ContentBlock, EditorState, RichUtils} from "draft-js";
import TableWrap from "./TableEditor/TableWrap/TableWrap";
import Immutable from 'immutable'
import classes from './TableEditor/TableWrap/TableWrap.module.css'
import ParagraphWrap from "./TableEditor/ParagraphWrap/ParagraphWrap";

export function useEditor(){
    type editorStateType = typeof editorState

    const [renderClient, setRenderClient] = useState(false) // первичный рендер на клиенте
    const [editorState, setEditorState] = useState( // начальный state
        () => EditorState.createEmpty()
    )
    const [taleClass, setTableClass] = useState(classes.two) // присваения css класса к ячейки таблицы

    function tableSelection(select: string){
        switch (select) {
            case '2':
                setTableClass(classes.two)
                break
            case '3':
                setTableClass(classes.three)
                break
            case '4':
                setTableClass(classes.four)
                break
            case '5':
                setTableClass(classes.five)
                break
            case '6':
                setTableClass(classes.six)
                break
        }
    }


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

    function myBlockStyleFn(contentBlock: ContentBlock) {
        const type = contentBlock.getType()
        if (type === 'row') {
            return classes.row.toString()
        }
        if (type === 'table') {
            return taleClass
        }
        else return ''
    }


    function commandBlockStyleSelect(editorState: editorStateType){
        return function (command: string) {
            onChange(RichUtils.toggleBlockType(editorState, command))
        }
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
        },
        TEXT_LEFT: {
            display: 'flex',
            justifyContent: 'flex-start'

        },
        TEXT_CENTER: {
            display: 'flex',
            justifyContent: 'center'
        },
        TEXT_RIGHT: {
            display: 'flex',
            justifyContent: 'flex-end'
        }


    }

    const blockRenderMap = Immutable.Map({
        'table': {
            element: 'div',
            // @ts-ignore
            wrapper: <TableWrap/>,
        },
        row: {
            element: 'div'
        },
        paragraph: {
            element: 'div',
            wrapper: <ParagraphWrap/>
        }
    });
    const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);


    return {
        renderClient,
        setRenderClient,
        editorState,
        setEditorState,
        handleKeyCommand,
        commandStyle: commandStyleSelect(editorState),
        onChange,
        customInlineStyle,
        commandBlockStyle: commandBlockStyleSelect(editorState),
        extendedBlockRenderMap,
        myBlockStyleFn,
        tableSelection
    }
}

