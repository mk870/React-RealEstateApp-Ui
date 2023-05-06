import { secondaryThemeColor, shadow, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  position: absolute;
  top: 150%;
  left: -10%;
  right: 0;
  width: 130px;
  background-color: ${whiteColor};
  z-index: 20;
  border-radius: 7px;
  box-shadow: ${shadow};
  @media (max-width: 600px) {
    left: -140%;
  }
`;

export const listItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  color: ${secondaryThemeColor};
  padding: 10px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
export const text = styled.p`
  font-size: 14px;
  margin: 0 0 0 10px;
`;
