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

const Store_section = () => {
  const [storeData, setStoredata] = useState([]);
  const url =
    "store/stores?v=1705477339221&take=999&isPopular=true&t=1705477339221";

  useEffect(() => {
    getData(url).then((res) => {
      setStoredata(res.data.items);
    });
  }, []);

  return (
    <Grid container sx={{ ...all_center, height: "auto" }}>
      <Category_section_title title="Popular Stores" />

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
      
        {storeData.map(
          ({ imageUrl, name, address, zipCode, activeDealsCount }) => {
            return (
              <Grid
                item
                xl={4}
                sx={{ ...all_center, height: "auto", mt: "2rem",}}
              >
                <Card
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
                  {address.zipCode != null ? 
                  (
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
                  )
                  :
                  (<></>)
                  }
                
                </Card>
              </Grid>
            );
          }
        )}
      
      </Box>

      <Banner />
    </Grid>
  );
};

export default Store_section;
