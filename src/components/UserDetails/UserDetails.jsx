import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import { AppContext } from "../../Context/AppContext";
import { secondaryThemeColor } from "Css/Variables";
import DropDown from "./ProfileDropDown/DropDown";
import * as styled from "./UserDetailsStyles";
import { userDataNullChecker } from "Utils/utils";

const UserDetails = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const user = useSelector((state) => state.user.value);
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
          {!userDataNullChecker(user.profilePhoto) && (
            <styled.initials backGround={user.themeColor}>
              {getUserInitial(user.firstName)}
            </styled.initials>
          )}
          {userDataNullChecker(user.profilePhoto) && (
            <styled.profilePhoto src={user.profilePhoto} alt="pic" />
          )}
          {screenSize > 600 && <styled.name>{user.firstName}</styled.name>}
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
