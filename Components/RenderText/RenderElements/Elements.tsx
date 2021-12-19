import React from 'react'
import {RawDraftContentBlock} from "draft-js";

type Props = {
    content: RawDraftContentBlock
}

const Elements = (props: Props) => {

    switch (props.content.type){
        case 'header-one':
            return (
                <>
                    <h1>
                        {props.content.text}
                    </h1>
                </>
            )
        default:
            return null

    }


}

export default Elements