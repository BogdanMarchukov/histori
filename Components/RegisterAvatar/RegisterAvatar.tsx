import React from 'react'
import Image from "next/image";
import {Avatar, Button} from "@mui/material";
import classes from './RegisterAvatar.module.css'

type Props = {
    imgSrs: string | null
    email: string | null
    openRegisterWindow: () => void
    showProfileWindow: ()=> void
}

const RegisterAvatar = (props: Props) => {


    return (
        <>
            {
                props.email ?
                        <Avatar onClick={props.showProfileWindow} sx={{width: 27, height: 27}} alt="Гость">
                            {
                                props.imgSrs ?
                                    <Image
                                        src={props.imgSrs}
                                        alt="Picture of the author"
                                        width={65}
                                        height={60}
                                    />
                                    : null
                            }
                        </Avatar>

                    :
                    <Button
                         onClick={props.openRegisterWindow}
                        variant="contained"
                        sx={{
                            width: 120,
                            height: "30px",
                            borderRadius: 0,
                            boxShadow: 0,
                            color: "black",
                            background: '#aa00ff',
                            '&:hover': {
                                background: '#aa00ff'
                            }
                        }}
                    >Регистрация</Button>
            }

        </>
    )
}

export default RegisterAvatar