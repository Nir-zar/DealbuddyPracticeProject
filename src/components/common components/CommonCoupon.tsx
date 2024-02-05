import {
  Grid,
  Card,
  Box,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import React from "react";
import { all_center } from "../../constant/commonStyle";
import theme from "../../theme";
import Common_card_button from "./CommonCardButton";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";


interface CommonCoupon {
    category: {
      name: string;
    };
    clicks: number;
    imageUrl: string;
    name: string;
    NZWide: boolean;
    productImages: {
      imageUrl: string;
    }[];
    productType: string;
    productModes: {
      name: string;
    }[];
    stores: {
      name: string;
    }[];
    locations: {
      location: string;
    }[];
    width: number;
    slug:string;
  }


const CommonCoupon = (
   { category,
    imageUrl,
    clicks,
    productImages,
    productType,
    productModes,
    stores,
    name,
    NZWide,
    locations,
    width=3,
    slug
  }:CommonCoupon
) => {
  return (
    <Grid
      item
      xl={width}
      sx={{
        ...all_center,
        height: "474px",
        mt: "2rem",    
      }}
    >
      <Card
        sx={{
         
          alignItems: "center",
          height: "100%",
          width: { xl: "94%" },
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          position: "relative",
          "&:hover": {
            "& .showClicks": {
              display: "flex",
            },
          },
        }}
      >
        <Box
          component={"div"}
          sx={{
            ...all_center,
            position: "absolute",
            bgcolor: "#000000b8",
            height: "36px",
            width: "auto",
            p: "0 0.8rem",
            left: 15,
            top: 15,
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: theme.typography.subtitle2.xl,
              color: theme.palette.common.white,
            }}
          >
            {category?.name}
          </Typography>
        </Box>

        <Box
          component={"div"}
          sx={{
            position: "absolute",
            height: "35px",
            width: "35px",
            right: 15,
            top: 15,
          }}
        >
          <FavoriteBorderOutlinedIcon
            sx={{
              height: "100%",
              width: "100%",
              color: theme.palette.secondary.main,
            }}
          />
        </Box>

        <Box
          className="showClicks"
          component={"div"}
          sx={{
            ...all_center,
            height: "2rem",
            width: "100%",
            bgcolor: "#000000b8",
            top: 169,
            position: "absolute",
            display: "none",
          }}
        >
          <Box
            component={"img"}
            src={imageUrl}
            sx={{ height: "1rem", width: "1rem" }}
          />

          <Typography sx={{ color: theme.palette.common.white, ml: "0.5rem" }}>
            {clicks}
          </Typography>
        </Box>

        <CardMedia
          component={"img"}
          alt="Card Image"
          src={productImages[0]?.imageUrl}
          sx={{
            height: { xl: "350px" },
            width: { xl: "100%" },
            overflow: "hidden",
            bgcolor: "blue",
          }}
        ></CardMedia>

        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: { xl: "100%" },
            height: { xl: "100%" },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xl: "99%" },
              height: "100%",

              bgcolor: theme.palette.success.main,
              p: "1rem 0 1rem 0 !important",
              border: `1px dashed ${theme.palette.grey[300]}`,
            }}
          >
            <Box sx={{ height: "auto", width: "90%" }}>
              <Typography
                sx={{
                  fontSize: theme.typography.caption.xl,
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                {productType} - {" " + productModes[0]?.name}{" "}
                {productModes[1]?.name && "/ " + productModes[1]?.name}
              </Typography>

              <Typography
                sx={{
                  mt: "0.2rem",
                  fontSize: theme.typography.subtitle1.xl,
                  color: theme.palette.common.black,
                  lineHeight: "22px",
                }}
              >
                {name}
              </Typography>
            </Box>
          </CardContent>

          <CardContent
            sx={{
              width: { xl: "100%" },
              height: "100%",
              p: "10px 0 !important",
              bgcolor: theme.palette.primary.light,
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box sx={{ ml: "1rem" }}>
              {stores[0]?.name == "Sponsored" ? (
                <></>
              ) : (
                <>
                  <Box
                    sx={{
                      height: "auto",
                      display: "flex",
                      alignItems: "center",
                      width: "90%",
                    }}
                  >
                    <StorefrontOutlinedIcon />
                    <Typography
                      sx={{
                        ml: "0.7rem",
                        fontSize: theme.typography.subtitle2.xl,
                      }}
                    >
                      {stores[0].name}
                    </Typography>
                  </Box>
                </>
              )}

              <Box
                sx={{
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  mt: "0.3rem",
                }}
              >
                <PlaceOutlinedIcon />{" "}
                <Typography
                  sx={{
                    ml: "0.7rem",
                    fontSize: theme.typography.subtitle2.xl,
                  }}
                >
                  {NZWide == true ? "NZWide" : <>{locations[0]?.location}</>}
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
                <DateRangeOutlinedIcon />
                <Typography
                  sx={{
                    ml: "0.7rem",
                    fontSize: theme.typography.subtitle2.xl,
                  }}
                >
                  Expires in 19 days
                </Typography>
              </Box>

              <Box sx={{ ml: "0.3rem" }}>
                <Common_card_button button_text="View Deal" slug={slug} width={width} />
              </Box>
            </Box>

            <Box
              sx={{
                height: "1rem",
                width: "1rem",
                bgcolor: "white",
                borderRadius: "50%",
                position: "absolute",
                top: -8,
                right: -8,
              }}
            ></Box>
            <Box
              sx={{
                height: "1rem",
                width: "1rem",
                bgcolor: "white",
                borderRadius: "50%",
                position: "absolute",
                top: -8,
                left: -8,
              }}
            ></Box>
          </CardContent>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CommonCoupon;
