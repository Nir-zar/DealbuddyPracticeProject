import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { all_center } from "../../constant/commonStyle";
import theme from "../../theme";
import { getIndividualStoreData } from "../../api/storeApi";
import { useParams } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import SendIcon from "@mui/icons-material/Send";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const IndividualStoreDetail = () => {
  const [individualStoreData, setIndividualStoreData] = useState([]);
  const [showAllText, setShowAllText] = useState(false);

  const { storeSlug } = useParams();

  useEffect(() => {
    console.log(storeSlug);

    if (storeSlug) {
      getIndividualStoreData(storeSlug).then((res) => {
        setIndividualStoreData(res.data);
        console.log(res.data);
      });
    }
  }, [storeSlug]);

  const testString =
    "Escape rooms in Hamilton - Will you escape? You have 60 minutes to try escape one of our awesome rooms. Great for team building, events, or just to put yourself to the test with a friend. Book today and come make your escape.";
  const resultArray = testString.split(" ");
  const arr1 = resultArray.slice(0, 35).join(" ");
  const arr2 = resultArray.slice(35).join(" ");


  return (
    <Box
      component={"div"}
      sx={{
        ...all_center,
        height: "auto",
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: "10px",
        mb: "2rem",
        p: "1rem 0.8rem",
        flexDirection: "column",
      }}
    >
      <Box
        component={"div"}
        sx={{
          height: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* image section start */}
        <Box
          component={"img"}
          src={individualStoreData?.imageUrl}
          sx={{
            height: "90px",
            width: "90px",
            objectFit: "contain",
          }}
        ></Box>
        {/* image section end */}

        {/* title and detail start */}
        <Box
          component={"div"}
          sx={{
            height: "auto",
            width: "60%",
            ml: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* deals from store start */}
          <Box
            sx={{
              height: "auto",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography sx={{ fontSize: theme.typography.h6.xl }}>
              Deals from {individualStoreData?.name}
            </Typography>
          </Box>
          {/* deals from store end */}

          <Box
            component={"div"}
            gap={0.4}
            sx={{
              height: "auto",
              width: "100%",
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
              <PlaceOutlinedIcon sx={{ color: theme.palette.primary.main }} />
              <Typography
                sx={{ ml: "0.5rem", fontSize: theme.typography.subtitle2.xl }}
              >{`${individualStoreData?.address?.fillAddress}`}</Typography>
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
              <LocalOfferOutlinedIcon
                sx={{ color: theme.palette.primary.main }}
              />
              <Typography
                sx={{ ml: "0.5rem", fontSize: theme.typography.subtitle2.xl }}
              >{`${individualStoreData?.activeDealsCount} active deals`}</Typography>
            </Box>
            {/* store deals count end */}

            {/* store phone number and website start */}
            <Box
              gap={4}
              sx={{
                height: "auto",
                width: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                component={"div"}
                sx={{ height: "100%", width: "auto", display: "flex" }}
              >
                <CallIcon sx={{ color: theme.palette.primary.main }} />
                <Typography
                  sx={{ ml: "0.5rem", fontSize: theme.typography.subtitle2.xl }}
                >{`${individualStoreData?.phone}`}</Typography>
              </Box>

              <Box
                component={"div"}
                sx={{ height: "100%", width: "auto", display: "flex" }}
              >
                <LanguageIcon sx={{ color: theme.palette.primary.main }} />
                <Typography
                  sx={{ ml: "0.5rem", fontSize: theme.typography.subtitle2.xl }}
                >{`${individualStoreData?.website}`}</Typography>
              </Box>
            </Box>
            {/* store phone number and website emd  */}
          </Box>
        </Box>
        {/* title and detail end */}

        {/* store map location start */}
        {individualStoreData?.address?.zipCode && (
          <Box
            component={"div"}
            sx={{
              ...all_center,
              height: "40px",
              width: "40px",
              display: "flex",
              bgcolor: theme.palette.primary.main,
              alignSelf: "end",
              ml: "auto",
              borderRadius: "10px",
            }}
          >
            <SendIcon sx={{ color: theme.palette.common.white }} />
          </Box>
        )}

        {/* store map location end */}
      </Box>

      {/* read more component start  */}

      <Box
        component={"div"}
        sx={{
          height: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          mt: "0.5rem",
        }}
      >
        <Typography
          sx={{ fontSize:theme.typography.subtitle2.xl}}
        >
          {resultArray.length > 35 ? (showAllText ? `${arr1} ${arr2}` : `${arr1}...`) : (testString)}
        </Typography>

        <Typography
        onClick={()=>setShowAllText(!showAllText)}
          sx={{
            fontSize: theme.typography.subtitle2.xl,
            color: theme.palette.primary.main,
            cursor:"pointer"
          }}
        >
          {showAllText ? "Read Less" : "Read More"}
        </Typography>
      </Box>

      {/* read more component end */}
    </Box>
  );
};

export default IndividualStoreDetail;
