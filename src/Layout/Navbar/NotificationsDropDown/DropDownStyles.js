import { shadow, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  position: absolute;
  gap: 3px;
  top: 105%;
  right: 1%;
  width: 280px;
  min-height: 55px;
  max-height: 350px;
  overflow-y: scroll;
  background-color: ${whiteColor};
  z-index: 20;
  border-radius: 7px;
  box-shadow: ${shadow};
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
    background-color: rgba(0,0,0,0.2);
  }
  @media (max-width: 600px) {
    max-height: 250px;
  }
`;
