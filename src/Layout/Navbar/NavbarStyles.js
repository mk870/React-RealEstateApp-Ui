import styled from "styled-components";
import {
  mainThemeColor,
  redColor,
  secondaryThemeColor,
  whiteColor,
} from "../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ mobileMenu }) =>
    mobileMenu ? "space-between" : "start"};
  width: 100%;
  height: 80px;
  background-color: ${whiteColor};
  box-sizing: border-box;
  padding: 5px 10px;
  position: relative;
  @media (max-width: 550px) {
    padding: 15px 10px;
  }
`;
export const section = styled.div`
  color: ${secondaryThemeColor};
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 1;
  @media (max-width: 920px) {
    justify-content: center;
  }
`;
export const headerText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: ${secondaryThemeColor};
  .span {
    color: ${mainThemeColor};
  }
  @media (max-width: 550px) {
    font-size: 14px;
  }
`;

export const inputContainer = styled.div`
  width: auto;
  height: auto;
  margin-left: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${mainThemeColor};
  box-sizing: border-box;
  padding: 9px;
  border-radius: 5px;
  margin-left: 5px;
  &:hover{
    background-color: rgba(71,91,232,0.8);
    cursor: pointer;
  }
  @media (max-width: 460px) {
    padding: 7px;
  }
  @media (max-width: 360px) {
    margin-left: 2px;
  }
`;

export const notificationsContainer = styled.div`
  width: auto;
  height: auto;
  position: relative;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const notificationsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${redColor};
  border-radius: 100%;
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5%;
  right: -5%;
  padding: 2px;
  @media (max-width: 550px) {
    width: 12px;
    height: 12px;
  }
  .count {
    color: ${whiteColor};
    font-size: 11px;
    @media (max-width: 550px) {
      font-size: 10px;
    }
  }
`;
