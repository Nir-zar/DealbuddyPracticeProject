import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material'
import { Box, MobileStepper, Button } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useSelector } from 'react-redux';

const DealSlider = () => {

   

      const sliderImages = useSelector((store)=> store.dealData.sliderImagePaths)

      const theme = useTheme();
      const [activeStep, setActiveStep] = React.useState(0);
      const maxSteps = sliderImages.length;
    

      const url = "category?order%5BorderBy%5D=ASC&take=6";
      const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleStepChange = (step: number) => {
        setActiveStep(step);
      };


  return (
    <Box sx={{ height: "28rem", width: "98%" }}>
    <Box sx={{ width: "100%", height: "28rem" }}>
      <AutoPlaySwipeableViews
        sx={{ height: "90%", width: "100%" }}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {sliderImages.map((data, index) => (
          <div style={{ position: "relative" }} key={data.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "28.75rem",
                  display: "flex",
                  overflow: "hidden",
                  width: "100%",
                  borderRadius: "10px",
                }}
                src={data.imageUrl}
                alt={"images"}
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
  )
}

export default DealSlider
