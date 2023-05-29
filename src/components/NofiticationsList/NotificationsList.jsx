import React, { useContext, useState, useEffect, useRef } from "react";
import {
  MdDeleteForever,
  MdMapsHomeWork,
  MdSecurity,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

import { deleteResource } from "HttpServices/Delete/deleteResource";
import Spinner from "components/Spinner/Spinner";
import NotificationBar from "components/Notifications/NotificationBar";
import { AppContext } from "Context/AppContext";
import * as styled from "./NotificationsListStyles";
import { redColor } from "Css/Variables";
import { BsFillPersonFill } from "react-icons/bs";

const NotificationsList = ({ notifications, type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { accessToken, setDeletedItemId } = useContext(AppContext);
  const notificationBarRef = useRef(null);
  const [deleteResponse, setDeleteResponse] = useState({
    message: "",
    type: "",
  });
  const screenSize = useSelector((state) => state.screenSize.value);
  const handleDelete = (notification, e) => {
    setIsLoading(true);
    console.log(e);
    deleteResource(
      "notification",
      notification.id,
      accessToken,
      setIsLoading,
      setDeleteResponse,
      deleteResource,
      setDeletedItemId
    );
  };
  useEffect(() => {
    if (deleteResponse && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [notificationBarRef, deleteResponse]);
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
        notifications.map((notification, index) => (
          <styled.listItem key={index} type={type}>
            {notification.action === "Delete" ? (
              <MdDeleteForever
                size={screenSize > 550 ? 35 : 27}
                color={redColor}
              />
            ) : notification.type === "Agent" ? (
              <BsFillPersonFill
                size={screenSize > 550 ? 35 : 27}
                color="grey"
              />
            ) : notification.type === "Profile" ? (
              <CgProfile size={screenSize > 550 ? 35 : 27} color= "black" />
            ) : notification.type === "Password" ? (
              <MdSecurity size={screenSize > 550 ? 35 : 27} color="purple" />
            ) : (
              <MdMapsHomeWork size={screenSize > 550 ? 35 : 27} color="green" />
            )}
            <styled.textContainer type={type}>
              <styled.header type={type}>
                {notification.description}
              </styled.header>
              <styled.text type={type}>{notification.date}</styled.text>
              <styled.markAsRead
                onClick={(e) => handleDelete(notification, e)}
                type={type}
              >
                {isLoading ? <Spinner /> : "Mark as Read"}
              </styled.markAsRead>
            </styled.textContainer>
          </styled.listItem>
        ))
      )}
      {deleteResponse.message && (
        <NotificationBar
          message={deleteResponse.message}
          type={deleteResponse.type}
          ref={notificationBarRef}
        />
      )}
    </styled.container>
  );
};

export default NotificationsList;
