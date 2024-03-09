import { whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  background-color: ${whiteColor};
  border-radius:7px;
  box-sizing: border-box;
  padding: 15px;
  @media (max-width:1320px) {
    width: 100%;
  }
`;

export const title = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;