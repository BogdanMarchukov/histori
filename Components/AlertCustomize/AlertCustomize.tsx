import React from 'react'
import classes from './Alert.module.css'
import {Alert} from '@mui/material'


interface alertObjectType {
    alertType: 'error'
    alertMassage: string | null
    alertStart: boolean
}


type Props = {
    alert: alertObjectType
}
const AlertCustomize = (props: Props) => {
    if (props.alert.alertStart) {
        return (
            <div className={classes.alertWrapper}>
                <div className={classes.alertContent}>
                    <Alert
                        severity={props.alert.alertType}
                    >
                        {props.alert.alertMassage}
                    </Alert>
                </div>
            </div>
        )
    }
    else return null

}
export default AlertCustomize