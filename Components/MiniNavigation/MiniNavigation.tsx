import React, {useEffect, useState} from 'react'
import classes from './MiniNavigation.module.css'
import Link from 'next/link'
import {RootState} from "../../redux/redusers/indexReduser";
import {useSelector} from "react-redux";

type Props = {}
const MiniNavigation = (props: Props) => {

    const selector = (state: RootState) => {
        return {
            dirName: state.textReducer.dirName
        }
    }

    const {dirName} = useSelector(selector)
    const [classLink, setClassLink] = useState([classes.activeLink, '', '', '', ''])

    const classSelector = () => {
        switch (dirName) {
            case null :
                setClassLink([classes.activeLink, '', '', '', ''])
                break
            case 'story' :
                setClassLink(['', classes.activeLink, '', '', ''])
                break
            case 'society' :
                setClassLink(['', '', classes.activeLink, '', ''])
                break
            case 'jurisprudence' :
                setClassLink(['', '', '', classes.activeLink, ''])
                break
            case 'economy' :
                setClassLink(['', '', '', '', classes.activeLink])
                break
        }
    }

    useEffect(()=> {
        classSelector()
    }, [dirName])


    return (
        <div className={classes.wrepper}>
            <div className={classes.container}>
                <nav>
                    <ul>
                        <Link href={'/'}>
                            <a className={classLink[0]}>
                                <li>Главная</li>
                                <span/>
                            </a>
                        </Link>
                        <Link href={'/post/story?id=0'}>
                            <a className={classLink[1]}>
                                <li>История</li>
                                <span/>
                            </a>
                        </Link>
                        <Link href={'/post/society?id=0'}>
                            <a className={classLink[2]}>
                                <li>Общество</li>
                                <span/>
                            </a>
                        </Link>
                        <Link href={'/post/jurisprudence?id=0'}>
                            <a className={classLink[3]}>
                                <li>Право</li>
                                <span/>
                            </a>
                        </Link>
                        <Link href={'/post/economy?id=0'}>
                            <a className={classLink[4]}>
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