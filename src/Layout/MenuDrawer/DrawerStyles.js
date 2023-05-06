import styled from "styled-components";
import { whiteColor } from "../../Css/Variables";


export const DrawerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  background-color: ${whiteColor};
  position: fixed;
  left:0;
  top:0;
  bottom:0;
  width: 220px;
  z-index: 300;
  overflow-y:scroll;
  animation: moveInAnimation ease 0.6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes moveInAnimation {
    0% {
      transform: translateX(-60%);
    }
    100% {
      transform: translateX(0%);
    }
  }
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

