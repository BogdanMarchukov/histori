import React from 'react'
import {avatarImgSrc} from '../../redux/action-creators/rootFunction'
import {Avatar, Button} from "@mui/material";

type Props = {
    avatarSrc: string | null
    email: string | null
    openRegisterWindow: () => void
    showProfileWindow: ()=> void
    nameBtn: string
    avatarImgSrc: typeof avatarImgSrc
}

const RegisterAvatar = (props: Props) => {
    const pathAvatar = process.env.NEXT_PUBLIC_IMG_AVATAR_PATCH ?? ''


    return (
        <>
            {
                props.email ?
                        <Avatar
                            src={props.avatarImgSrc(pathAvatar, props.avatarSrc!)}
                            onClick={props.showProfileWindow}
                            sx={{width: 27, height: 27}}
                            alt="Гость"
                        />
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