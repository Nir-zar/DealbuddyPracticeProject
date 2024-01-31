import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material'
import { Box, MobileStepper, Button } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const DealSlider = () => {

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
      const [activeStep, setActiveStep] = React.useState(0);
      const maxSteps = images.length;
    

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
    <Box sx={{ height: "32rem", width: "98%" }}>
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
  )
}

export default DealSlider
