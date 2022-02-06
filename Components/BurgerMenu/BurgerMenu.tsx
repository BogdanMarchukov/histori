import React from 'react'
import classes from './burgerMenu.module.css'
import MenuIcon from '@mui/icons-material/Menu';

type Props = {}
const BurgerMenu = (props: Props) => {
    return (
        <div className={classes.burgerWrapper}>
            <nav>
                <MenuIcon sx={{fontSize: '45px'}}/>
            </nav>
        </div>
    )
}
export default BurgerMenu