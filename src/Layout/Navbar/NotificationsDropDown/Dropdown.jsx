import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import {
  MdRealEstateAgent,
  MdDeleteForever,
  MdMapsHomeWork,
} from "react-icons/md";

import * as styled from "Layout/Navbar/NotificationsDropDown/DropDownStyles";
import { redColor } from "Css/Variables";
import { AppContext } from "Context/AppContext";

const Dropdown = ({ notifications, setOpenNotifications }) => {
  const { accessToken } = useContext(AppContext);
  const screenSize = useSelector((state) => state.screenSize.value);
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
      {!accessToken ? (
        <styled.NoNotificationstext>
          Please login to check your notifications
        </styled.NoNotificationstext>
      ) : notifications.length < 1 ? (
        <styled.NoNotificationstext>
          No notifications
        </styled.NoNotificationstext>
      ) : (
        notifications.map((item, index) => (
          <styled.listItem
            key={index}
            onClick={() => console.log("viewed", item.Viewed)}
          >
            {item.Action === "delete" ? (
              <MdDeleteForever
                size={screenSize > 550 ? 35 : 27}
                color={redColor}
              />
            ) : item.Type === "Agent" ? (
              <MdRealEstateAgent
                size={screenSize > 550 ? 35 : 27}
                color="green"
              />
            ) : (
              <MdMapsHomeWork size={screenSize > 550 ? 35 : 27} color="green" />
            )}
            <styled.textContainer>
              <styled.header>{item.Description}</styled.header>
              <styled.text>{item.Date}</styled.text>
              <styled.markAsRead>Mark as Read</styled.markAsRead>
            </styled.textContainer>
          </styled.listItem>
        ))
      )}
    </styled.container>
  );
};

export default Dropdown;
