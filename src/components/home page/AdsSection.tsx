import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { allCenter } from "../../constant/commonStyle";
import theme from "../../theme";
import { getAdsData } from "../../api/adsApi";

const AdsSection = () => {


const [adsData, setAdsData] = useState([])

useEffect(()=>{
  getAdsData().then((res)=>{
  setAdsData(res.data.items)

  
})
},[])

  return (
    adsData.length > 0 &&  <Grid container sx={{ ...allCenter, height: "auto", bgcolor:theme.palette.success.main, mt:3 }}>
      <Box
        sx={{
          alignItems: "center",
          height: "auto",
          width: "1300px",
          borderRadius: "10px",
          mt: "2rem",
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          p: "10px 0 70px 0",
        }}
      >
        <Box sx={{ height: "auto", width: "100%" }}>
          <Typography
            sx={{ fontSize: theme.typography.h5.xl, fontWeight: 700 }}
          >
            Sponsored Ads
          </Typography>
        </Box>

        <Box
          sx={{
            height: "auto",
            width: "100%",
            alignItems: "center",
            borderRadius: "10px",
            mt: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {adsData.map(({imageUrl,shortDescription, title}) => {
            return (
              <Grid xl={3} sx={{ ...allCenter, height: "auto" }}>
                <Card
                  sx={{
                    alignItems: "center",
                    height: "274px",
                    width: { xl: "94%" },
                    border: "1px solid #DEDEDE",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    mt: "1rem",
                  }}
                >
                  <CardMedia
                    component={"img"}
                    alt="Card Image"
                    src={imageUrl}
                    sx={{
                      height: { xl: "165px" },
                      width: { xl: "100%" },
                      bgcolor: "blue",
                    }}
                  ></CardMedia>

                  <CardContent
                    sx={{
                      width: { xl: "252px" },
                      height: "auto",
                      mt: "1rem",
                    //   bgcolor: "pink",
                      padding: "0px",
                    }}
                  >
                    <Typography
                    color={theme.palette.common.black}
                      sx={{
                        mt: "0.2rem",
                        fontSize: theme.typography.h6.xl,
                        lineHeight: "22px",
                      }}
                    >
                      {title}
                    </Typography>

                    <Box
                      sx={{
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        mt: "0.5rem",
                      }}
                    >
                      <Typography
                      color={theme.palette.grey[500]}
                        sx={{
                          fontSize: theme.typography.caption.xl,
                          fontWeight: 300,
                        }}
                      >
                       {shortDescription}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
};

export default AdsSection;
