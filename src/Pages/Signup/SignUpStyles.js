import styled from "styled-components";
import { lightMainThemeColor, redColor, shadow, whiteColor } from "../../Css/Variables";

export const SignupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
`;

export const SignupForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
`;

export const SignupFormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  background-color: ${whiteColor};
  width: 400px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 20px 20px;
  border-radius: 7px;
  box-shadow: ${shadow};
  @media (max-width: 600px) {
    width: 80%;
    text-align: center;
  }
  @media (max-width: 500px) {
    padding: 15px;
  }
`;
export const SignupHeaderText = styled.p`
  color: black;
  font-size: 22px;
  font-weight: 800;
  margin:10px 0;
`;
export const SignupText = styled.p`
  font-size: 13px;
`;
export const validationErrorWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  color: ${redColor};
  font-size: 13px;
  margin-bottom: 7px;
`;
export const validationErrorText = styled.span`
  text-align: center;
  color: ${redColor};
  font-size: 13px;
  margin-bottom: 7px;
`;
export const validationErrorGuidelines = styled.span`
  text-align: center;
  color: ${redColor};
  font-size: 14px;
  font-weight:bold;
`;
export const SignupTextSpan = styled.span`
  font-size: 13px;
  color: ${lightMainThemeColor};
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
export const SignupBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
