import { secondaryThemeColor } from "Css/Variables";
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
  border: 1px solid ${secondaryThemeColor};
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;
export const header = styled.p`
  margin: 0;
  color: black;
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const detailItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 5px;
`;
export const textContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 1px;
  width: 100%;
`;
export const text = styled.p`
  margin: 0;
  color: ${secondaryThemeColor};
  font-weight: bold;
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const title = styled.p`
  margin: 0;
  color: black;
  font-weight: bold;
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
