import React from "react";
import { useSelector } from "react-redux";

import * as styled from "./NotificationsStyles";
import NotificationsList from "components/NofiticationsList/NotificationsList";

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications.value);
  return (
    <styled.container>
      <NotificationsList notifications={notifications} type={"normal"}/>
    </styled.container>
  );
};

export default Notifications;
