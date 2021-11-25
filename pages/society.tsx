import React from 'react'
import PageLayout from "../Components/Layout/PageLayout"
import {Grid, Box} from "@mui/material";
import SocietyPageMainContent from "../Components/SocietyPageMainContent/SocietyPageMainContent";


type Props = {

}

const Society = (props: Props) => {
    return (
        <PageLayout>
           <Box
            sx={ {
                minHeight: 800
            } }
           >
               <Grid container >
                   <Grid item lg={10}>
                       <SocietyPageMainContent/>
                   </Grid>
                   <Grid item lg={2}>

                   </Grid>
               </Grid>

           </Box>
        </PageLayout>
    )
}

export default Society