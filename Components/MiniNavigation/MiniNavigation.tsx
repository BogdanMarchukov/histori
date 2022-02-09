import React, {useEffect, useState} from 'react'
import classes from './MiniNavigation.module.css'
import Link from 'next/link'
import {RootState} from "../../redux/redusers/indexReduser";
import {useSelector} from "react-redux";
import {useSelectClass} from "./useSelectClass";

type Props = {}
const MiniNavigation = (props: Props) => {

    const selector = (state: RootState) => {
        return {
            dirName: state.textReducer.dirName
        }
    }

    const {dirName} = useSelector(selector)
    const {classLink, classSelector} = useSelectClass(dirName, 'activeLink')


    useEffect(()=> {
        classSelector()
    }, [dirName])


    return (
        <div className={classes.wrepper}>
            <div className={classes.container}>
                <nav>
                    <ul>
                        <Link href={'/'}>
                            <a className={classes[classLink[0]]}>
                                <li>Главная</li>
                                <span/>
                            </a>
                        </Link>
                        <Link href={'/post/story?id=0'}>
                            <a className={classes[classLink[1]]}>
                                <li>История</li>
                                <span/>
                            </a>
                        </Link>
                        <Link href={'/post/society?id=0'}>
                            <a className={classes[classLink[2]]}>
                                <li>Общество</li>
                                <span/>
                            </a>
                        </Link>
                        <Link href={'/post/jurisprudence?id=0'}>
                            <a className={classes[classLink[3]]}>
                                <li>Право</li>
                                <span/>
                            </a>
                        </Link>
                        <Link href={'/post/economy?id=0'}>
                            <a className={classes[classLink[4]]}>
                                <li>Экономика</li>
                                <span/>
                            </a>
                        </Link>

                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default MiniNavigation