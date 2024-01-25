import { Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import theme from '../../theme'
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";


const Banner = () => {
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
      justifyContent: "space-around",
    }}
  >
    <Typography sx={{ fontSize: theme.typography.h5.lg, fontWeight:600 }}>
      Joins the deals wagon and start saving..
    </Typography>
    <Box
      component={"div"}
      sx={{
        height: "60%",
        bgcolor: "white",
        ml: { xl: "2rem" },
        width: { xl: "auto" },
        alignItems: "center",
        display: "flex",
        borderRadius: "10px",
      }}
    >
      <EmailOutlinedIcon sx={{ ml: { xl: "10px", color:"#A8A8A8" } }} />
      <TextField
        placeholder="Find your perfect deal"
        sx={{
          height: "100%",
          width: "25.4rem",
          border: "none",
          // bgcolor:"blue",
          justifyContent: "center",
          fieldset: { border: "none", outline: "none" },
        }}
      ></TextField>
      <Button
        sx={{
          width:{xl:"113px"}, height:{xl:"40px"},
          background: theme.gradient_color.button_color,
          color: theme.palette.common.white,
          fontSize:theme.typography.subtitle2.xl,
          mr:{xl:"1rem"},
          fontWeight:500,
          "&:hover" : {
            background: theme.gradient_color.button_hover_color,
            color:theme.palette.common.black
          }
        }}
      >
        <Typography>
          Subscribe
        </Typography>
      </Button>
    </Box>
  </Box>
  )
}

export default Banner
