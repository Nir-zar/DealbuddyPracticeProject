import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";
import { allCenter } from "../../constant/commonStyle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        ...allCenter,
        p: "3rem 0 2rem 0",
        height: "auto",
        bgcolor: theme.palette.success.main,
      }}
    >
      <Box
        sx={{
          alignItems: "start",
          height: "auto",
          width: "1300px",
          display: "flex",
          justifyContent: "start",

          flexWrap: "wrap",
        }}
      >
        <Box
          component={"div"}
          sx={{
            height: "323px",
            width: "29%",
            display: "flex",
            flexDirection: "column",
            p: { xl: "0 12px 0 0" },
          }}
        >
          <Box
            component={"img"}
            sx={{ height: { xl: "66px" }, width: "266px" }}
            src={`https://www.dealbuddy.co.nz/assets/img/logo-main-footer.png?v=1`}
          ></Box>
          <Typography
            sx={{
              fontSize: theme.typography.subtitle2.xl,
              fontWeight: 400,
              mt: "1rem",
            }}
          >
            Dealbuddy aims to help customers discover new experiences and
            products at the lowest possible prices – supporting local businesses
            to thrive.
          </Typography>

          <Typography
            sx={{
              fontSize: theme.typography.subtitle2.xl,
              fontWeight: 400,
              mt: "2rem",
            }}
          >
            Lets's find your perfect deal !!
          </Typography>

          <Box
            component={"div"}
            sx={{ height: "auto", width: "auto", mt: { xl: "1rem" } }}
          >
            <Box
              component={"img"}
              sx={{ height: { xl: "36px" }, width: { xl: "120px" } }}
              src={`	https://www.dealbuddy.co.nz/assets/img/app-store.svg?v=1`}
            ></Box>

            <Box
              component={"img"}
              sx={{
                height: { xl: "36px" },
                width: { xl: "120px" },
                ml: { xl: "0.5rem" },
              }}
              src={`https://www.dealbuddy.co.nz/assets/img/google-play-store.svg?v=1`}
            ></Box>
          </Box>
        </Box>

        <Box
          component={"div"}
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            width: "24%",
            ml: "4rem",
          }}
        >
          <Typography
            sx={{
              fontSize: theme.typography.h6.xl,
              fontWeight: 900,
            }}
          >
            Top Categories
          </Typography>
          <Box
            sx={{
              height: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {[0, 1, 2, 3, 4].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      height: "49px",
                      width: { xl: "90%" },
                      borderBottom: `1px dashed ${theme.palette.grey[300]}`,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <KeyboardArrowRightIcon
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: "20px",
                          fontWeight: 400,
                        }}
                      />
                      <Typography
                        sx={{
                          p: "0px 0px 0 6px",
                          fontSize: theme.typography.subtitle2.xl,
                          fontWeight: 400,
                          color: theme.palette.common.black,
                        }}
                      >
                        Travel
                      </Typography>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>

        <Box
          component={"div"}
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            width: "24%",
            ml: "2rem",
            // bgcolor:"red",
          }}
        >
          <Typography
            sx={{
              fontSize: theme.typography.h6.xl,
              fontWeight: 900,
            }}
          >
            Top Categories
          </Typography>
          <Box
            sx={{
              height: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {[0, 1, 2, 3, 4].map(() => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      height: "49px",
                      width: { xl: "90%" },
                      borderBottom: `1px dashed ${theme.palette.grey[300]}`,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <KeyboardArrowRightIcon
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: "20px",
                          fontWeight: 400,
                        }}
                      />
                      <Typography
                        sx={{
                          p: "0px 0px 0 6px",
                          fontSize: theme.typography.subtitle2.xl,
                          fontWeight: 400,
                          color: theme.palette.common.black,
                        }}
                      >
                        Travel
                      </Typography>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>

        <Box
          component={"img"}
          sx={{
            height: { xl: "110px" },
            width: { xl: "110px" },
            ml: { xl: "5rem" },
          }}
          src={`https://www.dealbuddy.co.nz/assets/img/logo-footer.png?v=1`}
        ></Box>
      </Box>

      <Box
        component={"div"}
        sx={{
          ...allCenter,
          height: "50px",
          width: "100%",
          borderTop: `1px solid ${theme.palette.grey[300]}`,
          p: { xl: "2rem 0 2rem 0" },
          // bgcolor:"red"
        }}
      >
        <Box
          sx={{
            alignItems: "start",
            height: "auto",
            width: "1300px",
            display: "flex",
            // bgcolor: "blue",
            flexWrap: "wrap",
            flexDirection: "column",
            mt: "2rem",
          }}
        >
          <Typography sx={{ fontSize: theme.typography.subtitle2.xl }}>
            Third-party trademarks are the property of their respective
            third-party owners. Presence of a third-party trademark does not
            mean that dealbuddy has any relationship with that third-party or
            that the third-party endorses dealbuddy or its services.
          </Typography>

          <Box
            component={"div"}
            sx={{
              height: "auto",
              width: "100%",
              mt: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: theme.typography.subtitle2.xl,
                color: theme.palette.grey[500],
              }}
            >
              2024 Deal Buddy Limited, All rights reserved.
            </Typography>

            <Box sx={{ height: "auto", width: "auto", display: "flex" }}>
              <Box
                sx={{
                  height: "auto",
                  width: { xl: "267px" },
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography sx={{ fontSize: theme.typography.subtitle2.xl, "&:hover":{color:theme.palette.primary.main, transition:'smooth', transitionDelay:5} }}>
                  Terms of use
                </Typography>
                <Typography sx={{ fontSize: theme.typography.subtitle2.xl }}>
                  |
                </Typography>
                <Typography sx={{ fontSize: theme.typography.subtitle2.xl, "&:hover":{color:theme.palette.primary.main, transition:'smooth', transitionDelay:5} }}>
                  Privacy Policy
                </Typography>
              </Box>

              <Box
                component={"div"}
                sx={{ height: "auto", width: { xl: "auto" } }}
              >
                <Box
                  component={"img"}
                  sx={{
                    height: { xl: "32px" },
                    width: { xl: "32px" },
                    p: { xl: "0 10px" },
                  }}
                  src={`https://www.dealbuddy.co.nz/assets/img/facebook-logo.png?v=1`}
                ></Box>

                <Box
                  component={"img"}
                  sx={{
                    height: { xl: "32px" },
                    width: { xl: "32px" },
                    p: { xl: "0 10px" },
                  }}
                  src={`	https://www.dealbuddy.co.nz/assets/img/instagram-logo.png?v=1`}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;
