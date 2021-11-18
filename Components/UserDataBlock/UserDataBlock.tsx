import React from 'react'
import classes from './UserDataBlock.module.css'
import {Avatar, Button, Grid} from '@mui/material'
import LoaderMini from "../LoaderMini/LoaderMini"
import {avatarImgSrc} from '../../redux/action-creators/rootFunction'


type Props = {
    avatarSrc: string | null
    loadMini: boolean
    email: string | null
    name: string | null
    surname: string | null
    tel: string | null
    onOffEditorAccountModel: (editAccountWindow: boolean) => void
    editAccountWindow: boolean
    updateAvatar: (event: React.ChangeEvent<HTMLInputElement>) => void
    avatarImgSrc: typeof avatarImgSrc
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

    // @ts-ignore
    return (
        <div className={classes.wrepper}>
            <input
                onChange={(event) => props.updateAvatar(event)}
                className={classes.hiddenInput}
                type={'file'}
                title={''}
            />
            <Avatar
                src={props.avatarImgSrc(process.env.NEXT_PUBLIC_IMG_AVATAR_PATCH ?? '', props.avatarSrc!)}
                variant={'circular'} sx={{
                position: 'relative',
                width: 120,
                height: 120,
                top: 0,
                left: '344px'
            }} alt="Гость">
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
                    onClick={() => props.onOffEditorAccountModel(props.editAccountWindow)}
            >Редактировать профиль
            </Button>
        </div>
    )
}
export default UserDataBlock