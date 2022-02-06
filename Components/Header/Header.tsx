import React from 'react'
import classes from "./header.module.css";
import {Box, Container} from "@mui/material";
import WatSapIcon from "../../icons/WatSapIcon";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import Grid from "@mui/material/Grid";
import RegisterBox from "../RegisterBox/RegisterBox";
import RegisterModel from "../RegisterModel/RegisterModel";
import {connect} from 'react-redux'
import {
    errorHandlerServer,
    logout,
    onSubmitForm,
    openRegisterWindow, showProfileWindow, switchingWindowRegister,
    validateRegisterForm
} from "../../redux/action-creators/homePageActionCreator";
import {RootState} from "../../redux/redusers/indexReduser";
import RegisterAvatar from "../RegisterAvatar/RegisterAvatar";
import Loader from "../Loader/Loader";
import AlertCustomize from "../AlertCustomize/AlertCustomize";
import {ErrorType} from "../../serverTypes/serverTypes";
import {avatarImgSrc} from "../../redux/action-creators/rootFunction";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

interface alertObjectType {
    alertType: 'error'
    alertMassage: string | null
    alertStart: boolean
}

type Props = {
    openRegisterWindow: () => void
    registerWin: boolean
    registerTitle: string
    validateRegisterForm: (inputValue: string, inputName: string) => void
    emailError: boolean | undefined
    passwordError: boolean | undefined
    onSubmitForm: (emailValid: boolean, passwordValid: boolean, email: string, password: string, registerTitle: string) => void
    email: string | null
    password: string | null
    userName: string | null
    userEmail: string | null
    showProfileWindow: (profileWindow: boolean) => void
    profileWindow: boolean
    loading: boolean
    alert: alertObjectType
    logout: () => void
    switchingWindowRegister: (registerTitle: string) => void
    isActivation: boolean
    avatarSrc: string | null
    errorHandlerServer: (responseError: ErrorType, errorType: string) => void,
    surname: string | null
    avatarImgSrc: typeof avatarImgSrc
}

const Header = (props: Props) => {

    return (
        <div className={classes.layout}>
            <header>
                <div className={classes.footerContact}>
                    <Grid container sx={{height: '100%'}}>
                        <Grid item md={10} xl={11}>
                            <Container
                                sx={{
                                    height: '100%',
                                    padding: 0,
                                    display: { sm :'flex', xs: 'none'},
                                    color: "white",
                                    justifyContent: 'space-around',
                                }}
                                maxWidth={'xl'}
                            >
                                <div className={classes.box}>
                                    <WatSapIcon/>
                                    <a href={'tel: +79604816532'}>+7-960-481-65-32</a>
                                </div>
                                <div className={classes.box}>
                                    <AddLocationOutlinedIcon/>
                                    <p>Абинск</p>
                                </div>

                            </Container>
                            <BurgerMenu/>
                        </Grid>
                        <Grid item md={2} xl={1} sx={{
                            display: { xs: 'none', sm: 'block'}
                        }}>
                                <RegisterAvatar
                                    avatarImgSrc={props.avatarImgSrc}
                                    nameBtn={props.registerTitle}
                                    showProfileWindow={() => props.showProfileWindow(props.profileWindow)}
                                    openRegisterWindow={props.openRegisterWindow}
                                    avatarSrc={props.avatarSrc}
                                    email={props.userEmail}
                                />
                        </Grid>
                    </Grid>
                </div>
                <AlertCustomize alert={props.alert}/>
                <Loader loading={props.loading}/>
                <div className={classes.flexColumn}>
                    <h1>Olga</h1>
                    <h2>Marchukova</h2>
                    <span>Преподаватель Истории, Обществознания, Экономики, Права</span>
                </div>
                <RegisterBox
                    avatarImgSrc={props.avatarImgSrc}
                    error={() => props.errorHandlerServer({error: true, errorMassage: 'Email не подтвержден'}, 'error')}
                    isActivation={props.isActivation}
                    logout={props.logout}
                    showProfileWindow={props.showProfileWindow}
                    show={props.profileWindow}
                    auth={false}
                    avatarSrc={props.avatarSrc}
                    user={{name: props.userName, email: props.userEmail, surname: props.surname}}
                />

                <RegisterModel
                    switchingWindowRegister={props.switchingWindowRegister}
                    onSubmitForm={props.onSubmitForm}
                    email={props.email}
                    password={props.password}
                    emailError={props.emailError}
                    passwordError={props.passwordError}
                    validateRegisterForm={props.validateRegisterForm}
                    open={props.registerWin}
                    onClose={props.openRegisterWindow}
                    registerTitle={props.registerTitle}
                />
            </header>
        </div>
    )
}

function mapStateToProps(state: RootState) {
    return {
        registerWin: state.homePageReducer.registerWin,
        registerTitle: state.homePageReducer.registerTitle,
        emailError: state.homePageReducer.validateEmail,
        passwordError: state.homePageReducer.validatePassword,
        email: state.homePageReducer.emailValue,
        password: state.homePageReducer.passwordValue,
        userName: state.userReducer.userName,
        userEmail: state.userReducer.email,
        profileWindow: state.homePageReducer.profileWindow,
        loading: state.homePageReducer.loading,
        alert: state.homePageReducer.alert,
        isActivation: state.userReducer.isActivation,
        avatarSrc: state.homePageReducer.pathAvatar,
        surname: state.userReducer.surname
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        openRegisterWindow: () => dispatch(openRegisterWindow),
        validateRegisterForm: (inputValue: string, inputName: string) => dispatch(() => validateRegisterForm(dispatch, inputValue, inputName)),
        onSubmitForm: (emailValid: boolean, passwordValid: boolean, email: string, password: string, registerTitle: string) => dispatch(() => onSubmitForm(dispatch, emailValid, passwordValid, email, password, registerTitle)),
        showProfileWindow: (profileWindow: boolean) => dispatch(() => showProfileWindow(dispatch, profileWindow)),
        logout: () => dispatch(() => logout(dispatch)),
        switchingWindowRegister: (registerTitle: string) => dispatch(() => switchingWindowRegister(dispatch, registerTitle)),
        errorHandlerServer: (responseError: ErrorType, errorType: string) => dispatch(() => errorHandlerServer(dispatch, responseError, errorType)),
        avatarImgSrc: (pathName: any, fileName: any) => dispatch(() => avatarImgSrc(pathName, fileName))
    }
}


// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Header)