import PageLayout from "../Components/Layout/PageLayout";
import EditorText from "../Components/EditorText/EditorText";
import React from "react";
import {RootState} from "../redux/redusers/indexReduser";
import {useSelector} from "react-redux";

interface PropsType {

}


const EditText = (props: PropsType) => {

    const selector = (state: RootState) => {
        return {
            currentArticle: state.textReducer.currentArticle
        }
    }

    const {currentArticle} = useSelector(selector)


    return (
        <PageLayout>
            <EditorText startState={currentArticle}/>
        </PageLayout>
    )
}

export default EditText