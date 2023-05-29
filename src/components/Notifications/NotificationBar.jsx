import React, { forwardRef, useImperativeHandle, useState } from "react";
import reactDom from "react-dom";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

import * as styled from "./NotificationBarStyles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "Context/AppContext";

const NotificationBar = forwardRef((props, ref) => {
  const [showNotificationBar, setShowNotificationBar] = useState(false);
  const navigate = useNavigate();
  const { setAccessToken } = useContext(AppContext);
  useImperativeHandle(ref, () => ({
    showPopup() {
      setShowNotificationBar((value) => !value);
      setTimeout(() => {
        setShowNotificationBar((value) => !value);
        if (props.message === "token has expired") {
          setAccessToken(null);
          navigate("/login");
        }
      }, 3500);
    },
  }));
  return reactDom.createPortal(
    <styled.Container type={props.type} show={showNotificationBar}>
      <styled.messageContainer>
        {props.type === "success" && (
          <FaRegCheckCircle
            size={18}
            className="notificationBar-icon success"
          />
        )}
        {props.type === "failed" && (
          <MdErrorOutline size={18} className="notificationBar-icon failed" />
        )}
        <styled.text type={props.type}>{props.message}</styled.text>
      </styled.messageContainer>
    </styled.Container>,
    document.getElementById("notificationBar")
  );
});

export default NotificationBar;
