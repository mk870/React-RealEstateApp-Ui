import { mainThemeColor, secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px;
  min-width: 400px;
  @media (max-width: 450px) {
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
export const propertyName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 12px;
  }
`;
export const propertyAddress = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: ${secondaryThemeColor};
  margin: 0;
  @media (max-width: 415px) {
    font-size: 12px;
  }
`;
export const salesAmount = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${mainThemeColor};
  margin: 0;
  @media (max-width: 415px) {
    font-size: 12px;
  }
`;
export const salesRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 4px;
  .dots {
    color: ${secondaryThemeColor};
  }
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    background-color: rgba(128, 129, 145, 0.5);
    .dots {
      color: ${whiteColor};
    }
    ${propertyName} {
      color: ${whiteColor};
    }
    ${propertyAddress} {
      color: ${whiteColor};
    }
    ${salesAmount} {
      color: ${whiteColor};
    }
  }
`;
export const viewAll = styled.p`
  font-size: 12px;
  font-weight: normal;
  background-color: ${mainThemeColor};
  color: ${whiteColor};
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid ${secondaryThemeColor};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${mainThemeColor};
    color: ${whiteColor};
  }
  @media (max-width: 415px) {
    font-size: 10px;
  }
`;

export const salesInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 10px;
`;
export const propertyImage = styled.img`
  width: 50px;
  height: 50px;
`;
export const propertyDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
`;
