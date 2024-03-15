import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

import * as styled from "./NavbarStyles";
import UserDetails from "components/UserDetails/UserDetails";
import Drawer from "Layout/MenuDrawer/Drawer";
import Dropdown from "./NotificationsDropDown/Dropdown";
import { AppContext } from "Context/AppContext";
import InputField from "components/InputField/InputField";
import SearchDropDown from "components/locationQueryDropDown/DropDown";
import { whiteColor } from "Css/Variables";
import useFetchNotifications from "HttpServices/Hooks/Backend/useFetchNotifications";
import Spinner from "components/Spinner/Spinner";
import NotificationBar from "components/Notifications/NotificationBar";

const Navbar = ({ mobileMenu }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openSearchDropDown, setOpenSearchDropDown] = useState(false);
  const [city, setCity] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [notificationsResponse, setNotificationsResponse] = useState({
    message: "",
    type: "",
  });
  const screenSize = useSelector((state) => state.screenSize.value);
  const notifications = useSelector((state) => state.notifications.value);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const notificationBarRef = useRef(null);
  const { isLoading } = useFetchNotifications({
    setNotificationsResponse,
    notificationsResponse,
  });
  const { accessToken, setSearchLocation, searchLocation } =
    useContext(AppContext);
  const onNavigate = () => {
    if (city && stateCode) {
      setSearchLocation({
        ...searchLocation,
        city: city,
        stateCode: stateCode,
      });
      setCity("");
      setStateCode("");
      navigate(`/properties-forsale`);
    }
  };
  const headerText = () => {
    if (
      pathname === "/" ||
      pathname === "/dashboard" ||
      pathname === "/profile"
    ) {
      if (screenSize < 800) {
        return "";
      } else {
        return (
          <styled.headerText>
            Let's Find Your Comfort <span className="span">House</span>
          </styled.headerText>
        );
      }
    } else {
      if (screenSize < 400) {
        return "";
      } else
        return (
          <styled.headerText>
            Let's Find Your Comfort <span className="span">House</span>
          </styled.headerText>
        );
    }
  };
  const inputSize = () => {
    if (screenSize < 460 && screenSize > 360) {
      return "small";
    } else if (screenSize <= 360) {
      return "xsmall";
    } else return "medium";
  };
  useEffect(() => {
    if (city.length > 2) {
      setOpenSearchDropDown(true);
    } else {
      setOpenSearchDropDown(false);
    }
  }, [city]);
  useEffect(() => {
    if (notificationsResponse && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [notificationsResponse, notificationBarRef]);
  return (
    <styled.container mobileMenu={mobileMenu}>
      {mobileMenu && (
        <AiOutlineMenu
          color={"black"}
          size={screenSize < 550 ? 22 : 28}
          onClick={() => setOpenMobileMenu((value) => !value)}
        />
      )}
      <styled.section mobileMenu={mobileMenu}>
        {headerText()}
        {(pathname === "/" ||
          pathname === "/dashboard" ||
          pathname === "/profile") && (
          <styled.inputContainer>
            <InputField
              size={inputSize()}
              label={"City name"}
              isSearch={false}
              hasFloatingLabel={true}
              backgroundColor={"transparent"}
              onChangeFunc={(value) => {
                setCity(value);
              }}
              handleOnKeyEnter={onNavigate}
              inputValue={city}
            />
            <styled.search onClick={onNavigate}>
              <FiSearch
                fontSize={screenSize > 360 ? 17 : 15}
                color={whiteColor}
                className="input-icon"
              />
            </styled.search>
            {openSearchDropDown && (
              <SearchDropDown
                input={city}
                setOpenSearchDropDown={setOpenSearchDropDown}
                setCity={setCity}
                setStateCode={setStateCode}
              />
            )}
          </styled.inputContainer>
        )}
      </styled.section>
      {isLoading ? (
        <div style={{paddingRight:"5px"}}><Spinner /></div>
      ) : (
        <styled.notificationsContainer
          onClick={() => setOpenNotifications((value) => !value)}
        >
          <IoMdNotificationsOutline
            size={screenSize > 550 ? 28 : 22}
            className="notifications-icon"
          />
          {accessToken && notifications.length >= 1 && (
            <styled.notificationsCount>
              <span className="count">{notifications.length}</span>
            </styled.notificationsCount>
          )}
        </styled.notificationsContainer>
      )}
      <UserDetails />
      {openMobileMenu && <Drawer setOpenMobileMenu={setOpenMobileMenu} />}
      {openNotifications && (
        <Dropdown
          setOpenNotifications={setOpenNotifications}
          notifications={notifications}
        />
      )}
      {notificationsResponse.message && (
        <NotificationBar
          message={notificationsResponse.message}
          type={notificationsResponse.type}
          ref={notificationBarRef}
        />
      )}
    </styled.container>
  );
};

export default Navbar;
