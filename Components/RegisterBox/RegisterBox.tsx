import React from 'react'
import Image from "next/image"
import {Avatar} from "@mui/material"
import classes from './RegisterBox.module.css'
import Button from '@mui/material/Button';

interface userType {
    name: string
}

type Props = {
    auth: boolean
    srcImg: string | null
    user: userType | null
}

const RegisterBox = (props: Props) => {
    return (
        <div className={classes.box}>
            <Avatar sx={{width: 40, height: 40}} alt="Гость">
                {
                    props.srcImg?
                        <Image
                            src={props.srcImg}
                            alt="Picture of the author"
                            width={65}
                            height={60}
                        />
                        : null
                }

            </Avatar>
            <div className={classes.boxBtn}>
                {
                    props.user ?
                        <p>Привет `${props.user.name}`!</p>
                        : <p>Привет Гость!</p>
                }

                <Button  size={'small'} variant="outlined" href="#outlined-buttons">
                    {
                        props.auth?
                            'выйти'
                            : 'Войти'
                    }

                </Button>
            </div>
        </div>

    )
}

export default RegisterBox