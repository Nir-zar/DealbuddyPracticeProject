import { Box, Typography, Divider } from '@mui/material'
import React from 'react'
import { all_center } from '../../../constant/commonStyle'
import theme from '../../../theme'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BiLogoGmail } from 'react-icons/bi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { RiMailSendLine } from "react-icons/ri";


const counterBoxStyle = {
    height: "70px",
    width: "70px",
    bgcolor: theme.palette.grey[100],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  
  const socialMediaBoxStyyle = {
    height: "2.25rem",
    width: "2.25rem",
    borderRadius: "50%",
    ...all_center
  };
  




const LimitedOffer = () => {

    const dealAndStoreAllDetails = useSelector(
        (store) => store.dealData.dealAndStoreAllDetails
      );
      const { dealSlug } = useParams();
      dealAndStoreAllDetails && console.log(dealAndStoreAllDetails?.category?.name);
    
      console.log(dealAndStoreAllDetails);


  return (
<>

<Box
        gap={0.5}
        sx={{
          ...all_center,
          height: "auto",
          width: "40%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: theme.typography.subtitle1.xl }}>
          Clicks
        </Typography>

        <Typography sx={{ fontSize: theme.typography.subtitle1.xl }}>
          {dealAndStoreAllDetails?.clicks}
        </Typography>
      </Box>

      <Divider
        sx={{
          bgcolor: theme.palette.grey[100],
          width: "100%",
        }}
      >
        {" "}
      </Divider>

      <Box
        component={"div"}
        sx={{
          ...all_center,
          height: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          mt: { xl: "1rem" },
        }}
      >
        <Box
          component={"div"}
          gap={3}
          sx={{
            ...all_center,
            height: "auto",
            width: "80%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: theme.typography.subtitle1.xl }}>
            Time Left - Limited Offer!
          </Typography>

          <Box
            component={"div"}
            sx={{
              height: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box component={"div"} sx={{ ...counterBoxStyle }}>
              <Typography>5</Typography>
              <Typography>Days</Typography>
            </Box>

            <Box component={"div"} sx={{ ...counterBoxStyle }}>
              <Typography>12</Typography>
              <Typography>Hours</Typography>
            </Box>

            <Box component={"div"} sx={{ ...counterBoxStyle }}>
              <Typography>25</Typography>
              <Typography>Minutes</Typography>
            </Box>

            <Box component={"div"} sx={{ ...counterBoxStyle }}>
              <Typography>22</Typography>
              <Typography>Seconds</Typography>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{
            bgcolor: theme.palette.grey[100],
            width: "100%",
            mt: { xl: "1rem" },
          }}
        >
          {" "}
        </Divider>
      </Box>

      <Box
        component={"div"}
        sx={{ ...all_center, height: "auto", width: "100%" }}
      >
        <Box
          component={"div"}
          sx={{
            height: "auto",
            width: "80%",
            display: "flex",
            justifyContent: "space-evenly",
            pb:"2rem"
          }}
        >
          <Box
            component={"div"}
            sx={{ ...socialMediaBoxStyyle, bgcolor: "#4267B2" }}
          > <FaFacebookF color={theme.palette.common.white} /> </Box>

          <Box
            component={"div"}
            sx={{ ...socialMediaBoxStyyle, bgcolor: "#00acee" }}
          > <FaTwitter color={theme.palette.common.white} /> </Box>

<Box
            component={"div"}
            sx={{ ...socialMediaBoxStyyle, bgcolor: "#006fa6" }}
          > <FaLinkedinIn color={theme.palette.common.white} /> </Box>

<Box
            component={"div"}
            sx={{ ...socialMediaBoxStyyle, bgcolor: "#FF961C" }}
          > <RiMailSendLine color={theme.palette.common.white} /> </Box>

<Box
            component={"div"}
            sx={{ ...socialMediaBoxStyyle, bgcolor: "#25D366" }}
          > <FaWhatsapp color={theme.palette.common.white} /> </Box>
        </Box>
      </Box>

</>
  )
}

export default LimitedOffer
