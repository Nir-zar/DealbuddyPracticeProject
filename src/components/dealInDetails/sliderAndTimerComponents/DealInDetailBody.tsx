import { Box, Grid } from '@mui/material'
import React from 'react'
import { all_center } from '../../../constant/commonStyle'
import SliderAndDescription from './SliderAndDescription'
import Deal from '../../../pages/Deal'
import DealAndStoreDetail from './DealAndStoreDetail'

const DealInDetailBody = () => {
  return (
<Box  sx={{ height:"auto",width:"1300px", display:"flex", flexDirection:"row", mt:{xl:"2rem"}}}>
<SliderAndDescription />
<DealAndStoreDetail />

</Box>
  );
}

export default DealInDetailBody
