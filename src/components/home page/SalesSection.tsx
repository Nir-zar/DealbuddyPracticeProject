import {
  Box,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { allCenter } from "../../constant/commonStyle";
import Category_section_title from "../common components/CategorySection_title";

import { getData } from "../../api/homeApi";
import CommonCard from "../common components/CommonCard";
import { useSelector } from "react-redux";

const SalesSection = () => {
  const [salesCardData, setSalesCardData] = useState([]);

  const url =
    "deal/deals?v=1705405228343&limit=999&page=1&productType=sale&shortBy=clicks&isPopular=true&updateViewCount=true&t=1705405228343";

    const currentCityName = useSelector((store) => store.filterData.currentCity);

    useEffect(() => {
      const params = {};
      getData(url, params, currentCityName).then((res) => setSalesCardData(res.data.items));
  }, [currentCityName]);

 

  return (
    salesCardData.length > 0 &&    <Grid container sx={{ ...allCenter, height: "auto" }}>
    <Category_section_title title="Popular Sales" />

    <Box
      sx={{
        alignItems: "center",
        height: "auto",
        width: "1300px",
        //   bgcolor: theme.palette.primary.light,
        borderRadius: "10px",
        mt: "2rem",
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
      }}
    >
      {salesCardData.map(
        ({
          category,
          productImages,
          productType,
          productModes,
          name,
          stores,
          NZWide,
          locations,
          clicks,
          imageUrl,
          slug
        }) => {
          return (
           <CommonCard 
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
           />
          );
        }
      )}
    </Box>
  </Grid>
  
  );
};

export default SalesSection;
