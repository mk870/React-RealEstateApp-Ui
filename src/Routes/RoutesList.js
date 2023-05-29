import React from "react";
import { Navigate } from "react-router-dom";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Verification from "../Pages/Verification/Verification";
import Agents from "../Pages/Agents/Agents";
import MyAgentsList from "../Pages/AgentsWatchlist/AgentsWatchlist";
import Profile from "../Pages/Profile/Profile";
import Property from "../Pages/Property/Property";
import Agent from "../Pages/Agent/Agent";
import Home from "../Pages/Home/Home";
import DashBoard from "../Pages/Dashboard/DashBoard";
import RentalPropertiesWatchlist from "Pages/RentalPropertiesWatchlist/RentalPropertiesWatchlist";
import RentalProperties from "Pages/RentalProperties/RentalProperties";
import PropertiesForsale from "Pages/PropertiesForSale/PropertiesForSale";
import PropertiesForsaleWatchlist from "Pages/PropertiesForSaleWatchlist/PropertiesForSaleWatchlist";
import SoldProperties from "Pages/SoldProperties/SoldProperties";

const RoutesList = (accessToken) => {
  const routes = [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/dashboard",
      element: <DashBoard />,
    },
    {
      path: "/agents",
      element: <Agents />,
    },
    {
      path: "/agents-watchlist",
      element:
        accessToken ? <MyAgentsList /> : <Navigate to={"/login"} />,
    },
    {
      path: "/rental-properties",
      element: <RentalProperties />,
    },
    {
      path: "/properties-forsale",
      element: <PropertiesForsale />,
    },
    {
      path: "/properties-sold",
      element: <SoldProperties />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/property/:propertyId",
      element: <Property />,
    },
    {
      path: "/rentals-watchlist",
      element:
        accessToken ? (
          <RentalPropertiesWatchlist />
        ) : (
          <Navigate to={"/login"} />
        ),
    },
    {
      path: "/properties-forsale-watchlist",
      element:
        accessToken  ? (
          <PropertiesForsaleWatchlist />
        ) : (
          <Navigate to={"/login"} />
        ),
    },
    {
      path: "/agent/:agentId",
      element: <Agent />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/verification/:token",
      element: <Verification />,
    },
  ];
  return { routes };
};

export default RoutesList;
