import { secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  border: 1px solid ${secondaryThemeColor};
  padding: 5px 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const text = styled.p`
  margin: 0;
  color: ${secondaryThemeColor};
  font-size: 14px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
