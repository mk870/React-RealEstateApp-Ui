/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { backgroundColor } from "../../Css/Variables";
import {
  emailValidator,
  passwordGuideLines,
  passwordValidator,
} from "../../Utils/utils";
import * as styled from "./LoginStyles";
import Spinner from "../../components/Spinner/Spinner";
import { loginRequest} from "../../HttpServices/Post/postData";
import NotificationBar from "../../components/Notifications/NotificationBar";
import { AppContext } from "Context/AppContext";

const Login = () => {
  const [postResponse, setPostResponse] = useState({
    message: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const notificationBarRef = useRef(null);
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  const{setAccessToken}= useContext(AppContext)
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState(false);
  const [isEmailValidationError, setIsEmailValidationError] = useState(false);
  const navigate = useNavigate();
  const handleOnChangePassword = (value) => {
    setLoginUserData({
      ...loginUserData,
      password: value,
    });
  };
  const handleOnChangeEmail = (value) => {
    setLoginUserData({
      ...loginUserData,
      email: value,
    });
  };
  const handlePost = (e) => {
    e.preventDefault();
    if (!isEmailValidationError && !isPasswordValidationError) {
      setIsLoading(true);
      if (loginUserData.email !== "" && loginUserData.password !== "") {
        const userData = {
          Email: loginUserData.email,
          Password: loginUserData.password,
        };
        loginRequest(
          userData,
          setIsLoading,
          setPostResponse,
          setAccessToken,
          postResponse
        );
        setLoginUserData({ ...loginUserData, email: "", password: "" });
      } else if (loginUserData.email === "" && loginUserData.password !== "") {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email !== "" && loginUserData.password === "") {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email === "" && loginUserData.password === "") {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (loginUserData.password !== "") {
      passwordValidator(setIsPasswordValidationError, loginUserData.password);
    }
  }, [loginUserData.password]);
  useEffect(() => {
    if (loginUserData.email !== "") {
      emailValidator(setIsEmailValidationError, loginUserData.email);
    }
  }, [loginUserData.email]);
  useEffect(() => {
    if (postResponse && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [postResponse, notificationBarRef]);
  return (
    <styled.LoginWrapper>
      <styled.LoginFormWrapper>
        <styled.LoginForm onSubmit={(e) => handlePost(e)}>
          <styled.LoginHeaderText>Login</styled.LoginHeaderText>
          <InputField
            label={"Email"}
            onChangeFunc={handleOnChangeEmail}
            inputValue={loginUserData.email}
            isSearch={false}
            backgroundColor={backgroundColor}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
            size={"large"}
          />
          {isEmailValidationError && (
            <styled.validationErrorText>
              {"please enter valid email address"}
            </styled.validationErrorText>
          )}
          <InputField
            label={"Password"}
            onChangeFunc={handleOnChangePassword}
            inputValue={loginUserData.password}
            isSearch={false}
            backgroundColor={backgroundColor}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
            size={"large"}
          />
          {isPasswordValidationError && (
            <styled.validationErrorWrapper>
              <styled.validationErrorGuidelines>
                {"password guidelines:"}
              </styled.validationErrorGuidelines>
              {passwordGuideLines.map((guideline) => (
                <li key={guideline}>
                  <span>{guideline}</span>
                </li>
              ))}
            </styled.validationErrorWrapper>
          )}
          <styled.LoginText>
            you don't have an account?{" "}
            <styled.LoginTextSpan onClick={() => navigate("/signup")}>
              please signup here
            </styled.LoginTextSpan>
          </styled.LoginText>
          <styled.LoginBtnContainer>
            <Button
              onClickFunc={undefined}
              buttonText={isLoading ? <Spinner/> : "login"}
              type={"submit"}
              color={"normal"}
              size={"large"}
            />
          </styled.LoginBtnContainer>
        </styled.LoginForm>
      </styled.LoginFormWrapper>
      {postResponse.message && (
        <NotificationBar
          message={postResponse.message}
          type={postResponse.type}
          ref={notificationBarRef}
        />
      )}
    </styled.LoginWrapper>
  );
};

export default Login;
