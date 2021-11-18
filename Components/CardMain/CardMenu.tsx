import React from 'react'
import {Grid, Paper} from "@mui/material";
import classes from './cardMenu.module.css'

interface cardType {
    name: string
}

type Props = {
    cardList: cardType[]
}

const CardMenu = (props: Props) => {
    return (
        <div className={classes.cardContainer}>
            <Grid container spacing={2}>
                {
                    props.cardList.map((i, index)=> {
                        return (
                            <>
                                <Grid item sm={6}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            height: 400
                                        }}
                                    >

                                    </Paper>
                                </Grid>
                            </>
                        )
                    })
                }
                </Grid>

        </div>
    )
}

export default CardMenu