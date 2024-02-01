import { Box, Grid } from "@mui/material";
import React from "react";
import DealSlider from "./DealSlider";

const SliderAndDescription = () => {
  return (
  
      <Grid xl={8} item sx={{ height: "auto"}}>
        <DealSlider />
      </Grid>

  );
};

export default SliderAndDescription;
