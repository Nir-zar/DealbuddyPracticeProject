import React, { useEffect, useState } from "react";
import { all_center } from "../../constant/commonStyle";
import { Box, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import { Height } from "@mui/icons-material";
import theme from "../../theme";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { getCategoryList } from "../../api/categoryApi";
import { Navigate, useNavigate, useParams } from "react-router-dom";


const prevNextButtonStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "10px",
  bgcolor: theme.palette.primary.light,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.primary.main,
};


const tempData = [
  {
      "id": "186e1292-7373-417b-a3a7-82cb9e0af54e",
      "createdAt": "2021-11-28 13:55:36",
      "updatedAt": "2022-05-11 04:16:09",
      "deletedAt": null,
      "metaTitle": "Best Travel Coupons &  Deals | DealBuddy",
      "metaDescription": "Save money with the latest travel coupon deals for airfare, flight, hotel discounts. Shop online for the best deals and discounts on travel vouchers.",
      "metaKeywords": null,
      "name": "Travel",
      "slug": "travel",
      "image": "category/category-1649058881-247.png",
      "description": "Find latest domestic and international flights, hotel and car hire deals on offer. We have partnered with SkyScanner to provide best discounts and offers on travel. Save huge and travel smart! Book Now. ",
      "widget": "<div\r\n  data-skyscanner-widget=\"MultiVerticalWidget\"\r\n  data-locale=\"en-GB\"\r\n  data-market=\"NZ\"\r\n  data-currency=\"NZD\"\r\n  data-campaign-id=\"13416\"\r\n  data-media-partner-id=\"3130345\"\r\n  data-ad-id=\"1101461\"\r\n  data-direct-flights=\"true\"\r\n  data-button-colour=\"#00C86D\"\r\n  data-flights-children-ages=\"true\"\r\n  data-hide-powered-by=\"false\"\r\n  data-powered-by-logo-colour=\"light\"\r\n  data-hotel-button-text=\"Search Hotels\"\r\n  data-flight-button-text=\"Search Flights\"\r\n  data-car-button-text=\"Search Cars\"\r\n></div>\r\n",
      "pageTitle": "Let's sort your travel plans",
      "orderBy": 1,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058881-247-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058881-247.png"
  },
  {
      "id": "90f5aa0c-1b8a-4ec6-8853-d10ba22a1162",
      "createdAt": "2021-11-28 13:55:36",
      "updatedAt": "2022-04-04 07:54:52",
      "deletedAt": null,
      "metaTitle": "Best Broadband Deals and Coupons - DealBuddy NZ",
      "metaDescription": "Discover Broadband deals with great discounts on DealBuddy. Great Deals in New Zealand with Big Discounts on Retail, Travel, Activities, Dining & lot more.",
      "metaKeywords": null,
      "name": "Broadband",
      "slug": "broadband",
      "image": "category/category-1649058891-588.png",
      "description": "Save money on your broadband bill. Compare available broadband deals for your address. Find the cheapest internet plan and the best NZ internet service providers.",
      "widget": "<iframe src=\"https://www.broadbandcompare.co.nz/widget/2.0/index.html?pid=2951\" width=\"100%\" height=\"380px\" frameborder=\"0\" scrolling=\"no\" seamless=\"seamless\" allowtransparency style=\"background: no-repeat center url(&#039;https://broadbandcompare.co.nz/img/loading.gif&#039;)\"></iframe>",
      "pageTitle": "Find best internet deals for your address",
      "orderBy": 2,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058891-588-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058891-588.png"
  },
  {
      "id": "cdcfa255-04d5-448b-8c47-ba86be325ef8",
      "createdAt": "2021-12-02 23:58:54",
      "updatedAt": "2022-05-11 04:16:40",
      "deletedAt": null,
      "metaTitle": "Sports and Fitness Coupon Codes & Deals | DealBuddy",
      "metaDescription": "Grab extra discounts from sports and fitness coupons, fitness vouchers, and promotional deals on sports shoes, t-shirts, and fitness equipment & products. ",
      "metaKeywords": null,
      "name": "Sport & Fitness",
      "slug": "sport-fitness",
      "image": "category/category-1649058827-702.png",
      "description": "Sport and Fitness Deals  and Promo Codes. Have you been searching for the perfect gym outfit or gym itself? Or how about some new running shoes so you can keep training. Take a look at the great offers and save.",
      "widget": null,
      "pageTitle": "Sport & Fitness Deals",
      "orderBy": 3,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058827-702-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058827-702.png"
  },
  {
      "id": "8aeed8c2-974e-4587-8356-58b8f0208df1",
      "createdAt": "2021-12-01 01:59:29",
      "updatedAt": "2022-05-11 04:16:16",
      "deletedAt": null,
      "metaTitle": "Latest Food Coupon Codes & Deals | DealBuddy",
      "metaDescription": "Save with food coupon code, deals,  promo codes on a wide range of fast and traditional food with pick-up and self-collect items at the best discounted rate.",
      "metaKeywords": null,
      "name": "Food",
      "slug": "food",
      "image": "category/category-1649058872-289.png",
      "description": "Find the best restaurant and fast food deals and offers quickly on dealbuddy. Get the latest food deals and coupons and save on your next meal.",
      "widget": null,
      "pageTitle": "Food, Restaurant and Cafe deals",
      "orderBy": 4,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058872-289-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058872-289.png"
  },
  {
      "id": "e83545ed-9f91-4170-b01f-d823f49b91bd",
      "createdAt": "2021-12-02 23:04:15",
      "updatedAt": "2022-05-11 04:16:22",
      "deletedAt": null,
      "metaTitle": "Fashion Deals &  Coupon Codes | DealBuddy",
      "metaDescription": "Get the best fashion coupon deals, discounts codes, promo deals to save money on all footwear, bags, watches, t-shirts, kid's wear, and many more. ",
      "metaKeywords": null,
      "name": "Fashion",
      "slug": "fashion",
      "image": "category/category-1649058863-796.png",
      "description": "Find the best style deals and coupons online including shoes, sunglasses, clothing, jewellery and accessory sales.",
      "widget": null,
      "pageTitle": "Fashion Deals and Coupons",
      "orderBy": 5,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058863-796-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058863-796.png"
  },
  {
      "id": "07402405-40c5-45ac-8fc6-00155e270449",
      "createdAt": "2021-12-02 23:12:02",
      "updatedAt": "2022-04-04 07:54:11",
      "deletedAt": null,
      "metaTitle": "Best Home & Living Deals and Coupons - DealBuddy NZ",
      "metaDescription": "Discover Best Home & Living Deals and Coupons on DealBuddy. Best site in in New Zealand to find Big Discounts on Retail, Travel, Activities, Dining & lot more.",
      "metaKeywords": null,
      "name": "Home & Living",
      "slug": "home-living",
      "image": "category/category-1649058850-540.png",
      "description": "Be sure to check out what home and living items are on sale and get the best deals on Home & Living products. Shop smart and decorate your home while saving money.",
      "widget": null,
      "pageTitle": "Home & Living Deals",
      "orderBy": 6,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058850-540-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058850-540.png"
  },
  {
      "id": "bac475e4-7e2f-47e7-b39a-ae78fa48864f",
      "createdAt": "2021-12-02 23:42:00",
      "updatedAt": "2022-04-04 07:53:59",
      "deletedAt": null,
      "metaTitle": "Best Health & Beauty Deals and Coupons - DealBuddy NZ",
      "metaDescription": "Discover Best Health & Beauty Deals and Coupons on DealBuddy. Best site in New Zealand to find Big Discounts on Retail, Travel, Activities, Dining & lot more.",
      "metaKeywords": null,
      "name": "Health & Beauty",
      "slug": "health-beauty",
      "image": "category/category-1649058838-368.png",
      "description": "Health & Beauty Deals",
      "widget": null,
      "pageTitle": "Health & Beauty Deals",
      "orderBy": 7,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058838-368-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058838-368.png"
  },
  {
      "id": "cf2560c9-9ae3-4c0f-9789-8659e75eaff1",
      "createdAt": "2021-12-03 00:13:55",
      "updatedAt": "2022-04-04 07:53:29",
      "deletedAt": null,
      "metaTitle": "Best Automotive Deals and Coupons - DealBuddy NZ",
      "metaDescription": "Discover Best Automotive Deals and Coupons on DealBuddy. Best site in New Zealand to find Big Discounts on Retail, Travel, Activities, Dining & lot more.",
      "metaKeywords": null,
      "name": "Automotive",
      "slug": "automotive",
      "image": "category/category-1649058809-428.png",
      "description": "Find best deals on Automotive Tools · Garage & Shop Equipment · Car Care Essentials · Performance & Custom Parts · Car Accessories · Truck Accessories · Motorcycle Parts and servicing.",
      "widget": null,
      "pageTitle": "Automotive Deals",
      "orderBy": 8,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058809-428-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058809-428.png"
  },
  {
      "id": "cbc73784-392a-4565-9643-963dc1de5689",
      "createdAt": "2021-12-03 00:20:43",
      "updatedAt": "2023-07-10 22:49:15",
      "deletedAt": null,
      "metaTitle": "Best Technology & Software Deals and Coupons - DealBuddy NZ",
      "metaDescription": "Discover Best Technology & Software Deals and Coupons on DealBuddy. Best site in New Zealand to find Big Discounts on Retail, Travel, Activities, Dining & lot more.",
      "metaKeywords": null,
      "name": "Technology & Software",
      "slug": "technology-software",
      "image": "category/category-1649058651-578.png",
      "description": "Save big on Technology and Software products with these working coupons and deals for New Zealand stores.",
      "widget": null,
      "pageTitle": "Technology & Software Deals",
      "orderBy": 9,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058651-578-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058651-578.png"
  },
  {
      "id": "1a62ede1-be60-4060-a10b-078ab3eedab9",
      "createdAt": "2022-01-06 20:29:58",
      "updatedAt": "2022-07-01 02:51:01",
      "deletedAt": null,
      "metaTitle": "Best Activity Deals and Coupons - DealBuddy NZ",
      "metaDescription": "Discover Best Activity Deals and Coupons on DealBuddy. Best site in New Zealand to find Big Discounts on Retail, Travel, Activities, Dining & lot more.",
      "metaKeywords": null,
      "name": "Activities",
      "slug": "activities",
      "image": "category/category-1649058796-593.png",
      "description": "Amazing things to do. Amazing discounts deals and coupons. Find the latest info deals on fun things to do, activities and attractions. Great range of deals on activities near you.",
      "widget": null,
      "pageTitle": "Activity Deals",
      "orderBy": 12,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058796-593-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1649058796-593.png"
  },
  {
      "id": "69c006b3-1008-4ff6-9cbd-202103d34555",
      "createdAt": "2022-02-11 03:17:30",
      "updatedAt": "2022-07-01 02:50:55",
      "deletedAt": null,
      "metaTitle": "Best Stationery Deals and Coupons - DealBuddy NZ",
      "metaDescription": "Discover Best Stationery Deals and Coupons on DealBuddy. Best site in New Zealand to find Big Discounts on Retail, Travel, Activities, Dining & lot more.",
      "metaKeywords": null,
      "name": "Stationery",
      "slug": "stationery",
      "image": "category/category-1655093181-425.png",
      "description": "Find great deals on Stationery & books. Browse specials and coupons offered by NZ based stores here.",
      "widget": null,
      "pageTitle": "Find best discounts on stationery and books",
      "orderBy": 13,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1655093181-425-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1655093181-425.png"
  },
  {
      "id": "cb2f3237-4567-46c2-b444-6d50855907f1",
      "createdAt": "2022-07-01 02:48:37",
      "updatedAt": "2022-07-01 02:50:43",
      "deletedAt": null,
      "metaTitle": "Best Deals and Coupons for pet products - DealBuddy NZ",
      "metaDescription": "Discover Best Deals and Coupons on pet products. Best site in New Zealand to find Big Discounts on Retail, Travel, Activities, Dining & lot more.",
      "metaKeywords": null,
      "name": "Pets",
      "slug": "pets",
      "image": "category/category-1656643716-773.png",
      "description": "Find great deals on pet products. Browse specials and coupons offered by NZ based stores here.",
      "widget": null,
      "pageTitle": "Find best discounts on pet products",
      "orderBy": 14,
      "status": "active",
      "parentId": null,
      "imageUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1656643716-773-thumb.png",
      "imageOrigUrl": "https://d12agcgpij2qxn.cloudfront.net/category/category-1656643716-773.png"
  }
]




const DealCategorySlider = () => {
  const [categoryList, setCategoryList] = useState();
  const [currentBoxColor, setCurrentBoxColor] = useState("red")

  const {slug} = useParams();

  useEffect(() => {
    getCategoryList().then((res) => {
      setCategoryList(res.data.items);
      console.log(res.data.items);
      
    });
  },[]);


  console.log(categoryList);
  
  const navigate = useNavigate();

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    nextArrow: (
      <Box>
        <Box className="next-slick-arrow" sx={{ ...prevNextButtonStyle }}>
          {" "}
          <KeyboardArrowRight />{" "}
        </Box>
      </Box>
    ),
    prevArrow: (
      <Box>
        <Box className="prev-slick-arrow" sx={{ ...prevNextButtonStyle }}>
          <KeyboardArrowLeft />{" "}
        </Box>
      </Box>
    ),
  };

  

  return (
    <Grid sx={{ ...all_center }}>
      <Box
        component={"div"}
        sx={{
          height: "auto",
          width: "1400px",
          display: "flex",
          alignItems: "ce",
        }}
      >
        {/*  */}

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >

          {categoryList && (<>
            <Slider
            style={{ width: "92%", display: "flex", alignItems: "center" }}
            {...settings}
          >
            {categoryList.map((data) => {

              // slug == data.slug && setCurrentBoxColor(theme.palette.primary.light)

              return (
                <Box
                onClick={()=> navigate(`/categories/${data.slug}`)}
                  sx={{
                    height: "200px",
                    display: "flex !important",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      ...all_center,
                      height: "auto",
                      width: "70%",
                      p: "20px",
                      borderRadius: "10px",
                      border: `1px solid ${theme.palette.grey[300]}`,
                      display: "flex",
                      flexDirection: "column",
                      cursor:"pointer",
                      bgcolor: slug == data.slug ? theme.palette.primary.light : theme.palette.common.white
                    }}
                  >
                    <Box
                      component={"div"}
                      sx={{
                        ...all_center,
                        height: "60px",
                        width: "60px",
                        borderRadius: "10px",
                        m:"0 0 1rem",
                        bgcolor:theme.palette.primary.main,
                      }}
                    >
                      <Box
                        component={"img"}
                        src={data?.imageUrl}
                        sx={{ height: "26px", width: "26px" }}
                      ></Box>
                    </Box>
                    <Typography sx={{...all_center, textAlign:"center","&:hover":{color:theme.palette.primary.main}}}>
                      {data?.name}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Slider>     
          </>)}

        </div>

        {/*  */}
      </Box>
    </Grid>
  );
};

export default DealCategorySlider;
