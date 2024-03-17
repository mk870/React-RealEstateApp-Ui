import { redColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: ${(props) =>
    props.selectSize === "large" ? "flex-start" : "center"};
  justify-content: start;
  flex-direction: ${(props) =>
    props.selectSize === "large" ? "column" : "row"};
  box-sizing: border-box;
  .astricks {
    position: absolute;
    left: 101%;
    top: 25px;
  }
`;

export const label = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
`;
export const labelText = styled.p`
  font-size: 15px;
  color: ${secondaryThemeColor};
  margin: 0 0 5px 0;
  font-weight: bold;
  margin-right: ${(props) => (props.selectSize === "large" ? "0" : "5px")};
`;
export const textContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
`;
export const text = styled.p`
  font-size: 14px;
  color: black;
  margin: 0 0 0 10px;
`;
export const select = styled.select`
  border: ${({ isRequired }) =>
    isRequired ? `1px solid ${redColor}` : `1px solid ${secondaryThemeColor}`};
  min-width: ${(props) =>
    props.selectSize === "large"
      ? "90px"
      : (props) => (props.selectSize === "medium" ? "70px" : "50px")};
  min-height: ${(props) =>
    props.selectSize === "large"
      ? "30px"
      : (props) => (props.selectSize === "medium" ? "25px" : "25px")};
  border-radius: 5px;
  outline: none;
  color:${secondaryThemeColor};
`;
