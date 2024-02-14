import { Grid } from '@mui/material'
import React from 'react'
import { allCenter } from '../../../constant/commonStyle'
import SectionTitle from './SectionTitle'
import CardDisplay from './CardDisplay'

const CardSection = () => {
  return (
  <Grid container sx={{...allCenter}}>
    <SectionTitle />
    <CardDisplay />
  </Grid>
  )
}

export default CardSection
