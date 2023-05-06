import styled from "styled-components";
import { opacityAnimation } from "../TaxHistory/TaxHistoryStyles";
import { secondaryThemeColor, shadow } from "Css/Variables";

export const container = styled.div`
  animation: ${opacityAnimation} 0.5s;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  flex-wrap: wrap;
`;

export const school = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  min-width: 320px;
  box-shadow: ${shadow};
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  @media (max-width: 420px) {
    width: 100%;
    min-width:auto;
  }
`;
export const attribute = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 10px;
`;

export const title = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
  .attribute_value {
    display: flex;
    color: ${secondaryThemeColor};
    font-size: 14px;
    font-weight: bold;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
