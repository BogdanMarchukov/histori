import React from 'react'
import classes from './MiniNavigation.module.css'
import Link from 'next/link'

type Props = {}
const MiniNavigation = (props: Props) => {
    return (
        <div className={classes.wrepper}>
            <div className={classes.container}>
                <nav>
                    <ul>
                        <Link href={'/'}>
                            <a>
                                <li>Главная</li>
                            </a>
                        </Link>
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