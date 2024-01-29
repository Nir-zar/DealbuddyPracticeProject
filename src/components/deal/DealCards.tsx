import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import CommonCard from "../common components/CommonCard";
import { getData } from "../../api/homeApi";
import CommonCoupon from "../common components/CommonCoupon";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme";
import { filterData } from "../../features/filterData";
import { filterDataByCategory } from "../../features/filterData";
import { all_center } from "../../constant/commonStyle";
import ShortcutSharpIcon from "@mui/icons-material/ShortcutSharp";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: string) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DealCards = () => {
  const [value, setValue] = React.useState("  ");
  const [salesCardData, setSalesCardData] = useState([]);
  const [dataStats, setDataStats] = useState({ all: "", sale: "", coupon: "" });
  const [currentCard, setCurrentCard] = useState("all");
  const [loading, setLoading] = useState(true);
  const [shortBy, setShortBy] = useState("date");
  const [productType, setProductType] = useState("");
  const [currentItemsLength, setCurrentItemsLength] = useState(0);
  const [totalCardCount, setTotalCardCount] = useState(0);
  // const [pageNumber, setPageNumber] = useState(1)

  // const data = useSelector((store)=>{
  //   const newData = store.filterData.shortBy;
  //   setShortBy(newData)
  // });

  const valueNew = useSelector((store) => store.filterData.shortBy);
  const pageNumber = useSelector((store) => store.filterData.pageNumber);
  const productCategory = useSelector((store) => store.filterData.productType);
  const { dealModes, discountTypes } = useSelector((store) => store.filterData);

  const url = `deal/deals?v=1705657100045&&updateViewCount=true&t=1705657100045`;
  const dispatch = useDispatch();

  useEffect(() => {
    const paramsForAll = {
      shortBy: valueNew,
      page: pageNumber,
      dealModes: dealModes,
      discountTypes: discountTypes,
    };

    const paramsForSaleAndCoupon = {
      shortBy: valueNew,
      productType: productCategory,
      page: pageNumber,
      dealModes: dealModes,
      discountTypes: discountTypes,
    };

    if (pageNumber == 1) {
      setLoading(true);
      getData(
        url,
        productCategory == "all" ? paramsForAll : paramsForSaleAndCoupon
      ).then((res) => {
        setCurrentItemsLength(res.data.items.length);
        console.log(res.data.total, res.data.items.length);
        setTotalCardCount(res.data.total);
        setSalesCardData(res.data.items);
        setDataStats({
          ...dataStats,
          all: res.data.sellCount + res.data.couponCount,
          sale: res.data.sellCount,
          coupon: res.data.couponCount,
        });
        setLoading(false);
      });
    } else {
      getData(
        url,
        productCategory == "all" ? paramsForAll : paramsForSaleAndCoupon
      ).then((res) => {
        setCurrentItemsLength(currentItemsLength + res.data.items.length);
        console.log(totalCardCount, currentItemsLength);

        setTotalCardCount(res.data.total);
        const newPageData = res.data.items;
        setSalesCardData(salesCardData.concat(newPageData));
        console.log(salesCardData);
        console.log(salesCardData.concat(newPageData));
        setDataStats({
          ...dataStats,
          sale: res.data.sellCount,
          coupon: res.data.couponCount,
        });
        setLoading(false);
      });
    }
    console.log(currentItemsLength);

    return;
  }, [valueNew, pageNumber, productCategory, dealModes, discountTypes]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(filterDataByCategory(newValue));

    if (pageNumber > 1) {
      dispatch(filterData({ shortBy: valueNew, pageNumber: 1 }));
    }
  };

  return (
    <Box
      component={"div"}
      sx={{
        height: "62.5rem",
        width: "980px",
        display: "flex",
        flexDirection: "column",
        overflowY: "scoll",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              onClick={() => setCurrentCard("all")}
              value={"all"}
              label={`all ${dataStats.all}`}
              {...a11yProps("all")}
            />
            <Tab
              onClick={() => {
                setCurrentCard("sale"), setProductType("sale");
              }}
              value={"sale"}
              label={`Sale ${dataStats.sale}`}
              {...a11yProps("sale")}
            />
            <Tab
              onClick={() => {
                setCurrentCard("coupon"), setProductType("coupon");
              }}
              value={"coupon"}
              label={`Coupon ${dataStats.coupon}`}
              {...a11yProps("coupon")}
            />
          </Tabs>
        </Box>
      </Box>

      <Box
        component={"div"}
        sx={{
          height: "55rem",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          overflowY: "scroll",
        }}
      >
        {loading ? (
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
        ) : (
          <>
            {salesCardData ? 
            (<>
             {salesCardData.map(
                ({
                  category,
                  imageUrl,
                  clicks,
                  productImages,
                  productType,
                  productModes,
                  stores,
                  name,
                  NZWide,
                  locations,
                  couponCode,
                  index,
                }) => {
                  return (
                    <>
                      {couponCode == null ? (
                        <CommonCard
                          key={index}
                          category={category}
                          imageUrl={imageUrl}
                          clicks={clicks}
                          productImages={productImages}
                          productType={productType}
                          productModes={productModes}
                          stores={stores}
                          name={name}
                          NZWide={NZWide}
                          locations={locations}
                          width={4}
                        />
                      ) : 
                      
                      (
                        <CommonCoupon
                          category={category}
                          imageUrl={imageUrl}
                          clicks={clicks}
                          productImages={productImages}
                          productType={productType}
                          productModes={productModes}
                          stores={stores}
                          name={name}
                          NZWide={NZWide}
                          locations={locations}
                          width={4}
                        />
                      )}
                    </>
                  );
                }
              )}
            </>) 
            : 
            (<>
            <Box sx={{height:"5rem", width:{xl:"100%"}, bgcolor:"red", p:"5rem", display:"flex", flexDirection:"column"}}>

            </Box>
            </>) }
             
          </>
        )}

        {/* {currentCard == "sale" &&
          salesCardData.map(
            ({
              category,
              imageUrl,
              clicks,
              productImages,
              productType,
              productModes,
              stores,
              name,
              NZWide,
              locations,
              index,
            }) => {
              return (
                <CommonCard
                  key={index}
                  category={category}
                  imageUrl={imageUrl}
                  clicks={clicks}
                  productImages={productImages}
                  productType={productType}
                  productModes={productModes}
                  stores={stores}
                  name={name}
                  NZWide={NZWide}
                  locations={locations}
                  width={4}
                />
              );
            }
          )}

        {currentCard == "coupon" &&
          salesCardData.map(
            ({
              category,
              imageUrl,
              clicks,
              productImages,
              productType,
              productModes,
              stores,
              name,
              NZWide,
              locations,
              index,
            }) => {
              return (
                <CommonCoupon
                  key={index}
                  category={category}
                  imageUrl={imageUrl}
                  clicks={clicks}
                  productImages={productImages}
                  productType={productType}
                  productModes={productModes}
                  stores={stores}
                  name={name}
                  NZWide={NZWide}
                  locations={locations}
                  width={4}
                />
              );
            }
          )} */}
      </Box>

      {currentItemsLength == totalCardCount ? (
          <Box
          gap={2}
            sx={{
              ...all_center,
              mt:"1rem",
              height: "2.5rem",
              width: "20rem",
              background: theme.gradient_color.button_hover_color,
              alignSelf: "center",
              
            }}
          >
            <Typography
              sx={{
                ...all_center,
                height: "100%",
                width: "auto",
                background: theme.gradient_color.button_hover_color,
                fontSize:theme.typography.subtitle2.xl,
              }}
            >
              Checkout offers pulled by our bots
            </Typography>
            <ShortcutSharpIcon />
          </Box>
      ) : (
        <>
          <Button
            onClick={() =>
              dispatch(
                filterData({ shortBy: valueNew, pageNumber: pageNumber + 1 })
              )
            }
            sx={{
              height: "2.5rem",
              width: "8rem",
              alignSelf: "center",
              background: theme.gradient_color.button_color,
              mt: "1rem",
              color: theme.palette.common.white,
              fontSize: theme.typography.subtitle2.xl,
              "&:hover": {
                background: theme.gradient_color.button_hover_color,
                color: theme.palette.common.black,
              },
            }}
          >
            <Typography>Load More</Typography>
          </Button>

       
        </>
      )}
    </Box>
  );
};

export default DealCards;
