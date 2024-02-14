import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { allCenter } from "../constant/commonStyle";
import theme from "../theme";
import ImageSection from "../components/how it works/ImageSection";
import TypesOfOffers from "../components/how it works/TypesOfOffers";

const HowItWorks = () => {
  return (
    <>
      <ImageSection />
      <TypesOfOffers />
    </>
  );
};

export default HowItWorks;
