import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import Login from "../Components/Login";
import Register from "../Components/Register";
import MyFood from "../pages/MyFood";
import AddFood from "../pages/AddFood";
import MyOrders from "../pages/MyOrders";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Components/Loading";
import SingleFood from "../pages/SingleFood";
import FoodPurchase from "../pages/FoodPurchase";
import Error from "../pages/Error";
import UpdateFood from "../pages/UpdateFood";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Favorites from "../pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index:true,
            path: "profile",
            element: <Profile></Profile>,
          },
          {
            path: "orders",
            element: (
              <PrivateRoute>
                <MyOrders></MyOrders>
              </PrivateRoute>
            ),
          },
          {
            path: "favorites",
            element: (
              <PrivateRoute>
                <Favorites></Favorites>
              </PrivateRoute>
            ),
          },
          {
            path: "settings",
            element: (
              <PrivateRoute>
                <Settings></Settings>
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
        loader: () =>
          fetch("https://b11a11-server-side-sariakhatun.vercel.app/foods"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/singleFood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) =>
          fetch(
            `https://b11a11-server-side-sariakhatun.vercel.app/foods/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/foodPurchase",
        element: (
          <PrivateRoute>
            <FoodPurchase></FoodPurchase>
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myFood",
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },

      //   {
      //     path: "/updatePost/:id",
      //     element: (
      //       <PrivateRoute>
      //         <UpdateFood></UpdateFood>
      //       </PrivateRoute>
      //     ),
      //      loader:({params})=>fetch(`https://b11a11-server-side-sariakhatun.vercel.app/foods/${params.id}`)

      //   },

      {
        path: "/updatePost/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const auth = getAuth();

          // Wait until Firebase auth state is ready
          const user = await new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
              unsubscribe(); // clean up
              resolve(user);
            });
          });

          if (!user) {
            throw new Response("Unauthorized", { status: 401 });
          }

          const token = await user.getIdToken();

          const res = await fetch(
            `https://b11a11-server-side-sariakhatun.vercel.app/foods/${params.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!res.ok) {
            throw new Response(res.statusText, { status: res.status });
          }

          return res.json();
        },
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
