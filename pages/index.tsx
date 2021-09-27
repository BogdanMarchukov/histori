import {connect} from "react-redux";
import Layout from "../Components/Layout/Layout";

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
