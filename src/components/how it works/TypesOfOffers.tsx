import { Height } from '@mui/icons-material'
import { Box, Card, Grid, Typography } from '@mui/material'
import { bgcolor } from '@mui/system'
import React from 'react'
import { all_center } from '../../constant/commonStyle'
import theme from '../../theme'

const TypesOfOffers = () => {
  return (
   <Grid container sx={{...all_center,height:"auto"}}>
    <Box sx={{height:"auto", width:"1300px",display:"flex", flexDirection:"column"}}>

    <Grid item sx={{...all_center, height:"2rem",  p:"3rem 0"}}>
    <Typography sx={{fontSize:theme.typography.h4.lg, color:theme.palette.common.black}}>
    Types of offers you can find on dealbuddy
    </Typography>
    </Grid>


   

    </Box>
   </Grid>
  )
}

export default TypesOfOffers
