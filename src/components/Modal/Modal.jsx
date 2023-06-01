import React from "react";
import reactDom from "react-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

import * as styled from "./ModalStyles";
import Button from "components/Button/Button";
import PersonalForm from "./PersonalDetailsForm/PersonalForm";
import PasswordForm from "./PasswordForm/PasswordForm";
import Spinner from "components/Spinner/Spinner";
import { updateResource } from "HttpServices/Update/updateData";
import { dateConverter } from "Utils/utils";
import AddressForm from "./AddressForm/AddressForm";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import { storage } from "Firebase/config";

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
      if (type === "photo") {
        if (!profilePhoto) return;
        else {
          if (!user.Email) return;
          else {
            const imageRef = ref(storage, `${user.Email}/${profilePhoto.name}`);
            const imageListRef = ref(storage, `${user.Email}/`);
            uploadBytes(imageRef, profilePhoto)
              .then(() => {
                listAll(imageListRef)
                  .then((response) => {
                    response.items.forEach((item) => {
                      getDownloadURL(item)
                        .then((url) => {
                          if (url.includes(profilePhoto.name)) {
                            let data = { Photo: url };
                            updateResource(
                              "user",
                              data,
                              accessToken,
                              setIsLoading,
                              setHttpResponse,
                              httpResponse,
                              setUpdatedItem
                            );
                          }
                        })
                        .catch((e) => {
                          setHttpResponse({
                            ...httpResponse,
                            message: e.message,
                            type: "failed",
                          });
                        });
                    });
                  })
                  .catch((e) => {
                    setHttpResponse({
                      ...httpResponse,
                      message: e.message,
                      type: "failed",
                    });
                  });
              })
              .catch((e) => {
                setHttpResponse({
                  ...httpResponse,
                  message: e.message,
                  type: "failed",
                });
              });
          }
        }
      }
    } else navigate("/login");
  };
  const modalTitle = ()=>{
    if (type === "personal details") return "Edit Personal Details"
    if (type === "address details") return "Edit Address Details"
    if (type === "password") return "Change Password"
    else return "Edit Profile Photo"
  }
  return reactDom.createPortal(
    <>
      <styled.overlay onClick={() => setOpenModal((value) => !value)} />
      <styled.container>
        <styled.header>
          <styled.headerText>{modalTitle()}</styled.headerText>
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
          {type === "photo" && (
            <ProfilePhoto setProfilePhoto={setProfilePhoto} />
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
