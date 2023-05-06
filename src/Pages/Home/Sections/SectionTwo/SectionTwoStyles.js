import { mainThemeColor, secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
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
export const poster = styled.img`
  height: 400px;
  width: 550px;
  border-radius: 5px;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    height: 280px;
  }
  @media (max-width: 360px) {
    height: 200px;
  }
`;
export const textContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
`;
export const heading = styled.p`
  font-size: 30px;
  color: black;
  font-weight: bolder;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
export const infoText = styled.p`
  color: ${secondaryThemeColor};
`;
export const feedbackContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const feedbackCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  padding: 0 10px;
`;
export const feedbackHeader = styled.p`
  font-size: 25px;
  color: ${mainThemeColor};
  font-weight: bold;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const feedbackText = styled.p`
  margin: 0;
  color: ${secondaryThemeColor};
  font-size: 15px;
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
