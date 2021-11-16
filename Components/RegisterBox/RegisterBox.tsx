import React, {useEffect, useState} from 'react'
import Image from "next/image"
import {Avatar, Grid} from "@mui/material"
import classes from './RegisterBox.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link'
import EditIcon from '@mui/icons-material/Edit';


interface userType {
    name: string | null
    surname: string | null
    email: string | null


}

type Props = {
    auth: boolean
    avatarSrc: string | null
    user: userType
    show: boolean
    showProfileWindow: (profileWindow: boolean, isActivation: boolean) => void
    logout: ()=> void
    isActivation: boolean
    error: ()=> void
}

const RegisterBox = (props: Props) => {
    const {show} = props
    const pathAvatar = process.env.NEXT_PUBLIC_IMG_AVATAR_PATCH
    const [classClose, setClassClose] = useState(null)

    useEffect(()=> {
        if (show) {
            // @ts-ignore
            setClassClose(<div onClick={()=> props.showProfileWindow(show, props.isActivation)} className={classes.closeWin}/>)
        }
        if (!show) {
            setClassClose(null)
        }
    }, [show])




    const userName = (name: string | null, email: string | null): string | null => {
        if (name) {
            return name[0]
        } else if (email) {
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


    return (
        <>
            {classClose}
            <div className={showWindow()}>
                <div className={classes.header}>
                    <p>Привет {props.user.name ?? 'Гость'}</p>
                </div>

                <Avatar sx={{
                    width: 70,
                    height: 70,
                    position: 'fixed',
                    top: '84px'
                }} alt="Гость">
                    {
                        props.avatarSrc ?
                            <Image
                                src={`${pathAvatar}${props.avatarSrc}`}
                                alt="Picture of the author"
                                width={80}
                                height={80}
                            />
                            : userName(props.user?.name ?? null, props.user?.email ?? null)
                    }

                </Avatar>
                <div className={classes.content}>
                    {props.isActivation?
                        <Link
                            href={{
                                pathname: '/account'


                            }}

                        >
                            <a>
                                <h6>{props.user.email} <EditIcon sx={{fontSize: "medium"}}/></h6>
                            </a>
                        </Link>
                        :
                        <h6
                            onClick={()=> props.error()}
                        >{props.user.email} <EditIcon sx={{fontSize: "medium"}}/></h6>

                    }

                    <Grid container>

                        <Grid item md={5}>
                            <p>Имя: </p>
                        </Grid>
                        <Grid item md={5}>
                            <p>{props.user.name ?? '-'}</p>
                        </Grid>
                        <Grid item md={5}>
                            <p>Фамилия:</p>
                        </Grid>
                        <Grid item md={5}>
                            <p>{props.user.surname ?? '-'}</p>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    onClick={props.logout}
                    sx={{
                    position: 'relative',
                    top: '10px'
                }} size={'small'} variant="outlined">
                    {
                        props.user.email ?
                            'выход'
                            : 'Войти'
                    }

                </Button>
            </div>
        </>
    )

}

export default RegisterBox