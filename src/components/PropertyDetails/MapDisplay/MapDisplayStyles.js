import { secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  gap: 20px;
`;
export const grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    gap: 10px;
  }
`;
export const item = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 10px;
`;
export const header = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const text = styled.p`
  font-size: 14px;
  color: ${secondaryThemeColor};
  font-weight: bold;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const mapContainer = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 15px;
  @media (max-width: 1700px) {
    height: 400px;
  }
  @media (max-width: 560px) {
    height: 340px;
  }
`;
export const marker = styled.img`
  width: 30px;
  height: 30px;
`;
