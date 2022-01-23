import React, {useState} from 'react'
import classes from './listNavigation.module.css'
import IconArrowDown from "../IconSvg/IconArrowDown";
import Link from 'next/link'

type Props = {
    categoryName: string
    list: string[]
    callbackHandlers: any[]
    firstPoint: string | null
    linksHref?: string[]
}

const ListNavigation = ({categoryName, list, callbackHandlers, firstPoint, linksHref = []}: Props) => {
    const [open, setOpen] = useState(false)
    const [indexActive, setIndexActive] = useState(0)

    const selectButton = () => {
        return open ? classes.textBlockActive : classes.textBlock
    }

    const selectList = () => {
        return open ? classes.activeList : classes.none
    }

    const spanIndication = (indexList: number) => {
        if (indexList === indexActive) {
            return (
                <span className={classes.activeSpan}/>
            )
        } else return null
    }

    const currentList = (indexList: number) => {
        if (indexList === indexActive) {
            return classes.currentList
        } else return ''
    }

    const linkWrap = (jsx: JSX.Element, index: number) => {
        if (linksHref.length) {
            return (
                <React.Fragment key={Math.random()}>
                    <Link href={linksHref[index]}>
                        <a>
                            {jsx}
                        </a>
                    </Link>
                </React.Fragment>

            )
        } else {
            return (
                jsx
            )
        }

    }


    return (
        <div className={classes.lest}>
            <div>
                <button onClick={() => setOpen(open => !open)} className={classes.btn}>
                    <div className={selectButton()}>
                        {categoryName}
                        <IconArrowDown/>
                    </div>
                </button>
                <ul className={selectList()}>
                    {
                        list.map((paragraph, index) => {
                            const text = index === 0 && firstPoint ? firstPoint : paragraph
                            return linkWrap(
                                <React.Fragment key={Math.random()}>
                                    <li
                                        onClick={() => {
                                            callbackHandlers[index]()
                                            setIndexActive(index)
                                        }}
                                        className={currentList(index)}
                                    >
                                        {text}
                                        {spanIndication(index)}
                                    </li>
                                </React.Fragment>
                            , index)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default ListNavigation