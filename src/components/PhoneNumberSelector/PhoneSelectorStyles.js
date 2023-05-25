import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";


export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  z-index: 10;
  padding-bottom: 15px;
  .PhoneInput {
    border: 1px solid ${secondaryThemeColor};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    position: relative;
    box-sizing: border-box;
    padding: 3px;
    border-radius: 7px;
    .PhoneInputCountrySelectArrow{
    color: black;
  }
  }
  .PhoneInputInput {
    width: 100%;
    height: 17px;
    border: none;
    outline: none;
    padding-bottom: 10px;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: ${secondaryThemeColor};
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
