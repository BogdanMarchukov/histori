import React from 'react'
import Image from "next/image";
import {Avatar, Button} from "@mui/material";

type Props = {
    avatarSrc: string | null
    email: string | null
    openRegisterWindow: () => void
    showProfileWindow: ()=> void
    nameBtn: string
}

const RegisterAvatar = (props: Props) => {
    const pathAvatar = process.env.NEXT_PUBLIC_IMG_AVATAR_PATCH


    return (
        <>
            {
                props.email ?
                        <Avatar onClick={props.showProfileWindow} sx={{width: 27, height: 27}} alt="Гость">
                            {
                                props.avatarSrc ?
                                    <Image
                                        src={`${pathAvatar}${props.avatarSrc}`}
                                        alt="Picture of the author"
                                        width={27}
                                        height={27}
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