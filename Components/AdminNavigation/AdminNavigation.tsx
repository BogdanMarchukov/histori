import React, {useEffect, useState} from 'react'
import classes from './adminNavigation.module.css'
import Cookies from 'js-cookie';
import {RootState} from "../../redux/redusers/indexReduser";
import {useDispatch, useSelector} from "react-redux";
import Link from 'next/link'
import {editorTextSelectStatus} from "../../redux/action-creators/editorTextActionCreator";


type Props = {}

const AdminNavigation = (props: Props) => {
    const [panelCss, setPanelCss] = useState(classes.none)

    const selector = (state: RootState) => {
        return {
            role: state.userReducer.role
        }
    }

    const {role} = useSelector(selector)
    const dispatch = useDispatch()


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
                                    создать новую
                                </li>
                                <li>
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