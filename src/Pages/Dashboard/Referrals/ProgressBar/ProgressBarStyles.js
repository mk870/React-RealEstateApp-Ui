import { backgroundColor, secondaryThemeColor } from "Css/Variables";
import styled, { css, keyframes } from "styled-components";

const slide = (percentage) => {
  return keyframes`
  0% { width:0%}
  100% { width:${percentage};}
`;
};

const slideAnimation = (width)=>{
  return css`
  animation: ${slide(width)} 1.2s ease;
  `
}

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
export const text = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: ${secondaryThemeColor};
`;

export const barContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${backgroundColor};
  height: 8px;
  border-radius: 5px;
`;

export const bar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({ percentage }) => slideAnimation(`${percentage}%`)};
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${({ barcolor }) => barcolor};
  left: 0;
  border-radius: 5px;
`;
