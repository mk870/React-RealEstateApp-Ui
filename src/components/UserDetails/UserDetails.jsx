import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import { AppContext } from "../../Context/AppContext";
import { secondaryThemeColor } from "Css/Variables";
import DropDown from "./ProfileDropDown/DropDown";
import empytyProfile from "Assets/empty-profile.jpg";
import * as styled from "./UserDetailsStyles";

const UserDetails = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const {themeColor} = useSelector((state) => state.user.value);
  const profile = useSelector((state) => state.userProfile.value);
  const screenSize = useSelector((state) => state.screenSize.value);
  const navigate = useNavigate();
  const { accessToken } = useContext(AppContext);
  const getUserInitial = (userName) => {
    return userName.slice(0, 1);
  };
  const iconSize = 17;
  return (
    <styled.container>
      {!accessToken && (
        <styled.loginText onClick={() => navigate("login")}>
          Login
        </styled.loginText>
      )}
      {accessToken && (
        <styled.userInfoContainer>
          {!profile?.Photo ? (
            <styled.initials backGround={themeColor}>
              {getUserInitial(profile.FirstName)}
            </styled.initials>
          ) : (
            <styled.profilePhoto
              src={profile.Photo ? profile.Photo : empytyProfile}
              alt="pic"
            />
          )}
          {screenSize > 600 && <styled.name>{profile.FirstName}</styled.name>}
          {openDropDown ? (
            <BsChevronDown
              size={iconSize}
              color={secondaryThemeColor}
              onClick={() => setOpenDropDown((value) => !value)}
            />
          ) : (
            <BsChevronUp
              size={iconSize}
              color={secondaryThemeColor}
              onClick={() => setOpenDropDown((value) => !value)}
            />
          )}
        </styled.userInfoContainer>
      )}
      {openDropDown && accessToken && (
        <DropDown setOpenDropDown={setOpenDropDown} />
      )}
    </styled.container>
  );
};

export default UserDetails;
