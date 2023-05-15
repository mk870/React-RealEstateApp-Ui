import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const containter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
export const personalDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
export const poster = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 10px;
  border: 1px solid ${secondaryThemeColor};
`;
export const details = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 5px;
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
export const name = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
export const title = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const text = styled.p`
  display: flex;
  color: ${secondaryThemeColor};
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  .link {
    color: ${mainThemeColor};
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
`;
export const bio = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
export const specialitiesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
export const specialitiesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
`;
