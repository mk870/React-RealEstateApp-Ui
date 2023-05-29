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
import { useNavigate } from "react-router-dom";

const Modal = ({
  setOpenModal,
  type,
  isLoading,
  accessToken,
  setIsLoading,
  setHttpResponse,
  httpResponse,
  setUpdatedItem,
}) => {
  const user = useSelector((state) => state.userProfile.value);
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 22 : 17;
  const [personalDetails, setPersonalDetails] = useState({
    firstName: user.FirstName,
    lastName: user.LastName,
    bio: user.Bio,
    phone: user.Phone,
    dateOfBirth: user.DateOfBirth ? new Date(user.DateOfBirth) : new Date(),
  });
  const [addressDetails, setAddressDetails] = useState({
    city: user.City,
    country: user.Country,
    state: user.State,
    streetNumber: user.StreetNumber,
    streetName: user.StreetName,
  });
  const [profilePhoto, setProfilePhoto] = useState(user.Photo);
  const [passWord, setPassword] = useState({
    old: "",
    new: "",
    confirm: "",
  });
  const navigate = useNavigate();
  const handleSave = () => {
    if (accessToken) {
      setIsLoading(true);
      if (type === "personal details") {
        let data = {
          FirstName: personalDetails.firstName,
          LastName: personalDetails.lastName,
          Bio: personalDetails.bio,
          Phone: personalDetails.phone,
          DateOfBirth: dateConverter(personalDetails.dateOfBirth),
        };
        updateResource(
          "user",
          data,
          accessToken,
          setIsLoading,
          setHttpResponse,
          httpResponse,
          setUpdatedItem
        );
        setPersonalDetails({
          ...personalDetails,
          firstName: "",
          lastName: "",
          bio: "",
        });
      }
      if (type === "password") {
        let data = {
          OldPassword: passWord.old,
          NewPassword: passWord.new,
          ConfirmPassword: passWord.confirm,
        };
        updateResource(
          "user/password",
          data,
          accessToken,
          setIsLoading,
          setHttpResponse,
          httpResponse,
          setUpdatedItem
        );
        setPassword({
          ...passWord,
          old: "",
          new: "",
          confirm: "",
        });
      }
      if (type === "address details") {
        let data = {
          City: addressDetails.city,
          Country: addressDetails.country,
          State: addressDetails.state,
          StreetName: addressDetails.streetName,
          StreetNumber: addressDetails.streetNumber,
        };
        updateResource(
          "user",
          data,
          accessToken,
          setIsLoading,
          setHttpResponse,
          httpResponse,
          setUpdatedItem
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
    } else navigate("/login");
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
