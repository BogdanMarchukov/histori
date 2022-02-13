import React, {useState} from 'react'
import classes from './burgerMenu.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, Drawer} from "@material-ui/core";
import {RootState} from "../../redux/redusers/indexReduser";
import {useSelector} from "react-redux";
import {avatarImgSrc} from "../../redux/action-creators/rootFunction";
import Link from 'next/link'
import LinkList from "../LinkList/LinkList";

type Props = {}
const BurgerMenu = (props: Props) => {
    const [openDrawer, setOpenDrawer] = useState(false)



    const selector = (state: RootState) => {
        return {
            avatarSrc: state.homePageReducer.pathAvatar
        }
    }

    const {avatarSrc} = useSelector(selector)
    const pathAvatar = process.env.NEXT_PUBLIC_IMG_AVATAR_PATCH ?? ''

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
                            <div className={classes.drawerAvatar}>
                                <Avatar
                                    src={avatarImgSrc(pathAvatar, avatarSrc!)}
                                    alt="Аватар"
                                    sx={{width: 100, height: 100}}
                                />
                            </div>
                                <div className={classes.drawerContent}>
                                    <span>Личный кабинет</span>
                                    <hr/>
                                   <LinkList clsName={'active'}/>
                                </div>

                        </div>
                    </Drawer>
                </div>
            </nav>
        </>
    )
}
export default BurgerMenu