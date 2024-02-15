import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import theme from "../../theme";
import { allCenter } from "../../constant/commonStyle";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const DealDescription = () => {
  const dealAndStoreAllDetails = useSelector(
    (store) => store.dealData.dealAndStoreAllDetails
  );



  const description = dealAndStoreAllDetails?.description;
  const navigate = useNavigate();
  const location = useLocation();

  const myParam = new URLSearchParams(location.search).get('myParam');

  

  useEffect(() => {
    if (description) {
      document.querySelector("#innerHtml").innerHTML = description;
    }
  }, [description]);

  return (
    <Box
      sx={{
        ...allCenter,
        height: "auto",
        width: "98%",
        mt: { xl: "3rem" },
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: "10px",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "90%",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          mt:{xl:"2rem"}
        }}
      >
        <Typography
          sx={{ justifySelf: "start", fontSize: theme.typography.h5.lg }}
        >
          Description
        </Typography>

        <Box
          id="innerHtml"
          className="innrerHtml"
          sx={{
            height: "90%",
            width: "100%",
            "& h2": {
              fontSize: theme.typography.h3.md,
              fontFamily: "Open Sans",
              fontWeight: 700,
            },
            "& p": {
              fontSize: theme.typography.subtitle1.xl,
              fontFamily: "Open Sans",
            },
          }}
        ></Box>

        <Box
          component={"div"}
          sx={{
            height: "auto",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            mb: { xl: "2rem" },
          }}
        >
          <Typography
            sx={{ justifySelf: "start", fontSize: theme.typography.h5.lg }}
          >
            Tags
          </Typography>

          <Box
            component={"div"}
            gap={0.5}
            sx={{
              height: "auto",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
           {dealAndStoreAllDetails?.tags && dealAndStoreAllDetails?.tags.map((data)=>{
            return(
                <Box
                onClick={()=> navigate({pathname:"/search", search:`?search=${data.name}`})}
                component={"div"}
                sx={{
                  height: "auto",
                  width: "auto",
                  mt: "1.5rem",
                  p: { xl: "0.2rem 0.7rem" },
                  bgcolor: theme.palette.grey[100],
                  borderRadius: "10px",
                  fontWeight: 700,
                }}
              >
                <Typography sx={{ fontSize: theme.typography.caption.xl }}>
                  {data.name}
                </Typography>
              </Box>
            );
           })}
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DealDescription;
