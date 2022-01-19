import React from 'react'
import PageLayout from "../../Components/Layout/PageLayout"
import {Grid} from "@mui/material";
import PageMainContent from "../../Components/PageMainContent/PageMainContent";
import {wrapper} from "../../redux";
import {responseArticle} from "../../serverTypes/serverTypes";
import {saveText} from "../../redux/action-creators/editorTextActionCreator";
import NavigationRight from "../../Components/NavigationRight/NavigationRight";


type Props = {

}

const Text = (props: Props) => {
    return (
        <PageLayout>
            <Grid container>
                <Grid item xs={9}>
                    <PageMainContent/>
                </Grid>

                <Grid item xs={3}>
                    <NavigationRight/>
                </Grid>
            </Grid>
        </PageLayout>
    )
}



//@ts-ignore
export const getServerSideProps = wrapper.getServerSideProps( store => async context => {
   const {query: {id, dir}} = context

    try {
        const firstArticle = await fetch(`${process.env.API_URL}/api/init/post/${dir}?id=${id}`, {
            method: 'GET'
        })
       const response: responseArticle = await firstArticle.json()
        const {dispatch} = store
        saveText(dispatch, response)
    } catch (e) {

    }


})

export default Text