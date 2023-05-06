import { secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  width:63%;
  gap: 10px;
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
