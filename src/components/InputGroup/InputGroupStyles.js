import { secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
  box-sizing: border-box;
`;

export const inputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
`;
export const label = styled.p`
font-size: 15px;
  color: ${secondaryThemeColor};
  margin: 0 0 5px 0;
  font-weight: bold;
`