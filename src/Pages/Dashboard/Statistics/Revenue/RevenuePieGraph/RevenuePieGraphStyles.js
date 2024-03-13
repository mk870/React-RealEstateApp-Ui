import { whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  background-color: ${whiteColor};
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius:7px;
`;
export const Title = styled.span`
font-size: 18px;
font-weight: bold;
color:black;
`
export const SubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: -15px;
  gap: 5px;
  width: 100%;
  height: 100%;
  background-color: ${whiteColor};
  box-sizing: border-box;
  border-radius:7px;
`;