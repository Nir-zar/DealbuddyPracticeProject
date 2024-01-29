import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    gradient_color: {
      button_color: string;
      button_hover_color: string;
    };
  }

  interface ThemeOptions {
    gradient_color?: {
      button_color?: string;
      button_hover_color?: string;
    };
  }
}

const theme = createTheme({
  components: {
    // Name of the component
    MuiCardContent: {
      styleOverrides: {
        // Name of the slot
        root: {
          padding: "0px !important",
          margin: "0px",
         
        },
      },
    },

    MuiMobileStepper: {
      styleOverrides: {
        root: {
         
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
         fontSize:"12px"
        },
      },
    },


    MuiCard: {
      styleOverrides: {
        root: {
          padding: "0px",
          margin: "0px",
          boxShadow: "none",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0px",
          margin: "0px",
          boxShadow: "none",
          backgroundColor: "none",
          textTransform: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          padding: "0px",
          margin: "0px",
          boxShadow: "none",
          backgroundColor: "none",
          textTransform: "none",
          fontFamily: "Open Sans",
                },
      },
    },
  },

  gradient_color: {
    button_color: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%) ",
    button_hover_color:
      "linear-gradient(109.06deg,#faf57e 12.84%,#fef400 87.16%)!important",
  },

  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },

    primary: {
      main: "#27C86D",
      light: "#E3FAED",
    },

    secondary: {
      main: "#FFF001",
    },

    success: {
      main: "#F6FDFA",
    },
  },

  typography: {
    h4: {
      xl: {
        "@media (min-width:992px)": {
          fontSize: "36px",
        },
      },
      lg: {
        "@media (min-width:992px)": {
          fontSize: "30px",
          fontWeight:700
        },
      },
    },
    h5: {
      xl: {
        "@media (min-width:992px)": {
          fontSize: "26px",
        },
      },
      lg: {
        "@media (min-width:992px)": {
          fontSize: "24px",
        },
      },
      md: {
        "@media (min-width:992px)": {
          fontSize: "20px",
        },
      },
    },

    h6: {
      xl: {
        "@media (min-width:992px)": {
          fontSize: "18px",
        },
      },
    },

    subtitle1: {
      xl: {
        "@media (min-width:992px)": {
          fontSize: "16px",
        },
      },
    },

    subtitle2: {
      xl: {
        "@media (min-width:992px)": {
          fontSize: "14px",
        },
      },
    },

    caption: {
      xl: {
        "@media (min-width:992px)": {
          fontSize: "12px",
        },
      },
    },
  },
});

export default theme;
