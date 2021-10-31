import React from 'react'
import Image from "next/image"
import {Avatar} from "@mui/material"
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
}

const RegisterBox = (props: Props) => {

    const userName = (name: string | null, email: string | null): string | null => {
        if (name) {
            return name[0]
        } else
            if (email){
            return email[0]
        } else return null
    }

    return (
        <div className={classes.box}>
            <Avatar sx={{width: 40, height: 40}} alt="Гость">
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
            <div className={classes.boxBtn}>
                {
                    props.user?.email ?
                        <p>{props.user.email}</p>
                        : <p>Привет Гость!</p>
                }

                <Button size={'small'} variant="outlined" href="#outlined-buttons">
                    {
                        props.auth ?
                            'выйти'
                            : 'Войти'
                    }

                </Button>
            </div>
        </div>

    )
}

export default RegisterBox