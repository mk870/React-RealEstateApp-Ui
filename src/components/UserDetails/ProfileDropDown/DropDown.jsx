import React from "react";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { RxDashboard } from "react-icons/rx";

import * as styled from "components/UserDetails/ProfileDropDown/DropDownStyles";
import { AppContext } from "Context/AppContext";
import { secondaryThemeColor } from "Css/Variables";

const DropDown = ({ setOpenDropDown }) => {
  const { setAccessToken } = useContext(AppContext);
  const iconSize = 17;
  const navigate = useNavigate();
  const dropDownRef = useRef(null);
  const handleClickOutside = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setOpenDropDown((value) => !value);
    }
  };
  const handleLogOut = () => {
    setAccessToken(null)
    navigate("/login")
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return document.removeEventListener("click", handleClickOutside, false);
  });
  return (
    <styled.container ref={dropDownRef}>
      {
        <>
          <styled.listItem onClick={() => navigate("/profile")}>
            <CgProfile size={iconSize} color={secondaryThemeColor} />
            <styled.text>Edit Profile</styled.text>
          </styled.listItem>
          <styled.listItem onClick={() => navigate("/dashboard")}>
            <RxDashboard size={iconSize} color={secondaryThemeColor} />
            <styled.text>Dashboard</styled.text>
          </styled.listItem>
          <styled.listItem onClick={handleLogOut}>
            <BiLogOut size={iconSize} color={secondaryThemeColor} />
            <styled.text>Logout</styled.text>
          </styled.listItem>
        </>
      }
    </styled.container>
  );
};

export default DropDown;
