import React from "react";
import AdsSection from "../components/home page/AdsSection";
import BlogSection from "../components/home page/BlogSection";
import CategoryAndSlider from "../components/home page/CategoryAndSlider";
import CouponSection from "../components/home page/CouponSection";
import SalesSection from "../components/home page/SalesSection";
import StoreSection from "../components/home page/StoreSection";

const Home = () => {
  return (
    <>
      <CategoryAndSlider />
      <SalesSection />
      <AdsSection />
      <CouponSection />
      <StoreSection />
      <BlogSection />
    </>
  );
};

export default Home;
