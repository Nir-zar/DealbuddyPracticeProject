import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  ListItem,
  Menu,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { all_center } from "../../constant/commonStyle";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Modal from "@mui/material/Modal";
import { ArrowDropDown, Height } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { getData } from "../../api/homeApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storePageNumber } from "../../features/storeData";
import { dealsApiData } from "../../api/dealApi";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
  const [searchValue, setSearchValue] = useState("");
  const [searchResultData, setSearchResultData] = useState()

  const navigae = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const pageNumber = useSelector((store) => store.storeData.pageNumber);

  const gotoHomePage = () => {
    navigae("/");
  };

  const handleOpen = () => {
    setOpen(true);
    const url =
      "location?v=1705562814548&where%5BquickOption%5D=true&order%5Blocation%5D=ASC&take=8";

    getData(url).then((res) => {
      setModalData(res.data.items);
      console.log(res.data.items);
      console.log(modalData);
    });
  };
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );



  const openMenu = menuAnchorEl;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };



  const handleClose = () => {
    setMenuAnchorEl(null);
  };


  useEffect(() => {
    const params = {
      searchKeyword: searchValue,
      limit: 30,
    };

    dealsApiData(params).then((res) => {
      setSearchResultData(res.data);
    });
  }, [searchValue]);

  const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
  ];
  return (
    <>
      <Grid
        container
        sx={{
          ...all_center,
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
                onClick={handleOpen}
                startIcon={
                  <PlaceOutlinedIcon sx={{ ml: "0.5rem" }} fontSize="large" />
                }
                endIcon={
                  <KeyboardArrowDownOutlinedIcon
                    sx={{ ml: "1.8rem", color: theme.palette.common.black }}
                  />
                }
                sx={{
                  height: "100%",
                  width: "10rem",
                  bgcolor: "white",
                  display: "flex",
                  justifyContent: "start",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    bgcolor: theme.palette.common.white,
                  },
                }}
              >
                <Typography sx={{ color: theme.palette.common.black }}>
                  NZ Wide
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
                      "&:hover": { color: theme.palette.primary.main },
                    }}
                  >
                    <SendIcon
                      sx={{
                        color: theme.palette.grey[500],
                        "&:hover": { color: theme.palette.primary.main },
                      }}
                    />
                    <Typography sx={{ ml: "1rem" }}>
                      Current Location
                    </Typography>
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
                          ...all_center,
                          height: "3.5rem",
                          mt: "0.5rem",
                          cursor: "pointer",
                        }}
                      >
                        <Box
                          sx={{
                            ...all_center,
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
                              ...all_center,
                              height: "3.5rem",
                              mt: "0.5rem",
                              cursor: "pointer",
                            }}
                          >
                            <Box
                              sx={{
                                ...all_center,
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
                position: "relative",
              }}
            >
              <SearchIcon sx={{ ml: { xl: "10px" } }} />
              <Autocomplete
              freeSolo
      id="country-select-demo"
      sx={{ width: "24.7rem" }}
      options={!searchResultData ? [{label:"Loading...", id:0}] : searchResultData}
    
      renderOption={(props,) => (
        <Box component="li" sx={{ display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between !important",}} {...props}>

        <Box component={'div'} sx={{height:"3rem", width:'15%', bgcolor:"red"}}>
        <Box component={'img'} 
        src={``}
        sx={{height:"100%", width:'100%', objectFit:"contain"}}
        />
          </Box>
          <Box component={'div'} sx={{height:"3rem", width:'80%', bgcolor:"pink"}}>
          
          </Box>
         
        </Box>
      )}
      renderInput={(params) => (
        <TextField
        onChange={(e)=>{
          setSearchValue(e.target.value)
        }}
          {...params}
          placeholder="Find your perfect deal."
          inputProps={{
            ...params.inputProps,
            endAdornment: null
          }}
        />
      )}
      popupIcon={<ArrowDropDownIcon style={{ display: 'none' }} />}
    />
              {searchValue && (
                <CloseIcon
                  onClick={() => setSearchValue("")}
                  sx={{ mr: { xl: "0.5rem" } }}
                />
              )}
            </Box>

           
          </Box>

          <Box
            sx={{
              ...all_center,
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
      <Grid container sx={{ ...all_center, height: { xl: "3.25rem" } }}>
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
                ...all_center,
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
                ...all_center,
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
                    navigae("stores");
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
                ...all_center,
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
                ...all_center,
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
