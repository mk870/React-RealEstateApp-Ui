import { secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const containter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  margin-top: 10px;
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const toggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
`;
export const title = styled.p`
  display: flex;
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
export const text = styled.p`
  display: flex;
  color: ${secondaryThemeColor};
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;