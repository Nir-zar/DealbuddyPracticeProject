import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Category from '../pages/Category';
import HowItWorks from '../pages/HowItWorks';
import Deal from '../pages/Deal';

export const Router = ()=>{
    return useRoutes([
        {path:"/",
        element:<Layout />,
        children:[
            { element: <Home />, index: true,},
            {path:"how-it-works", element:<HowItWorks />},
            {path:"deals", element:<Deal />}
        ]

    
    },
    {path : "categories",
    element: <Category />,
    children: [
        {

        }
    ]    
}
    ])
}