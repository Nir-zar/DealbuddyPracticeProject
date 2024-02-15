import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from '@mui/material';



const LoadingScreen = () => {
  return (
    <Box
            sx={{
              mt: "10rem",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CircularProgress />
            <Typography sx={{ mt: "1rem" }}>Loading......</Typography>
          </Box>
  )
}

export default LoadingScreen
