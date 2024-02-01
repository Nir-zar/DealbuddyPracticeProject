import React, { useEffect, useState } from 'react'
import DealInDetailBody from './sliderAndTimerComponents/DealInDetailBody'
import DealInDetailCard from './DealInDetailCard'
import { Grid } from '@mui/material'
import { all_center } from '../../constant/commonStyle'
import { useParams } from 'react-router-dom'
import { dealInDetailApiData } from '../../api/dealApi'
import { useDispatch } from 'react-redux'
import DealSlider from './sliderAndTimerComponents/DealSlider'
import { dealAndStoreDetail, sliderImage } from '../../features/dealData'

const DealInDetailMainComponent = () => {

  const [dealInDetailData, setDealInDEtailData] = useState([]);

  const {dealSlug} = useParams();
  const dispatch = useDispatch();

useEffect(()=>{

  if(dealSlug){
    dealInDetailApiData(dealSlug).then((res)=>{
      // res.data.productImages.map((res)=>{
      //   console.log(res.imageUrl);
      // });
      setDealInDEtailData(res.data);
      dispatch(sliderImage(res.data.productImages))
      dispatch(dealAndStoreDetail(res.data))

    })
  }

  

},[])

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
