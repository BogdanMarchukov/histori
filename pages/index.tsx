import {connect} from "react-redux";
import MainLayout from "../Components/Layout/MainLayout";
import {wrapper} from "../redux";
import {initUser} from "../redux/action-creators/homePageActionCreator";
import {TokenHandler} from "../models/TokenHandler";
import {userDto} from "../models/UserHandler";
import CardMenu from "../Components/CardMain/CardMenu";


interface PropsType {
    test: string
}

const Home = (props: PropsType) => {


    return (
        <MainLayout>
            <CardMenu
                cardList={
                    [
                        {name: 'История', srcImg: '/img/home/histori.jpg'},
                        {name: 'Общество', srcImg: '/img/home/society.jpg'},
                        {name: 'Право', srcImg: '/img/home/right.jpg'},
                        {name: 'Экономика', srcImg: '/img/home/economy.jpg'}
                    ]}
            />
        </MainLayout>
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
