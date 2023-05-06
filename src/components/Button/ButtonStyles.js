import styled from "styled-components";
import { mainThemeColor, redColor, whiteColor } from "../../Css/Variables";

export const ButtonField = styled.button`
  background-color: ${(props) =>
    props.btnColor === "danger" ? redColor : mainThemeColor};
  color: white;
  width: ${(props) => (props.size === "large" ? "100%" : "auto")};
  min-height: 30px;
  border: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  span {
    margin-left: 1px;
  }
  border-radius: 6px;
  font-size: 15px;
  font-weight: 700;
  &:hover {
    background-color: ${(props) =>
      props.btnColor === "normal"
        ? "rgba(71,91,232,0.8)"
        : "rgba(255, 39, 0,0.8)"};
    cursor: pointer;
  }
`;

export const text = styled.p`
  font-size: ${(props) => (props.size === "large" ? "auto" : "12px")};
  color: ${whiteColor};
  margin: 0;
`;
