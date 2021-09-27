import React from 'react'
import classes from './layout.module.css'
import Header from "../Header/Header"


const Layout = ({children}: any) => {
    return (
        <>
            <div className={classes.layout}>
                <header>
                    <Header/>
                </header>
                <main>{children}</main>

            </div>

        </>
    )
}

export default Layout