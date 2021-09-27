import type {NextPage} from 'next'
import {connect} from "react-redux";
import Layout from "../Components/Layout/Layout";


const Home: NextPage = () => {
    return (
        <Layout>
                <h1>Hello Next</h1>
        </Layout>
    )
}


function mapStateToProps(state: any) {
    console.log(state)
    return {}
}

function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
