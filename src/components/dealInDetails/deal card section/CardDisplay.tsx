import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonCard from '../../common components/CommonCard';
import { useSelector } from 'react-redux';
import { getRelatedProductData } from '../../../api/homeApi';
import CommonCoupon from '../../common components/CommonCoupon';

const CardDisplay = () => {

const [cardData, setCardData] = useState([])

const productId = useSelector((store)=> store.dealData.dealProductId);

useEffect(()=>{

    const params = {
        productId : productId,
        limit : 4
    }

    if(productId)
    {
        getRelatedProductData(params).then((res)=>{
            setCardData(res.data);
        })
    }


},[productId])

  return (
  <Grid container sx={{height:'auto'}}>
    
    {cardData.map(({ category,
                    imageUrl,
                    clicks,
                    productImages,
                    productType,
                    productModes,
                    stores,
                    name,
                    NZWide,
                    locations,
                    index,
                    slug,
                couponCode,
            })=>{
        return(

            <>
            {productType == "sale" ? 
            (<>
             <CommonCard 
       key={index}
       category={category}
       imageUrl={imageUrl}
       clicks={clicks}
       productImages={productImages}
       productType={productType}
       productModes={productModes}
       stores={stores}
       name={name}
       NZWide={NZWide}
       locations={locations}
       slug={slug}
       width={3}
       />
            </>) : (<>
                <CommonCoupon
                            category={category}
                            imageUrl={imageUrl}
                            clicks={clicks}
                            productImages={productImages}
                            productType={productType}
                            productModes={productModes}
                            stores={stores}
                            name={name}
                            NZWide={NZWide}
                            locations={locations}
                            width={6}
                            slug={slug}
                          />
            </>)}
            
            </>
      
        );
    })}


  </Grid>
  )
}

export default CardDisplay
