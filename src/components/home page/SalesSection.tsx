import {
  Box,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { allCenter } from "../../constant/commonStyle";
import Category_section_title from "../common components/CategorySectionTitle";
import CommonCard from "../common components/CommonCard";
import { useSelector } from "react-redux";
import { dealsApiData, homePagedealsApiData } from "../../api/dealApi";

const SalesSection = () => {
  const [salesCardData, setSalesCardData] = useState([]);

 

    const currentCityName = useSelector((store) => store.filterData.currentCity);

    useEffect(() => {
      
      const params = {
        searchKeyword: "",
        limit : 999,
        page : 1,
        productType : 'sale',
        shortBy : 'clicks',
        updateViewCount : true,
        isPopular : true
      };




      homePagedealsApiData( params, currentCityName).then((res) => {
     
      
        setSalesCardData(res.data.items);
      });
    },[currentCityName]);

 

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
      {salesCardData.map((cardData) => {
          return (
           <CommonCard 
              category={cardData.category}
              imageUrl={cardData.imageUrl}
              clicks={cardData.clicks}
              productImages={cardData.productImages}
              productType={cardData.productType}
              productModes={cardData.productModes}
              stores={cardData.stores}
              name={cardData.name}
              NZWide={cardData.NZWide}
              locations={cardData.locations}
              slug={cardData.slug}        />
          );
        }
      )}
    </Box>
  </Grid>
  
  );
};

export default SalesSection;
