import { secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-width: 230px;
  box-sizing: border-box;
  padding: 5px;
  position: relative;
  background-color: ${whiteColor};
  border-radius: 7px;
  @media (max-width: 420px) {
    min-width: 100%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const textContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding-left: 3px;
  border-left: 3px solid ${({ borderColor }) => borderColor};
`;
export const Change = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2px;
  width: 79px;
  font-size: 13px;
`;
export const title = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${secondaryThemeColor};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const number = styled.p`
  font-size: 18px;
  margin: 0;
  color: black;
  font-weight: bold;
`;
