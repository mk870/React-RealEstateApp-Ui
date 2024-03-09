import styled, { css, keyframes } from "styled-components";
import { whiteColor } from "../../Css/Variables";

const slideOut = keyframes`
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
`;
const slideIn = keyframes`
0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
`;
const openDrawerAnimation = css`
  animation: ${slideIn} 0.6s ease;
`;
const closeDrawerAnimation = css`
  animation: ${slideOut} 0.6s ease;
`;

export const DrawerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  background-color: ${whiteColor};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 220px;
  z-index: 300;
  overflow-y: scroll;
  ${({ drawerIsOpen }) =>
    drawerIsOpen ? openDrawerAnimation : closeDrawerAnimation}
`;

export const DrawerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: all;
`;
