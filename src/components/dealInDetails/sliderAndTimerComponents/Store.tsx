import { Box, Typography, Divider, Link } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { allCenter } from "../../../constant/commonStyle";
import theme from "../../../theme";
import CallIcon from "@mui/icons-material/Call";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import SendIcon from "@mui/icons-material/Send";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useSelector } from "react-redux";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import { Fullscreen } from "@mui/icons-material";

const Store = () => {
  const navigate = useNavigate();

  const storeDescription = useSelector(
    (store) => store.dealData.storeDescription
  );

  const [showAllText, setShowAllText] = useState(false);


    const testString = useMemo(()=>{
      const testString = storeDescription;
      return testString;
    },[storeDescription])

    const resultArray = useMemo(()=>{
      const resultArray = testString && testString.split(" ");
      return resultArray;
    },[testString])


    const arr1 = useMemo(()=>{
      const arr1 = resultArray && resultArray.slice(0, 20).join(" ");
      return arr1;
    },[resultArray])


    const arr2 = useMemo(()=>{
      const arr2 = resultArray && resultArray.slice(20).join(" ");
      return arr2;
    },[arr1])

  const dealAndStoreAllDetails = useSelector(
    (store) => store.dealData.dealAndStoreAllDetails
  );

  return (
    <>
      <Box
        component={"div"}
        sx={{
          ...allCenter,
          height: "auto",
          width: "90%",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: theme.typography.h6.xl }}>Store</Typography>

        <Divider
          sx={{
            bgcolor: theme.palette.grey[200],
            width: "100%",
            mt: { xl: "0.5rem" },
          }}
        ></Divider>
      </Box>

      <Box
        component={"div"}
        gap={1.5}
        sx={{
          height: "auto",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          mt: "0.3rem",
        }}
      >
        {/* store address start */}
        <Box
          sx={{
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <StorefrontOutlinedIcon sx={{ color: theme.palette.primary.main }} />
          <Typography
            onClick={() =>
              navigate(`/store/${dealAndStoreAllDetails?.stores[0]?.slug}`)
            }
            sx={{
              ml: "0.5rem",
              fontSize: theme.typography.subtitle1.xl,
              "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          >
            {dealAndStoreAllDetails?.stores
              ? dealAndStoreAllDetails?.stores[0]?.name
              : ""}
          </Typography>
        </Box>
        {/* store address end */}

        {/* store deal count start */}
        <Box
          sx={{
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <PlaceOutlinedIcon sx={{ color: theme.palette.primary.main }} />
          <Typography
            sx={{ ml: "0.5rem", fontSize: theme.typography.subtitle1.xl }}
          >
            {dealAndStoreAllDetails?.stores &&
              (dealAndStoreAllDetails?.stores[0]?.storeModes[0]?.name == "Online"
                ? "Online"
                : dealAndStoreAllDetails?.stores[0]?.address?.fillAddress)}
          </Typography>
        </Box>
        {/* store deals count end */}

        {/* store phone number and website start */}
        <Box
          gap={1.5}
          sx={{
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {dealAndStoreAllDetails?.stores[0]?.phone && (
            <Box
              component={"div"}
              sx={{ height: "auto", width: "auto", display: "flex" }}
            >
              <CallIcon sx={{ color: theme.palette.primary.main }} />
              <Typography
                sx={{ ml: "0.5rem", fontSize: theme.typography.subtitle1.xl }}
              >
                {dealAndStoreAllDetails?.stores
                  ? dealAndStoreAllDetails?.stores[0]?.phone
                  : "null"}
              </Typography>
            </Box>
          )}

          {dealAndStoreAllDetails?.stores[0]?.website && (
            <Box
              component={"div"}
              sx={{ height: "auto", width: "auto", display: "flex" }}
            >
              <LanguageIcon sx={{ color: theme.palette.primary.main }} />
              <Link
                target="_blank"
                underline="none"
                color="inherit"
                href="https://www.escapist.co.nz"
              >
                <Typography
                  sx={{
                    ml: "0.5rem",
                    fontSize: theme.typography.subtitle1.xl,
                    "&:hover": {
                      color: theme.palette.primary.main,
                      cursor: "pointer",
                    },
                  }}
                >
                  {dealAndStoreAllDetails?.stores
                    ? dealAndStoreAllDetails?.stores[0]?.website
                    : "null"}
                </Typography>
              </Link>
            </Box>
          )}
        </Box>
        {/* store phone number and website emd  */}
      </Box>

      {resultArray && (
        <Box
          component={"div"}
          sx={{
            height: "auto",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            mt: "1.3rem",
          }}
        >
          <Typography
            sx={{
              fontSize: theme.typography.subtitle1.xl,
              display:"-webkit-box",
              WebkitBoxOrient:"vertical",
              WebkitLineClamp: showAllText ? 10 : 2,
              textOverflow: "ellipsis",
              overflow: 'hidden', 
             
            }}
          >
            {resultArray && resultArray.length > 10
              ? showAllText
                ? `${arr1} ${arr2}`
                : `${arr1}`
              : testString}
          </Typography>

          <Typography
            onClick={() => setShowAllText(!showAllText)}
            sx={{
              fontSize: theme.typography.subtitle1.xl,
              color: theme.palette.primary.main,
              cursor: "pointer",
              mt: { xl: "0.5rem" },
            }}
          >
            {showAllText ? "Read Less" : "Read More"}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Store;
