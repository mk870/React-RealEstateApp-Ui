import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

import * as styled from "Layout/Navbar/NotificationsDropDown/DropDownStyles";
import NotificationsList from "components/NofiticationsList/NotificationsList";

const Dropdown = ({ notifications, setOpenNotifications }) => {
  const dropDownRef = useRef(null);
  const handleClickOutside = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setOpenNotifications((value) => !value);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return document.removeEventListener("click", handleClickOutside, false);
  });
  return (
    <styled.container ref={dropDownRef}>
      <NotificationsList notifications={notifications} type={"dropdown"}/>
    </styled.container>
  );
};

export default Dropdown;
