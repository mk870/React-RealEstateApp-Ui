import React from "react";
import * as styled from "./ButtonStyles";

const Button = ({ buttonText, onClickFunc, type, size, color }) => {
  return (
    <styled.ButtonField onClick={onClickFunc} type={type} size={size} btnColor={color}>
      <styled.text size={size}>{buttonText}</styled.text>
    </styled.ButtonField>
  );
};

export default Button;
