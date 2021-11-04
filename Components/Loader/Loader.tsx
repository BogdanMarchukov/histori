import React from 'react'
import { LinearProgress } from '@mui/material'
import classes from './Loader.module.css'

type Props = {
    loading: boolean
}
const Loader = (props: Props) => {
    if (props.loading){
        return (
            <div className={classes.loaderWrap}>
                <LinearProgress color={"secondary"}/>
            </div>
        )
    } else return null

}
export default Loader