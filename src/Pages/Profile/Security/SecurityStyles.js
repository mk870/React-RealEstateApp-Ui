import {
  mainThemeColor,
  redColor,
  whiteColor,
} from "Css/Variables";
import { opacityAnimation } from "components/PropertyDetails/TaxHistory/TaxHistoryStyles";
import styled from "styled-components";

export const container = styled.div`
  animation: ${opacityAnimation} 0.5s;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 900px;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 1500px) {
    width: 100%;
  }
`;
export const wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
`;
export const changePassword = styled.p`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${mainThemeColor};
  color: ${whiteColor};
  font-size: 14px;
  margin: 0;
  padding: 7px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const deleteAccount = styled.p`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${redColor};
  color: ${whiteColor};
  font-size: 14px;
  margin: 0;
  padding: 7px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
