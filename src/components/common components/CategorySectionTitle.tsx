import { Box, Typography, Button } from "@mui/material";
import React from "react";
import theme from "../../theme";

interface Title {
  title: string;
}

const CategorySectionTitle = ({ title }: Title) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        height: "98px",
        width: "1300px",
        bgcolor: theme.palette.primary.light,
        borderRadius: "10px",
        mt: "5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: theme.typography.h5.xl,
          ml: { xl: "2rem" },
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
      <Box
        component={"div"}
        sx={{
          height: "60%",
          //   bgcolor: "white",
          ml: { xl: "2rem" },
          width: { xl: "auto" },
          alignItems: "center",
          display: "flex",
          borderRadius: "10px",
        }}
      >
        <Button
          sx={{
            width: { xl: "6rem" },
            height: { xl: "40px" },
            background: theme.gradient_color.button_color,
            color: theme.palette.common.white,
            mr: { xl: "1.5rem" },
            fontWeight: 500,
            "&:hover": {
              background: theme.gradient_color.button_hover_color,
              color: theme.palette.common.black,
            },
          }}
        >
          <Typography sx={{ fontSize: theme.typography.subtitle2.xl }}>
            View All
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CategorySectionTitle;
