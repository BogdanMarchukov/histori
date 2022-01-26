import React, {useState} from "react";
import Draft, {ContentBlock, convertFromRaw, EditorState, RawDraftContentState, RichUtils} from "draft-js";
import TableWrap from "./TableEditor/TableWrap/TableWrap";
import Immutable from 'immutable'
import classes from './TableEditor/TableWrap/TableWrap.module.css'
import ParagraphWrap from "./TableEditor/ParagraphWrap/ParagraphWrap";
import {useDispatch} from "react-redux";
import {saveTableCells} from "../../redux/action-creators/editorTextActionCreator";


export function useEditor(startState: RawDraftContentState | null, editorStatus: string | null){
    type editorStateType = typeof editorState

    const [renderClient, setRenderClient] = useState(false) // первичный рендер на клиенте
    const [cellsTable, setCellsTable] = useState('')
    const [editorState, setEditorState] = useState( // начальный state
        () => {
            if (startState && editorStatus === 'edit') {
                return EditorState.createWithContent(convertFromRaw(startState))
            } else {
                return  EditorState.createEmpty()
            }

        }
    )
    const [taleClass, setTableClass] = useState(classes.two) // присваения css класса к ячейки таблицы

    const dispatch = useDispatch()


    function tableSelection(select: string){
        setCellsTable(select)// сохраняем в store колличество ячеек в лакальном state
            // todo присутствует баг если в статье более одной таблице
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
            if (command === 'table') {
                saveTableCells(dispatch, cellsTable) // сохраняю колличество сталбцов в таблице, для дальнейшего
                                                    // рэндера
            }
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
        'size8': {
            fontSize: '8px'
        },
        'size9': {
            fontSize: '9px'
        },
        'size10': {
            fontSize: '10px'
        },
        'size11': {
            fontSize: '11px'
        },
        'size12': {
            fontSize: '12px'
        },
        'size14': {
            fontSize: '14px'
        },
        'size16': {
            fontSize: '16px'
        },
        'size18': {
            fontSize: '18px'
        },
        'size20': {
            fontSize: '20px'
        },
        'size22': {
            fontSize: '22px'
        },
        'size24': {
            fontSize: '24px'
        },
        'size26': {
            fontSize: '26px'
        },
        'size28': {
            fontSize: '28px'
        },
        'size36': {
            fontSize: '36px'
        },
        'size48': {
            fontSize: '48px'
        },
        'size72': {
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

