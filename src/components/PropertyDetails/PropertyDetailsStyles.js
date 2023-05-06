import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`;
export const row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  gap: 10px;
  @media(max-width:1260px){
    flex-direction: column;
  }
`;
export const row2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 60px;
  width: 100%;
  @media (max-width: 700px) {
    justify-content: space-between;
    gap: 3px;
  }
`;
export const link = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ active }) => (active ? "black" : secondaryThemeColor)};
  margin: 0;
  cursor: pointer;
  border-bottom: ${({ active }) =>
    active ? `2px solid ${mainThemeColor}` : "none"};
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 380px) {
    font-size: 12px;
  }
`;
