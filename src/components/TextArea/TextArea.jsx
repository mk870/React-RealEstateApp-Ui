import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { redColor } from "Css/Variables";
import { FaAsterisk } from "react-icons/fa";

import * as styled from "./TextAreaStyles";

const TextArea = ({
  label,
  onChangeFunc,
  textAreaValue,
  handleOnKeyEnter,
  backgroundColor,
  hasFloatingLabel,
  size,
  isRequired,
}) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseLeave = () => {
    if (textAreaValue === "") {
      setHovered(false);
    } else {
      setHovered(true);
    }
  };
  const handleKeyUp = () => {
    if (textAreaValue === "") {
      setHovered(false);
    }
  };
  const handleKeyDown = (eventValue) => {
    if (eventValue === "Enter" && handleOnKeyEnter !== null) handleOnKeyEnter();
    setHovered(true);
  };
  useEffect(() => {
    if (textAreaValue === "") setHovered(false);
    else setHovered(true);
  }, [textAreaValue]);
  return (
    <styled.container textAreaSize={size} isRequired={isRequired}>
      {hasFloatingLabel && (
        <styled.textAreaLabel
          hovered={hovered}
          backgroundColor={backgroundColor}
        >
          {label}
        </styled.textAreaLabel>
      )}
      {isRequired && (
        <FaAsterisk className="astricks" fontSize={8} color={redColor} />
      )}
      <styled.textArea
        onChange={(e) => onChangeFunc(e.target.value)}
        value={textAreaValue}
        spellCheck="false"
        autoCorrect="off"
        autoComplete="off"
        placeholder={hasFloatingLabel ? undefined : label}
        //type="text"
        onMouseEnter={() => setHovered(true)}
        onKeyDown={(e) => handleKeyDown(e.key)}
        onKeyUp={handleKeyUp}
        onMouseLeave={handleMouseLeave}
        backgroundColor={backgroundColor}
        hasFloatingLabel={hasFloatingLabel}
        isRequired={isRequired}
      />
    </styled.container>
  );
};

export default TextArea;
