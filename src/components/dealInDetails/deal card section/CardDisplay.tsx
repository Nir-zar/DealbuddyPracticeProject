import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonCard from '../../common components/CommonCard';
import { useSelector } from 'react-redux';
import { getRelatedProductData } from '../../../api/homeApi';
import CommonCoupon from '../../common components/CommonCoupon';

const CardDisplay = () => {

const [cardData, setCardData] = useState([])

const productId = useSelector((store)=> store.dealData.dealProductId);
const currentCityName = useSelector((store)=> store.filterData.currentCity)

useEffect(()=>{

    const params = {
        productId : productId,
        limit : 4
    }

    if(productId)
    {
        getRelatedProductData(params,currentCityName).then((res)=>{
            setCardData(res.data);
        })
    }


},[productId, currentCityName])

  return (
  <Grid container sx={{height:'auto'}}>
    
    {cardData.map((cardData, index)=>{
        return(

            <>
            {cardData.productType == "sale" ? 
            (<>
             <CommonCard 
       key={index}
       category={cardData.category}
       imageUrl={cardData.imageUrl}
       clicks={cardData.clicks}
       productImages={cardData.productImages}
       productType={cardData.productType}
       productModes={cardData.productModes}
       stores={cardData.stores}
       name={cardData.name}
       NZWide={cardData.NZWide}
       locations={cardData.locations}
       slug={cardData.slug}
       width={3}
       />
            </>) : (<>
                <CommonCoupon
                            category={cardData.category}
                            imageUrl={cardData.imageUrl}
                            clicks={cardData.clicks}
                            productImages={cardData.productImages}
                            productType={cardData.productType}
                            productModes={cardData.productModes}
                            stores={cardData.stores}
                            name={cardData.name}
                            NZWide={cardData.NZWide}
                            locations={cardData.locations}
                            width={6}
                            slug={cardData.slug}
                          />
            </>)}
            
            </>
      
        );
    })}


  </Grid>
  )
}

export default CardDisplay
