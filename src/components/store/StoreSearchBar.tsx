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
import React from "react";
import { all_center } from "../../constant/commonStyle";
import theme from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { UseDispatch, useDispatch } from "react-redux";
import { storeSearchBarValue } from "../../features/storeData";

const storeType = {
  all: {
    mainTitle: "All Stores",
    subtitle: "Find your store and grab a deal!",
  },

  online: {
    mainTitle: "Discover stores offering deals on online shopping",
  },

  physica: {
    mainTitle: "Discover the best discount deals in your area",
  },
};

const StoreSearchBar = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const dispatch = useDispatch();

  const searchBarValue = (e)=>{
    dispatch(storeSearchBarValue({searchBarValue: e.target.value}));
  }


  return (
    <Grid container sx={{ ...all_center }}>
      <Box
        component={"div"}
        sx={{ height: "auto", width: "1300px", p: "2rem 0 0 0", }}
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
            All Stores
          </Typography>

          <Typography
            sx={{
              color: theme.palette.common.black,
              fontSize: theme.typography.h5.md,
              mt: { xl: "0.7rem" },
            }}
          >
            Find your store and grab a deal!
          </Typography>
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
              onChange={(e)=> searchBarValue(e)}
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
              variant="outlined"
              sx={{
                height: "3rem",
                width: "192px",
                border: `1px solid ${theme.palette.grey[300]}`,
                borderRadius: "10px",
                "&:hover":{bgcolor:"transparent", border:`1px solid ${theme.palette.grey[300]}`}
              }}
            >
              <Typography sx={{ color: theme.palette.common.black }}>
                Discount Type
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
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

            <Button
             id="button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
             
              variant="outlined"
              sx={{
                height: "3rem",
                width: "166px",
                border: `1px solid ${theme.palette.grey[300]}`,
                borderRadius: "10px",
                "&:hover":{bgcolor:"transparent", border:`1px solid ${theme.palette.grey[300]}`}
              }}
            >
              <Typography sx={{ color: theme.palette.common.black }}>
                Categories
              </Typography>
              <ArrowDropDownIcon
                sx={{ ml: { xl: "1rem" }, color: theme.palette.common.black }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default StoreSearchBar;
