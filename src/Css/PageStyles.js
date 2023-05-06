import styled from "styled-components";
import { whiteColor } from "./Variables";

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.hasError ? "center" : "start")};
  flex-direction: column;
  width: 100%;
  min-height: 85vh;
  padding-bottom: 20px;
  gap: 15px;
`;

export const PageInnerContainer = styled.div`
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