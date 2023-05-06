import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";
import { opacityAnimation } from "../TaxHistory/TaxHistoryStyles";

export const container = styled.div`
  animation: ${opacityAnimation} 0.5s;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media (max-width: 1260px) {
    width: 100%;
  }
`;
export const title = styled.p`
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  color: ${secondaryThemeColor};
`;
export const name = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
  .amount {
    font-size: 16px;
    font-weight: bold;
    color: ${mainThemeColor};
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const status = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${mainThemeColor};
  margin: 0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const row2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;
export const overviewWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 50%;
  gap: 10px;
  @media (max-width: 1120px) {
    width: 100%;
  }
`;
export const imageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 40%;
  gap: 10px;
  @media (max-width: 1120px) {
    width: 100%;
  }
`;
export const imageTitle = styled.p`
  font-size: 16px;
  color: black;
  margin: 0;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const image = styled.img`
  width: 300px;
  border-radius: 10px;
  @media (max-width: 350px) {
    width: 260px;
  }
`;
export const grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  @media (max-width: 1230px) {
    gap: 10px;
  }
  @media (max-width: 400px) {
    gap: 10px;
  }
`;
export const amennity = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
  font-weight: bold;
`;
export const amennityName = styled.p`
  font-size: 14px;
  color: ${secondaryThemeColor};
  margin: 0;
  .name {
    color: black;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const description = styled.p`
  font-size: 15px;
  color: ${secondaryThemeColor};
  margin: 0;
  width: 80%;
  @media (max-width: 1700px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
