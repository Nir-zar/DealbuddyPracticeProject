import { Button } from '@mui/material'
import React from 'react'
import theme from '../../theme'

interface Button_title {
    button_text : string;
}


const Common_card_button = ({button_text}:Button_title) => {
  return (
    <Button
    sx={{
      height: { xl: "40px" },
      width: { xl: "262px" },
      bgcolor: theme.palette.primary.main,
      mt: "1.25rem",
      color:theme.palette.common.white,
      fontSize:theme.typography.subtitle2.xl,
      "&:hover" : {
        background: theme.gradient_color.button_hover_color,
        color:theme.palette.common.black
      }
    }}
  >
   {button_text}
  </Button>
  )
}

export default Common_card_button
