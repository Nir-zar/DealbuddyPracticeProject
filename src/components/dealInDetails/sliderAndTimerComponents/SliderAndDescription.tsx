import { Box, Grid } from "@mui/material";
import React from "react";
import DealSlider from "./DealSlider";
import DealDescription from "../DealDescription";

const SliderAndDescription = () => {
  return (
  
      <Grid xl={8} item sx={{ height: "auto"}}>
        <DealSlider />
        <DealDescription />
      </Grid>

  );
};

export default SliderAndDescription;
