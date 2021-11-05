import React from 'react'
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import TextField from '@mui/material/TextField'
import classes from './registerModel.module.css'
import {Button} from "@mui/material";
import RegisterTab from "../RegisterTab/RegisterTab";

type Props = {
    open: boolean
    onClose: () => void
    registerTitle: string
    validateRegisterForm: (inputValue: string, inputName: string) => void
    emailError: boolean | undefined
    passwordError: boolean | undefined
    onSubmitForm: (emailValid: boolean, passwordValid: boolean, email: string, password: string, registerTitle: string) => void
    email: string | null
    password: string | null
    switchingWindowRegister: (registerTitle: string)=> void
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
                    height: 270,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4
                }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            height: 200,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',

                        }}
                    >
                        <RegisterTab
                            tabHandler={props.switchingWindowRegister}
                        />
                        <TextField
                            onChange={event => props.validateRegisterForm(event.target.value, 'email')}
                            size={"small"}
                            error={props.emailError}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                        <TextField
                            onChange={event => props.validateRegisterForm(event.target.value, 'password')}
                            size={"small"}
                            error={props.passwordError}
                            id="outlined-password-input"
                            label="Пароль"
                            type="password"
                            autoComplete="current-password"
                        />
                            <Button
                                onClick={() => {
                                    if (props.emailError === false && props.passwordError === false && props.email && props.password) {
                                        props.onSubmitForm(props.emailError, props.passwordError, props.email, props.password, props.registerTitle)
                                    }
                                }
                                }
                                variant="outlined"

                            >
                                Отправить
                            </Button>

                    </Box>
                </Box>

            </Modal>
        </div>
    )
}

export default RegisterModel