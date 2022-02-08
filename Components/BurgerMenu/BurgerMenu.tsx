import React, {useState} from 'react'
import classes from './burgerMenu.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer} from "@material-ui/core";

type Props = {}
const BurgerMenu = (props: Props) => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <nav>
                <div className={classes.burgerWrapper}>
                    <MenuIcon
                        sx={{fontSize: '45px'}}
                        onClick={() => setOpenDrawer(prevState => !prevState)}
                    />
                </div>
                <div className={classes.drawerWrepper}>
                    <Drawer
                        sx={{width: '100%'}}
                        anchor={'left'}
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                    >
                        <div className={classes.drawerMenu}>

                        </div>
                    </Drawer>
                </div>
            </nav>
        </>
    )
}
export default BurgerMenu