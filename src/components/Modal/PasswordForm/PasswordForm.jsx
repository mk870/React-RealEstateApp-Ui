import React, { useEffect, useState } from "react";

import * as styled from "./PasswordFormStyles";
import InputField from "components/InputField/InputField";
import { passwordGuideLines, passwordValidator } from "Utils/utils";

const PasswordForm = ({ setPassword, password }) => {
  const [isNewPasswordValidationError, setIsNewPasswordValidationError] =
    useState(false);
  const [isOldPasswordValidationError, setIsOldPasswordValidationError] =
    useState(false);
  const [isNewPasswordConfirmedError, setIsNewPasswordConfirmedError] =
    useState(false);
  useEffect(() => {
    if (password.new !== "") {
      passwordValidator(setIsNewPasswordValidationError, password.new);
    } else setIsNewPasswordValidationError(false);
  }, [password.new]);
  useEffect(() => {
    if (password.old !== "") {
      passwordValidator(setIsOldPasswordValidationError, password.old);
    } else setIsOldPasswordValidationError(false);
  }, [password.old]);
  useEffect(() => {
    if (password.new !== "") {
      if (password.confirm !== "") {
        if (password.confirm !== password.new)
          setIsNewPasswordConfirmedError(true);
        else setIsNewPasswordConfirmedError(false);
      } else setIsNewPasswordConfirmedError(false);
    } else setIsNewPasswordConfirmedError(false);
  }, [password.confirm, password.new]);
  return (
    <styled.container>
      <InputField
        label={"Old Password"}
        isRequired={false}
        isSearch={false}
        size={"large"}
        inputValue={password.old}
        onChangeFunc={(value) => setPassword({ ...password, old: value })}
        backgroundColor={"transparent"}
        handleOnKeyEnter={false}
        hasFloatingLabel={true}
      />
      {isOldPasswordValidationError && (
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
      <InputField
        label={"New Password"}
        isRequired={false}
        isSearch={false}
        size={"large"}
        inputValue={password.new}
        onChangeFunc={(value) => setPassword({ ...password, new: value })}
        backgroundColor={"transparent"}
        handleOnKeyEnter={false}
        hasFloatingLabel={true}
      />
      {isNewPasswordValidationError && (
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
      <InputField
        label={"Confirm Password"}
        isRequired={false}
        isSearch={false}
        size={"large"}
        inputValue={password.confirm}
        onChangeFunc={(value) => setPassword({ ...password, confirm: value })}
        backgroundColor={"transparent"}
        handleOnKeyEnter={false}
        hasFloatingLabel={true}
      />
      {isNewPasswordConfirmedError && (
        <styled.validationErrorText>
          {"confirmed password not identical to the new one"}
        </styled.validationErrorText>
      )}
    </styled.container>
  );
};

export default PasswordForm;
