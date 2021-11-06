import React from 'react'
import {Box} from "@mui/material";
import {CircularProgress} from '@mui/material'

interface sxType {
    width?: string | number
    height?: string | number
    marginTop?: string | number
    marginBottom?: string | number
}

type Props = {
    loadMini: boolean
    sx: sxType
    color: string
    size: number
}

const LoaderMini = (props: Props) => {
    if (props.loadMini) {
        return (
            <Box
                sx={props.sx}
            >
                <CircularProgress sx={{color: props.color}}  size={props.size} />
            </Box>
        )
    } else return null

}
export default LoaderMini