import { secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  min-width: 800px;
  @media (max-width: 880px) {
    min-width: 100%;
  }
`;

export const header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 16px;
  }
`;

export const section = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const text = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: ${secondaryThemeColor};
  margin: 0;
  @media (max-width: 415px) {
    font-size: 12px;
  }
`;

export const subHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const customerNumber = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 14px;
  }
`;
export const customerChange = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #12801c;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 12px;
  }
`;
