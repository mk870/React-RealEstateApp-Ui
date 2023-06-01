import { secondaryThemeColor, shadow, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  position: absolute;
  top: 56px;
  right: 0;
  width: 130px;
  background-color: ${whiteColor};
  z-index: 20;
  border-radius: 7px;
  box-shadow: ${shadow};
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
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const text = styled.p`
  font-size: 14px;
  margin: 0 0 0 10px;
`;
