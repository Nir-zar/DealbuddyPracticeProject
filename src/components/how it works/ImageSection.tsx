import { Grid, Box, Typography } from '@mui/material';
import React from 'react'
import { allCenter } from '../../constant/commonStyle';
import theme from '../../theme';

const ImageSection = () => {
    return (
      <Grid container sx={{ ...allCenter, height: "auto"}}>
        <Grid
          item
          xl={12}
          sx={{
            height: "416px",
            backgroundImage:
              'url("https://www.dealbuddy.co.nz/assets/img/how-it-works.jpg")',
            position: "relative",
            objectFit:"cover",
            backgroundSize:"cover"
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              position: "absolute",
              borderRadius: "10px",
              top: 0,
              left: 0,
              backgroundColor: "#0000008f",
              ...allCenter,
              color: theme.palette.common.white,
              display: "flex",
              flexDirection: "column",
            }}
          >
              <Box component={'div'}
              sx={{height:"auto", width:"1300px",display:"flex",flexDirection:"column"}}
              >
   <Typography sx={{ fontSize: theme.typography.h4.xl, alignSelf:"center" }}>
              Are you a customer ?
            </Typography>
  
            <Typography sx={{  }}>
              DealBuddy brings together the best savings and discounts, offering
              great value for shopping – online or in-store. The biggest problem
              we are trying to solve is providing real, working deals and coupons
              to you. We save the time and energy you spend hunting for deals over
              the internet. On DealBuddy, all deals and coupons are uploaded by
              actual retailers or our admin team and updated on a regular basis,
              which guarantees both the genuineness and functionality of coupons.
            </Typography>
              </Box>
           
          </Box>
        </Grid>
      </Grid>
    );
  };

export default ImageSection
