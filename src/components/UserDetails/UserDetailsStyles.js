import styled from "styled-components";
import {
  mainThemeColor,
  secondaryThemeColor,
  whiteColor,
} from "../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const loginText = styled.p`
  font-size: 15px;
  padding: 7px 23px;
  border-radius: 5px;
  background-color: ${mainThemeColor};
  color: ${whiteColor};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 550px) {
    font-size: 12px;
    padding: 7px 12px;
  }
`;
export const userInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;
export const initials = styled.p`
  margin: 0;
  padding: 10px 12px;
  border-radius: 100%;
  text-transform: uppercase;
  background-color: ${({ backGround }) => (backGround ? backGround : "white")};
  color: ${whiteColor};
  margin-right: 10px;
  font-size: 14px;
  @media (max-width: 550px) {
    font-size: 12px;
    padding: 7px 9px;
    margin-right: 5px;
  }
`;
export const profilePhoto = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  margin-right: 2px;
  @media (max-width: 550px) {
    height: 30px;
    width: 30px;
  }
`;
export const name = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${secondaryThemeColor};
  margin-right: 10px;
  @media (max-width: 550px) {
    font-size: 11px;
    margin-right: 5px;
  }
`;
