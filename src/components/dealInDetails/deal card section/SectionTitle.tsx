import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../theme'

const SectionTitle = () => {
  return (
  <Box component={'div'} sx={{height:"auto", width:"100%"}}>
<Typography sx={{fontSize:theme.typography.h5.xl}}>
More Deals You May Like
</Typography>
  </Box>
  )
}

export default SectionTitle
