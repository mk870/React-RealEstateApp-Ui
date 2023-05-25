import React, { useContext, useEffect,useRef  } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

import * as styled from "./EditContainerStyles";
import { secondaryThemeColor } from "Css/Variables";
import Modal from "components/Modal/Modal";
import { AppContext } from "Context/AppContext";
import NotificationBar from "components/Notifications/NotificationBar";

const EditContainer = ({ type }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const notificationBarRef = useRef(null);
  const { accessToken } = useContext(AppContext);
  const [updateResponse, setUpdateResponse] = useState({
    message: "",
    type: "",
  });
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 20 : 15;
  useEffect(() => {
    if (updateResponse && notificationBarRef.current) {
      setOpenModal((value) => !value);
      notificationBarRef.current.showPopup();
    }
  }, [updateResponse, notificationBarRef]);
  return (
    <>
      <styled.container onClick={() => setOpenModal((value) => !value)}>
        <styled.text>edit</styled.text>
        <AiOutlineEdit size={iconSize} color={secondaryThemeColor} />
      </styled.container>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          type={type}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setHttpResponse={setUpdateResponse}
          httpResponse={updateResponse}
          accessToken={accessToken}
        />
      )}
      {updateResponse.message && (
        <NotificationBar
          message={updateResponse.message}
          type={updateResponse.type}
          ref={notificationBarRef}
        />
      )}
    </>
  );
};

export default EditContainer;
