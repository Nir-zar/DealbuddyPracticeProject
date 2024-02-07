import React, { useEffect, useState } from "react";
import { all_center } from "../../constant/commonStyle";
import { Box, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import { Height } from "@mui/icons-material";
import theme from "../../theme";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { getCategoryList } from "../../api/categoryApi";
import { Navigate, useNavigate, useParams } from "react-router-dom";


const prevNextButtonStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "10px",
  bgcolor: theme.palette.primary.light,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.primary.main,
};







const DealCategorySlider = () => {
  const [categoryList, setCategoryList] = useState();


  const {slug} = useParams();

  useEffect(() => {
    getCategoryList().then((res) => {
      setCategoryList(res.data.items);
      
    });
  },[]);



  
  const navigate = useNavigate();

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    nextArrow: (
      <Box>
        <Box className="next-slick-arrow" sx={{ ...prevNextButtonStyle }}>
          {" "}
          <KeyboardArrowRight />{" "}
        </Box>
      </Box>
    ),
    prevArrow: (
      <Box>
        <Box className="prev-slick-arrow" sx={{ ...prevNextButtonStyle }}>
          <KeyboardArrowLeft />{" "}
        </Box>
      </Box>
    ),
  };

  

  return (
    <Grid sx={{ ...all_center }}>
      <Box
        component={"div"}
        sx={{
          height: "auto",
          width: "1400px",
          display: "flex",
          alignItems: "ce",
        }}
      >
        {/*  */}

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >

          {categoryList && (<>
            <Slider
            style={{ width: "92%", display: "flex", alignItems: "center" }}
            {...settings}
          >
            {categoryList.map((data) => {

              // slug == data.slug && setCurrentBoxColor(theme.palette.primary.light)

              return (
                <Box
                onClick={()=> navigate(`/categories/${data.slug}`)}
                  sx={{
                    height: "200px",
                    display: "flex !important",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      ...all_center,
                      height: "auto",
                      width: "70%",
                      p: "20px",
                      borderRadius: "10px",
                      border: `1px solid ${theme.palette.grey[300]}`,
                      display: "flex",
                      flexDirection: "column",
                      cursor:"pointer",
                      bgcolor: slug == data.slug ? theme.palette.primary.light : theme.palette.common.white
                    }}
                  >
                    <Box
                      component={"div"}
                      sx={{
                        ...all_center,
                        height: "60px",
                        width: "60px",
                        borderRadius: "10px",
                        m:"0 0 1rem",
                        bgcolor:theme.palette.primary.main,
                      }}
                    >
                      <Box
                        component={"img"}
                        src={data?.imageUrl}
                        sx={{ height: "26px", width: "26px" }}
                      ></Box>
                    </Box>
                    <Typography sx={{...all_center, textAlign:"center","&:hover":{color:theme.palette.primary.main}}}>
                      {data?.name}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Slider>     
          </>)}

        </div>

        {/*  */}
      </Box>
    </Grid>
  );
};

export default DealCategorySlider;
