import React from 'react'
import Image from "next/image";
import {Avatar, Button} from "@mui/material";

type Props = {
    imgSrs: string | null
    email: string | null
    openRegisterWindow: () => void
    showProfileWindow: ()=> void
    nameBtn: string
}

const RegisterAvatar = (props: Props) => {



    return (
        <>
            {
                props.email ?
                        <Avatar key={'1111'} onClick={props.showProfileWindow} sx={{width: 27, height: 27}} alt="Гость">
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
                            color: "white",
                            background: '#aa00ff',
                            '&:hover': {
                                background: '#aa00ff'
                            }
                        }}
                    >{props.nameBtn}</Button>
            }

        </>
    )
}

export default RegisterAvatar