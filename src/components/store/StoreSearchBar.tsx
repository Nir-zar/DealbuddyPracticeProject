import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { all_center } from "../../constant/commonStyle";
import theme from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux";
import {
storeCategoryType, storeDiscountType,
  storeSearchBarValue,
} from "../../features/storeData";
import { getCategoryList } from "../../api/categoryApi";
import { getData } from "../../api/homeApi";
import { useLocation } from "react-router-dom";




const StoreSearchBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [btnTwoanchorEl, setbtnTwoAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [categoryList, setCategoryList] = useState([]);
  const [discountTypeList, setDiscountTypeList] = useState([]);
  const [currentPlaceHolderValue, setCurrentPlaceHolderValue] = useState({
    discountType: "Discount Type",
    CategoryType: "Categories",
  });

  const open = Boolean(anchorEl);
  const menuTwoOpen = Boolean(btnTwoanchorEl);
  const urlForDiscountType = "discount-type";
  const dispatch = useDispatch();
  const location = useLocation();


  useEffect(() => {
    getCategoryList().then((res) => {
      setCategoryList(res.data.items);
    });

    getData(urlForDiscountType).then((res) => {
      setDiscountTypeList(res.data.items);
    });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setbtnTwoAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setbtnTwoAnchorEl(null);
  };



  const searchBarValue = (e) => {
    dispatch(storeSearchBarValue({ searchBarValue: e.target.value }));
  };

  return (
    <Grid container sx={{ ...all_center }}>
      <Box
        component={"div"}
        sx={{ height: "auto", width: "1300px", p: "2rem 0 0 0" }}
      >
        <Box
          component={"div"}
          sx={{
            height: "auto",
            width: "100%",
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
           {location.pathname == "/stores" ? " All Stores" : "Discover stores offering deals on online shopping"}
           
          </Typography>

            {location.pathname == "/stores" &&  <Typography
            sx={{
              color: theme.palette.common.black,
              fontSize: theme.typography.h5.md,
              mt: { xl: "0.7rem" },
            }}
          >
           Find your store and grab a deal!
           
          </Typography>}
         
        </Box>

        <Box
          component={"div"}
          sx={{
            height: "auto",
            width: "100%",
            // p: "2rem 0",
            mt: { xl: "2rem" },
          }}
        >
          <Box
            component={"div"}
            sx={{
              height: "auto",
              width: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FormControl sx={{ height: "auto", width: "891px" }}>
              <Input
                onChange={(e) => searchBarValue(e)}
                placeholder="Search Store"
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: theme.palette.common.black }} />
                  </InputAdornment>
                }
                disableUnderline={true}
                sx={{
                  height: "3rem",
                  width: "100%",
                  m: "1rem 0rem",
                  border: `1px solid ${theme.palette.grey[300]}`,
                  borderRadius: "10px",
                  p: "0 1rem",
                  textAlign: "center",
                  fontSize: theme.typography.subtitle1.xl,
                  display: "flex",
                  alignItems: "center",
                }}
              ></Input>
            </FormControl>

            <Button
              id="button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick2}
              variant="outlined"
              sx={{
                height: "3rem",
                width: "192px",
                border: `1px solid ${theme.palette.grey[300]}`,
                borderRadius: "10px",
                "&:hover": {
                  bgcolor: "transparent",
                  border: `1px solid ${theme.palette.grey[300]}`,
                },
              }}
            >
              <Typography sx={{ color: theme.palette.common.black }}>
                {currentPlaceHolderValue.discountType}
              </Typography>
              <ArrowDropDownIcon
                sx={{ ml: { xl: "1rem" }, color: theme.palette.common.black }}
              />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={btnTwoanchorEl}
              open={menuTwoOpen}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  setCurrentPlaceHolderValue({
                    ...currentPlaceHolderValue,
                    discountType: "Discount Type",
                  });
                  handleClose();
                  dispatch(
                    storeDiscountType("")
                  );
                }}
              >
                All Discount Type
              </MenuItem>
              {discountTypeList.map((data) => {
                return (
                  <MenuItem
                    onClick={() => {
                      setCurrentPlaceHolderValue({
                        ...currentPlaceHolderValue,
                        discountType: data.name,
                      });
                      handleClose();
                      dispatch(
                        storeDiscountType(data.id)
                      );
                    }}
                    value={data.id}
                  >
                    {data.name}
                  </MenuItem>
                );
              })}
            </Menu>

            <Button
              id="button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              sx={{
                height: "3rem",
                width: "166px",
                border: `1px solid ${theme.palette.grey[300]}`,
                borderRadius: "10px",
                "&:hover": {
                  bgcolor: "transparent",
                  border: `1px solid ${theme.palette.grey[300]}`,
                },
              }}
            >
              <Typography sx={{ color: theme.palette.common.black }}>
                {currentPlaceHolderValue.CategoryType}
              </Typography>
              <ArrowDropDownIcon
                sx={{ ml: { xl: "1rem" }, color: theme.palette.common.black }}
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  setCurrentPlaceHolderValue({
                    ...currentPlaceHolderValue,
                    discountType: "Categories",
                  });
                  handleClose();
                  dispatch(
                    storeCategoryType("")
                  );
                }}
              >
                All Categories
              </MenuItem>
              {categoryList.map((data) => {
                return (
                  <MenuItem
                    value={data.id}
                    onClick={() => {
                      setCurrentPlaceHolderValue({
                        ...currentPlaceHolderValue,
                        CategoryType: data.name,
                      });
                      handleClose();
                      dispatch(
                        storeCategoryType(data.id)
                      );
                    }}
                  >
                    {data.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default StoreSearchBar;
