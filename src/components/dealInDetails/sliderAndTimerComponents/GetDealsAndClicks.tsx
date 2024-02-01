import { Box, Typography, Button, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { all_center } from '../../../constant/commonStyle'
import theme from '../../../theme'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const GetDealsAndClicks = () => {

   
        const [timer, setTimer] = useState(true);
      
        useEffect(() => {
          setTimeout(() => {
            setTimer(false);
          }, 1000);
        }, []);
      
        const dealAndStoreAllDetails = useSelector(
          (store) => store.dealData.dealAndStoreAllDetails
        );
        const { dealSlug } = useParams();
        dealAndStoreAllDetails && console.log(dealAndStoreAllDetails?.category?.name);


  return (
  <>
        <Box
        component={"div"}
        sx={{
          ...all_center,
          height: "auto",
          width: "80%",
          mx: "auto",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: "auto",
            height: "auto",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            component={"img"}
            src={`https://www.dealbuddy.co.nz/assets/img/sale.png?v=1`}
            alt="coupon tag"
            sx={{ height: "1.5rem", width: "1.5rem", mr: { xl: "1rem" } }}
          />

          {timer ? (
            ""
          ) : (
            <>
              <Typography
                sx={{
                  fontSize: theme.typography.subtitle1.xl,
                  color: theme.palette.grey[500],
                }}
              >
                {dealAndStoreAllDetails?.category?.name + " -"}&nbsp;
              </Typography>

              <Typography
                sx={{
                  fontSize: theme.typography.subtitle1.xl,
                  color: theme.palette.grey[500],
                }}
              >
                {dealAndStoreAllDetails?.productType + " -"}&nbsp;
              </Typography>

              <Typography
                sx={{
                  fontSize: theme.typography.subtitle1.xl,
                  color: theme.palette.grey[500],
                }}
              >
                {dealAndStoreAllDetails.productModes
                  ? dealAndStoreAllDetails?.productModes[0]?.name
                  : ""}
                &nbsp;{"-"}&nbsp;
                {dealAndStoreAllDetails.productModes
                  ? dealAndStoreAllDetails?.productModes[1]?.name
                  : ""}

              </Typography>
            </>
          )}
        </Box>
      </Box>

      <Box
        component={"div"}
        sx={{ height: "auto", width: "80%", mt: { xl: "1rem" } }}
      >
        <Typography
          sx={{
            fontSize: theme.typography.h5.lg,
            textAlign: "center",
            lineHeight: "30px",
          }}
        >
          {dealSlug}
        </Typography>
      </Box>

      <Button
        sx={{
          height: "2.5rem",
          width: "80%",
          background: theme.gradient_color.button_color,
          cursor: "pointer",
          "&:hover": { background: theme.gradient_color.button_hover_color },
        }}
      >
        <Typography
          sx={{
            width: "100%",
            color: theme.palette.common.white,
            "&:hover": { color: theme.palette.common.black },
          }}
        >
          Get the Deal
        </Typography>
      </Button>

      <Divider
        sx={{
          bgcolor: theme.palette.grey[100],
          width: "100%",
        }}
      >
        {" "}
      </Divider>
  </>
  )
}

export default GetDealsAndClicks;
