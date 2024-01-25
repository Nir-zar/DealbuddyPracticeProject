import React from 'react'
import Ads_section from '../components/home page/Ads_section'
import Blog_section from '../components/home page/Blog_section'
import Category_and_slider from '../components/home page/Category_and_slider'
import Coupon_section from '../components/home page/Coupon_section'
import Sales_section from '../components/home page/Sales_section'
import Store_section from '../components/home page/Store_section'


const Home = () => {
  return (
  <>
 <Category_and_slider />
 <Sales_section />
 <Ads_section />
 <Coupon_section /> 
 <Store_section />
 <Blog_section />
  </>
  )
}

export default Home
