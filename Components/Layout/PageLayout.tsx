import React from 'react'
import MiniNavigation from "../MiniNavigation/MiniNavigation";
import Footer from "../Footer/Footer";

type Props = {

}

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