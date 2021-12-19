import React from 'react'
import classes from './SocietyPageMainContent.module.css'
import EditorText from "../EditorText/EditorText";
import {rootState} from "../../redux/types/indexTyps";
import {saveText} from "../../redux/action-creators/editorTextActionCreator";
import {connect} from "react-redux";
import {RawDraftContentState} from 'draft-js'

type Props = {
    saveText: (content: RawDraftContentState)=> void
}

const SocietyPageMainContent = (props: Props) => {
    return (
        <div className={classes.wrapper} >
            <EditorText saveText={props.saveText}/>
        </div>
    )
}
function mapStateToProps(state: rootState) {
    return {

    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        saveText: (content: RawDraftContentState)=> dispatch(()=> saveText(dispatch, content))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(SocietyPageMainContent)