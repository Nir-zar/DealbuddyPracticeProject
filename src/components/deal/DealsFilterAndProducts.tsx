import { Box, Grid } from '@mui/material'
import React from 'react'
import { all_center } from '../../constant/commonStyle'
import FilterDeals from './FilterDeals'
import DealCards from './DealCards'

const DealsFilterAndProducts = () => {
  return (
<Grid container sx={{...all_center, height:"auto"}}>

<Box component={'div'}
sx={{height:"auto", width:"1300px", display:"flex", justifyContent:"space-between"}}
>

<FilterDeals />
<DealCards />


</Box>

</Grid>
  )
}

export default DealsFilterAndProducts
