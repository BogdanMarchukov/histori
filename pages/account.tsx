import React from 'react'
import {RootState} from "../redux/redusers/indexReduser";
import {connect} from "react-redux";
import MiniNavigation from "../Components/MiniNavigation/MiniNavigation";
import UserDataBlock from "../Components/UserDataBlock/UserDataBlock";
import {Box} from "@mui/material";

type Props = {
    email: string | null
    avatarSrc: string | null
    loadMini: boolean
    name: string | null
    surname: string | null
    tel: string | null
}


const Account = (props: Props) => {
    return (
        <>
            <MiniNavigation/>
            <Box sx={{display: 'flex'}}>
                <UserDataBlock
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
        tel: state.userReducer.tel
    }
}

function mapDispatchToProps(dispatch: any) {
    return {}
}


// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Account)