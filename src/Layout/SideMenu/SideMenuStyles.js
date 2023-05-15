import styled, { css, keyframes } from "styled-components";
import { mainThemeColor, whiteColor } from "../../Css/Variables";

const slideIn = keyframes`
  0% { width:70px;}
  100% { width:220px;}
`;

const slideOut = keyframes`
  0% { width:220px;}
  100% { width:70px;}
`;
const slideInAnimation = css`
  animation: ${slideIn} 0.5s ease;
`;
const slideOutAnimation = css`
  animation: ${slideOut} 0.5s ease;
`;

export const container = styled.div`
  ${({ shrinkMenuSize }) => !shrinkMenuSize && slideInAnimation};
  ${({ shrinkMenuSize }) => shrinkMenuSize && slideOutAnimation};
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: ${({ shrinkMenuSize }) => (shrinkMenuSize ? "70px" : "220px")};
  bottom: 0;
  top: 0;
  position: fixed;
  z-index: 100;
  background-color: ${whiteColor};
`;

export const arrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 35px;
  color: ${whiteColor};
  background-color: ${mainThemeColor};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;
