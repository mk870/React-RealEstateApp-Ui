import {
  lightBackgroundColor,
  secondaryThemeColor,
} from "Css/Variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 7px 10px;
  border: 1px solid ${secondaryThemeColor};
  gap: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${lightBackgroundColor};
  }
`;

export const Text = styled.span`
  font-size: 14px;
  color: black;
`;
