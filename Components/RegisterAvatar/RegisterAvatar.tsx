import React from 'react'
import Image from "next/image";
import {Avatar, Button} from "@mui/material";
import classes from './RegisterAvatar.module.css'

type Props = {
    imgSrs: string | null
    email: string | null
}

const RegisterAvatar = (props: Props) => {


    return (
        <>
            {
                props.email ?
                        <Avatar sx={{width: 27, height: 27}} alt="Гость">
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
                        // onClick={props.openRegisterWindow} todo функция оброботчик
                        variant="contained"
                        sx={{
                            width: 120,
                            height: "30px",
                            borderRadius: 0,
                            boxShadow: 0,
                            color: "black",
                            background: '#ffee58',
                            '&:hover': {
                                background: '#ffee58'
                            }
                        }}
                    >Регистрация</Button>
            }

        </>
    )
}

export default RegisterAvatar