import { redColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 15px;
  gap: 15px;
  @media (max-width: 600px) {
    padding: 20px 7px;
  }
`;
export const validationErrorWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  color: ${redColor};
  font-size: 13px;
  margin-top: -7px;
`;
export const validationErrorText = styled.span`
  text-align: center;
  color: ${redColor};
  font-size: 13px;
  margin-top: -7px;
`;
export const validationErrorGuidelines = styled.span`
  text-align: center;
  color: ${redColor};
  font-size: 14px;
  font-weight: bold;
`;
