import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
  Popper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import theme from "../../theme";
import { allCenter } from "../../constant/commonStyle";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GridViewIcon from "@mui/icons-material/GridView";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Modal from "@mui/material/Modal";
import { ArrowDropDown, Height, Label } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { getData } from "../../api/homeApi";
import { Params, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storePageNumber } from "../../features/storeData";
import { dealsApiData } from "../../api/dealApi";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import { setCurrentCity } from "../../features/filterData";
import { getAllCityOption, getQuickOption } from "../../api/location_api";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "1rem",
  boxShadow: 24,
  p: { xl: "1rem 2rem" },
  height: "auto",
};

const category_style = {
  category_list_style: {
    height: "100%",
    width: "auto",
    //   bgcolor: "pink",
    // ml:"10px"
  },

  category_font_style: {
    fontSize: theme.typography.subtitle2.xl,
    fontWeight: 300,
  },
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = useState([]);
  const [searchCityData, setSearchCityData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResultData, setSearchResultData] = useState([]);
  const [openListBox, setOpenLIstBox] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const [currentLength, setCurrentLength] = useState(0);

  const navigae = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const pageNumber = useSelector((store) => store.storeData.pageNumber);
  const currentCityName = useSelector((store) => store.filterData.currentCity);

  const openMenu = menuAnchorEl;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setMenuAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = useCallback(() => {
    setMenuAnchorEl(null);
    setSearchCityData([]);
    setOpen(false);
  }, []);

  const gotoHomePage = useCallback(() => {
    navigae("/");
  }, []);

  const quickOption = useCallback(() => {
    setOpen(true);
    const params = {
      where: { quickOption: true },
    };
    getQuickOption(params).then((res) => {
      setModalData(res.data.items);
    });
  }, []);

  const handleSearchKeyword = (citysearchValue: string) => {
    const searchKeyword = {
      searchKeyword: citysearchValue,
      take: 30,
    };
    setOpen(true);

    if (citysearchValue.length > 0) {
      getAllCityOption(searchKeyword).then((res) => {
        setSearchCityData(res.data.items);
      });
      setCurrentLength(citysearchValue.length);
    } else {
      setSearchCityData([]);
    }
  };

  let cancelTokenSource = axios.CancelToken.source();

  useEffect(() => {
    const params = {
      searchKeyword: searchValue,
    };
    cancelTokenSource = axios.CancelToken.source();

    if (searchValue.length > 0) {
      dealsApiData(cancelTokenSource, params).then((res) => {
        setSearchResultData(res.data.items);
      });
    } else {
      setSearchResultData([]);
    }

    if (searchValue) {
      setOpenLIstBox(true);
    }

    return () => {
      if (cancelTokenSource) {
        cancelTokenSource.cancel("Component unmounted");
      }
    };
  }, [searchValue]);

  const setCityName = (cityName: string) => {
    sessionStorage.setItem("City", cityName);
  };

  return (
    <>
      <Grid
        container
        sx={{
          ...allCenter,
          bgcolor: theme.palette.primary.main,
          height: "72px",
          py: "10px",
        }}
      >
        <Grid
          item
          sx={{
            height: { xl: "100%" },
            width: { xl: "1300px" },
            //   bgcolor: "red",
            display: "flex",
            justifyContent: { xl: "space-between" },
            alignItems: "center",
          }}
        >
          <Box
            component={"div"}
            sx={{
              height: "100%",
              width: "auto",
              // bgcolor: "purple",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: { xl: "12rem" },
                height: "100%",
                bgcolor: "transparent",
              }}
            >
              <Box
                onClick={gotoHomePage}
                component={"img"}
                alt="Logo image"
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                src={`https://www.dealbuddy.co.nz/assets/img/logo.png?v=1`}
              ></Box>
            </Box>

            <Box
              component={"div"}
              sx={{
                height: "80%",
                ml: { xl: "3.9rem" },
                width: { xl: "auto" },
              }}
            >
              <Button
                onClick={quickOption}
                startIcon={
                  <PlaceOutlinedIcon sx={{ ml: "0.5rem" }} fontSize="large" />
                }
                endIcon={
                  open ? (
                    <KeyboardArrowUpIcon
                      sx={{
                        ml: "0.5rem",
                        mr: "0.5rem",
                        color: theme.palette.common.black,
                      }}
                    />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon
                      sx={{
                        ml: "0.5rem",
                        mr: "0.5rem",
                        color: theme.palette.common.black,
                      }}
                    />
                  )
                }
                sx={{
                  height: "100%",
                  width: "auto",
                  minWidth: "10rem",
                  bgcolor: "white",
                  display: "flex",
                  justifyContent: "space-around",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: theme.palette.common.white,
                  },
                }}
              >
                <Typography
                  sx={{ color: theme.palette.common.black, minWidth: "4rem" }}
                >
                  {currentCityName ? currentCityName : "NZ Wide"}
                </Typography>
              </Button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box
                    sx={{
                      height: "auto",
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{ fontSize: theme.typography.h5.lg, fontWeight: 700 }}
                    >
                      Select City / Town
                    </Typography>
                    <CloseIcon
                      onClick={handleClose}
                      sx={{
                        fontSize: theme.typography.h5.lg,
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    />
                  </Box>

                  <FormControl sx={{ height: "auto", width: "100%" }}>
                    <Input
                      onChange={(e) => handleSearchKeyword(e.target.value)}
                      placeholder="Enter city /town"
                      endAdornment={
                        <InputAdornment position="end">
                          <SearchIcon
                            sx={{ color: theme.palette.common.black }}
                          />
                        </InputAdornment>
                      }
                      disableUnderline={true}
                      sx={{
                        height: "3rem",
                        width: "100%",
                        m: "1rem 0rem",
                        border: `1px solid ${theme.palette.grey[400]}`,
                        borderRadius: "10px",
                        p: "0 1rem",
                        textAlign: "center",
                        fontSize: theme.typography.subtitle1.xl,
                        display: "flex",
                        alignItems: "center",
                      }}
                    ></Input>
                  </FormControl>

                  <Box
                    sx={{
                      height: "auto",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        height: "auto",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <SendIcon
                        sx={{
                          color: theme.palette.grey[500],
                          "&:hover": { color: theme.palette.primary.main },
                        }}
                      />
                      <Typography
                        sx={{
                          ml: "1rem",
                          "&:hover": { color: theme.palette.primary.main },
                        }}
                      >
                        Current Location
                      </Typography>
                    </Box>

                    <List
                      disablePadding
                      sx={{
                        maxHeight: "400px",
                        width: "100%",
                        overflowY: "scroll",
                        "::-webkit-scrollbar ": { display: "none" },
                      }}
                    >
                      {searchCityData.map((data) => {
                        return (
                          <ListItem
                            sx={{
                              "&:hover": { color: theme.palette.primary.main },
                            }}
                            onClick={() => {
                              setOpen(false);
                              setCityName(data.location);
                              dispatch(setCurrentCity(data.location));
                              handleClose;
                            }}
                            disablePadding
                          >
                            <ListItemButton sx={{ color: "inherit" }}>
                              <ListItemIcon sx={{ color: "inherit" }}>
                                <PlaceOutlinedIcon sx={{ color: "inherit" }} />
                              </ListItemIcon>
                              <ListItemText primary={data.location} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>

                  <Grid container sx={{ height: "auto", m: "2rem 0" }}>
                    <Typography
                      sx={{ fontSize: theme.typography.subtitle1.xl }}
                    >
                      Quick Options
                    </Typography>

                    <Box
                      sx={{
                        height: "auto",
                        width: "100%",
                        display: "flex",
                        mt: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <Grid
                        item
                        xl={6}
                        sx={{
                          ...allCenter,
                          height: "3.5rem",
                          mt: "0.5rem",
                          cursor: "pointer",
                        }}
                      >
                        <Box
                          onClick={() => {
                            setOpen(false);
                            setCityName("");
                            dispatch(setCurrentCity(""));
                            handleClose;
                          }}
                          sx={{
                            ...allCenter,
                            height: "90%",
                            width: "90%",
                            border: `1px solid ${theme.palette.grey[400]}`,
                            borderRadius: "10px",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: theme.typography.subtitle1.xl }}
                          >
                            NZWide
                          </Typography>
                        </Box>
                      </Grid>
                      {modalData.map(({ location }) => {
                        return (
                          <Grid
                            item
                            xl={6}
                            sx={{
                              ...allCenter,
                              height: "3.5rem",
                              mt: "0.5rem",
                              cursor: "pointer",
                            }}
                          >
                            <Box
                              onClick={() => {
                                setOpen(false);
                                setCityName(location);
                                dispatch(setCurrentCity(location));
                                handleClose;
                              }}
                              sx={{
                                ...allCenter,
                                height: "90%",
                                width: "90%",
                                border: `1px solid ${theme.palette.grey[400]}`,
                                borderRadius: "10px",
                              }}
                            >
                              <Typography
                                sx={{ fontSize: theme.typography.subtitle1.xl }}
                              >
                                {location}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Box>
                  </Grid>
                </Box>
              </Modal>
            </Box>

            <Box
              component={"div"}
              sx={{
                height: "80%",
                bgcolor: "white",
                ml: { xl: "2rem" },
                width: { xl: "auto" },
                alignItems: "center",
                display: "flex",
                borderRadius: "10px",
                outline: "none",
                fieldset: { border: "none", outline: "none" },
              }}
            >
              <SearchIcon sx={{ ml: { xl: "10px" } }} />

              <Autocomplete
                value={searchValue}
                open={openListBox}
                disableClearable
                onFocus={() => {
                  if (searchValue) {
                    setOpenLIstBox(true);
                  }
                }}
                PopperComponent={(props) =>
                  searchValue && (
                    <Popper {...props} style={{ width: "24%" }}>
                      {props.children}
                    </Popper>
                  )
                }
                onClose={() => setOpenLIstBox(false)}
                freeSolo
                id="country-select-demo"
                sx={{
                  width: "395px",
                }}
                filterOptions={(options) => options}
                options={searchResultData.length > 0 ? searchResultData : []}
                renderOption={(props, searchResultData) =>
                  searchValue && (
                    <Box
                      component="li"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        margin: "0px",
                        padding: "0px",
                        justifyContent: "space-between !important",
                      }}
                      {...props}
                    >
                      <Box
                        component={"div"}
                        sx={{ height: "3rem", width: "15%" }}
                      >
                        <Box
                          component={"img"}
                          src={searchResultData?.productImages?.[0]?.imageUrl}
                          sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box
                        component={"div"}
                        sx={{
                          height: "3rem",
                          width: "80%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          component={"div"}
                          sx={{
                            height: "50%",
                            width: "100%",
                            display: "flex",
                            alignItems: "end",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {searchResultData?.name}
                        </Box>
                        <Box
                          component={"div"}
                          sx={{
                            height: "50%",
                            width: "100%",
                            display: "flex",
                            alignItems: "start",
                          }}
                        >
                          <Typography
                            sx={{ color: theme.palette.primary.main }}
                          >
                            {searchResultData.stores &&
                              searchResultData?.stores[0]?.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                }
                renderInput={(params) => (
                  <TextField
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                    {...params}
                    placeholder="Find your perfect deal."
                    inputProps={{
                      ...params.inputProps,
                      endAdornment: null,
                    }}
                  />
                )}
              />
              {searchValue && (
                <CloseIcon
                  onClick={() => setSearchValue("")}
                  sx={{ mr: { xl: "0.5rem" }, cursor: "pointer" }}
                />
              )}
            </Box>
          </Box>

          <Box
            sx={{
              ...allCenter,
              height: { xl: "80%" },
              bgcolor: "transparent",
              border: `1px solid ${theme.palette.common.white}`,
              width: { xl: "8rem" },
              borderRadius: "0.5rem",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              component={"img"}
              alt="User Image"
              src={`	https://www.dealbuddy.co.nz/assets/img/user.png`}
              sx={{ height: "80%", objectFit: "contain" }}
            ></Box>

            <Typography sx={{ color: theme.palette.common.white }}>
              Login
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ ...allCenter, height: { xl: "3.25rem" } }}>
        <Grid
          item
          sx={{
            height: { xl: "100%" },
            width: { xl: "1300px" },
            bgcolor: "white",
            display: "flex",
            justifyContent: { xl: "space-between" },
            alignItems: "center",
          }}
        >
          <Box
            component={"div"}
            gap={2}
            sx={{
              height: "80%",
              width: "auto",
              px: "2px",
              //   bgcolor: "blue",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              component={"div"}
              onClick={() => navigae("categories")}
              sx={{
                ...allCenter,
                ...category_style.category_list_style,
                cursor: "pointer",
              }}
            >
              <GridViewIcon />
              <Typography
                sx={{ ...category_style.category_font_style, ml: "10px" }}
              >
                Categories
              </Typography>
            </Box>

            <Box
              component={"div"}
              // onClick={()=>navigae("stores")}
              sx={{
                ...allCenter,
                ...category_style.category_list_style,
                cursor: "pointer",
              }}
            >
              <StorefrontOutlinedIcon />

              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  color: theme.palette.common.black,
                  fontSize: theme.typography.subtitle1.xl,
                  "&:hover": { bgcolor: "transparent" },
                }}
              >
                <Typography
                  sx={{
                    ...category_style.category_font_style,
                    ml: "10px",
                    "&:hover": { fontWeight: 800 },
                  }}
                >
                  Store
                </Typography>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={menuAnchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigae("stores");
                    dispatch(storePageNumber({ pageNumber: 1 }));
                  }}
                  sx={{ fontSize: theme.typography.subtitle2.xl }}
                >
                  {" "}
                  All Store
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigae("online-stores");
                    dispatch(storePageNumber({ pageNumber: 1 }));
                  }}
                  sx={{ fontSize: theme.typography.subtitle2.xl }}
                >
                  Online Store
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigae("physical-stores");
                    dispatch(storePageNumber({ pageNumber: 1 }));
                  }}
                  sx={{ fontSize: theme.typography.subtitle2.xl }}
                >
                  Physical Store
                </MenuItem>
              </Menu>
            </Box>

            <Box
              onClick={() => navigae("deals")}
              component={"div"}
              sx={{
                ...allCenter,
                ...category_style.category_list_style,
                cursor: "pointer",
              }}
            >
              <LocalOfferOutlinedIcon />
              <Typography
                sx={{ ...category_style.category_font_style, ml: "10px" }}
              >
                Deals
              </Typography>
            </Box>

            <Box
              component={"div"}
              sx={{
                ...allCenter,
                ...category_style.category_list_style,
                cursor: "pointer",
              }}
            >
              <PlaceOutlinedIcon />
              <Typography
                sx={{ ...category_style.category_font_style, ml: "10px" }}
              >
                Map
              </Typography>
            </Box>
          </Box>

          <Box
            component={"div"}
            sx={{ height: "80%", width: "auto", cursor: "pointer" }}
          >
            <Button
              onClick={() => navigae("how-it-works")}
              startIcon={<HelpOutlineOutlinedIcon />}
              sx={{
                width: "auto",
                p: "10px 24px",
                background: theme.gradient_color.button_color,
                color: theme.palette.common.white,
                mr: "14px",
                "&:hover": {
                  background: theme.gradient_color.button_hover_color,
                  color: theme.palette.common.black,
                },
              }}
            >
              How it works
            </Button>

            <Button
              startIcon={<HelpOutlineOutlinedIcon />}
              sx={{
                width: "auto",
                p: "10px 24px",
                background: theme.gradient_color.button_color,
                color: theme.palette.common.white,
                "&:hover": {
                  background: theme.gradient_color.button_hover_color,
                  color: theme.palette.common.black,
                },
              }}
            >
              Listyour business
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
