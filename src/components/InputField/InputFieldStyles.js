import styled, { css } from "styled-components";
import {
  mainThemeColor,
  secondaryThemeColor,
  whiteColor,
} from "../../Css/Variables";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: fit-content;
  width: ${(props) => (props.inputSize === "large" ? "100%" : "auto")};
  .input-icon {
    position: absolute;
    right: 10px;
  }
  .astricks{
    position: absolute;
    left: 101%;
    top: 0;
  }
`;

export const Input = styled.input`
  height: ${(props) =>
    props.inputSize === "large"
      ? "35px"
      : props.inputSize === "medium"
      ? "30px"
      : "25px"};
  width: ${(props) =>
    props.inputSize === "large"
      ? "auto"
      : props.inputSize === "medium"
      ? "250px"
      : props.inputSize === "small"
      ? "180px"
      : "130px"};
  border-radius: 7px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 0.26px;
  color: ${secondaryThemeColor};
  outline: none;
  border: ${(props) =>
    props.hasFloatingLabel
      ? `1px solid ${secondaryThemeColor}`
      : `1px solid ${secondaryThemeColor}`};
  padding-left: 10px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover {
    border: ${(props) =>
      props.hasFloatingLabel
        ? `1px solid ${mainThemeColor}`
        : `1px solid ${secondaryThemeColor}`};
    //background-color: ${(props) => props.backgroundColor};
  }
`;
export const InputLabel = styled.p`
  font-size: 15px;
  position: absolute;
  left: 10px;
  padding: 0px 3px 0px 3px;
  color: ${secondaryThemeColor};
  pointer-events: none;
  background-color: ${whiteColor};
  transition: all 200ms ease-in-out;
  ${(props) =>
    props.hovered &&
    css`
      color: ${mainThemeColor};
      transform: translateY(-20px);
      z-index: 2;
      background-color: ${whiteColor};
      padding: 0px 2px 0px 2px;
    `}
`;
