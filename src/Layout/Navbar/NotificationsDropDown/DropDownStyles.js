import { shadow, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  position: absolute;
  gap:3px;
  top: 105%;
  right: 1%;
  width: 280px;
  min-height: 55px;
  max-height: 350px;
  overflow-y:scroll;
  background-color: ${whiteColor};
  z-index: 20;
  border-radius: 7px;
  box-shadow: ${shadow};
  @media (max-width: 600px){
    max-height: 250px;
  }
`;


