import React, { useEffect, useState } from "react";
import DealInDetailBody from "./sliderAndTimerComponents/DealInDetailBody";
import DealInDetailCard from "./DealInDetailCard";
import { Grid } from "@mui/material";
import { allCenter } from "../../constant/commonStyle";
import { useParams } from "react-router-dom";
import { dealInDetailApiData } from "../../api/dealApi";
import { useDispatch } from "react-redux";
import DealSlider from "./sliderAndTimerComponents/DealSlider";
import {
  dealAndStoreDetail,
  dealProductId,
  sliderImage,
  storeDescription,
} from "../../features/dealData";
import { filterData } from "../../features/filterData";

const DealInDetailMainComponent = () => {
  const [dealInDetailData, setDealInDEtailData] = useState([]);

  const { dealSlug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (dealSlug) {
      dealInDetailApiData(dealSlug).then((res) => {
        setDealInDEtailData(res.data);
        dispatch(sliderImage(res.data.productImages));
        dispatch(dealAndStoreDetail(res.data));
        dispatch(storeDescription(res.data.stores[0].description));
        dispatch(dealProductId(res.data.id));
        dispatch(filterData({ shortBy: "date", pageNumber: 1 }));
      });
    }
  }, []);

  return (
    <>
      <Grid container sx={{ ...allCenter }}>
        <DealInDetailBody />
        <DealInDetailCard />
      </Grid>
    </>
  );
};

export default DealInDetailMainComponent;
