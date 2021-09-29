import React from 'react'
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import TextField from '@mui/material/TextField'
import classes from './registerModel.module.css'
import {Button} from "@mui/material";

type Props = {
    open: boolean
    onClose: ()=> void
    registerTitle: string
    validateRegisterForm: (inputValue: string, inputName: string)=> void // todo тут доделать
}

const RegisterModel = (props: Props) => {
    return (
        <div className={classes.registerWrapper}>
            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    height: 250,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4
                }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            height: 190,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',

                        }}
                    >
                        <p className={classes.title}>{props.registerTitle}</p>
                        <TextField
                            size={"small"}
                            error={false}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                        <TextField
                            size={"small"}
                            error={false}
                            id="outlined-password-input"
                            label="Пароль"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button variant="outlined">Отправить</Button>

                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default RegisterModel