import React, {useState} from 'react'
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import TextField from '@mui/material/TextField'
import {Button, Input} from "@mui/material";
import {editUserData} from "../../redux/action-creators/accountPageActionCreator";


type Props = {
    onOffEditorAccountModel:(editAccountWindow: boolean) => void
    editAccountWindow: boolean
    editAccountUserData: (userData: editUserData, userId: string)=> void
    userId: string
}

const EditorAccountModel = (props: Props) => {

    const [userName, setUserName] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [userTel, setUserTel] = useState('')

    const  userData = (): editUserData | null => {
        const resultData: editUserData = {}
        if (userName){
            resultData.userName = userName
        }
        if (userSurname){
            resultData.surname = userSurname
        }
        if (userTel){
            resultData.tel = userTel
        }
        if (Object.keys(resultData).length == 0) {
            return null
        }
        else return resultData
    }


    return (
            <Modal
                open={props.editAccountWindow}
                onClose={()=> props.onOffEditorAccountModel(props.editAccountWindow)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    height: 355,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4
                }}

                >

                    <Box
                        sx={{
                            display: 'flex',
                            height: 300,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-around',

                        }}
                    >
                        <span>Редактировать профиль</span>
                        <TextField
                            onChange={(e)=> setUserName(e.target.value) }
                           sx={{
                               width: '100%'
                           }}
                            size={"small"}
                            label="Имя"
                            variant="outlined"
                            autoComplete="username"

                        />
                        <TextField
                            onChange={(e)=> setUserSurname(e.target.value) }

                            sx={{
                                width: '100%'
                            }}
                            size={"small"}
                            label="Фамилия"
                            autoComplete="family"
                        />
                        <TextField
                            onChange={(e)=> setUserTel(e.target.value) }

                            sx={{
                                width: '100%'
                            }}
                            type={'number'}
                            size={"small"}
                            label="Телефон"
                            autoComplete="tel"
                            variant="outlined"
                        />

                        <Button
                            onClick={()=> {
                                if (userData()){
                                    props.editAccountUserData(userData() ?? {}, props.userId)
                                }
                            }}
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