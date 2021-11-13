import React, {useEffect} from 'react'
import {RootState} from "../redux/redusers/indexReduser";
import {connect} from "react-redux";
import MiniNavigation from "../Components/MiniNavigation/MiniNavigation";
import UserDataBlock from "../Components/UserDataBlock/UserDataBlock";
import {Box} from "@mui/material";
import {initAccount, onOffEditorAccountModel, updateAvatar} from "../redux/action-creators/accountPageActionCreator";
import EditorAccountModel from "../Components/EditorAccountModel/EditorAccountModel";
import {FileEventTarget} from "../redux/types/indexTyps";
import AlertCustomize, {alertObjectType} from "../Components/AlertCustomize/AlertCustomize";
import Loader from "../Components/Loader/Loader";

type Props = {
    email: string | null
    avatarSrc: string | null
    loadMini: boolean
    name: string | null
    surname: string | null
    tel: string | null
    initAccount: ()=> void
    editAccountWindow: boolean
    onOffEditorAccountModel:(editAccountWindow: boolean) => void
    updateAvatar: (event: React.ChangeEvent<HTMLInputElement>)=> void
    alert: alertObjectType
    loading: boolean
}


const Account = (props: Props) => {

    const {initAccount} = props

    useEffect(()=> {
        initAccount()
    }, [initAccount])

    return (
        <>
            <MiniNavigation/>
            <Loader loading={props.loading}/>
            <EditorAccountModel
                editAccountWindow={props.editAccountWindow}
                onOffEditorAccountModel={props.onOffEditorAccountModel}
            />
            <AlertCustomize alert={props.alert}/>
            <Box sx={{display: 'flex'}}>
                <UserDataBlock
                    updateAvatar={props.updateAvatar}
                    editAccountWindow={props.editAccountWindow}
                    onOffEditorAccountModel={props.onOffEditorAccountModel}
                    avatarSrc={props.avatarSrc}
                    email={props.email}
                    loadMini={props.loadMini}
                    name={props.name}
                    surname={props.surname}
                    tel={props.tel}
                />
                <h1>{props.email}</h1>
            </Box>
        </>
    )
}

function mapStateToProps(state: RootState) {
    return {
        email: state.userReducer.email,
        avatarSrc: state.homePageReducer.pathAvatar,
        loadMini: state.homePageReducer.loadMini,
        name: state.userReducer.userName,
        surname: state.userReducer.surname,
        tel: state.userReducer.tel,
        editAccountWindow: state.accountPageReducer.editAccountWindow,
        alert: state.homePageReducer.alert,
        loading: state.homePageReducer.loading,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        initAccount: ()=> dispatch(()=> initAccount(dispatch)),
        onOffEditorAccountModel:(editAccountWindow: boolean) => dispatch(()=> onOffEditorAccountModel(dispatch, editAccountWindow)),
        updateAvatar: (event: React.ChangeEvent<HTMLInputElement>)=> dispatch(()=> updateAvatar(dispatch, event))
    }
}


// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Account)