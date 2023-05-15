import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaAsterisk } from "react-icons/fa";

import { redColor, secondaryThemeColor } from "../../Css/Variables";
import * as styled from "./InputFieldStyles";

const InputField = ({
  label,
  onChangeFunc,
  inputValue,
  isSearch,
  handleOnKeyEnter,
  backgroundColor,
  hasFloatingLabel,
  size,
  isRequired,
}) => {
  const [hovered, setHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseLeave = () => {
    if (inputValue === "") {
      setHovered(false);
    } else {
      setHovered(true);
    }
  };
  const handleKeyUp = () => {
    if (inputValue === "") {
      setHovered(false);
    }
  };
  const handleKeyDown = (eventValue) => {
    if (eventValue === "Enter" && handleOnKeyEnter !== null) handleOnKeyEnter();
    setHovered(true);
  };
  useEffect(() => {
    if (inputValue === "") setHovered(false);
  }, [inputValue]);

  const inputType = (label) => {
    if (label.toLowerCase() === "password") {
      if (showPassword) return undefined;
      else return "password";
    } else if (label === "max price(USD)") return "number";
    else if (label === "min price(USD)") return "number";
    else if (label === "min bathrooms") return "number";
    else if (label === "max bathrooms") return "number";
    else if (label === "min bedrooms") return "number";
    else if (label === "max bedrooms") return "number";
    else return undefined;
  };

  return (
    <styled.InputContainer inputSize={size} isRequired={isRequired}>
      {hasFloatingLabel && (
        <styled.InputLabel hovered={hovered} backgroundColor={backgroundColor}>
          {label}
        </styled.InputLabel>
      )}
      {label.toLowerCase() === "password" &&
        (showPassword ? (
          <BsEyeSlash
            className="input-icon"
            fontSize={22}
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <BsEye
            className="input-icon"
            fontSize={22}
            onClick={() => setShowPassword(!showPassword)}
          />
        ))}
      {isSearch && (
        <FiSearch
          fontSize={22}
          color={secondaryThemeColor}
          className="input-icon"
        />
      )}
      {isRequired && (
        <FaAsterisk className="astricks" fontSize={8} color={redColor} />
      )}
      <styled.Input
        onChange={(e) => onChangeFunc(e.target.value)}
        value={inputValue}
        spellCheck="false"
        autoCorrect="off"
        autoComplete="off"
        placeholder={hasFloatingLabel ? undefined : label}
        type={inputType(label)}
        onMouseEnter={() => setHovered(true)}
        onKeyDown={(e) => handleKeyDown(e.key)}
        onKeyUp={handleKeyUp}
        onMouseLeave={handleMouseLeave}
        backgroundColor={backgroundColor}
        hasFloatingLabel={hasFloatingLabel}
        inputSize={size}
        isRequired={isRequired}
      />
    </styled.InputContainer>
  );
};

export default InputField;
