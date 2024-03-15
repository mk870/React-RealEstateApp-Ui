import { secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  background-color: ${whiteColor};
  border-radius: 7px;
  box-sizing: border-box;
  padding: 15px;
  @media (max-width: 1320px) {
    width: 100%;
  }
`;
export const subContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media (max-width: 1260px) {
    flex-direction: column;
  }
  @media (max-width: 1000px) {
    flex-direction: row;
  }
  @media (max-width: 920px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 560px) {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
  }
`;

export const mapContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 1260px) {
    height: 200px;
  }
  @media (max-width: 1000px) {
    height: 440px;
  }
  @media (max-width: 600px) {
    height: 340px;
  }
`;
export const title = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
export const text = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${secondaryThemeColor};
`;
export const Carousel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
`;
