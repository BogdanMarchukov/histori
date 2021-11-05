import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import {Tabs} from "@mui/material"

type Props = {
    tabHandler: (registerTitle: string)=> void
}


const RegisterTab = (props: Props) => {

    const [value, setValue] = useState(1)

    const handleChange = (event: any, newValue: number) => {
        props.tabHandler(event.target.innerText.toLowerCase())
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Регистрация" />
                <Tab label="Вход" />
            </Tabs>
        </Box>
    )
}
export default RegisterTab