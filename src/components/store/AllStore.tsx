import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { all_center } from "../../constant/commonStyle";
import theme from "../../theme";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SendIcon from "@mui/icons-material/Send";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Banner from "../common components/Banner";
import Category_section_title from "../common components/CategorySection_title";
import { getData } from "../../api/homeApi";
import { getStoreData } from "../../api/storeApi";
import { useSelector, useDispatch } from "react-redux";
import { storeCategoryType, storeDiscountType, storePageNumber } from "../../features/storeData";
import { useNavigate } from "react-router-dom";
import StoreSearchBar from "./storeSearchBar";

const AllStore = () => {
  const [storeData, setStoredata] = useState([]);

  const { pageNumber, searchBarValue } = useSelector(
    (store) => store.storeData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const params = {
  //     take: 20,
  //     page: pageNumber,
  //     skip: 0,
  //     searchKeyword: searchBarValue,
  //   };

  //   if (pageNumber == 1) {
  //     getStoreData(params).then((res) => {
  //       setStoredata(res.data.items);
  //     });
  //   } else {
  //     getStoreData(params).then((res) => {
  //       const nextPageData = res.data.items;
  //       setStoredata(storeData.concat(nextPageData));
  //     });
  //   }
  // }, [pageNumber, searchBarValue]);

  useEffect(() => {
    const params = {
      take: 20,
      page: pageNumber,
      skip: 0,
      searchKeyword: "",
      storeMode: "Online",
      discountTypeId : storeDiscountType,
      categoryId : storeCategoryType,
    };

    if (pageNumber == 1) {
      getStoreData(params).then((res) => {
        setLoading(true)
        setCurrentItemsLength(res.data.items.length)
        setCurrentResponseTotalCount(res.data.total)
        setStoredata(res.data.items);
        setCurrentDataLength(res.data.items.length)
        setLoading(false)
      });
    } else {
      getStoreData(params).then((res) => {
        setLoading(true)
        setCurrentItemsLength(currentItemsLength + res.data.items.length);
        setCurrentResponseTotalCount(res.data.total);
        setCurrentDataLength(res.data.items.length)
        const nextPageData = res.data.items;
        setStoredata(storeData.concat(nextPageData));
        setLoading(false)
      });
    }
  }, [pageNumber, storeDiscountType, storeCategoryType]);

  return (
    <>
    
    <Grid container sx={{ ...all_center, height: "auto" }}>
      <Box
        sx={{
          alignItems: "center",
          height: "auto",
          width: "1300px",
          //   bgcolor: theme.palette.primary.light,
          borderRadius: "10px",
          // mt: "2rem",
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          // flexDirection:"column"
        }}
      >
        {storeData.map(
          ({ imageUrl, name, address, slug, activeDealsCount }) => {
            return (
              <>
             
              <Grid
                item
                xl={4}
                sx={{ ...all_center, height: "auto", mt: "2rem" }}
              >
                <Card
                  onClick={() => navigate(`/store/${slug}`)}
                  sx={{
                    alignItems: "center",
                    height: "auto",
                    width: { xl: "390px" },
                    //   bgcolor: "red",
                    border: "1px solid #DEDEDE",
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: "10px",
                    mt: "0rem",
                    cursor: "pointer"
                  }}
                >
                  <CardMedia
                    component={"img"}
                    alt="Card Image"
                    src={imageUrl}
                    sx={{
                      height: { xl: "45%" },
                      width: { xl: "25%" },

                      m: "1rem",
                    }}
                  ></CardMedia>

                  <CardContent
                    sx={{
                      width: { xl: "252px" },
                      height: "auto",
                      // mt: "1rem",
                      // bgcolor: "pink",
                      m: "0.5rem  0",
                    }}
                  >
                    <Typography
                      sx={{
                        mt: "0.2rem",
                        fontSize: theme.typography.h6.xl,
                        color: theme.palette.common.black,
                        lineHeight: "22px",
                      }}
                    >
                      {name}
                    </Typography>

                    <Box
                      sx={{
                        height: "auto",
                        display: "flex",
                        alignItems: "start",
                        mt: "0.6rem",
                      }}
                    >
                      <PlaceOutlinedIcon
                        sx={{ color: theme.palette.primary.main }} />
                      <Typography
                        sx={{
                          ml: "0.7rem",
                          fontSize: theme.typography.subtitle2.xl,
                          fontWeight: 400,
                        }}
                      >
                        {address?.fillAddress
                          ? address?.fillAddress
                          : "Online Store"}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        mt: "0.3rem",
                      }}
                    >
                      <LocalOfferOutlinedIcon
                        sx={{ color: theme.palette.primary.main }} />
                      <Typography
                        sx={{
                          ml: "0.7rem",
                          fontSize: theme.typography.subtitle2.xl,
                        }}
                      >
                        {activeDealsCount} active deal
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        mt: "0.3rem",
                      }}
                    ></Box>
                  </CardContent>
                  {address.zipCode != null ? (
                    <Grid
                      sx={{
                        display: "flex",
                        alignSelf: "end",
                        height: "full",
                        width: "auto",
                        // bgcolor: "red",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          ...all_center,
                          m: "0.7rem",
                          height: { xl: "42px" },
                          width: { xl: "45px" },
                          borderRadius: "10px",
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.common.white,
                          fontSize: theme.typography.subtitle1.xl,
                        }}
                      >
                        <SendIcon />
                      </Box>
                    </Grid>
                  ) : (
                    <></>
                  )}
                </Card>
              </Grid></>
            );
          }
        )}

        <Box
          component={"div"}
          sx={{ ...all_center, height: "7rem", width: "100%" }}
        >
          <Button
            onClick={() =>
              dispatch(storePageNumber({ pageNumber: pageNumber + 1 }))
            }
            sx={{
              height: "2.5rem",
              width: "8rem",
              alignSelf: "center",
              background: theme.gradient_color.button_color,
              //   mt: "1rem",
              color: theme.palette.common.white,
              fontSize: theme.typography.subtitle2.xl,
              "&:hover": {
                background: theme.gradient_color.button_hover_color,
                color: theme.palette.common.black,
              },
            }}
          >
            <Typography>Load More</Typography>
          </Button>
        </Box>
      </Box>
    </Grid>
    
    
    </>
  );
};

export default AllStore;
