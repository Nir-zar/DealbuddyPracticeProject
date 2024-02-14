import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { allCenter } from "../../constant/commonStyle";
import theme from "../../theme";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SendIcon from "@mui/icons-material/Send";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { getStoreData } from "../../api/storeApi";
import { useSelector, useDispatch } from "react-redux";
import { PhysicalStoreType,  } from "../../features/storeData";
import { useLocation, useNavigate } from "react-router-dom";
import MyComponent from "./GoogleMaoComponent";

const PhysicalStoreComp = () => {
  const [storeData, setStoredata] = useState([]);
  const [currentDataLength, setCurrentDataLength] = useState();
  const [loading, setLoading] = useState(true);

  const pageNumber = useSelector((store) => store.storeData.pageNumber);
  const { storeDiscountType, storeCategoryType } = useSelector(
    (store) => store.storeData
  );
  const latestBounds = useSelector((store) => store.filterData.bounds);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const currentCityName = useSelector((store) => store.filterData.currentCity);

  useEffect(() => {


    const params = {
      take: 20,
      page: pageNumber,
      skip: 0,
      searchKeyword: "",
      storeMode: location.pathname == "/online-stores" ? "Online" : "In Store",
      discountTypeId: storeDiscountType,
      categoryId: storeCategoryType,
      NorthEast: {
        lng: latestBounds.northEast.lng,
        lat: latestBounds.northEast.lat,
      },
      SouthWest: {
        lng: latestBounds.southWest.lng,
        lat: latestBounds.southWest.lat,
      },
      isMapView: true,
    };

 
      getStoreData(params, currentCityName).then((res) => {
        setLoading(true);
        setStoredata(res.data.items);
        dispatch(PhysicalStoreType(res.data));
        setCurrentDataLength(res.data.items.length);
        setLoading(false);
      });
    
  }, [

    storeDiscountType,
    storeCategoryType,
    location.pathname,
    currentCityName,
    latestBounds.northEast,
  ]);

  return (
    <Grid container sx={{ ...allCenter, height: "auto" }}>
      <Box
        sx={{
          alignItems: "start",
          height: "auto",
          width: "1300px",
          //   bgcolor: theme.palette.primary.light,
          borderRadius: "10px",
          mb: "5rem",
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {loading ? (
          <>
            <Box
              sx={{
                mt: "6rem",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CircularProgress />
              <Typography sx={{ mt: "1rem" }}>Loading......</Typography>
            </Box>
          </>
        ) : (
          currentDataLength !== 0 && (
            <>
              <Grid
                item
                gap={2}
                xl={4}
                sx={{
                  display: "flex",
                  height: "600px",
                  mt: "2rem",
                  flexDirection: "column",
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    overflowY: "scroll",
                    flexDirection: "column",
                  }}
                >
                  {storeData.map(({ imageUrl, name, address, slug }) => {
                    return (
                      <Card
                        onClick={() => navigate(`/store/${slug}`)}
                        sx={{
                          alignItems: "center",
                          height: "auto",
                          width: { xl: "390px" },
                          border: "1px solid #DEDEDE",
                          display: "flex",
                          flexDirection: "row",
                          borderRadius: "10px",
                          mt: "1rem",
                          cursor: "pointer",
                          flexShrink: 0,
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
                              sx={{ color: theme.palette.primary.main }}
                            />
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
                              sx={{ color: theme.palette.primary.main }}
                            />
                            <Typography
                              sx={{
                                ml: "0.7rem",
                                fontSize: theme.typography.subtitle2.xl,
                              }}
                            >
                              1 active deal
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
                              flexDirection: "column",
                            }}
                          >
                            <Box
                              sx={{
                                ...allCenter,
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
                    );
                  })}
                </Box>
              </Grid>

              <Grid
                item
                xl={8}
                sx={{ height: "600px", border: "1px solid grey", mt: "32px" }}
              >
                <Box component={"div"} sx={{ height: "100%", width: "100%" }}>
                  <MyComponent />
                </Box>
              </Grid>
            </>
          )
        )}
      </Box>
    </Grid>
  );
};

export default PhysicalStoreComp;
