import { Navigate, useRoutes, useLocation } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Category from "../pages/CategoryList";
import HowItWorks from "../pages/HowItWorks";
import Deal from "../pages/Deal";
import Travel from "../components/categories/Travel";
import Broadband from "../components/categories/Broadband";
import CategoryList from "../pages/CategoryList";
import Store from "../pages/Store";
import OnlineStore from "../pages/OnlineStore";
import DealInDeatail from "../pages/DealInDeatail";
import PhysicalStore from "../pages/PhysicalStore";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <Home />, index: true },
        { path: "how-it-works", element: <HowItWorks /> },
        { path: "physical-stores", element: <PhysicalStore /> },
        { path: "online-stores", element: <OnlineStore /> },
        { path: "stores", element: <OnlineStore /> },
        { path: "deals", element: <Deal /> },
        { path: "categories", element: <CategoryList /> },
        {
          path: "categories/:slug",
          children: [{ element: <Deal />, index: true }],
        },
        {
            path: "store/:storeSlug",
            children: [{ element: <Deal />, index: true }],
          },
          {
            path: "deals/:dealSlug",
            children: [{element: <DealInDeatail />, index: true}]
          },
          {
            path :"search",
            children :[ {element:<Deal />, index:true},  ]
          }
      ],
    },
    //     {path : "categories",
    //     element: <Category />,
    //     children: [
    //         {

    //         }
    //     ]
    // }
  ]);
};
