import React from 'react'
import classes from './homePageContent.module.css'
import {Grid} from '@mui/material'

type Props = {

}

const HomePageContent = (props: Props) => {
    return (
        <div className={classes.contentContainer}>
            <Grid container>
                <Grid item md={9} xl={10} >
                    <div className={classes.rootContent}>

                    </div>
                </Grid>
                <Grid item md={3} xl={2}  >
                    <div className={classes.rightContent}>
                        <nav>
                            <ul>
                                <li>История</li>
                                <li>Общество</li>
                                <li>Право</li>
                                <li>Экономика</li>
                            </ul>
                        </nav>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePageContent