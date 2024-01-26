import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Category from '../pages/Category';
import HowItWorks from '../pages/HowItWorks';
import Deal from '../pages/Deal';
import Travel from '../components/categories/Travel';
import Broadband from '../components/categories/Broadband';

export const Router = ()=>{
    return useRoutes([
        {path:"/",
        element:<Layout />,
        children:[
            { element: <Home />, index: true,},
            {path:"how-it-works", element:<HowItWorks />},
            {path:"deals", element:<Deal />},
            
            
            {path:"categories", 
            children : [
                { element: <Navigate to="categories/travel" replace />, index: true },
                { path: 'travel', element: <Travel />,      },
                { path: 'broadband', element: <Broadband /> },
            ]
        }
        ]

    
    },
//     {path : "categories",
//     element: <Category />,
//     children: [
//         {

//         }
//     ]    
// }
    ])
}