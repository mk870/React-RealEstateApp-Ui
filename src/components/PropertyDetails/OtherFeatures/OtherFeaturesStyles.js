import styled from "styled-components";
import { opacityAnimation } from "../TaxHistory/TaxHistoryStyles";
import { secondaryThemeColor } from "Css/Variables";

export const container = styled.div`
  animation: ${opacityAnimation} 0.5s;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
export const title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${secondaryThemeColor};
  margin: 0;
`;
export const grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 600px){
    gap: 10px;
  }
`;
export const itemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  @media (max-width: 600px){
    gap: 10px;
  }
`;
export const item = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${secondaryThemeColor};
  margin: 0;
  border-radius: 5px;
  @media (max-width: 600px){
    font-size: 12px;
  }
`;
export const category = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 600px){
    font-size: 14px;
  }
`;
