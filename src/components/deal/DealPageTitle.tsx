import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { allCenter } from "../../constant/commonStyle";
import theme from "../../theme";
import { useLocation, useParams } from "react-router-dom";
import { getIndividualCategoryData } from "../../api/categoryApi";

const DealPageTite = () => {

const [categoryTitleAndDescription, setCategoryTitleAndDescription] = useState()

  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      getIndividualCategoryData(slug).then((res) => {
        setCategoryTitleAndDescription(res.data);
      });
    }
  }, []);

  return (
    <Grid container sx={{ ...allCenter }}>
      <Box
        component={"div"}
        sx={{ height: "auto", width: { xl: "1300px" }, p: "3rem 0 0 0" }}
      >
        <Box
          component={"div"}
          sx={{
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            mb:"1.5rem",
            justifyContent:"space-between"
          }}
        >

          
          <Typography sx={{ fontSize: theme.typography.h5.xl }}>
          
            {slug ? (categoryTitleAndDescription?.pageTitle) : ("Get the finest deals on everything with exciting discounts and coupon codes")}
          </Typography>

          <Typography sx={{ fontSize: theme.typography.subtitle1.xl }}>
          
          {slug ? (categoryTitleAndDescription?.description) : ("")}
          
        </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default DealPageTite;
