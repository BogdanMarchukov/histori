import React from 'react'
import PageLayout from "../Components/Layout/PageLayout"
import {Grid} from "@mui/material";
import SocietyPageMainContent from "../Components/SocietyPageMainContent/SocietyPageMainContent";
import {connect} from "react-redux";
import {RootState} from "../redux/redusers/indexReduser";
import {RawDraftContentState} from "draft-js";
import RenderText from "../Components/RenderText/RenderText";


type Props = {
    currentArticle: RawDraftContentState | null
    tableCells: string[]
}

const Society = (props: Props) => {
    return (
        <PageLayout>
            <Grid container>
                <Grid item lg={10}>
                    <SocietyPageMainContent/>
                    <hr style={{marginTop: '200px'}}/>
                    {
                        props.currentArticle ?
                            <RenderText content={props.currentArticle} tableCells={props.tableCells}/>
                            : null
                    }
                </Grid>
                <Grid item lg={2}>

                </Grid>
            </Grid>
        </PageLayout>
    )
}

function mapStateToProps(state: RootState) {
    return {
        // @ts-ignore
        currentArticle: state.textReducer.currentArticle,
        // @ts-ignore
        tableCells: state.textReducer.tableCells
    }
}

function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Society)