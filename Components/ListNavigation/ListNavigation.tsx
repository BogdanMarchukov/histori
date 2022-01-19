import React from 'react'
import classes from './listNavigation.module.css'
import IconArrowDown from "../IconSvg/IconArrowDown";

type Props = {}
const ListNavigation = (props: Props) => {
    return (
        <div className={classes.lest}>
            <div>
                <button className={classes.btn}>
                    <div className={classes.textBlock}>
                        Содержание
                        <IconArrowDown/>
                    </div>

                </button>
            </div>
        </div>
    )
}
export default ListNavigation