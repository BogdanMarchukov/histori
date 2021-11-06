import React from 'react'
import classes from './UserDataBlock.module.css'
import {Avatar, Button, Grid} from '@mui/material'
import Image from "next/image";
import LoaderMini from "../LoaderMini/LoaderMini";

type Props = {
    avatarSrc: string | null
    loadMini: boolean
    email: string | null
    name: string | null
    surname: string | null
    tel: string | null
}

const UserDataBlock = (props: Props) => {

    const content = (loadMini: boolean, contentText: string | null) => {
        if (loadMini) {
            return (
                <LoaderMini
                    loadMini={loadMini}
                    sx={{marginBottom: '20px', marginTop: '22px'}}
                    color={'#aa00ff'}
                    size={20}
                />
            )
        } else {
            return (
                <p>{contentText}</p>
            )
        }
    }


    return (
        <div className={classes.wrepper}>
            <Avatar sx={{
                width: 120,
                height: 120,
                position: 'relative',
                top: 0,
                left: '344px'
            }} alt="Гость">
                {
                    props.avatarSrc ?
                        <Image
                            src={props.avatarSrc}

                            alt="Picture of the author"
                            width={27}
                            height={27}
                        />
                        : null
                }
            </Avatar>
            <Grid container>
                <Grid item xs={4}>
                    <div className={classes.nameData}>
                        <p>Почта:</p>
                        <p>Имя:</p>
                        <p>Фамилия:</p>
                        <p>Телефон:</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.data}>
                        {content(props.loadMini, props.email)}
                        {content(props.loadMini, props.name)}
                        {content(props.loadMini, props.surname)}
                        {content(props.loadMini, props.tel)}
                    </div>
                </Grid>
            </Grid>
            <Button sx={{
                color: '#aa00ff',
                position: 'relative',
                left: '135px',
                top: '75px'
            }}
                    variant="outlined"
            >Редактировать профиль
            </Button>
        </div>
    )
}
export default UserDataBlock