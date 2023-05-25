import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AiFillPhone } from "react-icons/ai";

import * as styled from "./PhoneSelectorStyles";
import { secondaryThemeColor } from "Css/Variables";

const PhoneSelector = ({ label, phoneNumber, onChangeFunc }) => {
  return (
    <styled.container>
      <styled.label>
        {label}
        <AiFillPhone size={14} color={secondaryThemeColor} />:
      </styled.label>
      <PhoneInput
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={onChangeFunc}
        defaultCountry="US"
      />
    </styled.container>
  );
};

export default PhoneSelector;
