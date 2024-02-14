import React from "react";
import DealPageTite from "../components/deal/DealPageTitle";
import DealsFilterAndProducts from "../components/deal/DealsFilterAndProducts";
import DealCategorySlider from "../components/deal/DealCategorySlider";

const Deal = () => {
  return (
    <>
      <DealCategorySlider />
      <DealPageTite />
      <DealsFilterAndProducts />
    </>
  );
};

export default Deal;
