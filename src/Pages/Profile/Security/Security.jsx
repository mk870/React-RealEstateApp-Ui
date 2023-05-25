import React, { useState } from "react";
import { AiFillDelete, AiFillLock } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";

import * as styled from "./SecurityStyles";
import Modal from "components/Modal/Modal";
import Alert from "components/Alert/Alert";
import Spinner from "components/Spinner/Spinner";
import { AppContext } from "Context/AppContext";
import NotificationBar from "components/Notifications/NotificationBar";
import { deleteResource } from "HttpServices/Delete/deleteResource";

const Security = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const notificationBarRef = useRef(null);
  const [deleteResponse, setDeleteResponse] = useState({
    message: "",
    type: "",
  });
  const [updateResponse, setUpdateResponse] = useState({
    message: "",
    type: "",
  });
  const screenSize = useSelector((state) => state.screenSize.value);
  const user = useSelector((state) => state.user.value);
  const { accessToken } = useContext(AppContext);
  const iconSize = screenSize > 600 ? 20 : 14;
  const handleDelete = () => {
    setIsLoading(true);
    console.log("deleted");
    deleteResource(
      "delete",
      user.id,
      accessToken,
      setIsLoading,
      setDeleteResponse,
      deleteResponse
    );
  };
  useEffect(() => {
    if (deleteResponse && notificationBarRef.current) {
      setOpenAlert((value) => !value);
      notificationBarRef.current.showPopup();
    }
  }, [deleteResponse, notificationBarRef]);
  useEffect(() => {
    if (updateResponse && notificationBarRef.current) {
      setOpenModal((value) => !value);
      notificationBarRef.current.showPopup();
    }
  }, [updateResponse, notificationBarRef]);
  return (
    <styled.container>
      <styled.wrapper>
        <styled.changePassword onClick={() => setOpenModal((value) => !value)}>
          <AiFillLock
            size={iconSize}
            color="white"
            style={{ marginRight: "3px" }}
          />
          Change Password
        </styled.changePassword>
        <styled.deleteAccount onClick={() => setOpenAlert((value) => !value)}>
          <AiFillDelete
            size={iconSize}
            color="white"
            style={{ marginRight: "3px" }}
          />
          Delete Account
        </styled.deleteAccount>
      </styled.wrapper>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          type={"password"}
          isLoading={isLoading}
          accessToken={accessToken}
          setIsLoading={setIsLoading}
          httpResponse={updateResponse}
          setHttpResponse={setUpdateResponse}
        />
      )}
      {openAlert && (
        <Alert
          setOpenAlert={setOpenAlert}
          okButtonText={isLoading ? <Spinner /> : "Delete"}
          cancelButtontext={"Cancel"}
          handleOkFunc={handleDelete}
          handleCancelFunc={() => setOpenAlert((value) => !value)}
          alertText={"Are you sure you want to delete your account?"}
        />
      )}
      {deleteResponse.message && (
        <NotificationBar
          message={deleteResponse.message}
          type={deleteResponse.type}
          ref={notificationBarRef}
        />
      )}
      {updateResponse.message && (
        <NotificationBar
          message={updateResponse.message}
          type={updateResponse.type}
          ref={notificationBarRef}
        />
      )}
    </styled.container>
  );
};

export default Security;
