import { secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

export const checkbox = styled.input`
  width: 15px;
  height: 15px;
  border: 1px solid ${secondaryThemeColor};
`;

export const label = styled.p`
  margin: 0 0 0 0;
  font-size: 13px;
  color: black;
  font-weight: bold;
`;