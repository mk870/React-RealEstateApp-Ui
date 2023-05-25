import React from "react";
import reactDom from "react-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import * as styled from "./ModalStyles";
import Button from "components/Button/Button";
import PersonalForm from "./PersonalDetailsForm/PersonalForm";
import PasswordForm from "./PasswordForm/PasswordForm";
import Spinner from "components/Spinner/Spinner";
import { updateResource } from "HttpServices/Update/updateData";
import { dateConverter } from "Utils/utils";
import AddressForm from "./AddressForm/AddressForm";

const Modal = ({
  setOpenModal,
  type,
  isLoading,
  accessToken,
  setIsLoading,
  setHttpResponse,
  httpResponse,
}) => {
  const user = useSelector((state) => state.user.value);
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 22 : 17;
  const [personalDetails, setPersonalDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    bio: user.bio,
    phone: user.phone,
    dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth) : new Date(),
  });
  const [addressDetails, setAddressDetails] = useState({
    city: user.city,
    country: user.country,
    state: user.state,
    streetNumber: user.streetNumber,
    streetName: user.streetName,
  });
  const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto);
  const [passWord, setPassword] = useState({
    old: "",
    new: "",
    confirm: "",
  });
  const handleSave = () => {
    setIsLoading(true);
    if (type === "personal details") {
      let data = {
        firstName: personalDetails.firstName,
        lastName: personalDetails.lastName,
        bio: personalDetails.bio,
        phone: personalDetails.phone,
        dateOfBirth: dateConverter(personalDetails.dateOfBirth),
      };
      updateResource(
        "update",
        data,
        accessToken,
        setIsLoading,
        setHttpResponse,
        httpResponse
      );
      setPersonalDetails({
        ...personalDetails,
        firstName: "",
        lastName: "",
        bio: "",
      });
    }
    if (type === "password") {
      updateResource(
        "update",
        passWord,
        accessToken,
        setIsLoading,
        setHttpResponse,
        httpResponse
      );
      setPassword({
        ...passWord,
        old: "",
        new: "",
        confirm: "",
      });
    }
    if (type === "address details") {
      updateResource(
        "update",
        addressDetails,
        accessToken,
        setIsLoading,
        setHttpResponse,
        httpResponse
      );
      setAddressDetails({
        ...addressDetails,
        city: "",
        state: "",
        streetName: "",
        streetNumber: "",
        country: "",
      });
    }
  };
  return reactDom.createPortal(
    <>
      <styled.overlay onClick={() => setOpenModal((value) => !value)} />
      <styled.container>
        <styled.header>
          <styled.headerText>Edit Profile Photo</styled.headerText>
          <styled.iconContainer onClick={() => setOpenModal((value) => !value)}>
            <AiOutlineClose size={iconSize} />
          </styled.iconContainer>
        </styled.header>
        <styled.formContainer>
          {type === "personal details" && (
            <PersonalForm
              personalDetails={personalDetails}
              setPersonalDetails={setPersonalDetails}
            />
          )}
          {type === "password" && (
            <PasswordForm password={passWord} setPassword={setPassword} />
          )}
          {type === "address details" && (
            <AddressForm
              addressDetails={addressDetails}
              setAddressDetails={setAddressDetails}
            />
          )}
        </styled.formContainer>
        <styled.btnContainer>
          <Button
            buttonText={isLoading ? <Spinner /> : "save"}
            type={"click"}
            size={"medium"}
            onClickFunc={handleSave}
            color={"normal"}
          />
        </styled.btnContainer>
      </styled.container>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
