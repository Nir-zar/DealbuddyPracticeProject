import React from 'react'
import DealInDetailBody from './sliderAndTimerComponents/DealInDetailBody'
import DealInDetailCard from './DealInDetailCard'
import { Box, Grid } from '@mui/material'
import { all_center } from '../../constant/commonStyle'

const DealInDetailMainComponent = () => {
  return (
   <>
    <Grid container sx={{...all_center}}>
   <DealInDetailBody />
   <DealInDetailCard />
   </Grid>

   </>
  )
}

export default DealInDetailMainComponent
