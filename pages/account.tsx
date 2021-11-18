import React, {useEffect} from 'react'
import {RootState} from "../redux/redusers/indexReduser";
import {connect} from "react-redux";
import MiniNavigation from "../Components/MiniNavigation/MiniNavigation";
import UserDataBlock from "../Components/UserDataBlock/UserDataBlock";
import {Box} from "@mui/material";
import {
    editAccountUserData,
    editUserData,
    initAccount,
    onOffEditorAccountModel,
    updateAvatar
} from "../redux/action-creators/accountPageActionCreator";
import EditorAccountModel from "../Components/EditorAccountModel/EditorAccountModel";
import AlertCustomize, {alertObjectType} from "../Components/AlertCustomize/AlertCustomize";
import Loader from "../Components/Loader/Loader";
import {avatarImgSrc} from "../redux/action-creators/rootFunction";
import PageLayout from "../Components/Layout/PageLayout";

type Props = {
    email: string | null
    avatarSrc: string | null
    loadMini: boolean
    name: string | null
    surname: string | null
    tel: string | null
    initAccount: () => void
    editAccountWindow: boolean
    onOffEditorAccountModel: (editAccountWindow: boolean) => void
    updateAvatar: (event: React.ChangeEvent<HTMLInputElement>) => void
    alert: alertObjectType
    loading: boolean
    editAccountUserData: (userData: editUserData, userId: string) => void
    userId: string
    token: string
    avatarImgSrc: typeof avatarImgSrc

}


const Account = (props: Props) => {

    const {initAccount} = props

    useEffect(() => {
        initAccount()
    }, [initAccount])

    return (
        <>
            <PageLayout>
                <Loader loading={props.loading}/>
                <EditorAccountModel
                    editAccountUserData={props.editAccountUserData}
                    userId={props.userId}
                    editAccountWindow={props.editAccountWindow}
                    onOffEditorAccountModel={props.onOffEditorAccountModel}
                />
                <AlertCustomize alert={props.alert}/>
                <Box sx={{display: 'flex'}}>
                    <UserDataBlock
                        avatarImgSrc={props.avatarImgSrc}
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
            </PageLayout>
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
        userId: state.userReducer.id
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        initAccount: () => dispatch(() => initAccount(dispatch)),
        onOffEditorAccountModel: (editAccountWindow: boolean) => dispatch(() => onOffEditorAccountModel(dispatch, editAccountWindow)),
        updateAvatar: (event: React.ChangeEvent<HTMLInputElement>) => dispatch(() => updateAvatar(dispatch, event)),
        editAccountUserData: (userData: editUserData, userId: string) => dispatch(() => editAccountUserData(dispatch, userData, userId)),
        avatarImgSrc: (pathName: any, fileName: any) => dispatch(() => avatarImgSrc(pathName, fileName))
    }
}


// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Account)