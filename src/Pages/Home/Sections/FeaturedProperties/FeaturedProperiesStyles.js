import { mainThemeColor, secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
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
  justify-content: space-between;
  width: 100%;
  @media (max-width: 410px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: start;
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
export const pageLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  @media (max-width: 410px) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const pageLink = styled.p`
  margin: 0 5px 0 0;
  padding: 8px 7px;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(props) =>
    props.position === 0 ? mainThemeColor : whiteColor};
  color: ${(props) =>
    props.position === 0 ? whiteColor : secondaryThemeColor};
  cursor: pointer;
  @media (max-width: 410px) {
    font-size: 12px;
  }
`;
