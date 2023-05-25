import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {
  MdDeleteForever,
  MdMapsHomeWork,
  MdRealEstateAgent,
} from "react-icons/md";

import * as styled from "./NotificationsStyles";
import { redColor } from "Css/Variables";
import { AppContext } from "Context/AppContext";

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications.value);
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 35 : 30;
  const { accessToken } = useContext(AppContext);
  return (
    <styled.container>
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
                size={iconSize}
                color={redColor}
              />
            ) : item.Type === "Agent" ? (
              <MdRealEstateAgent
                size={iconSize}
                color="green"
              />
            ) : (
              <MdMapsHomeWork size={iconSize} color="green" />
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

export default Notifications;
