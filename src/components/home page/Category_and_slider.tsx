import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { all_center } from "../../constant/commonStyle";
import ShortcutSharpIcon from "@mui/icons-material/ShortcutSharp";

import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

import Banner from "../common components/Banner";
import { getData } from "../../api/homeApi";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useNavigate } from "react-router-dom";

const Category_and_slider = () => {

  const [categoryList, setCategoryList] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);

  const url = "category?order%5BorderBy%5D=ASC&take=6";
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  const theme = useTheme();
  const navigate = useNavigate();

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  useEffect(() => {
    getData(url).then((res) => {
      console.log(res.data.items);
      setCategoryList(res.data.items);
      return;
    });
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          ...all_center,
          height: "1.5rem",
          bgcolor: theme.palette.common.white,
          mt: "1rem",
        }}
      >
        <Grid
          gap={2}
          item
          sx={{
            ...all_center,
            width: { xl: "1300px" },
            bgcolor: theme.palette.secondary.main,
            height: "100%",
            borderRadius: "0.5rem",
          }}
        >
          <Typography sx={{ fontSize: theme.typography.caption.xl }}>
            Checkout offers pulled by pur bots
          </Typography>
          <ShortcutSharpIcon />
        </Grid>
      </Grid>
      <Grid container sx={{ ...all_center, height: "auto" }}>
        <Box sx={{ width: { xl: "1300px" }, p: "40px 0px", height: "auto" }}>
          <Typography sx={{ fontSize: theme.typography.h4.lg }}>
            Find the best deal and coupons near you
          </Typography>
        </Box>

        <Box
          component={"div"}
          sx={{
            height: "auto",
            width: "1300px",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Box
            component={"div"}
            sx={{
              height: "auto",
              display: "flex",
              flexDirection: "column",
              width: "29%",
              //   bgcolor:"red",
              p: { xl: "15px 5px 20px 0px" },
              border: "1px solid #00000026",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: theme.typography.h6.xl,
                fontWeight: 700,
                ml: "1rem",
              }}
            >
              Top Categories
            </Typography>
            <Box
              sx={{
                height: "auto",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {categoryList.map((category, index) => {
                return (
                  <>
                    <Box
                      onClick={()=> navigate(`/categories/${category.slug}`)}
                      key={index}
                      sx={{
                        display: "flex",
                        height: "37px",
                        p: { xl: "15px 0px" },
                        width: { xl: "90%" },
                        borderBottom: `1px solid #00000026`,
                        m: { xl: "0rem 0 0 1rem" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor:"pointer"
                      }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          width: "80%",
                          display: "flex",
                          alignItems: "center",
                          // bgcolor:"green"
                        }}
                      >
                        <Box
                          sx={{
                            ...all_center,
                            height: "100%",
                            width: "36px",
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.common.white,
                            borderRadius: ".5rem",
                          }}
                        >
                          <Box
                            component={"img"}
                            src={`${category?.imageUrl}`}
                            sx={{ height: "60%", width: "60%" }}
                          ></Box>
                        </Box>
                        <Typography
                          sx={{
                            p: "0px 20px",
                            fontSize: theme.typography.subtitle1.xl,
                            color: theme.palette.common.black,
                            width: "auto",
                            // bgcolor:"red"
                          }}
                        >
                          {category.name}
                        </Typography>
                      </Box>

                      <ChevronRightSharpIcon
                        fontSize="large"
                        sx={{ fontWeight: 300, ml: "30px" }}
                      />
                    </Box>
                  </>
                );
              })}
            </Box>

            <Box
            onClick={() => navigate("categories")}
              sx={{
                ...all_center,
                width: "100%",
                height: "auto",
                p: "20px 0 0 0",
              }}
            >
              <Typography
                sx={{
                  cursor:"pointer",
                  fontSize: theme.typography.subtitle1.xl,
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                }}
              >
                View all Categories
              </Typography>
            </Box>
          </Box>

            <Box sx={{ height: "32rem", width: "69%" }}>
              <Box sx={{ width: "100%", height: "32rem" }}>
                <AutoPlaySwipeableViews
                  sx={{ height: "90%", width: "100%" }}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {images.map((step, index) => (
                    <div style={{ position: "relative" }} key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            height: "32rem",
                            display: "flex",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "10px",
                          }}
                          src={step.imgPath}
                          alt={step.label}
                        />
                      ) : null}
                      <MobileStepper
                        variant="dots"
                        sx={{
                          backgroundColor: "transparent",
                          position: "absolute",
                          height: "95%",
                          top: 0,
                          "& .MuiMobileStepper-dots": {
                            float: "end",
                            alignItems: "end",
                            height: "100%",
                          },
                        }}
                        steps={maxSteps}
                        activeStep={activeStep}
                        nextButton={
                          <Button
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                          >
                            {index == activeStep ? (
                              <KeyboardArrowRight
                              sx={{
                                p: "0.1rem",
                                borderRadius: "50%",
                                bgcolor: "#ffffff85",
                                color: theme.palette.common.white,
                              }}
                            />
                            ) : ( <KeyboardArrowRight
                              sx={{
                                p: "0.1rem",
                                borderRadius: "50%",
                                bgcolor: "#ffffff85",
                                color: "green",
                              }}
                            />)}
                            
                          </Button>
                        }
                        backButton={
                          <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                          >
                            <KeyboardArrowLeft
                              sx={{
                                p: "0.1rem",
                                borderRadius: "50%",
                                bgcolor: "#ffffff85",
                                color: theme.palette.common.white,
                              }}
                            />
                          </Button>
                        }
                      />
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
              </Box>
            </Box>
        </Box>

        <Box
          sx={{
            height: "auto",
            width: "1300px",
            mt: "2rem",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              ...all_center,
              height: "200px",
              position: "relative",
              width: "616px",
              borderRadius: "10px",

              backgroundImage:
                '  url("https://www.dealbuddy.co.nz/assets/img/home-deals.png")',
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
                ...all_center,
                color: theme.palette.common.white,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: theme.typography.h4.xl }}>
                Offers
              </Typography>

              <Typography sx={{ textAlign: "center" }}>
                Pulled by our
                <br />
                smart bots
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              ...all_center,
              height: "200px",
              position: "relative",
              width: "616px",
              borderRadius: "10px",

              backgroundImage:
                '  url("https://www.dealbuddy.co.nz/assets/img/home-coupons.png")',
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
                ...all_center,
                color: theme.palette.common.white,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: theme.typography.h4.xl }}>
                Deals
              </Typography>

              <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                Added by <br /> vendors and our team
              </Typography>
            </Box>
          </Box>
        </Box>

        <Banner />
      </Grid>
    </>
  );
};

export default Category_and_slider;
