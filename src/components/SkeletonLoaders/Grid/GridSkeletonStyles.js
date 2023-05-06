import { whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  background-color:${whiteColor};
  box-sizing:border-box;
  padding:20px 10px;
  border-radius: 7px;
`;
export const grid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 15px;
  box-sizing: border-box;
  width: 100%;
`;