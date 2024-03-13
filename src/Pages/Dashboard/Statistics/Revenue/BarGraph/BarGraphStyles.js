import { secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: ${whiteColor};
  border-radius:7px;
  box-sizing: border-box;
  padding: 15px;
  @media (max-width:1320px) {
    width: 100%;
  }
`;
export const title = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
export const totalRevenueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const total = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${secondaryThemeColor};
  font-weight: bold;
`;

export const statistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
export const statisticsInnerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
`;

export const statisticsText = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${secondaryThemeColor};
`;
