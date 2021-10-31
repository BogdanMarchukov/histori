import React, {FC} from 'react'
import classes from "./header.module.css";
import {Container, Button} from "@mui/material";
import WatSapIcon from "../../icons/WatSapIcon";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import Grid from "@mui/material/Grid";
import RegisterBox from "../RegisterBox/RegisterBox";
import RegisterModel from "../RegisterModel/RegisterModel";
import {connect} from 'react-redux'
import {rootState} from "../../redux/types/indexTyps";
import {
    onSubmitForm,
    openRegisterWindow,
    validateRegisterForm
} from "../../redux/action-creators/homePageActionCreator";
import {RootState} from "../../redux/redusers/indexReduser";



type Props = {
    openRegisterWindow: ()=> void
    registerWin: boolean
    registerTitle: string
    validateRegisterForm: (inputValue: string, inputName: string)=> void
    emailError: boolean | undefined
    passwordError: boolean | undefined
    onSubmitForm: (emailValid: boolean, passwordValid: boolean, email: string, password: string) => void
    email: string | null
    password: string | null
}

const Header = (props: Props)  => {
    return (
        <div className={classes.layout}>
            <div className={classes.footerContact}>
                <Grid container sx={{ height: '100%'}}>
                    <Grid item md={11} xl={11}>
                        <Container
                            sx={{
                                height: '100%',
                                padding: 0,
                                display: 'flex',
                                color: "white",
                                justifyContent: 'space-around'
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
                    </Grid>
                    <Grid item md={1} xl={1}>
                        <div>
                            <Button
                                onClick={props.openRegisterWindow}
                                variant="contained"
                                sx={{
                                    width: 120,
                                    height: "30px",
                                    borderRadius: 0,
                                    boxShadow: 0,
                                    color: "black",
                                    background: '#ffee58',
                                    '&:hover': {
                                        background: '#ffee58'
                                    }
                                }}
                            >Регистрация</Button>
                        </div>
                    </Grid>
                </Grid>


            </div>
            <Grid
                container
            >
                <Grid
                    item md={11} xl={11}
                >
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}
                    >
                        <h1>Olga</h1>
                        <h2>Marchukova</h2>
                        <h3>История | Общество</h3>
                        <h4>Право | Экономика</h4>
                    </Container>
                </Grid>
                <Grid item md={1} xl={1}>
                    <RegisterBox
                        auth={false}
                        srcImg={null}
                        user={null}
                    />

                </Grid>
            </Grid>
            <RegisterModel
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
        password: state.homePageReducer.passwordValue
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        openRegisterWindow: ()=> dispatch(openRegisterWindow),
        validateRegisterForm: (inputValue: string, inputName: string)=> dispatch(()=> validateRegisterForm(dispatch, inputValue, inputName)),
        onSubmitForm: (emailValid: boolean, passwordValid: boolean, email: string, password: string) => dispatch(()=> onSubmitForm(dispatch, emailValid, passwordValid, email, password))
    }
}



// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Header)