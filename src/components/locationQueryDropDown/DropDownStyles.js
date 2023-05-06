import {
  mainThemeColor,
  redColor,
  secondaryThemeColor,
  shadow,
  whiteColor,
} from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  background-color: ${whiteColor};
  box-sizing: border-box;
  padding: 5px 10px;
  position: absolute;
  box-shadow: ${shadow};
  z-index: 100;
  top: 105%;
  left: 0;
  right: 0;
  border-radius: 10px;
`;

export const option = styled.div`
  display: flex;
  align-items: center;
  justify-content: column;
  width: 100%;
  background-color: ${whiteColor};
  box-sizing: border-box;
  padding: 5px 10px;
  font-size: 14px;
  color: ${secondaryThemeColor};
  &:hover {
    background-color: ${mainThemeColor};
    color: ${whiteColor};
    cursor: pointer;
  }
  @media (max-width: 550px) {
   font-size: 14px;
  }
`;

export const errorText = styled.p`
margin:0;
font-size:14px;
color: ${redColor};
`
