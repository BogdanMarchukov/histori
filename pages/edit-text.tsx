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
            currentArticle: state.textReducer.currentArticle,
            editorStatus: state.textReducer.editorStatus
        }
    }

    const {currentArticle, editorStatus} = useSelector(selector)


    return (
        <PageLayout>
            <EditorText startState={currentArticle} editorStatus={editorStatus}/>
        </PageLayout>
    )
}

export default EditText