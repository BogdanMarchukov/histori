import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface ItemType {
    value: string
    content: string
}

type PropType = {
    item: Array<ItemType>
    title: string
    minWidth: number
}


export default function SelectAutoWidth(props: PropType) {
    const [age, setAge] = React.useState('')

    const handleChange = (event: any) => {
        console.log(event.target.value)
        setAge(event.target.value)
    }

    const itemArea = () => {
        return props.item.map((i, index)=> {
            return <MenuItem key={index} value={i.value}>{i.content}</MenuItem>
        })
    }


    return (
        <div>
            <FormControl sx={{m: 1, minWidth: props.minWidth}}>
                <InputLabel id="demo-simple-select-autowidth-label">{props.title}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        itemArea()
                    }

                </Select>
            </FormControl>
        </div>
    );
}
