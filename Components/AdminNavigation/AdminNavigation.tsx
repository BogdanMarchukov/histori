import React, {useEffect, useState} from 'react'
import classes from './adminNavigation.module.css'
import Cookies from 'js-cookie';
import {RootState} from "../../redux/redusers/indexReduser";
import {useDispatch, useSelector} from "react-redux";
import Link from 'next/link'
import {deleteCurrentArticle, editorTextSelectStatus} from "../../redux/action-creators/editorTextActionCreator";
import {useRouter} from "next/router";


type Props = {}

const AdminNavigation = (props: Props) => {
    const [panelCss, setPanelCss] = useState(classes.none)

    const selector = (state: RootState) => {
        return {
            role: state.userReducer.role,
            dirName: state.textReducer.dirName,
            idArticle: state.textReducer._id
        }
    }

    const {role, dirName, idArticle} = useSelector(selector)
    const dispatch = useDispatch()
    const router = useRouter()


    if (role) {
        if (role.includes('admin')) {
            return (
                <>
                    <div onMouseMove={() => setPanelCss(classes.panel)} className={classes.trigger}/>
                    <div onMouseMove={() => setPanelCss(classes.none)} className={classes.closePanel}/>
                    <div className={panelCss}>
                        <div className={classes.namePanel}>
                            <p>Панель
                                <br/>
                                администратора
                            </p>
                        </div>
                        <div className={classes.content}>
                            <ul>
                                <li>
                                    <Link href={'/edit-text'}>
                                        <a onClick={()=> editorTextSelectStatus(dispatch, 'edit')}>
                                            редактировать
                                        </a>
                                    </Link>

                                </li>
                                <li>
                                    <Link href={'/edit-text'}>
                                        <a onClick={() => editorTextSelectStatus(dispatch, 'create')}>
                                            создать новую
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    onClick={()=> deleteCurrentArticle(dispatch, dirName ?? '', idArticle ?? '', router )}
                                >
                                    удалить текущую
                                </li>
                            </ul>
                        </div>
                    </div>
                </>


            )
        } else return null

    } else {
        return null
    }


}

export default AdminNavigation