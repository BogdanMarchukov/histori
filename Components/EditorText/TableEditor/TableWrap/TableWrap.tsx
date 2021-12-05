import React from 'react'
import classes from './TableWrap.module.css'


const TableWrap = (props: any = null) => {
    return (
        <table className={classes.wrap}>
            <tr>
                {props.children}
            </tr>
        </table>
    )
}
export default TableWrap