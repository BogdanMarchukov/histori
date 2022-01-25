import React from 'react'
import classes from './PageMainContent.module.css'
import {rootState} from "../../redux/types/indexTyps";
import {connect} from "react-redux";
import RenderText from "../RenderText/RenderText";
import {Grid} from "@mui/material";
import {RawDraftContentState} from "draft-js";
import {wrapper} from "../../redux";
import {RootState} from "../../redux/redusers/indexReduser";

type Props = {
    currentArticle: RawDraftContentState | null
    tableCells: string[]
}

const PageMainContent = (props: Props) => {
    return (
        <div className={classes.wrapper} >
            {
                props.currentArticle ?
                    <RenderText content={props.currentArticle} tableCells={props.tableCells}/>
                    : null
            }
        </div>
    )
}
function mapStateToProps(state: RootState) {
    return {
        currentArticle: state.textReducer.currentArticle,
        tableCells: state.textReducer.tableCells
    }
}

function mapDispatchToProps(dispatch: any) {
    return {

    }
}


export default connect( mapStateToProps, mapDispatchToProps)(PageMainContent)