import { Grid } from '@mui/material'
import React from 'react'
import { all_center } from '../../../constant/commonStyle'
import SectionTitle from './SectionTitle'
import CardDisplay from './CardDisplay'

const CardSection = () => {
  return (
  <Grid container sx={{...all_center}}>
    <SectionTitle />
    <CardDisplay />
  </Grid>
  )
}

export default CardSection
