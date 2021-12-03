import React from 'react'

type Props = {
    icon: SVGAElement
}
const IconSvg = (props: Props) => {

    return (
        <>
            {props.icon}
        </>
    )
}
export default IconSvg