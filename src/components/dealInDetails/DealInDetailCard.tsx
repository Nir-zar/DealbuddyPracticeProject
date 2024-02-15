import { Box, Grid } from '@mui/material'
import React from 'react'
import { allCenter } from '../../constant/commonStyle'
import CardSection from './deal card section/CardSection'

const DealInDetailCard = () => {
  return (
<Box  sx={{ height:"auto",width:"1300px", display:"flex", flexDirection:"row", mt:{xl:"2rem"}, p:{xl:"2.5rem 0"}}}>

<CardSection />
  
</Box>
  )
}

export default DealInDetailCard
