import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import {
  MdOutlineMapsHomeWork,
  MdOutlineRealEstateAgent,
  MdOutlineSell,
} from "react-icons/md";
import { BiBuildingHouse, BiLogIn, BiLogOut, BiHome } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";

import { AppContext } from "../../Context/AppContext";
import * as styled from "./MenuListStyles";
import logo from "../../Assets/logo.png";

const MenuList = ({ shrinkMenuSize }) => {
  const [clickedMenuListItem, setClickedMenuListItem] = useState("/");
  const [displayMenuText, setDisplayMenuText] = useState("auto");
  const { accessToken, setAccessToken } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const menuList = [
    {
      name: "Home",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <RxDashboard />,
    },
    {
      name: "Agents",
      path: "/agents",
      icon: <MdOutlineRealEstateAgent />,
    },
    {
      name: "Rental Properties",
      path: "/rental-properties",
      icon: <BiHome />,
    },
    {
      name: "Properties For Sale",
      path: "/properties-forsale",
      icon: <BiBuildingHouse />,
    },
    {
      name: "Sold Properties",
      path: "/properties-sold",
      icon: <MdOutlineSell />,
    },
  ];
  const watchList = [
    {
      name: "Rentals Watchlist",
      path: "/rentals-watchlist",
      icon: <HiOutlineHomeModern />,
    },
    {
      name: "Forsale Watchlist",
      path: "/properties-forsale-watchlist",
      icon: <MdOutlineMapsHomeWork />,
    },
    {
      name: "Agents Watchlist",
      path: "/agents-watchlist",
      icon: <IoPeopleOutline />,
    },
  ];
  const logoutOrLogin = {
    name: accessToken ? "Logout" : "Login",
    icon: accessToken ? <BiLogOut /> : <BiLogIn />,
  };
  const profile = {
    name: "Profile",
    path: "/profile",
    icon: <CgProfile />,
  };
  const handleLogOutOrLogin = () => {
    if (accessToken) {
      setAccessToken(null);
    }
    navigate("/login");
  };
  useEffect(() => {
    setClickedMenuListItem(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    if (shrinkMenuSize) {
      setTimeout(() => {
        setDisplayMenuText("none");
      }, 500);
    } else {
      setTimeout(() => {
        setDisplayMenuText("auto");
      }, 500);
    }
  }, [shrinkMenuSize]);
  return (
    <styled.MenuContainer>
      <styled.MenuLogo shrinkMenuSize={shrinkMenuSize}>
        {<img src={logo} alt="menu-logo" shrinkMenuSize={shrinkMenuSize} />}
      </styled.MenuLogo>
      <styled.menuList shrinkMenuSize={shrinkMenuSize}>
        {menuList.map((item) => (
          <styled.menuItem
            key={item.name}
            onClick={() => navigate(item.path)}
            shrinkMenuSize={shrinkMenuSize}
            tooltipContent = {item.name}
            clicked={item.path === clickedMenuListItem ? true : false}
          >
            <styled.menuItemText
              clicked={item.path === clickedMenuListItem ? true : false}
              shrinkMenuSize={shrinkMenuSize}
            >
              <div className="menu-icon">{item.icon}</div>
              {!shrinkMenuSize && (
                <styled.name displayValue={displayMenuText}>
                  {item.name}
                </styled.name>
              )}
            </styled.menuItemText>
          </styled.menuItem>
        ))}
        {watchList.map((item) => (
          <styled.menuItem
            key={item.name}
            onClick={() => navigate(item.path)}
            clicked={item.path === clickedMenuListItem ? true : false}
            shrinkMenuSize={shrinkMenuSize}
            tooltipContent = {(item.name)}
          >
            <styled.menuItemText
              clicked={item.path === clickedMenuListItem ? true : false}
              shrinkMenuSize={shrinkMenuSize}
            >
              <div className="menu-icon">{item.icon}</div>
              {!shrinkMenuSize && (
                <styled.name displayValue={displayMenuText}>
                  {item.name}
                </styled.name>
              )}
            </styled.menuItemText>
          </styled.menuItem>
        ))}
        <styled.menuItem
          onClick={() => navigate(profile.path)}
          clicked={profile.path === clickedMenuListItem ? true : false}
          shrinkMenuSize={shrinkMenuSize}
          tooltipContent = {profile.name}
        >
          <styled.menuItemText
            clicked={"/profile" === clickedMenuListItem ? true : false}
            shrinkMenuSize={shrinkMenuSize}
          >
            <div className="menu-icon">{profile.icon}</div>
            {!shrinkMenuSize && (
              <styled.name displayValue={displayMenuText}>
                {profile.name}
              </styled.name>
            )}
          </styled.menuItemText>
        </styled.menuItem>
        <styled.menuItem
          onClick={handleLogOutOrLogin}
          clicked={"/login" === clickedMenuListItem ? true : false}
          shrinkMenuSize={shrinkMenuSize}
          tooltipContent = {logoutOrLogin.name}
        >
          <styled.menuItemText
            clicked={"/login" === clickedMenuListItem ? true : false}
            shrinkMenuSize={shrinkMenuSize}
          >
            <div className="menu-icon">{logoutOrLogin.icon}</div>
            {!shrinkMenuSize && (
              <styled.name displayValue={displayMenuText}>
                {logoutOrLogin.name}
              </styled.name>
            )}
          </styled.menuItemText>
        </styled.menuItem>
      </styled.menuList>
    </styled.MenuContainer>
  );
};

export default MenuList;
