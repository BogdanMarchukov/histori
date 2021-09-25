import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {connect} from "react-redux";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <h1>Hello Next</h1>
    </div>
  )
}


function mapStateToProps(state: any) {
    console.log(state)
    return {

    }
}

function mapDispatchToProps(dispatch: any) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
