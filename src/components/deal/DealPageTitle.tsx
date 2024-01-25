import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { all_center } from '../../constant/commonStyle'
import theme from '../../theme'


const DealPageTite = () => {
  return (
  <Grid container sx={{...all_center}}>

    <Box component={'div'} 
    sx={{height:"auto", width:{xl:"1300px"}, p:"3rem 0 0 0",}}
    >

        <Box component={"div"} 
        sx={{height:"auto", width:"100%"}}
        >
            <Typography sx={{fontSize:theme.typography.h5.xl}}>
            Get the finest deals on everything with exciting discounts and coupon codes
            </Typography>
        </Box>


    </Box>

  </Grid>
  )
}

export default DealPageTite
