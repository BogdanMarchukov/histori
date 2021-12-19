import React from 'react'
import MiniNavigation from "../MiniNavigation/MiniNavigation";
import Footer from "../Footer/Footer";
import {Box, Grid} from "@mui/material";

type Props = {}

const PageLayout = ({children}: any) => {
    return (
        <>
            <MiniNavigation/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default PageLayout