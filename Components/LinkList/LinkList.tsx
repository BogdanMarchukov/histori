import React, {useEffect} from 'react'
import Link from "next/link";
import {RootState} from "../../redux/redusers/indexReduser";
import {useSelector} from "react-redux";
import {useSelectClass} from "./useSelectClass";

type Props = {
    clsName: string,
    classes: any
}

const LinkList = (props: Props) => {

    const selector = (state: RootState) => {
        return {
            dirName: state.textReducer.dirName
        }
    }

    const {dirName} = useSelector(selector)
    const {classLink, classSelector} = useSelectClass(dirName, props.clsName)

    useEffect(()=> {
        classSelector()
    }, [dirName])


    return (
      <React.Fragment>
            <nav>
                <ul>
                    <Link href={'/'}>
                        <a className={props.classes[classLink[0]]}>
                            <li>Главная</li>
                            <span/>
                        </a>
                    </Link>
                    <Link href={'/post/story?id=0'}>
                        <a className={props.classes[classLink[1]]}>
                            <li>История</li>
                            <span/>
                        </a>
                    </Link>
                    <Link href={'/post/society?id=0'}>
                        <a className={props.classes[classLink[2]]}>
                            <li>Общество</li>
                            <span/>
                        </a>
                    </Link>
                    <Link href={'/post/jurisprudence?id=0'}>
                        <a className={props.classes[classLink[3]]}>
                            <li>Право</li>
                            <span/>
                        </a>
                    </Link>
                    <Link href={'/post/economy?id=0'}>
                        <a className={props.classes[classLink[4]]}>
                            <li>Экономика</li>
                            <span/>
                        </a>
                    </Link>

                </ul>
            </nav>
        </React.Fragment>
    )
}
export default LinkList