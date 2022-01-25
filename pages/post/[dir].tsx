import React from 'react'
import PageLayout from "../../Components/Layout/PageLayout"
import {Grid} from "@mui/material";
import PageMainContent from "../../Components/PageMainContent/PageMainContent";
import {wrapper} from "../../redux";
import {responseArticle} from "../../serverTypes/serverTypes";
import {saveParagraph, saveText} from "../../redux/action-creators/editorTextActionCreator";
import NavigationRight from "../../Components/NavigationRight/NavigationRight";
import {TokenHandler} from "../../models/TokenHandler";
import {userDto} from "../../models/UserHandler";
import {initUser} from "../../redux/action-creators/homePageActionCreator";
import AdminNavigation from "../../Components/AdminNavigation/AdminNavigation";


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
                    <AdminNavigation/>
                    <NavigationRight/>
                </Grid>
            </Grid>
        </PageLayout>
    )
}



//@ts-ignore
export const getServerSideProps = wrapper.getServerSideProps( store => async context => {
   const {query: {id, dir}, req: {cookies: {token}}} = context
    let userId = ''
    if (token) {
        userId = await TokenHandler.decodedPayloadRefresh(token)
        if (userId) {
            const response = await fetch(`${process.env.API_URL}/api/init/user`, {
                method: 'POST',
                body: JSON.stringify({userId}),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const result: userDto = await response.json()

            // @ts-ignore
            if (!result.error) {
                // @ts-ignore
                store.dispatch(initUser(result))
            }
        }
    }


    try {
        const firstArticle = await fetch(`${process.env.API_URL}/api/init/post/${dir}?id=${id}`, {
            method: 'GET'
        })
       const response: responseArticle = await firstArticle.json()
        const {dispatch} = store
        saveText(dispatch, response)
        saveParagraph(dispatch, response.article.article)

    } catch (e) {

    }


})

export default Text