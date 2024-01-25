import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { all_center } from "../../constant/commonStyle";
import theme from "../../theme";
import Banner from "../common components/Banner";
import Category_section_title from "../common components/CategorySection_title";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Common_card_button from "../common components/CommonCardButton";
import { getData } from "../../api/homeApi";

const Blog_section = () => {
  const [blogData, setBlogData] = useState([]);
  const url =
    "blog?v=1705410150066&where%5Bstatus%5D=active&where%5BisShowOnHome%5D=true&take=999";
  useEffect(() => {
    getData(url).then((res) => {
      setBlogData(res.data.items);
    });
  }, []);

  return (
    <>
      <Grid container sx={{ ...all_center, height: "auto" }}>
        <Category_section_title title="Blogs" />

        <Box
          sx={{
            alignItems: "center",
            height: "auto",
            width: "1300px",
            borderRadius: "10px",
            mt: "2rem",
            display: "flex",
            justifyContent: "start",
            flexWrap: "wrap",
            
          }}
        >
          {blogData.map(({ imageUrl, title, sortDescription }) => {
            return (
              <Grid item xl={3} sx={{ display:"flex",alignItems:"center", justifyContent:"center", height: "494px", }}>
                <Card
                  sx={{
                    alignItems: "center",
                    height: "92%",
                    width: { xl: "94%" },
                    //   bgcolor: "red",
                    border: "1px solid #DEDEDE",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    
                  }}
                >
                  <CardMedia
                    component={"img"}
                    alt="Card Image"
                    src={imageUrl}
                    sx={{
                      height: { xl: "200px" },
                      width: { xl: "100%" },
                      bgcolor: "blue",
                    }}
                  ></CardMedia>

                  <CardContent
                    sx={{
                      width: { xl: "252px" },
                      height: "154px",
                      mt: "1rem",
                      // bgcolor: "pink",
                      padding: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        mt: "0.2rem",
                        fontSize: theme.typography.h6.xl,
                        color: theme.palette.common.black,
                        lineHeight: "28px",
                      }}
                    >
                      {title}
                    </Typography>

                    <Box
                      sx={{
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        mt: "0.7rem",
                      }}
                    >
                      <Typography
                        sx={{
                          // ml: "0.7rem",
                          fontSize: theme.typography.subtitle2.xl,
                          color: theme.palette.grey[500],
                          WebkitLineClamp: 3,
                          textOverflow: "ellipsis",
                         
                          overflow: "hidden",
                          height: "auto",
                         
                          display:"-webkit-box",
                          WebkitBoxOrient:"vertical"
                        }}
                      >
                        {sortDescription}
                      </Typography>
                    </Box>
                  </CardContent>

                  <Common_card_button button_text="Read More" />
                </Card>
              </Grid>
            );
          })}
        </Box>
      </Grid>

      <Grid
        container
        sx={{
          ...all_center,
          height: "1.5rem",
          bgcolor: theme.palette.common.white,
          mt: "1rem",
          mb: "100px",
        }}
      >
        <Grid
          gap={2}
          item
          sx={{
            ...all_center,
            width: { xl: "1300px" },
            // bgcolor: theme.palette.secondary.main,
            height: "3rem",
            borderRadius: "0.5rem",
            border: `1px dashed ${theme.palette.grey[300]}`,
          }}
        >
          <Typography
            sx={{
              fontSize: theme.typography.subtitle2.xl,
              color: theme.palette.grey[500],
            }}
          >
            When you buy through links on dealbuddy, we may earn a commission.
          </Typography>
          <Typography
            component={"span"}
            sx={{ color: theme.palette.primary.main }}
          >
            {" "}
            Learn More
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Blog_section;
