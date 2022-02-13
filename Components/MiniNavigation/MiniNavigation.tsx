import React from 'react'
import classes from './MiniNavigation.module.css'
import LinkList from "../LinkList/LinkList";


type Props = {}
const MiniNavigation = (props: Props) => {




    return (
        <div className={classes.wrepper}>
            <div className={classes.container}>
              <LinkList clsName={'activeLink'} classes={classes} />
            </div>
        </div>
    )
}
export default MiniNavigation