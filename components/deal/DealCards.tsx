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
import { allCenter } from "../../constant/commonStyle";
import ShortcutSharpIcon from "@mui/icons-material/ShortcutSharp";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import IndividualStoreDetail from "./IndividualStoreDetail";

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
  const [value, setValue] = React.useState(0);
  const [salesCardData, setSalesCardData] = useState([]);
  const [dataStats, setDataStats] = useState({ all: "", sale: "", coupon: "" });
  const [loading, setLoading] = useState(true);
  const [currentItemsLength, setCurrentItemsLength] = useState(0);
  const [totalCardCount, setTotalCardCount] = useState(0);

  const valueNew = useSelector((store) => store.filterData.shortBy);
  const pageNumber = useSelector((store) => store.filterData.pageNumber);
  const productCategory = useSelector((store) => store.filterData.productType);
  const { dealModes, discountTypes } = useSelector((store) => store.filterData);
  const { slug, storeSlug } = useParams();

  const url = `deal/deals`;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const searchKeyword = new URLSearchParams(location.search).get("search");

  const currentCityName = useSelector((store) => store.filterData.currentCity);

  useEffect(() => {
    const paramsForAll = {
      shortBy: valueNew,
      page: pageNumber,
      dealModes: dealModes,
      discountTypes: discountTypes,
      categorySlug: slug,
      storeSlug: storeSlug,
      searchKeyword: searchKeyword,
      limit: 36,
    };

    const paramsForSaleAndCoupon = {
      shortBy: valueNew,
      productType: productCategory,
      page: pageNumber,
      dealModes: dealModes,
      discountTypes: discountTypes,
      categorySlug: slug,
      storeSlug: storeSlug,
      searchKeyword: searchKeyword,
      limit: 36,
    };

    if (pageNumber == 1) {
      setLoading(true);
      getData(
        url,
        productCategory == "all" ? paramsForAll : paramsForSaleAndCoupon,
        currentCityName
      ).then((res) => {
        setCurrentItemsLength(res.data.items.length);
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
        productCategory == "all" ? paramsForAll : paramsForSaleAndCoupon,
        currentCityName
      ).then((res) => {
        setCurrentItemsLength(currentItemsLength + res.data.items.length);
        setTotalCardCount(res.data.total);
        const newPageData = res.data.items;
        setSalesCardData(salesCardData.concat(newPageData));
        setDataStats({
          ...dataStats,
          sale: res.data.sellCount,
          coupon: res.data.couponCount,
        });
        setLoading(false);
      });
    }

    return;
  }, [
    valueNew,
    pageNumber,
    productCategory,
    dealModes,
    discountTypes,
    slug,
    currentCityName,
  ]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const changeProductTypeValue = (productType: string) => {
    dispatch(filterDataByCategory(productType));

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
        {storeSlug && <IndividualStoreDetail />}

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "Button.Mui-selected": { bgcolor: theme.palette.primary.light },
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              onClick={() => {
                changeProductTypeValue("all");
              }}
              value={0}
              label={`all ${dataStats.all}`}
              {...a11yProps("all")}
            />
            <Tab
              onClick={() => {
                changeProductTypeValue("sale");
              }}
              value={1}
              label={`Sale ${dataStats.sale}`}
              {...a11yProps("sale")}
            />
            <Tab
              onClick={() => {
                changeProductTypeValue("coupon");
              }}
              value={2}
              label={`Coupon ${dataStats.coupon}`}
              {...a11yProps("coupon")}
            />
          </Tabs>
        </Box>
      </Box>

      <Box
        component={"div"}
        sx={{
          height: "auto",
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
            {salesCardData ? (
              <>
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
                    slug,
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
                            slug={slug}
                            width={4}
                          />
                        ) : (
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
                            slug={slug}
                          />
                        )}
                      </>
                    );
                  }
                )}
              </>
            ) : (
              <>
                <Box
                  sx={{
                    height: "5rem",
                    width: { xl: "100%" },
                    bgcolor: "red",
                    p: "5rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                ></Box>
              </>
            )}
          </>
        )}
      </Box>

      {currentItemsLength == totalCardCount ? (
        <Box
          gap={2}
          sx={{
            ...allCenter,
            mt: "1rem",
            height: "2.5rem",
            width: "20rem",
            background: theme.gradient_color.button_hover_color,
            alignSelf: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              ...allCenter,
              height: "100%",
              width: "auto",
              background: theme.gradient_color.button_hover_color,
              fontSize: theme.typography.subtitle2.xl,
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
