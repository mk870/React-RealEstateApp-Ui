import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { AppContext } from "Context/AppContext";
import { backendUrl } from "Utils/utils";
import { addNotifications } from "Redux/Slices/Notifications/NotificationsSlice";

const useFetchNotifications = ({
  setNotificationsResponse,
  notificationsResponse,
}) => {
  const { accessToken, deletedItemId, postedItem, updatedItem } =
    useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      axios
        .get(backendUrl + "notifications", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((data) => {
          setIsLoading(false);
          dispatch(addNotifications(data.data));
        })
        .catch((e) => {
          setIsLoading(false);
          if (e.message === "Request failed with status code 403") {
            navigate("/login");
          }
          if (e.message === "token has expired") navigate("/login");
          else
            setNotificationsResponse({
              ...notificationsResponse,
              message: e.message,
              type: "failed",
            });
        });
    } else setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, deletedItemId, postedItem, updatedItem]);
  return { isLoading };
};

export default useFetchNotifications;
