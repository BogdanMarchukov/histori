import PageLayout from "../Components/Layout/PageLayout";
import EditorText from "../Components/EditorText/EditorText";
import React from "react";

interface PropsType {

}


const EditText = (props: PropsType) => {
    return (
        <PageLayout>
            <EditorText/>
        </PageLayout>
    )
}

export default EditText