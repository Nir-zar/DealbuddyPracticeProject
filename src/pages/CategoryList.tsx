import React, { useEffect, useState } from "react";
import Travel from "../components/categories/Travel";
import Broadband from "../components/categories/Broadband";
import { Box, Grid, Typography } from "@mui/material";
import { allCenter } from "../constant/commonStyle";
import theme from "../theme";
import { getCategoryList } from "../api/categoryApi";

interface CategoryList {
  imageUrl: string;
  name: string;
}

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);



  useEffect(() => {

    const params ={
      where : {
        status : 'active'
      },
    }

    getCategoryList(params).then((res) => {
      setCategoryList(res.data.items);
    });
  }, []);

  return (
    <Grid container sx={{ ...allCenter }}>
      <Box
        component={"div"}
        sx={{
          height: "auto",
          width: "1300px",
          p: "2rem 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.common.black,
            fontSize: theme.typography.h4.lg,
          }}
        >
          Categories
        </Typography>

        <Box
          component={"div"}
          sx={{
            height: "auto",
            width: "100%",
            mt: { xl: "3rem" },
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {categoryList.map(({ imageUrl, name }: CategoryList) => {
            return (
              <Grid xl={2} sx={{ ...allCenter, height: "200px" }}>
                <Box
                  sx={{
                    ...allCenter,
                    height: "auto",
                    width: "70%",
                    p: "20px",
                    borderRadius: "10px",
                    border: `1px solid ${theme.palette.grey[300]}`,
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      ...allCenter,
                      height: "60px",
                      width: "60px",
                      borderRadius: "10px",
                      m: "0 0 1rem",
                      bgcolor: theme.palette.primary.main,
                    }}
                  >
                    <Box
                      component={"img"}
                      src={imageUrl}
                      sx={{ height: "26px", width: "26px" }}
                    ></Box>
                  </Box>
                  <Typography
                    sx={{
                      ...allCenter,
                      textAlign: "center",
                      "&:hover": { color: theme.palette.primary.main },
                    }}
                  >
                    {name}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
};

export default CategoryList;
