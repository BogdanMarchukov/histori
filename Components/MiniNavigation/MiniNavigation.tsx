import React from 'react'
import classes from './MiniNavigation.module.css'

type Props = {}
const MiniNavigation = (props: Props) => {
    return (
        <div className={classes.wrepper}>
            <div className={classes.container}>
                <nav>
                    <ul>
                        <li>Главная</li>
                        <li>История</li>
                        <li>Общество</li>
                        <li>Право</li>
                        <li>Экономика</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default MiniNavigation