import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as styled from "./LayoutStyles.js";
import Navbar from "./Navbar/Navbar.jsx";
import SideMenu from "./SideMenu/SideMenu.jsx";
import { setScreenSize } from "../Redux/Slices/ScreenSizeSlice.js";
import Footer from "./Footer/Footer.jsx";
import useQueryUserProfile from "HttpServices/Hooks/Backend/useQueryUserProfile.jsx";
import NotificationBar from "components/Notifications/NotificationBar.jsx";

const Layout = ({ children }) => {
  const [shrinkMenuSize, setShrinkMenuSize] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const notificationBarRef = useRef(null);
  const { error } = useQueryUserProfile();
  const dispatch = useDispatch();
  const screenSize = useSelector((state) => state.screenSize.value);
  useLayoutEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);
  useLayoutEffect(() => {
    if (screenSize) {
      if (screenSize <= 920) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    }
  }, [screenSize]);
  useEffect(() => {
    if (error && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [error, notificationBarRef]);
  return (
    <styled.container>
      {!mobileMenu && (
        <SideMenu
          shrinkMenuSize={shrinkMenuSize}
          setShrinkMenuSize={setShrinkMenuSize}
        />
      )}
      <styled.pageContainer
        mobileMenu={mobileMenu}
        shrinkMenuSize={shrinkMenuSize}
      >
        <Navbar mobileMenu={mobileMenu} />
        <styled.pageChildren>{children}</styled.pageChildren>
        <Footer />
      </styled.pageContainer>
      {error && (
        <NotificationBar
          message={error}
          type={"failed"}
          ref={notificationBarRef}
        />
      )}
    </styled.container>
  );
};

export default Layout;
