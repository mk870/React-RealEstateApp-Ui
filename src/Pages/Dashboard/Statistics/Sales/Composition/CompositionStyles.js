import { secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  background-color: ${whiteColor};
  border-radius:7px;
  box-sizing: border-box;
  padding: 15px;
  @media (max-width:1320px) {
    width: 100%;
  }
`;
export const Title = styled.span`
font-size: 18px;
font-weight: bold;
color: black;
`;

export const text = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${secondaryThemeColor};
`;