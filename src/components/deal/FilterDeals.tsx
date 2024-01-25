import { Box, Checkbox, Divider, FormGroup, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { filterData,filterDataByDealModes, filterDataByDiscountTypes } from "../../features/filterData";
import { getData } from "../../api/homeApi";

const FilterDeals = () => {
  const [value, setValue] = useState("date");
  const [dealModeData, setDealModeData] = useState([]);
  const [discountTypeData, setDiscountTypeData] = useState([]);
  const [currentCheckValue, setCurrentCheckValue] = useState()

  const dispatch = useDispatch();

  const urlForDealMode = "product-mode";
  const urlForDiscountType = "discount-type";
  

  useEffect(() => {
    getData(urlForDealMode).then((res) => {
      setDealModeData(res.data.items);
      return;
    });

    getData(urlForDiscountType).then((res) => {
      setDiscountTypeData(res.data.items);
      return;
    });
  }, []);

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    dispatch(filterData({ shortBy: e.target.value, pageNumber: 1 }));
    setValue(e.target.value);
  };


  const handleChangeDiscountType = (e)=>{
      const currentDiscountTypeValue = e.target.value;
      dispatch(filterDataByDiscountTypes({currentDiscountTypeValue,pageNumber : 1}))
  }

  

  const handleChangeDealModes = (e)=>{
    const currentValue = e.target.value;
    dispatch(filterDataByDealModes({currentValue, pageNumber :1}))
  }

  return (
    <Box
      component={"div"}
      sx={{
        height: "auto",
        width: "250px",
        p: "20px",
        borderRadius: "10px",
        border: `1px solid ${theme.palette.grey[300]}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: theme.typography.h6.xl }}>Filter</Typography>
      <Typography sx={{ fontSize: theme.typography.h6.xl, mt: "1rem" }}>
        Sort By
      </Typography>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="date"
          value={value}
          onChange={handleChange}
          name="radio-buttons-group"
          sx={{ fontSize: theme.typography.subtitle1.xl, }}
        >
          
          <FormControlLabel
            sx={{ fontSize: theme.typography.subtitle1.xl }}
            value="clicks"
            control={<Radio />}
            label="Clicks"
          />
          <FormControlLabel
            sx={{ fontSize: theme.typography.subtitle1.xl }}
            value="date"
            control={<Radio />}
            label="Date"
          />
          <FormControlLabel
            sx={{ fontSize: theme.typography.subtitle1.xl }}
            value="title"
            control={<Radio />}
            label="Title"
          />
          <FormControlLabel
            sx={{ fontSize: theme.typography.subtitle1.xl }}
            value="views"
            control={<Radio />}
            label="Views"
          />
        </RadioGroup>
      </FormControl>

      <Divider sx={{ m: "1rem 0" }} />

      <Typography sx={{ fontSize: theme.typography.h6.xl, mt: "0.5rem" }}>
        Deal Mode
      </Typography>

      <FormGroup>
        {dealModeData.map(({ id, name }) => {
          return (
            <FormControlLabel
              id={id}
              value={id}
              onChange={(e)=>handleChangeDealModes(e)}
              checked={currentCheckValue}
              control={<Checkbox sx={{color:theme.palette.primary.main}} />}
              label={`${name}`}
            
            />
          );
        })}
      </FormGroup>



      <Divider sx={{ m: "1rem 0" }} />

<Typography sx={{ fontSize: theme.typography.h6.xl, mt: "0.5rem" }}>
  Discount Type
</Typography>

<FormGroup>
  {discountTypeData.map(({ id, name }) => {
    return (
      <FormControlLabel
      onChange={(e)=>handleChangeDiscountType(e)}
        value={name}
        control={<Checkbox sx={{color:theme.palette.primary.main}} />}
        label={`${name}`}
      />
    );
  })}
</FormGroup>
    </Box>
  );
};

export default FilterDeals;
