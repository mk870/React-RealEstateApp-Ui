import styled from "styled-components";
import { secondaryThemeColor, whiteColor } from "../../Css/Variables";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  background-color: ${whiteColor};
  box-sizing: border-box;
  position: fixed;
  left: 30%;
  top: 20%;
  max-height: 400px;
  right: 30%;
  border-radius: 10px;
  z-index: 300;
  animation: moveInAnimation ease 0.6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes moveInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1500px) {
    left: 25%;
  top: 10%;
  right: 25%;
  }
  @media (max-width: 800px) {
    left: 10%;
    top: 10%;
    right: 10%;
  }
  @media (max-width: 500px) {
    max-height: 375px;
  }
`;

export const overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 300;
  pointer-events: all;
`;

export const header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid ${secondaryThemeColor};
`;
export const headerText = styled.p`
  margin: 0;
  font-size: 16px;
  color: black;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const iconContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${secondaryThemeColor};
  padding: 10px;
  &:hover {
    cursor: pointer;
    border-radius: 100%;
    background-color: #dee0df;
  }
  @media (max-width: 600px) {
    padding: 5px;
  }
`;
export const formContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius:100%;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: "inset 0 0 0.37rem rgba(0,0,0,0.00)";
    -webkit-appearance:none;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-appearance: none;
    background-color: rgba(0,0,0,0.3);
  }
`;
export const btnContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  border-top: 1px solid ${secondaryThemeColor};
  @media (max-width: 600px) {
    padding: 5px;
  }
`;
export const alertContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 600px) {
    padding: 5px;
  }
`;
