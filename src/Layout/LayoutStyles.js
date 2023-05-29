import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  0% { margin-left:70px;}
  100% { margin-left:220px;}
`;

const slideOut = keyframes`
  0% { margin-left:220px;}
  100% { margin-left:70px;}
`;
const slideInAnimation = css`
  animation: ${slideIn} 0.5s ease;
`;
const slideOutAnimation = css`
  animation: ${slideOut} 0.5s ease;
`;

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  min-height: 99.5vh;
`;
export const pageContainer = styled.div`
  ${({ shrinkMenuSize }) => !shrinkMenuSize && slideInAnimation};
  ${({ shrinkMenuSize }) => shrinkMenuSize && slideOutAnimation};
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  min-height: 99.5vh;
  margin-left: ${({ mobileMenu, shrinkMenuSize }) =>
    mobileMenu ? "auto" : shrinkMenuSize ? "70px" : "220px"};
`;
export const pageChildren = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 2rem;
  flex:1;
  @media (max-width: 720px) {
    padding: 10px;
  }
`;
