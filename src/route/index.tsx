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

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <Home />, index: true },
        { path: "how-it-works", element: <HowItWorks /> },
        { path: "online-stores", element: <OnlineStore /> },
        { path: "stores", element: <Store /> },
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
