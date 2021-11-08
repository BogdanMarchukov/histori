import React, {useState} from 'react'
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import TextField from '@mui/material/TextField'
import {Button, Input} from "@mui/material";


type Props = {
    onOffEditorAccountModel:(editAccountWindow: boolean) => void
    editAccountWindow: boolean

}

const EditorAccountModel = (props: Props) => {



    return (
            <Modal
                open={props.editAccountWindow}
                onClose={()=> props.onOffEditorAccountModel(props.editAccountWindow)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    height: 350,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4
                }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            height: 280,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',

                        }}
                    >
                        <TextField
                            size={"small"}
                            label="Имя"
                            variant="outlined"
                            autoComplete="username"

                        />
                        <TextField
                            size={"small"}
                            label="Фамилия"
                            autoComplete="family"
                        />
                        <TextField
                            size={"small"}
                            label="Телефон"
                            autoComplete="tel"
                            variant="outlined"
                        />
                        <Input
                            type={'file'}

                        />
                        <Button

                            variant="outlined"

                        >
                            Отправить
                        </Button>

                    </Box>
                </Box>

            </Modal>
    )
}

export default EditorAccountModel