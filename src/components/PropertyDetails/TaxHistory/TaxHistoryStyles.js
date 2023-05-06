import { secondaryThemeColor, shadow } from "Css/Variables";
import styled, { keyframes } from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const opacityAnimation = keyframes`
  0% { opacity:0;}
  100% { opacity: 1; }
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
export const notAvailable = styled.p`
  text-align: start;
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const record = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: ${shadow};
  border-radius: 10px;
  @media (max-width: 370px) {
    width: 100%;
  }
`;
export const row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;
export const textContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 1px;
`;
export const recordTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const text = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${secondaryThemeColor};
  margin: 0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
