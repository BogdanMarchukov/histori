import {connect} from "react-redux";
import Layout from "../Components/Layout/Layout";
import {wrapper} from "../redux";
import {initUser, testTest} from "../redux/action-creators/homePageActionCreator";
import {TokenHandler} from "../models/TokenHandler";
import {userDto} from "../models/UserHandler";
import {ErrorType} from "../serverTypes/serverTypes";

interface PropsType {
    test: string
}

const Home = (props: PropsType) => {
    return (
        <Layout>
                <h1>{props.test}</h1>
        </Layout>
    )
}


function mapStateToProps(state: any) {
    return {
        test: state.homePageReducer.test
    }
}

function mapDispatchToProps(dispatch: any) {
    return {}
}

//@ts-ignore
export const getServerSideProps = wrapper.getServerSideProps( (store) => async (context) => {
    const {token} = context.req.cookies
     const userId = await TokenHandler.decodedPayloadRefresh(token)

    if (userId) {
        const response = await fetch(`${process.env.API_URL}/api/init/user`, {
            method: 'POST',
            body: JSON.stringify({userId}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const result: userDto = await response.json()
        // @ts-ignore
        if (!result.error) {
            // @ts-ignore
            store.dispatch(initUser(result))
        }
    }


})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
