import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { all_center } from "../../../constant/commonStyle";
import theme from "../../../theme";
import { useSelector } from "react-redux";

const ApplicableLocations = () => {
  const dealAndStoreAllDetails = useSelector(
    (store) => store.dealData.dealAndStoreAllDetails
  );


  

  return (
    <>
      <Box
        component={"div"}
        sx={{
          ...all_center,
          height: "auto",
          width: "90%",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: theme.typography.h6.xl }}>
          Applicable Locations
        </Typography>

        <Divider
          sx={{
            bgcolor: theme.palette.grey[200],
            width: "100%",
            mt: { xl: "0.5rem" },
          }}
        ></Divider>

        <Box
          component={"div"}
          gap={1}
          sx={{
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap:"wrap"
          }}
        >
       
<Box
            component={"div"}
            sx={{
              height: "auto",
              width: "auto",
              mt: "1.5rem",
              p: { xl: "0.2rem 0.7rem" },
              bgcolor: theme.palette.grey[100],
              borderRadius: "10px",
              fontWeight:700
            }}
          >
            <Typography sx={{fontSize:theme.typography.caption.xl}}>
              {dealAndStoreAllDetails?.locations && (dealAndStoreAllDetails?.NZWide ? ("NZ Wide") : (dealAndStoreAllDetails?.locations[0]?.location))
               }
            </Typography>
          </Box>
          
        </Box>
      </Box>
    </>
  );
};

export default ApplicableLocations;
