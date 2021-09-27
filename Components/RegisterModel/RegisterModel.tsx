import React from 'react'
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import TextField from '@mui/material/TextField'
import classes from './registerModel.module.css'

type Props = {}

const RegisterModel = (props: Props) => {
    const [open, setOpen] = React.useState(true)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <div className={classes.registerWrapper}>
            <Modal
                open={open}
                onClose={handleClose}
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
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: '70%'
                        }}
                    >
                        <p>121</p>
                        <TextField
                            error={false}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                        <TextField
                            error={false}
                            id="outlined-password-input"
                            label="Пароль"
                            type="password"
                            autoComplete="current-password"
                        />

                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default RegisterModel