import React from "react";
import { all_center } from "../../constant/commonStyle";
import { Box, Grid } from "@mui/material";
import Slider from "react-slick";
import { Height } from "@mui/icons-material";

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
  afterChange: function (index: number) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
  nextArrow: (
    <div>
      <div
        className="next-slick-arrow">
        
        ⫸
      </div>
    </div>
  ),
  prevArrow: (
    <Box>
      <Box className="prev-slick-arrow" sx={{height:"50px", width:"50px", }}> ⫷ </Box>
    </Box>
  ),
};

const DealCategorySlider = () => {
  return (
    <Grid sx={{ ...all_center }}>
      <Box
        component={"div"}
        sx={{ height: "auto", width: "1350px", display: "flex" }}
      >
        {/*  */}

        <div
          style={{
            width: "100%",
            // backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Slider style={{ width: "80%" }} {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
          </Slider>
        </div>

        {/*  */}
      </Box>
    </Grid>
  );
};

export default DealCategorySlider;
