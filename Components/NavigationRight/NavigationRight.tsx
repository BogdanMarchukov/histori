import React from 'react'
import classes from './navigationRight.module.css'
import ListNavigation from "../ListNavigation/ListNavigation";

type Props = {
    
}
const NavigationRight = (props: Props) => {

    return (
        <div className={classes.nawWrapper}>
            <div className={classes.navigation}>
                <nav>
                    <ListNavigation/>
                </nav>
            </div>
        </div>
    )
}
export default NavigationRight