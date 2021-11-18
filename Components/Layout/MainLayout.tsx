import React from 'react'
import classes from './layout.module.css'
import Header from "../Header/Header"
import Footer from "../Footer/Footer";


const MainLayout = ({children}: any) => {
    return (
        <>
            <div className={classes.layout}>
                    <Header/>
                <main>{children}</main>
                <Footer/>
            </div>

        </>
    )
}

export default MainLayout