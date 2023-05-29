import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  z-index: 15;
  .date-picker {
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 7px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.26px;
    color: ${secondaryThemeColor};
    outline: none;
    border: 1px solid ${secondaryThemeColor};
  }
`;

export const label = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${mainThemeColor};
  @media (max-width: 600px) {
    font-size: 12;
  }
`;
