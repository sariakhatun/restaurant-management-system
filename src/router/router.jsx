import React from 'react';
import {
  createBrowserRouter,
 
} from "react-router";
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import Gallery from '../pages/Gallery';
import Login from '../Components/Login';
import Register from '../Components/Register';
import MyFood from '../pages/MyFood';
import AddFood from '../pages/AddFood';
import MyOrders from '../pages/MyOrders';
import PrivateRoute from './PrivateRoute';
import Loading from '../Components/Loading';
import SingleFood from '../pages/SingleFood';
import FoodPurchase from '../pages/FoodPurchase';
import Error from '../pages/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            path:'/',
            element:<Home></Home>
        },
        {
          
            path:'/allFoods',
            element:<AllFoods></AllFoods>,
            loader:()=>fetch('http://localhost:3000/foods'),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
          
            path:'/singleFood/:id',
            element:<SingleFood></SingleFood>,
            loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            
            path:'/foodPurchase',
            element:<PrivateRoute>
                <FoodPurchase></FoodPurchase>
            </PrivateRoute>
        },
        {
            
            path:'/gallery',
            element:<Gallery></Gallery>
        },
        {
            
            path:'/login',
            element:<Login></Login>
  },
  {
            
            path:'/register',
            element:<Register></Register>
  },
  {
            
            path:'/myFood',
            element:<PrivateRoute>
                <MyFood></MyFood>
            </PrivateRoute>
  },
  {
            
            path:'/addFood',
            element:<PrivateRoute>
                <AddFood></AddFood>
            </PrivateRoute>
  },
  {
            
            path:'/myOrders',
            element:<PrivateRoute>
                <MyOrders></MyOrders>
            </PrivateRoute>
  },
    ]
  },
  {
     path: "/*",
    element: <Error></Error>,
  }
  
]);

export default router;