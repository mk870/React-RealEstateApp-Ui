import { whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: 200ms ease-in-out;
  border-radius: 10px;
  z-index: 300;
  width: 300px;
  min-height: 100px;
  background-color: ${whiteColor};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 0px;
  @media (max-width: 600px) {
    min-height: 70px;
    padding: 5px 0px;
  }
`;
export const text = styled.p`
  margin: 10px;
  font-size: 14px;
  font-weight: bold;
  color: black;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const btnContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
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
