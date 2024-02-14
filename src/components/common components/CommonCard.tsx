import {
  Grid,
  Card,
  Box,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import React from "react";
import { allCenter } from "../../constant/commonStyle";
import theme from "../../theme";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import CommonCardButton from "./CommonCardButton";

interface CommonCard {
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

const CommonCard = ({
  category,
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
}: CommonCard) => {

const navigate = useNavigate();


  return (
    <Grid item xl={width} sx={{ ...allCenter, height: "494px" }}>
      <Card
        sx={{
          alignItems: "center",
          height: "94%",
          width: { xl: "94%" },
          //   bgcolor: "red",
          border: "1px solid #DEDEDE",
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
            ...allCenter,
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
            ...allCenter,
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
          src={`${productImages[0]?.imageUrl}`}
          sx={{
            height: { xl: "200px" },
            width: { xl: "100%" },
          }}
        ></CardMedia>

        <CardContent
          sx={{
            width: { xl: "252px" },
            height: "163px",
            mt: "1rem",
            // bgcolor: "pink",
            padding: "0px",
          }}
        >
          <Typography
            sx={{
              fontSize: theme.typography.caption.xl,
              color: "rgba(0, 0, 0, 0.5)",
              textTransform: "uppercase !important",
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

          {stores[0]?.name == "Sponsored" ? (
            <></>
          ) : (
            <>
              <Box
                sx={{
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  mt: "0.6rem",
                }}
              >
                <StorefrontOutlinedIcon />{" "}
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
            <DateRangeOutlinedIcon />{" "}
            <Typography
              sx={{
                ml: "0.7rem",
                fontSize: theme.typography.subtitle2.xl,
              }}
            >
              Expires in 19 days
            </Typography>
          </Box>
        </CardContent>

        <CommonCardButton slug={slug} button_text="View Deal" />
      </Card>
    </Grid>
  );
};

export default CommonCard;
