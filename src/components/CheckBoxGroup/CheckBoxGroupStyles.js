import { secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  gap:15px;
`;

export const checkBoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 180px;
  //border: 1px solid red;
`;

export const header = styled.p`
font-size: 15px;
  color: ${secondaryThemeColor};
  margin: 0 0 5px 0;
  font-weight: bold;
`

export const group = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

