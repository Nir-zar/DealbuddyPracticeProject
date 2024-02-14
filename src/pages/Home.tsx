import React from "react";
import Ads_section from "../components/home page/AdsSection";
import Blog_section from "../components/home page/BlogSection";
import Category_and_slider from "../components/home page/CategoryAndSlider";
import Coupon_section from "../components/home page/CouponSection";
import Sales_section from "../components/home page/SalesSection";
import Store_section from "../components/home page/StoreSection";

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
  );
};

export default Home;
