import { secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 20px 10px;
  background-color: ${whiteColor};
  width: 100%;
  border-radius: 7px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 410px) {
    text-align: center;
  }
`;
export const headerText = styled.p`
  font-size: 25px;
  color: black;
  font-weight: bold;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const subheaderText = styled.p`
  font-size: 15px;
  color: ${secondaryThemeColor};
  margin: 0;
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
export const mapImage = styled.img`
  width: auto;
  height: auto;
  border-radius: 7px;
  @media (max-width: 1240px) {
    width: 100%;
    height: auto;
  }
`;
