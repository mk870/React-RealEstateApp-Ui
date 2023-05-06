import styled, { css, keyframes } from "styled-components";
import {
  mainThemeColor,
  secondaryThemeColor,
  shadow,
  whiteColor,
} from "../../Css/Variables";

export const MenuContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100%;
  padding: 0px 10px 2px 10px;
  color: ${secondaryThemeColor};
  background-color: ${whiteColor};
  box-sizing: border-box;
  flex: 1;
  @media (max-width: 920px) {
    padding-top: 5px;
  }
`;
const moveDown = keyframes`
  0% { margin-top:-60px;}
  100% { margin-top:10px;}
`;

const moveUp = keyframes`
  0% { margin-top:10px;}
  100% { margin-top:-60px;}
`;
const moveDownAnimation = css`
  animation: ${moveDown} 0.2s ease;
`;
const moveUpAnimation = css`
  animation: ${moveUp} 0.8s ease 0s;
`;
const shiftIn = keyframes`
  0% { padding-left:5px;}
  100% { padding-left:0px;}
`;

const shiftOut = keyframes`
  0% { padding-left:0px;}
  100% { padding-left:5px;}
`;
const shiftInAnimation = css`
  animation: ${shiftIn} 1s ease;
`;
const shiftOutAnimation = css`
  animation: ${shiftOut} 1s ease;
`;
const fadeIn = keyframes`
  0% { opacity:0;}
  100% { opacity:1;}
`;

const fadeOut = keyframes`
  0% { opacity:1;}
  100% { opacity:0;}
`;
const fadeInAnimation = css`
  animation: ${fadeIn} 3.5s ease;
`;
const fadeOutAnimation = css`
  animation: ${fadeOut} 0.5s ease;
`;

export const MenuLogo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: start;
  margin-top: ${({ shrinkMenuSize }) => (shrinkMenuSize ? "0px" : "10px")};
  ${({ shrinkMenuSize }) => shrinkMenuSize && fadeOutAnimation}
  ${({ shrinkMenuSize }) => !shrinkMenuSize && fadeInAnimation}
      opacity: ${({ shrinkMenuSize }) => (shrinkMenuSize ? "0" : "1")};
  img {
    width: 120px;
    height: 80px;
  }
`;
export const menuList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100%;
  margin-top: ${({ shrinkMenuSize }) => (shrinkMenuSize ? "-60px" : "10px")};
  ${({ shrinkMenuSize }) => shrinkMenuSize && moveUpAnimation}
  ${({ shrinkMenuSize }) => !shrinkMenuSize && moveDownAnimation}
`;
export const MenuHeader = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px 0;
  @media (max-width: 920px) {
    font-size: 15px;
  }
`;
export const menuItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: ${({ shrinkMenuSize }) =>
    shrinkMenuSize ? "center" : "space-between"};
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin-bottom: 2px;
  font-size: 15px;
  ${({ shrinkMenuSize }) => shrinkMenuSize && shiftInAnimation}
  ${({ shrinkMenuSize }) => !shrinkMenuSize && shiftOutAnimation}
  padding-top: ${({ shrinkMenuSize }) => (shrinkMenuSize ? "5px" : "auto")};
  padding-left: ${({ shrinkMenuSize }) => (shrinkMenuSize ? "0px" : "5px")};
  background-color: ${(props) => (props.clicked ? mainThemeColor : whiteColor)};
  position: relative;
  &:hover {
    cursor: pointer;
    ${({ shrinkMenuSize, tooltipContent }) =>
      shrinkMenuSize &&
      css`
        &::before {
          content: '${tooltipContent}';
          position: absolute;
          top: -19px;
          left: -9px;
          right: 0;
          padding: 10px 5px;
          width: 85px;
          background-color: ${whiteColor};
          z-index: 2000;
          color: black;
          font-size: 10px;
          border-radius: 7px;
          box-shadow: ${shadow};
        }
      `};
  }
  border-radius: 7px;
  @media (max-width: 920px) {
    height: 35px;
    margin-bottom: 15px;
    font-size: 13px;
  }
`;
export const menuItemText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => (props.clicked ? whiteColor : secondaryThemeColor)};
  .menu-icon {
    font-size: 22px;
  }
  @media (max-width: 920px) {
    font-size: 14px;
    .menu-icon {
      font-size: 18px;
    }
  }
`;
export const name = styled.p`
  margin-left: 10px;
  display: ${({ displayValue }) => displayValue};
  @media (max-width: 920px) {
    font-size: 14px;
  }
`;

export const header = styled.p`
  font-size: 18px;
  margin: 0;
  @media (max-width: 920px) {
    font-size: 15px;
  }
`;
export const divider = styled.div`
  border-bottom: 1px solid ${secondaryThemeColor};
  height: 2px;
  width: 100%;
  margin-bottom: 10px;
`;
export const logoutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin-bottom: 2px;
  font-size: 15px;
  padding-left: 5px;
  background-color: ${(props) => (props.clicked ? mainThemeColor : whiteColor)};
  &:hover {
    cursor: pointer;
  }
  border-radius: 7px;
  @media (max-width: 920px) {
    height: 17px;
    margin-bottom: 15px;
    font-size: 14px;
  }
`;
