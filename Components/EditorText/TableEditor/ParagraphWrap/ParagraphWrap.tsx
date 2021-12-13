import React from 'react'
import classes from './paragraphWrap.module.css'


const ParagraphWrap = (props?: any) => {
    return (
        <section className={classes.wrepper}>
            {props.children}
        </section>
    )
}
export default ParagraphWrap