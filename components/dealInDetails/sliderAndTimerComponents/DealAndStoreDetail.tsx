import { Box, Button, Divider, Grid, Typography, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { all_center } from "../../../constant/commonStyle";
import { useSelector } from "react-redux";
import theme from "../../../theme";
import GetDealsAndClicks from "./GetDealsAndClicks";
import LimitedOffer from "./LimitedOffer";
import Store from "./Store";
import ApplicableLocations from "./ApplicableLocations";






const DealAndStoreDetail = () => {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 1000);
  }, []);

const dealAndStoreAllDetails = useSelector((store)=> store.dealData.dealAndStoreAllDetails);




  return (
    <>
      <Grid item xl={4} sx={{}}>
        <Box
          component={"div"}
          gap={2.5}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "auto",
            border: `1px solid ${theme.palette.grey[300]}`,
            borderRadius: "10px",
            pt: { xl: "2rem" },
          }}
        >
          <GetDealsAndClicks />
          <LimitedOffer />
        </Box>

        {dealAndStoreAllDetails?.stores && 
        (dealAndStoreAllDetails.stores[0].showInFrontend ?    
        (<Box
          component={"div"}
          sx={{
            ...all_center,
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            border:`1px solid ${theme.palette.grey[300]}`,
            mt:{xl:"1.5rem"},
            borderRadius:"10px",
            p: { xl: "2rem 0" },
          }}
        >

         
         <Store />


        </Box>) : ("")) }
      

        <Box
          component={"div"}
          sx={{
            ...all_center,
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            border:`1px solid ${theme.palette.grey[300]}`,
            mt:{xl:"1.5rem"},
            borderRadius:"10px",
            p: { xl: "2rem 0" },
          }}
        >

          <ApplicableLocations />


        </Box>



      </Grid>
    </>
  );
};

export default DealAndStoreDetail;
