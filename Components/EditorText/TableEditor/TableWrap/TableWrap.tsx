import React from 'react'
import classes from './TableWrap.module.css'


type Props = {
    children?: any

}

const TableWrap = (props: Props) => {


    return (
        <>
            <div className={classes.wrap}>
                    {props.children}
            </div>
        </>
    )
}
export default TableWrap