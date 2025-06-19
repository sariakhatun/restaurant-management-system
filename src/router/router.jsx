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
            element:<AllFoods></AllFoods>
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
            element:<MyFood></MyFood>
  },
  {
            
            path:'/addFood',
            element:<AddFood></AddFood>
  },
  {
            
            path:'/myOrders',
            element:<MyOrders></MyOrders>
  },
    ]
  },
  
]);

export default router;