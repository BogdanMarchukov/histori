import React, {useEffect} from 'react'
import Image from "next/image"
import {Avatar, Grid} from "@mui/material"
import classes from './RegisterBox.module.css'
import Button from '@mui/material/Button';

interface userType {
    name: string | null
    email: string | null
}

type Props = {
    auth: boolean
    srcImg: string | null
    user: userType | null
    show: boolean
    showProfileWindow: (profileWindow: boolean)=> void
}

const RegisterBox = (props: Props) => {
    const {show} = props

    const userName = (name: string | null, email: string | null): string | null => {
        if (name) {
            return name[0]
        } else
            if (email){
            return email[0]
        } else return null
    }

    const showWindow = () => {
        if (props.show) {
            return `${classes.box} ${classes.show}`
        } else {
            return `${classes.box} ${classes.hide}`
        }
    }

    const closeWindow = () => {
        if (props.show){
            props.showProfileWindow(props.show)
            window.removeEventListener('click', closeWindow)
        }
    }

    useEffect(()=> {
        if (show) {
            window.addEventListener('click', closeWindow)
        }
    }, [show])



        return (
            <div className={showWindow()}>
                <div className={classes.header}>
                    <p>Привет Ольга</p>
                </div>

                <Avatar sx={{
                    width: 70,
                    height: 70,
                    position: 'fixed',
                    top: '84px'
                }} alt="Гость">
                    {
                        props.srcImg ?
                            <Image
                                src={props.srcImg}
                                alt="Picture of the author"
                                width={65}
                                height={60}
                            />
                            : userName(props.user?.name ?? null , props.user?.email ?? null)
                    }

                </Avatar>
                <div className={classes.content}>
                    <h6>bogdan_info@mail.ru</h6>
                    <Grid container>

                        <Grid item md={5}>
                            <p>Имя:</p>
                        </Grid>
                        <Grid item md={5} >
                            <p>qq</p>
                        </Grid>
                        <Grid item md={5}>
                            <p>Фамилия:</p>
                        </Grid>
                        <Grid item md={5} >
                            <p>qq</p>
                        </Grid>

                    </Grid>
                </div>
                <Button sx={{
                    position: 'relative',
                    top: '10px'
                }} size={'small'} variant="outlined" href="#outlined-buttons">
                    {
                        props.auth ?
                            'выйти'
                            : 'Войти'
                    }

                </Button>
            </div>
        )

}

export default RegisterBox