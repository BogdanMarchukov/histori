import React from 'react'
import MiniNavigation from "../MiniNavigation/MiniNavigation";
import Footer from "../Footer/Footer";
import {Box, Grid} from "@mui/material";
import AlertCustomize from "../AlertCustomize/AlertCustomize";
import {RootState} from "../../redux/redusers/indexReduser";
import {useSelector} from "react-redux";



const PageLayout = ({children}: any) => {
    const selector = (state: RootState)  => {
        return {
            alert: state.homePageReducer.alert
        }
    }

    const {alert} = useSelector(selector)


    return (
        <>

            <main>
                <MiniNavigation/>
                <AlertCustomize alert={alert}/>
                {children}
                <Footer/>
            </main>

        </>
    )
}

export default PageLayout