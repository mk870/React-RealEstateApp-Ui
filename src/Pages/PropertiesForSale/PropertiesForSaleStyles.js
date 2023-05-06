import { whiteColor } from "Css/Variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 7px;
  width:100%;
  height: 100%;
  box-sizing: border-box;
  background: ${whiteColor};
  border-radius: 10px;
`;