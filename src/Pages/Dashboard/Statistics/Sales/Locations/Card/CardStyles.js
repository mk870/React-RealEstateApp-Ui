import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  border-radius: 7px;
  box-sizing: border-box;
  position: relative;
  .rightArrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    right: 10px;
    top: 25%;
    bottom: 50%;
    z-index: 10;
    padding: 4px;
    border-radius: 100%;
    background-color: ${mainThemeColor};
    &:hover {
      cursor: pointer;
    }
  }
  .leftArrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    left: 10px;
    top: 25%;
    bottom: 50%;
    z-index: 10;
    padding: 4px;
    border-radius: 100%;
    background-color: ${mainThemeColor};
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 1260px) {
    width: 300px;
  }
  @media (max-width: 700px) {
    width: 240px;
  }
  @media (max-width: 560px) {
    width: 300px;
  }
  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const cityImage = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 7px;
  @media (max-width: 1260px) {
    width: 300px;
    height: 160px;
  }
  @media (max-width: 1020px) {
    width: 100%;
    height: 200px;
  }
  @media (max-width: 430px) {
    height: 280px;
  }
  @media (max-width: 360px) {
    height: 200px;
  }
`;
export const details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
`;
export const column = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const Header = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  color: black;
  span {
    font-size: 14px;
    color: ${secondaryThemeColor};
    margin-right: 2px;
  }
`;
export const TypeText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

export const Text = styled.span`
  font-size: 13px;
  color: ${secondaryThemeColor};
`;
