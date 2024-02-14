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
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SendIcon from "@mui/icons-material/Send";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Banner from "../common components/Banner";
import Category_section_title from "../common components/CategorySection_title";
import { getData } from "../../api/homeApi";
import { getStoreData } from "../../api/storeApi";
import { useSelector, useDispatch } from "react-redux";
import { storePageNumber } from "../../features/storeData";
import { useLocation, useNavigate } from "react-router-dom";

const OnlineStoreComp = () => {
  const [storeData, setStoredata] = useState([]);
  const [currentDataLength, setCurrentDataLength] = useState();
  const [currentItemsLength, setCurrentItemsLength] = useState(0);
  const [currentResponseTotalCount, setCurrentResponseTotalCount] = useState(0);
  const [loading, setLoading] = useState(true)





  const pageNumber = useSelector((store) => store.storeData.pageNumber);
  const {storeDiscountType, storeCategoryType} = useSelector((store)=> store.storeData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


    const currentCityName = useSelector((store)=> store.filterData.currentCity)

  useEffect(() => {
    const params = {
      take: 20,
      page: pageNumber,
      skip: 0,
      searchKeyword: "",
      storeMode: location.pathname == "/online-stores" ? "Online" : "" ,
      discountTypeId : storeDiscountType,
      categoryId : storeCategoryType,
    };

    if (pageNumber == 1) {
      getStoreData(params, currentCityName).then((res) => {
        setLoading(true)
        setCurrentItemsLength(res.data.items.length)
        setCurrentResponseTotalCount(res.data.total)
        setStoredata(res.data.items);
        setCurrentDataLength(res.data.items.length)
        setLoading(false)
      });
    } else {
      getStoreData(params, currentCityName).then((res) => {
        setLoading(true)
        setCurrentItemsLength(currentItemsLength + res.data.items.length);
        setCurrentResponseTotalCount(res.data.total);
        setCurrentDataLength(res.data.items.length)
        const nextPageData = res.data.items;
        setStoredata(storeData.concat(nextPageData));
        setLoading(false)
      });
    }
  }, [pageNumber, storeDiscountType, storeCategoryType,location.pathname, currentCityName]);

  

  return (
    <Grid container sx={{ ...allCenter, height: "auto" }}>
      <Box
        sx={{
          alignItems: "center",
          height: "auto",
          width: "1300px",
          //   bgcolor: theme.palette.primary.light,
          borderRadius: "10px",
          mb: "5rem",
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          // flexDirection:"column"
        }}
      >
        {loading ? (<>
        
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

        </>) : 
        
        (

          currentDataLength !== 0 ? 
        
            (<>
              {storeData.map(
              ({ imageUrl, name, address, slug }) => {
                return (
                  <Grid
                    item
                    xl={4}
                    sx={{ ...allCenter, height: "auto", mt: "2rem" }}
                  >
                    <Card
                    onClick={()=>navigate(`/store/${slug}`)}
                      sx={{
                        alignItems: "center",
                        height: "auto",
                        width: { xl: "390px" },
                        border: "1px solid #DEDEDE",
                        display: "flex",
                        flexDirection: "row",
                        borderRadius: "10px",
                        mt: "0rem",
                        cursor:"pointer"
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
                            // bgcolor: "red",
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
                      ) : 
                      
                      (
                        <></>
                      )}
                    </Card>
                  </Grid>
                );
              }
            )}
    
              {currentItemsLength == currentResponseTotalCount ? (<></>) : (<><Box
              component={"div"}
              sx={{ ...allCenter, height: "7rem", width: "100%" }}
            >
              <Button
              onClick={()=>dispatch(storePageNumber({pageNumber : pageNumber + 1}))}
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
            </Box></>)}
        
            
            </>) 
            
            : 
            
            (<>
            <Grid xl={12} sx={{...allCenter, height:{xl:"10rem"}}}>
              <Typography sx={{fontSize:theme.typography.h5.lg, fontWeight:'500'}}>
                No store available
              </Typography>
            </Grid>
            </>)


        )}




      </Box>
    </Grid>
  );
};

export default OnlineStoreComp;
