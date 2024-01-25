import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { all_center } from "../../constant/commonStyle";
import theme from "../../theme";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import Category_section_title from "../common components/CategorySection_title";
import Common_card_button from "../common components/CommonCardButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { getData } from "../../api/homeApi";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommonCard from "../common components/CommonCard";

const Sales_section = () => {
  const [salesCardData, setSalesCardData] = useState([]);
  const [filledIcon, setFilledIcon] = useState(false);
  const url =
    "deal/deals?v=1705405228343&limit=999&page=1&productType=sale&shortBy=clicks&isPopular=true&updateViewCount=true&t=1705405228343";

  useEffect(() => {
    getData(url).then((res) => setSalesCardData(res.data.items));
  }, []);

  const changeIcon = ()=>{
    setFilledIcon(!filledIcon)
  }

  return (
    <Grid container sx={{ ...all_center, height: "auto" }}>
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
            imageUrl
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
             />
            );
          }
        )}
      </Box>
    </Grid>
  );
};

export default Sales_section;
