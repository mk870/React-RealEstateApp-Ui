import { secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid ${secondaryThemeColor};
  min-width: 240px;
  box-sizing: border-box;
  padding: 7px;
  border-radius:7px;
  @media (max-width:500px) {
    min-width: 100%;
  }
`;

export const textContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
`;

export const title = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${secondaryThemeColor};
`;

export const number = styled.p`
  font-size: 18px;
  margin: 0;
  color: black;
  font-weight: bold;
`;
