import {connect} from "react-redux";
import MainLayout from "../Components/Layout/MainLayout";
import {wrapper} from "../redux";
import {initUser} from "../redux/action-creators/homePageActionCreator";
import {TokenHandler} from "../models/TokenHandler";
import {userDto} from "../models/UserHandler";
import HomePageContent from "../Components/HomePageContent/HomePageContent";



interface PropsType {
    test: string
}

const Home = (props: PropsType) => {


    return (
        <MainLayout>
            <HomePageContent/>

        </MainLayout>
    )
}


function mapStateToProps(state: any) {
    return {
    }
}

function mapDispatchToProps(dispatch: any) {
    return {}
}

//@ts-ignore
export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const {token} = context.req.cookies
    let userId = false
    if (token) {
        userId = await TokenHandler.decodedPayloadRefresh(token)
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
